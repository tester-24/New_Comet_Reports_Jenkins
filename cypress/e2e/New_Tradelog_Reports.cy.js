/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 

describe('New_Tradelog_ReportS ',() =>
  {
it('New_Tradelog_Reports_FY_2023-2024', () => 
   {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.Login2();    
    //Select Tradelog
    cy.wait(500)
    cy.get('[href="#/tradelog"]').click({force:true})
    cy.wait(1000)
    cy.scrollTo('top')
   //Reports for Year 2023-2024
     //Click on year dropdown
     cy.wait(1000)
     cy.xpath('/html/body/app-root/app-layout/div/app-tradelog/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
     //Select year 2023-2024
     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
     cy.wait(500)
     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
     //Click on Download Button
     cy.get('.btn').should('be.visible')
     cy.get('.btn').click()
     cy.wait(3000)
      // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)

})

it('New_Tradelog_Reports_FY_2024-2025', () => {
  cy.Login2();
  //Select Tradelog
  cy.wait(500)
  cy.get('[href="#/tradelog"]').click({force:true})
  cy.wait(1000)
  cy.scrollTo('top')
  //Click on year dropdown
  cy.xpath('/html/body/app-root/app-layout/div/app-tradelog/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
  //Select year 2024-2025
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').should('be.visible')
  cy.wait(500)
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click()
  //Click on Download Button
  cy.get('.btn').should('be.visible')
  cy.get('.btn').click()
  cy.wait(3000)
   // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
 
})


})
