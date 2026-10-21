/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  afterAll,
} from "vitest";
import { NextRequest } from "next/server";
import MockRedis from "ioredis-mock";
import createDbConnection from "../../../../../../../db/connect";
import { seeds } from "../../../../../../../test/db";
import { FXA_MONITOR_SCOPE } from "../../../../../../../constants";

// Only FxA, HIBP and Redis are fake; Postgres is real
vi.mock("../../../../../../../utils/fxa", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../../../../../utils/fxa")>()),
  introspectToken: vi.fn(),
}));

vi.mock("../../../../../../../utils/hibp", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../../../../../utils/hibp")>()),
  searchHibpRange: vi.fn(),
}));

const redis = new MockRedis();
vi.mock("../../../../../../../db/redis/client", () => ({
  redisClient: () => redis,
  REDIS_ALL_BREACHES_KEY: "breaches",
  BREACHES_EXPIRY_SECONDS: 43200,
}));

vi.mock("../../../../../../functions/server/logging", () => ({
  logger: { error: vi.fn(), info: vi.fn(), debug: vi.fn(), warn: vi.fn() },
}));

import { introspectToken, getSha1 } from "../../../../../../../utils/fxa";
import { searchHibpRange } from "../../../../../../../utils/hibp";
import { UpstreamUnavailableError } from "../../../../../../../utils/error";
import { POST } from "./route";

const conn = createDbConnection();

const FXA_UID = "integration-test-fxa-uid";
const PRIMARY = "Primary@Example.com";
const SECONDARY = "secondary@example.com";
const UNVERIFIED = "unverified@example.com";

/** A breach every filter lets through */
function breachSeed(name: string, addedDate: string) {
  return seeds.breaches({
    name,
    domain: `${name.toLowerCase()}.com`,
    added_date: new Date(addedDate),
    data_classes: ["passwords", "email-addresses"],
    is_verified: true,
    is_fabricated: false,
    is_sensitive: false,
    is_retired: false,
    is_spam_list: false,
  });
}

/**
 * Seeds a subscriber, their emails, breaches and the
 * FirefoxApi flag. Returns the breach ids by name.
 */
async function seedUser(flagAllowList: string[]) {
  const breaches = await conn("breaches")
    .insert([
      breachSeed("Adobe", "2020-01-01"),
      breachSeed("LinkedIn", "2026-01-01"),
    ])
    .returning(["id", "name"]);
  const ids = Object.fromEntries(breaches.map((b) => [b.name, b.id]));

  const [subscriber] = await conn("subscribers")
    .insert(
      seeds.subscribers({
        fxa_uid: FXA_UID,
        primary_email: PRIMARY,
        primary_verified: true,
        // Stored as the website's resolve route writes it
        breach_resolution: {
          useBreachId: true,
          [PRIMARY]: { [ids.Adobe]: { resolutionsChecked: ["passwords"] } },
        },
      }),
    )
    .returning("*");

  await conn("email_addresses").insert([
    seeds.emails(subscriber.id, { email: SECONDARY, verified: true }),
    seeds.emails(subscriber.id, { email: UNVERIFIED, verified: false }),
  ]);

  await conn("feature_flag_events").insert({
    name: "FirefoxApi",
    is_enabled: false,
    allow_list: flagAllowList,
    created_by_subscriber_id: subscriber.id,
  });

  return ids;
}

/** HIBP lists these breach names, per email */
function mockHibp(namesByEmail: Record<string, string[]>) {
  vi.mocked(searchHibpRange).mockImplementation(async (sha1) => {
    for (const [email, names] of Object.entries(namesByEmail)) {
      if (getSha1(email.toLowerCase()) === sha1) return names;
    }
    return [];
  });
}

function authedRequest(body: unknown) {
  return new NextRequest(
    "http://localhost/api/firefox/v1/user/breaches/resolutions",
    {
      method: "POST",
      headers: { authorization: "Bearer fxa-access-token" },
      body: JSON.stringify(body),
    },
  );
}

