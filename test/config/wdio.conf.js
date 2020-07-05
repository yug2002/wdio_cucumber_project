const path = require('path');
exports.config = {
    
    runner: 'local',   
    specs: [
        path.resolve('./test/features/**/*.feature')
    ],
      exclude: [
        // 'path/to/excluded/files'
    ],   
   
    maxInstances: 10,   
    capabilities: [{   
        maxInstances: 5,        
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--no-sandbox', '--window-size=1920,1080']
          }       
    }],   
    logLevel: 'info',     
    bail: 0,   
    waitforTimeout: 10000,   
    services: ['chromedriver'],
    framework: 'cucumber',
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true       
      },
    reporters: ['spec', ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }]] 
}
