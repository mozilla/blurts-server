/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

jest.mock("@sentry/nextjs", () => {
  return {
    init: jest.fn(),
    captureCheckIn: jest.fn()
  };
});

jest.mock("../utils/email.js", () => {
  return {
    initEmail: jest.fn(),
    EmailTemplateType: jest.fn(),
    getEmailCtaHref: jest.fn(),
    sendEmail: jest.fn()
  }
});

jest.mock("../utils/hibp.js", () => {
  return {
    getAddressesAndLanguageForEmail: jest.fn(() => {
      return {
        recipientEmail: "1",
        breachedEmail: "2",
        signupLanguage: "3"
      }
    }),
    getBreachByName: jest.fn(),
    getAllBreachesFromDb: jest.fn(),
  }
});

jest.mock("../db/tables/subscribers.js", () => {
  return {
    getSubscribersByHashes: jest.fn(() => [""])
  }
});

jest.mock("../db/tables/emailAddresses.js", () => {
  return {
    getEmailAddressesByHashes: jest.fn(() => [""])
  }
});

jest.mock("../utils/fluent.js", () => {
  return {
    initFluentBundles: jest.fn(),
    getMessage: jest.fn(),
    getStringLookup: jest.fn()
  }
});

jest.mock("../views/emails/email2022.js", () => {
 return {
  getTemplate: jest.fn()
 }
});

jest.mock("../views/emails/emailBreachAlert.js", () => {
  return {
    breachAlertEmailPartial: jest.fn()
  }
});

const subClient = {
  subscriptionPath: jest.fn(),
  acknowledge: jest.fn()
}

function buildReceivedMessages(testBreachAlert) {
  return [
    {
      ackId: 'testAckId',
      message: {
        attributes: {},
        data: Buffer.from(JSON.stringify(testBreachAlert)),
        messageId: '1',
        publishTime: {},
        orderingKey: ''
      },
      deliveryAttempt: 0
    }
  ]
}

beforeEach(() => {
  jest.clearAllMocks();
});

test("rejects invalid messages", async () => {
  const { poll } = await import("./emailBreachAlerts.js");

  await poll(subClient, buildReceivedMessages({
    // missing breachName
    "hashPrefix": "test-prefix1",
    "hashSuffixes": ["test-suffix1"]
  }));
  expect(subClient.acknowledge).toBeCalledTimes(0);

  await poll(subClient, buildReceivedMessages({
    "breachName": "test1",
    // missing hashPrefix
    "hashSuffixes": ["test-suffix1"]
  }));
  expect(subClient.acknowledge).toBeCalledTimes(0);

  await poll(subClient, buildReceivedMessages({
    "breachName": "test1",
    "hashPrefix": "test-prefix1",
    // missing hashSuffixes
  }));
  expect(subClient.acknowledge).toBeCalledTimes(0);

  await poll(subClient, buildReceivedMessages({
    "breachName": "test1",
    "hashPrefix": "test-prefix1",
    "hashSuffixes": "" // hashSuffixes not an array
  }));
  expect(subClient.acknowledge).toBeCalledTimes(0);
});

test("processes valid messages", async () => {
  const { sendEmail } = await import("../utils/email.js");

  const mockedUtilsHibp = jest.requireMock("../utils/hibp.js");
  mockedUtilsHibp.getBreachByName.mockReturnValue({
    IsVerified: true,
    Domain: "test1",
    IsFabricated: true,
    IsSpamList: false,
  });

  const receivedMessages = buildReceivedMessages({
    "breachName": "test1",
    "hashPrefix": "test-prefix1",
    "hashSuffixes": ["test-suffix1"]
  });

  const { poll } = await import("./emailBreachAlerts.js");

  await poll(subClient, receivedMessages);
  // Fabricated but valid breach is acknowledged.
  expect(subClient.acknowledge).toHaveBeenCalledTimes(1);
  // Fabricated breaches are not emailed.
  expect(sendEmail).toHaveBeenCalledTimes(0);

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
});
