/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * See https://github.com/mozilla/fxa/blob/564949dfc69f0f675ebb4e5f267282c2546a5767/packages/fxa-profile-server/lib/routes/profile.js#L63-L77
 */
type FxaProfile = {
  email?: string;
  uid?: string;
  avatar?: string;
  avatarDefault?: boolean;
  displayName?: string;
  locale?: string;
  amrValues?: string[];
  twoFactorAuthentication?: boolean;
  subscriptions?: string[];
  metricsEnabled?: boolean;
  sub?: string;
};
interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gtag: any;
}
