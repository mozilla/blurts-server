/* eslint-disable no-console */
'use strict'

const HomePage = require('../pages/desktop/home.page')
// Don't need these until secondary email test is restored
// const NavBar = require("../regions/navbar.region");
// const UserDashboardPage = require("../pages/desktop/dashboard.page");

describe('Firefox Monitor homepage', function () {
  beforeEach(function () {
    browser.url('/?experimentBranch=false')
  })

  it('should load the latest breach card', function () {
    const homePage = HomePage

    homePage.waitForPageToLoad()
    expect(homePage.breachCard.latestBreachCard.isDisplayed()).to.be.true
  })

  // it("should look like normal", function() {
  //   expect(browser.checkFullPageScreen("Home_Page", {
  //     hideElements: [
  //       $$(".breach-info-wrapper"),
  //     ],
  //   })).to.be.within(0, 45);
  // });

  it('should load correct number of breaches from an email input', function () {
    const homePage = HomePage

    homePage.waitForPageToLoad()
    homePage.breachEmailAddress.setValue(global.primaryEmail)
    const scanResults = homePage.checkBreachesButton
    expect(scanResults.breachCards.length)
      .to
      .equal(Number(scanResults.numberOfBreaches))
  })

  /*
  it("should allow secondary email to be added", function() {
    const homePage = HomePage;
    const navBar = NavBar;

    homePage.waitForPageToLoad();
    navBar.signIn.click();
    // FxA login
    // Check if fxa email is needed, if error, just continue
    try {
      $(".email").waitForExist(5000);
      $(".email").click();
      $(".email").setValue(global.primaryEmail);
      $("#submit-btn").click();
    } catch (error) {
      console.log(error);
    }
    // FxA password login
    $("#password").waitForExist(5000);
    $("#password").click();
    $("#password").setValue(global.monitorFxaPassword);
    $("#submit-btn").click();

    // Begin navigiation in monitor
    const dashboard = UserDashboardPage.waitForPageToLoad();
    dashboard.addEmailBox.setValue(global.secondaryEmail);
    dashboard.verificationLink.click();
    // Wait for dashboard to reload
    try {
      dashboard.waitForPageToLoad();
      dashboard.manageEmailAddresses();
    } catch (error) {
      console.log(error);
    }
    const email = $$(".e-address")[1];
    // Check email
    expect(email.getText()).to.equal(global.secondaryEmail);
    $(".remove-email-submit").click();
    browser.refresh();
    expect(email.getText()).to.equal(global.primaryEmail);
  });
  */
})
