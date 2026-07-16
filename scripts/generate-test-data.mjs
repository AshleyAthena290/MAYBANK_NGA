#!/usr/bin/env node

/**
 * PT Local Transfer API - Test Data Generator
 * 
 * Generates comprehensive test data for all P&T Local Transfer API endpoints
 * including request payloads, headers, and expected responses
 * 
 * Usage:
 *   node scripts/generate-test-data.mjs --api pt-local-transfer --outDir ./artifacts
 */

import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

const apiTestData = {
  'pt-local-transfer': {
    name: 'P&T Local Transfer DDD API',
    endpoints: [
      {
        id: 'API_SPECS_INDEX_001',
        title: 'Transfer Initialization',
        method: 'GET',
        endpoint: 'pt/maintenance/v1/transfers/init',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json',
            'X-API-Key': 'test-api-key-123'
          },
          queryParams: {},
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            transferId: 'TXN20260715001',
            timestamp: '2026-07-15T09:30:00Z',
            status: 'INITIATED'
          }
        },
        negativeTestData: [
          {
            scenario: 'Missing Authorization',
            headers: { 'Content-Type': 'application/json' },
            expectedStatus: 401,
            expectedError: 'Unauthorized'
          },
          {
            scenario: 'Invalid API Key',
            headers: {
              'Authorization': 'Bearer <TOKEN>',
              'X-API-Key': 'invalid-key'
            },
            expectedStatus: 403,
            expectedError: 'Forbidden'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_002',
        title: 'Retrieve Country List',
        method: 'GET',
        endpoint: 'pt/maintenance/v1/transfers/countries',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          queryParams: {},
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            countries: [
              { countryCode: 'MY', countryName: 'Malaysia', active: true },
              { countryCode: 'SG', countryName: 'Singapore', active: true },
              { countryCode: 'ID', countryName: 'Indonesia', active: true }
            ],
            totalCount: 3
          }
        },
        negativeTestData: [
          {
            scenario: 'Unauthorized Request',
            headers: {},
            expectedStatus: 401,
            expectedError: 'Unauthorized'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_003',
        title: 'Retrieve Bank Listing',
        method: 'GET',
        endpoint: 'pt/maintenance/v1/transfers/banks',
        priority: 'P3',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          queryParams: { countryCode: 'MY' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            banks: [
              { bankCode: '001', bankName: 'Bank 1', country: 'MY', supportedPaymentRails: ['RTGS', 'GIRO'] },
              { bankCode: '002', bankName: 'Bank 2', country: 'MY', supportedPaymentRails: ['GIRO'] }
            ],
            totalCount: 2
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Country Code',
            queryParams: { countryCode: 'XX' },
            expectedStatus: 400,
            expectedError: 'Invalid country code'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_004',
        title: 'Get Source Account List',
        method: 'GET',
        endpoint: 'pt/{product}/v1/ext/source-accounts',
        priority: 'P3',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer' },
          queryParams: {},
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            accounts: [
              {
                accountId: '123456789',
                accountNumber: '1234567890',
                accountName: 'Savings Account',
                balance: 50000.00,
                currency: 'MYR'
              }
            ],
            totalCount: 1
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Product',
            pathParams: { product: 'invalid' },
            expectedStatus: 404,
            expectedError: 'Product not found'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_005',
        title: 'Intrabank Pre Monetary Check',
        method: 'POST',
        endpoint: 'pt/intrabank/v1/pre-check',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            sourceAccountId: '123456789',
            destinationAccountId: '987654321',
            transferAmount: 5000.00,
            currency: 'MYR'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            sourceAccount: {
              accountId: '123456789',
              balance: 50000.00,
              availableBalance: 45000.00
            },
            destinationAccount: {
              accountId: '987654321',
              accountName: 'Destination Account'
            },
            transferLimit: 100000.00,
            availableLimit: 95000.00,
            canProceed: true
          }
        },
        negativeTestData: [
          {
            scenario: 'Insufficient Balance',
            body: {
              sourceAccountId: '123456789',
              destinationAccountId: '987654321',
              transferAmount: 100000.00,
              currency: 'MYR'
            },
            expectedStatus: 422,
            expectedError: 'Insufficient balance'
          },
          {
            scenario: 'Invalid Account',
            body: {
              sourceAccountId: 'invalid',
              destinationAccountId: '987654321',
              transferAmount: 5000.00,
              currency: 'MYR'
            },
            expectedStatus: 400,
            expectedError: 'Invalid account ID'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_006',
        title: 'Intrabank Transfer Initiation',
        method: 'POST',
        endpoint: 'pt/intrabank/v1/initiate',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            sourceAccountId: '123456789',
            destinationAccountId: '987654321',
            transferAmount: 5000.00,
            currency: 'MYR',
            referenceNumber: 'REF20260715001',
            remarks: 'Payment for services'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            transactionId: 'TXN20260715001',
            referenceNumber: 'REF20260715001',
            status: 'PENDING',
            initiatedAt: '2026-07-15T09:30:00Z',
            estimatedProcessingTime: '5 minutes'
          }
        },
        negativeTestData: [
          {
            scenario: 'Duplicate Reference Number',
            body: {
              sourceAccountId: '123456789',
              destinationAccountId: '987654321',
              transferAmount: 5000.00,
              currency: 'MYR',
              referenceNumber: 'REF20260715001'
            },
            expectedStatus: 409,
            expectedError: 'Duplicate transaction'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_007',
        title: 'Intrabank Transfer Execution',
        method: 'POST',
        endpoint: 'pt/intrabank/v1/execute',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            transactionId: 'TXN20260715001',
            otp: '123456',
            deviceId: 'DEVICE123'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            transactionId: 'TXN20260715001',
            status: 'COMPLETED',
            executedAt: '2026-07-15T09:35:00Z',
            transactionReference: 'REF20260715001'
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid OTP',
            body: {
              transactionId: 'TXN20260715001',
              otp: '000000',
              deviceId: 'DEVICE123'
            },
            expectedStatus: 401,
            expectedError: 'Invalid OTP'
          },
          {
            scenario: 'Transaction Not Found',
            body: {
              transactionId: 'INVALID_TXN',
              otp: '123456',
              deviceId: 'DEVICE123'
            },
            expectedStatus: 404,
            expectedError: 'Transaction not found'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_008',
        title: 'Interbank Pre Monetary Check',
        method: 'POST',
        endpoint: 'pt/interbank/v1/pre-check',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            sourceAccountId: '123456789',
            destinationBankCode: '002',
            destinationAccountNumber: '9876543210',
            transferAmount: 10000.00,
            currency: 'MYR'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            sourceAccount: {
              accountId: '123456789',
              balance: 50000.00,
              availableBalance: 40000.00
            },
            destinationBank: {
              bankCode: '002',
              bankName: 'Bank 2'
            },
            estimatedFee: 5.00,
            totalAmount: 10005.00,
            canProceed: true
          }
        },
        negativeTestData: [
          {
            scenario: 'Interbank Limit Exceeded',
            body: {
              sourceAccountId: '123456789',
              destinationBankCode: '002',
              destinationAccountNumber: '9876543210',
              transferAmount: 500000.00,
              currency: 'MYR'
            },
            expectedStatus: 422,
            expectedError: 'Interbank limit exceeded'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_009',
        title: 'Inquire Transfer Fee',
        method: 'POST',
        endpoint: 'pt/interbank/v1/fee-inquiry',
        priority: 'P2',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            transferAmount: 10000.00,
            destinationBankCode: '002',
            transferType: 'INTERBANK'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            transferAmount: 10000.00,
            baseFee: 5.00,
            additionalFee: 0.00,
            totalFee: 5.00,
            currency: 'MYR'
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Bank Code',
            body: {
              transferAmount: 10000.00,
              destinationBankCode: 'INVALID',
              transferType: 'INTERBANK'
            },
            expectedStatus: 400,
            expectedError: 'Invalid bank code'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_010',
        title: 'Interbank Transfer Initiation',
        method: 'POST',
        endpoint: 'pt/interbank/v1/initiate',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            sourceAccountId: '123456789',
            destinationBankCode: '002',
            destinationAccountNumber: '9876543210',
            destinationAccountName: 'John Doe',
            transferAmount: 10000.00,
            currency: 'MYR',
            referenceNumber: 'REF20260715002',
            remarks: 'Interbank transfer'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            transactionId: 'TXN20260715002',
            referenceNumber: 'REF20260715002',
            status: 'PENDING',
            initiatedAt: '2026-07-15T10:00:00Z',
            estimatedDeliveryTime: '1 business day'
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Destination Account',
            body: {
              sourceAccountId: '123456789',
              destinationBankCode: '002',
              destinationAccountNumber: 'INVALID',
              destinationAccountName: 'John Doe',
              transferAmount: 10000.00,
              currency: 'MYR'
            },
            expectedStatus: 400,
            expectedError: 'Invalid destination account'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_011',
        title: 'Interbank Transfer Execution',
        method: 'POST',
        endpoint: 'pt/interbank/v1/execute',
        priority: 'P1',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          body: {
            transactionId: 'TXN20260715002',
            otp: '123456',
            deviceId: 'DEVICE123'
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            transactionId: 'TXN20260715002',
            status: 'COMPLETED',
            executedAt: '2026-07-15T10:05:00Z',
            transactionReference: 'REF20260715002'
          }
        },
        negativeTestData: [
          {
            scenario: 'Transaction Already Executed',
            body: {
              transactionId: 'TXN20260715001',
              otp: '123456',
              deviceId: 'DEVICE123'
            },
            expectedStatus: 409,
            expectedError: 'Transaction already executed'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_012',
        title: 'Get Scheduled Listing',
        method: 'GET',
        endpoint: 'pt/{product}/v1/scheduled',
        priority: 'P2',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer' },
          queryParams: { status: 'ACTIVE', limit: 10 },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            scheduledTransfers: [
              {
                scheduleId: 'SCH001',
                referenceNumber: 'REF20260715001',
                frequency: 'MONTHLY',
                nextExecutionDate: '2026-08-15',
                status: 'ACTIVE'
              }
            ],
            totalCount: 1
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Status',
            queryParams: { status: 'INVALID' },
            expectedStatus: 400,
            expectedError: 'Invalid status'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_013',
        title: 'Get Scheduled Details',
        method: 'GET',
        endpoint: 'pt/{product}/v1/scheduled/{scheduleId}',
        priority: 'P2',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer', scheduleId: 'SCH001' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            scheduleId: 'SCH001',
            sourceAccountId: '123456789',
            destinationAccountId: '987654321',
            transferAmount: 5000.00,
            frequency: 'MONTHLY',
            startDate: '2026-07-15',
            status: 'ACTIVE'
          }
        },
        negativeTestData: [
          {
            scenario: 'Schedule Not Found',
            pathParams: { product: 'localtransfer', scheduleId: 'INVALID' },
            expectedStatus: 404,
            expectedError: 'Schedule not found'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_014',
        title: 'Cancel Scheduled Transfer',
        method: 'DELETE',
        endpoint: 'pt/{product}/v1/scheduled/{scheduleId}',
        priority: 'P2',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer', scheduleId: 'SCH001' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            scheduleId: 'SCH001',
            status: 'CANCELLED',
            cancelledAt: '2026-07-15T11:00:00Z'
          }
        },
        negativeTestData: [
          {
            scenario: 'Already Cancelled',
            pathParams: { product: 'localtransfer', scheduleId: 'SCH002' },
            expectedStatus: 409,
            expectedError: 'Schedule already cancelled'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_015',
        title: 'Get Limit Setting Page',
        method: 'GET',
        endpoint: 'pt/{product}/v1/limits',
        priority: 'P3',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            intrabankLimit: 100000.00,
            interbankLimit: 50000.00,
            dailyLimit: 200000.00,
            monthlyLimit: 1000000.00,
            currency: 'MYR'
          }
        },
        negativeTestData: [
          {
            scenario: 'Invalid Product',
            pathParams: { product: 'invalid' },
            expectedStatus: 404,
            expectedError: 'Product not found'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_016',
        title: 'Update Limit Settings',
        method: 'PUT',
        endpoint: 'pt/{product}/v1/limits',
        priority: 'P3',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer' },
          body: {
            intrabankLimit: 150000.00,
            interbankLimit: 75000.00,
            dailyLimit: 250000.00
          }
        },
        responseData: {
          statusCode: 200,
          body: {
            intrabankLimit: 150000.00,
            interbankLimit: 75000.00,
            dailyLimit: 250000.00,
            monthlyLimit: 1000000.00,
            updatedAt: '2026-07-15T11:30:00Z'
          }
        },
        negativeTestData: [
          {
            scenario: 'Limit Exceeds Maximum',
            body: {
              intrabankLimit: 9999999.00,
              interbankLimit: 75000.00,
              dailyLimit: 250000.00
            },
            expectedStatus: 422,
            expectedError: 'Limit exceeds maximum allowed'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_017',
        title: 'Get Product Maintenance Limit',
        method: 'GET',
        endpoint: 'pt/{product}/v1/maintenance/limits',
        priority: 'P3',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            product: 'localtransfer',
            maxSingleTransactionLimit: 500000.00,
            maxDailyLimit: 2000000.00,
            maxMonthlyLimit: 10000000.00,
            minTransactionAmount: 1.00,
            currency: 'MYR'
          }
        },
        negativeTestData: [
          {
            scenario: 'Product Maintenance Not Available',
            pathParams: { product: 'localtransfer' },
            expectedStatus: 503,
            expectedError: 'Service temporarily unavailable'
          }
        ]
      },
      {
        id: 'API_SPECS_INDEX_018',
        title: 'Remove Scheduled Transfer',
        method: 'DELETE',
        endpoint: 'pt/{product}/v1/scheduled/{scheduleId}',
        priority: 'P2',
        requestData: {
          headers: {
            'Authorization': 'Bearer <TOKEN>',
            'Content-Type': 'application/json'
          },
          pathParams: { product: 'localtransfer', scheduleId: 'SCH003' },
          body: null
        },
        responseData: {
          statusCode: 200,
          body: {
            scheduleId: 'SCH003',
            status: 'REMOVED',
            removedAt: '2026-07-15T12:00:00Z'
          }
        },
        negativeTestData: [
          {
            scenario: 'Already Removed',
            pathParams: { product: 'localtransfer', scheduleId: 'SCH003' },
            expectedStatus: 409,
            expectedError: 'Schedule already removed'
          }
        ]
      }
    ]
  }
};

