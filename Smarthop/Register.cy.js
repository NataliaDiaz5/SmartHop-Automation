describe('Register in Smarthop Demo', () => {
    it('Verify Register page', () => {
    cy.visit('https://development.app.smarthop.co/register');
    cy.get('input[name=first_name]').type('Laura');
    cy.wait(1000);
    cy.get('input[name=last_name]').type('Machuca');
    cy.wait(1000);
    cy.get('input[type=email]').type('ps+carrier10@smarthop.co');
    cy.get('input[name=phone]').type('+584241975333');
    cy.wait(2000);
    cy.get('div[id=mui-component-select-carrier_type]').click();
    cy.get('li[data-value=OWNER_OPERATOR]').click();
    cy.get('input[name=number_trucks]').type('25');
    cy.get('input[name=password]').type('123456');
    cy.wait(1000);
    cy.get('input[name=passwordConfirm]').type('123456');
    cy.wait(3000);
    cy.get('input[type=checkbox]').click();
    cy.get('div[class=recaptcha-checkbox-border]').click();
    // cy.contains('not a robot').click()
    cy.wait(3000);
    cy.get('button[type=submit]').click();


    })
})