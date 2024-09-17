/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UnsubscribeMonthlyReportView } from "./UnsubscribeMonthlyReportView";

export default function Page({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token ?? "";
  if (!token) {
    console.error("Unsubscription token not provided");
  }

  return <UnsubscribeMonthlyReportView token={token} />;
}
