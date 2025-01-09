/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { PublicShell } from "./PublicShell";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../functions/l10n/serverComponents";
import { headers } from "next/headers";
import { getCountryCode } from "../../../functions/server/getCountryCode";

export default async function Layout(props: { children: ReactNode }) {
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);
  return (
    <PublicShell
      l10n={getL10n(await getAcceptLangHeaderInServerComponents())}
      countryCode={countryCode}
    >
      {props.children}
    </PublicShell>
  );
}
