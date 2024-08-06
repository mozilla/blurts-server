/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * NOTE: This is a k6 loadtest script, see https://k6.io/ for more information.
 *
 * In particular, k6 supports JS but is not a Node package: https://k6.io/docs/get-started/installation/
 * This is why import/no-unresolved and no-undef are ignored.
 *
 * @see https://grafana.com/docs/k6/latest/get-started/running-k6
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import { post } from "k6/http";

const url = `${__ENV.SERVER_URL}/api/v1/hibp/notify`;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  let data = {
    breachName: "ApexSMS",
    // NOTE: modify this hash range if you want to receive email to specific test account(s).
    // This example should only email an address that is a sha1 hash for 1c48923da9f6f17165711712d11bc104087444cc.
    // See https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/ for more information.
    hashPrefix: "1c4892",
    hashSuffixes: [
      "3da9f6f17165711712d11bc104087444cc",
      "3da9f6fffff5711712d11bc104087444cc",
    ],
  };

  // Using a JSON string as body
  let res = post(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line no-undef
      Authorization: `Bearer ${__ENV.HIBP_NOTIFY_TOKEN}`,
    },
  });

  try {
    const result = res.json();
    if (result.success !== true) {
      throw new Error(`Non-success result: ${JSON.stringify(result)}`);
    }
  } catch (ex) {
    throw new Error(`Failed to parse result: ${res.status}, ${res.text}`);
  }
}
