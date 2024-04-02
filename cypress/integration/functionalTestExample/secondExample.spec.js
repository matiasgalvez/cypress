/// <reference types="cypress" />

context('Test cases', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080)
	})
	it('Visit Rocketmiles and search for a hotel', () => {
		cy.visit('https://www.rocketmiles.com/')
		cy.xpath('//input[@data-testid="search-destination"]').type('Argentina').then(() => {
            cy.get('[id="downshift-0-item-0"]').click()
        })
        cy.xpath('//td[@aria-label="Choose Monday, August 1, 2022 as your check-in date. It’s available."]').click({force: true}).then(() => {
            cy.xpath('//td[@aria-label="Choose Tuesday, August 2, 2022 as your check-out date. It’s available."]').click({force: true})
        })
        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="search-filters"]').should('be.visible')
	})
})
