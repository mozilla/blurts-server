"use strict";

const Countrily = require("countrily");
const AppConstants = require("./app-constants");

let countryCodes;
let usStates;

const FormUtils = {
  init() {
    countryCodes = Countrily.shortnamesofall();
    countryCodes.sort();
    // prettier-ignore
    usStates = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ];
  },

  loadCountriesIntoApp(app) {
    app.locals.COUNTRIES = [];
    app.locals.US_STATES = [];
    countryCodes.forEach((countryCode) => {
      if (countryCode && countryCode !== "") {
        app.locals.COUNTRIES.push({
          countryCode: countryCode,
        });
      }
    });

    usStates.forEach((state) => {
      app.locals.US_STATES.push({
        stateCode: state,
      });
    });
  },
  numberWithDigits(number, digits) {
    return parseFloat(number.toFixed(digits));
  },
  calculatePercentage(base, total) {
    return parseFloat(((base / total) * 100).toFixed(2));
  },
  convertDateToTimestamp(curDate) {
    return parseInt((new Date(curDate).getTime() / 1000).toFixed(0));
  },
  calculateDaysBetweenTimestamps(startTime, endTime) {
    const timeDifference = endTime.getTime() - startTime.getTime();
    return timeDifference / (1000 * 3600 * 24); //ms to seconds, seconds to minutes, minutes to hours, hours to days
  },
  convertTimestamp(timestamp) {
    const upDate = new Date(timestamp);
    const readableDate = upDate.toLocaleString("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return readableDate;
  },
  getDaysFromTimestamp(ts, numDays) {
    const curDate = new Date(ts * 1000); //days to ms
    return new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      curDate.getDate() + numDays
    );
  },
  getMeanFromArray: async (arr) => {
    return arr.reduce((s, n) => s + n) / arr.length;
  },
  getVarianceFromMean: async (arr, mean) => {
    return arr.reduce((s, n) => s + (n - mean) ** 2, 0) / (arr.length - 1);
  },
  getStdDevFromVariance: async (variance) => {
    return Math.sqrt(variance);
  },
  getSumFromArray: async (arr) => {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  },
  getAverageFromArray: async (arr) => {
    const sum = arr.reduce(function (a, b) {
      return a + b;
    });
    return sum / arr.length;
  },
  getModeFromArray: async (arr) => {
    const mode = Object.entries(
      arr.reduce((previous, current) => {
        if (previous[current] === undefined) previous[current] = 1;
        else previous[current]++;
        return previous;
      }, {})
    ).reduce((previous, current) =>
      current[1] >= previous[1] ? current : previous
    )[0];
    return parseFloat(mode);
  },
  canShowViaParams(doShow) {
    if (["dev", "heroku"].includes(AppConstants.NODE_ENV) && doShow) {
      return true;
    } else {
      return false;
    }
  },
};

module.exports = {
  FormUtils,
};
