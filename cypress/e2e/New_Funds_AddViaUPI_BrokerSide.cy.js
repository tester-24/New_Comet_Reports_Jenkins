/// <reference types="cypress"/>
/// <reference types="cypress-iframe" /> 

//import { LoginPage } from "./comet_login.cy.js"
//const lp = new LoginPage
describe('New_Funds_AddViaUPI_Broker ',() =>
  {
     it('Comet_Jainam', () => {
  cy.visit('https://comet.jainam.in/#/startup')
  cy.get('.login-space-btn').click({force:true})
  //Login Flow
  cy.wait(1000)

  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('1126')
  
  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
  
  // enter password
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Jainam@123')
  
  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
  
  // enter the pin 
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)
  cy.wait(5000)
   //click on comet icon
   cy.wait(500) 
   cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
   .click({timeout:3000});  
   
   // click on funds
   cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[3]/a').click({ force: true })
    cy.scrollTo('top')

    //click on add vai UPI
    cy.wait(3000)
   // cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
        });
      });
      cy.wait(4000)
      cy.xpath('/html/body/app-root/app-layout/div/app-funds/div[1]/div/div/div/div[1]/div/div[3]/button[1]').click();
      
      // Verify that the page or URL is updated
      cy.wait(1000)
      cy.url().should('include', 'https://cash.jainam.in/Payment/BrokerMakePayment');
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      //verify image is visible in payment page 
      cy.wait(500) 
      cy.get('.payment-image')
      //Enter code
      cy.wait(500)
      cy.get('#txtTreadingCode').type('wa5320')
      //click 
      cy.get('#txtUIPINo').click()
      //enter amount 
      cy.wait(500)
      cy.get('#txtUPIAmount').clear().type('1')
      //Invoke values bank details and UPI iD
      cy.wait(500)
      cy.get('#ddUPIBankDetails').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
      cy.get('#txtUIPINo').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })

      //click on submit button
       cy.get('#btnSubmit').should('be.visible')
       cy.get('#btnSubmit').click()
       //verify razorepay pay button is visible 
       cy.wait(500)
     cy.get('body').should('be.visible')
    // close the pop 
     cy.wait(3000)

     //back to funds page
     cy.visit('https://comet.jainam.in/#/funds')
    
  // logout   1126 live
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1000)
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)

    // cy.xpath('/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]').click()
    // cy.frameLoaded('_hjSafeContext_61597009')
   //  cy.iframe().xpath('/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]').click()
    
})
    
})
