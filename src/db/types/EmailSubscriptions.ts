/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BREACH_ALERT_LIST_ID } from "../../constants";

// valid slugs for email lists
export type EmailSubscriptionListId = typeof BREACH_ALERT_LIST_ID;
export type SubscriptionEventSource =
  // Via https://datatracker.ietf.org/doc/html/rfc8058
  | "one-click"
  // Email footer
  | "footer"
  // Toggling on settings page
  | "settings"
  // Account creation, TOS opt-in
  | "opt-in"
  // For users that are already subscribed,
  // prior to the subscription_events tables,
  // and we need to create a record for them
  | "backfill";
