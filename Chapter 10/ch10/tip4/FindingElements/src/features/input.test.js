const assert = require('assert');
const wd = require('wd');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const config = require('../config');

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

chai.use(chaiAsPromised);
chai.should();

describe('Main form', function() {
  let driver;

  // Setting the maximum waiting time
  this.timeout(300000);

  before(function () {
    driver = wd.promiseChainRemote(config.appium);

    return driver.init(config.capabilities);
  });

  after(function () {
    return driver.quit();
  });

  it('should enter a string to the input texts', function() {
    return driver
      .elementByXPath('//UIATextField[@value=\'Your name\']')
      .type('Crysfel Villa')
      .getValue()
      .should.become('Crysfel Villa');
  });

});