/** The subscriber row's stored resolution state */
async function storedRow() {
  return conn("subscribers")
    .where("fxa_uid", FXA_UID)
    .first("breach_resolution", "updated_at");
}

const RESOLVE_LINKEDIN = [{ breachId: "LinkedIn" }];

beforeEach(async () => {
  // E2E "local" reads headers(), needing a request
  vi.stubEnv("E2E_TEST_ENV", "ci");
  await redis.flushall();
  vi.mocked(introspectToken).mockResolvedValue({
    active: true,
    sub: FXA_UID,
    scope: FXA_MONITOR_SCOPE,
    client_id: "integration-client",
    token_type: "access_token",
  });
});

afterEach(async () => {
  vi.clearAllMocks();
  vi.unstubAllEnvs();
  await conn.raw("TRUNCATE TABLE subscribers, breaches CASCADE");
});

afterAll(async () => {
  await conn.destroy();
});

describe("POST /api/firefox/v1/user/breaches/resolutions (integration)", () => {
  it("resolves the breach for every affected email in Postgres", async () => {
    const ids = await seedUser([PRIMARY]);
    mockHibp({
      [PRIMARY]: ["Adobe", "LinkedIn"],
      [SECONDARY]: ["LinkedIn"],
    });

    const res = await POST(authedRequest(RESOLVE_LINKEDIN));

    expect(res.status).toBe(204);
    expect(await res.text()).toBe("");
    expect((await storedRow())?.breach_resolution).toEqual({
      useBreachId: true,
      [PRIMARY]: {
        [ids.Adobe]: { resolutionsChecked: ["passwords"] },
        [ids.LinkedIn]: {
          resolutionsChecked: ["passwords", "email-addresses"],
        },
      },
      [SECONDARY]: {
        [ids.LinkedIn]: {
          resolutionsChecked: ["passwords", "email-addresses"],
        },
      },
    });
  });

  it("leaves the row unchanged on a retry", async () => {
    await seedUser([PRIMARY]);
    mockHibp({ [PRIMARY]: ["LinkedIn"] });
    await POST(authedRequest(RESOLVE_LINKEDIN));
    const before = await storedRow();

    const res = await POST(authedRequest(RESOLVE_LINKEDIN));

    expect(res.status).toBe(204);
    expect(await storedRow()).toEqual(before);
  });

  it("resolves the matched breaches in a mixed batch", async () => {
    const ids = await seedUser([PRIMARY]);
    mockHibp({ [PRIMARY]: ["LinkedIn"] });

    const res = await POST(
      authedRequest([{ breachId: "Renamed" }, { breachId: "LinkedIn" }]),
    );

    expect(res.status).toBe(204);
    expect((await storedRow())?.breach_resolution).toEqual({
      useBreachId: true,
      [PRIMARY]: {
        [ids.Adobe]: { resolutionsChecked: ["passwords"] },
        [ids.LinkedIn]: {
          resolutionsChecked: ["passwords", "email-addresses"],
        },
      },
    });
  });

  it("adds to a partially resolved breach", async () => {
    const ids = await seedUser([PRIMARY]);
    mockHibp({ [PRIMARY]: ["Adobe"] });

    const res = await POST(authedRequest([{ breachId: "Adobe" }]));

    expect(res.status).toBe(204);
    expect((await storedRow())?.breach_resolution).toEqual({
      useBreachId: true,
      [PRIMARY]: {
        [ids.Adobe]: { resolutionsChecked: ["passwords", "email-addresses"] },
      },
    });
  });

  it("returns 503 and writes nothing when HIBP fails", async () => {
    await seedUser([PRIMARY]);
    vi.mocked(searchHibpRange).mockRejectedValue(
      new UpstreamUnavailableError("hibp", "timeout"),
    );
    const before = await storedRow();

    const res = await POST(authedRequest(RESOLVE_LINKEDIN));

    expect(res.status).toBe(503);
    expect(res.headers.get("Retry-After")).toBe("300");
    expect(await storedRow()).toEqual(before);
  });
});
