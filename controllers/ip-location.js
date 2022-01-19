// IP location data includes GeoLite2 data created by MaxMind, available from https://www.maxmind.com.
// For testing, you can compare IPs to the corresponding json, eg: https://github.com/maxmind/MaxMind-DB/blob/main/source-data/GeoLite2-City-Test.json

"use strict";

const AppConstants = require("../app-constants");
const { readLocationData } = require("../ip-location-service");

async function getIpLocation(req, res) {
  let clientIp;

  switch(AppConstants.NODE_ENV){
    case "dev":
      clientIp = req.headers["test-ip"] || "216.160.83.56"; // fallback an IP that exists in limited/local GeoLite2 test DB
      break;
    case "heroku":
    case "stage":
      clientIp = req.headers["test-ip"] || req.ip; // Use "test-ip" header if available, fallback to original IP
      break;
    default:
      clientIp = req.ip;
  }

  if (clientIp === req.session.locationData?.clientIp) {
    return res.status(200).json(req.session.locationData); // return cached data
  }

  const locationData = await readLocationData(clientIp, req.supportedLocales);

  if (locationData) {
    req.session.locationData = Object.assign(locationData, { clientIp }); // cache new location data, adding clientIP key
    return res.status(200).json(req.session.locationData);
  }

  return res.status(200).json({ clientIp });
}

module.exports = {
  getIpLocation,
};
