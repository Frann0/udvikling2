describe('Renders website', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:5174')
  })
})

describe('request site', () => {
  it('checks status code', () => {
    cy.request('http://localhost:5174').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('Test navigation', () => {
  it('Test navigation', () => {
    cy.visit('http://localhost:5174')
    cy.get('a').contains('About').click()
    cy.url().should('include', '/about')
  })
})
