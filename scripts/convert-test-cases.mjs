#!/usr/bin/env node

/**
 * Convert API Test Cases from YAML to Markdown and Excel
 * 
 * Reads generated YAML scenario files and exports to:
 * - Markdown format (comprehensive document)
 * - Excel format (structured spreadsheet)
 * 
 * Usage:
 *   node scripts/convert-test-cases.mjs --input ./artifacts/p-t-local-transfer-ddd-api-spec-v1 --outDir ./artifacts [--name "API Name"]
 */

import fs from 'fs';
import path from 'path';
import { load as yamlLoad } from 'js-yaml';
import ExcelJS from 'exceljs';

// Parse command line arguments
const args = process.argv.slice(2);
let inputDir = '';
let outDir = './artifacts';
let apiName = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && i + 1 < args.length) {
    inputDir = args[i + 1];
    i++;
  } else if (args[i] === '--outDir' && i + 1 < args.length) {
    outDir = args[i + 1];
    i++;
  } else if (args[i] === '--name' && i + 1 < args.length) {
    apiName = args[i + 1];
    i++;
  }
}

if (!inputDir) {
  console.error('Error: --input argument is required');
  console.error('Usage: node convert-test-cases.mjs --input <path> [--outDir <dir>] [--name "API Name"]');
  process.exit(1);
}

function deriveApiNameFromYaml(directory) {
  const apiDir = path.join(directory, 'api');
  if (!fs.existsSync(apiDir)) return undefined;

  const files = fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.scenario.yaml'))
    .sort();

  if (files.length === 0) return undefined;

  const firstFile = path.join(apiDir, files[0]);
  const content = fs.readFileSync(firstFile, 'utf-8');
  const data = yamlLoad(content);

  return (
    data?.metadata?.service ||
    data?.metadata?.feature ||
    data?.feature ||
    data?.title?.split(' - ')[0]
  );
}

