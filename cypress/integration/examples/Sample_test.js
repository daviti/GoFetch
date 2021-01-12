//search gofetch on google
describe('My First Test', () => {
    beforeEach(() => {
    cy.wait(1000)
    //open goole.com
    cy.visit('https://google.com')
    cy.wait(1000)
})
    //assert what will be used to search, inout, select, send
    it('Get, type and assert - type into a DOM element', () => {
    //search for the element
    cy.get('.a4bIc').type('GoFetch Health: home')
    //Select the search
    cy.contains('.sbl1').click()
    cy.wait(1000)
    //Selects link from search
    cy.get('.TbwUpd.NJjxre')
    //Homepage opens
    cy.contains('GoFetch Health: Home').click()

  })
})
