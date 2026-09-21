# PlaywrightTS

A practical Playwright and TypeScript workspace for learning and exploring web automation, cross-browser test execution, browser locators, and test reporting.

## Overview
This repository contains:
- Playwright test examples for multiple web applications
- Browser automation scripts using different locator strategies
- JavaScript and TypeScript practice files for core language concepts
- Allure-based test reporting setup

## Project Structure
- `tests/` - Playwright test specifications and UI automation flows
- `JS Core/` - JavaScript fundamentals and language basics
- `JS Problems/` - JavaScript problem-solving exercises
- `TS Core/` - TypeScript basics and examples
- `scripts/` - Utility scripts, including report generation
- `Data/` - Browser storage state and test data files
- `allure-results/`, `allure-report/`, `playwright-report/`, `test-results/` - generated test artifacts

## Tech Stack
- Playwright
- TypeScript
- JavaScript
- Allure report integration

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the test suite:
   ```bash
   npx playwright test
   ```
3. Generate and view the Allure report:
   ```bash
   npm run test:allure
   ```

## Notes
- This workspace is intended for learning, experimentation, and practice.
- Some test files may include example credentials, demo URLs, or storage-state data for local learning scenarios.
- Credentials and sensitive test data should be handled securely and kept out of shared repositories when used in real projects.

## License
ISC
