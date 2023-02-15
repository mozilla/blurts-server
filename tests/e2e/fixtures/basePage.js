const base = require("@playwright/test");
const { LandingPage } = require("../pages/landingPage");
const { AuthPage } = require("../pages/authPage");
const { DashboardPage } = require("../pages/dashboardPage");

exports.test = base.extend({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

exports.expect = base.expect;