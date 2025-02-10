/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// `getAllPriorityDataClasses` contains hardly any logic and can probably do
// with a refactoring too, given its unused arguments.
/* c8 ignore start */

// It's unclear why this function has unused parameters, but since they're
// positional parameters, removing them risks breaking things:

type RecommendationsType = {
  recommendationCopy: {
    subhead: string;
    body?: string;
  };
  recIconClassName: string;
  cta?: {
    content: string;
    href: string;
    shouldOpenNewTab: boolean;
    analyticsId: string;
  };
};

export type PriorityDataClass = {
  weight: number;
  glyphName: string;
  recommendations: null | RecommendationsType[];
};

export function getAllPriorityDataClasses(
  _isUserBrowserFirefox: boolean = false,
  isUserLocaleEnUs: boolean = false,
  _isUserLocaleEn: boolean = false,
  changePWLink: string | null = null,
): Record<string, PriorityDataClass> {
  return {
    "government-issued-ids": {
      weight: 101,
      glyphName: "social-security-numbers",
      recommendations: [],
    },
    "social-security-numbers": {
      weight: 101,
      glyphName: "social-security-numbers",
      recommendations: isUserLocaleEnUs
        ? [
            {
              recommendationCopy: {
                subhead: "rec-ssn-cta",
                body: "rec-ssn",
              },
              cta: {
                content: "rec-ssn-cta",
                href: "https://www.annualcreditreport.com/index.action",
                shouldOpenNewTab: true,
                analyticsId: "Request credit reports",
              },
              recIconClassName: "rec-ssn",
            },
          ]
        : null,
    },
    passwords: {
      weight: 100,
      glyphName: "passwords",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-pw-1-subhead",
            body: "rec-pw-1-2",
          },
          cta: changePWLink
            ? {
                content: "rec-pw-1-cta",
                href: changePWLink,
                shouldOpenNewTab: true,
                analyticsId: "Change password for this site",
              }
            : undefined,
          recIconClassName: "rec-pw-1",
        },
        {
          recommendationCopy: {
            subhead: "rec-pw-2-subhead",
            // Comment this CTA back in once monitor.mozilla.org
            // has been added to the allowlist and is able to open about:logins
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
      glyphName: "bank-account-numbers",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-bank-acc-subhead",
            body: "rec-bank-acc",
          },
          recIconClassName: "rec-bank-acc",
        },
      ],
    },
    "credit-cards": {
      weight: 98,
      glyphName: "credit-cards",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-cc-subhead",
            body: "rec-cc",
          },
          recIconClassName: "rec-cc",
        },
      ],
    },
    "credit-card-cvv": {
      weight: 97,
      glyphName: "credit-card-cvvs",
      recommendations: [],
    },
    "partial-credit-card-data": {
      weight: 96,
      glyphName: "partial-credit-card-data",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-cc-subhead",
            body: "rec-cc",
          },
          recIconClassName: "rec-cc",
        },
      ],
    },
    "ip-addresses": {
      weight: 95,
      glyphName: "ip-addresses",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-ip-subhead-2",
            body: "rec-moz-vpn-update-2",
          },
          cta: {
            content: "rec-moz-vpn-cta",
            href: "https://www.mozilla.org/products/vpn?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-detail",
            shouldOpenNewTab: true,
            analyticsId: "Try Mozilla VPN",
          },
          recIconClassName: "rec-ip-us",
        },
      ],
    },
    "historical-passwords": {
      weight: 94,
      glyphName: "historical-passwords",
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
      glyphName: "security-questions-and-answers",
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
      glyphName: "phone-numbers",
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
      glyphName: "email-addresses",
      recommendations: [
        {
          recommendationCopy: {
            subhead: "rec-email-mask-subhead",
            body: "rec-email",
          },
          cta: {
            content: "rec-email-cta",
            href: "https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-detail",
            shouldOpenNewTab: true,
            analyticsId: "Try Firefox Relay",
          },
          recIconClassName: "rec-email",
        },
      ],
    },
    "dates-of-birth": {
      weight: 90,
      glyphName: "dates-of-birth",
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
    pins: {
      weight: 89,
      glyphName: "pins",
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
      glyphName: "physical-addresses",
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
}
/* c8 ignore stop */
