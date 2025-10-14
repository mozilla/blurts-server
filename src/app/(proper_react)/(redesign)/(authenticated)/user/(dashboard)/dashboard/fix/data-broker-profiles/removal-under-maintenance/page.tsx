/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { getServerSession } from "../../../../../../../../../functions/server/getServerSession";

export default async function RemovalUnderMaintenance() {
  const session = await getServerSession();

  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  redirect("/user/dashboard");
}
