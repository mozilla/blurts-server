"use strict";

const AppConstants = require("./../app-constants");

function makeRemovePage(args = null) {
  const removeCopy = {
    msg: "hello world",
  };

  return args.fn(makeRemovePage);
}

module.exports = {
  makeRemovePage,
};