// Derive API name from YAML metadata or input directory if not provided
if (!apiName) {
  const serviceName = deriveApiNameFromYaml(inputDir);
  if (serviceName) {
    apiName = String(serviceName).replace(/[-_]+/g, ' ').trim();
  } else {
    const dirName = path.basename(inputDir);
    apiName = dirName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

// Function to read all YAML files
function readYamlFiles(directory) {
  const apiDir = path.join(directory, 'api');
  const files = fs.readdirSync(apiDir)
    .filter(f => f.endsWith('.scenario.yaml'))
    .sort();
  
  const testCases = [];
  for (const file of files) {
    const filePath = path.join(apiDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = yamlLoad(content);
    testCases.push(data);
  }
  
  return testCases;
}

// Function to generate Markdown
function generateMarkdown(testCases) {
  let markdown = `# ${apiName} - Test Cases

**Generated Date:** ${new Date().toISOString()}  
**Total Test Cases:** ${testCases.length}

---

## Table of Contents

`;

  // Generate TOC
  testCases.forEach((tc, index) => {
    markdown += `${index + 1}. [${tc.metadata.id} - ${tc.metadata.title}](#${tc.metadata.id.toLowerCase()})\n`;
  });

  markdown += '\n---\n\n';

  // Generate detailed test cases
  testCases.forEach((tc, index) => {
    markdown += `## ${index + 1}. ${tc.metadata.id} - ${tc.metadata.title} {#${tc.metadata.id.toLowerCase()}}\n\n`;
    
    markdown += `**Feature:** ${tc.metadata.feature}  \n`;
    markdown += `**Description:** ${tc.metadata.description}  \n`;
    markdown += `**Priority:** ${tc.priority}  \n`;
    markdown += `**Source Worksheet:** ${tc.metadata.sourceWorksheet}  \n`;
    markdown += `**Generated Date:** ${tc.metadata.generatedDate}  \n\n`;

    markdown += `### Tags\n`;
    markdown += tc.tags.map(tag => `- \`${tag}\``).join('\n') + '\n\n';

    markdown += `### Environment\n`;
    markdown += tc.environment.map(env => `- ${env}`).join('\n') + '\n\n';

    markdown += `### Authentication\n`;
    markdown += `${tc.authentication}\n\n`;

    markdown += `### Preconditions\n`;
    if (tc.preconditions && tc.preconditions.length > 0) {
      markdown += tc.preconditions.map(pre => `- ${pre}`).join('\n') + '\n\n';
    } else {
      markdown += `- None\n\n`;
    }

    markdown += `### Request Details\n`;
    markdown += `| Property | Value |\n`;
    markdown += `|----------|-------|\n`;
    markdown += `| Method | ${tc.request.method} |\n`;
    markdown += `| Endpoint | \`${tc.request.endpoint}\` |\n`;
    markdown += `| Headers | ${Object.keys(tc.request.headers || {}).length > 0 ? 'See below' : 'Standard'} |\n`;
    markdown += `| Query Params | ${Object.keys(tc.request.queryParams || {}).length > 0 ? 'See below' : 'None'} |\n`;
    markdown += `| Path Params | ${Object.keys(tc.request.pathParams || {}).length > 0 ? 'See below' : 'None'} |\n\n`;

    if (Object.keys(tc.request.headers || {}).length > 0) {
      markdown += `**Headers:**\n`;
      markdown += Object.entries(tc.request.headers)
        .map(([k, v]) => `- \`${k}\`: ${v}`)
        .join('\n') + '\n\n';
    }

    if (Object.keys(tc.request.queryParams || {}).length > 0) {
      markdown += `**Query Parameters:**\n`;
      markdown += Object.entries(tc.request.queryParams)
        .map(([k, v]) => `- \`${k}\`: ${v}`)
        .join('\n') + '\n\n';
    }

    if (Object.keys(tc.request.pathParams || {}).length > 0) {
      markdown += `**Path Parameters:**\n`;
      markdown += Object.entries(tc.request.pathParams)
        .map(([k, v]) => `- \`${k}\`: ${v}`)
        .join('\n') + '\n\n';
    }

    markdown += `### Expected Response\n`;
    markdown += `**Success Response:**\n`;
    markdown += `- Status Code: \`${tc.response.success.statusCode}\`\n`;
    markdown += `- Description: ${tc.response.success.description}\n\n`;

    if (tc.response.errorCases && tc.response.errorCases.length > 0) {
      markdown += `**Error Cases:**\n`;
      tc.response.errorCases.forEach(error => {
        markdown += `- **${error.statusCode}:** ${error.description}\n`;
      });
      markdown += '\n';
    }

    markdown += `### Assertions\n`;
    if (tc.assertions && tc.assertions.length > 0) {
      markdown += tc.assertions.map(assertion => `- ${assertion}`).join('\n') + '\n\n';
    } else {
      markdown += `- None\n\n`;
    }

    markdown += `### Negative Scenarios\n`;
    if (tc.negativeScenarios && tc.negativeScenarios.length > 0) {
      markdown += tc.negativeScenarios.map(scenario => `- ${scenario}`).join('\n') + '\n\n';
    } else {
      markdown += `- None\n\n`;
    }

    markdown += `### Cleanup\n`;
    if (tc.cleanup && tc.cleanup.length > 0) {
      markdown += tc.cleanup.map(step => `- ${step}`).join('\n') + '\n\n';
    } else {
      markdown += `- None\n\n`;
    }

    markdown += `---\n\n`;
  });

  return markdown;
}

// Function to generate Excel
async function generateExcel(testCases, outputPath) {
  const workbook = new ExcelJS.Workbook();
  
  // Summary Sheet
  const summarySheet = workbook.addWorksheet('Summary');
  summarySheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 20 },
    { header: 'Title', key: 'title', width: 40 },
    { header: 'Feature', key: 'feature', width: 25 },
    { header: 'Priority', key: 'priority', width: 12 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Endpoint', key: 'endpoint', width: 40 },
    { header: 'Environment', key: 'environment', width: 20 }
  ];

  testCases.forEach((tc, index) => {
    summarySheet.addRow({
      id: tc.metadata.id,
      title: tc.metadata.title,
      feature: tc.metadata.feature,
      priority: tc.priority,
      method: tc.request.method,
      endpoint: tc.request.endpoint,
      environment: tc.environment.join(', ')
    });
  });

  summarySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  summarySheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Detailed Sheet
  const detailSheet = workbook.addWorksheet('Detailed');
  detailSheet.columns = [
    { header: 'ID', key: 'id', width: 20 },
    { header: 'Title', key: 'title', width: 30 },
    { header: 'Description', key: 'description', width: 40 },
    { header: 'Tags', key: 'tags', width: 20 },
    { header: 'Priority', key: 'priority', width: 12 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Endpoint', key: 'endpoint', width: 40 },
    { header: 'Authentication', key: 'auth', width: 20 },
    { header: 'Success Status Code', key: 'successCode', width: 15 },
    { header: 'Success Description', key: 'successDesc', width: 30 },
    { header: 'Preconditions', key: 'preconditions', width: 30 },
    { header: 'Assertions', key: 'assertions', width: 30 }
  ];

  testCases.forEach((tc) => {
    detailSheet.addRow({
      id: tc.metadata.id,
      title: tc.metadata.title,
      description: tc.metadata.description,
      tags: tc.tags.join(', '),
      priority: tc.priority,
      method: tc.request.method,
      endpoint: tc.request.endpoint,
      auth: tc.authentication,
      successCode: tc.response.success.statusCode,
      successDesc: tc.response.success.description,
      preconditions: tc.preconditions ? tc.preconditions.join('; ') : 'None',
      assertions: tc.assertions ? tc.assertions.join('; ') : 'None'
    });
  });

  detailSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  detailSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Scenarios Sheet
  const scenarioSheet = workbook.addWorksheet('Negative Scenarios');
  scenarioSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 20 },
    { header: 'Title', key: 'title', width: 30 },
    { header: 'Negative Scenarios', key: 'scenarios', width: 60 }
  ];

  testCases.forEach((tc) => {
    scenarioSheet.addRow({
      id: tc.metadata.id,
      title: tc.metadata.title,
      scenarios: tc.negativeScenarios ? tc.negativeScenarios.join('\n') : 'None'
    });
  });

  scenarioSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  scenarioSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Error Cases Sheet
  const errorSheet = workbook.addWorksheet('Error Cases');
  errorSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 20 },
    { header: 'Title', key: 'title', width: 30 },
    { header: 'Status Code', key: 'statusCode', width: 15 },
    { header: 'Description', key: 'description', width: 50 }
  ];

  testCases.forEach((tc) => {
    // Extract error cases from errorCases array (if populated)
    if (tc.response.errorCases && tc.response.errorCases.length > 0) {
      tc.response.errorCases.forEach(error => {
        errorSheet.addRow({
          id: tc.metadata.id,
          title: tc.metadata.title,
          statusCode: error.statusCode,
          description: error.description
        });
      });
    }
    
    // Also extract error codes from negative scenarios
    if (tc.negativeScenarios && tc.negativeScenarios.length > 0) {
      tc.negativeScenarios.forEach(scenario => {
        const statusCodeMatch = scenario.match(/expect (\d{3})/);
        if (statusCodeMatch) {
          const statusCode = statusCodeMatch[1];
          errorSheet.addRow({
            id: tc.metadata.id,
            title: tc.metadata.title,
            statusCode: statusCode,
            description: scenario
          });
        }
      });
    }
  });

  errorSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  errorSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  await workbook.xlsx.writeFile(outputPath);
}

