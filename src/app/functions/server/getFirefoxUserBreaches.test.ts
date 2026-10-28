/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @vitest-environment node

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";

vi.mock("./getBreaches", () => ({
  getBreaches: vi.fn(),
}));

vi.mock("../../../db/tables/emailAddresses", () => ({
  getUserEmails: vi.fn(),
}));

// Keep the real getFilteredBreaches
vi.mock("../../../utils/hibp", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../utils/hibp")>()),
  searchHibpRange: vi.fn(),
}));

import { getBreaches } from "./getBreaches";
import { getUserEmails } from "../../../db/tables/emailAddresses";
import { searchHibpRange, type HibpLikeDbBreach } from "../../../utils/hibp";
import { getSha1 } from "../../../utils/fxa";
import { UpstreamUnavailableError } from "../../../utils/error";
import { getFirefoxUserBreaches } from "./getFirefoxUserBreaches";

const PRIMARY = "Primary@Example.com";
const SECONDARY = "secondary@example.com";

/** A breach every filter lets through */
function makeBreach(overrides: Partial<HibpLikeDbBreach>): HibpLikeDbBreach {
  return {
    Id: 1,
    Name: "Adobe",
    Domain: "adobe.com",
    AddedDate: new Date("2026-01-01"),
    DataClasses: ["passwords", "email-addresses"],
    IsVerified: true,
    IsFabricated: false,
    IsSensitive: false,
    IsRetired: false,
    IsSpamList: false,
    ...overrides,
  } as HibpLikeDbBreach;
}

function makeSubscriber(overrides: Partial<SubscriberRow> = {}): SubscriberRow {
  return {
    id: 7,
    primary_email: PRIMARY,
    primary_verified: true,
    breach_resolution: null,
    ...overrides,
  } as SubscriberRow;
}

/** The subscriber's secondary emails */
function mockSecondaries(...rows: Array<Partial<EmailAddressRow>>) {
  vi.mocked(getUserEmails).mockResolvedValue(rows as EmailAddressRow[]);
}

/** Breach names HIBP lists, per email */
function mockHibp(namesByEmail: Record<string, string[]>) {
  vi.mocked(searchHibpRange).mockImplementation(async (sha1) => {
    for (const [email, names] of Object.entries(namesByEmail)) {
      if (getSha1(email.toLowerCase()) === sha1) return names;
    }
    return [];
  });
}

beforeEach(() => {
  mockSecondaries();
  vi.mocked(getBreaches).mockResolvedValue([makeBreach({})]);
});

