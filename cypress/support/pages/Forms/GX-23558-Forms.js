class Forms {
	get = {
		mainTitle: () => cy.get('.playgound-header'),
		firstName: () => cy.get('#firstName'),
		lastName: () => cy.get('#lastName'),
		userEmail: () => cy.get('#userEmail'),
		userGender: () => cy.get('#genterWrapper [class=custom-control-input]'),
		userNumber: () => cy.get('#userNumber'),
		userDateOfBirth: () => cy.get('#dateOfBirthInput'),
		userSubjects: () => cy.get('#subjectsContainer'),
		userSubjectChoice: () => cy.get('#react-select-2-option-0'),
		userHobbies: () => cy.get('#hobbiesWrapper [class=custom-control-input]'),
		uploadPictureButton: () => cy.get('#uploadPicture'),
		userAddress: () => cy.get('#currentAddress'),
		userState: () => cy.get('#state'),
		dropdownOptions: () => cy.get('[class$=option]'),
		dropdownStateText: () => cy.get('[class$=singleValue]'),
		userCity: () => cy.get('#city'),
		submitButton: () => cy.get('#submit'),
	};

	firstName(randomName) {
		randomName && this.get.firstName().type(randomName);
	}

	lastName(randomLastName) {
		randomLastName && this.get.lastName().type(randomLastName);
	}

	userEmail(randomEmail) {
		randomEmail && this.get.userEmail().type(randomEmail);
	}

	selectRandomGender() {
		let randomIndex;
		return this.get
			.userGender()
			.then(largo => {
				randomIndex = Cypress._.random(0, largo.length - 1);
				this.get.userGender().eq(randomIndex).click({ force: true });
			})
			.then(() => {
				return randomIndex;
			});
	}

	userNumber(randomNumber) {
		randomNumber && this.get.userNumber().type(randomNumber);
	}

	userSubjects(randomSubject) {
		randomSubject && this.get.userSubjects().type(randomSubject);
	}

	userSubjectChoice() {
		this.get.userSubjectChoice().click({ force: true });
	}
	userHobbies() {
		let randomCheck;
		return this.get
			.userHobbies()
			.then(laargo => {
				randomCheck = Cypress._.random(0, laargo.lenght - 1);
				this.get.userHobbies().eq(randomCheck).click({ force: true });
			})
			.then(() => {
				return randomCheck;
			});
	}

	uploadPictureButton() {
		this.get.uploadPictureButton().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	selectRandomState() {
		let stateText;
		this.get.userState().click();
		return this.get
			.dropdownOptions()
			.then(options => {
				const randomIndex = Cypress._.random(0, options.length - 1);
				this.get
					.dropdownOptions()
					.eq(randomIndex)
					.then(nameSelectedOption => {
						stateText = nameSelectedOption.text();
					})
					.click({ force: true });
			})
			.then(() => {
				return stateText;
			});
	}

	userCity() {
		this.get.userCity().click();
	}
	userAddress(randomAddress) {
		randomAddress && this.get.userAddress().type(randomAddress);
	}
}
export const forms = new Forms();
