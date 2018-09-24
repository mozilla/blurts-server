"use strict";

const got = require("got");

const AppConstants = require("./app-constants");


const Basket = {

  async subscribe(email) {
    const params = {
      email,
      newsletters: AppConstants.BASKET_NEWSLETTER,
      optin: "Y",
      "api-key": AppConstants.BASKET_API_KEY,
      source_url: "monitor.firefox.com",
    };
    const url = `${AppConstants.BASKET_URL}/news/subscribe/`;
    const reqOptions = {
      method: "POST",
      form: true,
      body: params,
    };
    await got(url, reqOptions);
  },

};

module.exports = Basket;
