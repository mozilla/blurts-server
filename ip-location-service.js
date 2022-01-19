"use strict";

const path = require("path");
const reader = require("@maxmind/geoip2-node").Reader;
const AppConstants = require("./app-constants");

let locationDb, timestamp;

async function openLocationDb() {
  if (locationDb && isFresh()) return console.warn("Location database already open.");

  try {
    const dbPath = path.join(AppConstants.GEOIP_GEOLITE2_PATH, AppConstants.GEOIP_GEOLITE2_CITY_FILENAME);
    locationDb = await reader.open(dbPath);
  } catch (e) {
    return console.warn("Could not open location database:", e.message);
  }

  timestamp = Date.now();
  return true;
}

async function readLocationData(ip, locales) {
  let locationArr;

  if (!isFresh()) await openLocationDb();

  try {
    const data = locationDb.city(ip);
    const countryName = data.country?.names[locales.find(locale => data.country?.names[locale])]; // find valid locale key and return its value
    const cityName = data.city?.names[locales.find(locale => data.city?.names[locale])];
    const subdivisionName = data.subdivisions?.[0].isoCode;
    const subdivisionFiltered = /[A-z]{2,}/.test(subdivisionName) ? subdivisionName : null; // return strings that are 2 or more letters, or null (avoid unfamiliar subdivisions like `E` or `09`)

    locationArr = [cityName, subdivisionFiltered, countryName].filter(str => str); // [city name, state code, country code] with non-null items.
  } catch (e) {
    return console.warn("Could not read location from database:", e.message);
  }

  return {
    shortLocation: locationArr.slice(0, 2).join(", "), // shows the first two location values from the ones available
    fullLocation: locationArr.join(", "), // shows up to three location values from the ones available
  };
}

function isFresh() {
  if (Date.now() - timestamp < 259200000) return true; // 1000ms * 60s * 60m * 24h * 3 elapsed time is less than 24hrs
  return false;
}

module.exports = {
  openLocationDb,
  readLocationData,
};
