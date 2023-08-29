/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import styles from "./PremiumBadge.module.scss";
import ShieldIcon from "./assets/shield-icon.svg";
import { useL10n } from "../../hooks/l10n";

export default function PremiumBadge() {
  const l10n = useL10n();

  return (
    <div className={styles.badge}>
      <Image src={ShieldIcon} alt="" width="24" height="24" />
      {l10n.getString("premium-badge-label")}
    </div>
  );
}
