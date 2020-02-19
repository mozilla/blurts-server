/* global browser */

"use strict";

describe("Firefox Monitor Breaches Page", function() {
  this.retries(2);

  beforeEach(function() {
    browser.url("/breaches");
  });

  it("should look like normal", function() {
    expect(browser.checkFullPageScreen("Breaches_Page", {})).to.be.within(0, 5);
  });
});
