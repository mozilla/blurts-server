/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getSubscriberByEmail } from "../../../db/tables/subscribers.js";
import { getUserEmails } from "../../../db/tables/emailAddresses.js";
import { logger } from "./logging.js";

/**
 * NOTE: new function to replace getUserBreaches
 *
 * @param user
 */
export async function getSubscriberEmails(
  user: Session["user"],
): Promise<string[]> {
  const emailArray: string[] = [user.email];
  // FIXME case-insensitivity issues, fallback to previous behavior https://mozilla-hub.atlassian.net/browse/MNTOR-2936
  const email = user.subscriber?.fxa_profile_json?.email;

  let subscriber;
  if (email) {
    subscriber = await getSubscriberByEmail(email);
  }
  if (!subscriber?.id) {
    logger.warn("fallback_subscriber_email", { user });
    subscriber = await getSubscriberByEmail(user.email);
  }
  if (!subscriber?.id) {
    logger.error("no_subscriber_for_email", { user });
    throw new Error("no subscriber ID for email");
  }
  (await getUserEmails(subscriber.id)).forEach((e) => emailArray.push(e.email));
  return emailArray;
}
