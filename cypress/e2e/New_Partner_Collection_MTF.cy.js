/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const lp = new LoginPage

it.only('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    cy.wait(1000)
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    cy.wait(2000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
   
    // click on partners 
    cy.wait(6000)
    cy.get('#PartnerDropdown').click({ force: true })
    cy.scrollTo('top')
    // select Collection
    cy.wait(500)
    cy.get('#PartnerDropdown').should('be.visible')
    cy.get('[href="#/collection"]').click()

    //CLICK ON DROP DOWN
    cy.wait(2000)
    cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/button').click()
    //Select MTF option
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]').should('be.visible')
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]').click()
    cy.scrollTo('top')
    //click on submit button
    cy.wait(500)
    cy.get('.col-md-3 > .btn').should('be.visible')
    cy.get('.col-md-3 > .btn').click()

    // verify data shown 
    cy.wait(15000)
    cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid').should('be.visible')
    //cy.get('#k-97d10905-3611-4949-b199-0f746f032919 > .k-grid-container > .k-grid-content').should('be.visible')
    //click on d1 open the pop up 
    cy.get('[data-kendo-grid-item-index="189"] > [data-kendo-grid-column-index="0"] > .mtf_button').click()
    cy.wait(2000)
    cy.get('.modal-content > .btn-close').click({force:true})


})
