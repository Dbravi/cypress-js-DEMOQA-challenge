// yourTest.spec.js
import TextBoxPage from '../../Pages/text-box';
import { faker } from '@faker-js/faker';

// Test Suite
describe('Challenge elements', () => {
	// Preconditions

	// beforeEach('estar en TextBox Page,', () => {
	// 	TextBoxPage.visit();
	// });

	// Test Case
	it('TC1: Should submit form with valid credentials', () => {
		cy.visit('/text-box');
		let name = faker.name.fullName();
		let email = faker.internet.email();
		let currentAddress = faker.address.streetAddress();
		let permanentAddress = faker.address.streetAddress();

		// Steps using Page Object and Selectors
		TextBoxPage.fillForm(name, email, currentAddress, permanentAddress);

		// Assertions using Page Object and Selectors
		TextBoxPage.assertFormValues(name, email, currentAddress, permanentAddress);
	});
	it.only('TC2: Should retrieve the correct amount of array elements', () => {
		cy.visit('/checkbox');
		// Click the expand-all button
		cy.get('.rct-icon-expand-all').click();

		// Use should to assert the length
		cy.get('[for^=tree-node] .rct-title')
			.should('have.length.gt', 0)
			.then($elements => {
				const length = $elements.length;
				const randomIndex = Math.floor(Math.random() * length);

				// Select the randomly chosen element using eq
				for (let index = 0; index < 5; index++) {
					const element = length[index];
					randomIndex++;
					cy.get('[for^=tree-node] .rct-title').eq(randomIndex).click();
				}
			});
	});
});

// it('TC3: Should show selected elements', () => {
Cypress._.random();
// 	cy.get('display-result mt-4').should(contains, 'x');
// });
