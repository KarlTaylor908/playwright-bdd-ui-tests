[![Playwright Tests](https://github.com/KarlTaylor908/playwright-bdd-ui-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/KarlTaylor908/playwright-bdd-ui-tests/actions/workflows/playwright.yml)
# Automation UI Tests (TypeScript · Playwright · Cucumber)

End-to-end UI tests for a retail-style shopping flow using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

## Scenarios covered (starter)
- Search for a product  
- Validate search results  
- Add a product to basket  
- Update quantity to **3**
- Validate subtotal

## Tech stack
- Node 18+
- TypeScript, ts-node, @types/node
- Playwright (Chromium by default)
- @cucumber/cucumber (Gherkin)
- @cucumber/html-formatter (HTML report)
- dotenv, cross-env

## Project structure
- features/ # .feature files (Gherkin)
- features/support/ # hooks, world, env setup
- tests/steps/ # step definitions (.ts)
- pages/ # Page Object Model structure (POM)

 ## Instructions on Use

### 1) Install dependencies & browsers

- npm install
- npx playwright install --with-deps

### 2) Run tests in the Command Palette (Ctrl+Shift+P)

- npm run bdd
