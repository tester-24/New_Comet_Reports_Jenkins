/// <reference types="cypress"/>

//import { should } from "chai";
//import { LoginPage } from "./comet_login.cy.js"
//const lp = new LoginPage
describe("New_Funds_Withdrawal_BrokerSide", () => {
it('Comet_Jainam', () => {
  cy.viewport(1500, 1000);

  cy.visit('https://jplus.jainam.in/')
  //cy.get('.login-space-btn').click({ force: true })
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
  cy.wait(3000)

  //click on comet icon
  //  cy.wait(500) 
   cy.xpath('/html/body/app-layout/app-dashboard/section/div/div/div/div/a[3]').invoke("removeAttr", "target") // Remove target="_blank" to avoid opening a new tab
   .click({timeout:3000});  
  cy.wait(2000);
   cy.xpath("//button[@aria-label='Close']").click({force:true});
  cy.wait(500)

  // click on funds
  // cy.wait(10000)
  // click on funds
  cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[3]/a').click({ force: true })
  cy.scrollTo('top')
  //click on withdraw
  cy.wait(5000)
  //cy.get('.mt-5 > .pay-in > .payin-btn > .submit-btn').should('be.visible')
  // cy.get('.mt-5 > .pay-in > .payin-btn > .submit-btn').click({force:true})
  cy.xpath('/html/body/app-root/app-layout/div/app-funds/div[1]/div/div/div/div[2]/div/div[3]/button').click({ force: true })
  Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
  });

  //enter code 
  cy.wait(1000)
  cy.get('.col-lg-4 > .ng-untouched').type('m3903')
  //click on submit button
  cy.get('.col-lg-2 > .btn').should('be.visible')
  cy.get('.col-lg-2 > .btn').click({ force: true })
  cy.wait(1000)
  if (cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td/text()').should('not.be.visible')) {
    //cy.log('no data found')
    cy.wait(3000)
    // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table').scrollTo(500,0)
    // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td[6]/div/kendo-numerictextbox/input').should('be.visible')
    cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[6]/div/kendo-numerictextbox/input').clear().type(1)
    //click on submit button
    cy.get('.text-end > .btn').should('be.visible')
    cy.get('.text-end > .btn').click()
    // check for sucess message 
    cy.wait(2000)
    cy.get('.ng-trigger').should('be.visible')

    //delete request
    cy.get('[data-kendo-grid-item-index="1"] > [data-kendo-grid-column-index="0"] > .icon-button > img').click()
    //click on delete option
    cy.get('.k-actions > .btn-primary').click()
    //requst wa sdelete sucessufully
    cy.wait(1000)
    cy.get('.ng-trigger').should('be.visible')
  }
  else {
    // //if data is there it cheks 
    // cy.wait(3000)
    // if(cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').its('length').should('be.greaterThan', 0))
    // {
    //   cy.wait(3000)       
    //  // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table').scrollTo(500,0)
    //  // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td[6]/div/kendo-numerictextbox/input').should('be.visible')
    //   cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[6]/div/kendo-numerictextbox/input').clear().type(1)
    //   //click on submit button
    //   cy.get('.text-end > .btn').should('be.visible')
    //   cy.get('.text-end > .btn').click()
    //   // check for sucess message 
    //   cy.wait(2000)
    //   cy.get('.ng-trigger').should('be.visible')

    //   //delete request
    //   cy.get('[data-kendo-grid-item-index="1"] > [data-kendo-grid-column-index="0"] > .icon-button > img').click()
    //   //click on delete option
    //   cy.get('.k-actions > .btn-primary').click()
    //   //requst wa sdelete sucessufully
    //   cy.wait(1000)
    //   cy.get('.ng-trigger').should('be.visible')
    cy.log('Data not found')
  }

  // logout   1126 live
  // click on user profile 
  cy.get('.user-icon').click({ force: true })
  cy.wait(1000)
  cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({ force: true })
  // cy.get('.mt-4 > :nth-child(4)').click({force:true})
  cy.wait(1000)

})


})
