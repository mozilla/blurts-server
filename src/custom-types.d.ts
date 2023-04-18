/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

interface HTMLElement {
  // We access this.shadowRoot in custom elements often, and we've almost always
  // already called this.attachShadow({ mode: 'open' }). So, the default type
  // that indicates that it might also be `null` generates a lot of noise for an
  // error that we haven't run into yet. Thus, we override the default type to
  // pretend that shadowRoot is always set.
  shadowRoot: ShadowRoot;
}

// This lint rule does not apply to type definitions:
// eslint-disable-next-line no-unused-vars
type ViewPartial<ViewPartialParams = object> = (data: ViewPartialParams & { partial: { name: string } }) => string;
type GuestViewPartialData<ViewPartialParams = object> = {
    partial: ViewPartial<ViewPartialParams>;
    nonce: string;
  } & ViewPartialParams;
type MainViewPartialData<ViewPartialParams = object> = {
    fxaProfile: NonNullable<import('express').Request['user']>['fxa_profile_json'];
  } & GuestViewPartialData<ViewPartialParams>;

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
}
declare namespace Express {
  export interface Request {
    user?: {
      // TODO: Finish the type definition of the user object
      fxa_profile_json?: FxaProfile;
    };
  }
}
