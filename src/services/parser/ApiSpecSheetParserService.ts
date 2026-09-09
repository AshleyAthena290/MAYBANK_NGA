import ExcelJS from 'exceljs';
import { createLogger } from '../logger.js';

const logger = createLogger();

export interface ApiSpecMetadata {
  apiName: string;
  apiDescription: string;
  method: string;
  url: string;
  messageType: string;
  requestHeaders: Array<{
    name: string;
    description: string;
    mandatory: boolean;
    sampleValue?: string;
  }>;
  requestBodyFields: Array<{
    name: string;
    type: string;
    description: string;
    parentField?: string;
    sampleValue?: string;
    constraints?: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number };
  }>;
  /** Path/query parameters from the sheet's "Request Parameter" section (e.g. "id" for a
   *  {id} path placeholder, or "domain"/"module"/"subModule" for query string params). Whether
   *  each one is a path or query param is decided later by checking the URL for a matching
   *  "{name}" token, rather than needing a separate column in the sheet for that distinction. */
  requestParameters: Array<{
    name: string;
    type: string;
    description: string;
    sampleValue?: string;
  }>;
  responseFields: Array<{ name: string; type: string; description: string; parentField?: string }>;
  requestSampleJson?: string;
  responseSampleJson?: string;
}

/**
 * Parses API specification sheets from Excel workbooks.
 * Extracts metadata, headers, request/response structure for BDD test case generation.
 */
export class ApiSpecSheetParserService {
  async parseSheet(filePath: string, sheetName: string): Promise<ApiSpecMetadata> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.worksheets.find((ws: ExcelJS.Worksheet) => ws.name === sheetName);
    if (!worksheet) {
      throw new Error(`Sheet '${sheetName}' not found in workbook`);
    }

