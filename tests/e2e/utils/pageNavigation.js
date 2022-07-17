const axios = require('axios');
const { HomePage } = require('../pages/homePage');
const { PreferencePage } = require('../pages/prefPage');

const pages = {
  dashboard: `${process.env.TEST_BASE_URL}/user/dashboard`,
  preference: `${process.env.TEST_BASE_URL}/user/preferences`,
  breach: `${process.env.TEST_BASE_URL}/user/breaches`,
  security: `${process.env.TEST_BASE_URL}/user/security-tips`
}

const goToDashboard = async (page) => {
    await page.goto(pages.dashboard)
    const homePage = new HomePage(page);
    return homePage;
}

const goToManageAccount = async (page) => {
    await page.goto(pages.preference)  
    const preferencePage = new PreferencePage(page)
    return preferencePage;
}

module.exports = {
  goToDashboard,
  goToManageAccount
};