// Main execution
async function main() {
  try {
    console.log('🚀 Converting Test Cases');
    console.log(`📁 Input directory: ${inputDir}`);
    console.log(`📤 Output directory: ${outDir}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    console.log('\n📖 Reading YAML test cases...');
    const testCases = readYamlFiles(inputDir);
    console.log(`✅ Found ${testCases.length} test cases`);

    console.log('\n📝 Generating Markdown...');
    const markdown = generateMarkdown(testCases);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const fileBaseName = apiName.replace(/\s+/g, '_');
    const markdownPath = path.join(outDir, `${fileBaseName}_Test_Cases.md`);
    fs.writeFileSync(markdownPath, markdown, 'utf-8');
    console.log(`✅ Markdown file: ${markdownPath}`);

    console.log('\n📊 Generating Excel...');
    const excelPath = path.join(outDir, `${fileBaseName}_Test_Cases_${timestamp}.xlsx`);
    await generateExcel(testCases, excelPath);
    console.log(`✅ Excel file: ${excelPath}`);

    console.log('\n✨ Conversion completed successfully!');
    console.log(`\n📍 Output files:`);
    console.log(`   - Markdown: ${markdownPath}`);
    console.log(`   - Excel: ${excelPath}`);
    console.log(`\n📊 Summary:`);
    console.log(`   - Total test cases: ${testCases.length}`);
    console.log(`   - Markdown size: ${(markdown.length / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
