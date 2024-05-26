import Selectors from "../selectors/selectors";
import TestData from "./testData";

const selectors = new Selectors();
const testData = new TestData();

class HelperFunctions {
    visit() {
        cy.viewport(1280, 720);
        cy.visit('/');
    }

    validateURL(value) {
        const expectedUrlRegex = new RegExp(value);
        cy.url().should('match', expectedUrlRegex);
    }

    // opens dropdown menu
    openDropdown(index, navItemName) {
        cy.get(selectors.navItemSelector).eq(index).contains(navItemName).click();
        cy.wait(1000);
    }

    // checks drop down menu values
    checkDropdownValues(dropdownItems) {
        cy.get(selectors.dropdownSelector).then(items => {
            dropdownItems.forEach(item => {
                cy.wrap(items).contains(item);
            });
        });
    }

    clickDropdownItemsAndCheckURL(dropdownItemsURL, index, checkURL = true) {
        cy.get(selectors.dropdownItemSelector).should('be.visible').eq(index).click();
        cy.wait(3000);
        // to check URL value
        if (checkURL)
            this.validateURL(dropdownItemsURL);
    }

    // checks subject content at the 'Learn Forward in the Curriculum' section
    checkSubjectContents(checkNotContainedSubject = false, specificSubject) {
        testData.subjects.forEach((subjectItems, index) => {
            cy.get(selectors.contentSelector).should('contain', subjectItems);
        });

        if (checkNotContainedSubject) {
            cy.get(selectors.contentSelector).should('not.contain', specificSubject);
        } else {
            cy.get(selectors.contentSelector).should('contain', specificSubject);
        }
    }

    // only checks mathematics subject for now, can be improved to check every subjects
    clickOnSubjectAndCheckURL(index) {
        cy.get(selectors.subjectSelector).eq(0).should('contain', testData.subjects[0]).click();
        cy.wait(2000);
        this.validateURL(`grade-${index}-mathematics`);
    }
}

export default HelperFunctions;
