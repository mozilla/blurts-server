/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

process.env.GCP_PUBSUB_PROJECT_ID = "arbitrary-id";
process.env.GCP_PUBSUB_SUBSCRIPTION_NAME = "arbitrary-name";

jest.mock("@sentry/nextjs", () => {
  return {
    init: jest.fn(),
    captureCheckIn: jest.fn(),
  };
});

jest.mock("../../utils/email", () => {
  return {
    initEmail: jest.fn(),
    sendEmail: jest.fn(),
  };
});

jest.mock("../../utils/hibp", () => {
  return {
    getAddressesAndLanguageForEmail: jest.fn(() => {
      return {
        recipientEmail: "1",
        breachedEmail: "2",
        signupLanguage: "3",
      };
    }),
    getBreachByName: jest.fn(),
    getAllBreachesFromDb: jest.fn(),
  };
});

jest.mock("../../db/tables/subscribers", () => {
  return {
    getSubscribersByHashes: jest.fn(() => [{ onerep_profile_id: 42 }]),
  };
});

jest.mock("../../db/tables/emailAddresses", () => {
  return {
    getEmailAddressesByHashes: jest.fn(() => [""]),
  };
});

jest.mock("../../db/tables/onerep_scans", () => {
  return {
    getScanResultsWithBroker: jest.fn(() =>
      Promise.resolve({ scan: null, results: [] }),
    ),
  };
});

jest.mock("../../app/functions/server/getSubscriberBreaches", () => {
  return {
    getSubscriberBreaches: jest.fn(() => Promise.resolve([])),
  };
});

jest.mock("../../db/tables/email_notifications", () => {
  return {
    getNotifiedSubscribersForBreach: jest.fn(() => [""]),
    addEmailNotification: jest.fn(),
    markEmailAsNotified: jest.fn(),
  };
});

jest.mock("../../app/functions/l10n/parseMarkup", () => {
  return {
    parseMarkup: undefined,
  };
});

jest.mock("../../app/functions/server/logging", () => {
  class Logging {
    info(message: string, details: object) {
      console.info(message, details);
    }
  }

  const logger = new Logging();
  return {
    logger,
  };
});

jest.mock("../../app/functions/server/refreshStoredScanResults", () => {
  return {
    refreshStoredScanResults: jest.fn().mockReturnValue(Promise.resolve()),
  };
});

jest.mock("../../app/functions/server/moscary", () => ({
  getScanAndResults: jest.fn(() =>
    Promise.resolve({
      scan: { id: "00000000-0000-0000-0000-000000000000", status: "finished" },
      results: [
        { id: "11111111-1111-1111-1111-111111111111", source: "moscary" },
      ],
    }),
  ),
}));

jest.mock("../../db/tables/featureFlags.ts", () => ({
  getFeatureFlagData: jest.fn(() => Promise.resolve(null)),
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subClient: any = {
  subscriptionPath: jest.fn(),
  acknowledge: jest.fn(),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildReceivedMessages(testBreachAlert: any) {
  return [
    {
      ackId: "testAckId",
      message: {
        attributes: {},
        data: Buffer.from(JSON.stringify(testBreachAlert)),
        messageId: "1",
        publishTime: {},
        orderingKey: "",
      },
      deliveryAttempt: 0,
    },
  ];
}

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

test("rejects invalid messages", async () => {
  const { poll } = await import("./emailBreachAlerts");

  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  await poll(
    subClient,
    buildReceivedMessages({
      // missing breachName
      hashPrefix: "test-prefix1",
      hashSuffixes: ["test-suffix1"],
    }),
  );
  expect(subClient.acknowledge).toHaveBeenCalledTimes(0);
  expect(consoleError).toHaveBeenCalledWith(
    "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
  );
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );

  await poll(
    subClient,
    buildReceivedMessages({
      breachName: "test1",
      // missing hashPrefix
      hashSuffixes: ["test-suffix1"],
    }),
  );
  expect(subClient.acknowledge).toHaveBeenCalledTimes(0);
  expect(consoleError).toHaveBeenCalledWith(
    "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
  );
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashSuffixes":["test-suffix1"]}',
  );

  await poll(
    subClient,
    buildReceivedMessages({
      breachName: "test1",
      hashPrefix: "test-prefix1",
      // missing hashSuffixes
    }),
  );
  expect(subClient.acknowledge).toHaveBeenCalledTimes(0);
  expect(consoleError).toHaveBeenCalledWith(
    "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
  );
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1"}',
  );

  await poll(
    subClient,
    buildReceivedMessages({
      breachName: "test1",
      hashPrefix: "test-prefix1",
      hashSuffixes: "", // hashSuffixes not an array
    }),
  );
  expect(subClient.acknowledge).toHaveBeenCalledTimes(0);
  expect(consoleError).toHaveBeenCalledWith(
    "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
  );
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":""}',
  );
});

