/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext } from "react";
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
// TODO: The use of `useGA` is restricted and will be cleaned up
// together with MNTOR-2335.
// eslint-disable-next-line no-restricted-imports
import { useGa } from "../../hooks/useGa";
import { CountryCodeContext } from "../../../contextProviders/country-code";

export type Props = {
  label: string;
  user?: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
};

export function PremiumButton(props: Props) {
  const { gtag } = useGa();
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
  return (
    <>
      <Button {...triggerProps} variant="primary" small>
        {props.label}
      </Button>
      <PremiumUpsellDialog
        {...overlayProps}
        state={dialogState}
        monthlySubscriptionUrl={props.monthlySubscriptionUrl}
        yearlySubscriptionUrl={props.yearlySubscriptionUrl}
      />
    </>
  );
}

export function PremiumBadge(props: Props) {
  const l10n = useL10n();
  const countryCode = useContext(CountryCodeContext);

  const { user } = props;

  if (hasPremium(user)) {
    return (
      <div className={styles.badge}>
        <Image src={ShieldIcon} alt="" width="24" height="24" />
        {l10n.getString("premium-badge-label")}
      </div>
    );
  }

  if (canSubscribeToPremium({ user, countryCode })) {
    return <PremiumButton {...props} />;
  }

  return <></>;
}
