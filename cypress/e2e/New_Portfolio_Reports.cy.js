/// <reference types="cypress"/>

//import { LoginPage } from "./comet_login.cy.js"
//const loginPage = new LoginPage
describe('New_Portfolio_Reports ',() =>
  {
    it.only('New_Portfolio_Report_Myholding', () => {
    cy.Login();
    //Click on Portfolio
    
    cy.get('[href="#/portfolio"]').click({force:true})

    //click on category drop down
    cy.wait(3000)
    cy.xpath('/html/body/app-root/app-layout/div/app-portfolio/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').click()
    //select my holding
    cy.wait(1500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click({force:true})
    //Enter Code
    cy.get('.segment2_Text > .w-100').type('wa5320')
    //click on submit button
    cy.get('.d-flex > .btn').click()
    cy.wait(4000)
   if(cy.get('.form-control').should('be.visible'))
   {
    //Send mail
    cy.get('[title="Send Email"] > img').should('be.visible')
    cy.get('[title="Send Email"] > img').click()
    //check mail message success
    cy.wait(1000)
    cy.get('.ng-trigger').should('be.visible')

    //Click on Download icon
    cy.get('[title="Download Report"] > img').should('be.visible')
    cy.get('[title="Download Report"] > img').click({force:true})

    //click on download button 
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    //Click on close button 
   cy.wait(4000)
   cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > [data-bs-dismiss="modal"]').click()
   }
   else{
    cy.log('Data not found')
   }
  })
  it.only('New_Portfolio_Report_MyPosition', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.Login()
    //Click on Portfolio
    cy.get('[href="#/portfolio"]').click({force:true})

    //click on category drop down
    cy.wait(2000)
    cy.xpath('/html/body/app-root/app-layout/div/app-portfolio/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').click()
    //select my position
    cy.wait(2000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click({force:true})
    //Enter Code
    cy.get('.segment2_Text > .w-100').type('wa5320')
    //click on submit button
    cy.get('.d-flex > .btn').click()
    cy.wait(2000)
   if(cy.get('[title="Send Email"] > img').parent().should('be.disabled'))
   {
    cy.log('data not found')
   }
   else
   {

   
    //Send mail
    cy.get('[title="Send Email"] > img').should('be.visible')
    cy.get('[title="Send Email"] > img').click()
    //check mail message success
    cy.wait(1000)
    cy.get('.ng-trigger').should('be.visible')

    //Click on Download icon
    cy.get('[title="Export Report"] > img').should('be.visible')
    cy.get('[title="Export Report"] > img').click()

    //click on download button 
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    //Click on close button 
   cy.wait(2000)
   cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > [data-bs-dismiss="modal"]').click()
}

})
  })
