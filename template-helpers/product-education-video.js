"use strict";

const AppConstants = require("../app-constants");
const { getString } = require("./hbs-helpers");

function productEducation(type, args) {
  const productType = type.toLowerCase();

  return {
    headingTxt: getString(`${productType}-video-headline`, args),
    videoSrc: AppConstants[`EDUCATION_VIDEO_URL_${type.toUpperCase()}`],
  };
}

module.exports = { productEducation };
