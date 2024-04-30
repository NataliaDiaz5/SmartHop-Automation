describe('Fill the onboarding performance', () => {
    it('Verify login in page', () => {
      
      cy.visit('https://staging.app.smarthop.co/login');
      cy.viewport(1500,700);
      //carrier25 has changes requested. To test
      cy.get('input[type=email]').type('ndiaz+carrier318@smarthop.co');
      cy.get('input[type=password]').type('123456');
      cy.get('button[type=submit]').click();
      //cy.contains('100001').click();
      cy.wait(10000);
      cy.get('.jss872 > .w-32 > .material-icons').click();
      cy.wait(5000);
      cy.contains("Skip").click();
// Utilizando la clase, el atributo name, el tipo y el valor para identificar el radio button
        cy.get('input.jss1096[name="equipment"][type="radio"][value="YES"]').click();
      // Utilizando la clase y el atributo name para identificar el radio button
        //cy.get('input.jss1109[name="knowValues"][type="radio"][value="YES"]').click();
        cy.get('button[type=submit]').click();
        // Utilizando las clases para identificar el elemento span
        cy.get('.md\:w-9\/12 > .overflow-y-scroll').click();
        cy.get('.md\:w-9\/12 > .overflow-y-scroll');
        cy.contains("Continue").click();


      //cy.xpath("(//input[@data-lpignore='true'])[2]").type("Miami").click();
      cy.xpath("//p[text()='Search']").click();
      cy.wait(20000)
      cy.xpath("//p[@class='jss1018 px-14 text-12 font-normal max-w-210 truncate jss1020 jss1041' and contains(text(),'New Search')]").click();    
      cy.get('#mui-50877').click();
      cy.contains("Flatbed").click();
      cy.xpath("(//input[@data-lpignore='true'])[2]").type("Chicago").click();
      cy.xpath("//p[text()='Search']").click();
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        
      })


})