/* eslint-env browser */
"use strict";
/* global ga */
/* global _dntEnabled  */

// L8-L29 courtesy of https://github.com/mozilla/send //

function browserName() {
  try {
    if (/firefox/i.test(navigator.userAgent)) {
      return "firefox";
    }
    if (/edge/i.test(navigator.userAgent)) {
      return "edge";
    }
    if (/trident/i.test(navigator.userAgent)) {
      return "ie";
    }
    if (/chrome/i.test(navigator.userAgent)) {
      return "chrome";
    }
    if (/safari/i.test(navigator.userAgent)) {
      return "safari";
    }
    return "other";
  } catch (e) {
    return "unknown";
  }
}



if (browserName() === "firefox") {
  if (document.getElementById("download-firefox") || document.getElementById("download-firefox-bar")) {
    document.querySelectorAll(".download-firefox").forEach(downloadBanner => {
      downloadBanner.classList.add("hide");
    });
  }
}

if (!_dntEnabled()) {
	(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
	})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
}

if(typeof(ga) !== "undefined") {
	ga("create", "UA-77033033-16");
	ga("set", "anonymizeIp", true);


  // Strip token and hash values from pings sent to GA
  const loc = document.location;
  let pageValue = loc.pathname + loc.search;
  if (loc.search && (loc.search.includes("token=") || loc.search.includes("hash="))) {
    pageValue = loc.pathname;
    ga("set", "location", pageValue);
    ga("set", "page", pageValue);
  }

	ga("send", "pageview");
}
