/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { logger } from "./logging";

export function checkSession(session: Session | null) {
  if (!session) {
    logger.warn("no_session");
    return false;
  } else if (!session.user) {
    logger.warn("no_user_in_session", { session });
    return false;
  } else if (!session.user.subscriber) {
    logger.warn("no_subscriber_in_session", { session });
    return false;
  } else if (!session.user.subscriber.id) {
    logger.warn("no_subscriber_id_in_session", { session });
    return false;
  } else {
    return true;
  }
}
