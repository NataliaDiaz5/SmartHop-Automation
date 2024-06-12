describe('Log in Smarthop with Multi-account', () => {
    it('Verify login in page', () => {
      cy.visit('https://staging.app.smarthop.co/login');
      cy.viewport(1500,700);
      cy.get('input[type=email]').type('ndiaz+carrier611@smarthop.co');
      cy.get('input[type=password]').type('123456');
      
      cy.get('button[type=submit]').click();
      cy.contains('100001').click();
      cy.wait(2000);
      cy.contains('Revenue this month').click();
    
  })

  })