/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Logger } from "winston";
import { MockProcess } from "../../../test/helpers/mockProcess";
import { mockMessage, MockSubscription } from "../../../test/helpers/pubsub";
import { mockLogger } from "../../../test/helpers/mockLogger";
import { MessageSummary, SubscriptionHandler } from "./subscriptionHandler"; // <-- adjust the path
import { setTimeout } from "timers/promises";
import { Message, Subscription } from "@google-cloud/pubsub";

describe("SubscriptionHandler", () => {
  let logger: Logger;
  let sub: MockSubscription;
  let proc: MockProcess;
  let subCloseSpy: jest.SpyInstance<void, []>;

  beforeEach(() => {
    logger = mockLogger();
    subCloseSpy = jest.spyOn(MockSubscription.prototype, "close");
    sub = new MockSubscription();
    proc = new MockProcess();
    jest.clearAllMocks();
  });

  afterAll(() => jest.restoreAllMocks());

  function startHandler(messageFn: (m: Message) => Promise<MessageSummary>) {
    return new SubscriptionHandler({
      subscription: sub as unknown as Subscription,
      messageFn,
      logger,
      process: proc as unknown as NodeJS.Process,
    });
  }

  it("acks on success=true", async () => {
    startHandler(async () => ({
      success: true,
      errors: 0,
      notified: 1,
      skipped: 0,
    }));
    const msg = mockMessage({
      breachName: "Big Breach",
      hashPrefix: "AA",
      hashSuffixes: ["11"],
    });

    sub.emitMessage(msg);

    // allow event loop to flush
    // no setImmediate in jsdom, so just wait
    // a short while instead
    await setTimeout(50);

    expect(msg.ack).toHaveBeenCalled();
    expect(msg.nack).not.toHaveBeenCalled();
  });

  it("nacks on success=false", async () => {
    startHandler(async () => ({
      success: false,
      errors: 1,
      notified: 0,
      skipped: 0,
    }));
    const msg = mockMessage({
      breachName: "Big Breach",
      hashPrefix: "AA",
      hashSuffixes: ["11"],
    });

    sub.emitMessage(msg);
    await setTimeout(50);

    expect(msg.nack).toHaveBeenCalled();
    expect(msg.ack).not.toHaveBeenCalled();
  });

  it("nacks on thrown error", async () => {
    startHandler(async () => {
      throw new Error("error");
    });
    const msg = mockMessage({
      breachName: "Big Breach",
      hashPrefix: "AA",
      hashSuffixes: ["11"],
    });

    sub.emitMessage(msg);
    await setTimeout(50);

    expect(msg.nack).toHaveBeenCalled();
  });
  it.each(["SIGTERM" as const, "SIGINT" as const])(
    "%s: when draining, it nacks and does not call messageFn if a message event is received",
    async (signal) => {
      const handlerSpy = jest.fn().mockResolvedValue({
        success: true,
        errors: 0,
        notified: 0,
        skipped: 0,
      });
      startHandler(handlerSpy);
      const msg = mockMessage({
        breachName: "Big Breach",
        hashPrefix: "AA",
        hashSuffixes: ["11"],
      });

      // Send signal to drain
      proc.emitSignal(signal);
      sub.emitMessage(msg);
      await setTimeout(50);

      expect(msg.nack).toHaveBeenCalled();
      expect(handlerSpy).not.toHaveBeenCalled();
    },
  );
  it.each(["SIGTERM" as const, "SIGINT" as const])(
    "%s: when draining, it closes the subscription",
    async (signal) => {
      const handlerSpy = jest.fn().mockResolvedValue({
        success: true,
        errors: 0,
        notified: 0,
        skipped: 0,
      });
      startHandler(handlerSpy);

      // Send signal to drain
      proc.emitSignal(signal);
      expect(subCloseSpy).toHaveBeenCalled();
      await setTimeout(50);
    },
  );
  it("logs error thrown by subscription object", async () => {
    startHandler(async () => ({
      success: false,
      errors: 1,
      notified: 0,
      skipped: 0,
    }));
    sub.emitError(new Error("nope"));
    await setTimeout(50);
    expect(logger.error).toHaveBeenCalled();
  });
});
