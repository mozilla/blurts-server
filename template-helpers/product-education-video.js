"use strict";

const AppConstants = require("../app-constants");
const { getString } = require("./hbs-helpers");

function productEducation(type, args) {
  const productType = type.toLowerCase();

  return {
    headingTxt: getString(`${productType}-video-headline`, args),
    videoSrc: AppConstants[`EDUCATION_VIDEO_URL_${type.toUpperCase()}`],
    posterSrc: `${AppConstants.SERVER_URL}/img/education-vid-cover-${productType}.png`,
  };
}

module.exports = { productEducation };
