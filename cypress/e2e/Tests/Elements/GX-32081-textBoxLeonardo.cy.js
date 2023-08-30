describe('GX-32081-✅-tools-qa-elements-text-box-fill-form-and-submit', () => {
	beforeEach('Visitar la pagina DemoQA', () => {
		cy.visit('/text-box');
	});
	//todo: Forma 1
	it('32082 | TC1: Validar resultado después de completar formulario con datos validos', () => {
		//todo: Completar formularios
		textBoxPage.fillInputUserName(data.valid.userName);
		textBoxPage.fillInputEmail(data.valid.userEmail);
		textBoxPage.fillInputCurrentAddress(data.valid.userCurrentAddress);
		textBoxPage.fillInputPermanentAddress(data.valid.userPermanentAddress);
		textBoxPage.clickOnSubmitButton();
		//todo: Validaciones
		textBoxPage.get.nameResult().should('contain', data.valid.userName);
		textBoxPage.get.emailResult().should('contain', data.valid.userEmail);
		textBoxPage.get.currentAddressResult().should('contain', data.valid.userCurrentAddress);
		textBoxPage.get.permanentAddressResult().should('contain', data.valid.userPermanentAddress);
	});
	//todo: Forma 2
	it('32082 | TC1: Validar resultado después de completar formulario con datos validos', () => {
		textBoxPage.completeForm({
			userName: data.valid.userName,
			email: data.valid.userEmail,
			currentAddress: data.valid.userCurrentAddress,
			permanentAddress: data.valid.userPermanentAddress,
		});
		//todo: Validaciones
		textBoxPage.get.nameResult().should('contain', data.valid.userName);
		textBoxPage.get.emailResult().should('contain', data.valid.userEmail);
		textBoxPage.get.currentAddressResult().should('contain', data.valid.userCurrentAddress);
		textBoxPage.get.permanentAddressResult().should('contain', data.valid.userPermanentAddress);
	});
});
import data from '../../../fixtures/data/GX-32081-textBoxLeonardo.json';
import { textBoxPage } from '@pages/Elements/GX-32081-textBoxLeonardo.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
