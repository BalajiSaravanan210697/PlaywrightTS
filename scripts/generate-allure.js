const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const resultsDir = path.join(process.cwd(), 'allure-results');
const reportDir = path.join(process.cwd(), 'allure-report');
const historyDir = path.join(resultsDir, 'history');
const previousHistoryDir = path.join(reportDir, 'history');

// Preserve history from the previous report
if (fs.existsSync(previousHistoryDir)) {
  fs.rmSync(historyDir, { recursive: true, force: true });
  fs.cpSync(previousHistoryDir, historyDir, { recursive: true });

  console.log('✓ Previous Allure history preserved');
}

// Generate the new report
execSync(
  'npx allure generate allure-results --clean -o allure-report',
  { stdio: 'inherit' }
);

console.log('✓ Allure report generated');

// Open the report automatically
execSync(
  'npx allure open allure-report',
  { stdio: 'inherit' }
);