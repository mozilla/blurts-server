"use strict";

const AppConstants = require("../app-constants");
const { getString } = require("./hbs-helpers");

function productEducation(type, args) {
  const headingTxt = type.toLowerCase() === "relay" ? getString("ad-unit-1-how-do-you-keep", args) : getString("ad-unit-2-do-you-worry", args);

  return {
    headingTxt,
    videoSrc: AppConstants[`EDUCATION_VIDEO_URL_${type.toUpperCase()}`],
  };
}

module.exports = { productEducation };
