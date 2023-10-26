describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:3000/signin')

    cy.get('#email').type('ryosuke.yano@meatup.com')
    cy.get('#password').type('meatup2929')
    cy.get('button[type=submit]').click()

    cy.contains('p', 'Not sure where to go? Perfect.')
  })
})
