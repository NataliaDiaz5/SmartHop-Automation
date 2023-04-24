describe('Log in Smarthop with admin', () => {
    it('Verify login in page with admin', () => {
      cy.visit('https://development.app.smarthop.co/login');
      cy.viewport(1500,700);
      cy.get('input[type=email]').type('ndiaz@smarthop.co');
      cy.get('input[type=password]').type('123456');
      cy.get('button[type=submit]').click();
      cy.get('input[value=EMAIL]').click();
      cy.contains('Continue').click();
      cy.get('input[type=text]').type('123456');
      cy.contains('Continue').click();
      cy.xpath('//*[@id="fuse-navbar-side-panel"]/div/ul/div[4]/div/span')
    .should( "contain", "request_page" ).click();
  })
})