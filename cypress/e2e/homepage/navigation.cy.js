import HelperFunctions from "../../testUtilities/helperFunctions";
import Selectors from "../../selectors/selectors";

describe('Homepage page load', () => {
    const helperFunctions = new HelperFunctions();
    const selectors = new Selectors();
    beforeEach(() => {
        helperFunctions.visit();
    });

    it('should load the homepage successfully', () => {
        cy.request('/').its('status').should('eq', 200);
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        cy.get('header').should('be.visible');
    });

    it('should contain a visible site logo that navigates to the homepage', () => {
        cy.get(selectors.tvoLearnLogoSelector).should('be.visible').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
});
