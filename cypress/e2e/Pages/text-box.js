import { TextBoxSelectors } from '../Selectors/selectors.js';

class TextBoxPage {
	visit() {
		cy.visit('/text-box');
	}

	fillForm(userName, userEmail, currentAddress, permanentAddress) {
		cy.get(TextBoxSelectors.userName).type(userName);
		cy.get(TextBoxSelectors.userEmail).type(userEmail);
		cy.get(TextBoxSelectors.currentAddress).type(currentAddress);
		cy.get(TextBoxSelectors.permanentAddress).type(permanentAddress);
		cy.get(TextBoxSelectors.submitButton).click();
	}

	assertFormValues(userName, userEmail, currentAddress, permanentAddress) {
		cy.get(TextBoxSelectors.submitName).should('contain.text', userName);
		cy.get(TextBoxSelectors.userEmail).should('have.value', userEmail);
		cy.get(TextBoxSelectors.currentAddress).should('have.value', currentAddress);
		cy.get(TextBoxSelectors.permanentAddress).should('have.value', permanentAddress);
	}
}

export default new TextBoxPage();
