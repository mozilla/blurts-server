// IP location data includes GeoLite2 data created by MaxMind, available from https://www.maxmind.com.
// Test IPs by comparing to the corresponding json, for example: https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json

"use strict";

const AppConstants = require("../app-constants");
const fs = require("fs");
const Reader = require("@maxmind/geoip2-node").Reader;
const maxmindDb = AppConstants.MAXMIND_DB_PATH || "./tests/mmdb/GeoLite2-City-Test.mmdb";

function vpnBannerData(args) {
    const dbBuffer = fs.readFileSync(maxmindDb);
    const reader = Reader.openBuffer(dbBuffer);
    const clientIp = getClientIp(args.data.root.constants.NODE_ENV, args.data.root.req);
    const bannerData = { ip: clientIp };
    let geoData, locationArr;

    try {
        geoData = reader.city(clientIp);
        locationArr = [geoData.city?.names.en, geoData.subdivisions?.[0].isoCode, geoData.country?.isoCode].filter(str => str);
    } catch (e) {
        console.warn("Error reading geoData:", e);
        locationArr = [null];
    }

    bannerData.shortLocation = locationArr.slice(0, 2).join(", "); // shows the first two location values from the ones available
    bannerData.fullLocation = locationArr.join(", "); // shows up to three location values from the ones available
    bannerData.protected = false; // TODO: make this work with Guardian API

    return bannerData;
}

function getClientIp(env, req) {
    if (env === "dev") return "216.160.83.56"; // return IP address that exists in GeoLite2 test DB.  https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json
    return req.ip; // return actual client IP4 or IP6 address.
}

module.exports = {
    vpnBannerData,
};
