/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { Session } from "next-auth";
import styles from "./PremiumBadge.module.scss";
import ShieldIcon from "./assets/shield-icon.svg";
import { useL10n } from "../../hooks/l10n";
import { hasPremium } from "../../functions/universal/user";
import { Button } from "../server/Button";

export type Props = {
  user: Session["user"] | null;
};

export default function PremiumBadge({ user }: Props) {
  const l10n = useL10n();

  /* c8 ignore start */
  const onUpgrade = () => {
    // TODO: MNTOR-1292: Show premium upsell modal
  };
  /* c8 ignore end */

  return user && hasPremium(user) ? (
    <div className={styles.badge}>
      <Image src={ShieldIcon} alt="" width="24" height="24" />
      {l10n.getString("premium-badge-label")}
    </div>
  ) : (
    <Button variant="primary" small onClick={onUpgrade}>
      {l10n.getString("premium-cta-label")}
    </Button>
  );
}
