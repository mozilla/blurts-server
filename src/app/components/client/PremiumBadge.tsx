/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { PremiumUpsellDialog } from "./PremiumUpsellDialog";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../functions/universal/user";
import ShieldIcon from "./assets/shield-icon.svg";
import styles from "./PremiumBadge.module.scss";
import { useGa } from "../../hooks/useGa";
import { CountryCodeContext } from "../../../contextProviders/country-code";
import { useSession } from "next-auth/react";

export type Props = {
  user: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
};

export default function PremiumBadge({
  user,
  monthlySubscriptionUrl,
  yearlySubscriptionUrl,
}: Props) {
  const l10n = useL10n();
  const { gtag } = useGa();
  const countryCode = useContext(CountryCodeContext);

  const pathname = usePathname();
  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
    onOpenChange: (isOpen) => {
      gtag.record({
        type: "event",
        name: "premium_upsell_modal",
        params: {
          action: isOpen ? "opened" : "closed",
          page_location: pathname,
        },
      });
    },
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState,
  );

  const { update } = useSession();

  useEffect(() => {
    async function updateSession() {
      await update();
    }
    void updateSession();

    // This should only run once per page load - `update` will always appear to be changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasPremium(user)) {
    return (
      <div className={styles.badge}>
        <Image src={ShieldIcon} alt="" width="24" height="24" />
        {l10n.getString("premium-badge-label")}
      </div>
    );
  }

  if (canSubscribeToPremium({ user, countryCode })) {
    return (
      <>
        <Button {...triggerProps} variant="primary" small>
          {l10n.getString("premium-cta-label")}
        </Button>
        <PremiumUpsellDialog
          {...overlayProps}
          state={dialogState}
          monthlySubscriptionUrl={monthlySubscriptionUrl}
          yearlySubscriptionUrl={yearlySubscriptionUrl}
        />
      </>
    );
  }

  return <></>;
}
