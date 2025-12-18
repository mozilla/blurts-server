/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { HowItWorksView } from "./HowItWorksView";

import { getL10n } from "../../../../functions/l10n/serverComponents";
import { getLangString } from "@/app/functions/server/getLangString";

export default async function Page(props: PageProps<"/[locale]/how-it-works">) {
  const l10n = getL10n(getLangString((await props.params).locale));

  return <HowItWorksView l10n={l10n} />;
}
