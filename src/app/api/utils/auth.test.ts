/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi } from "vitest";
import type { OAuthConfig } from "next-auth/providers/oauth";

vi.mock("../../../db/tables/subscribers", () => ({}));
vi.mock("../../../db/tables/emailAddresses", () => ({}));
vi.mock("../../../db/tables/email_subscriptions", () => ({}));
vi.mock("../../functions/server/getBreaches", () => ({}));
vi.mock("../../../utils/hibp", () => ({}));
vi.mock("../../../utils/email", () => ({}));
vi.mock("../../functions/l10n/serverComponents", () => ({}));
vi.mock("../../../emails/renderEmail", () => ({}));
vi.mock("../../../emails/templates/signupReport/SignupReportEmail", () => ({}));

import { authOptions } from "./auth";
import { FXA_MONITOR_SCOPE } from "../../../constants";

describe("FxA provider", () => {
  it("requests the profile, subscriptions, and Monitor scopes", () => {
    const provider = authOptions.providers[0] as OAuthConfig<unknown>;
    const authorization = provider.authorization as {
      params: { scope: string };
    };

    expect(authorization.params.scope.split(" ")).toEqual([
      "profile",
      "https://identity.mozilla.com/account/subscriptions",
      FXA_MONITOR_SCOPE,
    ]);
  });
});
