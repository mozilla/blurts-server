// IP location info includes GeoLite2 data created by MaxMind, available from https://www.maxmind.com.
// Test different IPs by comparing to the corresponding json, for example: https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json

"use strict";

const AppConstants = require("../app-constants");
const fs = require("fs");
const Reader = require("@maxmind/geoip2-node").Reader;
const maxmindDb = AppConstants.MAXMIND_DB_PATH || "./tests/mmdb/GeoLite2-City-Test.mmdb";

function getIpInfo(args) {
    const dbBuffer = fs.readFileSync(maxmindDb);
    const reader = Reader.openBuffer(dbBuffer);
    const clientIp = args.data.root.constants.NODE_ENV === "dev" ? "216.160.83.56" : args.data.root.req.ip; // TODO: normalize IP for different ip4/ip6 formats
    const info = { ip: clientIp };
    let geoData, locationArr;

    try {
        geoData = reader.city(clientIp);
        locationArr = [geoData.city?.names.en, geoData.subdivisions?.[0].isoCode, geoData.country?.isoCode].filter(str => str);
    } catch (e) {
        console.warn(e);
    }

    info.shortLocation = locationArr.slice(0, 2).join(", "); // shows the first two location values from the ones available
    info.fullLocation = locationArr.join(", "); // shows up to three location values from the ones available

    return info;
}

module.exports = {
    getIpInfo,
};
