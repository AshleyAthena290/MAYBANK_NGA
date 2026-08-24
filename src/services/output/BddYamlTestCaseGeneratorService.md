# BDD YAML Test Case Generator

Source implementation: [BddYamlTestCaseGeneratorService.ts](./BddYamlTestCaseGeneratorService.ts)

## Purpose

`BddYamlTestCaseGeneratorService` converts an `ApiScenario` into one YAML file per test scenario. It also creates an `_index.yaml` file summarizing the scenarios for the API.

## Generation flow

The public `generateTestCases()` method builds scenarios in this order:

1. Positive happy-path scenario
2. Negative scenarios
3. Edge-case scenarios
4. Boundary and format-validation scenarios

Every returned scenario is later written to disk by `writeTestCasesToDisk()`.

## Scenario extension points

Add common test cases in the following private methods in the TypeScript source:

| Test type | Method | Typical examples |
|---|---|---|
| Successful request | `createPositiveScenario()` | Valid request and successful response |
| Invalid request | `createNegativeScenarios()` | Missing authentication, invalid token, invalid content type |
| Unusual runtime behavior | `createEdgeCaseScenarios()` | Duplicate correlation ID, timeout, empty body |
| Field limits and validation | `createBoundaryScenarios()` | Null field, missing field, minimum or maximum value, invalid format |

When adding a new scenario, make sure it has:

- A unique `id`.
- A descriptive `title` and `description`.
- Appropriate `tags` and `priority`.
- A modified `request` when the input must differ from the happy path.
- The expected status code in `response.successStatusCode`.
- One or more `assertions`.

Example scenario shape:

```ts
negativeScenarios.push({
  ...baseScenario,
  id: `${apiName}-015-invalid-beneficiary`,
  title: `${scenario.method} ${scenario.endpoint} - Invalid Beneficiary`,
  description: 'Invalid beneficiary details should be rejected',
  tags: ['negative', 'business-rule'],
  priority: 'P2',
  request: {
    ...baseScenario.request,
    body: {
      ...baseScenario.request.body,
      beneficiaryId: 'INVALID',
    },
  },
  response: {
    ...baseScenario.response,
    successStatusCode: 400,
    successDescription: 'Bad Request - Invalid beneficiary',
    expectedFields: [],
  },
  assertions: [
    {
      description: 'Response status code is 400',
      type: 'status',
      expectedValue: 400,
    },
  ],
});
```

## YAML output

`writeTestCasesToDisk()` creates this directory structure:

```text
<outputDir>/api/<feature-name>/<api-name>/
  <scenario-id>.yaml
  _index.yaml
```

The YAML content is produced by `renderYamlWithHeader()` using `js-yaml`.

The index file is produced by `generateIndexFile()` and contains:

- Feature name.
- API name.
- Total scenario count.
- Scenario IDs, titles, tags, and priorities.
- Generation timestamp.

## Automatic scenarios

Boundary scenarios are conditional. They are created only when the parsed request fields contain matching fields:

- Mandatory field: required-field null and missing scenarios.
- Numeric field: minimum and maximum numeric scenarios.
- String field: minimum and maximum length scenarios.
- Formatted field: invalid enum or format scenario.

Field classification is inferred by:

- `isNumericField()`
- `isStringField()`
- `isFormattedField()`

## Regenerating YAML files

For one worksheet:

```bash
npm run dev -- bdd-gen \
  --input "input/api/spec.xlsx" \
  --sheet "CreateTransfer" \
  --outDir "./artifacts"
```

For all worksheets:

```bash
node scripts/batch-bdd-gen.mjs \
  --input "input/api/spec.xlsx" \
  --outDir "./artifacts"
```

The batch script chooses the worksheets. This generator service chooses the scenarios. Therefore, add new test scenarios here rather than in `scripts/batch-bdd-gen.mjs`.

## Important implementation detail

The service generates YAML from TypeScript objects at runtime. Existing `.yaml` files under `artifacts/` are generated outputs and will be overwritten when the generator runs again. Permanent scenario changes should be made in [BddYamlTestCaseGeneratorService.ts](./BddYamlTestCaseGeneratorService.ts).