describe("getFirefoxUserBreaches", () => {
  it("returns the openapi.yml shape, keyed by HIBP Name", async () => {
    mockHibp({ [PRIMARY]: ["Adobe"] });

    expect(await getFirefoxUserBreaches(makeSubscriber())).toEqual([
      {
        id: "Adobe",
        breachedAccounts: [{ email: PRIMARY, resolvedDataClasses: [] }],
      },
    ]);
  });

  it("returns an empty list when HIBP lists nothing", async () => {
    mockHibp({});

    expect(await getFirefoxUserBreaches(makeSubscriber())).toEqual([]);
  });

  it("hashes the lowercased email", async () => {
    mockHibp({});

    await getFirefoxUserBreaches(makeSubscriber());

    expect(searchHibpRange).toHaveBeenCalledWith(
      getSha1("primary@example.com"),
    );
  });

  it("ignores names missing from our catalog", async () => {
    mockHibp({ [PRIMARY]: ["NotInCatalog"] });

    expect(await getFirefoxUserBreaches(makeSubscriber())).toEqual([]);
  });

  it("propagates a HIBP failure", async () => {
    vi.mocked(searchHibpRange).mockRejectedValue(
      new UpstreamUnavailableError("hibp", "timeout"),
    );

    await expect(getFirefoxUserBreaches(makeSubscriber())).rejects.toThrow(
      UpstreamUnavailableError,
    );
  });

  describe("emails", () => {
    it("looks up only verified emails", async () => {
      mockSecondaries(
        { email: SECONDARY, verified: true },
        { email: "unverified@example.com", verified: false },
      );
      mockHibp({});

      await getFirefoxUserBreaches(makeSubscriber({ primary_verified: false }));

      expect(searchHibpRange).toHaveBeenCalledTimes(1);
      expect(searchHibpRange).toHaveBeenCalledWith(getSha1(SECONDARY));
    });

    it("looks up an address once, whatever its case", async () => {
      mockSecondaries({ email: PRIMARY.toLowerCase(), verified: true });
      mockHibp({ [PRIMARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(makeSubscriber());

      expect(searchHibpRange).toHaveBeenCalledTimes(1);
      expect(breach.breachedAccounts.map((a) => a.email)).toEqual([PRIMARY]);
    });

    it("lists each affected email under one breach", async () => {
      mockSecondaries({ email: SECONDARY, verified: true });
      mockHibp({ [PRIMARY]: ["Adobe"], [SECONDARY]: ["Adobe"] });

      const breaches = await getFirefoxUserBreaches(makeSubscriber());

      expect(breaches).toHaveLength(1);
      expect(breaches[0].breachedAccounts.map((a) => a.email)).toEqual([
        PRIMARY,
        SECONDARY,
      ]);
    });
  });

  describe("filters", () => {
    it.each<[string, Partial<HibpLikeDbBreach>]>([
      ["sensitive", { IsSensitive: true }],
      ["retired", { IsRetired: true }],
      ["spam list", { IsSpamList: true }],
      ["fabricated", { IsFabricated: true }],
      ["unverified", { IsVerified: false }],
      ["without a domain", { Domain: "" }],
      ["without passwords or emails", { DataClasses: ["phone-numbers"] }],
    ])("drops a breach that is %s", async (_label, overrides) => {
      vi.mocked(getBreaches).mockResolvedValue([makeBreach(overrides)]);
      mockHibp({ [PRIMARY]: ["Adobe"] });

      expect(await getFirefoxUserBreaches(makeSubscriber())).toEqual([]);
    });

    it("keeps a breach that leaked only email addresses", async () => {
      vi.mocked(getBreaches).mockResolvedValue([
        makeBreach({ DataClasses: ["email-addresses"] }),
      ]);
      mockHibp({ [PRIMARY]: ["Adobe"] });

      expect(await getFirefoxUserBreaches(makeSubscriber())).toHaveLength(1);
    });

    it("matches domain exactly", async () => {
      vi.mocked(getBreaches).mockResolvedValue([
        makeBreach({ Id: 1, Name: "Twitter", Domain: "twitter.com" }),
        makeBreach({ Id: 2, Name: "X", Domain: "x.com" }),
      ]);
      mockHibp({ [PRIMARY]: ["Twitter", "X"] });

      const breaches = await getFirefoxUserBreaches(makeSubscriber(), "x.com");

      expect(breaches.map((b) => b.id)).toEqual(["X"]);
    });

    it("matches nothing for an empty domain", async () => {
      mockHibp({ [PRIMARY]: ["Adobe"] });

      expect(await getFirefoxUserBreaches(makeSubscriber(), "")).toEqual([]);
    });
  });

  it("sorts newest AddedDate first", async () => {
    vi.mocked(getBreaches).mockResolvedValue([
      makeBreach({ Id: 1, Name: "Old", AddedDate: new Date("2020-01-01") }),
      makeBreach({ Id: 2, Name: "New", AddedDate: new Date("2026-01-01") }),
    ]);
    mockHibp({ [PRIMARY]: ["Old", "New"] });

    const breaches = await getFirefoxUserBreaches(makeSubscriber());

    expect(breaches.map((b) => b.id)).toEqual(["New", "Old"]);
  });

  describe("resolvedDataClasses", () => {
    /** Resolved these for one breach */
    function resolvedSubscriber(
      email: string,
      resolved: string[],
      breachId = 1, // Adobe
    ) {
      return makeSubscriber({
        breach_resolution: {
          useBreachId: true,
          [email]: { [breachId]: { resolutionsChecked: resolved } },
        } as unknown as SubscriberRow["breach_resolution"],
      });
    }

    it("returns what this email resolved", async () => {
      mockHibp({ [PRIMARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(
        resolvedSubscriber(PRIMARY, ["passwords"]),
      );

      expect(breach.breachedAccounts[0].resolvedDataClasses).toEqual([
        "passwords",
      ]);
    });

    it("ignores resolutions for other breaches", async () => {
      mockHibp({ [PRIMARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(
        resolvedSubscriber(PRIMARY, ["passwords"], 2),
      );

      expect(breach.breachedAccounts[0].resolvedDataClasses).toEqual([]);
    });

    it("keeps each email's state separate", async () => {
      mockSecondaries({ email: SECONDARY, verified: true });
      mockHibp({ [PRIMARY]: ["Adobe"], [SECONDARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(
        resolvedSubscriber(PRIMARY, ["passwords"]),
      );

      expect(breach.breachedAccounts).toEqual([
        { email: PRIMARY, resolvedDataClasses: ["passwords"] },
        { email: SECONDARY, resolvedDataClasses: [] },
      ]);
    });

    it("drops data classes we do not serve", async () => {
      vi.mocked(getBreaches).mockResolvedValue([
        makeBreach({ DataClasses: ["passwords", "phone-numbers"] }),
      ]);
      mockHibp({ [PRIMARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(
        resolvedSubscriber(PRIMARY, ["passwords", "phone-numbers"]),
      );

      expect(breach.breachedAccounts[0].resolvedDataClasses).toEqual([
        "passwords",
      ]);
    });

    it("drops data classes the breach never leaked", async () => {
      vi.mocked(getBreaches).mockResolvedValue([
        makeBreach({ DataClasses: ["email-addresses"] }),
      ]);
      mockHibp({ [PRIMARY]: ["Adobe"] });

      const [breach] = await getFirefoxUserBreaches(
        resolvedSubscriber(PRIMARY, ["passwords", "email-addresses"]),
      );

      expect(breach.breachedAccounts[0].resolvedDataClasses).toEqual([
        "email-addresses",
      ]);
    });
  });
});
