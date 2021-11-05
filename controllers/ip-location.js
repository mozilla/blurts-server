/*eslint-disable no-process-env*/
// using process.env here to keep the banner/VPN vars contained – for when the vpn-banner is eventually removed

// IP location data includes GeoLite2 data created by MaxMind, available from https://www.maxmind.com.
// Test IPs by comparing to the corresponding json, for example: https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json

"use strict";

require("dotenv").config();
const maxmindDb = process.env.GEOIP_GEOLITE2_PATH + process.env.GEOIP_GEOLITE2_CITY_FILENAME;
const Reader = require("@maxmind/geoip2-node").Reader;

async function ipLocation(req, res) {
  let reader, geoData, countryName, cityName, locationArr;
  const clientIp = process.env.NODE_ENV === "dev" ? "216.160.83.56" : req.ip; // for dev, return an IP that exists in GeoLite2 test DB, e.g. 216.160.83.56

  if (clientIp === req.session.locationData?.clientIp) return res.status(200).json(req.session.locationData);

  try {
    reader = await Reader.open(maxmindDb);
    geoData = reader.city(clientIp);
    countryName = geoData.country?.names[req.supportedLocales.find(locale => locale in geoData.country?.names)]; // find valid locale key and return its value
    cityName = geoData.city?.names[req.supportedLocales.find(locale => locale in geoData.city?.names)];
    locationArr = [cityName, geoData.subdivisions?.[0].isoCode, countryName].filter(str => str); // [city name, state code, country code] with non-null items.
  } catch (e) {
    console.warn("Error reading location database:", e);
    locationArr = [null]; // a null item will return empty strings for locationData below
  }

  req.session.locationData = {
    clientIp,
    shortLocation: locationArr.slice(0, 2).join(", "), // shows the first two location values from the ones available
    fullLocation: locationArr.join(", "), // shows up to three location values from the ones available
  };

  return res.status(200).json(req.session.locationData);
}

module.exports = {
  ipLocation,
};
