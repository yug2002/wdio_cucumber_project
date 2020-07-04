const { When, Then, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60000);
const { expect } = require('chai');
const PageFactory = require('../utils/page_object/page_factory');

When(/^I open "([^"]*)" url$/, async function(url){
  const page = await PageFactory.getPage();
  return await page.open(url);
});

When(/^I click "([^"]*)" link$/, async function(link) {
  let page = await PageFactory.getPage();
  return await page.Header.navigationButtons.clickElementByText(link); 
});

Then(/^Current page title should be "(\w*\s*\w*)"$/, async function(title){
  let page = await PageFactory.getPage();
  const currTitlePromise = await page.title;
  const currentTitle = await currTitlePromise;
  const el = await currentTitle.getText();
  expect(el).to.be.equals(title);
});