async function generateExcelTestData(apiData, outputPath) {
  const workbook = new ExcelJS.Workbook();
  
  // Test Cases Overview
  const overviewSheet = workbook.addWorksheet('Test Cases Overview');
  overviewSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 25 },
    { header: 'Title', key: 'title', width: 35 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Endpoint', key: 'endpoint', width: 45 },
    { header: 'Priority', key: 'priority', width: 10 }
  ];

  apiData.endpoints.forEach(endpoint => {
    overviewSheet.addRow({
      id: endpoint.id,
      title: endpoint.title,
      method: endpoint.method,
      endpoint: endpoint.endpoint,
      priority: endpoint.priority
    });
  });

  overviewSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  overviewSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Request Test Data
  const requestSheet = workbook.addWorksheet('Request Test Data');
  requestSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 25 },
    { header: 'Title', key: 'title', width: 35 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Headers', key: 'headers', width: 50 },
    { header: 'Path Params', key: 'pathParams', width: 40 },
    { header: 'Query Params', key: 'queryParams', width: 40 },
    { header: 'Body', key: 'body', width: 60 }
  ];

  apiData.endpoints.forEach(endpoint => {
    requestSheet.addRow({
      id: endpoint.id,
      title: endpoint.title,
      method: endpoint.method,
      headers: JSON.stringify(endpoint.requestData.headers),
      pathParams: JSON.stringify(endpoint.requestData.pathParams || {}),
      queryParams: JSON.stringify(endpoint.requestData.queryParams || {}),
      body: endpoint.requestData.body ? JSON.stringify(endpoint.requestData.body) : 'N/A'
    });
  });

  requestSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  requestSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Expected Response
  const responseSheet = workbook.addWorksheet('Expected Response');
  responseSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 25 },
    { header: 'Title', key: 'title', width: 35 },
    { header: 'Status Code', key: 'statusCode', width: 15 },
    { header: 'Response Body', key: 'body', width: 80 }
  ];

  apiData.endpoints.forEach(endpoint => {
    responseSheet.addRow({
      id: endpoint.id,
      title: endpoint.title,
      statusCode: endpoint.responseData.statusCode,
      body: JSON.stringify(endpoint.responseData.body)
    });
  });

  responseSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  responseSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Negative Test Data
  const negativeSheet = workbook.addWorksheet('Negative Test Data');
  negativeSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 25 },
    { header: 'Title', key: 'title', width: 35 },
    { header: 'Scenario', key: 'scenario', width: 35 },
    { header: 'Request Data', key: 'requestData', width: 60 },
    { header: 'Expected Status', key: 'expectedStatus', width: 15 },
    { header: 'Expected Error', key: 'expectedError', width: 35 }
  ];

  apiData.endpoints.forEach(endpoint => {
    endpoint.negativeTestData.forEach(negTest => {
      negativeSheet.addRow({
        id: endpoint.id,
        title: endpoint.title,
        scenario: negTest.scenario,
        requestData: JSON.stringify(negTest.body || negTest.headers || negTest.queryParams || {}),
        expectedStatus: negTest.expectedStatus,
        expectedError: negTest.expectedError
      });
    });
  });

  negativeSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  negativeSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  // Test Data Summary
  const summarySheet = workbook.addWorksheet('Test Data Summary');
  summarySheet.columns = [
    { header: 'Metric', key: 'metric', width: 30 },
    { header: 'Value', key: 'value', width: 20 }
  ];

  const totalNegativeTests = apiData.endpoints.reduce((sum, ep) => sum + ep.negativeTestData.length, 0);

  summarySheet.addRow({ metric: 'Total API Endpoints', value: apiData.endpoints.length });
  summarySheet.addRow({ metric: 'Total Positive Test Cases', value: apiData.endpoints.length });
  summarySheet.addRow({ metric: 'Total Negative Test Cases', value: totalNegativeTests });
  summarySheet.addRow({ metric: 'Total Test Cases', value: apiData.endpoints.length + totalNegativeTests });
  summarySheet.addRow({ metric: 'Generated Date', value: new Date().toISOString() });
  summarySheet.addRow({ metric: 'API Name', value: apiData.name });

  summarySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  summarySheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF366092' } };

  await workbook.xlsx.writeFile(outputPath);
}

