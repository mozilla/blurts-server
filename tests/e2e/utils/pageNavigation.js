const { DashboardPage } = require('../pages/dashboardPage');
const { PreferencePage } = require('../pages/prefPage');

const pages = {
  dashboard: '/user/dashboard',
  preference: '/user/preferences',
  breach: '/user/breaches',
  security: '/user/security-tips'
}

const goToDashboard = async (page) => {
    await page.goto(pages.dashboard)
    return new DashboardPage(page);
}

const goToManageAccount = async (page) => {
    await page.goto(pages.preference)
    return new PreferencePage(page)
}

module.exports = {
  goToDashboard,
  goToManageAccount
};
