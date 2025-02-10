/// <reference types="cypress"/>

//import { LoginPage } from "./comet_login.cy.js"
//const lp = new LoginPage
describe('New_TaxP&L_ReportS ',() =>
  {
    it('New_TaxP&L_Segment_Equity', () => {
    //cy.visit('https://comet.jainam.in/#/startup')
    cy.Login();
    //Click on tax p&l
    cy.wait(2000)
    //  cy.get('[href="#/tax"]').should('be.visible')
    cy.get('[href="#/tax"]').click({ force: true })
    cy.scrollTo('top')
    //Click on 1st drop down
    cy.wait(1500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
    //select equity option
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    cy.scrollTo('top')

    //click on year dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[2]/kendo-dropdownlist/button').click()
    //Select year 2023-2024
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click()
    cy.scrollTo('top')
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[3]/input').type('wa5320')
    //Click on view button 
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
    cy.scrollTo(300, 300)

    //Click on Download excel
    cy.wait(5000)
    cy.get(':nth-child(2) > .download-summary-btn').should('be.visible')
    cy.get(':nth-child(2) > .download-summary-btn').click()

    //Click on Download PDF
    cy.wait(2000)
    cy.get(':nth-child(3) > .download-summary-btn').should('be.visible')
    cy.get(':nth-child(3) > .download-summary-btn').click()

    //Click on SEND excel MAIL
    cy.wait(2000)
    cy.get(':nth-child(4) > .download-summary-btn').should('be.visible')
    cy.get(':nth-child(4) > .download-summary-btn').click()

    //Click on SEND PDF MAIL
    cy.wait(2000)
    cy.get(':nth-child(5) > .download-summary-btn').should('be.visible')
    cy.get(':nth-child(5) > .download-summary-btn').click({ force: true })
    cy.scrollTo('top')

    // logout
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(1000)
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({ force: true })
    // cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)

  })
  it('New_TaxP&L_Segment_NSE_FNO', () => {
    // cy.visit('https://comet.jainam.in/#/startup')
    cy.Login()
    //Click on tax p&l
    cy.wait(1000)
    // cy.get('[href="#/tax"]').should('be.visible')
    cy.get('[href="#/tax"]').click({ force: true })
    cy.scrollTo('top')
    //Click on 1st drop down
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
    //select NSE FNO option
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
    cy.scrollTo('top')

    //click on year dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[2]/kendo-dropdownlist/button').click()
    //Select year 2023-2024
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click()
    cy.scrollTo('top')
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[3]/input').type('wa5320')
    //Click on view button 
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
    cy.scrollTo(300, 300)
    //Click on Download button
    cy.scrollTo('top')

    // logout
    // click on user profile 
    cy.get('.user-icon').click({ force: true })
    cy.wait(1000)
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({ force: true })
    // cy.get('.mt-4 > :nth-child(4)').click({force:true})
    cy.wait(1000)

  })
  })
