/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { EmailTemplateType } from "../../../../../utils/email";
import { authOptions } from "../../../../api/utils/auth";

export default async function EmailRootPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user.email) {
    return notFound();
  }

  const admins = process.env.ADMINS?.split(",") ?? [];
  const isAdmin = admins.includes(session.user.email);

  if (!isAdmin) {
    return notFound();
  }

  return redirect("./emails/" + EmailTemplateType.Verification);
}
