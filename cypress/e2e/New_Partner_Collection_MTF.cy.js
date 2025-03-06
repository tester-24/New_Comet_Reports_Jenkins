// /// <reference types="cypress"/>

// //import { LoginPage } from "./comet_login.cy.js"
// //const lp = new LoginPage

// it('New_ Partner_ Collection_ MTF', () => {
//   cy.visit('https://comet.jainam.in/#/startup')
//   cy.Login();
//     // click on partners 
//     cy.wait(6000)
//     cy.get('#PartnerDropdown').click({ force: true })
//     cy.scrollTo('top')
//     // select Collection
//     cy.wait(500)
//     cy.get('#PartnerDropdown').should('be.visible')
//     cy.get('[href="#/collection"]').click()

//     //CLICK ON DROP DOWN
//     cy.wait(2000)
//     cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[1]/div/div[2]/form/div/div[1]/div/kendo-dropdownlist/button').click()
//     //Select MTF option
//     cy.wait(500)
//     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]').should('be.visible')
//     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]').click()
//     cy.scrollTo('top')
//     //click on submit button
//     cy.wait(500)
//     cy.get('.col-md-3 > .btn').should('be.visible')
//     cy.get('.col-md-3 > .btn').click()

//     // verify data shown 
//     cy.wait(20000)
//     cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid').should('be.visible')
//     cy.wait(2000)
//   //   cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td/button')
//   // .then(($button) => {
//   //   if ($button.length > 0 && $button.is(':visible')) {
//   //     // Button is found and visible, perform the action
//   //     cy.wrap($button).click();
//   //   } else {
//   //     // Button not found or not visible
//   //     cy.log('Button not found');
//   //   }
//       // logout
//       // click on user profile 
//       cy.get('.user-icon').click({force:true})
//       cy.wait(1000)
//      cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[6]/div/div/div/div[2]/ul/li[4]/a').click({force:true})
//       // cy.get('.mt-4 > :nth-child(4)').click({force:true})
//       cy.wait(1000)

//  // });

//     //cy.get('#k-97d10905-3611-4949-b199-0f746f032919 > .k-grid-container > .k-grid-content').should('be.visible')
//     ///html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[1]/button
//     ///html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[401]/td[1]/button
//     //click on d1 open the pop up
//    // cy.wait(2000)
// //     if(cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[10]/td[1]/button').parent().should('not.be.visible'))
// //       {
// //             cy.log('D1 not found')
// //       //     cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[10]/td[1]/button').click()
// //       //     cy.wait(2000)
// //       //     cy.get('.modal-content > .btn-close').click({force:true})
// //       }
// //       else
// //        {
// //         // cy.log('D1 not found')
// //         cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[10]/td[1]/button').click()
// //         //cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[10]/td[1]/button').click()
// //            cy.wait(2000)
// //          cy.get('.modal-content > .btn-close').click({force:true})
// //       }
// // Check if any button inside the table is visible
// // cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[2]/div/div[2]/div/kendo-grid').within(() => 
// //       {
//             cy.wait(2000)
//         //     cy.get('button').then((buttons) => {
//         // // Filter for visible buttons
//         // const visibleButtons = Cypress.$(buttons).filter(':visible');
    
//         // if (visibleButtons.length > 0) 
//         //     {
//         //   cy.log('A visible button is found');
//         //   cy.get('button').first().click({force:true})
//         //   cy.wait(2000)
//         //   cy.xpath('/html/body/app-root/app-layout/div/app-collection/div[3]/div/div/button').click({force:true})
//         //   // Perform additional actions on the visible button(s) if needed
//         // } 
//         // else {
//         //      cy.log('No visible buttons found');
//         //     }
//         });
      
  