function generateMarkdownTestData(apiData) {
  let markdown = `# ${apiData.name} - Test Data

**Generated Date:** ${new Date().toISOString()}

---

## Overview

- **Total Endpoints:** ${apiData.endpoints.length}
- **Total Test Cases (Positive):** ${apiData.endpoints.length}
- **Total Test Cases (Negative):** ${apiData.endpoints.reduce((sum, ep) => sum + ep.negativeTestData.length, 0)}
- **Total Test Cases:** ${apiData.endpoints.length + apiData.endpoints.reduce((sum, ep) => sum + ep.negativeTestData.length, 0)}

---

## Table of Contents

`;

  apiData.endpoints.forEach((ep, index) => {
    markdown += `${index + 1}. [${ep.id} - ${ep.title}](#${ep.id.toLowerCase()})\n`;
  });

  markdown += '\n---\n\n';

  apiData.endpoints.forEach(endpoint => {
    markdown += `## ${endpoint.id} - ${endpoint.title}\n\n`;
    markdown += `**Method:** \`${endpoint.method}\`  \n`;
    markdown += `**Endpoint:** \`${endpoint.endpoint}\`  \n`;
    markdown += `**Priority:** ${endpoint.priority}  \n\n`;

    markdown += `### Positive Test Data\n\n`;
    markdown += `#### Request\n\n`;
    markdown += `\`\`\`json\n`;
    markdown += `{\n`;
    markdown += `  "headers": ${JSON.stringify(endpoint.requestData.headers, null, 2)},\n`;
    if (Object.keys(endpoint.requestData.pathParams || {}).length > 0) {
      markdown += `  "pathParams": ${JSON.stringify(endpoint.requestData.pathParams, null, 2)},\n`;
    }
    if (Object.keys(endpoint.requestData.queryParams || {}).length > 0) {
      markdown += `  "queryParams": ${JSON.stringify(endpoint.requestData.queryParams, null, 2)},\n`;
    }
    if (endpoint.requestData.body) {
      markdown += `  "body": ${JSON.stringify(endpoint.requestData.body, null, 2)}\n`;
    }
    markdown += `}\n`;
    markdown += `\`\`\`\n\n`;

    markdown += `#### Expected Response\n\n`;
    markdown += `**Status Code:** \`${endpoint.responseData.statusCode}\`\n\n`;
    markdown += `\`\`\`json\n`;
    markdown += `${JSON.stringify(endpoint.responseData.body, null, 2)}\n`;
    markdown += `\`\`\`\n\n`;

    markdown += `### Negative Test Scenarios\n\n`;
    endpoint.negativeTestData.forEach((negTest, idx) => {
      markdown += `#### Scenario ${idx + 1}: ${negTest.scenario}\n\n`;
      markdown += `**Request Data:**\n`;
      markdown += `\`\`\`json\n`;
      markdown += `${JSON.stringify(negTest.body || negTest.headers || negTest.queryParams || {}, null, 2)}\n`;
      markdown += `\`\`\`\n\n`;
      markdown += `**Expected Status:** \`${negTest.expectedStatus}\`\n`;
      markdown += `**Expected Error:** ${negTest.expectedError}\n\n`;
    });

    markdown += `---\n\n`;
  });

  return markdown;
}

