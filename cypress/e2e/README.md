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
To clone this repository without being prompted for a username and password each time, follow these steps:

### Using SSH

1. **Generate an SSH Key:**
   - Open your terminal.
   - Run the following command to generate a new SSH key pair:
     ```bash
     ssh-keygen -t ed25519 -C "astewaletsega20@gmail.com"
     ```
   - If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
     ```bash
     ssh-keygen -t rsa -b 4096 -C "astewaletsega20@gmail.com"
     ```

2. **Follow the Prompts:**
   - When prompted to "Enter a file in which to save the key," press Enter to accept the default file location.
   - You will then be prompted to enter a passphrase. This step is optional, but it is recommended to add a passphrase for additional security.

3. **Add the SSH Key to the SSH Agent:**
   - Run the following command to start the SSH agent:
     ```bash
     eval "$(ssh-agent -s)"
     ```
   - Run the following command to add your SSH key to the SSH agent:
     ```bash
     ssh-add ~/.ssh/id_ed25519
     ```
   - If you used a different name for your key file, replace `id_ed25519` with the appropriate file name.

4. **Copy the SSH Key to Your Clipboard:**
   - Run the following command to copy the SSH key to your clipboard:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```
   - If you're using Git Bash on Windows, you might need to use:
     ```bash
     clip < ~/.ssh/id_ed25519.pub
     ```
   - Manually select and copy the output if the above command doesn't automatically copy it to your clipboard.

5. **Add the SSH Key to Your GitHub Account:**
   - Log in to your GitHub account.
   - Navigate to **Settings** > **SSH and GPG keys** > **New SSH key**.
   - Give your key a descriptive title.
   - Paste the SSH key into the "Key" field.
   - Click **Add SSH key**.

6. **Test the SSH Connection:**
   - Run the following command to test your SSH connection to GitHub:
     ```bash
     ssh -T git@github.com
     ```
   - You may see a message like this:
     ```plaintext
     The authenticity of host 'github.com (IP ADDRESS)' can't be established.
     RSA key fingerprint is SHA256:xxxxxxxxxxxx.
     Are you sure you want to continue connecting (yes/no/[fingerprint])?
     ```
   - Type `yes` and press Enter. You should see a message like this if the connection is successful:
     ```plaintext
     Hi username! You've successfully authenticated, but GitHub does not provide shell access.
     ```

7. **Clone the Repository:**
   - Now that your SSH key is set up, you can clone the repository using SSH:
     ```bash
     git clone git@github.com:ASTEWALE1234/CypressTestForMockProject.git
   cd CypressTestForMockProject

