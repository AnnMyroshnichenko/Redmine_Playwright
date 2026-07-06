# Redmine Playwright Test Automation

## Overview

This repository contains an automated UI test suite for the public Redmine website using Playwright and TypeScript. The project follows the Page Object Model (POM) design pattern, uses Playwright fixtures, and generates Allure reports for test execution results.

The automated test suite covers common user scenarios such as:

- User login
- Search functionality
- Viewing public issue details
- Filtering issues by status

---

## Technologies

- Playwright
- TypeScript

---

## Requirements

Before running the project, ensure you have:

- Node.js 20 or later
- npm
- Git
- Java Runtime Environment (JRE) *(required for Allure CLI)*
- Allure Commandline

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/AnnMyroshnichenko/Redmine_Playwright.git
```

### 2. Navigate to the project

```bash
cd Redmine_Playwright
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Create the environment file

Create a `.env` file in the project root.

Example:

```env
BASE_URL=https://www.redmine.org
LOGIN=your_login
PASSWORD=your_password
OTP_SECRET=your_otp_secret
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/issues.spec.ts
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

---

## Allure Report

### Generate Allure results

```bash
npx playwright test
```

### Generate the report

```bash
allure generate allure-results --clean
```

### Open the report

```bash
allure open allure-report
```

Or generate and open in one command:

```bash
allure serve allure-results
```

---

## GitHub Actions

The project includes a GitHub Actions workflow that:

- Installs dependencies
- Installs Playwright browsers
- Creates the `.env` file from GitHub Secrets
- Executes Playwright tests
- Generates an Allure Report
- Publishes the report to GitHub Pages

---

## Test Cases

Detailed manual test cases are available on Google Drive:

https://docs.google.com/spreadsheets/d/1bcE5mAo59LbmeeJ_qX5EGjv6fCWYXjkwnD5KpmbQuEA/edit?usp=sharing

---
