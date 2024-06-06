/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import { NoResults, Removals } from "./Removals";
import { getStuckRemovals } from "../../../../../functions/server/getStuckRemovals";

export default async function Page({ searchParams }) {
  const session = await getServerSession();

  if (isAdmin(session?.user?.email || "")) {
    const days = 30;
    const perPage = 100;
    const page = searchParams.page;

    if (!page) {
      redirect("?page=1");
    }

    if (page < 1) {
      return <code>Invalid page</code>;
    }

    const { totalPages, scanResults, brokers } = await getStuckRemovals(
      days,
      parseInt(page),
      perPage,
    );

    if (totalPages === 0) {
      return <NoResults email={session?.user?.email || ""} />;
    }

    if (page > totalPages) {
      return <code>Invalid page</code>;
    }

    return (
      <Removals
        scanResults={scanResults}
        brokers={brokers}
        page={page}
        totalPages={totalPages}
      />
    );
  } else {
    return notFound();
  }
}
