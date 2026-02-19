# FERO Assessment - E-commerce Test Automation Simple Framework

A Playwright-based test automation framework to demonstrate the setup and Address Change During Checkout checkout scenario briefly.

## Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/seymonyu/fero
   cd fero
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/checkout.spec.ts
```

### Run tests with UI mode (interactive)
```bash
npx playwright test --ui
```

### Generate test report
```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   └── checkout.spec.ts          # Checkout flow tests
├── pages/
│   ├── BasePage.ts              # Base page class
│   ├── CheckoutPage.ts          # Checkout page object
│   └── ProductPage.ts           # Product page object
├── config/
│   └── testConfig.ts            # Test configuration
├── playwright.config.ts         # Playwright configuration
└── package.json
```

## Key Features

- **Page Object Model** - Clean separation of test logic and page elements
- **Cross-browser Testing** - Support for Chrome, Firefox, and Safari

## Configuration

### Test URLs
Update the base URLs in `config/testConfig.ts`:
```typescript
export const testConfig = {
  urls: {
    baseUrl: 'https://your-test-site.com'
  }
};
```

### Browser Configuration  
Modify `playwright.config.ts` to adjust:
- Test directory
- Browser selection
- Parallel execution
- Timeouts
- Reports

## Debugging Tests

### Debug mode
```bash
npx playwright test --debug
```

### Generate trace files
```bash
npx playwright test --trace on
```

### View traces
```bash
npx playwright show-trace trace.zip
```
## Support

For issues and questions, please check the Playwright documentation: https://playwright.dev/