test("processes valid messages", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: true,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  // Fabricated but valid breach is acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Fabricated breaches are not emailed.
  expect(sendEmail).toHaveBeenCalledTimes(0);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );

  subClient.acknowledge.mockReset();
  sendEmail.mockReset();

  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: false,
    Domain: "test2",
    IsFabricated: false,
    IsSpamList: false,
  });

  await poll(subClient, receivedMessages);
  // Unverified, not fabricated, not spam list breaches are acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Unverified, not fabricated, not spam list breaches are not emailed.
  expect(sendEmail).toHaveBeenCalledTimes(0);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );

  subClient.acknowledge.mockReset();
  sendEmail.mockReset();

  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test2",
    IsFabricated: false,
    IsSpamList: true,
  });

  await poll(subClient, receivedMessages);
  // Verified, not fabricated, spam list breaches are acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Verified, not fabricated, spam list breaches are not emailed.
  expect(sendEmail).toHaveBeenCalledTimes(0);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );

  subClient.acknowledge.mockReset();
  sendEmail.mockReset();

  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test2",
    IsFabricated: false,
    IsSpamList: false,
  });

  await poll(subClient, receivedMessages);
  // Verified, not fabricated, not spam list breaches are acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Verified, not fabricated, not spam list breaches are emailed.
  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("rendering the MJML-based template", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);
  const emailBody = sendEmail.mock.calls[0][2];
  expect(emailBody).toContain("Questions about ⁨Mozilla Monitor⁩?");
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("that the rendered MJML-based template includes the correct subscription link to SubPlat 2", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);
  const emailBody = sendEmail.mock.calls[0][2];
  expect(emailBody).toMatch(/\/link\/subscribe\/yearly/);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("that the rendered MJML-based template includes the correct subscription link to SubPlat 3 if the feature flag is enabled", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;
  jest.mock("../../db/tables/featureFlags.ts", () => ({
    getFeatureFlagData: jest.fn(() =>
      Promise.resolve({
        name: "SubPlat3",
        is_enabled: true,
        allow_list: [],
        updated_at: Date,
        last_updated_by_subscriber_id: [],
      }),
    ),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);
  const emailBody = sendEmail.mock.calls[0][2];
  expect(emailBody).toMatch(/\/link\/subscribe\/yearly/);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("that the rendered MJML-based template includes the correct subscription link to SubPlat 3 if the subscriber is included in the feature flags allow list", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [
        {
          onerep_profile_id: 42,
          primary_email: "recipient@email.com",
        },
      ]),
    };
  });

  jest.mock("../../db/tables/featureFlags.ts", () => ({
    getFeatureFlagData: jest.fn(() =>
      Promise.resolve({
        name: "SubPlat3",
        is_enabled: false,
        allow_list: ["recipient@email.com"],
        updated_at: Date,
        last_updated_by_subscriber_id: [],
      }),
    ),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);
  const emailBody = sendEmail.mock.calls[0][2];
  expect(emailBody).toMatch(/\/link\/subscribe\/yearly/);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("new subject line for the redesigned breach email", async () => {
  jest.spyOn(console, "log").mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledWith(
    "1",
    "New data breach detected",
    expect.any(String),
  );
});

test("skipping email when subscriber id exists in email_notifications table", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const { sendEmail } = await import("../../utils/email");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../../db/tables/emailAddresses", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => []),
    };
  });

  jest.mock("../../db/tables/email_notifications", () => {
    return {
      getNotifiedSubscribersForBreach: jest.fn(() => [1]),
      addEmailNotification: jest.fn(),
    };
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);
  // Verified, not fabricated, not spam list breaches are acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Verified, not fabricated, not spam list breaches are emailed.
  expect(sendEmail).toHaveBeenCalledTimes(0);
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("throws an error when addEmailNotification fails", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const { sendEmail } = await import("../../utils/email");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../../db/tables/emailAddresses", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => [""]),
    };
  });

  jest.mock("../../db/tables/email_notifications", () => {
    return {
      getNotifiedSubscribersForBreach: jest.fn(() => [2]),
      addEmailNotification: jest.fn().mockImplementationOnce(() => {
        throw new Error("add failed");
      }),
    };
  });
  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  try {
    await poll(subClient, receivedMessages);
  } catch (e: unknown) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(console.error).toHaveBeenCalled();
    // eslint-disable-next-line jest/no-conditional-expect
    expect((e as Error).message).toBe("add failed");
  }

  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
  expect(sendEmail).toHaveBeenCalledTimes(0);
});

