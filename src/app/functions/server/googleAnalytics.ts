/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getClientIdForSubscriber } from "../../../db/tables/google_analytics_clients";
import { CONST_GA4_MEASUREMENT_ID } from "../../../constants";

/**
 * Send an event to GA4 backend using the GA Measurement Protocol.
 *
 * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag
 *
 * @param subscriberId {number} - Monitor subscriber ID.
 * @param eventName {string} - the name of the ping (e.g. "purchase").
 * @param eventParams {object} - object containing key/value string pairs with additional information.
 */
export async function sendPingToGA(subscriberId: number, eventName: string) {
  const apiSecret = process.env.GA4_API_SECRET;
  if (!apiSecret) {
    throw new Error(
      "No GA4 API secret is defined, cannot send backend events Google Analytics",
    );
  }
  const clientId = await getClientIdForSubscriber(subscriberId);

  if (!clientId) {
    throw new Error(
      `No GA client_id found for subscriber ${subscriberId}, cannot send backend events to Google Analytics`,
    );
  }

  await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${CONST_GA4_MEASUREMENT_ID}&api_secret=${apiSecret}`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: clientId,
        events: [
          {
            name: eventName,
            params: {},
          },
        ],
      }),
    },
  );
}
