const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter', // for html reports 
  //projectId: "b6bh2b",
  // projectId: "m4t5cs",
   //projectId: "wyjfj2",
 //projectId: "yko1qe",
  //projectId: "xn1y67",
  // projectId: "fc82qw",
//projectId: "h2jao1",
   projectId: "ci1r7w",
  reporterOptions: {
   
    charts: true,
    video: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    enableCode:false,
    embeddedvideos: true,
    video: true,
  },
  //projectId: "m4t5cs",
  //projectId: "v4584h", 
  e2e: {
         //projectId: "m4t5cs",
          setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
      // node event listeners

     
    },
   // baseUrl: 'https://comet.jainam.in/#/startup',
  },
});

