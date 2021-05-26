"use strict";

const { LocaleUtils } = require("./../locale-utils");


module.exports = {
  getAllGenericRecommendations() {
    return [
      {
        recommendationCopy: {
          subhead: "rec-gen-1-subhead",
          body: "rec-gen-1",
          cta: "rec-gen-1-cta",
        },
        ctaHref: "https://monitor.firefox.com/security-tips#strong-passwords",
        ctaShouldOpenNewTab: false,
        ctaAnalyticsId: "How to create strong passwords",
        recIconClassName: "rec-gen-1",
      },
      {
        recommendationCopy: {
          subhead: "rec-gen-2-subhead",
          body: "rec-gen-2",
          cta: "rec-gen-2-cta",
        },
        ctaHref: "https://monitor.firefox.com/security-tips#five-myths",
        ctaShouldOpenNewTab: false,
        ctaAnalyticsId: "Myths about password managers",
        recIconClassName: "rec-gen-2",
      },
      {
        recommendationCopy: {
          subhead: "rec-gen-3-subhead",
          body: "rec-gen-3",
          cta: "rec-gen-3-cta",
        },
        ctaHref: "https://monitor.firefox.com/security-tips#steps-to-protect",
        ctaShouldOpenNewTab: false,
        ctaAnalyticsId: "Read more security tips",
        recIconClassName: "rec-gen-3",
      },
      {
        recommendationCopy: {
          subhead: "rec-gen-4-subhead",
          body: "rec-gen-4",
        },
        recIconClassName: "rec-gen-4",
      },
    ];
  },
  getAllPriorityDataClasses(isUserBrowserFirefox=false, isUserLocaleEnUs=false, isUserLocaleEn=false, changePWLink=null) {
    return  {
      "government-issued-ids" : {
        weight: 101,
        pathToGlyph: "svg/glyphs/social-security-numbers",
      },
      "social-security-numbers" : {
        weight: 101,
        pathToGlyph: "svg/glyphs/social-security-numbers",
        recommendations: isUserLocaleEnUs ? [
          {
            recommendationCopy: {
              subhead: "rec-ssn-cta",
              cta: "rec-ssn-cta",
              body: "rec-ssn",
            },
            ctaHref: "https://www.annualcreditreport.com/index.action",
            ctaShouldOpenNewTab: true,
            ctaAnalyticsId: "Request credit reports",
            recIconClassName: "rec-ssn",
          },
        ] : null,
      },
      "passwords": {
        weight: 100,
        pathToGlyph: "svg/glyphs/passwords",
        recommendations: [
          {
            recommendationCopy : {
              subhead: "rec-pw-1-subhead",
              cta: changePWLink ? "rec-pw-1-cta" : "",
              body: "rec-pw-1",
            },
            ctaHref: changePWLink,
            ctaShouldOpenNewTab: true,
            ctaAnalyticsId: "Change password for this site",
            recIconClassName: "rec-pw-1",
          },
          {
            recommendationCopy : {
              subhead: "rec-pw-2-subhead",
              // Comment this CTA back in once monitor.firefox.com
              // has been added to the whitelist and is able to open about:logins
              // https://searchfox.org/mozilla-central/source/browser/app/permissions
              // cta: isUserBrowserFirefox ? "rec-pw-2-cta-fx" : "",
              body: "rec-pw-2",
            },
            recIconClassName: "rec-pw-2",
            // ctaHref: "", // Will open about:logins in the future or the lockwise website.
          },
        ],
      },
      "bank-account-numbers": {
        weight: 99,
        pathToGlyph: "svg/glyphs/bank-account-numbers",
        recommendations: [
          {
            recommendationCopy : {
              subhead: "rec-bank-acc-subhead",
              body: "rec-bank-acc",
            },
            recIconClassName: "rec-bank-acc",
          },
        ],
      },
      "credit-cards": {
        weight: 98,
        pathToGlyph: "svg/glyphs/credit-cards",
        recommendations: [
          {
            recommendationCopy : {
              subhead: "rec-cc-subhead",
              body: "rec-cc",
            },
            recIconClassName: "rec-cc",
          },
        ],
      },
      "credit-card-cvv": {
        weight: 97,
        pathToGlyph: "svg/glyphs/credit-card-cvvs",
      },
      "partial-credit-card-data": {
        weight: 96,
        pathToGlyph: "svg/glyphs/partial-credit-card-data",
        recommendations: [
          {
            recommendationCopy : {
              subhead: "rec-cc-subhead",
              body: "rec-cc",
            },
            recIconClassName: "rec-cc",
          },
        ],
      },
      "ip-addresses": {
        weight: 95,
        pathToGlyph: "svg/glyphs/ip-addresses",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-ip-subhead",
              cta: isUserLocaleEnUs ? "rec-moz-vpn-cta" : "",
              body: isUserLocaleEnUs ? "rec-moz-vpn-update" : "rec-ip-non-us",
            },
            ctaHref: "https://vpn.mozilla.org?utm_source=monitor.firefox.com&utm_medium=referral&utm_campaign=monitor-recommendations",
            ctaShouldOpenNewTab: true,
            ctaAnalyticsId: "Try Mozilla VPN",
            recIconClassName: isUserLocaleEnUs ? "rec-ip-us" : "rec-ip-non-us",
          },
        ],
      },
      "historical-passwords": {
        weight: 94,
        pathToGlyph: "svg/glyphs/historical-passwords",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-hist-pw-subhead",
              // Comment back in once Monitor is able to open about:logins
              // cta: isUserBrowserFirefox ? "rec-hist-pw-cta-fx" : "",
            },
            recIconClassName: "rec-hist-pw",
            // Comment back in once Monitor is able to open about:logins
            // ctaHref: "about:logins",
          },
        ],
      },
      "security-questions-and-answers": {
        weight: 93,
        pathToGlyph: "svg/glyphs/security-questions-and-answers",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-sec-qa-subhead",
              body: "rec-sec-qa",
            },
            recIconClassName: "rec-sec-qa",
          },
        ],
      },
      "phone-numbers": {
        weight: 92,
        pathToGlyph: "svg/glyphs/phone-numbers",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-phone-num-subhead",
              body: "rec-phone-num",
            },
            recIconClassName: "rec-phone-num",
          },
        ],
      },
      "email-addresses": {
        weight: 91,
        pathToGlyph: "svg/glyphs/email-addresses",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-email-subhead",
              body: "rec-email",
              cta: "rec-email-cta",
            },
            ctaHref: "https://relay.firefox.com/",
            ctaShouldOpenNewTab: true,
            ctaAnalyticsId: "Try Firefox Relay",
            recIconClassName: "rec-email",
          },
        ],
      },
      "dates-of-birth": {
        weight: 90,
        pathToGlyph: "svg/glyphs/dates-of-birth",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-dob-subhead",
              body: "rec-dob",
            },
            recIconClassName: "rec-dob",
          },
        ],
      },
      "pins": {
        weight: 89,
        pathToGlyph: "svg/glyphs/pins",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-pins-subhead",
              body: "rec-pins",
            },
            recIconClassName: "rec-pins",
          },
        ],
      },
      "physical-addresses": {
        weight: 88,
        pathToGlyph: "svg/glyphs/physical-addresses",
        recommendations: [
          {
            recommendationCopy: {
              subhead: "rec-address-subhead",
              body: "rec-address",
            },
            recIconClassName: "rec-address",
          },
        ],
      },
    };
  },
  getFourthPasswordRecommendation(locales) {
    return {
      recommendationCopy: {
        subhead: LocaleUtils.fluentFormat(locales, "rec-pw-4-subhead"),
        body: LocaleUtils.fluentFormat(locales, "rec-pw-4"),
        cta: LocaleUtils.fluentFormat(locales, "rec-pw-4-cta"),
      },
      ctaHref: "https://twofactorauth.org/",
      ctaShouldOpenNewTab: true,
      ctaAnalyticsId: "See sites that offer 2FA",
      recIconClassName: "rec-pw-4",
    };
  },
};
