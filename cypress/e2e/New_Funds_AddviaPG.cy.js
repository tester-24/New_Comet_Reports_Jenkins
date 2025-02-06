/// <reference types="cypress"/>
/// <reference types="cypress-iframe" /> 

import 'cypress-iframe';
//import { LoginPage } from "./comet_login.cy.js"
//const lp = new LoginPage
describe('New_Funds_AddViaPG ',() =>
  {
it('Comet_Jainam', () => {
  cy.visit('https://comet.jainam.in/#/startup')
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    cy.wait(3000)
  
    cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('wa5320')
    
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
    // click on funds 
    cy.get(':nth-child(3) > .nav-link').click({force:true})
   // cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[2]/a[1]/span[1]/img[2]").click({force:true})
    // cy.wait(500)
   //  cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
    // cy.wait(500)
  //    cy.window().then((win) => {
  //           cy.stub(win, 'open').callsFake((url) => {
  //             win.location.href = url;
  //           });
  //         });
  //         cy.wait(2000)
  //      //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
  //    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[2]/a[1]/span[1]/img[2]').click({force:true})
    
  //  // cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[2]/a[1]/span[1]/img[2]").click({force:true})
  //   // cy.wait(500)
  //   // cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
  //   // cy.wait(500)
     cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
              win.location.href = url;
            });
          });
          cy.wait(2000)
       //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
     cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/app-funds[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]").click({force:true})
      
      // Verify that the page or URL is updated
      cy.wait(1000)
      cy.url().should('include', 'https://cash.jainam.in/Payment/MakePayment');
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
 
     //verify image is visible 
      cy.get('.graphics-image > img').should('be.visible')
      // click on bhim upi 
      cy.wait(1000)
      cy.get(':nth-child(2) > .text-center > .tab-div > .title_icon').should('be.visible')
      cy.get(':nth-child(2) > .text-center > .tab-div > .title_icon').click()
            
      //verify bank details fetch 
      cy.get('#ddUPIBankDetails').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
       //verify upi details fetch 
       cy.get('#txtUIPINo').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
    //enter amount
    cy.get('#txtUPIAmount').clear().type(1)
    //Click on submit
    cy.get('.graphics-image > img').should('be.visible')
    cy.get('#UPI > .pt-4 > #btnSubmit').click()
    //verify pop up comes
   //cy.wait(5000)
   cy.get('body').should('be.visible')
   cy.wait(2000)

   // back to https://uatcomet.jainam.in/#/funds
   cy.visit('https://comet.jainam.in/#/funds')
   // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(1500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
//    cy.frameLoaded("razorpay-checkout-frame")
//    cy.wait(1000)
//    cy.iframe('razorpay-checkout-frame').find('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button')
//    .click({force:true})
    // cy.get("#UPI button").click();
  //  cy.get("/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button").click({force:true});

//   cy.iframe().xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/button[1]').click()
        //   cy.visit("https://cash.jainam.in/Payment/MakePayment")
         //  cy.findByRole("button",{"name":"Submit"}).click()
        //   //Accessed from a protected iframe with source https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=93f84df8b76999357bd8c981b609d07c9fe85c96&checkout_v2=1&new_session=1&session_token=46E00FB0E8217640C91FAEBD5531066ABD012C4DF27C2F865BF6105186A740C6912320042A0E0695446F53AB0CEECE1D84F1291CCD59EC0249019829528C480FB2863063312380F1F11CD8AD42FDA21C231731B25A868D0B25A586DDF6D5A525C0C337715BF3F94C
      
        // // cy.get("div:nth-child(3)>div:nth-child(1)>button:nth-child(1)").click({force:true})
        // cy.get("#scroll-container").within(() => {
        //     cy.get("div:nth-child(3)>div:nth-child(1)>button:nth-child(1)").click();
        //   });
   

//  cy.frameLoaded("razorpay-checkout-frame")
//     cy.iframe().find('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button').click({force:true})
//     cy.wait(1000)
    //cy.wait(500)
    //cy.get('body').should('be.visible')
    //cy.screenshot()
  // Assuming the iFrame has an ID of 'myIframe' and the button has a class of 'verify-and-pay'

})
  })
