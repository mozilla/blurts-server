/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import * as jose from "jose";
import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { config } from "../../../../config";
import { type NextRequest } from "next/server";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";

// Register stubs for db methods and other unwanted external calls
vi.mock("../../../../db/tables/subscribers", () => ({
  getSubscriberByFxaUid: vi.fn(),
  updateFxAProfileData: vi.fn(),
  updatePrimaryEmail: vi.fn(),
}));
vi.mock("../../../../utils/fxa", () => ({
  revokeOAuthTokens: vi.fn(),
}));
vi.mock("../../../../app/functions/server/glean", () => ({
  record: vi.fn(),
}));
vi.mock("../../../../app/functions/server/deleteAccount", () => ({
  deleteAccount: vi.fn(),
}));

// Defer variable with closure to register and hoist mock,
// but populate data when available
// The let is intentional here because of this ordering
// eslint-disable-next-line prefer-const
let localKeySet: ReturnType<typeof jose.createLocalJWKSet>;
vi.mock("../../../../utils/jwks", () => ({
  jwksClient: () => localKeySet,
}));

// Replace implementations
import { getSubscriberByFxaUid } from "../../../../db/tables/subscribers";
vi.mocked(getSubscriberByFxaUid).mockResolvedValue({
  id: 12345,
  primary_email: "test@example.com",
  fxa_profile_json: null,
  fxa_refresh_token: "rt",
  fxa_access_token: "at",
} as unknown as SubscriberRow & { email_addresses: EmailAddressRow[] });

// Use closure to set the mock value
const { publicKey, privateKey } = await jose.generateKeyPair("RS256", {
  extractable: true,
});
const publicKeyJwk = await jose.exportJWK(publicKey);
const kid = "test-kid";
publicKeyJwk.kid = kid;
publicKeyJwk.alg = "RS256";
localKeySet = jose.createLocalJWKSet({ keys: [publicKeyJwk] });

describe("fxa-rp-events", async () => {
  afterEach(() => vi.clearAllMocks());
  afterAll(() => vi.restoreAllMocks());

  describe("happy path", () => {
    it("successfully processes a valid jwt with correct payload", async () => {
      // Need to import after mocks for everything to resolve appropriately
      const { POST } =
        await import("../../../../app/api/v1/fxa-rp-events/route");

      const token = await new jose.SignJWT({
        sub: "fxa-uid-123",
        events: {
          "https://schemas.accounts.firefox.com/event/password-change": {
            changeTime: Date.now(),
          },
        },
      })
        .setProtectedHeader({ alg: "RS256", kid })
        .setIssuer(config.fxaIssuer)
        .setAudience(config.oauthClientId)
        .setIssuedAt()
        .setExpirationTime("5m")
        .sign(privateKey);

      // Just include the required component of the request object
      const req = {
        headers: { authorization: `Bearer ${token}` },
      } as unknown as NextRequest;
      const res = await POST(req);
      expect(res.status).toBe(200);
    });
  });
  describe("sad path", () => {
    it.each([
      {
        issuer: config.fxaIssuer,
        kid: "incorrect kid",
        aud: config.oauthClientId,
        n: "kid",
      },
      {
        issuer: "incorrect issuer",
        kid,
        aud: config.oauthClientId,
        n: "issuer",
      },
      {
        issuer: config.fxaIssuer,
        kid,
        aud: "incorrect audience",
        n: "aud",
      },
    ])(
      "Returns 401 if $n could not be matched",
      async ({ issuer, kid, aud }) => {
        // Need to import after mocks for everything to resolve appropriately
        const { POST } =
          await import("../../../../app/api/v1/fxa-rp-events/route");

        const token = await new jose.SignJWT({
          sub: "fxa-uid-123",
          events: {
            "https://schemas.accounts.firefox.com/event/password-change": {
              changeTime: Date.now(),
            },
          },
        })
          .setProtectedHeader({ alg: "RS256", kid })
          .setIssuer(issuer)
          .setAudience(aud)
          .setIssuedAt()
          .setExpirationTime("5m")
          .sign(privateKey);

        // Just include the required component of the request object
        const req = {
          headers: { authorization: `Bearer ${token}` },
        } as unknown as NextRequest;
        const res = await POST(req);
        expect(res.status).toBe(401);
      },
    );
  });
});
