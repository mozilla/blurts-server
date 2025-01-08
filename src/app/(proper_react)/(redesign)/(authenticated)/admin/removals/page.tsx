/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound, redirect } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import { NoResults, Removals } from "./Removals";
import { getStuckRemovals } from "../../../../../functions/server/getStuckRemovals";

export default async function Page(props: {
  searchParams: Promise<{
    query?: string;
    page: string;
    days: string;
    perPage: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const { page = "1", days = "30", perPage = "100" } = searchParams;

  const session = await getServerSession();

  if (!isAdmin(session?.user?.email || "")) {
    return notFound();
  }

  const searchParamsParsed = {
    page: parseInt(page),
    days: parseInt(days),
    perPage: parseInt(perPage),
  };

  if (
    searchParamsParsed.page &&
    searchParamsParsed.days &&
    searchParamsParsed.perPage
  ) {
    if (searchParamsParsed.page < 1) {
      return <code>Invalid page</code>;
    }

    const { totalPages, scanResults, brokers } = await getStuckRemovals(
      searchParamsParsed.days,
      searchParamsParsed.page,
      searchParamsParsed.perPage,
    );

    if (totalPages === undefined || totalPages === 0) {
      return <NoResults email={session?.user?.email || ""} />;
    }

    if (searchParamsParsed.page > totalPages) {
      return <code>Invalid page</code>;
    }

    return (
      <Removals
        scanResults={scanResults}
        brokers={brokers}
        page={searchParamsParsed.page}
        totalPages={totalPages}
      />
    );
  } else {
    redirect(
      `?page=${searchParamsParsed.page}&days=${searchParamsParsed.days}&perPage=${searchParamsParsed.perPage}`,
    );
  }
}
