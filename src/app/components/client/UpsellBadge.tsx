/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { useOverlayTrigger, useToggleButton } from "react-aria";
import { useOverlayTriggerState, useToggleState } from "react-stately";
import { UpsellDialog } from "./UpsellDialog";
import { Button } from "../client/Button";
import { useL10n } from "../../hooks/l10n";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../functions/universal/user";
import styles from "./UpsellBadge.module.scss";
// TODO: The use of `useGA` is restricted and will be cleaned up
// together with MNTOR-2335.
// eslint-disable-next-line no-restricted-imports
import { useGa } from "../../hooks/useGa";
import { useTelemetry } from "../../hooks/useTelemetry";
import { CountryCodeContext } from "../../../contextProviders/country-code";

export type Props = {
  label: string;
  user?: Session["user"];
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
};

export function UpsellButton(props: Props) {
  const { gtag } = useGa();
  const recordTelemetry = useTelemetry();
  const pathname = usePathname();

  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
    onOpenChange: (isOpen) => {
      if (isOpen) {
        recordTelemetry("upgradeIntent", "click", {
          button_id: "nav_upsell",
        });
      }
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
      <UpsellDialog
        {...overlayProps}
        state={dialogState}
        monthlySubscriptionUrl={props.monthlySubscriptionUrl}
        yearlySubscriptionUrl={props.yearlySubscriptionUrl}
      />
    </>
  );
}

function UpsellToggleButton(props) {
  const l10n = useL10n();
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { buttonProps } = useToggleButton(props, state, ref);

  return (
    <button
      {...buttonProps}
      className={`${styles.upsellBadge} ${
        state.isSelected ? styles.isSelected : ""
      }`}
      ref={ref}
    >
      {l10n.getString("upsell-badge-label")} {state.isSelected ? "On" : "Off"}
      <span className={styles.toggleIndicator} />
    </button>
  );
}

export function UpsellBadge(props: Props) {
  const countryCode = useContext(CountryCodeContext);

  const { user } = props;

  if (hasPremium(user) || canSubscribeToPremium({ user, countryCode })) {
    return <UpsellToggleButton {...props} />;
  }

  return <></>;
}
