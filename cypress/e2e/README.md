# Cypress Test Suite for MockProject

## Overview
This repository contains a Cypress test suite designed to test the functionality of the pre-qualified offers form on the American Express website. The test suite includes multiple test cases that fill out the form with different sets of data to verify the correctness and robustness of the form.

## Documented Test Cases
### Test Case 1: Set One
- Visit the pre-qualified offers page.
- Fill in the form with the following data:
  - First Name: PIQONE
  - Last Name: TIQONE
  - Address: IQ Street
  - City: NEW YORK
  - State: New York
  - Zip Code: 10285
  - SSN: 9999
  - Income: 10,000
  - Non-Tax Income: 9,000

### Test Case 2: Set Two
- Visit the pre-qualified offers page.
- Fill in the form with the following data:
  - First Name: PIQTWO
  - Last Name: TIQTWO
  - Address: IQ Street
  - City: NEW YORK
  - State: New York
  - Zip Code: 10285
  - SSN: 9999
  - Income: 100,000
  - Non-Tax Income: none

### Test Case 3: Set Three
- Visit the pre-qualified offers page.
- Fill in the form with the following data:
  - First Name: PIQTHREE
  - Last Name: TIQTHREE
  - Address: IQ Street
  - City: NEW YORK
  - State: New York
  - Zip Code: 10285
  - SSN: 9999
  - Income: 90,000
  - Non-Tax Income: 50,000

##  aim
The test suite was designed to verify the functionality of the form by using different sets of data. The aim was to ensure that the form can handle various inputs and that the expected actions are performed correctly. By automating these tests, we can quickly identify any issues with the form's functionality and improve the overall quality of the application.

## How to Run the Test Suite
- npx cypress open
   will open cypress TestRunner
-select E2E Testing
-select your favorite browser to see the test 
- click CypressTestForMockProject.cy.js
- see the results

### Prerequisites
- Node.js and npm installed on your machine.
- Cypress installed as a development dependency in your project.

### Steps
1. **Clone the Repository**
   ```bash
   git clone git remote add origin https://github.com/ASTEWALE1234/CypressTest.git
   cd CypressTestForMockProject
