/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import { NoResults, Removals } from "./Removals";
import { getStuckRemovals } from "../../../../../functions/server/getStuckRemovals";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    days?: string;
    perPage?: string;
  };
}) {
  const session = await getServerSession();

  if (isAdmin(session?.user?.email || "")) {
    let page = 1;
    let days = 30;
    let perPage = 100;

    if (searchParams?.page) {
      page = parseInt(searchParams.page);
    }

    if (searchParams?.days) {
      days = parseInt(searchParams.days);
    }

    if (searchParams?.perPage) {
      perPage = parseInt(searchParams.perPage);
    }

    if (searchParams?.page && searchParams?.days && searchParams?.perPage) {
      if (page < 1) {
        return <code>Invalid page</code>;
      }

      const { totalPages, scanResults, brokers } = await getStuckRemovals(
        days,
        page,
        perPage,
      );

      if (totalPages === undefined || totalPages === 0) {
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
      redirect(`?page=${page}&days=${days}&perPage=${perPage}`);
    }
  } else {
    return notFound();
  }
}
