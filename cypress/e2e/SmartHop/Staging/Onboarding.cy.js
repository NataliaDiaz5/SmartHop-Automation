describe('Log in Smarthop with Multi-account', () => {
    it('Verify login in page', () => {
      cy.visit('https://staging.app.smarthop.co/login');
      cy.viewport(1500,700);
      cy.get('input[type=email]').type('ndiaz+carrier611@smarthop.co');
      cy.get('input[type=password]').type('123456');
      
      cy.get('button[type=submit]').click();
      cy.wait(1000);
      cy.contains(' Skip >').click();
      cy.wait(1000);
      cy.contains(' Continue >').click();
      cy.wait(1000);
      cy.contains(' Continue >').click();
      cy.get(':nth-child(1) > .jss544 > .jss1086 > .pb-6 > .jss636 > .jss608').click();
      cy.contains('Dry Van').click();
      cy.contains('Continue').click();
      cy.contains('Star free trial').click();
      cy.contains('Ger Started').click();


    
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    
  })
}
)