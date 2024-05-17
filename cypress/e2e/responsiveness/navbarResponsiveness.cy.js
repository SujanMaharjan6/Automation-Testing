import HelperFunctions from "../../testUtilities/helperFunctions";
import Selectors from "../../selectors/selectors";

describe('Homepage page load', () => {
    const helperFunctions = new HelperFunctions();
    const selectors = new Selectors();

    it('should test the responsiveness of the navbar for 1280 by 720 viewport', () => {
        helperFunctions.visit();
        cy.get(selectors.navItemSelector).should('be.visible');
        cy.get(selectors.buttonForSmallSizeScreen).should('not.be.visible');
    });

    it('should test the responsiveness of the navbar for 820 by 1180 viewport (ipad)', () => {
        cy.viewport(820, 1180);
        cy.visit('/');
        cy.get(selectors.navItemSelector).should('not.be.visible');
        cy.get(selectors.buttonForSmallSizeScreen).should('be.visible');
    });
});
