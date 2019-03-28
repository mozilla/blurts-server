"use strict";

const { getStrings } = require("./hbs-helpers");

const getFooterLinks = (args) => {
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
      stringId: "terms-and-privacy",
      href: "https://www.mozilla.org/privacy/firefox-monitor/?utm_campaign=fx_monitor_downloads&utm_content=site-footer-link&utm_medium=referral&utm_source=monitor.firefox.com",
    },
    {
      title: "Mozilla.org",
      stringId: "mozilla-dot-org",
      href: "https://www.mozilla.org",
      openNewWindow: "",
    },
  ];

  return getStrings(footerLinks, locales);
};

module.exports = {
  getFooterLinks,
};
