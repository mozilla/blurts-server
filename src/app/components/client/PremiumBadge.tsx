/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { Session } from "next-auth";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { PremiumUpsellDialog } from "./PremiumUpsellDialog";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import { hasPremium } from "../../functions/universal/user";
import ShieldIcon from "./assets/shield-icon.svg";
import styles from "./PremiumBadge.module.scss";

export type Props = {
  user: Session["user"] | null;
};

export default function PremiumBadge({ user }: Props) {
  const l10n = useL10n();

  const dialogState = useOverlayTriggerState({ defaultOpen: false });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState
  );

  return user && hasPremium(user) ? (
    <div className={styles.badge}>
      <Image src={ShieldIcon} alt="" width="24" height="24" />
      {l10n.getString("premium-badge-label")}
    </div>
  ) : (
    <>
      <Button {...triggerProps} variant="primary" small>
        {l10n.getString("premium-cta-label")}
      </Button>
      <PremiumUpsellDialog {...overlayProps} state={dialogState} />
    </>
  );
}
