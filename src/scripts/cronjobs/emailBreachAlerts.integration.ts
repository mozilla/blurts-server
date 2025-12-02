/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  jest,
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "@jest/globals";
import type { Knex } from "knex";
import { setTimeout as delay } from "node:timers/promises";
import type { BreachRow, SubscriberRow } from "knex/types/tables";
import { PubSub } from "@google-cloud/pubsub";

import createDbConnection from "../../db/connect";
import { poll, createPubSubClient } from "./emailBreachAlerts";
import { redisClient, REDIS_ALL_BREACHES_KEY } from "../../db/redis/client";
import { logger } from "../../app/functions/server/logging";

jest.mock("@sentry/nextjs", () => {
  const sentryMock = {
    init: jest.fn(),
    captureCheckIn: jest.fn(() => "check-in"),
    captureException: jest.fn(),
    captureMessage: jest.fn(),
  };
  return {
    __esModule: true,
    default: sentryMock,
    ...sentryMock,
  };
});

jest.mock("../../utils/email", () => {
  return {
    initEmail: jest.fn(),
    sendEmail: jest.fn(),
    closeEmailPool: jest.fn(),
  };
});

jest.mock("../../app/functions/server/getSubscriberBreaches", () => ({
  getSubscriberBreaches: jest.fn(() => Promise.resolve([])),
}));

jest.mock("../../app/functions/server/getExperiments", () => ({
  getExperiments: jest.fn(() =>
    Promise.resolve({
      Features: {},
    }),
  ),
}));

jest.mock("../../app/functions/server/getExperimentationId", () => ({
  getExperimentationIdFromSubscriber: jest.fn(() => Promise.resolve("exp-id")),
}));

jest.mock("../../emails/renderEmail", () => ({
  renderEmail: jest.fn(async () => "<html>mock-email</html>"),
}));

jest.mock("../../app/functions/l10n/cronjobs", () => ({
  getCronjobL10n: jest.fn(() => ({
    getString: () => "New data breach detected",
  })),
}));

jest.mock("../../app/functions/universal/getLocale", () => ({
  getLocale: () => "en-US",
}));

jest.mock("../../app/functions/server/dashboard", () => ({
  getDashboardSummary: jest.fn(() => ({
    exposures: [],
  })),
}));

const emailModule = jest.requireMock("../../utils/email") as jest.Mocked<
  typeof import("../../utils/email")
>;

let knex: Knex;

const HASH_PREFIX = "abc123";
const SUFFIX_PRIMARY = "000000000000000000000000000000000000";
const SUFFIX_SECONDARY_A = "111111111111111111111111111111111111";
const SUFFIX_SECONDARY_B = "222222222222222222222222222222222222";

type SeededSubscriber = SubscriberRow & { hashSuffix: string };

