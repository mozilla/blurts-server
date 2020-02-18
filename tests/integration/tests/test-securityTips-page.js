/* global browser */

"use strict";

describe("Firefox Monitor Security Tips Page", function() {
  this.retries(2);

  beforeEach(function() {
    browser.url("http://localhost:6060/security-tips");
  });

  it("should look like normal", function() {
    expect(browser.checkFullPageScreen("SecurityTips_Page", {})).to.be.within(0, 5);
  });
});
