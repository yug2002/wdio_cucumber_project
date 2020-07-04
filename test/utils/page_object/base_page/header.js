const Collection = require('../base_elements/base_collection');
const Element = require("../base_elements/base_element");

class Header{
    constructor() {
        this.navigationButtons = new Collection("header .top-navigation__item");
        this.contactUsButton = new Element(".cta-button-ui");
    }
}

module.exports = Header;