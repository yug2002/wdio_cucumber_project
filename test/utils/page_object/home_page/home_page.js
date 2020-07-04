const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class HomePage extends BasePage {
  constructor() {
    super();  
    this.title = new Element('h2.title-slider__title span');    
  }

  async open(url) {
    await super.open(url);
  };
}

module.exports = HomePage;