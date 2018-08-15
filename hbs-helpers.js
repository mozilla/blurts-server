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

  },
};

module.exports = HBSHelpers;
