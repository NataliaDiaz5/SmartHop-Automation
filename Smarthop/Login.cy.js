const { find } = require("cypress/types/lodash")

describe('login spec', () => {
  it('passes', () => {
    cy.visit('https://staging.app.smarthop.co/')
  })
  it('Create a new dispatcher', () => {
    cy.get('input[id=fuse-main]').type('ndiaz+carriercy@smarthop.co')
    cy.get('input[type=password]').type('123456')
    cy.get('button[type=submit]').click()
    cy.get('span[type=jss990]').click()
  
})
})



