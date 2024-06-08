describe('MockProjectTest',()=>{
    it("set-one",()=>{
  cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
   cy.get("input#firstName").type("PIQONE")//id locator with tag
   cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQONE")//id,class with tag locator
   cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id,atribute with tag locator
   cy.get("[placeholder=City]").type("NEW YORK")//atribute locator
   cy.get("select[name=state").select("New York")//tag,atribute locator
   cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//tag,class,,id,atribute locator
   cy.get("input#ssn[type=password]").type("9999")//tag,id,atribute locator
   cy.get("#income[data-test-pqo=income]").type("10,000")//id,atribute locator
   cy.get("#nonTaxIncome").type("9,000")//id locator
    })

    //set two
    it("set-two",()=>{
        cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
         cy.get("input#firstName").type("PIQTWO")//id locator with tagr
         cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQTWO")//id,class with tag locator
         cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id,atribute with tag locator
         cy.get("[placeholder=City]").type("NEW YORK")//atribute locator
         cy.get("select[name=state]").select("New York")//tag,atribute locator
         cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//tag,class,,id,atribute locator
         cy.get("input#ssn[type=password]").type("9999")//tag,id,atribute locator
         cy.get("#income[data-test-pqo=income]").type("100,000")//id,atribute locator
         cy.get("#nonTaxIncome").type("none")//id locator
          })

          //set three
          it("set-two",()=>{
            cy.visit("https://card.americanexpress.com/d/pre-qualified-offers/")
             cy.get("input#firstName").type("PIQTHREE")//id locator with tag
             cy.get("input.styles_fieldInput__WKFnz#lastName").type("TIQTHREE")//id,class with tag locator
             cy.get("input#address1[data-test-pqo=address1]").type("IQ Street")//id,atribute with tag locator
             cy.get("[placeholder=City]").type("NEW YORK")//atribute locator
             cy.get("select[name=state").select("New York")//tag,atribute locator
             cy.get("input.styles_fieldInput__WKFnz#zipCode[placeholder='Zip Code']").type("10285")//tag,class,,id,atribute locator
             cy.get("input#ssn[type=password]").type("9999")//tag,id,atribute locator
             cy.get("#income[data-test-pqo=income]").type("90,000")//id,atribute locator
             cy.get("#nonTaxIncome").type("50,000")//id locator
              })
})