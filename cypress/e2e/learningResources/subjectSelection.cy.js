import Selectors from "../../selectors/selectors";
import HelperFunctions from "../../testUtilities/helperFunctions";
import TestData from "../../testUtilities/testData";

describe("Learning forward in the Curriculum functionality", () => {
    const helperFunction = new HelperFunctions();
    const selectors = new Selectors();
    const testData = new TestData();
    beforeEach(() => {
        helperFunction.visit();
    })

    it('should check subject contents', () => {
        testData.dropdownItems.forEach((dropdownItem, index) => {
            // condition to check from grade 1 to 8
            // in other grades there is no learn forward in the curriculum section
            if (index > 0 && index < 9) {
                helperFunction.openDropdown(0, 'Learning Resources (K-12)');
                // by passing false as a last argument, function will not validate URL
                helperFunction.clickDropdownItemsAndCheckURL(dropdownItem, index, false);
                cy.get(selectors.learnForwardHeadingSelector).eq(1).scrollIntoView();
                if (index < 4) {
                    helperFunction.checkSubjectContents(true, 'French as a Second Language');
                } else {
                    helperFunction.checkSubjectContents(false, 'French as a Second Language');
                }
            }
        });
    });

    it('should click on the subject and land to the corresponding page',()=>{
        testData.dropdownItems.forEach((item, index) => {
            if (index > 0 && index < 9) {
                helperFunction.openDropdown(0, 'Learning Resources (K-12)');
                helperFunction.clickDropdownItemsAndCheckURL(item, index, false);
                cy.get(selectors.learnForwardHeadingSelector).eq(1).scrollIntoView();
                helperFunction.clickOnSubjectAndCheckURL(index);
            }
        });
    });
});