"use strict";

const { getString } = require("./hbs-helpers");

function productEducation(productType, args) {
  let videoSrc;

  switch (productType.toLowerCase()) {
    case "relay":
      videoSrc = "https://monitor.cdn.mozilla.net/videos/FF_Relay_version_02.mp4";
      break;
    case "vpn":
      videoSrc = "https://monitor.cdn.mozilla.net/videos/Mozilla_VPN.mp4";
      break;
  }

  return {
    heading: getString(`${productType}-video-headline`, args),
    videoSrc,
  };
}

module.exports = { productEducation };
