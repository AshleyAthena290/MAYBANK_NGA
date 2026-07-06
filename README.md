# FSD Parser AI QA Workflow

Node.js and TypeScript project for parsing Functional Specification Design (FSD) Excel files into structured feature knowledge, then producing AI-ready requirement analysis, test assets, and Playwright automation scaffolding.

## Stack

- Node.js
- TypeScript (strict mode)
- exceljs
- Playwright
- commander
- zod
- pino
- vitest

## Development

```bash
npm install
npm run dev -- run --input ./FSD.xlsx --outDir ./artifacts
npm run build
npm test
```

## Quick Guides

Use these guides based on your workflow:

1. Command quick reference (FSD + API): [docs/QUICK_GUIDE_COMMANDS.md](docs/QUICK_GUIDE_COMMANDS.md)
2. API YAML generation and API test runner: [docs/HOW_TO_USE.md](docs/HOW_TO_USE.md)
3. Non-API FSD mobile UI flow: [docs/HOW_TO_USE_FSD_MOBILE_UI.md](docs/HOW_TO_USE_FSD_MOBILE_UI.md)

## Phase Plan

1. Project setup
2. Workbook parser
3. Feature model
4. Markdown generation
5. JSON generation
6. Prompt templates
7. Requirement analysis
8. Test layer classification
9. Playwright generator

Current status: Phase 1 completed scaffold.
