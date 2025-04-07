/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import { getAllAnnouncements } from "../../../../../../db/tables/announcements";
import { AnnouncementsAdmin } from "./AnnouncementsAdmin";

export default async function AnnouncementsAdminPage() {
  const session = await getServerSession();

  if (!session?.user?.email || !session.user.subscriber?.id) {
    return redirect("/");
  }

  if (!isAdmin(session.user.email)) {
    return notFound();
  }

  const announcements = await getAllAnnouncements();

  return <AnnouncementsAdmin announcements={announcements} />;
}
