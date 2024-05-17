import HelperFunctions from "../../testUtilities/helperFunctions";
import Selectors from "../../selectors/selectors";
import TestData from "../../testUtilities/testData";

describe("Learning resources (K-12) nav item functionality", () => {
    const helperFunction = new HelperFunctions();
    const selectors = new Selectors();
    const testData = new TestData();

    beforeEach(() => {
        helperFunction.visit();
    })

    it('should open the Learning Resources (K-12) dropdown and dropdown menu should be visible', () => {
        helperFunction.openDropdown(0, 'Learning Resources (K-12)');
        cy.get(selectors.dropdownSelector).should('be.visible');
    });

    it('should verifies the contents of the Learning resources (K-12) dropdown', () => {
        helperFunction.openDropdown(0, 'Learning Resources (K-12)');
        helperFunction.checkDropdownValues(testData.dropdownItems);
    });

    it('should click on dropdown items and successfully land to the corresponding page', () => {
        testData.dropdownItemsURL.forEach((URLvalue, index) => {
            // condition to check from grade 1 to 12
            if (index > 0 && index < 13) {
                helperFunction.openDropdown(0, 'Learning Resources (K-12)');
                helperFunction.clickDropdownItemsAndCheckURL(URLvalue, index);
            }
        });
    });

    it('should scroll to the Learn Forward in the Curriculum section for grade 1 to 8', () => {
        testData.dropdownItems.forEach((dropdownItem, index) => {
            // condition to check from grade 1 to 8
            // in other grades there is no learn forward in the curriculum section
            if (index > 0 && index < 9) {
                helperFunction.openDropdown(0, 'Learning Resources (K-12)');
                // by passing false as a last argument, function will not validate URL
                helperFunction.clickDropdownItemsAndCheckURL(dropdownItem, index, false);
                cy.get(selectors.learnForwardHeadingSelector).eq(1).should('be.visible')
                    .and('contain', 'Learn Forward in the Curriculum')
                    .scrollIntoView();
            }
        });
    });
})
