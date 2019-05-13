"use strict";

const { getStrings } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");

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
      stringId: "terms-and-privacy",
      href: "https://www.mozilla.org/privacy/firefox-monitor/?utm_campaign=fx_monitor_downloads&utm_content=site-footer-link&utm_medium=referral&utm_source=monitor.firefox.com",
    },
  ];

  return getStrings(footerLinks, locales);
}

function getAboutPageStrings(args) {
  const locales = args.data.root.req.supportedLocales;
  const aboutPageStrings = [
    {
      headline:"how-fxm-1-headline",
      subhead: "how-fxm-1-blurb",
      scan: LocaleUtils.fluentFormat(locales, "scan-submit"),
    },
    {
      headline:"how-fxm-2-headline",
      subhead: "how-fxm-2-blurb",
      signUp: LocaleUtils.fluentFormat(locales, "sign-up-for-alerts"),
    },
    {
      headline:"how-fxm-3-headline",
      subhead: "how-fxm-3-blurb",
      download: LocaleUtils.fluentFormat(locales, "download-firefox-banner-button"),
    },
  ];

  aboutPageStrings.forEach(aboutBlurb => {
    aboutBlurb.headline = LocaleUtils.fluentFormat(locales, aboutBlurb.headline);
    aboutBlurb.subhead = LocaleUtils.fluentFormat(locales, aboutBlurb.subhead);
    aboutBlurb.cta = LocaleUtils.fluentFormat(locales, aboutBlurb.cta);
  });
  return aboutPageStrings;
}

module.exports = {
  getAboutPageStrings,
  getFooterLinks,
};
