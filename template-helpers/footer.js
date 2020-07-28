"use strict";

const { getStrings } = require("./hbs-helpers");
const { LocaleUtils } = require("./../locale-utils");

const AppConstants = require("../app-constants");
const EXPERIMENTS_ENABLED = (AppConstants.EXPERIMENT_ACTIVE === "1");
const { getExperimentFlags } = require("../controllers/utils");

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
      stringId: "frequently-asked-questions",
      href: "https://support.mozilla.org/kb/firefox-monitor-faq",
    },
    {
      title: "Terms & Privacy",
      stringId: "terms-and-privacy",
      href: "https://www.mozilla.org/privacy/firefox-monitor/?utm_campaign=fx_monitor_downloads&utm_content=site-footer-link&utm_medium=referral&utm_source=monitor.firefox.com",
    },
    {
      title: "GitHub",
      stringId: "GitHub-link-title",
      href: "https://github.com/mozilla/blurts-server",
    },
  ];

  // Growth Experiment: Only add the footer share line if user is on VB branch
  const experimentFlags = getExperimentFlags(args.data.root.req, EXPERIMENTS_ENABLED);
  if (EXPERIMENTS_ENABLED && experimentFlags.treatmentBranch) {
    const shareMonitorFooter = {
      title: "Share Monitor",
      stringId: "share-monitor",
      href: "/share/purple",
      experiment: "js-share-modal",
    };

    footerLinks.splice(2, 0, shareMonitorFooter);
  }


  return getStrings(footerLinks, locales);
}

function getAboutPageStrings(args) {
  const locales = args.data.root.req.supportedLocales;
  const aboutPageStrings = [
    {
      headline:"how-fxm-1-headline",
      subhead: "how-fxm-1-blurb",
      localizedCta: LocaleUtils.fluentFormat(locales, "scan-submit"),
      href: "/",
      eventCategory: "About Page: Search Your Email",
    },
    {
      headline:"how-fxm-2-headline",
      subhead: "how-fxm-2-blurb",
      ctaId: "signUp",
      localizedCta: LocaleUtils.fluentFormat(locales, "sign-up-for-alerts"),
    },
    {
      headline:"how-fxm-3-headline",
      subhead: "how-fxm-3-blurb",
      localizedCta: LocaleUtils.fluentFormat(locales, "download-firefox-banner-button"),
      href: "https://www.mozilla.org/firefox",
      eventCategory: "About Page: Download Firefox",
      download: "download",
    },
  ];

  aboutPageStrings.forEach(aboutBlock => {
    aboutBlock.headline = LocaleUtils.fluentFormat(locales, aboutBlock.headline);
    aboutBlock.subhead = LocaleUtils.fluentFormat(locales, aboutBlock.subhead);
    aboutBlock.localizedCta = LocaleUtils.fluentFormat(locales, aboutBlock.localizedCta);
  });
  return aboutPageStrings;
}

module.exports = {
  getAboutPageStrings,
  getFooterLinks,
};
