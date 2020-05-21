"use strict";

const got = require("got");

const AppConstants = require("./app-constants");
const mozlog = require("./log");


const log = mozlog("basket");


const Basket = {

    async subscribe(email) {
        const params = {
            email,
            newsletters: AppConstants.BASKET_NEWSLETTER,
            optin: "Y",
            "api-key": AppConstants.BASKET_API_KEY,
            // eslint-disable-next-line camelcase
            source_url: "monitor.firefox.com",
        };
        const url = `${AppConstants.BASKET_URL}/news/subscribe/`;
        const reqOptions = {
            method: "POST",
            form: true,
            body: params,
        };

        try {
            await got(url, reqOptions);
        } catch (e) {
            log.error("subscribe", {stack: e.stack});
        }
    },

};


module.exports = Basket;
