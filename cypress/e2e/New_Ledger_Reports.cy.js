/// <reference types="cypress"/>

//import { LoginPage } from "./comet_login.cy.js"
//const loginPage = new LoginPage
describe('New_Ledger_Report ',() =>
{
it('New_Ledger_Report_Segment_All', () => {
     cy.Login();
      cy.get('[href="#/ledger"]').click()
   // 1)Click on dropdown all
   cy.wait(2000)
   cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').should('be.visible')
   cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').click()
   //Select  All option 
   cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
  // Click on FY dropdown
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').should('be.visible')
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').click()
  // select 2024-2025 option 
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
  //Click on Calemder dropdown
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').should('be.visible')
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').click()
  //Select Current financial year
  cy.wait(1000)
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[4]/span[1]').click()
  //Enter Client Code 
  cy.get('.segment2 > .w-100').type('wa5320')
  //click on View button 
  cy.get('.mt-2 > .btn').should('be.visible')
  cy.get('.mt-2 > .btn').click({force:true})
  cy.wait(15000)  

    if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
      {
         cy.log('data found')
        // downloading Excel File 
        // Click on Download Button
        cy.get('.btn > img').click()
       // Click on Send Email in excel format
        cy.get('.modal-footer > :nth-child(1)').click()
       
        // Verify mail send successfuly message
        cy.wait(1000)
        cy.get('.ng-trigger').should('be.visible')
       
        //Download  EXCEL
        cy.wait(5000)
       cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click({force:true})
       
       //Click on Download type PDF
       cy.wait(1000)
       cy.get('#pdf').should('be.visible')
       cy.get('#pdf').click({force:true})
       
       //Send mail in PDF format
       cy.get('.modal-footer > :nth-child(1)').should('be.visible')
       cy.get('.modal-footer > :nth-child(1)').click({force:true})
       
       // Verify mail send successfuly message for Pdf Format
        cy.wait(3000)
        cy.get('.ng-trigger').should('be.visible')
       
       //Download in Pdf Format
       cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click({force:true})
       cy.wait(5000)
       
       //Click on Contract/Bills
      // cy.wait(3000)
       cy.get('#bills').should('be.visible')
       cy.get('#bills').click({force:true})
       
       //Click on Mail Contract Note
       cy.get('.modal-footer > :nth-child(1)').should('be.visible')
       cy.get('.modal-footer > :nth-child(1)').click()
       
       //check for mail confirmation message for contract bill
       cy.wait(1000)
       cy.get('.ng-trigger').should('be.visible')
       
       //Download Contract Note in PDF format
       cy.wait(5000)
      // cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click({force:true})
       cy.wait(7000)
       
       //Close the pop up 
       cy.get('.btn-close').should('be.visible')
       cy.get('.btn-close').click()

       //Scrolling to top
      cy.wait(1000)
      cy.scrollTo('top')

       }
       else
       {
         cy.log('No data found')
       }
     
})

it('New_Ledger_Report_Segment_Equity', () => {
  cy.visit('https://comet.jainam.in/#/startup')
  cy.Login(); 
       cy.get('[href="#/ledger"]').click()
   // 1)Click on dropdown all
   cy.wait(5000)
   cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').should('be.visible')
   cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').click()
   //Select  All option
   cy.wait(1500) 
   cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
  // Click on FY dropdown
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').should('be.visible')
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').click()
  // select 2024-2025 option 
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
  //Click on Calemder dropdown
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').should('be.visible')
  cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').click()
  //Select Current financial year
  cy.wait(2000)
  cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[4]/span[1]').click()
  //Enter Client Code 
  cy.get('.segment2 > .w-100').type('wa5320')
  //click on View button 
  cy.get('.mt-2 > .btn').should('be.visible')
  cy.get('.mt-2 > .btn').click({force:true})
  cy.wait(15000)  

    if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
      {
         cy.log('data found')
        // downloading Excel File 
        // Click on Download Button
        cy.get('.btn > img').click()
       // Click on Send Email in excel format
        cy.get('.modal-footer > :nth-child(1)').click()
       
        // Verify mail send successfuly message
        cy.wait(1000)
        cy.get('.ng-trigger').should('be.visible')
       
        //Download  EXCEL
        cy.wait(10000)
       cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click({force:true})
       
       //Click on Download type PDF
       cy.wait(2000)
       cy.get('#pdf').should('be.visible')
       cy.get('#pdf').click({force:true})
       
       //Send mail in PDF format
       cy.get('.modal-footer > :nth-child(1)').should('be.visible')
       cy.get('.modal-footer > :nth-child(1)').click({force:true})
       
       // Verify mail send successfuly message for Pdf Format
        cy.wait(3000)
        cy.get('.ng-trigger').should('be.visible')
       
       //Download in Pdf Format
       cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click({force:true})
       cy.wait(5000)
       
       //Click on Contract/Bills
       cy.wait(5000)
       cy.get('#bills').should('be.visible')
       cy.get('#bills').click({force:true})
       
       //Click on Mail Contract Note
       cy.get('.modal-footer > :nth-child(1)').should('be.visible')
       cy.get('.modal-footer > :nth-child(1)').click()
       
       //check for mail confirmation message for contract bill
       cy.wait(1000)
       cy.get('.ng-trigger').should('be.visible')
       
       //Download Contract Note in PDF format
       cy.wait(3000)
       cy.get('.modal-footer > :nth-child(2)').should('be.visible')
       cy.get('.modal-footer > :nth-child(2)').click()
       cy.wait(7000)
       
       //Close the pop up 
       cy.get('.btn-close').should('be.visible')
       cy.get('.btn-close').click()

       //Scrolling to top
      cy.wait(1000)
      cy.scrollTo('top')

       }
       else
       {
         cy.log('No data found')
       }
     
 });
 it('New_Ledger_Report_Segment_FutureOption', () => {
  cy.visit('https://comet.jainam.in/#/startup')
 cy.Login()
cy.get('[href="#/ledger"]').click()
 // 1)Click on dropdown all
 cy.wait(2000)
 cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').should('be.visible')
 cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[1]/kendo-dropdownlist/button').click()
 //Select Future Option
 cy.wait(1500) 
 cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]/span[1]').click({force:true})
// Click on FY dropdown
cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').should('be.visible')
cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[2]/kendo-dropdownlist/button').click()
// select 2024-2025 option 
cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
//Click on Calemder dropdown
cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').should('be.visible')
cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/form/div[2]/div[3]/kendo-dropdownlist/button').click()
//Select Current financial year
cy.wait(1000)
cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[4]/span[1]').click()
//Enter Client Code 
cy.get('.segment2 > .w-100').type('wa5320')
//click on View button 
cy.get('.mt-2 > .btn').should('be.visible')
cy.get('.mt-2 > .btn').click({force:true})
cy.wait(15000)  

//if(cy.get('.k-grid-header').should('be.visible'))
  
//if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('exist'))
// if(cy.xpath('/html/body/app-root/app-layout/div/app-ledger/div[1]/kendo-grid/div/div/div/table/thead/tr/th[3]/span/span/span').should('be.visible'))
    
       // downloading Excel File 
      // Click on Download Button
     if(cy.get('.btn > img').parent().should('not.be.disabled'))
     {
      cy.log('no data found')
     }
     else{

     
     // Click on Send Email in excel format
     cy.wait(2000)
      cy.get('.modal-footer > :nth-child(1)').click()
     
      // Verify mail send successfuly message
      cy.wait(1000)
      cy.get('.ng-trigger').should('be.visible')
     
      //Download  EXCEL
      cy.wait(5000)
     cy.get('.modal-footer > :nth-child(2)').should('be.visible')
     cy.get('.modal-footer > :nth-child(2)').click({force:true})
     
     //Click on Download type PDF
     cy.wait(1000)
     cy.get('#pdf').should('be.visible')
     cy.get('#pdf').click({force:true})
     
     //Send mail in PDF format
     cy.get('.modal-footer > :nth-child(1)').should('be.visible')
     cy.get('.modal-footer > :nth-child(1)').click({force:true})
     
     // Verify mail send successfuly message for Pdf Format
      cy.wait(3000)
      cy.get('.ng-trigger').should('be.visible')
     
     //Download in Pdf Format
     cy.get('.modal-footer > :nth-child(2)').should('be.visible')
     cy.get('.modal-footer > :nth-child(2)').click({force:true})
     cy.wait(5000)
     
     //Click on Contract/Bills
    // cy.wait(3000)
     cy.get('#bills').should('be.visible')
     cy.get('#bills').click({force:true})
     
     //Click on Mail Contract Note
     cy.get('.modal-footer > :nth-child(1)').should('be.visible')
     cy.get('.modal-footer > :nth-child(1)').click()
     
     //check for mail confirmation message for contract bill
     cy.wait(1000)
     cy.get('.ng-trigger').should('be.visible')
     
     //Download Contract Note in PDF format
     cy.wait(3000)
     cy.get('.modal-footer > :nth-child(2)').should('be.visible')
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(7000)
     
     //Close the pop up 
     cy.get('.btn-close').should('be.visible')
     cy.get('.btn-close').click()

     //Scrolling to top
    cy.wait(1000)
    cy.scrollTo('top')

     }

});
})
