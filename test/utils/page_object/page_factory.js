const HomePage = require('./home_page/home_page');
const OurWorkPage = require('./our_work_page/our_work_page');

class PageFactory {

  static async getPage() {    
    await browser.pause(1000);
    const url = await browser.getUrl(); 
    let pattern = /(?<=\w+\/).*/;
    let match = url.match(pattern);
    let resultString = '';

    if(match) {
      resultString = match.join();
    }      

    switch(resultString) {
      case 'what-we-do': return new WhatWeDoPage();
      case 'our-work': return new OurWorkPage();
      default: return new HomePage();
    }  
  }
}

module.exports = PageFactory;