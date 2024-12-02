/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 
describe('New_Dividend_Reports ',() =>
  {
    it('New_Dividend_Reports_FY_2023-2024', () => {
    cy.Login1()
    //Select Dividend Report
    cy.wait(500)
    cy.get('[href="#/dividend-report"]').click({force:true})
    cy.wait(1000)
    cy.scrollTo('top')
    //Click on Year Dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-dividend-calc/div/div/div[1]/div[2]/div[1]/kendo-dropdownlist/button').click()
    cy.wait(500)
    //Selcet year 2023-2024
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
    //Click on Submit button
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
     //Check if data is there
    cy.wait(5000)
    if(cy.get('.k-grid-content').parent().should('be.visible'))
    {
          // DOWNLOAD eXCEL FILE
      cy.get('[src="../../../../assets/image/icon/excel.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
          // Download Pdf File
          cy.wait(3000)
          cy.get('[src="../../../../assets/image/icon/pdf.png"]').should('be.visible')
          cy.get('[src="../../../../assets/image/icon/pdf.png"]').click({force:true})

    }
    else
    {
      cy.log('Data not found')
    }

  })
  it('New_Dividend_Reports_FY_2024-2025', () => {
     cy.Login1();
    //Select Dividend Report
   cy.wait(500)
    cy.get('[href="#/dividend-report"]').click({force:true})
    cy.wait(1000)
    cy.scrollTo('top')
    //Click on Year Dropdown
    cy.wait(2000)
  
    cy.xpath('/html/body/app-root/app-layout/div/app-dividend-calc/div/div/div[1]/div[2]/div[1]/kendo-dropdownlist/button').click()
    cy.wait(500)
    //Selcet year 2024-2025
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').should('be.visible')
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click()
    
    //Click on Submit button
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
     //Check if data is there
    cy.wait(5000)
    if(cy.get('.k-grid-content').parent().should('be.visible'))
    {
          // DOWNLOAD eXCEL FILE
      cy.get('[src="../../../../assets/image/icon/excel.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
          // Download Pdf File
          cy.wait(500)
          cy.get('[src="../../../../assets/image/icon/pdf.png"]').should('be.visible')
          cy.get('[src="../../../../assets/image/icon/pdf.png"]').click({force:true})

    }
    else
    {
      cy.log('Data not found')
    }
})
  })
