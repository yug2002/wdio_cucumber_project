const Header = require('./header');

class BasePage {
  constructor(){
    this.Header = new Header();
  } 

  async getTitle() {
    return await browser.getTitle();
  }

  async getCurrentUrl() {
    return await browser.getUrl();
  }

  async open(url) {
    return await browser.url(url);
  }
}

module.exports = BasePage;
