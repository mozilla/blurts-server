/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export default (data) => ({
  faq: 'https://support.mozilla.org/kb/firefox-monitor-faq',
  hibp: 'https://haveibeenpwned.com/',
  legal: `https://www.mozilla.org/about/legal?utm_source=fx-monitor&utm_medium=email&utm_campaign=${data.utmCampaign}&utm_content=email-footer-link`,
  termsAndPrivacy: `https://www.mozilla.org/privacy/firefox-monitor?utm_source=fx-monitor&utm_medium=email&utm_campaign=${data.utmCampaign}&utm_content=email-footer-link`
})
