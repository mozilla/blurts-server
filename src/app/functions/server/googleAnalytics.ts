/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getClientIdForSubscriber } from "../../../db/tables/google_analytics_clients";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";
import { logger } from "./logging";

/**
 *   Send an event to GA4 backend using the GA Measurement Protocol.
 *
 * @param subscriberId - Monitor subscriber ID.
 * @param eventName - the name of the ping (e.g. "purchase").
 * @param eventParams - optional object containing key/value string pairs with additional information about this ping.
 * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag
 */
export async function sendPingToGA(
  subscriberId: number,
  eventName: string,
  eventParams: Record<string, string> = {},
): Promise<void> {
  const apiSecret = process.env.GA4_API_SECRET;
  if (!apiSecret) {
    throw new Error(
      "No GA4 API secret is defined, cannot send backend events Google Analytics",
    );
  }

  const { client_id, cookie_timestamp } =
    await getClientIdForSubscriber(subscriberId);

  if (!client_id || !cookie_timestamp) {
    logger.warn("missing_ga4_client_id", { subscriberId });
    return;
  }

  let clientId;
  try {
    clientId = `${client_id}.${Math.floor(cookie_timestamp.getTime() / 1000)}`;
  } catch (e) {
    logger.warn("could_not_parse_ga4_cookie", {
      subscriberId,
      message: (e as Error).message,
      stack: (e as Error).stack,
    });
    return;
  }

  // Do not show these pings in the production environment by default. These will show up in the DebugView dashboard.
  // @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/verify-implementation?client_type=gtag
  if (process.env.APP_ENV !== "production") {
    eventParams["debug_mode"] = "true";
  }

  // GA will not display unless there is a non-0 amount of engagement time.
  eventParams["engagement_time_msec"] = "1";

  const result = await fetch(
    // Pings can alternatively be sent to the validation server for debugging purposes.
    // @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/validating-events?client_type=gtag
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${apiSecret}`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: clientId,
        events: [
          {
            name: eventName,
            params: eventParams,
          },
        ],
      }),
    },
  );

  if (!result.ok) {
    logger.error("Could not send backend ping to GA", {
      status: result.status,
      text: await result.text(),
    });
  }
}
