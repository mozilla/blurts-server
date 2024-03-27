/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Functions that only return data we wouldn't mind sending to the client
 */

import "server-only";
import { EmailAddressRow } from "knex/types/tables";

type SanitizationMarker = {
  /**
   * The `__s` property is added to make sure a type is structurally distinct
   * from the original type, i.e. so that you're unable to pass in an object
   * with the full data where a sanitized object is expected.
   */
  __s: true;
};

export type SanitizedEmailAddressRow = SanitizationMarker &
  Pick<
    EmailAddressRow,
    "email" | "id" | "subscriber_id" | "verified" | "created_at" | "updated_at"
  >;

export function sanitizeEmailRow(
  email: EmailAddressRow,
): SanitizedEmailAddressRow {
  return {
    email: email.email,
    id: email.id,
    subscriber_id: email.subscriber_id,
    created_at: email.created_at,
    updated_at: email.updated_at,
    verified: email.verified,
    // If we want to avoid passing this property to the client-side, we can also
    // just assert this object as a `SanitizedEmailAddressRow`, but I didn't
    // want to encourage asserting that elsewhere _without_ passing it through
    // this function, so I left it in for now:
    __s: true,
  };
}
