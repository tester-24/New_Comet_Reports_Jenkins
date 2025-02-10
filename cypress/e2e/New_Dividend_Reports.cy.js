/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 
describe('New_Dividend_Reports ',() =>
  {
     it('New_Dividend_Reports_FY_2023-2024', () => {
   // cy.visit('https://comet.jainam.in/#/startup')
    cy.Login2()
    // click on Reports
    // cy.wait(1000)
    // cy.get('#ReportDropdown').click({ force: true })
    // // select Divident report
    // cy.get('[href="#/dividend-report"]').click({ force: true })


    // old flow it will first go on dashboard and from there it will click on reports icon   
    //Select Dividend Report
    //cy.wait(5000)
      cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").click({force:true})
     // cy.wait(500)
      cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
      cy.wait(500)
      cy.window().then((win) => {
             cy.stub(win, 'open').callsFake((url) => {
               win.location.href = url;
             });
           });
           cy.wait(2000)
        //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
      cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[4]/a[1]').click({force:true})
   // click on divident report
   // cy.get('[href="#/dividend-report"]').click({force:true})
   // cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[2]/div/a[9]').click()
   // cy.get('[href="#/dividend-report"]').click({force:true})
    //cy.wait(500)
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
    if (cy.get('.k-grid-content').parent().should('be.visible')) {
      // DOWNLOAD eXCEL FILE
      cy.get('[src="../../../../assets/image/icon/excel.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
      // Download Pdf File
      cy.wait(3000)
      cy.get('[src="../../../../assets/image/icon/pdf.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()

    }
    else {
      cy.log('Data not found')
    }
    cy.wait(1500)
    // logout flow
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(500)
    // click on logout 
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({ force: true })
    // cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)

  })
  it('New_Dividend_Reports_FY_2024-2025', () => {
    //cy.visit('https://comet.jainam.in/#/startup')
    cy.Login2();
    // click on Reports
    // cy.wait(1000)
    // cy.get('#ReportDropdown').click({ force: true })
    // // select Divident report
    // cy.get('[href="#/dividend-report"]').click({ force: true })



     // old flow it will first go on dashboard and from there it will click on reports icon   
    cy.wait(5000)
     cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").click({force:true})
    // cy.wait(500)
     cy.xpath("//a[@class='nav_title text_decoration_none d_inline_block']//img[@alt='reports']").should('be.visible')
     cy.wait(500)
     cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
              win.location.href = url;
            });
          });
          cy.wait(2000)
       //  cy.xpath('/html/body/app-root/app-layout/div/div/app-dashboard/div[2]/div/app-invest-with-us/div/a[4]').click()
     cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[4]/a[1]').click({force:true})
    cy.scrollTo('top')
    //Click on Year Dropdown
    // cy.wait(2000)

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
    if (cy.get('.k-grid-content').parent().should('be.visible')) {
      // DOWNLOAD eXCEL FILE
      cy.get('[src="../../../../assets/image/icon/excel.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
      // Download Pdf File
      cy.wait(500)
      cy.get('[src="../../../../assets/image/icon/pdf.png"]').should('be.visible')
      cy.get('[src="../../../../assets/image/icon/pdf.png"]').click({ force: true })

    }
    else {
      cy.log('Data not found')
    }
    cy.wait(1500)
    // logout flow
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(500)
    // click on logout 
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({ force: true })
    // cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)
  })
  })
