describe("Truck Tracker", () => {
    it("should rename the widget to 'Truck tracker'", () => {
        cy.visit('https://development.app.smarthop.co/login');
        cy.viewport(1500,700);
        cy.get('input[type=email]').type('ndiaz+carrier830@smarthop.co');
        cy.get('input[type=password]').type('123456');
        cy.get('button[type=submit]').click();
        cy.get("cy.get('#fuse-main > div.flex.flex-col.flex-auto.min-h-0.relative.z-10 > div > div > div > div > div:nth-child(5)')").should("have.text", "Truck Tracker");
    });

    it("should redirect to Loud Scout section in Truck Plan when Loud Scout icon is clicked", () => {
      cy.visit("https://development.app.smarthop.co/home");
      cy.get("loud_scout_icon_selector").click();
      cy.url().should("include", "/loud_scout_section");
    });
  
    it("should expand certain sections and un-expand 'Load Scout' when Loud Scout icon is clicked", () => {
      cy.visit("page_url_here");
      cy.get("loud_scout_icon_selector").click();
      cy.get("enable_section_selector").should("be.visible");
      cy.get("availability_section_selector").should("be.visible");
      cy.get("search_preferences_section_selector").should("be.visible");
      cy.get("load_scout_section_selector").should("not.be.visible");
    });
  
    it("should add a new truck successfully", () => {
      cy.visit("page_url_here");
      cy.get("add_truck_button_selector").click();
      // Add code to fill in truck details and submit
      // Verify success message or confirmation of truck addition
    });
  });
  