//search gofetch on google
describe('My First Test', () => {
    beforeEach(() => {
    cy.visit('https://www.google.com')
})
    it('Gets, types and asserts - type into a DOM element', () => {
    cy.get('.a4bIc').type('GoFetch Health: home')
    cy.contains('.sbl1').click()
    cy.wait(1000)
    cy.get('.TbwUpd.NJjxre')
    cy.contains('GoFetch Health: Home').click()

  })
})
