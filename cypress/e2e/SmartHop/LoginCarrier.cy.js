describe('Log in Smarthop with Multi-account', () => {
  it('Verify login in page', () => {
    cy.visit('https://development.app.smarthop.co/');
    cy.get('input[type=email]').type('ndiaz+carrier1@smarthop.co');
    cy.get('input[type=password]').type('123456');
    cy.wait(2000);
    cy.get('button[type=submit]').click();
    cy.contains('DDDD').click();
    // cy.get('span[type=jss990]').click();
  
})
})




