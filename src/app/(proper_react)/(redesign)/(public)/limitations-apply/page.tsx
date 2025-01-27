/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { LimitationsApplyView } from "./View";

export default async function LimitationsApplyPage() {
  return (
    <LimitationsApplyView
      l10n={getL10n(await getAcceptLangHeaderInServerComponents())}
    />
  );
}
