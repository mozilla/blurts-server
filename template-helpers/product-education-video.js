"use strict";

const { getString } = require("./hbs-helpers");

function productEducation(type, args) {
  const productType = type.toLowerCase();
  let videoSrc;

  switch (productType) {
    case "relay":
      videoSrc = "https://monitor.cdn.mozilla.net/videos/FF_Relay_version_02.mp4";
      break;
    case "vpn":
      videoSrc = "https://monitor.cdn.mozilla.net/videos/Mozilla_VPN.mp4";
      break;
  }

  return {
    headingTxt: getString(`${productType}-video-headline`, args),
    videoSrc,
  };
}

module.exports = { productEducation };
