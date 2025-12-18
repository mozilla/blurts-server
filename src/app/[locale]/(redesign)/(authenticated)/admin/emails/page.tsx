/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import { EmailTrigger } from "./EmailTrigger";
import { getUserEmails } from "../../../../../../db/tables/emailAddresses";

export default async function DevPage() {
  const session = await getServerSession();

  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    typeof session.user.subscriber?.id === "undefined"
  ) {
    return notFound();
  }

  const emailRows = await getUserEmails(session.user.subscriber.id);

  return (
    <>
      <EmailTrigger
        emailAddresses={[session.user.email].concat(
          emailRows.map((emailRow) => emailRow.email),
        )}
      />
    </>
  );
}
