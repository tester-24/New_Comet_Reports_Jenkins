/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 

describe('My Profile ',() =>
  {
it('Comet_Jainam', () => {
  cy.visit('https://jplus.jainam.in/')

 // cy.wait(1000)
  //cy.get('.login-space-btn').click({ force: true })
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
  cy.wait(7000)
  cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/a[1]/span[1]/div[1]").click({force:true})
    // cy.wait(500)
      cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/a[1]/span[1]/div[1]").should('be.visible')
      cy.wait(500)
      cy.window().then((win) => {
             cy.stub(win, 'open').callsFake((url) => {
               win.location.href = url;
             });
           });
           // click on dropdown
           cy.wait(500)
  cy.xpath('/html/body/app-root/app-layout/app-client-header-navbar/div[1]/div/nav/div[3]/ul/li[3]/a/span').click()
  //click on accoubnt details 
  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/div[1]/ul[1]/li[1]/a[1]/span[1]').click({force:true})
           //cy.get('.nav_desktop_user_dropdown > .nav_title').click()
  // click on user iCON
  //cy.get('.user-icon').click({ FORCE: true })
  // CLICK ON MY PROFILE
  // cy.get('.mt-4 > :nth-child(4)').click({force:true})
 // cy.xpath("//label[normalize-space()='My Profile']").click()
 // cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
 // cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/div[1]/ul[1]/li[1]/a[1]").click({force:true})

  cy.get('.row > .col-md-7').should('be.visible')

  //Assertion for image
  cy.get('.male-profile-new-img').should('be.visible')

  // //Assertion for personal details
  cy.get('#mydetails > :nth-child(1)').should('be.visible')

  //  //Assertion for personal details table 
  cy.get('#mydetails > .row.mb-4').should('be.visible')

  //assertion for bank details
  cy.scrollTo(0, 300)
  cy.get('#BankIndicators > .carousel-inner > .active').should('be.visible')

  // //assertion for dp details
  cy.get('#DPIndicators > .carousel-inner > .active').should('be.visible')

  // Broker details
  cy.scrollTo(0, 300)
  cy.get('#BrokerageIndicators > .carousel-inner > .active').should('be.visible')

  //Nominee details
  cy.scrollTo(0, 300)
  cy.get('#NomineeIndicators').should('be.visible')
  // cy.scrollTo('top')

  // logout flow
  // click on user profile 
  cy.get('.user-icon').click({ force: true })
  cy.wait(500)
  // click on logout 
 // cy.xpath('/html/body/app-layout/app-header/header/div/nav/ul/li[4]/div/div/div/div[2]/ul/li[5]/a').click({ force: true })
  cy.get('.mt-4 > :nth-child(5)').click({force:true}) 
  // cy.get('.mt-4 > :nth-child(4)').click({force:true})
  cy.wait(1000)
})
  })
