/* global browser */

"use strict";


describe("Firefox Monitor homepage", function() {
    this.retries(2);

    beforeEach(function() {
      browser.url("http://localhost:6060/security-tips");
    });

    it("should look like normal", function() {
      browser.saveFullPageScreen("SecurityTips_Page", { /* some options*/ });
      expect(browser.checkFullPageScreen("SecurityTips_Page", {})).to.equal(0);
    });
});
