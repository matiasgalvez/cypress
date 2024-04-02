/// <reference types="cypress" />

context('Test cases', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080)
	})
	it('Visit LenioLabs and navigate to open QA position', () => {
		cy.visit('https://www.leniolabs.com/')
        cy.xpath(`//a[normalize-space()='Jobs']`).click().then(() => {
			cy.url().should('eq', 'https://www.leniolabs.com/open-positions/')
		});
        cy.xpath(`//a[normalize-space()='Get on Board']`).invoke('removeAttr', 'target').click({force:true})
		cy.xpath(`//span[normalize-space()='QA Engineer']`).click({force:true}).then(() => {
			cy.url().should('eq', 'https://www.getonbrd.com/empleos/sysadmin-devops-qa/qa-automation-leniolabs_-remote-b32b')
		});
	})
})
