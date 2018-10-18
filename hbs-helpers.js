"use strict";

const { LocaleUtils } = require("./locale-utils");
const mozlog = require("./log");


const log = mozlog("hbs-helpers");


function fluentFormat (supportedLocales, id, args) {
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStringID (supportedLocales, key, number) {
  const fluentID = `${key}${number}`;
  return LocaleUtils.fluentFormat(supportedLocales, fluentID);
}


function localizedBreachDataClasses(supportedLocales, dataClasses, args) {
  const localizedDataClasses = [];
  if (dataClasses.constructor === Array) {
    dataClasses.forEach(dataClass => {
      dataClass = dataClass.replace("'", "");
      localizedDataClasses.push(LocaleUtils.fluentFormat(supportedLocales, dataClass.split(" ").join("-").toLowerCase(), args));
    });
    return localizedDataClasses.join(", ");
  } else {
    return LocaleUtils.fluentFormat(supportedLocales, dataClasses.split(" ").join("-"), args);
  }
}


function prettyDate(supportedLocales, date) {
  const jsDate = new Date(date);
  return jsDate.toLocaleDateString(supportedLocales, {year: "numeric", month: "long", day: "numeric"});
}


function localeString(input) {
  return input.toLocaleString();
}


function eachFromTo(ary, min, max, options) {
  if(!ary || ary.length === 0)
      return options.inverse(this);

  const result = [];

  for (let i = min; i < max && i < ary.length; i++) {
    result.push(options.fn(ary[i], { data : { itemIndex : i } } ));
  }
  return result.join("");
}


function ifCompare(v1, operator, v2, options) {
  //https://stackoverflow.com/questions/28978759/length-check-in-a-handlebars-js-if-conditional
  const operators = {
    ">": v1 > v2 ? true : false,
    ">=": v1 >= v2 ? true : false,
    "<": v1 < v2 ? true : false,
    "<=": v1 <= v2 ? true : false,
    "===": v1 === v2 ? true : false,
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
  fluentFormat,
  getStringID,
  localizedBreachDataClasses,
  prettyDate,
  localeString,
  eachFromTo,
  ifCompare,
  breachMath,
};
