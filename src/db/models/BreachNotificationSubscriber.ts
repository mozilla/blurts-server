/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { getEmailAddressesByHashes } from "../tables/emailAddresses";
import { getSubscribersByHashes } from "../tables/subscribers";

// Covered by integration tests but report is not combined
// TODO: MNTOR-5117
/* c8 ignore start */
export type BreachNotificationSubscriber = {
  subscriber_id: SubscriberRow["id"];
  all_emails_to_primary: SubscriberRow["all_emails_to_primary"];
  primary_email: SubscriberRow["primary_email"];
  breached_email: SubscriberRow["primary_email"] | EmailAddressRow["email"];
  notification_email: SubscriberRow["primary_email"] | EmailAddressRow["email"];
  signup_language: SubscriberRow["signup_language"];
  fxa_profile_json: SubscriberRow["fxa_profile_json"];
  fxa_uid: SubscriberRow["fxa_uid"];
};

export async function getBreachNotificationSubscribersByHashes(
  hashes: string[],
): Promise<BreachNotificationSubscriber[]> {
  // 2 sources of email address - the subscribers table and
  // email address table (containing additional emails)
  // First query if the primary email has been breached
  const primary = (await getSubscribersByHashes(hashes)).map((row) => ({
    subscriber_id: row.id,
    all_emails_to_primary: row.all_emails_to_primary,
    primary_email: row.primary_email,
    breached_email: row.primary_email,
    notification_email: row.primary_email,
    signup_language: row.signup_language,
    fxa_profile_json: row.fxa_profile_json,
    fxa_uid: row.fxa_uid,
  }));
  // Second for secondary emails (joined to subscriber record)
  const secondary = (await getEmailAddressesByHashes(hashes)).map((row) => ({
    subscriber_id: row.subscriber_id,
    all_emails_to_primary: row.all_emails_to_primary,
    primary_email: row.primary_email,
    breached_email: row.email,
    notification_email: row.all_emails_to_primary
      ? row.primary_email
      : row.email,
    signup_language: row.signup_language,
    fxa_profile_json: row.fxa_profile_json,
    fxa_uid: row.fxa_uid,
  }));
  return primary.concat(secondary);
}
/* c8 ignore stop */
