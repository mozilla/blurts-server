/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getSubscriberByEmail } from "../../../db/tables/subscribers.js";
import { getUserEmails } from "../../../db/tables/emailAddresses.js";

/**
 * NOTE: new function to replace getUserBreaches
 *
 * @param user
 */
export async function getSubscriberEmails(
  user: Session["user"]
): Promise<string[]> {
  const emailArray: string[] = [];
  const subscriber = await getSubscriberByEmail(user.email);
  (await getUserEmails(subscriber.id)).forEach((er) =>
    emailArray.push(er.email)
  );
  return emailArray;
}
