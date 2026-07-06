import ExcelJS from 'exceljs';
import { createLogger } from '../logger.js';

const logger = createLogger();

export interface ApiSpecMetadata {
  apiName: string;
  apiDescription: string;
  method: string;
  url: string;
  messageType: string;
  requestHeaders: Array<{ name: string; description: string; mandatory: boolean }>;
  requestBodyFields: Array<{ name: string; type: string; description: string }>;
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
      responseFields: [],
    };

    let currentSection: 'metadata' | 'request-headers' | 'request-body' | 'response' | 'sample' = 'metadata';
    let isReadingFields = false;
    let fieldHeaderColumns: Record<string, number> = {};

    worksheet.eachRow({ includeEmpty: false }, (row: ExcelJS.Row, rowNumber: number) => {
      const values = this.rowToStringArray(row);
      if (values.length === 0) return;

      const firstCol = values[0]?.toLowerCase().trim() || '';

      // ──── Metadata rows ────
      if (firstCol === 'api name') {
        spec.apiName = values[1] || '';
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

      if (currentSection === 'request-headers' || currentSection === 'request-body') {
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
    });
    return map;
  }

  private parseFieldRow(
    values: string[],
    columnMap: Record<string, number>
  ): { name: string; description: string; mandatory: boolean; type: string; parentField?: string } | null {
    const nameIdx = columnMap['name'];
    if (nameIdx === undefined) return null;

    const name = values[nameIdx]?.trim() || '';
    if (!name) return null;

    const result: { name: string; description: string; mandatory: boolean; type: string; parentField?: string } = {
      name,
      type: columnMap['type'] !== undefined ? (values[columnMap['type']]?.trim() || 'String') : 'String',
      mandatory: columnMap['mandatory'] !== undefined 
        ? /^(yes|y|mandatory|required|true)$/i.test(values[columnMap['mandatory']] || '')
        : false,
      description: columnMap['description'] !== undefined ? values[columnMap['description']]?.trim() || '' : '',
    };

    if (columnMap['parent'] !== undefined) {
      const parentValue = values[columnMap['parent']]?.trim();
      if (parentValue) {
        result.parentField = parentValue;
      }
    }

    return result;
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
