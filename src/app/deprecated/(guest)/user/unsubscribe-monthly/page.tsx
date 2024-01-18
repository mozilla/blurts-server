/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { updateMonthlyEmailOptout } from "../../../../../db/tables/subscribers";
import { getL10n } from "../../../../functions/server/l10n";

export default async function UnsubscribeMonthly(props: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const token = props.searchParams.token;
  if (typeof token !== "string") {
    return redirect("/");
  }
  try {
    await updateMonthlyEmailOptout(token);
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
  const l10n = getL10n();

  return (
    <div data-partial="unsubscribeMonthly">
      <section className="unsubscribe">
        <h1
          dangerouslySetInnerHTML={{ __html: l10n.getString("unsub-headline") }}
        />
        <p>{l10n.getString("changes-saved")}</p>
      </section>
    </div>
  );
}
