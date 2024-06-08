describe('MockProjectTest',()=>{
    it("set-one",()=>{
  cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
   cy.get("input#firstName").type("PIQONE")//id locator
   cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQONE")//id locator
   cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id locator
   cy.get("[placeholder=City]").type("NEW YORK")//id locator
   cy.get("select[name=state").select("New York")
   cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//id locator
   cy.get("input#ssn[type=password]").type("9999")//id locator
   cy.get("#income[data-test-pqo=income]").type("10,000")//id locator
   cy.get("#nonTaxIncome").type("9,000")//id locator
// cy.get("#enhanced-table-checkbox-65cc71f08a3d1447377139f3").contains("Shape of You");
    })

    //set two
    it("set-two",()=>{
        cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
         cy.get("input#firstName").type("PIQTWO")//id locator
         cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQTWO")//id locator
         cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id locator
         cy.get("[placeholder=City]").type("NEW YORK")//id locator
         cy.get("select[name=state]").select("New York")//id locator
         cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//id locator
         cy.get("input#ssn[type=password]").type("9999")//id locator
         cy.get("#income[data-test-pqo=income]").type("100,000")//id locator
         cy.get("#nonTaxIncome").type("none")//id locator
      // cy.get("#enhanced-table-checkbox-65cc71f08a3d1447377139f3").contains("Shape of You");
          })

          //set three
          it("set-two",()=>{
            cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
             cy.get("input#firstName").type("PIQTHREE")//id locator
             cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQTHREE")//id locator
             cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id locator
             cy.get("[placeholder=City]").type("NEW YORK")//id locator
             cy.get("select[name=state").select("New York")//id locator
             cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//id locator
             cy.get("input#ssn[type=password]").type("9999")//id locator
             cy.get("#income[data-test-pqo=income]").type("90,000")//id locator
             cy.get("#nonTaxIncome").type("50,000")//id locator
          // cy.get("#enhanced-table-checkbox-65cc71f08a3d1447377139f3").contains("Shape of You");
              })
})