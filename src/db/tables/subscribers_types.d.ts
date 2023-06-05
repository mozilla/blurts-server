/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains types for subscribers.js until it's fully typed
export type SubscriberRow = {
  id: number;
  sha1: string;
  email: string;
  verification_token: string;
  verified: boolean;
  onerep_profile_id?: number;
};
