/// <reference types="cypress"/>

//import { LoginPage } from "./login_1.cy"; 
//const loginPage = new LoginPage
describe('New_Global_Reports ',() =>
  {
    it('New_Global_Report_Segment_Equity', () => {
      cy.visit('https://comet.jainam.in/#/startup')
     cy.Login2();
     
    
    //select global reports options
    cy.wait(2000)
    cy.get('[href="#/pnl"]').click({force:true})
    
    //click on segment dropdown
    cy.wait(2000)
    cy.scrollTo('top')
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[1]/div/kendo-dropdownlist/button').click()
    
    //Select Equity 
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click({force:true})
    
    // click on download by dropdown
    cy.wait(1000)
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[2]/div/kendo-dropdownlist/button').click()
    
    //select type Script wise
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    
    //click on download type dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click()
    
    //Select pdf type
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    cy.scrollTo('top')

    //Click on download button
    cy.get('.col-lg-2 > .btn').should('be.visible')
    cy.get('.col-lg-2 > .btn').click()
  
    //click on dropdown for selcting excel type
    cy.scrollTo('top')
    cy.wait(6000)
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click({force:true})
    cy.scrollTo('top')
    //Select Excel type
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
    cy.scrollTo('top')
     //Click on download button
     cy.wait(1000)
     cy.get('.col-lg-2 > .btn').should('be.visible')
     cy.get('.col-lg-2 > .btn').click()
     cy.scrollTo('top')

       // click on download by dropdown
    cy.wait(3000)
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[2]/div/kendo-dropdownlist/button').click()
    
    //2.  select type Date wise
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click({force:true})

    //click on download type dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click()
    
    //Select pdf type
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    cy.scrollTo('top')

    //Click on download button
    cy.get('.col-lg-2 > .btn').should('be.visible')
    cy.get('.col-lg-2 > .btn').click()

    //click on dropdown for selcting excel type
    cy.scrollTo('top')
    cy.wait(5000)
    cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click({force:true})
    cy.scrollTo('top')
    //Select Excel type
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
    cy.scrollTo('top')
     //Click on download button
     cy.wait(1000)
     cy.get('.col-lg-2 > .btn').should('be.visible')
     cy.get('.col-lg-2 > .btn').click()
     cy.scrollTo('top')
      // logout flow
      // click on user profile 
      cy.get('.user-icon').click({force:true})
      cy.wait(500)
      // click on logout 
     cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[5]/a').click({force:true})
      // cy.get('.mt-4 > :nth-child(4)').click({force:true})
      cy.wait(1000)
})
it('New_Global_Report_Segment_Derivative', () => {
     cy.visit('https://comet.jainam.in/#/startup')
      cy.Login2();
      //select global reports options
      cy.wait(2000)
      cy.get('[href="#/pnl"]').click({force:true})
      
      //click on segment dropdown
      cy.wait(2000)
      cy.scrollTo('top')
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[1]/div/kendo-dropdownlist/button').click()
      
      //Select Equity 
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click({force:true})
      
      // click on download by dropdown
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[2]/div/kendo-dropdownlist/button').click()
      
      //select type Script wise
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
      cy.wait(500)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
      
      //click on download type dropdown
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click()
      
      //Select pdf type
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
      cy.wait(500)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
      cy.scrollTo('top')
  
      //Click on download button
      cy.get('.col-lg-2 > .btn').should('be.visible')
      cy.get('.col-lg-2 > .btn').click()
    
      //click on dropdown for selcting excel type
      cy.scrollTo('top')
      cy.wait(6000)
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click({force:true})
      cy.scrollTo('top')
      //Select Excel type
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
      cy.wait(1000)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click({force:true})
      cy.scrollTo('top')
       //Click on download button
       cy.wait(1000)
       cy.get('.col-lg-2 > .btn').should('be.visible')
       cy.get('.col-lg-2 > .btn').click()
       cy.scrollTo('top')
  
         // click on download by dropdown
      cy.wait(5000)
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[2]/div/kendo-dropdownlist/button').click()
      
      //2. type  select type Date wise
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').should('be.visible')
      cy.wait(500)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click()
  
      //click on download type dropdown
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click()
      
      //Select pdf type
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').should('be.visible')
      cy.wait(500)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
      cy.scrollTo('top')
  
      //Click on download button
      cy.get('.col-lg-2 > .btn').should('be.visible')
      cy.get('.col-lg-2 > .btn').click()
  
      //click on dropdown for selcting excel type
      cy.scrollTo('top')
      cy.wait(7000)
      cy.xpath('/html/body/app-root/app-layout/div/app-pnl/div[1]/div/form/div[2]/div[5]/div/kendo-dropdownlist/button').click()
      cy.scrollTo('top')
      //Select Excel type
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
      cy.wait(500)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
      cy.scrollTo('top')
       //Click on download button
       cy.wait(1000)
       cy.get('.col-lg-2 > .btn').should('be.visible')
       cy.get('.col-lg-2 > .btn').click()
       cy.scrollTo('top')
       
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
