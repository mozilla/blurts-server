/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { config } from "../../config";
import { PubSub } from "@google-cloud/pubsub";

let _pubSub: PubSub | undefined = undefined;

export function getPubSub(): PubSub {
  if (_pubSub !== undefined) return _pubSub;

  _pubSub = new PubSub({
    projectId: config.gcp.projectId,
    enableOpenTelemetryTracing: true,
  });
  return _pubSub;
}
