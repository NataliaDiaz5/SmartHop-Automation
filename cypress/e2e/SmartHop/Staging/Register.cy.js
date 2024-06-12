describe('Register in Smarthop Demo', () => {
    it('Verify Register page', () => {
    cy.visit('https://staging.app.smarthop.co/register');
    cy.get('input[name=first_name]').type('Auto Register');
    cy.wait(1000);
    cy.get('input[name=last_name]').type('Regression Testing');
    cy.wait(1000);
    cy.get('input[type=email]').type('ndiaz+carrier611@smarthop.co');
    cy.get('input[name=phone]').type('+573112163858');
    cy.wait(2000);
    cy.get('#mui-component-select-typeCompany').click();
    cy.get('li[data-value=OWNER_OPERATOR]').click();
    cy.get('input[name=numberTrucks]').type('5');
    cy.get('#mui-component-select-equipment').click();
    cy.get('li[data-value=REEFER]').click(); 
    //MC is required only for owner operator type of company
    cy.get('input[name=carrier_mc_number]').type('100001');
    cy.get('input[name=password]').type('123456');
    cy.wait(1000);
    cy.get('input[name=passwordConfirm]').type('123456');
    cy.wait(3000);
    //cy.get('input[type=checkbox]').click();

    //cy.get('div[class=recaptcha-checkbo-border]').click();
    // cy.contains('not a robot').click()
    // cy.wait(3000)
    // cy.get('button[type=submit]').click();

    })
})

 