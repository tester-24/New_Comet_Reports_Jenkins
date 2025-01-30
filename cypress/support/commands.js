// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import 'cypress-iframe';
//import '@testing-library/cypress/add-commands';
//Cypress.Commands.add('Login',(Username,password)=> {
Cypress.Commands.add('Login', (Username,password) => {
      
      const user = Username || Cypress.env('Username');
      const pass = password || Cypress.env('password');
      cy.visit('https://comet.jainam.in/#/startup')
      cy.wait(1000)
      cy.get('.login-space-btn').click({force:true})
      //Login Flow
      cy.wait(2000)
    
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
      //click on comet icon
     cy.wait(500) 
     cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
     .click({timeout:3000});     
      // click on Reports
    cy.wait(4000)
    cy.get('#ReportDropdown').click({ force: true })
   
})
Cypress.Commands.add('Login1', (Username,password) => {
      
   const user = Username || Cypress.env('Username');
   const pass = password || Cypress.env('password');
     cy.visit('https://comet.jainam.in/#/startup')
     cy.wait(1000)
     cy.get('.login-space-btn').click({force:true})
     cy.wait(4000)
     cy.get('.userid_wrap > .input_wrap > .text_form').type('M3903')
     cy.get('#LoginPassword').type('Nirav@789')
     cy.xpath("//p[normalize-space()='Login Now']").click({ force: true });
     cy.wait(2000);
     cy.get('[formcontrolname="otp1"]').type('1');
     cy.get('[formcontrolname="otp2"]').type('2');
     cy.get('[formcontrolname="otp3"]').type('3');
     cy.get('[formcontrolname="otp4"]').type('4');
      // click on Reports
     cy.wait(4000)
     cy.get('#ReportDropdown').click({ force: true })
   
})
Cypress.Commands.add('Login2', (Username,password) => {
      
  const user = Username || Cypress.env('Username');
  const pass = password || Cypress.env('password');
  cy.visit('https://comet.jainam.in/#/startup')
  cy.wait(1000)
  cy.get('.login-space-btn').click({force:true})
  //Enter the userid
  cy.wait(3000)
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
  //  cy.window().then((win) => {
  //      cy.stub(win, 'open').callsFake((url) => {
  //        win.location.href = url;
  //      });
  //    });
  //    cy.wait(3000)
  //    cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click({force:true})
     
  //    // Verify that the page or URL is updated
  //    cy.wait(4000)
  //    cy.url().should('include', 'https://comet.jainam.in/#/corporate-actions');
  //    Cypress.on('uncaught:exception', (err) => {
  //      // returning false here prevents Cypress from
  //      // failing the test
  //      console.log('Cypress detected uncaught exception: ', err);
  //      return false;
  //    });
  // // token link
  // //cy.visit('https://uatcomet.jainam.in/#/RedirectToComet/jplus/?6r3+QKbMUDkiMZAdAPLpzYQAAMfXAxRTXy3TwJL/ij2+8yniWqsQN5CxIMcT082BZ79LFbKrXcoNjJLaGLVG0jieh0WNPDsse3ShhS4iRV2Z9q2mTPzOve9U2JSh4DkP')
  // //cy.wait(500)
  // // cy.xpath('/html/body/app-root/app-client-header-navbar/div[1]/div/nav/div[2]/ul/li[3]').click() 
  // // click on Reports
  // cy.wait(1000)
  // cy.get('#ReportDropdown').click({ force: true })
 
 
})

    
