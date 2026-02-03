/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { EventEmitter } from "events";
import type { Message } from "@google-cloud/pubsub";

export function mockMessage(payload: object) {
  // Check if we're in Vitest environment
  const ackFn = typeof vi !== 'undefined' ? vi.fn() : jest.fn();
  const nackFn = typeof vi !== 'undefined' ? vi.fn() : jest.fn();
  
  return {
    data: Buffer.from(JSON.stringify(payload)),
    ack: ackFn,
    nack: nackFn,
  } as unknown as Message;
}

type MockSubscriptionEventMap = {
  message: [msg: Message];
  error: [err: unknown];
};

/**
 * Minimal PubSub Subscription mock for testing.
 * More methods can be added as needed.
 */
export class MockSubscription extends EventEmitter<MockSubscriptionEventMap> {
  private _isOpen: boolean;

  constructor() {
    super();
    this._isOpen = true;
  }
  close() {
    this._isOpen = false;
  }
  open() {
    this._isOpen = true;
  }
  get isOpen() {
    return this._isOpen;
  }
  emitMessage(msg: Message) {
    this.emit("message", msg);
  }
  emitError(err: unknown) {
    this.emit("error", err);
  }
}
