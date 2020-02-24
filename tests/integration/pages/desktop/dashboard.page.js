"use strict";

class UserDashboardPage {

  waitForPageToLoad() {
    $("#dashboard").waitForExist(5000);
    return this;
  }

  get addEmailBox() { return $("#email-add"); }
  get verificationLink() { return $("#email-add-submit"); }
  manageEmailAddresses() {
    const UserPreferencesPage = require("./userPreferences.page");

    $(".manage-emails").click();
    return UserPreferencesPage.waitForPageToLoad();
  }
}

module.exports = new UserDashboardPage();
