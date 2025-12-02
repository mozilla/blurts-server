/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const CONST_ONEREP_MAX_SCANS_THRESHOLD = 280000;
export const CONST_MAX_NUM_ADDRESSES = 5;
export const CONST_MAX_NUM_ADDRESSES_PLUS = 20;
export const CONST_GA4_MEASUREMENT_ID = "G-CXG8K4KW4P";
export const CONST_ONEREP_DATA_BROKER_COUNT = 190;
export const MOZILLA_ORG = "https://www.mozilla.org/";
export const CONST_URL_PLUS_CONTACT_SUPPORT =
  "https://support.mozilla.org/questions/new/monitor/form";
export const CONST_URL_SUMO_MONITOR_SUPPORT =
  "https://support.mozilla.org/kb/firefox-monitor";
export const CONST_URL_SUMO_MONITOR_SUPPORT_CENTER =
  "https://support.mozilla.org/products/monitor";
export const CONST_URL_SUMO_HOW_IT_WORKS =
  "https://support.mozilla.org/kb/how-does-monitor-plus-work";
export const CONST_URL_SUMO_MONITOR_FAQ =
  "https://support.mozilla.org/kb/firefox-monitor-faq";
export const CONST_URL_SUMO_MONITOR_PLUS =
  "https://support.mozilla.org/kb/how-does-monitor-plus-work";
export const CONST_URL_SUMO_MONITOR_REMOVAL =
  "https://support.mozilla.org/kb/how-does-monitor-plus-work#w_we-automatically-remove-your-information";
export const CONST_URL_SUMO_MANUAL_REMOVAL =
  "https://support.mozilla.org/kb/general-questions-about-privacy-protection-scans#w_how-do-i-manually-remove-my-personal-information-from-data-broker-sites";
export const CONST_URL_SUMO_EDIT_INFO_PERSONAL_INFO =
  "https://support.mozilla.org/kb/mozilla-monitor-faq#w_why-do-you-need-my-personal-info";
export const CONST_URL_SUMO_EDIT_PROFILE_DOB =
  "https://support.mozilla.org/kb/add-edit-your-monitor-information#w_why-can-i-not-edit-my-birth-date";
export const CONST_URL_WAITLIST =
  "https://www.mozilla.org/products/monitor/waitlist-scan/";
export const CONST_URL_TERMS =
  "https://www.mozilla.org/about/legal/terms/subscription-services/";
export const CONST_URL_PRIVACY_POLICY =
  "https://www.mozilla.org/privacy/subscription-services/";
export const CONST_URL_MOZILLA_BASKET = "https://basket.mozilla.org";
export const CONST_URL_MONITOR_GITHUB =
  "https://github.com/mozilla/blurts-server";
export const CONST_DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
export const CONST_URL_MONITOR_LANDING_PAGE_ID =
  "monitor.mozilla.org-monitor-product-page";
export const CONST_SETTINGS_TAB_SLUGS = [
  "edit-info",
  "notifications",
  "manage-account",
  "edit-profile",
] as const;
export const CONST_DATA_BROKER_PROFILE_DETAIL_ALLOW_LIST = [
  "first_name",
  "last_name",
  "middle_name",
  "first_names",
  "last_names",
  "middle_names",
  "phone_numbers",
  "addresses",
] as const;
export const CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS = {
  first_names: 4, // 5 in total including the standalone `first_name`
  middle_names: 4, // 5 in total including the standalone `middle_name`
  last_names: 4, // 5 in total including the standalone `last_name`
  phone_numbers: 10,
  addresses: 10,
} as const;
export const CONST_MAX_SCAN_RESULTS_PER_BROKER = 3 as const;
export const CONST_CIRRUS_V2_PATHNAME = "v2/features";
export const UTM_CAMPAIGN_ID_BREACH_ALERT = "breach-alert";
