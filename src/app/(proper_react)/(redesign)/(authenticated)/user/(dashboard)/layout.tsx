/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getL10n,
  getL10nBundles,
} from "../../../../../functions/l10n/serverComponents";
import { Shell } from "../../../Shell";
import { headers } from "next/headers";
import { AutoSignIn } from "../../../../../components/client/AutoSignIn";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";

export default async function Layout({ children }: { children: ReactNode }) {
  const l10nBundles = getL10nBundles();
  const l10n = getL10n(l10nBundles);
  const session = await getServerSession();
  const headersList = headers();
  const countryCode = getCountryCode(headersList);

  if (!session) {
    return <AutoSignIn />;
  }

  const nonce = headers().get("x-nonce") ?? "";
  console.log("layout countryCode", countryCode);
  console.log("layout session", session);

  return (
    <Shell
      l10n={l10n}
      session={session}
      nonce={nonce}
      countryCode={countryCode}
    >
      {children}
    </Shell>
  );
}