describe("email breach alerts integrations", () => {
  type SubscriberClient = ReturnType<typeof createPubSubClient>[0];

  let consoleLogSpy: jest.SpiedFunction<typeof console.log>;
  let consoleDebugSpy: jest.SpiedFunction<typeof console.debug>;
  let consoleInfoSpy: jest.SpiedFunction<typeof console.info>;
  let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;
  let consoleWarnSpy: jest.SpiedFunction<typeof console.warn>;
  let loggerInfoSpy: jest.SpiedFunction<typeof logger.info>;
  let loggerErrorSpy: jest.SpiedFunction<typeof logger.error>;

  let subClient: SubscriberClient;
  let subClientSpy: jest.SpiedFunction<SubscriberClient["acknowledge"]>;

  beforeAll(async () => {
    consoleDebugSpy = jest
      .spyOn(console, "debug")
      .mockImplementation(() => undefined);

    loggerInfoSpy = jest.spyOn(logger, "info");
    loggerErrorSpy = jest.spyOn(logger, "error");

    [subClient] = createPubSubClient();

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Dev mode, connecting to local pubsub emulator",
    );
    consoleDebugSpy.mockClear();

    knex = createDbConnection();
    const redis = redisClient();
    await redis.del(REDIS_ALL_BREACHES_KEY);
    subClientSpy = jest.spyOn(subClient, "acknowledge");
  });

  afterAll(async () => {
    await knex.destroy();
    consoleDebugSpy.mockRestore();
    loggerInfoSpy.mockRestore();
    loggerErrorSpy.mockRestore();
  });

  beforeEach(async () => {
    jest.clearAllMocks();
    consoleDebugSpy.mockImplementation(() => undefined);
    consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => undefined);
    consoleInfoSpy = jest
      .spyOn(console, "info")
      .mockImplementation(() => undefined);
    consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    consoleWarnSpy = jest
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    loggerInfoSpy.mockImplementation((..._args: unknown[]) => logger);
    loggerErrorSpy.mockImplementation((..._args: unknown[]) => logger);
    await clearDb();
    const redis = redisClient();
    await redis.del(REDIS_ALL_BREACHES_KEY);
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    loggerInfoSpy.mockClear();
    loggerErrorSpy.mockClear();
  });

  test("connects to the database", async () => {
    const res = await knex.raw(`select 1 as connected`);
    expect(res.rows).toStrictEqual([{ connected: 1 }]);
  });

  test("connects to pubsub emulator", () => {
    const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
    const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME!;
    const pubsub = new PubSub({ projectId });
    expect(() => pubsub.subscription(subscriptionName)).not.toThrow();
  });

  // FIXME https://mozilla-hub.atlassian.net/browse/MNTOR-5087
  test.failing(
    "primary-only subscriber receives notifications for each breached email",
    async () => {
      const breach = await insertBreach("test-breach");
      const subscriber = await insertSubscriberWithEmails({
        primaryEmail: "primary@example.com",
        allEmailsToPrimary: true,
        hashSuffix: SUFFIX_PRIMARY,
        secondaryEmails: [
          { email: "secondary1@example.com", hashSuffix: SUFFIX_SECONDARY_A },
          { email: "secondary2@example.com", hashSuffix: SUFFIX_SECONDARY_B },
        ],
      });

      const message = buildMessage("test-breach", [
        SUFFIX_PRIMARY,
        SUFFIX_SECONDARY_A,
        SUFFIX_SECONDARY_B,
      ]);

      await poll(subClient, message);

      expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
      expect(emailModule.sendEmail).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('"breachName":"test-breach"'),
      );
      expect(consoleInfoSpy.mock.calls).toEqual(
        expect.arrayContaining([
          [
            "notification",
            expect.objectContaining({
              breachAlertName: "test-breach",
              length: 3,
            }),
          ],
          ["notified", expect.objectContaining({ length: 3 })],
        ]),
      );

      const notifications = await fetchNotifications(subscriber.id);
      expect(notifications).toHaveLength(3);
      notifications.forEach((notification) => {
        expect(notification.breach_id).toEqual(breach.id);
        expect(notification.notified).toBe(true);
        expect(notification.email).toEqual("primary@example.com");
      });
    },
  );

  test("skips sending when subscriber already notified", async () => {
    const breach = await insertBreach("already-notified-breach");
    const subscriber = await insertSubscriberWithEmails({
      primaryEmail: "primary@example.com",
      allEmailsToPrimary: true,
      hashSuffix: SUFFIX_PRIMARY,
    });

    await knex("email_notifications").insert({
      subscriber_id: subscriber.id,
      breach_id: breach.id,
      appeared: true,
      notified: true,
      email: "primary@example.com",
      notification_type: "incident",
      created_at: new Date(),
      updated_at: new Date(),
    });

    const message = buildMessage("already-notified-breach", [SUFFIX_PRIMARY]);

    await poll(subClient, message);

    expect(emailModule.sendEmail).not.toHaveBeenCalled();
    expect(subClientSpy).toHaveBeenCalledTimes(1);
    expect(consoleInfoSpy.mock.calls).toEqual(
      expect.arrayContaining([
        [
          "notification",
          expect.objectContaining({
            breachAlertName: "already-notified-breach",
            length: 1,
          }),
        ],
        ["Subscriber already notified, skipping: ", expect.any(Number)],
      ]),
    );
    const notifications = await fetchNotifications(subscriber.id);
    expect(notifications).toHaveLength(1);
    expect(notifications[0].notified).toBe(true);
  });

  // FIXME https://mozilla-hub.atlassian.net/browse/MNTOR-5093
  test.failing(
    "sends to affected addresses when subscriber prefers individual notifications",
    async () => {
      const breach = await insertBreach("affected-breach");
      const subscriber = await insertSubscriberWithEmails({
        primaryEmail: "primary@example.com",
        allEmailsToPrimary: false,
        hashSuffix: SUFFIX_PRIMARY,
        secondaryEmails: [
          { email: "secondary1@example.com", hashSuffix: SUFFIX_SECONDARY_A },
          { email: "secondary2@example.com", hashSuffix: SUFFIX_SECONDARY_B },
        ],
      });

      const message = buildMessage("affected-breach", [
        SUFFIX_PRIMARY,
        SUFFIX_SECONDARY_A,
        SUFFIX_SECONDARY_B,
      ]);

      await poll(subClient, message);

      expect(subClientSpy).toHaveBeenCalledTimes(1);
      expect(emailModule.sendEmail).toHaveBeenCalledTimes(3);
      const emailsSent = emailModule.sendEmail.mock.calls.map(
        (args) => args[0],
      );
      expect(emailsSent).toEqual(
        expect.arrayContaining([
          "primary@example.com",
          "secondary1@example.com",
          "secondary2@example.com",
        ]),
      );

      const notifications = await fetchNotifications(subscriber.id);
      expect(notifications).toHaveLength(3);
      const notificationEmails = notifications.map((n) => n.email);
      expect(notificationEmails).toEqual(
        expect.arrayContaining([
          "primary@example.com",
          "secondary1@example.com",
          "secondary2@example.com",
        ]),
      );
      notifications.forEach((notification) => {
        expect(notification.breach_id).toEqual(breach.id);
        expect(notification.notified).toBe(true);
      });
    },
  );

  test("leave notifications pending and do not ack when email sending fails", async () => {
    await insertBreach("failing-breach");
    const subscriber = await insertSubscriberWithEmails({
      primaryEmail: "primary@example.com",
      allEmailsToPrimary: true,
      hashSuffix: SUFFIX_PRIMARY,
    });

    emailModule.sendEmail.mockImplementationOnce(async () => {
      throw new Error("send failed");
    });

    const message = buildMessage("failing-breach", [SUFFIX_PRIMARY]);

    await poll(subClient, message);

    await delay(10);

    expect(subClientSpy).not.toHaveBeenCalled();

    const notifications = await fetchNotifications(subscriber.id);
    expect(notifications).toHaveLength(1);
    expect(notifications[0].notified).toBe(false);

    const errorCalls = loggerErrorSpy.mock.calls as Array<unknown[]>;
    const errorCall = errorCalls.at(-1);
    expect(errorCall).toBeDefined();
    const [errorMessage, errorObj] = (errorCall ?? []) as [
      string,
      unknown,
      ...unknown[],
    ];
    expect(errorMessage).toBe("Failed to notify user of breach: ");
    expect(errorObj).toBeInstanceOf(Error);
  });

  test("disabled instant alerts skip all notifications", async () => {
    await insertBreach("disabled-breach");
    const subscriber = await insertSubscriberWithEmails({
      primaryEmail: "primary@example.com",
      allEmailsToPrimary: null,
      hashSuffix: SUFFIX_PRIMARY,
      secondaryEmails: [
        { email: "secondary1@example.com", hashSuffix: SUFFIX_SECONDARY_A },
      ],
    });

    const message = buildMessage("disabled-breach", [
      SUFFIX_PRIMARY,
      SUFFIX_SECONDARY_A,
    ]);

    await poll(subClient, message);

    expect(emailModule.sendEmail).not.toHaveBeenCalled();
    expect(subClientSpy).toHaveBeenCalledTimes(1);
    const notifications = await fetchNotifications(subscriber.id);
    expect(notifications).toHaveLength(0);
    const infoCalls = loggerInfoSpy.mock.calls as Array<unknown[]>;
    let disabledCall: [string, unknown, ...unknown[]] | undefined;
    for (const call of infoCalls) {
      const typedCall = call as [string, unknown, ...unknown[]];
      if (
        typedCall[0] === "Instant breach alerts disabled, skipping subscriber"
      ) {
        disabledCall = typedCall;
        break;
      }
    }
    expect(disabledCall).toBeDefined();
    const [, disabledMeta] = disabledCall!;
    expect(disabledMeta).toEqual(
      expect.objectContaining({ subscriber_id: subscriber.id }),
    );
    expect(consoleInfoSpy.mock.calls).toEqual(
      expect.arrayContaining([
        [
          "notification",
          expect.objectContaining({
            breachAlertName: "disabled-breach",
            length: 2,
          }),
        ],
        ["notified", expect.objectContaining({ length: 0 })],
      ]),
    );
  });
});

