**Playwright Automation Framework (TypeScript + Excel Data-Driven)**

 **Overview**
This project is a ** UI test automation framework ** built using Playwright with TypeScript.

It follows industry-standard practices like:

- Page Object Model (POM)
- Data-driven testing using Excel
- Modular test design
- Clean separation of test layers

The application under test is a sample e-commerce site used for automation practice.

**Application Under Test**
SauceDemo Application
A demo e-commerce application used for UI automation practice.

**Tech Stack**
   - Playwright
   - TypeScript
   - Node.js
   - Excel (XLSX for test data)
   - Page Object Model (POM)


**Project Structure**
project-root/
│
├── pages/                  # Page Object Model
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/                  # Test specs
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── testdata/               # Excel test data
│   └── loginData.xlsx
│
├── utils/                  # Utilities
│   └── excelReader.ts
│
├── playwright.config.ts
└── package.json

 **Test Data Strategy**
This framework uses **Excel-driven testing**.

**Example login data:**

| email           | password     | expected |
| --------------- | ------------ | -------- |
| standard_user   | secret_sauce | success  |
| locked_out_user | secret_sauce | error    |
| standard_user   | wrong_pass   | error    |
|                 | secret_sauce | error    |
| standard_user   |              | error    |

✔ Supports both positive and negative test scenarios

**Setup Instructions**
1️⃣ Install dependencies
    npm install

2️⃣ Install browsers
    npx playwright install

3️⃣ Run all tests
    npx playwright test

4️⃣ Run specific test file
    npx playwright test tests/login.spec.ts

5️⃣ Run in headed mode
    npx playwright test --headed

**Test Reports**
Generate and view HTML report:
    npx playwright show-report

**Framework Features**
✔ Page Object Model (POM)
✔ Excel-based data-driven testing
✔ Positive & negative test coverage
✔ Reusable login flow
✔ Error validation handling
✔ Screenshot on failure
✔ HTML reporting
✔ Trace debugging support

**Test Coverage**

 **Login Module**
   - Valid login
   - Invalid password
   -  Empty email
   - Empty password
   - Locked user validation

**Product Module**
    - Product visibility
    - Price validation
    - Add to cart
    - Remove from cart

**Cart Module**
    - Cart item validation
    - Continue shopping navigation

 **Checkout Module**
    - Successful checkout flow
    - Form validation checks

**Configuration Highlights**
    - Chromium browser only (assessment optimized)
    - Headed execution enabled
    - Screenshot on failure enabled
    - Trace enabled for debugging

**Key Highlights**
✔ Clean automation architecture
✔ Real-world POM implementation
✔ Excel-driven test design
✔ Stable and maintainable framework
✔ Suitable for QA assessment submission

**Author**
Mamqueen Mamachan

**How to Run in One Command**
 npx playwright test --headed
