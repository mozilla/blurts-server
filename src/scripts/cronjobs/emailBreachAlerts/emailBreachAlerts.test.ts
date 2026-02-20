/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @vitest-environment node
 */

import type { Logger } from "winston";
import { vi, describe, it, beforeEach, expect } from "vitest";
import * as Sentry from "@sentry/node";
import { mockLogger } from "../../../test/helpers/mockLogger";
import { mockMessage } from "../../../test/helpers/pubsub";
import { breachMessageHandler } from "./emailBreachAlerts";
import { seeds } from "../../../test/db";
import { createRandomHibpListing as mockBreach } from "../../../apiMocks/mockData";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { type BreachDataService } from "../../../services/BreachDataService";

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

vi.mock("@sentry/node", async (importOriginal) => {
  const actual: typeof Sentry = await importOriginal();
  return {
    ...actual,
    addBreadcrumb: vi.fn(),
    setTag: vi.fn(),
  };
});

describe("breachMessageHandler", () => {
  let logger: Logger;
  const breadcrumbSpy = vi.mocked(Sentry.addBreadcrumb);
  const setTagSpy = vi.mocked(Sentry.setTag);
  const breachSpy = vi.fn();

  beforeEach(() => {
    logger = mockLogger() as unknown as Logger;
  });

  it("succeeds and notifies only eligible recipients", async () => {
    // All types of notifications, 1 disabled
    const recipients = [false, true, null].map((override) =>
      mockSubscriber({ all_emails_to_primary: override }),
    );
    breachSpy.mockResolvedValueOnce(mockBreach(validBreachDefaults));
    // Set up mocked injected dependencies
    const subs = { findByHashes: vi.fn().mockResolvedValue(recipients) };
    const notifications = {
      isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(false),
      addEmailNotification: vi.fn().mockResolvedValue(undefined),
      markEmailAsNotified: vi.fn().mockResolvedValue(undefined),
    };
    const sendEmail = vi.fn().mockResolvedValue(undefined);

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      { getBreach: breachSpy } as unknown as BreachDataService,
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

  it.each([
    mockBreach({ Name: defaultBreachName, IsVerified: false }),
    mockBreach({ Name: defaultBreachName, IsFabricated: true }),
    mockBreach({ Name: defaultBreachName, IsSpamList: true }),
    mockBreach({ Name: defaultBreachName, Domain: "" }),
  ])("skips if breach is not notifiable", async (breach) => {
    breachSpy.mockResolvedValueOnce(breach);
    const subs = { findByHashes: vi.fn() };
    // Doesn't really matter here as it shouldn't reach this far
    const notifications = {
      isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(false),
      addEmailNotification: vi.fn().mockResolvedValue(undefined),
      markEmailAsNotified: vi.fn().mockResolvedValue(undefined),
    };
    const sendEmail = vi.fn();

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      { getBreach: breachSpy } as unknown as BreachDataService,
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
    breachSpy.mockResolvedValueOnce(mockBreach(validBreachDefaults));
    const subs = {
      findByHashes: vi
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      // Already notified
      isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(true),
      addEmailNotification: vi.fn(),
      markEmailAsNotified: vi.fn(),
    };
    const sendEmail = vi.fn();

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      { getBreach: breachSpy } as unknown as BreachDataService,
      subs,
      notifications,
      sendEmail,
    );

    expect(res).toEqual({ success: true, errors: 0, notified: 0, skipped: 1 });
    expect(sendEmail).not.toHaveBeenCalled();
    expect(notifications.addEmailNotification).not.toHaveBeenCalled();
  });
  it("throws if breach is not in database", async () => {
    breachSpy.mockResolvedValueOnce(undefined);
    const subs = {
      findByHashes: vi
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      // Already notified
      isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(true),
      addEmailNotification: vi.fn(),
      markEmailAsNotified: vi.fn(),
    };
    const sendEmail = vi.fn();

    const message = mockMessage(validMsgPayload);

    await expect(async () =>
      breachMessageHandler(
        message,
        logger,
        { getBreach: breachSpy } as unknown as BreachDataService,
        subs,
        notifications,
        sendEmail,
      ),
    ).rejects.toThrow(
      "HIBP breach notification: couldn't find the breach to notify about",
    );
  });

  it("returns success:false when sending fails (and adds breadcrumb)", async () => {
    breachSpy.mockResolvedValueOnce(mockBreach(validBreachDefaults));
    const subs = {
      findByHashes: vi
        .fn()
        .mockResolvedValue([mockSubscriber({ all_emails_to_primary: true })]),
    };
    const notifications = {
      isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(false),
      addEmailNotification: vi.fn().mockResolvedValue(undefined),
      markEmailAsNotified: vi.fn(),
    };
    const sendEmail = vi.fn().mockRejectedValue(new Error("I'm sorry Dave"));

    const message = mockMessage(validMsgPayload);

    const res = await breachMessageHandler(
      message,
      logger,
      { getBreach: breachSpy } as unknown as BreachDataService,
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
    breachSpy.mockResolvedValueOnce(mockBreach(validBreachDefaults));
    await expect(
      breachMessageHandler(
        invalid,
        logger,
        { getBreach: breachSpy } as unknown as BreachDataService,
        { findByHashes: vi.fn().mockResolvedValue([mockSubscriber()]) },
        {
          isSubscriberNotifiedForBreach: vi.fn().mockResolvedValue(false),
          addEmailNotification: vi.fn().mockResolvedValue(undefined),
          markEmailAsNotified: vi.fn(),
        },
        vi.fn().mockResolvedValue(undefined),
      ),
    ).rejects.toThrow("Invalid payload");
  });

  it("sets the Sentry tag with breachName", async () => {
    breachSpy.mockResolvedValueOnce(mockBreach(validBreachDefaults));
    const subs = { findByHashes: vi.fn().mockResolvedValue([]) };
    const notifications = {
      isSubscriberNotifiedForBreach: vi.fn(),
      addEmailNotification: vi.fn(),
      markEmailAsNotified: vi.fn(),
    };
    const sendEmail = vi.fn();
    const msg = mockMessage(validMsgPayload);

    await breachMessageHandler(
      msg,
      logger,
      { getBreach: breachSpy } as unknown as BreachDataService,
      subs,
      notifications,
      sendEmail,
      Sentry,
    );

    expect(setTagSpy).toHaveBeenCalledWith("breachName", defaultBreachName);
  });
});