    return this.parseWorksheet(worksheet);
  }

  private parseWorksheet(worksheet: ExcelJS.Worksheet): ApiSpecMetadata {
    const spec: ApiSpecMetadata = {
      apiName: '',
      apiDescription: '',
      method: '',
      url: '',
      messageType: 'JSON',
      requestHeaders: [],
      requestBodyFields: [],
      requestParameters: [],
      responseFields: [],
    };

    let currentSection: 'metadata' | 'request-headers' | 'request-body' | 'request-parameter' | 'response' | 'sample' = 'metadata';
    let isReadingFields = false;
    let fieldHeaderColumns: Record<string, number> = {};

    worksheet.eachRow({ includeEmpty: false }, (row: ExcelJS.Row, rowNumber: number) => {
      const values = this.rowToStringArray(row);
      if (values.length === 0) return;

      const firstCol = values[0]?.toLowerCase().trim() || '';

      // ──── Metadata rows ────
      if (firstCol === 'api name') {
        spec.apiName = values[1] || spec.apiName || '';
        return;
      }
      if (firstCol === 'service' || firstCol === 'service name') {
        spec.apiName = spec.apiName || values[1] || '';
        return;
      }
      if (firstCol === 'api description') {
        spec.apiDescription = values[1] || '';
        return;
      }
      if (firstCol === 'method') {
        spec.method = (values[1] || 'GET').toUpperCase();
        return;
      }
      if (firstCol === 'url') {
        spec.url = values[1] || '';
        return;
      }
      if (firstCol === 'message type') {
        spec.messageType = values[1] || 'JSON';
        return;
      }

      // ──── Request section ────
      if (firstCol === 'request' && values[1]?.toLowerCase().trim() === 'http header') {
        currentSection = 'request-headers';
        isReadingFields = false;
        return;
      }

      if (firstCol === 'request' && values[1]?.toLowerCase().trim() === 'http body') {
        currentSection = 'request-body';
        isReadingFields = false;
        return;
      }

      // "Request Parameter" is its own section (single-cell label, unlike "Request"/"HTTP Header"
      // which spans two cells) — previously unrecognized entirely, so this section's rows fell
      // through and got misread as body fields, corrupting the generated request body with things
      // like a stray "id" or "Request Parameter" junk entry.
      if (firstCol === 'request parameter') {
        currentSection = 'request-parameter';
        isReadingFields = false;
        return;
      }

      // Excludes rows that start a new section (Request Sample, Response, Response Sample) from
      // being misread as body/header field data — without this guard, a request-body/request-headers
      // section would greedily swallow the "Request Sample" row (and its full JSON blob) as if it
      // were a field's name/value, corrupting the generated body with the entire sample dumped in
      // as a single mangled field.
      const startsNewSection = firstCol === 'request sample' || firstCol.startsWith('response');
      if (
        (currentSection === 'request-headers' || currentSection === 'request-body' || currentSection === 'request-parameter') &&
        !startsNewSection
      ) {
        // Field header row
        if (values[0]?.toLowerCase() === 'name' || (values[0]?.toLowerCase() === 'request' && values[1]?.toLowerCase() === 'name')) {
          fieldHeaderColumns = this.buildColumnMap(values);
          isReadingFields = true;
          return;
        }

        // Field data row
        if (isReadingFields && fieldHeaderColumns['name'] !== undefined) {
          const field = this.parseFieldRow(values, fieldHeaderColumns);
          if (field && field.name && field.name.toLowerCase() !== 'no request body') {
            if (currentSection === 'request-headers') {
              spec.requestHeaders.push(field);
            } else if (currentSection === 'request-parameter') {
              spec.requestParameters.push(field);
            } else {
              spec.requestBodyFields.push(field);
            }
          }
        }
      }

      // ──── Request Sample section ────
      if (firstCol === 'request sample') {
        currentSection = 'sample';
        isReadingFields = false;
        spec.requestSampleJson = values[1] || '';
        return;
      }

      // ──── Response section ────
      if (firstCol === 'response' && (values[1]?.toLowerCase().trim() === 'name' || values[1]?.toLowerCase().trim() === 'field name')) {
        currentSection = 'response';
        fieldHeaderColumns = this.buildColumnMap(values.slice(1)); // Skip "Response" label
        isReadingFields = true;
        return;
      }

      if (currentSection === 'response' && !firstCol.startsWith('response')) {
        // Skip section headers but continue reading fields
        if (firstCol.toLowerCase() === 'name' || firstCol.toLowerCase() === 'field name') {
          fieldHeaderColumns = this.buildColumnMap(values);
          isReadingFields = true;
          return;
        }

        // Field data row - read any non-empty row that has a name
        if (isReadingFields && fieldHeaderColumns['name'] !== undefined && firstCol.trim().length > 0) {
          const field = this.parseFieldRow(values, fieldHeaderColumns);
          if (field && field.name && field.name.toLowerCase() !== 'no response body' && !field.name.toLowerCase().includes('response')) {
            spec.responseFields.push(field);
          }
        }
      }

      // ──── Response Sample section ────
      if (firstCol === 'response sample') {
        currentSection = 'sample';
        isReadingFields = false;
        spec.responseSampleJson = values[1] || '';
        
        // Try to extract fields from response sample JSON
        if (spec.responseSampleJson) {
          try {
            const jsonObj = JSON.parse(spec.responseSampleJson);
            const extractedFields = this.extractFieldsFromJson(jsonObj);
            // Add extracted fields if we don't have many response fields yet
            if (spec.responseFields.length <= 1) {
              spec.responseFields = extractedFields;
            }
          } catch (e) {
            // JSON parsing failed, continue with what we have
            logger.debug(`Failed to parse response sample JSON: ${e}`);
          }
        }
        return;
      }
    });

    return spec;
  }

  private rowToStringArray(row: ExcelJS.Row): string[] {
    return (row.values as Array<unknown>)
      .slice(1) // Skip first element (Excel is 1-indexed)
      .map((v) => this.cellToString(v))
      .slice(0, 10); // Limit to 10 columns
  }

  private cellToString(value: unknown): string {
    if (value === undefined || value === null) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (value instanceof Date) return value.toISOString();
    if (typeof value === 'object' && 'richText' in (value as any)) {
      return (value as any).richText.map((r: any) => r.text).join('').trim();
    }
    if (typeof value === 'object' && 'text' in (value as any)) {
      return (value as any).text || '';
    }
    return '';
  }

  private buildColumnMap(headerRow: string[]): Record<string, number> {
    const map: Record<string, number> = {};
    headerRow.forEach((header, idx) => {
      const normalized = header.toLowerCase().trim().replace(/\s+/g, ' ');
      if (normalized === 'name' || normalized === 'field name') map['name'] = idx;
      else if (normalized.includes('parent')) map['parent'] = idx;
      else if (normalized === 'type' || normalized === 'field type') map['type'] = idx;
      else if (normalized === 'mandatory' || normalized === 'required') map['mandatory'] = idx;
      else if (normalized.includes('description') || normalized.includes('remarks')) map['description'] = idx;
      // Constraint columns are optional — most sheets don't have these yet. If/when a sheet adds
      // a length or min/max column, this picks it up automatically with no further code changes.
      else if (normalized === 'min length' || normalized === 'minlength') map['minLength'] = idx;
      else if (normalized === 'max length' || normalized === 'maxlength' || normalized === 'length') map['maxLength'] = idx;
      else if (normalized === 'min value' || normalized === 'minvalue' || normalized === 'min') map['minValue'] = idx;
      else if (normalized === 'max value' || normalized === 'maxvalue' || normalized === 'max') map['maxValue'] = idx;
      // Sample/example value column is optional — used to populate real values in generated YAML
      // (headers, body fields, and path/query params) instead of leaving everything as "<value>".
      else if (normalized === 'sample value' || normalized === 'sample' || normalized === 'example' || normalized === 'example value') map['sampleValue'] = idx;
    });
    return map;
  }

  private parseFieldRow(
    values: string[],
    columnMap: Record<string, number>
  ): {
    name: string;
    description: string;
    mandatory: boolean;
    type: string;
    parentField?: string;
    sampleValue?: string;
    constraints?: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number };
  } | null {
    const nameIdx = columnMap['name'];
    if (nameIdx === undefined) return null;

    const name = values[nameIdx]?.trim() || '';
    if (!name) return null;

    const result: {
      name: string;
      description: string;
      mandatory: boolean;
      type: string;
      parentField?: string;
      sampleValue?: string;
      constraints?: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number };
    } = {
      name,
      type: columnMap['type'] !== undefined ? (values[columnMap['type']]?.trim() || 'String') : 'String',
      mandatory: columnMap['mandatory'] !== undefined 
        ? /^(yes|y|mandatory|required|true)$/i.test(values[columnMap['mandatory']] || '')
        : false,
      description: columnMap['description'] !== undefined ? values[columnMap['description']]?.trim() || '' : '',
    };

    if (columnMap['sampleValue'] !== undefined) {
      const sample = values[columnMap['sampleValue']]?.trim();
      // Treat empty, "-", "N/A" etc. as "no real sample provided" rather than a literal value.
      if (sample && !/^(-|n\/a|na|none)$/i.test(sample)) {
        result.sampleValue = sample;
      }
    }

    if (columnMap['parent'] !== undefined) {
      const parentValue = values[columnMap['parent']]?.trim();
      if (parentValue) {
        result.parentField = parentValue;
      }
    }

    const constraints: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number } = {};
    if (columnMap['minLength'] !== undefined) {
      const value = this.parseNumericConstraint(values[columnMap['minLength']]);
      if (value !== undefined) constraints.minLength = value;
    }
    if (columnMap['maxLength'] !== undefined) {
      const value = this.parseNumericConstraint(values[columnMap['maxLength']]);
      if (value !== undefined) constraints.maxLength = value;
    }
    if (columnMap['minValue'] !== undefined) {
      const value = this.parseNumericConstraint(values[columnMap['minValue']]);
      if (value !== undefined) constraints.minValue = value;
    }
    if (columnMap['maxValue'] !== undefined) {
      const value = this.parseNumericConstraint(values[columnMap['maxValue']]);
      if (value !== undefined) constraints.maxValue = value;
    }
    if (Object.keys(constraints).length > 0) {
      result.constraints = constraints;
    }

    return result;
  }

  /** Parses a numeric constraint cell (e.g. "20", "20 chars", "max 20") into a plain number,
   *  stripping any non-numeric characters. Returns undefined for empty or unparseable cells. */
  private parseNumericConstraint(raw: string | undefined): number | undefined {
    if (!raw) return undefined;
    const trimmed = raw.trim();
    if (!trimmed) return undefined;
    const cleaned = trimmed.replace(/[^0-9.\-]/g, '');
    if (!cleaned) return undefined;
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : undefined;
  }

  /**
   * Extract individual fields from a JSON object by flattening it with dot notation
   * e.g., { data: { transferModes: [] } } becomes "data.transferModes"
   */
  private extractFieldsFromJson(
    obj: unknown,
    parentPath = '',
    depth = 0,
    maxDepth = 3
  ): Array<{ name: string; type: string; description: string; parentField?: string }> {
    const fields: Array<{ name: string; type: string; description: string; parentField?: string }> = [];
    
    if (depth > maxDepth || !obj || typeof obj !== 'object') {
      return fields;
    }

    if (Array.isArray(obj)) {
      // For arrays, add array notation and get type from first element
      // Don't include the array element notation in parentPath to avoid duplication
      const arrayElementPath = parentPath + '[]';
      if (obj.length > 0) {
        const type = this.getJsonValueType(obj[0]);
        // Only add the array wrapper field if it's at depth 1 (direct child)
        if (depth <= 1) {
          const field: { name: string; type: string; description: string; parentField?: string } = {
            name: '[]',
            type: `Array<${type}>`,
            description: 'Array of items',
          };
          if (parentPath) {
            field.parentField = parentPath;
          }
          fields.push(field);
        }
        // Recurse into array elements with the array element path
        fields.push(...this.extractFieldsFromJson(obj[0], arrayElementPath, depth + 1, maxDepth));
      }
    } else {
      // For objects, iterate through keys
      Object.entries(obj).forEach(([key, value]) => {
        const fieldPath = parentPath ? `${parentPath}.${key}` : key;
        const type = this.getJsonValueType(value);
        
        const field: { name: string; type: string; description: string; parentField?: string } = {
          name: key,
          type,
          description: `Field: ${key}`,
        };
        if (parentPath) {
          field.parentField = parentPath;
        }
        fields.push(field);

        // Recurse into nested objects and arrays
        if (value && typeof value === 'object' && depth < maxDepth) {
          fields.push(...this.extractFieldsFromJson(value, fieldPath, depth + 1, maxDepth));
        }
      });
    }

    return fields;
  }

  /**
   * Determine the JSON type of a value
   */
  private getJsonValueType(value: unknown): string {
    if (value === null) return 'Null';
    if (Array.isArray(value)) return value.length > 0 ? `Array<${this.getJsonValueType(value[0])}>` : 'Array';
    if (typeof value === 'object') return 'Object';
    if (typeof value === 'boolean') return 'Boolean';
    if (typeof value === 'number') return Number.isInteger(value) ? 'Integer' : 'Decimal';
    if (typeof value === 'string') return 'String';
    return 'Unknown';
  }
}