/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Link from "next/link";
import styles from "../dataBrokerProfiles.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import buttonStyles from "../../../../../../../../components/server/button.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { redirect, usePathname } from "next/navigation";
import { getUserBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { getHighRiskBreachLink } from "../../../../../../../../functions/universal/highRiskBreachLink";
import { ManualRemoveView } from "./ManualRemoveView";

export default async function ManualRemove() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }
  const breaches = await getUserBreaches({ user: session.user });

  return <ManualRemoveView breaches={breaches} />;
}
