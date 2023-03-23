
describe('Log in Smarthop Demo', () => {
  it('Verify login in page', () => {
    cy.visit('https://development.app.smarthop.co/login')
  
    cy.get('input[type=email]').type('ps+carrier1@smarthop.co');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();
   
  
})

})

