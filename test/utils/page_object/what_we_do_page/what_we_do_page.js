const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');

class WhatWeDoPage extends BasePage {  
  constructor() {
    super();
    this.title = new Element('h1.title-ui');      
  }
}

module.exports = WhatWeDoPage;