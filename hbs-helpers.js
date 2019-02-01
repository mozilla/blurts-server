"use strict";

const AppConstants = require("./app-constants");
const { LocaleUtils } = require("./locale-utils");
const modifiedStringList = require("./modified-strings");
const mozlog = require("./log");


const log = mozlog("hbs-helpers");


function fluentFormat (supportedLocales, id, args) {
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function fluentFxa (supportedLocales, id, args) {
  if (AppConstants.FXA_ENABLED) {
    id = `fxa-${id}`;
  }
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function getStringID (supportedLocales, id, number) {
  id = `${id}${number}`;
  if (modifiedStringList.includes(id)) {
    id = `fxa-${id}`;
  }
  return LocaleUtils.fluentFormat(supportedLocales, id);
}


function localizedBreachDataClasses(supportedLocales, dataClasses, args) {
    const localizedDataClasses = [];
    dataClasses.forEach(dataClass => {
      localizedDataClasses.push(LocaleUtils.fluentFormat(supportedLocales, dataClass, args));
    });
    return localizedDataClasses.join(", ");
}


function fluentNestedBold(supportedLocales, id, args) {
  args.hash.breachName = `<span class="medium">${args.hash.breachName}</span>`;
  return LocaleUtils.fluentFormat(supportedLocales, id, args.hash);
}


function prettyDate(supportedLocales, date) {
  const jsDate = new Date(date);
  const options = {year: "numeric", month: "long", day: "numeric"};
  const intlDateTimeFormatter = new Intl.DateTimeFormat(supportedLocales, options);
  return intlDateTimeFormatter.format(jsDate);
}


function localeString(supportedLocales, numericInput) {
  const intlNumberFormatter = new Intl.NumberFormat(supportedLocales);
  return intlNumberFormatter.format(numericInput);
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
    "!!": !v1 || !v2 ? true : false,
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
  fluentFxa,
  getStringID,
  fluentNestedBold,
  localizedBreachDataClasses,
  prettyDate,
  localeString,
  eachFromTo,
  ifCompare,
  breachMath,
  loop,
};
