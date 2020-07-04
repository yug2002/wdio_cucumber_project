//const { element, browser } = require("wdio");
//const expectedConditions = browser.ExpectedConditions;

class Element {
  constructor(selector) {
    // this.element = element(by.css(selector));
    this.element = $(selector);
  };
  click() {
    return this.element.click();
  };
  async getText() {
    await this.waitFor();
    let text = (await this.element).getText();
    return text;
  };
  async waitFor(milliseconds = 15000) {
    return (await this.element).waitForExist({timeout: milliseconds});
    // let isDisplayed = expectedConditions.visibilityOf(this.element);
    // return await browser.wait(isDisplayed, milliseconds);
  }
}

module.exports = Element;