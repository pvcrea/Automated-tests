const Browser = require("zombie");
const seleniumWebdriver = require('selenium-webdriver');

/**
 * Define functions to interact with the browser.
 */
function World () {
  const config = {waitDuration: 30 * 1000};

  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

  this.getPageTitle = function () {
    return this.browser.text("title");
  };

  this.getDocument = function () {
    return this.browser.document;
  };

  this.visit = function (url, callback) {
    this.browser.visit(url, {}, callback);
  };

  this.clickLink = function (link, callback) {
    this.browser.clickLink(link, callback);
  };

  this.pressButton = function (link, callback) {
    this.browser.pressButton(link, callback);
  };

  this.setCookie = function (name, value, domain) {
    this.browser.setCookie({name: name, domain: domain, value: value});
  };

  this.fillForm = function (selector, text, callback) {
    this.browser.fill(selector, text, callback);
  };

  this.createBrowser = function () {
    this.browser = new Browser(config);
  };

  this.createBrowser();
}

module.exports = function () {
  this.World = World;
};
