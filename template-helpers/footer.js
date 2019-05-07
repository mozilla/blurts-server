"use strict";

const { getStrings } = require("./hbs-helpers");

function getFooterLinks(args) {
  const locales = args.data.root.req.supportedLocales;
  const footerLinks = [
    {
      title: "About Firefox Monitor",
      stringId: "about-firefox-monitor",
      href: "/about",
    },
    {
      title: "Frequently Asked Questions",
      stringId: "faq",
      href: "https://support.mozilla.org/kb/firefox-monitor-faq",
    },
    {
      title: "Terms & Privacy",
      stringId: "terms-and-privacy-v2",
      href: "https://www.mozilla.org/privacy/firefox-monitor/?utm_campaign=fx_monitor_downloads&utm_content=site-footer-link&utm_medium=referral&utm_source=monitor.firefox.com",
    },
  ];

  return getStrings(footerLinks, locales);
}

module.exports = {
  getFooterLinks,
};
