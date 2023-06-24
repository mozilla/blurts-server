/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Subscriber } from "./app/(nextjs_migration)/(authenticated)/user/breaches/breaches";

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
type ViewPartial<ViewPartialParams = object> = (
  data: ViewPartialParams & { partial: { name: string } }
) => string;
type GuestViewPartialData<ViewPartialParams = object> = {
  partial: ViewPartial<ViewPartialParams>;
  nonce: string;
  meta?: {
    title?: string;
    socialTitle?: string;
    socialDescription?: string;
  };
} & ViewPartialParams;
type MainViewPartialData<ViewPartialParams = object> = {
  fxaProfile: NonNullable<
    import("express").Request["user"]
  >["fxa_profile_json"];
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
};
declare namespace Express {
  export interface Request {
    user?: Subscriber & {
      // TODO: Finish the type definition of the user object
      fxa_profile_json?: FxaProfile;
    };
  }
}

declare module "mozlog" {
  type LogFunction = (_op: string, _details?: object | string) => void;

  type Options = {
    app: string;
    level: string;
    fmt: string;
  };
  const defaultFunction: (_options: Options) => (_scope: string) => {
    debug: LogFunction;
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
  };

  export default defaultFunction;
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gtag: any;
}

export type OneRepScanResult = {
  id: number | null;
  age: number | null;
  url: string | URL;
  link: string | URL;
  emails: string[];
  phones: string[];
  status: "new" | "optout_in_progress" | "waiting_for_verification" | "removed";
  scan_id: number;
  addresses: {
    zip: string;
    city: string;
    state: string;
    street: string;
  }[];
  last_name: string;
  relatives: string[];
  created_at: string | Date;
  first_name: string;
  profile_id: number;
  updated_at: string | Date;
  data_broker: string;
  middle_name: string | null;
  data_broker_id: number;
};
