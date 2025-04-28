/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy";
//const lp= new LoginPage 

describe('New_Tradelog_ReportS ',() =>
  {
it('New_Tradelog_Reports_FY_2024-2025', () => {
    //cy.visit('https://comet.jainam.in/#/startup')
    cy.Login2();
    // after entering pin it goes direct on comet
    // click on Reports
    // cy.wait(1000)
    // cy.get('#ReportDropdown').click({ force: true })
    // // select Tradelog report
    // cy.get('[href="#/tradelog"]').click({ force: true })

    // this is old flow Clent Dashboard->Comet 
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
     cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[2]/a[1]').click({force:true})

    //Select Tradelog
    //cy.wait(500)
    // cy.get('[href="#/tradelog"]').click({force:true})
    // cy.wait(1000)
    cy.scrollTo('top')
    //Reports for Year 2024-2025
    //Click on year dropdown
    cy.wait(1500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tradelog/div/form/div[2]/div[1]/kendo-dropdownlist/button').click({force:true})
    //Select year 2023-2024
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click({ force: true })
    //Click on Download Button
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
    cy.wait(3000)
    // logout flow
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(500)
    // click on logout 
  // cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({ force: true })
 cy.get('.mt-4 > :nth-child(5)').click({force:true})     
// cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)

  })

  it('New_Tradelog_Reports_FY_2025-2026', () => {
    cy.Login2();

    // after entering pin it goes direct on comet
    // click on Reports
    // cy.wait(1000)
    // cy.get('#ReportDropdown').click({ force: true })
    // // select Tradelog report
    // cy.get('[href="#/tradelog"]').click({ force: true })

    // //Select Tradelog
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
         cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-client-header-navbar[1]/div[1]/div[1]/nav[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[2]/a[1]').click({force:true})
         cy.wait(500)
         cy.scrollTo('top')
    //Click on year dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-tradelog/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
    //Select year 2025-2026
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]/span[1]').click()
    //Click on Download Button
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
    cy.wait(3000)
    // logout flow
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(500)
    // click on logout 
   // cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({ force: true })
    cy.get('.mt-4 > :nth-child(5)').click({force:true}) 
    // cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)

  })


})
