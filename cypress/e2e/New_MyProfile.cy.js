/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 


it('Comet_Jainam', () => {
  cy.visit('https://comet.jainam.in/#/startup')
  cy.wait(1000)
  cy.get('.login-space-btn').click({force:true})
  //Enter the userid
  cy.wait(1000)
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input').type('M3903')
  
  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]').click()
  
  // enter password
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input').type('Nirav@789')
  
  //click on continue button
  cy.xpath('/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button').click()
  
  // enter the pin 
  cy.get('#pin1').type(1)
  cy.get('#pin2').type(2)
  cy.get('#pin3').type(3)
  cy.get('#pin4').type(4)
  cy.wait(5000)
  // cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
   cy.window().then((win) => {
       cy.stub(win, 'open').callsFake((url) => {
         win.location.href = url;
       });
     });
     cy.wait(2000)
     cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
     
     // Verify that the page or URL is updated
     cy.wait(4000)
     cy.url().should('include', 'https://comet.jainam.in/#/corporate-actions');
     Cypress.on('uncaught:exception', (err) => {
       // returning false here prevents Cypress from
       // failing the test
       console.log('Cypress detected uncaught exception: ', err);
       return false;
     });
    //click on profile
    cy.wait(5000)
    cy.get('.user-icon').should('be.visible')
    cy.get('.user-icon').click({force:true})

    //click on my details
    cy.wait(2000)
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
   
    // assertion for label
    cy.get('.row > .col-md-7').should('be.visible')
   
    //Assertion for image
    cy.get('.male-profile-new-img').should('be.visible')
   
    // //Assertion for personal details
    cy.get('#mydetails > :nth-child(1)').should('be.visible')
   
    //  //Assertion for personal details table 
    cy.get('#mydetails > .row.mb-4').should('be.visible')

   //assertion for bank details
   cy.scrollTo(0,300)
   cy.get('#BankIndicators > .carousel-inner > .active').should('be.visible')
  
   // //assertion for dp details
   cy.get('#DPIndicators > .carousel-inner > .active').should('be.visible')

   // Broker details
   cy.scrollTo(0,300)
   cy.get('#BrokerageIndicators > .carousel-inner > .active').should('be.visible')

   //Nominee details
   cy.scrollTo(0,300)
   cy.get('#NomineeIndicators').should('be.visible')
  // cy.scrollTo('top')

    // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(500)
      // click on logout 
     cy.xpath('/html/body/app-layout/app-header/header/div/nav/ul/li[4]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
})
