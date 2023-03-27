describe('Log in Smarthop Demo', () => {
  it('Verify login in page', () => {
    cy.visit('https://development.app.smarthop.co/');
    cy.get('input[type=email]').type('ndiaz@smarthop.co');
    cy.get('input[type=password]').type('123456');
    cy.wait(2000);
    cy.get('button[type=submit]').click();
   // cy.get('span[type=jss990]').click();
  
})
})




