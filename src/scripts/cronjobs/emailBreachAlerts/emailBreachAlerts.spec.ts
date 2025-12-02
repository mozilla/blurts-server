/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Logger } from "winston";
import * as Sentry from "@sentry/node";
import { mockLogger } from "../../../test/helpers/mockLogger";
import { mockMessage } from "../../../test/helpers/pubsub";
import { breachMessageHandler } from "./emailBreachAlerts";
import { seeds } from "../../../test/db";
import { createRandomHibpListing as mockBreach } from "../../../apiMocks/mockData";
import { HibpLikeDbBreach } from "../../../utils/hibp";

const mockSubscriber = seeds.breachNotificationSubscriber;

const defaultBreachName = "ExampleBreach";

const validMsgPayload = {
  breachName: defaultBreachName,
  hashPrefix: "AA",
  hashSuffixes: ["11"],
};

const validBreachDefaults: Partial<HibpLikeDbBreach> = {
  Name: defaultBreachName,
  IsFabricated: false,
  IsSpamList: false,
  IsVerified: true,
  Domain: "http://example.com",
};

describe("breachMessageHandler", () => {
  let logger: Logger;
  const breadcrumbSpy = jest.spyOn(Sentry, "addBreadcrumb").mockReturnValue();
  const setTagSpy = jest.spyOn(Sentry, "setTag").mockReturnValue();

  beforeEach(() => {
    logger = mockLogger() as unknown as Logger;
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("succeeds and notifies only eligible recipients", async () => {
    // All types of notifications, 1 disabled
    const recipients = [false, true, null].map((override) =>
      mockSubscriber({ all_emails_to_primary: override }),
    );
    const breachProvider = async () => [mockBreach(validBreachDefaults)];
    // Set up mocked injected dependencies
    const subs = { findByHashes: jest.fn().mockResolvedValue(recipients) };
    const notifications = {
      isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(false),
      addEmailNotification: jest.fn().mockResolvedValue(undefined),
      markEmailAsNotified: jest.fn().mockResolvedValue(undefined),
    };
    const sendEmail = jest.fn().mockResolvedValue(undefined);

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      breachProvider,
      subs,
      notifications,
      sendEmail,
    );

    expect(res).toEqual({ success: true, errors: 0, notified: 2, skipped: 1 });
    expect(subs.findByHashes).toHaveBeenCalledTimes(1);
    expect(sendEmail).toHaveBeenCalledTimes(2);
    expect(notifications.addEmailNotification).toHaveBeenCalledTimes(2);
    expect(notifications.markEmailAsNotified).toHaveBeenCalledTimes(2);
  });

  it("skips if breach is not notifiable", async () => {
    const breach = mockBreach({ Name: defaultBreachName, IsVerified: false }); // not notifiable
    const breachProvider = async () => [breach];
    const subs = { findByHashes: jest.fn() };
    // Doesn't really matter here as it shouldn't reach this far
    const notifications = {
      isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(false),
      addEmailNotification: jest.fn().mockResolvedValue(undefined),
      markEmailAsNotified: jest.fn().mockResolvedValue(undefined),
    };
    const sendEmail = jest.fn();

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      breachProvider,
      subs,
      notifications,
      sendEmail,
    );

    // skipped equals number of suffixes in payload (estimate here is ok,
    // maybe not all suffixes will map to a user)
    expect(res).toEqual({ success: true, errors: 0, notified: 0, skipped: 1 });
    expect(subs.findByHashes).not.toHaveBeenCalled();
    Object.values(notifications).forEach((fn) => {
      expect(fn).not.toHaveBeenCalled();
    });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("skips recipients already notified", async () => {
    const breachProvider = async () => [mockBreach(validBreachDefaults)];
    const subs = {
      findByHashes: jest
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      // Already notified
      isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(true),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn(),
    };
    const sendEmail = jest.fn();

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      breachProvider,
      subs,
      notifications,
      sendEmail,
    );

    expect(res).toEqual({ success: true, errors: 0, notified: 0, skipped: 1 });
    expect(sendEmail).not.toHaveBeenCalled();
    expect(notifications.addEmailNotification).not.toHaveBeenCalled();
  });
  it("throws if breach is not in database", async () => {
    const breachProvider = async () => [
      mockBreach({ Name: "Breach that is not in the message payload" }),
    ];
    const subs = {
      findByHashes: jest
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      // Already notified
      isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(true),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn(),
    };
    const sendEmail = jest.fn();

    const message = mockMessage(validMsgPayload);

    await expect(async () =>
      breachMessageHandler(
        message,
        logger,
        breachProvider,
        subs,
        notifications,
        sendEmail,
      ),
    ).rejects.toThrow(
      "HIBP breach notification: couldn't find the breach to notify about",
    );
  });

  it("returns success:false when sending fails (and adds breadcrumb)", async () => {
    const breachProvider = async () => [mockBreach(validBreachDefaults)];
    const subs = {
      findByHashes: jest
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(false),
      addEmailNotification: jest.fn().mockResolvedValue(undefined),
      markEmailAsNotified: jest.fn(),
    };
    const sendEmail = jest.fn().mockRejectedValue(new Error("I'm sorry Dave"));

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      breachProvider,
      subs,
      notifications,
      sendEmail,
      Sentry,
    );

    expect(res.success).toBe(false);
    expect(res.errors).toBe(1);
    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(breadcrumbSpy).toHaveBeenCalledTimes(1);
  });

  it.each([
    { breachName: "Name" },
    { breachName: "Name", hashPrefix: "AA" },
    { breachName: "Name", hashSuffix: ["11"] },
    { hashPrefix: "AA", hashSuffix: ["11"] },
    { hashPrefix: "AA", hashSuffix: ["11"] },
    { breachName: "Name", hashPrefix: "AA", hashSuffix: "11" },
  ])("throws on invalid payload", async (payload) => {
    const invalid = mockMessage(payload);
    await expect(
      breachMessageHandler(
        invalid,
        logger,
        async () => [],
        { findByHashes: jest.fn().mockResolvedValue([mockSubscriber()]) },
        {
          isSubscriberNotifiedForBreach: jest.fn().mockResolvedValue(false),
          addEmailNotification: jest.fn().mockResolvedValue(undefined),
          markEmailAsNotified: jest.fn(),
        },
        jest.fn().mockResolvedValue(undefined),
      ),
    ).rejects.toThrow("Invalid payload");
  });

  it("sets the Sentry tag with breachName", async () => {
    const breachProvider = async () => [mockBreach(validBreachDefaults)];
    const subs = { findByHashes: jest.fn().mockResolvedValue([]) };
    const notifications = {
      isSubscriberNotifiedForBreach: jest.fn(),
      addEmailNotification: jest.fn(),
      markEmailAsNotified: jest.fn(),
    };
    const sendEmail = jest.fn();
    const msg = mockMessage(validMsgPayload);

    await breachMessageHandler(
      msg,
      logger,
      breachProvider,
      subs,
      notifications,
      sendEmail,
      Sentry,
    );

    expect(setTagSpy).toHaveBeenCalledWith("breachName", defaultBreachName);
  });
});
