"use strict";

const HBSHelpers = {
  init(hbs) {

    hbs.registerHelper("prettyDate", function(date) {
      const jsDate = new Date(date);
      return jsDate.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
    });

    hbs.registerHelper("breachDataClasses", function(dataClasses) {
      return dataClasses.join(", ");
    });

    hbs.registerHelper("localeString", function(input) {
      return input.toLocaleString();
    });

    hbs.registerHelper("each_from_to", function(ary, min, max, options) {
      if(!ary || ary.length === 0)
          return options.inverse(this);

      const result = [];
      
      for (let i = min; i < max && i < ary.length; i++) {
        result.push(options.fn(ary[i], { data : { itemIndex : i } } ));
      }
      return result.join("");
    });

    hbs.registerHelper("if_conditional", function(conditional, value, options) {
      if (conditional.length > value) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });

    hbs.registerHelper("breachMath", function(lValue, operator, rValue) {
      lValue = parseFloat(lValue);
      rValue=parseFloat(rValue);
      const returnValue = {
        "+": lValue + rValue,
        "-": lValue - rValue,
        "*": lValue - rValue,
        "/": lValue / rValue,
        "%": lValue % rValue,
      }[operator];
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
    });

    hbs.registerHelper("encodeURI", function(input) {
      return encodeURI(input);
    });
  },
};

module.exports = HBSHelpers;
