/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SubscriberRow } from "knex/types/tables";

// Keep the real data classes and resolutions
vi.mock("./firefoxApiBreaches", async (importOriginal) => ({
  ...(await importOriginal<typeof import("./firefoxApiBreaches")>()),
  getAffectingBreaches: vi.fn(),
}));

vi.mock("../../../db/tables/subscribers", () => ({
  setBreachResolution: vi.fn(),
}));

vi.mock("../../../utils/metrics", () => ({
  incFirefoxApiResolution: vi.fn(),
}));

import { getAffectingBreaches } from "./firefoxApiBreaches";
import { setBreachResolution } from "../../../db/tables/subscribers";
import { incFirefoxApiResolution } from "../../../utils/metrics";
import type { HibpLikeDbBreach } from "../../../utils/hibp";
import { UpstreamUnavailableError } from "../../../utils/error";
import { resolveFirefoxUserBreaches } from "./resolveFirefoxUserBreaches";

const PRIMARY = "Primary@Example.com";
const SECONDARY = "secondary@example.com";

const ADOBE = {
  Id: 1,
  Name: "Adobe",
  DataClasses: ["passwords", "email-addresses"],
} as HibpLikeDbBreach;
const FACEBOOK = {
  Id: 2,
  Name: "Facebook",
  DataClasses: ["email-addresses", "phone-numbers"],
} as HibpLikeDbBreach;

function makeSubscriber(
  breachResolution: SubscriberRow["breach_resolution"] = null,
): SubscriberRow {
  return { id: 7, breach_resolution: breachResolution } as SubscriberRow;
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getAffectingBreaches).mockResolvedValue([
    { breach: ADOBE, emails: [PRIMARY, SECONDARY] },
    { breach: FACEBOOK, emails: [SECONDARY] },
  ]);
});

describe("resolveFirefoxUserBreaches", () => {
  it("resolves every served data class for every affected email", async () => {
    const subscriber = makeSubscriber();

    await resolveFirefoxUserBreaches(subscriber, new Set(["Adobe"]));

    expect(setBreachResolution).toHaveBeenCalledWith(subscriber, {
      useBreachId: true,
      [PRIMARY]: {
        1: { resolutionsChecked: ["passwords", "email-addresses"] },
      },
      [SECONDARY]: {
        1: { resolutionsChecked: ["passwords", "email-addresses"] },
      },
    });
  });

  it("resolves only the served data classes a breach leaked", async () => {
    const subscriber = makeSubscriber();

    await resolveFirefoxUserBreaches(subscriber, new Set(["Facebook"]));

    expect(setBreachResolution).toHaveBeenCalledWith(subscriber, {
      useBreachId: true,
      [SECONDARY]: { 2: { resolutionsChecked: ["email-addresses"] } },
    });
  });

  it("keeps existing resolutions, adding to them", async () => {
    const subscriber = makeSubscriber({
      useBreachId: true,
      [PRIMARY]: { 1: { resolutionsChecked: ["phone-numbers"] } },
      [SECONDARY]: { 2: { resolutionsChecked: ["email-addresses"] } },
    });

    await resolveFirefoxUserBreaches(subscriber, new Set(["Adobe"]));

    expect(setBreachResolution).toHaveBeenCalledWith(subscriber, {
      useBreachId: true,
      [PRIMARY]: {
        1: {
          resolutionsChecked: ["phone-numbers", "passwords", "email-addresses"],
        },
      },
      [SECONDARY]: {
        1: { resolutionsChecked: ["passwords", "email-addresses"] },
        2: { resolutionsChecked: ["email-addresses"] },
      },
    });
  });

  it("does not mutate the subscriber's resolutions", async () => {
    const subscriber = makeSubscriber({
      useBreachId: true,
      [PRIMARY]: { 1: { resolutionsChecked: ["email-addresses"] } },
    });

    await resolveFirefoxUserBreaches(subscriber, new Set(["Adobe"]));

    expect(subscriber.breach_resolution).toEqual({
      useBreachId: true,
      [PRIMARY]: { 1: { resolutionsChecked: ["email-addresses"] } },
    });
  });

  it("skips the write when everything is already resolved", async () => {
    const subscriber = makeSubscriber({
      useBreachId: true,
      [SECONDARY]: { 2: { resolutionsChecked: ["email-addresses"] } },
    });

    await resolveFirefoxUserBreaches(subscriber, new Set(["Facebook"]));

    expect(setBreachResolution).not.toHaveBeenCalled();
    expect(incFirefoxApiResolution).toHaveBeenCalledWith(
      "already-resolved",
      "email-addresses",
    );
  });

  it("skips breaches that affect no email, resolving the rest", async () => {
    const subscriber = makeSubscriber();

    await resolveFirefoxUserBreaches(
      subscriber,
      new Set(["Renamed", "Facebook", "Retired"]),
    );

    expect(setBreachResolution).toHaveBeenCalledWith(subscriber, {
      useBreachId: true,
      [SECONDARY]: { 2: { resolutionsChecked: ["email-addresses"] } },
    });
    expect(vi.mocked(incFirefoxApiResolution).mock.calls).toEqual([
      ["resolved", "email-addresses"],
      ["skipped"],
      ["skipped"],
    ]);
  });

  it("writes nothing when every breach is skipped", async () => {
    await resolveFirefoxUserBreaches(makeSubscriber(), new Set(["Renamed"]));

    expect(setBreachResolution).not.toHaveBeenCalled();
    expect(vi.mocked(incFirefoxApiResolution).mock.calls).toEqual([
      ["skipped"],
    ]);
  });

  it("counts each breach and data class once", async () => {
    const subscriber = makeSubscriber({
      useBreachId: true,
      [SECONDARY]: { 2: { resolutionsChecked: ["email-addresses"] } },
    });

    await resolveFirefoxUserBreaches(
      subscriber,
      new Set(["Adobe", "Facebook"]),
    );

    expect(vi.mocked(incFirefoxApiResolution).mock.calls).toEqual([
      ["resolved", "passwords"],
      ["resolved", "email-addresses"],
      ["already-resolved", "email-addresses"],
    ]);
  });

  it("counts nothing when the write fails", async () => {
    vi.mocked(setBreachResolution).mockRejectedValue(new Error("db down"));

    await expect(
      resolveFirefoxUserBreaches(makeSubscriber(), new Set(["Adobe"])),
    ).rejects.toThrow("db down");
    expect(incFirefoxApiResolution).not.toHaveBeenCalled();
  });

  it("lets a HIBP failure through", async () => {
    vi.mocked(getAffectingBreaches).mockRejectedValue(
      new UpstreamUnavailableError("hibp", "timeout"),
    );

    await expect(
      resolveFirefoxUserBreaches(makeSubscriber(), new Set(["Adobe"])),
    ).rejects.toThrow(UpstreamUnavailableError);
    expect(setBreachResolution).not.toHaveBeenCalled();
  });
});
