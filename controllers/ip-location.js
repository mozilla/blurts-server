// IP location data includes GeoLite2 data created by MaxMind, available from https://www.maxmind.com.
// Test IPs by comparing to the corresponding json, for example: https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json

"use strict";

require("dotenv").config();
const path = require("path");
const AppConstants = require("../app-constants");
const Reader = require("@maxmind/geoip2-node").Reader;

async function ipLocation(req, res) {
  let maxmindDb, reader, data, countryName, cityName, locationArr;
  const clientIp = AppConstants.NODE_ENV === "dev" ? "216.160.83.56" : req.ip; // for dev, return an IP that exists in GeoLite2 test DB, e.g. 216.160.83.56

  if (clientIp === req.session.locationData?.clientIp) return res.status(200).json(req.session.locationData);

  try {
    maxmindDb = path.join(AppConstants.GEOIP_GEOLITE2_PATH, AppConstants.GEOIP_GEOLITE2_CITY_FILENAME);
    reader = await Reader.open(maxmindDb);
    data = reader.city(clientIp);
    countryName = data.country?.names[req.supportedLocales.find(locale => data.country?.names[locale])]; // find valid locale key and return its value
    cityName = data.city?.names[req.supportedLocales.find(locale => data.city?.names[locale])];
    locationArr = [cityName, data.subdivisions?.[0].isoCode, countryName].filter(str => str); // [city name, state code, country code] with non-null items.
  } catch (e) {
    console.warn("Could not read location data from MaxMind database:", e.message);
    return res.status(200).json({ clientIp });
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