async function clearDb() {
  await knex("email_notifications").del();
  await knex("email_addresses").del();
  await knex("subscribers").del();
  await knex("breaches").del();
}

type BreachInsertOverrides = Partial<
  Pick<
    BreachRow,
    | "title"
    | "domain"
    | "breach_date"
    | "added_date"
    | "modified_date"
    | "pwn_count"
    | "description"
    | "logo_path"
    | "data_classes"
    | "is_verified"
    | "is_fabricated"
    | "is_sensitive"
    | "is_retired"
    | "is_spam_list"
    | "is_malware"
    | "favicon_url"
  >
>;

async function insertBreach(
  name: string,
  overrides: BreachInsertOverrides = {},
) {
  const now = new Date();
  const [breach] = await knex("breaches")
    .insert({
      name,
      title: overrides.title ?? "Test Breach",
      domain: overrides.domain ?? "example.com",
      breach_date: overrides.breach_date ?? now,
      added_date: overrides.added_date ?? now,
      modified_date: overrides.modified_date ?? now,
      pwn_count: overrides.pwn_count ?? 1,
      description: overrides.description ?? "",
      logo_path: overrides.logo_path ?? "",
      data_classes: overrides.data_classes ?? ["email-addresses"],
      is_verified: overrides.is_verified ?? true,
      is_fabricated: overrides.is_fabricated ?? false,
      is_sensitive: overrides.is_sensitive ?? false,
      is_retired: overrides.is_retired ?? false,
      is_spam_list: overrides.is_spam_list ?? false,
      is_malware: overrides.is_malware ?? false,
      favicon_url: overrides.favicon_url ?? null,
    })
    .returning("*");
  return breach;
}

