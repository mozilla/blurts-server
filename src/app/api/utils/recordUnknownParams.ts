/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "../../functions/server/logging";
import {
  incFirefoxApiUnknownParam,
  type FirefoxApiEndpoint,
} from "../../../utils/metrics";

/**
 * Counts and logs params we ignore, so new Firefox params don't
 * break us.
 */
export function recordUnknownParams(
  endpoint: FirefoxApiEndpoint,
  names: Iterable<string>,
  knownNames: string[],
  clientId?: string,
) {
  const unknownParams = [...new Set(names)].filter(
    (name) => !knownNames.includes(name),
  );
  if (unknownParams.length === 0) return;
  incFirefoxApiUnknownParam(endpoint, clientId);

  // Names only, as values could hold data we don't want to track
  logger.info("firefox_api_unknown_params", {
    endpoint,
    clientId,
    unknownParams,
  });
}
