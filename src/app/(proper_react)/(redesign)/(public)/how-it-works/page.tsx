/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../functions/l10n/serverComponents";
import { View } from "./HowItWorksView";

export default function Page() {
  return <View l10n={getL10n()} />;
}
