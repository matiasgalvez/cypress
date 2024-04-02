/// <reference types="cypress" />

context('Test cases', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080)
	})
	it('Visit Distillery and navigate to open QA positions', () => {
		cy.visit('https://distillery.com/')
		cy.get('[id="hs-eu-confirmation-button"]').click()
		cy.xpath(`//*[normalize-space(.)="Careers"]`).eq(0).click().then(() => {
			cy.url().should('eq', 'https://distillery.com/careers/')
		});
		cy.xpath(`//*[normalize-space(.)="View open positions"]`).invoke('removeAttr', 'target').click().then(() => {
			cy.url().should('eq', 'https://careers.distillery.com/#/')
		});
		cy.xpath(`//span[normalize-space()='QA (2)']`).click()
	})
})