async function insertSubscriberWithEmails(options: {
  primaryEmail: string;
  allEmailsToPrimary: boolean | null;
  hashSuffix: string;
  secondaryEmails?: Array<{ email: string; hashSuffix: string }>;
}): Promise<SeededSubscriber> {
  const now = new Date();
  const {
    primaryEmail,
    allEmailsToPrimary,
    hashSuffix,
    secondaryEmails = [],
  } = options;
  const subscriberData = {
    primary_sha1: HASH_PREFIX + hashSuffix,
    primary_email: primaryEmail,
    primary_verification_token: "token",
    primary_verified: true,
    created_at: now,
    updated_at: now,
    fx_newsletter: false,
    signup_language: "en-US",
    breaches_last_shown: now,
    all_emails_to_primary: allEmailsToPrimary,
  };
  const [subscriber] = await knex("subscribers")
    .insert(subscriberData)
    .returning<SubscriberRow[]>("*");

  for (const secondary of secondaryEmails) {
    await knex("email_addresses").insert({
      subscriber_id: subscriber.id,
      sha1: HASH_PREFIX + secondary.hashSuffix,
      email: secondary.email,
      verification_token: `verify-${secondary.hashSuffix}`,
      verified: true,
    });
  }

  return { ...subscriber, hashSuffix };
}

function buildMessage(breachName: string, hashSuffixes: string[]) {
  return [
    {
      ackId: "ack-1",
      message: {
        attributes: {},
        data: Buffer.from(
          JSON.stringify({
            breachName,
            hashPrefix: HASH_PREFIX,
            hashSuffixes,
          }),
        ),
        messageId: "1",
        publishTime: {},
        orderingKey: "",
      },
      deliveryAttempt: 0,
    },
  ];
}

async function fetchNotifications(subscriberId: number) {
  return knex("email_notifications").where({ subscriber_id: subscriberId });
}
