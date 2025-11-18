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

type messageFn = (message: Message) => Promise<MessageSummary>;
type SubscriptionHandlerOpts = {
  subscription: Subscription;
  messageFn: messageFn;
  logger: Logger;
  process: NodeJS.Process;
};

type SubscriptionState = "draining" | "ready";

export class SubscriptionHandler {
  subscription: Subscription;
  logger: Logger;
  state: SubscriptionState;

  private startDrain(signal: string) {
    this.logger.info(`Received ${signal}. Draining...`);
    this.state = "draining";
    this.subscription.close();
  }

  constructor(opts: SubscriptionHandlerOpts) {
    this.state = "ready";
    this.subscription = opts.subscription;
    this.logger = opts.logger;

    opts.process.on("SIGTERM", () => {
      this.startDrain("SIGTERM");
    });
    opts.process.on("SIGINT", () => {
      this.startDrain("SIGINT");
    });

    this.logger.info("Attaching handler to subscription", {
      name: this.subscription.name,
    });

    this.subscription.on("message", async (message: Message) => {
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
