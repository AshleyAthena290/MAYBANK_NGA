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
  requestParameters: Array<{
    name: string;
    type: string;
    description: string;
    sampleValue?: string;
  }>;
  responseFields: Array<{ name: string; type: string; description: string; parentField?: string }>;
  requestSampleJson?: string;
  responseSampleJson?: string;
  /** Enumerated values a `{token}` URL placeholder actually takes on (e.g. "context-path" -> [casa,
   *  card, loan]), derived from concrete Request Sample examples (preferred) or a documented
   *  "{token} value:" list in the URL cell (fallback). Undefined when the URL has no placeholders
   *  or fewer than 2 real values were found for any of them — sheets with a single plain URL are
   *  completely unaffected. */
  placeholderEnums?: Record<string, string[]>;
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

  /** Matches a section-marker row against a label regardless of whether the sheet uses a single
   *  merged cell for it (col A = the label itself) or the two-column pattern used elsewhere in
   *  these sheets (col A = generic "Request"/"Response", col B = the actual label). Sheets aren't
   *  consistent about which pattern they use for a given section — even the same conceptual
   *  section (e.g. "Request Sample") uses different layouts across different sheets — so checking
   *  only one pattern risks the exact bug seen with "Request Parameter": the section never
   *  switches, and that row's real content (e.g. a full JSON sample) gets misread as if it were a
   *  field belonging to whatever section was previously active. */
  private matchesSectionLabel(values: string[], label: string): boolean {
    const col0 = values[0]?.toLowerCase().trim() || '';
    const col1 = values[1]?.toLowerCase().trim() || '';
    return col0 === label || col1 === label;
  }

  /** Extracts the cell value that follows a matched section label, correctly handling both
   *  layouts: single-cell ("Request Sample" in col A, content in col B) and two-column ("Request"
   *  in col A, "Request Sample" in col B, content in col C). Without this, a two-column sheet's
   *  actual sample content would be read one column too early (picking up the label text itself
   *  or an empty cell) rather than the real JSON. */
  private getSectionValue(values: string[], label: string): string {
    const col0 = values[0]?.toLowerCase().trim() || '';
    const col1 = values[1]?.toLowerCase().trim() || '';
    if (col0 === label) return values[1] || '';
    if (col1 === label) return values[2] || '';
    return '';
  }

  /** Reads a cell's text preserving leading whitespace (only trailing whitespace is trimmed) —
   *  used solely to detect indentation depth in the Name column for sheets that signal nesting
   *  via indentation rather than an explicit Parent column. The regular cellToString() trims
   *  leading whitespace too, which is correct for every other use but would destroy the only
   *  signal indentation-based sheets provide for which fields are nested under which parent. */
  private cellToStringKeepLeadingWhitespace(value: unknown): string {
    if (value === undefined || value === null) return '';
    if (typeof value === 'string') return value.replace(/\s+$/, '');
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (value instanceof Date) return value.toISOString();
    if (typeof value === 'object' && 'richText' in (value as any)) {
      return (value as any).richText.map((r: any) => r.text).join('').replace(/\s+$/, '');
    }
    if (typeof value === 'object' && 'text' in (value as any)) {
      return (value as any).text || '';
    }
    return '';
  }

  /** Given a field's raw (untrimmed) name and the running indent stack for its table, resolves
   *  which preceding field it's nested under (if any) and updates the stack. Standard
   *  indentation-parser approach: pop any stack entries at the same or deeper indent than the
   *  current row (they're siblings or done), whatever remains on top (if anything) is the parent.
   *  Mutates the passed-in stack array in place. */
  private resolveIndentParent(
    rawName: string,
    fieldName: string,
    stack: Array<{ depth: number; name: string }>
  ): string | undefined {
    const leadingWhitespace = rawName.match(/^[ \t]*/)?.[0] ?? '';
    const depth = leadingWhitespace.length;

    while (stack.length > 0 && stack[stack.length - 1]!.depth >= depth) {
      stack.pop();
    }

    const parent = stack.length > 0 ? stack[stack.length - 1]!.name : undefined;
    stack.push({ depth, name: fieldName });
    return parent;
  }

  /** Extracts the canonical single-line URL from a URL cell that may also contain extra
   *  documentation lines below it (an alternate endpoint variant, a "{token} value:" enumeration
   *  list, etc.) — sheets with a plain single-line URL cell are returned unchanged. */
  private extractCanonicalUrl(rawUrlText: string): string {
    const firstLine = rawUrlText.split(/\r?\n/).find((line) => line.trim().length > 0);
    return (firstLine ?? rawUrlText).trim();
  }

  /** Parses a "{token} value:" style enumeration block that may appear below the canonical URL in
   *  the same cell (e.g. "context-path value:\n1. casa\n2. card\n3. loan"). Returns undefined when
   *  no such block is present, so sheets without this pattern are unaffected. */
  private extractDocumentedPlaceholderValues(rawUrlText: string): { token: string; values: string[] } | undefined {
    const lines = rawUrlText.split(/\r?\n/);
    const headerIndex = lines.findIndex((line) => /^[\w-]+\s+value\s*:\s*$/i.test(line.trim()));
    if (headerIndex === -1) return undefined;

    const headerMatch = lines[headerIndex]!.trim().match(/^([\w-]+)\s+value\s*:\s*$/i);
    if (!headerMatch) return undefined;
    const token = headerMatch[1]!.toLowerCase();

    const values: string[] = [];
    for (let i = headerIndex + 1; i < lines.length; i++) {
      const match = lines[i]!.trim().match(/^\d+\.\s*(.+)$/);
      if (!match) break;
      const value = match[1]!.trim();
      if (value) values.push(value);
    }

    return values.length > 0 ? { token, values } : undefined;
  }

  /** Extracts each concrete example request line from a "Request Sample" block (e.g. "GET
   *  https://host/info/casa/v1/...?CASA_CIF=..."), tolerating the "https: //" spacing artifact
   *  these sheets sometimes have. Returns an empty array for the common case where Request Sample
   *  is a single JSON request body rather than one-line-per-example URLs. */
  private extractRequestSampleUrls(rawSampleText: string): string[] {
    const normalized = rawSampleText.replace(/https?\s*:\s*\/\//gi, (match) => match.replace(/\s+/g, ''));
    const urls: string[] = [];
    for (const line of normalized.split(/\r?\n/)) {
      const match = line.trim().match(/^(GET|POST|PUT|PATCH|DELETE)\s+(https?:\/\/\S+)/i);
      if (match?.[2]) urls.push(match[2]);
    }
    return urls;
  }

  /** Resolves the real enumerated values each `{token}` placeholder in the URL takes on, preferring
   *  values actually demonstrated by concrete Request Sample examples and falling back to the URL
   *  cell's own documented "{token} value:" list only when no examples are available. Returns
   *  undefined when the URL has no placeholders, or fewer than 2 real values were found for any of
   *  them — a single value means nothing to expand into extra positive scenarios. */
  private derivePlaceholderEnums(
    canonicalUrl: string,
    requestSampleUrls: string[],
    documented?: { token: string; values: string[] }
  ): Record<string, string[]> | undefined {
    const tokens = Array.from(canonicalUrl.matchAll(/\{([^}]+)\}/g)).map((m) => m[1]!);
    if (tokens.length === 0) return undefined;

    const result: Record<string, string[]> = {};
    for (const token of tokens) {
      const fromSamples = this.resolvePlaceholderValuesFromSamples(canonicalUrl, token, requestSampleUrls);
      if (fromSamples.length >= 2) {
        result[token] = fromSamples;
      } else if (documented && documented.token === token.toLowerCase() && documented.values.length >= 2) {
        result[token] = documented.values;
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }

  /** Builds a regex from the URL template with the given `{token}` replaced by a capture group
   *  (every other placeholder becomes a wildcard), then matches it against each sample URL's path
   *  to pull out the real value that token took on in that example. Query strings are stripped
   *  before matching since they legitimately vary per example and aren't part of the path template.
   *  Both sides are normalized to strip the "https: //" spacing artifact these sheets sometimes have
   *  around the scheme, purely for matching purposes — the stored spec.url itself is left untouched. */
  private resolvePlaceholderValuesFromSamples(canonicalUrl: string, token: string, sampleUrls: string[]): string[] {
    const normalizeScheme = (text: string): string => text.replace(/https?\s*:\s*\/\//gi, (match) => match.replace(/\s+/g, ''));
    const escapeRegex = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const templatePath = normalizeScheme(canonicalUrl).split('?')[0] || canonicalUrl;
    const pattern = escapeRegex(templatePath).replace(
      /\\\{([^}]+)\\\}/g,
      (_match, capturedToken) => (capturedToken === token ? '([^/?]+)' : '[^/?]+')
    );
    const regex = new RegExp(`^${pattern}`, 'i');

    const values: string[] = [];
    for (const sampleUrl of sampleUrls) {
      const path = normalizeScheme(sampleUrl).split('?')[0] || sampleUrl;
      const match = path.match(regex);
      if (match?.[1] && !values.includes(match[1])) {
        values.push(match[1]);
      }
    }
    return values;
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
    let requestIndentStack: Array<{ depth: number; name: string }> = [];
    let documentedPlaceholderValues: { token: string; values: string[] } | undefined;
    let requestSampleUrls: string[] = [];

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
        const rawUrlText = values[1] || '';
        spec.url = this.extractCanonicalUrl(rawUrlText);
        documentedPlaceholderValues = this.extractDocumentedPlaceholderValues(rawUrlText);
        return;
      }
      if (firstCol === 'message type') {
        spec.messageType = values[1] || 'JSON';
        return;
      }

      // ──── Request section ────
      // Each marker below tolerates both a single merged cell and the two-column pattern, since
      // sheets aren't consistent about which they use — even for the same conceptual section.
      if (this.matchesSectionLabel(values, 'http header')) {
        currentSection = 'request-headers';
        isReadingFields = false;
        return;
      }

      if (this.matchesSectionLabel(values, 'http body')) {
        currentSection = 'request-body';
        isReadingFields = false;
        return;
      }

      if (this.matchesSectionLabel(values, 'request parameter')) {
        currentSection = 'request-parameter';
        isReadingFields = false;
        return;
      }

      // Excludes rows that start a new section (Request Sample, Response, Response Sample) from
      // being misread as body/header field data — without this guard, a request-body/request-headers
      // section would greedily swallow the "Request Sample" row (and its full JSON blob) as if it
      // were a field's name/value, corrupting the generated body with the entire sample dumped in
      // as a single mangled field.
      const startsNewSection = this.matchesSectionLabel(values, 'request sample') || firstCol.startsWith('response');
      if (
        (currentSection === 'request-headers' || currentSection === 'request-body' || currentSection === 'request-parameter') &&
        !startsNewSection
      ) {
        // Field header row
        if (values[0]?.toLowerCase() === 'name' || (values[0]?.toLowerCase() === 'request' && values[1]?.toLowerCase() === 'name')) {
          fieldHeaderColumns = this.buildColumnMap(values);
          isReadingFields = true;
          requestIndentStack = [];
          return;
        }

        // Field data row
        if (isReadingFields && fieldHeaderColumns['name'] !== undefined) {
          const field = this.parseFieldRow(values, fieldHeaderColumns);

          if (field && field.name && this.looksLikeMalformedFieldName(field.name)) {
            if (!spec.requestSampleJson) {
              spec.requestSampleJson = field.name;
            }
          } else if (field && field.name && field.name.toLowerCase() !== 'no request body' && !this.isSentinelFieldName(field.name)) {
            if (fieldHeaderColumns['parent'] === undefined && !field.parentField) {
              const rawName = this.cellToStringKeepLeadingWhitespace(row.getCell(fieldHeaderColumns['name'] + 1).value);
              const parent = this.resolveIndentParent(rawName, field.name, requestIndentStack);
              if (parent) {
                field.parentField = parent;
              }
            }

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
      if (this.matchesSectionLabel(values, 'request sample')) {
        currentSection = 'sample';
        isReadingFields = false;
        spec.requestSampleJson = this.getSectionValue(values, 'request sample');
        requestSampleUrls = this.extractRequestSampleUrls(spec.requestSampleJson);
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
          if (field && field.name && field.name.toLowerCase() !== 'no response body' && !field.name.toLowerCase().includes('response') && !this.isSentinelFieldName(field.name) && !this.looksLikeMalformedFieldName(field.name)) {
            spec.responseFields.push(field);
          }
        }
      }

      // ──── Response Sample section ────
      if (this.matchesSectionLabel(values, 'response sample')) {
        currentSection = 'sample';
        isReadingFields = false;
        spec.responseSampleJson = this.getSectionValue(values, 'response sample');
        
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

    if (spec.url) {
      const enums = this.derivePlaceholderEnums(spec.url, requestSampleUrls, documentedPlaceholderValues);
      if (enums) spec.placeholderEnums = enums;
    }

    return spec;
  }

  /** True if a field's name is a common "no data" sentinel used in these sheets (e.g. a lone
   *  "None" row meaning "this API has no parameters/body/headers") rather than a real field —
   *  these should never be treated as an actual header/body/query field, since sending a literal
   *  "None=..." query string or header would be sent to the real API otherwise. */
  /** True if a candidate field's name looks like it's actually a JSON blob (or other malformed
   *  data) that leaked into the "Name" column, rather than a real field name — e.g. an unlabeled
   *  sample-JSON row (no section marker on that row at all, often from a merged-cell artifact)
   *  that section-boundary detection alone can't catch, since there's no label to detect in the
   *  first place. A real field name is always a short, single-line plain identifier; nothing
   *  legitimate starts with "{"/"[", spans multiple lines, or runs to hundreds of characters. */
  private looksLikeMalformedFieldName(name: string): boolean {
    const trimmed = name.trim();
    if (trimmed.length > 100) return true;
    if (/[\r\n]/.test(trimmed)) return true;
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) return true;
    return false;
  }

  private isSentinelFieldName(name: string): boolean {
    const normalized = name.toLowerCase().trim();
    return ['none', 'nil', 'n/a', 'na', '-', 'no parameters', 'no request parameter', 'no request parameters'].includes(normalized);
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