/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions, isAdmin } from "../../../../../api/utils/auth";
import { UserAdmin } from "./UserAdmin";

export default async function DevPage() {
  const session = await getServerSession(authOptions);

  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV !== "local"
  ) {
    return notFound();
  }

  return <UserAdmin />;
}
