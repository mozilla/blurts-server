"use strict";

const fs = require("fs");
const Reader = require("@maxmind/geoip2-node").Reader;

function getIpInfo(args) {
    const dbBuffer = fs.readFileSync("./tests/mmdb/GeoLite2-City-Test.mmdb");
    const reader = Reader.openBuffer(dbBuffer);
    const clientIp = args.data.root.constants.NODE_ENV === "dev" ? "2.125.160.216" : args.data.root.req.ip; // TODO: normalize IP for different ip4/ip6 formats
    const info = { ip: clientIp };
    let geoData, city, stateOrCountry;

    try {
        geoData = reader.city(clientIp);
        city = geoData.city.names.en || ""; // TODO: add optional chaining after Node version upgrade
        stateOrCountry = geoData.subdivisions[0].isoCode || geoData.country.isoCode || ""; // TODO: add optional chaining after Node version upgrade
    } catch (e) {
        console.warn(e);
    }

    info.location = `${city}${stateOrCountry ? `, ${stateOrCountry}` : ""}`;

    return info;
}

module.exports = {
    getIpInfo,
};
