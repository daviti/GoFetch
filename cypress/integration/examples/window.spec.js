

context('GoFetch', () => {
  beforeEach(() => {
    cy.visit('https://gofetch.ca')
  })

  it('cy.window() - get the global window object', () => {
    // https://gofetch.ca
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://gofetch.ca
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    /// gets title from homepage
    cy.title().should('include', 'GoFetch')
  })
})