test("throws an error when markEmailAsNotified fails", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const { sendEmail } = await import("../../utils/email");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../../db/tables/emailAddresses", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => [""]),
    };
  });

  jest.mock("../../db/tables/email_notifications", () => {
    return {
      getNotifiedSubscribersForBreach: jest.fn(() => [2]),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn().mockImplementationOnce(() => {
        throw new Error("mark failed");
      }),
    };
  });
  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  try {
    await poll(subClient, receivedMessages);
  } catch (e: unknown) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(console.error).toHaveBeenCalled();
    // eslint-disable-next-line jest/no-conditional-expect
    expect((e as Error).message).toBe("mark failed");
  }
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
  expect(sendEmail).toHaveBeenCalledTimes(1);
});

test("processes valid messages for a user with a Moscary profile", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [
        {
          moscary_id: "22222222-2222-2222-2222-222222222222",
          onerep_profile_id: undefined,
        },
      ]),
    };
  });

  jest.mock("../../db/tables/email_notifications", () => {
    return {
      getNotifiedSubscribersForBreach: jest.fn(() => []),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn(),
    };
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);

  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);

  // The Moscary scan was used:
  const { getScanAndResults } = await import(
    "../../app/functions/server/moscary"
  );
  expect(getScanAndResults).toHaveBeenCalledWith(
    "22222222-2222-2222-2222-222222222222",
  );

  // And OneRep wasn't called:
  const { getScanResultsWithBroker } = await import(
    "../../db/tables/onerep_scans"
  );
  expect(getScanResultsWithBroker).not.toHaveBeenCalled();

  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});

test("processes valid messages for non-US users", async () => {
  const consoleLog = jest
    .spyOn(console, "log")
    .mockImplementation(() => undefined);
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation(() => undefined);
  const emailMod = await import("../../utils/email");
  const sendEmail = emailMod.sendEmail as jest.Mock<
    (typeof emailMod)["sendEmail"]
  >;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockedUtilsHibp: any = jest.requireMock("../../utils/hibp");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
  });

  jest.mock("../../db/tables/subscribers", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [
        {
          onerep_profile_id: undefined,
          fxa_profile_json: { locale: "nl-NL", subscriptions: [] },
        },
      ]),
    };
  });

  jest.mock("../../db/tables/email_notifications", () => {
    return {
      getNotifiedSubscribersForBreach: jest.fn(() => []),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn(),
    };
  });

  const receivedMessages = buildReceivedMessages({
    breachName: "test1",
    hashPrefix: "test-prefix1",
    hashSuffixes: ["test-suffix1"],
  });

  const { poll } = await import("./emailBreachAlerts");

  await poll(subClient, receivedMessages);

  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledTimes(1);

  // The Moscary scan was used:
  const { getScanAndResults } = await import(
    "../../app/functions/server/moscary"
  );
  expect(getScanAndResults).not.toHaveBeenCalled();

  // And OneRep wasn't called:
  const { getScanResultsWithBroker } = await import(
    "../../db/tables/onerep_scans"
  );
  expect(getScanResultsWithBroker).not.toHaveBeenCalled();

  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
});
