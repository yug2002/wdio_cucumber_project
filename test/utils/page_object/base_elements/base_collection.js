
class Collection {

  constructor(selector) {
    this.selector = selector;
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

    // let arrOfTexts = await arrayOfElementTexts1;  
    // let dd = this.selector;
    // //const arrayOfElementTexts = Array.from (this.collection).map(async (element) => { return await element.getText()});
    // const indexOfElementToClick = await arrayOfElementTexts1.indexOf(textToClick);
    // if (indexOfElementToClick === -1) {
    //   throw new Error(`No element with [${textToClick}] text found`);
    // }
    //return this.collection.get(indexOfElementToClick).click();    
  };
}

module.exports = Collection;