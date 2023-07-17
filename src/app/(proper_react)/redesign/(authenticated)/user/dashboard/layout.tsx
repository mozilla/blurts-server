/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use-client";

import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { getL10n, getL10nBundles } from "../../../../../functions/server/l10n";
import { authOptions } from "../../../../../api/utils/auth";
import { Shell } from "../../../Shell";

export default async function Layout(props: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const l10n = getL10n(l10nBundles);
  const session = await getServerSession(authOptions);

  return (
    <Shell l10n={l10n} session={session}>
      {props.children}
    </Shell>
  );
}
