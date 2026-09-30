# PlaywrightTS

A practical Playwright and TypeScript workspace for learning web automation, browser locators, test data management, file uploads, frames, test annotations, and reporting.

## What is included

- Playwright tests against Salesforce, LeafTaps, LeafGround, Naukri, and Flipkart examples
- Locator examples using CSS, XPath, role, text, and frame locators
- Browser storage-state reuse for authenticated LeafTaps and Salesforce scenarios
- Test data examples loaded from JSON and environment files
- File-upload, nested-frame, and test-annotation examples
- JavaScript and TypeScript practice files
- Allure reporting with report-history preservation

## Project structure

- `tests/` - Playwright test specifications and UI automation flows
- `Data/` - JSON credentials, environment files, storage state, and upload files
- `scripts/` - utility scripts, including Allure report generation
- `JS Core/` - JavaScript fundamentals
- `JS Problems/` - JavaScript problem-solving exercises
- `TS Core/` - TypeScript examples
- `playwright.config.ts` - test directory, reporters, browser projects, retries, and failure artifacts
- `allure-results/`, `allure-report/`, `playwright-report/`, `test-results/` - generated test artifacts

## Getting started

Install the dependencies:

```bash
npm install
```

Install the Playwright-managed browsers if they are not already available:

```bash
npx playwright install
```

Run all tests across Chromium, Firefox, and WebKit:

```bash
npm test
```

Run a specific test file or choose a browser project:

```bash
npx playwright test tests/framesLG.spec.ts
npx playwright test --project=chromium
```

To use an installed Google Chrome instead of the Playwright Chromium build:

```bash
$env:USE_SYSTEM_CHROME = "1" # PowerShell
npx playwright test
```

## Test data

- `tests/readDataJsonSF.spec.ts` reads Salesforce cases from `Data/login.json`.
- `tests/readDataFromEnv.spec.ts` reads Salesforce values from `Data/qa.env` by default.
- Select another environment file with the `envfile` variable:

```bash
$env:envfile = "stage" # or "prod" / "qa"
npx playwright test tests/readDataFromEnv.spec.ts
```

The repository also contains storage-state files used by the skip-login examples and sample files for the LeafGround and Naukri upload tests. Keep real credentials, tokens, and storage state out of shared repositories.

## Reports and debugging

The Playwright configuration uses the list and Allure reporters, captures screenshots on failure, and retains traces on failure. Generate and open an Allure report with:

```bash
npm run test:allure
```

The command preserves the previous report history before generating the new report.

## Notes

- This workspace is intended for learning, experimentation, and practice.
- Some examples use public demo sites and may be affected by changes or availability outside this repository.
- `tests/testAnnotations.spec.ts` intentionally demonstrates `skip`, `only`, `fixme`, `fail`, tags, annotations, steps, retries, and slow tests. Remove or change focused `test.only` entries before running the complete suite.

## License

ISC
