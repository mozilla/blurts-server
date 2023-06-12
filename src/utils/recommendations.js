/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from './fluent.js'

export function getAllGenericRecommendations () {
  return [
    {
      recommendationCopy: {
        subhead: 'rec-gen-1-subhead',
        body: 'rec-gen-1'
      },
      recIconClassName: 'rec-gen-1'
    },
    {
      recommendationCopy: {
        subhead: 'rec-gen-2-subhead',
        body: 'rec-gen-2'
      },
      recIconClassName: 'rec-gen-2'
    },
    {
      recommendationCopy: {
        subhead: 'rec-gen-3-subhead',
        body: 'rec-gen-3'
      },
      recIconClassName: 'rec-gen-3'
    },
    {
      recommendationCopy: {
        subhead: 'rec-gen-4-subhead',
        body: 'rec-gen-4'
      },
      recIconClassName: 'rec-gen-4'
    }
  ]
}

// It's unclear why this function has unused parameters, but since they're
// positional parameters, removing them risks breaking things:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getAllPriorityDataClasses (isUserBrowserFirefox = false, isUserLocaleEnUs = false, isUserLocaleEn = false, changePWLink = null) {
  return {
    'government-issued-ids': {
      weight: 101,
      glyphName: 'social-security-numbers'
    },
    'social-security-numbers': {
      weight: 101,
      glyphName: 'social-security-numbers',
      recommendations: isUserLocaleEnUs
        ? [
            {
              recommendationCopy: {
                subhead: 'rec-ssn-cta',
                cta: 'rec-ssn-cta',
                body: 'rec-ssn'
              },
              ctaHref: 'https://www.annualcreditreport.com/index.action',
              ctaShouldOpenNewTab: true,
              ctaAnalyticsId: 'Request credit reports',
              recIconClassName: 'rec-ssn'
            }
          ]
        : null
    },
    passwords: {
      weight: 100,
      glyphName: 'passwords',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-pw-1-subhead',
            cta: changePWLink ? 'rec-pw-1-cta' : '',
            body: 'rec-pw-1-2'
          },
          ctaHref: changePWLink,
          ctaShouldOpenNewTab: true,
          ctaAnalyticsId: 'Change password for this site',
          recIconClassName: 'rec-pw-1'
        },
        {
          recommendationCopy: {
            subhead: 'rec-pw-2-subhead',
            // Comment this CTA back in once monitor.firefox.com
            // has been added to the allowlist and is able to open about:logins
            // https://searchfox.org/mozilla-central/source/browser/app/permissions
            // cta: isUserBrowserFirefox ? "rec-pw-2-cta-fx" : "",
            body: 'rec-pw-2'
          },
          recIconClassName: 'rec-pw-2'
          // ctaHref: "", // Will open about:logins in the future or the lockwise website.
        }
      ]
    },
    'bank-account-numbers': {
      weight: 99,
      glyphName: 'bank-account-numbers',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-bank-acc-subhead',
            body: 'rec-bank-acc'
          },
          recIconClassName: 'rec-bank-acc'
        }
      ]
    },
    'credit-cards': {
      weight: 98,
      glyphName: 'credit-cards',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-cc-subhead',
            body: 'rec-cc'
          },
          recIconClassName: 'rec-cc'
        }
      ]
    },
    'credit-card-cvv': {
      weight: 97,
      glyphName: 'credit-card-cvvs'
    },
    'partial-credit-card-data': {
      weight: 96,
      glyphName: 'partial-credit-card-data',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-cc-subhead',
            body: 'rec-cc'
          },
          recIconClassName: 'rec-cc'
        }
      ]
    },
    'ip-addresses': {
      weight: 95,
      glyphName: 'ip-addresses',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-ip-subhead-2',
            cta: 'rec-moz-vpn-cta',
            body: 'rec-moz-vpn-update-2'
          },
          ctaHref: 'https://www.mozilla.org/products/vpn?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-detail',
          ctaShouldOpenNewTab: true,
          ctaAnalyticsId: 'Try Mozilla VPN',
          recIconClassName: 'rec-ip-us'
        }
      ]
    },
    'historical-passwords': {
      weight: 94,
      glyphName: 'historical-passwords',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-hist-pw-subhead'
            // Comment back in once Monitor is able to open about:logins
            // cta: isUserBrowserFirefox ? "rec-hist-pw-cta-fx" : "",
          },
          recIconClassName: 'rec-hist-pw'
          // Comment back in once Monitor is able to open about:logins
          // ctaHref: "about:logins",
        }
      ]
    },
    'security-questions-and-answers': {
      weight: 93,
      glyphName: 'security-questions-and-answers',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-sec-qa-subhead',
            body: 'rec-sec-qa'
          },
          recIconClassName: 'rec-sec-qa'
        }
      ]
    },
    'phone-numbers': {
      weight: 92,
      glyphName: 'phone-numbers',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-phone-num-subhead',
            body: 'rec-phone-num'
          },
          recIconClassName: 'rec-phone-num'
        }
      ]
    },
    'email-addresses': {
      weight: 91,
      glyphName: 'email-addresses',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-email-mask-subhead',
            body: 'rec-email',
            cta: 'rec-email-cta'
          },
          ctaHref: 'https://relay.firefox.com/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-detail',
          ctaShouldOpenNewTab: true,
          ctaAnalyticsId: 'Try Firefox Relay',
          recIconClassName: 'rec-email'
        }
      ]
    },
    'dates-of-birth': {
      weight: 90,
      glyphName: 'dates-of-birth',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-dob-subhead',
            body: 'rec-dob'
          },
          recIconClassName: 'rec-dob'
        }
      ]
    },
    pins: {
      weight: 89,
      glyphName: 'pins',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-pins-subhead',
            body: 'rec-pins'
          },
          recIconClassName: 'rec-pins'
        }
      ]
    },
    'physical-addresses': {
      weight: 88,
      glyphName: 'physical-addresses',
      recommendations: [
        {
          recommendationCopy: {
            subhead: 'rec-address-subhead',
            body: 'rec-address'
          },
          recIconClassName: 'rec-address'
        }
      ]
    }
  }
}
export function getFourthPasswordRecommendation () {
  return {
    recommendationCopy: {
      subhead: getMessage('rec-pw-4-subhead'),
      body: getMessage('rec-pw-4'),
      cta: getMessage('rec-pw-4-cta')
    },
    ctaHref: 'https://2fa.directory/',
    ctaShouldOpenNewTab: true,
    ctaAnalyticsId: 'See sites that offer 2FA',
    recIconClassName: 'rec-pw-4'
  }
}
