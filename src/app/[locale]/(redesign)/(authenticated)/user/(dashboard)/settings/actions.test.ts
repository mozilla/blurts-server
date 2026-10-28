/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SubscriberRow } from "knex/types/tables";

vi.mock("../../../../../../functions/server/getServerSession", () => ({
  getServerSession: vi.fn(),
}));
vi.mock("../../../../../../../db/tables/subscribers", () => ({
  getSubscriberByFxaUid: vi.fn(),
  deleteResolutionsWithEmail: vi.fn(),
}));
vi.mock("../../../../../../../db/tables/emailAddresses", () => ({
  addSubscriberUnverifiedEmailHash: vi.fn(),
  removeOneSecondaryEmail: vi.fn(),
}));
vi.mock("../../../../../../functions/server/deleteAccount", () => ({
  deleteAccount: vi.fn(),
}));
vi.mock("../../../../../../../utils/fxa", () => ({
  revokeOAuthTokens: vi.fn(),
}));
vi.mock("../../../../../../functions/server/logging", () => ({
  logger: { info: vi.fn(), error: vi.fn() },
}));
vi.mock("../../../../../../functions/l10n/serverComponents", () => ({
  getAcceptLangHeaderInServerComponents: vi.fn(),
  getL10n: vi.fn(),
}));
vi.mock("../../../../../../../utils/email", () => ({ initEmail: vi.fn() }));
vi.mock("../../../../../../api/utils/email", () => ({
  sendVerificationEmail: vi.fn(),
}));
const cookieStore = { set: vi.fn() };
vi.mock("next/headers", () => ({
  cookies: () => Promise.resolve(cookieStore),
}));

import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { getSubscriberByFxaUid } from "../../../../../../../db/tables/subscribers";
import { deleteAccount } from "../../../../../../functions/server/deleteAccount";
import { revokeOAuthTokens } from "../../../../../../../utils/fxa";
import { onDeleteAccount } from "./actions";

const subscriber = {
  id: 42,
  fxa_uid: "fxa-uid",
  fxa_access_token: "at",
  fxa_refresh_token: "rt",
} as SubscriberRow;

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getServerSession).mockResolvedValue({
    user: { subscriber: { fxa_uid: "fxa-uid" } },
  } as Awaited<ReturnType<typeof getServerSession>>);
  vi.mocked(getSubscriberByFxaUid).mockResolvedValue(
    subscriber as Awaited<ReturnType<typeof getSubscriberByFxaUid>>,
  );
});

describe("onDeleteAccount", () => {
  it("revokes FxA tokens before deleting the account", async () => {
    vi.mocked(revokeOAuthTokens).mockResolvedValue(true);

    await onDeleteAccount();

    expect(revokeOAuthTokens).toHaveBeenCalledWith(
      { fxa_access_token: "at", fxa_refresh_token: "rt" },
      "account-delete",
    );
    expect(deleteAccount).toHaveBeenCalledWith(subscriber);
    expect(
      vi.mocked(revokeOAuthTokens).mock.invocationCallOrder[0],
    ).toBeLessThan(vi.mocked(deleteAccount).mock.invocationCallOrder[0]);
    expect(cookieStore.set).toHaveBeenCalled();
  });

  it("still deletes the account when revoking fails", async () => {
    vi.mocked(revokeOAuthTokens).mockResolvedValue(false);

    await onDeleteAccount();

    expect(deleteAccount).toHaveBeenCalledWith(subscriber);
    expect(cookieStore.set).toHaveBeenCalled();
  });

  it("does nothing without a session", async () => {
    vi.mocked(getServerSession).mockResolvedValue(null);

    const result = await onDeleteAccount();

    expect(result).toMatchObject({
      success: false,
      error: "delete-account-without-active-session",
    });
    expect(revokeOAuthTokens).not.toHaveBeenCalled();
    expect(deleteAccount).not.toHaveBeenCalled();
  });

  it("does nothing when no subscriber matches the session", async () => {
    vi.mocked(getSubscriberByFxaUid).mockResolvedValue(undefined);

    const result = await onDeleteAccount();

    expect(result).toMatchObject({
      success: false,
      error: "delete-account-with-invalid-session",
    });
    expect(revokeOAuthTokens).not.toHaveBeenCalled();
    expect(deleteAccount).not.toHaveBeenCalled();
  });
});
