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
import { useSession } from "next-auth/react";

export type UpsellButtonProps = {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
  user?: Session["user"];
};

export function UpsellButton(
  props: UpsellButtonProps & {
    label: string;
  },
) {
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
      {dialogState.isOpen && (
        <UpsellDialog
          {...overlayProps}
          state={dialogState}
          monthlySubscriptionUrl={props.monthlySubscriptionUrl}
          yearlySubscriptionUrl={props.yearlySubscriptionUrl}
          subscriptionBillingAmount={props.subscriptionBillingAmount}
        />
      )}
    </>
  );
}

export type UpsellToggleButton = UpsellButtonProps & {
  hasPremium: boolean;
};

function UpsellToggleButton(props: UpsellToggleButton) {
  const l10n = useL10n();
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState({
    ...props,
    isSelected: props.hasPremium,
  });

  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState,
  );
  const { buttonProps } = useToggleButton(
    {
      ...triggerProps,
      isDisabled: state.isSelected,
    },
    state,
    ref,
  );

  return (
    <>
      <button
        {...buttonProps}
        className={`${styles.upsellBadge} ${
          state.isSelected ? styles.isSelected : ""
        }`}
        ref={ref}
      >
        {state.isSelected
          ? l10n.getString("plus-indicator-label-active")
          : l10n.getString("plus-indicator-label-inactive")}
        <span className={styles.toggleIndicator} />
      </button>
      {dialogState.isOpen && (
        <UpsellDialog
          {...overlayProps}
          state={dialogState}
          monthlySubscriptionUrl={props.monthlySubscriptionUrl}
          yearlySubscriptionUrl={props.yearlySubscriptionUrl}
          subscriptionBillingAmount={props.subscriptionBillingAmount}
        />
      )}
    </>
  );
}

export function UpsellBadge(props: UpsellButtonProps) {
  const countryCode = useContext(CountryCodeContext);
  const session = useSession();

  const user = session.data?.user ?? props.user;
  const userHasPremium = hasPremium(user);
  if (userHasPremium || canSubscribeToPremium({ user, countryCode })) {
    return <UpsellToggleButton {...props} hasPremium={userHasPremium} />;
  }

  return <></>;
}
