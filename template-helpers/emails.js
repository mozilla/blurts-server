"use strict";

const e_localeString = (locales, string) => {
  console.log(`localeString ${string}`);
};

const e_localizedBreachDataClasses = (locales, string) => {
  console.log(`localizedBreachDataClasses ${string}`);
};

const e_prettyDate = (locales, string) => {
  console.log(`prettyDate ${string}`);
};


const getEmailString = (locales, stringId) => {
  console.log(stringId);
};

module.exports = {
  e_localeString,
  e_localizedBreachDataClasses,
  e_prettyDate,
  getEmailString,
};