async function main() {
  const args = process.argv.slice(2);
  let apiType = 'pt-local-transfer';
  let outDir = './artifacts';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--api' && i + 1 < args.length) {
      apiType = args[i + 1];
      i++;
    } else if (args[i] === '--outDir' && i + 1 < args.length) {
      outDir = args[i + 1];
      i++;
    }
  }

  const apiData = apiTestData[apiType];
  if (!apiData) {
    console.error(`Error: API type '${apiType}' not found`);
    process.exit(1);
  }

  try {
    console.log('🚀 Generating Test Data');
    console.log(`📁 API Type: ${apiType}`);
    console.log(`📤 Output directory: ${outDir}`);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    console.log('\n📝 Generating Markdown...');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    const markdownPath = path.join(outDir, `PT_Local_Transfer_Test_Data.md`);
    const markdown = generateMarkdownTestData(apiData);
    fs.writeFileSync(markdownPath, markdown, 'utf-8');
    console.log(`✅ Markdown file: ${markdownPath}`);

    console.log('\n📊 Generating Excel...');
    const excelPath = path.join(outDir, `PT_Local_Transfer_Test_Data_${timestamp}.xlsx`);
    await generateExcelTestData(apiData, excelPath);
    console.log(`✅ Excel file: ${excelPath}`);

    console.log('\n✨ Test Data Generation completed successfully!');
    console.log(`\n📍 Output files:`);
    console.log(`   - Markdown: ${markdownPath}`);
    console.log(`   - Excel: ${excelPath}`);
    console.log(`\n📊 Summary:`);
    console.log(`   - Total endpoints: ${apiData.endpoints.length}`);
    console.log(`   - Total negative scenarios: ${apiData.endpoints.reduce((sum, ep) => sum + ep.negativeTestData.length, 0)}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
