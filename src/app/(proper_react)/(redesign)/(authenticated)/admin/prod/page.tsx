/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound } from "next/navigation";
import { UserAdminProduction } from "./UserAdminProduction";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { isAdmin } from "../../../../../api/utils/auth";
import { config } from "../../../../../../config";

export default async function DevPage() {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    config.appEnv !== "production"
  ) {
    return notFound();
  }
  return <UserAdminProduction />;
}
