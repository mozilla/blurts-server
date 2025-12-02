/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Message, Subscription } from "@google-cloud/pubsub";
import type { Logger } from "winston";

export type MessageSummary = {
  success: boolean;
  skipped: number;
  notified: number;
  errors: number;
};

type MessageFn = (message: Message) => Promise<MessageSummary>;
type SubscriptionHandlerOpts = {
  subscription: Subscription;
  messageFn: MessageFn;
  logger: Logger;
  process: NodeJS.Process;
};

type SubscriptionState = "draining" | "ready";

/**
 * Generic manager for handling PubSub pull subscriptions.
 * It will invoke the messageFn on every message received
 * by the injected subscription object.
 * The subscription is closed by a SIGTERM/SIGINT event
 * by the `process` emitter, and the handler is set to a
 * draining state. This prevents further messages from
 * being received. If somehow a message is received in
 * the draining state, it is immediately nacked for redelivery
 * to another available pubsub client.
 *
 * If the messageFn response includes {success: true}, the
 * mesage is acked. Otherwise, it is nacked for retry.
 * Errors are logged via the injected logger (which can
 * include a Sentry transport, etc.)
 *
 * The consumer should ensure that the grace
 * period before the process is killed is long enough
 * for any in-flight messages to finish processing.
 */
export class SubscriptionHandler {
  subscription: Subscription;
  logger: Logger;
  state: SubscriptionState;

  private async startDrain(signal: string) {
    this.logger.info(`Received ${signal}. Draining...`);
    this.state = "draining";
    if (this.subscription.isOpen) {
      await this.subscription.close();
    }
  }

  constructor(opts: SubscriptionHandlerOpts) {
    this.state = "ready";
    this.subscription = opts.subscription;
    this.logger = opts.logger;

    opts.process.on("SIGTERM", async () => {
      await this.startDrain("SIGTERM");
    });
    opts.process.on("SIGINT", async () => {
      await this.startDrain("SIGINT");
    });

    this.logger.info("Attaching handler to subscription", {
      name: this.subscription.name,
    });

    this.subscription.on("message", async (message: Message) => {
      this.logger.info("Received message");
      // Don't accept new messages if in 'draining' state
      // Unlikely, but just in case
      if (this.state === "draining") {
        this.logger.info("Nacking message received while draining.");
        // Immediately nack so it can be redelivered
        message.nack();
        return;
      }
      try {
        const { success } = await opts.messageFn(message);
        if (success) {
          message.ack();
        } else {
          message.nack();
        }
      } catch (error) {
        this.logger.error(error);
        message.nack();
      }
    });

    this.subscription.on("error", (error) => {
      this.logger.error(error);
    });
  }
}
