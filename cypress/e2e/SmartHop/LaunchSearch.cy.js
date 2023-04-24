describe('launch a search', () => {
    it('Verify login in page', () => {
      
      cy.visit('https://development.app.smarthop.co/login');
      cy.viewport(1500,700);
      cy.get('input[type=email]').type('ndiaz+carrier1@smarthop.co');
      cy.get('input[type=password]').type('123456');
      cy.get('button[type=submit]').click();
      cy.contains('DDDD').click();
      cy.wait(4000);
      cy.get('#fuse-navbar-side-panel > div > ul > a.jss856.jss845.jss843.jss879.type-item.dense.fuse-list-item.flex.flex-col.items-center.justify-center.p-12.jss852.jss853')
      .should ("contain", "search").click();
      cy.wait(1000);
      cy.xpath("(//input[@data-lpignore='true'])[1]").click();
      cy.contains("VAN-AAAaaa(D)").click();
      cy.xpath("(//input[@data-lpignore='true'])[2]").type("Miami").click();
      cy.xpath("//p[text()='Search']").click();
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        
      })


})