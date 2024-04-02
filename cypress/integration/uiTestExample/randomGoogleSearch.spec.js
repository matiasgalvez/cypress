const functionHelper = require('../../functionHelper')

const randomSearchVar = functionHelper.generateName()
const searchVar = 'random'

context('Google test cases', () => {
  beforeEach(() => {
	cy.visit('https://google.com')
  })

  it('Snapshot should match with search text', () => {
    cy.get('[title="Buscar"]').type(`${searchVar}{enter}`)
    .then(() => {
      cy.get('[aria-label="Buscar"]').toMatchImageSnapshot()
    })
    cy.contains('textarea', searchVar).should('be.visible')
    cy.scrollTo('bottom')
    cy.get('[aria-label="Page 2"]').click()
  })

  it('Should click the first result of a search and validate URL', () => {
    cy.get('[title="Buscar"]').type(`${searchVar}{enter}`)
    cy.contains('RANDOM.ORG').click()
    cy.url().should('eq', 'https://www.random.org/')
  })

  it('Should do a random name search and validate first result', () => {
    cy.get('[title="Buscar"]').type(`${randomSearchVar}{enter}`)
    cy.contains('textarea', randomSearchVar).eq(0).should('be.visible')
    cy.xpath(`//*[normalize-space(.)="${randomSearchVar}"]`).should('be.visible')
  })
})