/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { BreachDataTypes } from "../../../utils/breachResolution";
import { getSubscriberByEmail } from "../../../../src/db/tables/subscribers.js";
import { getBreaches } from "./getBreaches";
import { getAllEmailsAndBreaches } from "../../../../src/utils/breaches.js";
import { getLatestOnerepScan } from "../../../db/tables/onerep_scans";

export interface DashboardSummary {
  data_breach_total_num: number;
  data_broker_total_num: number;
  total_exposures: number;
  exposures_types: {
    // shared
    email_addresses: number;
    phone_numbers: number;

    // data brokers
    address?: number;
    family_members?: number;
    full_names?: number;

    // data breaches
    social_security_numbers?: number;
    ip_addresses?: number;
    passwords?: number;
    credit_card_numbers?: number;
    debit_card_numbers?: number;
    pin_numbers?: number;
    security_questions?: number;
  };
}

export async function dashboardSummary(
  user: Session["user"]
): Promise<DashboardSummary> {
  const summary: DashboardSummary = {
    data_breach_total_num: 0,
    data_broker_total_num: 0,
    total_exposures: 0,
    exposures_types: {
      email_addresses: 0,
      phone_numbers: 0,
    },
  };

  // get breaches data
  const subscriber = await getSubscriberByEmail(user.email);
  const allBreaches = await getBreaches();
  const breachesData = await getAllEmailsAndBreaches(subscriber, allBreaches);
  console.debug(JSON.stringify(breachesData));

  // get scanned results from data brokers
  const scannedResults = await getLatestOnerepScan(
    user.subscriber?.onerep_profile_id as number
  );
  console.debug(JSON.stringify(scannedResults));

  // calculate broker summary from scanned results

  // calculate breaches summary from breaches data

  return summary;
}
