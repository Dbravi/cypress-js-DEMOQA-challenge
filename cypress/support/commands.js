/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

beforeEach(() => {
	cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
});

Cypress.Commands.add('getAutocompletedValues', () => {
	const autocompletedValues = [];
	return cy
		.get('.auto-complete__multi-value__label')
		.each(element => {
			autocompletedValues.push(element.text());
		})
		.then(() => {
			return autocompletedValues;
		});
});

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
