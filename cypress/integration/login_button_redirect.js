// button_redirect.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
//

describe('Button_redirection', () => {
	it ('Visits the site', () => {
		cy.visit('https://www.legalife.fr/')
		cy.contains('Connexion').click()
		cy.url().should('include', 'inscription/')
	})
})
