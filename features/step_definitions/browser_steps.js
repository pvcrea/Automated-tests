const assert = require("cucumber-assert");

module.exports = function () {
  this.Given(/^I am on your website/, function () {
    return this.driver.get('http://localhost:3000');
  });

  this.When(/^I go to the frontpage$/, function (callback) {
    this.visit("http://localhost:3000", callback);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
    const pageTitle = this.getPageTitle();
    assert.equal(pageTitle, title, callback, "Expected to be on page with title " + title + ", actual title is: " + pageTitle);
  });

  this.Then(/^I should see the following text "(.*)"/, function (text, callback) {
    const document = this.getDocument();
    assert.equal(document.body.textContent.indexOf(text) >= 0, true, callback, "Expected to see " + text);
  });

  this.Then(/^I click on "(.*)"/, function(text, callback) {
    this.pressButton(text, callback);
  });

  this.Then(/^I click on an article$/, function(callback) {
    this.clickLink(".classofitem", callback);
  });

  this.Then(/^I fill in my email "(.*)"/, function(text, callback) {
    this.fillForm(".classofitem", text, callback);
  });

  this.After(function () {
    return this.driver.close();
  });
};
