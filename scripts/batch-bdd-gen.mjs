#!/usr/bin/env node

/**
 * Batch BDD YAML Test Case Generator
 * 
 * Generates BDD-style YAML test cases for all API endpoints in an API spec workbook.
 * Creates individual YAML files per scenario within organized folder structure.
 * 
 * Usage:
 *   node scripts/batch-bdd-gen.mjs --input ./input/api/spec.xlsx [--outDir ./artifacts] [--skip-sheets ApiName1,ApiName2]
 */

import ExcelJS from 'exceljs';
import { spawn } from 'child_process';
import { parse } from 'path';
import process from 'process';

// Parse command line arguments
const args = process.argv.slice(2);
let inputFile = '';
let outDir = './artifacts';
let skipSheets = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && i + 1 < args.length) {
    inputFile = args[i + 1];
    i++;
  } else if (args[i] === '--outDir' && i + 1 < args.length) {
    outDir = args[i + 1];
    i++;
  } else if (args[i] === '--skip-sheets' && i + 1 < args.length) {
    skipSheets = args[i + 1].split(',').map(s => s.trim());
    i++;
  }
}

if (!inputFile) {
  console.error('Error: --input argument is required');
  console.error('Usage: node batch-bdd-gen.mjs --input <path> [--outDir <dir>] [--skip-sheets sheet1,sheet2]');
  process.exit(1);
}

async function getAllSheetNames(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  return workbook.worksheets.map(ws => ws.name);
}

function runBddGen(sheet) {
  return new Promise((resolve, reject) => {
    console.log(`\n📄 Generating test cases for: ${sheet}`);
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const child = spawn(cmd, [
      'run',
      'dev',
      '--',
      'bdd-gen',
      '--input', inputFile,
      '--sheet', sheet,
      '--outDir', outDir
    ], {
      shell: true,
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(sheet);
      } else {
        reject(new Error(`Failed to generate YAML for sheet: ${sheet}`));
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log('\n🚀 Batch BDD YAML Test Case Generator');
    console.log(`📁 Input file: ${inputFile}`);
    console.log(`📤 Output directory: ${outDir}\n`);

    // Get all sheet names
    console.log('📋 Reading workbook sheets...');
    const allSheets = await getAllSheetNames(inputFile);
    
    // Filter out the index sheet and any sheets to skip
    const sheetsToProcess = allSheets.filter(
      sheet => 
        sheet !== 'API_Specs_Index' && 
        !skipSheets.includes(sheet)
    );

    console.log(`Found ${allSheets.length} total sheets, processing ${sheetsToProcess.length} API endpoints...\n`);

    // Process sheets sequentially to avoid too many concurrent operations
    const results = [];
    for (const sheet of sheetsToProcess) {
      try {
        await runBddGen(sheet);
        results.push({ sheet, status: 'success' });
      } catch (err) {
        console.error(`❌ Error processing ${sheet}: ${err.message}`);
        results.push({ sheet, status: 'failed', error: err.message });
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Generation Summary');
    console.log('='.repeat(60));
    
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'failed').length;

    console.log(`✅ Successful: ${successful}/${sheetsToProcess.length}`);
    console.log(`❌ Failed: ${failed}/${sheetsToProcess.length}`);
    console.log(`📁 Output location: ${outDir}\n`);

    if (failed > 0) {
      console.log('Failed sheets:');
      results.filter(r => r.status === 'failed').forEach(r => {
        console.log(`  - ${r.sheet}: ${r.error}`);
      });
      process.exit(1);
    }

    console.log('✨ All API endpoints processed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error:', err.message);
    process.exit(1);
  }
}

main();
