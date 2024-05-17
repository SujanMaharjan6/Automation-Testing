# Cypress Automated Test Suite for TVO Learn

## Test Approach

### Objective
The goal of this test suite is to automate the testing of the key functionalities on the TVO Learn website’s Learning Resources (K-12) contents to ensure reliability and performance.

### Tool
- **Cypress**: 13.9.0
- **Node**: 18.18.0

### Strategy
I implemented an end-to-end testing strategy to replicate real user interactions and validate the application's behavior.

## Test Cases Covered

1. **Ensure that the homepage loads successfully**
   - Check that the status code is 200 when the homepage loads.
   - Check that the base URL is `https://tvolearn.com/`.
   - Check that the header is visible.

2. **Check the visibility of the site logo that navigates to the homepage when clicked**
   - Check the visibility of the site logo and click it.
   - Check that the base URL is `https://tvolearn.com/` after clicking on the site logo.

3. **Ensure the visibility of the dropdown menu after clicking the Learning Resources (K-12) dropdown at the navbar**
   - Check the dropdown menu’s visibility after clicking the Learning Resources (K-12) dropdown.

4. **Verify the contents of the Learning Resources (K-12) dropdown menu**
   - After clicking the Learning Resources (K-12) dropdown menu, check the dropdown menu’s content.

5. **Click on the Learning Resources (K-12) dropdown menu items, and check if the user lands on the corresponding page based on the dropdown menu item click**
   - Create an array based on the dropdown menu items. Loop through this array and click each dropdown menu item one by one.
   - After clicking on the dropdown menu item, check the URL to see if it includes the string value based on the corresponding page.

6. **Check the 'Learn Forward in the Curriculum' text is visible and scroll to its content**
   - Navigate to the grade page and check the visibility of the 'Learn Forward in the Curriculum' text and scroll to its content.
   - Implement code to check grades from 1 to 8 because other grades do not have 'Learn Forward in the Curriculum' content.

7. **Check the subject content at the 'Learn Forward in the Curriculum' section**
   - Navigate to the grade page by clicking on the dropdown menu at the Learning Resources (K-12) dropdown menu items.
   - Check the subject contents for grades 1 to 8. For grades 1 to 3, check 'French as a Second Language' subject is not visible. For grades 4 to 8, check the 'French as a Second Language' subject is visible.

8. **Click on the subject and check if the user lands on the corresponding page**
   - Navigate to the subject page and check its URL for grades 1 to 8.

9. **Check the responsiveness of the navbar for the 1280 by 720 viewport**
   - Check that the navbar item is visible, such as the Learning Resources (K-12) navbar item.
   - Check that the hamburger button is not visible in this viewport.

10. **Check the responsiveness of the navbar for the 820 by 1180 viewport (iPad)**
    - Check that the navbar item is not visible, such as the Learning Resources (K-12) navbar item.
    - Check that the hamburger button is visible in this viewport.

## Coding Structure
- Defined the base URL as `https://tvolearn.com` in `cypress.config.js`.
- Handle uncaught exceptions in `support/e2e.js`.
- Defined necessary element selectors in one file: `selectors/selectors.js`.
- Saved required test data in one file: `testUtilities/testData.js`.
- Saved all the helper functions to perform the tests in one file: `testUtilities/helperFunctions.js`.
- Utilized objects of classes to reuse code effectively by importing them from other files and creating instances as needed. This approach ensures modularity and reusability of the code.
- This coding structure allows for the reuse of some code in future testing.

## Note on Execution Speed
I have created an array to check every grade and tested it. The tests are passing as expected. However, for the execution speed of the automation tests, I have also created an array up to grade 3 and commented out the array that contains all the grades. Feel free to switch between different arrays while testing.

## Assumptions
- The application has a stable internet connection.
- Checked the URL instead of the corresponding page content such as text because the content could change in the future. However, developers usually do not change the URL.
- Each `it` block is independent of each other. Therefore, `it` blocks can be run individually if required.
- Tested in the production environment.
- The page elements and locators are consistently available for testing.

## Summary

### Test Approach
The test suite automates key functionalities on the TVO Learn website's Learning Resources (K-12) to ensure reliability and performance. Cypress (version 13.9.0) and Node (version 18.18.0) were used for end-to-end testing to replicate real user interactions.

### Covered Test Cases
1. Verified homepage loads successfully (status code, base URL, header visibility).
2. Checked site logo visibility and navigation functionality.
3. Ensured visibility of the dropdown menu after clicking the Learning Resources (K-12) dropdown.
4. Verified contents of the Learning Resources (K-12) dropdown menu.
5. Tested navigation to corresponding pages by clicking dropdown menu items.
6. Checked visibility of 'Learn Forward in the Curriculum' text and scrolled to its content.
7. Verified subject content visibility in the 'Learn Forward in the Curriculum' section for grades 1 to 8.
8. Checked navigation to subject pages and corresponding URLs for grades 1 to 8.
9. Tested navbar responsiveness for 1280 by 720 viewport.
10. Tested navbar responsiveness for 820 by 1180 viewport (iPad).

### Execution Results
- All test cases passed successfully.
- Verified functionality, content, and responsiveness of the TVO Learn website as expected.
- Tests for different grades passed as expected, and the code structure allows for efficient execution and future test scalability.

### Assumptions
- The application has a stable internet connection.
- The URL was checked instead of corresponding page content, as content may change in the future, but URLs are typically stable.
- Each `it` block is independent, allowing them to be run individually if required.
- Testing was performed in the production environment.
- The page elements and locators are consistently available for testing.

## GitHub Link
[GitHub Repository](https://github.com/SujanMaharjan6/tvolearn-cypress-tests)
