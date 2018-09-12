"use strict";

function breachDataClasses(dataClasses) {
  if (dataClasses.constructor === Array) {
    return dataClasses.join(", ");
  } else {
    return dataClasses;
  }
}


function prettyDate(date) {
  const jsDate = new Date(date);
  // TODO: localize this
  return jsDate.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
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
  return console.error(`Error: ${operator} not found`);
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
  if (returnValue < 10) {
    return {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    }[returnValue];
  }
  return returnValue;
}


module.exports = {
  breachDataClasses,
  prettyDate,
  localeString,
  eachFromTo,
  ifCompare,
  breachMath,
};
