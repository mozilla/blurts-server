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

  },
};

module.exports = HBSHelpers;
