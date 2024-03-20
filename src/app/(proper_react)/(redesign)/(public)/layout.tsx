/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { PublicShell } from "./PublicShell";
import { getL10n } from "../../../functions/server/l10n";

export default function Layout(props: { children: ReactNode }) {
  return <PublicShell l10n={getL10n()}>{props.children}</PublicShell>;
}
