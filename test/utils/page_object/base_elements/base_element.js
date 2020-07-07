
class Element {
  constructor(selector) {    
    this.element = $(selector);
  };
  async click() {
    await this.waitFor();
    let elem = await this.element; 
    return elem.click();
  };
  async getText() {
    await this.waitFor();
    let elem = await this.element;     
    return elem.getText();
  };
  async waitFor(milliseconds = 15000) {
    return (await this.element).waitForExist({timeout: milliseconds});   
  }
}

module.exports = Element;