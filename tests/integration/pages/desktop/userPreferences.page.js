"use strict";

class UserPreferencesPage {

  waitForPageToLoad() {
    $(".preferences").waitForExist(5000);
    return this;
  }
}

module.exports = new UserPreferencesPage();
