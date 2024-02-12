/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers.js";
import { getUserEmails } from "../../../db/tables/emailAddresses.js";

/**
 * NOTE: new function to replace getUserBreaches
 *
 * @param user
 */
export async function getSubscriberEmails(
  user: Session["user"],
): Promise<string[]> {
  if (!user.subscriber?.fxa_uid) {
    throw new Error("No fxa_uid found in session");
  }
  const emailArray: string[] = [user.email];
  const subscriber = await getSubscriberByFxaUid(user.subscriber?.fxa_uid);
  if (!subscriber) {
    throw new Error("No subscriber found for current session.");
  }
  (await getUserEmails(subscriber.id)).forEach((e) => emailArray.push(e.email));
  return emailArray;
}
