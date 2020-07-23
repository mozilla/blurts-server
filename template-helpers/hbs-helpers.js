"use strict";

const AppConstants = require("./../app-constants");
const { LocaleUtils } = require("./../locale-utils");
const mozlog = require("./../log");


const log = mozlog("template-helpers/hbs-helpers");

function getSupportedLocales(args) {
  if (args.data) {
    if (args.data.root.supportedLocales) {
      return args.data.root.supportedLocales;
    }
    return args.data.root.req.supportedLocales;
  }
  if (args.this) {
    return args.this.req.supportedLocales;
  }
  return null;
}


function getString (id, args) {
  const supportedLocales = getSupportedLocales(args);
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStrings(stringArr, locales) {
  stringArr.forEach(string => {
    const stringId = string.stringId;
    // Growth Experiment: Catch EN* Experimnal Strings
    if (stringId === "share-monitor") {
      string.stringId = "Share Monitor";
    } else {
      string.stringId =LocaleUtils.fluentFormat(locales, stringId);
    }
  });
  return stringArr;
}


function fluentFxa (id, args) {
  const supportedLocales = args.data.root.req.supportedLocales;
  if (AppConstants.FXA_ENABLED) {
    id = `fxa-${id}`;
  }
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStringID (id, number, args) {
  // const supportedLocales = args.data.root.req.supportedLocales;
  // id = `${id}${number}`;
  // if (modifiedStringMap[id]) {
  //   id = modifiedStringMap[id];
  // }
  // return LocaleUtils.fluentFormat(supportedLocales, id);
}


function localizedBreachDataClasses(dataClasses, locales) {
  const localizedDataClasses = [];
  for (const dataClass of dataClasses) {
    localizedDataClasses.push(LocaleUtils.fluentFormat(locales, dataClass));
  }
  return localizedDataClasses.join(", ");
}


function fluentNestedBold(id, args) {
  const supportedLocales = args.data.root.req.supportedLocales;

  const addMarkup = (word) => {
    return ` <span class="bold">${word}</span> `;
  };

  let localizedStrings = LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
  if (args.hash.breachCount || args.hash.breachCount === 0) {
    localizedStrings = localizedStrings.replace(/(\s[\d]+\s)/, addMarkup(args.hash.breachCount));
  }
  return localizedStrings;
}


function prettyDate(date, locales) {
  const jsDate = new Date(date);
  const options = {year: "numeric", month: "long", day: "numeric"};
  const intlDateTimeFormatter = new Intl.DateTimeFormat(locales, options);
  return intlDateTimeFormatter.format(jsDate);
}


function localeString(numericInput, locales) {
  const intlNumberFormatter = new Intl.NumberFormat(locales);
  return intlNumberFormatter.format(numericInput);
}

function getFxaUrl() {
  return AppConstants.FXA_SETTINGS_URL;
}


function eachFromTo(ary, min, max, options) {
  if(!ary || ary.length === 0)
      return options.inverse(this);

  let result = "";

  for (let i = min; i < max && i < ary.length; i++) {
    result = result + options.fn(ary[i]);
  }
  return result;
}


function localize(locales, stringId, args) {
  return LocaleUtils.fluentFormat(locales, stringId, args);
}


function loop(from, to, inc, block) {
  block = block || {fn: function () { return arguments[0]; }};
  const data = block.data || {index: null};
  let output = "";
  for (let i = from; i <= to; i += inc) {
      data["index"] = i;
      output += block.fn(i, {data: data});
  }
  return output;
}


function ifCompare(v1, operator, v2, options) {
  //https://stackoverflow.com/questions/28978759/length-check-in-a-handlebars-js-if-conditional
  const operators = {
    ">": v1 > v2 ? true : false,
    ">=": v1 >= v2 ? true : false,
    "<": v1 < v2 ? true : false,
    "<=": v1 <= v2 ? true : false,
    "===": v1 === v2 ? true : false,
    "&&" : v1 && v2 ? true : false,
    "||" : v1 || v2 ? true : false,
    "!|" : !v1 || !v2 ? true : false,
    "!!" : !v1 && !v2  ? true : false,
  };
  if (operators.hasOwnProperty(operator)) {
    if (operators[operator]) {
      return options.fn(this);
    }
    return options.inverse(this);
  }
  log.error("ifCompare", {message: `${operator} not found`});
  return;
}


function breachMath(lValue, operator = null, rValue = null) {
  lValue = parseFloat(lValue);
  let returnValue = lValue;
  if (operator) {
      rValue = parseFloat(rValue);
    returnValue = {
      "+": lValue + rValue,
      "-": lValue - rValue,
      "*": lValue * rValue,
      "/": lValue / rValue,
      "%": lValue % rValue,
    }[operator];
  }
  return returnValue;
}


module.exports = {
  getString,
  getStrings,
  fluentFxa,
  getStringID,
  getSupportedLocales,
  fluentNestedBold,
  localizedBreachDataClasses,
  localize,
  prettyDate,
  localeString,
  getFxaUrl,
  eachFromTo,
  ifCompare,
  breachMath,
  loop,
};
