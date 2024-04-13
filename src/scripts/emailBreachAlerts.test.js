/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

jest.mock("@sentry/nextjs", () => {
  return {
    init: jest.fn(),
    captureCheckIn: jest.fn(),
  };
});

jest.mock("../utils/email.js", () => {
  return {
    initEmail: jest.fn(),
    EmailTemplateType: jest.fn(),
    getEmailCtaHref: jest.fn(),
    sendEmail: jest.fn(),
  };
});

jest.mock("../utils/hibp.js", () => {
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

jest.mock("../db/tables/subscribers.js", () => {
  return {
    getSubscribersByHashes: jest.fn(() => [""]),
  };
});

jest.mock("../db/tables/emailAddresses.js", () => {
  return {
    getEmailAddressesByHashes: jest.fn(() => [""]),
  };
});

jest.mock("../db/tables/email_notifications.js", () => {
  return {
    getNotifiedSubscribersForBreach: jest.fn(() => [""]),
    addEmailNotification: jest.fn(),
    markEmailAsNotified: jest.fn(),
  };
});

jest.mock("../utils/fluent.js", () => {
  return {
    initFluentBundles: jest.fn(),
    getMessage: jest.fn(),
    getStringLookup: jest.fn(),
  };
});

jest.mock("../emails/email2022.js", () => {
  return {
    getTemplate: jest.fn(),
  };
});

jest.mock("../emails/emailBreachAlert.js", () => {
  return {
    breachAlertEmailPartial: jest.fn(),
  };
});

const subClient = {
  subscriptionPath: jest.fn(),
  acknowledge: jest.fn(),
};

function buildReceivedMessages(testBreachAlert) {
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
  const { poll } = await import("./emailBreachAlerts.js");

  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});
  const consoleLog = jest.spyOn(console, "log").mockImplementation();

  await poll(
    subClient,
    buildReceivedMessages({
      // missing breachName
      hashPrefix: "test-prefix1",
      hashSuffixes: ["test-suffix1"],
    }),
  );
  expect(subClient.acknowledge).toBeCalledTimes(0);
  expect(consoleError).toBeCalledWith(
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
  expect(subClient.acknowledge).toBeCalledTimes(0);
  expect(consoleError).toBeCalledWith(
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
  expect(subClient.acknowledge).toBeCalledTimes(0);
  expect(consoleError).toBeCalledWith(
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
  expect(subClient.acknowledge).toBeCalledTimes(0);
  expect(consoleError).toBeCalledWith(
    "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
  );
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":""}',
  );
});

test("processes valid messages", async () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation();
  const { sendEmail } = await import("../utils/email.js");

  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
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

  const { poll } = await import("./emailBreachAlerts.js");

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

test("skipping email when subscriber id exists in email_notifications table", async () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation();
  const { sendEmail } = await import("../utils/email.js");
  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../db/tables/subscribers.js", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../db/tables/emailAddresses.js", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => []),
    };
  });

  jest.mock("../db/tables/email_notifications.js", () => {
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

  const { poll } = await import("./emailBreachAlerts.js");

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
  const consoleLog = jest.spyOn(console, "log").mockImplementation();
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation();
  const { sendEmail } = await import("../utils/email.js");
  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../db/tables/subscribers.js", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../db/tables/emailAddresses.js", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => [""]),
    };
  });

  jest.mock("../db/tables/email_notifications.js", () => {
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

  const { poll } = await import("./emailBreachAlerts.js");

  try {
    await poll(subClient, receivedMessages);
  } catch (e) {
    expect(console.error).toBeCalled();
    expect(e.message).toBe("add failed");
  }

  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
  expect(sendEmail).toHaveBeenCalledTimes(0);
});

test("throws an error when markEmailAsNotified fails", async () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();
  // It's not clear if the calls to console.info are important enough to remain,
  // but since they were already there when adding the "no logs" rule in tests,
  // I'm respecting Chesterton's Fence and leaving them in place for now:
  jest.spyOn(console, "info").mockImplementation();
  const { sendEmail } = await import("../utils/email.js");
  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: false,
    IsSpamList: false,
    Id: 1,
  });

  jest.mock("../db/tables/subscribers.js", () => {
    return {
      getSubscribersByHashes: jest.fn(() => [{ id: 1 }]),
    };
  });

  jest.mock("../db/tables/emailAddresses.js", () => {
    return {
      getEmailAddressesByHashes: jest.fn(() => [""]),
    };
  });

  jest.mock("../db/tables/email_notifications.js", () => {
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

  const { poll } = await import("./emailBreachAlerts.js");

  try {
    await poll(subClient, receivedMessages);
  } catch (e) {
    expect(console.error).toBeCalled();
    expect(e.message).toBe("mark failed");
  }
  expect(consoleLog).toHaveBeenCalledWith(
    'Received message: {"breachName":"test1","hashPrefix":"test-prefix1","hashSuffixes":["test-suffix1"]}',
  );
  expect(sendEmail).toHaveBeenCalledTimes(1);
});
