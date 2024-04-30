/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://microsite.tht.company/microsite/2386765/filling-out/5173282')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[type=text]').type('natadiazf@hotmail.com')
    cy.get('input[type=password]').type('Catalina2021*')
    cy.get('button[type=submit]').click();
    cy.wait(20000);
    //cy.get('input[type=email]').type('ndiaz+carrier122@smarthop.co');

    cy.contains("Totalmente de acuerdo.").click()
  }
  )
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
}
)