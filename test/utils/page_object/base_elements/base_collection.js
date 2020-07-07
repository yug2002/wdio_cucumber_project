
class Collection {

  constructor(selector) {    
    this.collection = $$(selector);
  };
  async getCount() {
    return await this.collection.count();
  };
  async getTexts() {
    let text = await this.collection.map(element => element.getText())
    return text;
  };
  async clickElementByText(textToClick) {
    const arr = await this.collection;
    arr.map (async (element) => {
      let t = await element.getText();
      if(t === textToClick){
        return await element.click();
      }       
    });    
  };
}

module.exports = Collection;