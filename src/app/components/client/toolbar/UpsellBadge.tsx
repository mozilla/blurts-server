/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useEffect, useRef } from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useOverlayTrigger, useToggleButton } from "react-aria";
import { useOverlayTriggerState, useToggleState } from "react-stately";
import { UpsellDialog } from "./UpsellDialog";
import { Button } from "../Button";
import { useL10n } from "../../../hooks/l10n";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../functions/universal/user";
import styles from "./UpsellBadge.module.scss";
import LastScanIcon from "./images/icon-last-scan.svg";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { CountryCodeContext } from "../../../../contextProviders/country-code";
import { useSession } from "next-auth/react";
import { sendGAEvent } from "../GoogleAnalyticsWorkaround";
import { getLocale } from "../../../functions/universal/getLocale";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

export type UpsellButtonProps = {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
};

export function UpsellButton(
  props: UpsellButtonProps & {
    label: string;
  },
) {
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
      sendGAEvent("event", "premium_upsell_modal", {
        action: isOpen ? "opened" : "closed",
        page_location: pathname,
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

export type UpsellToggleButtonProps = UpsellBadgeProps & {
  hasPremium: boolean;
};
function UpsellToggleButton(props: UpsellToggleButtonProps) {
  const l10n = useL10n();
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState({
    ...props,
    isSelected: props.hasPremium,
  });
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (
      props.enabledFeatureFlags.includes("PrivacyProductsBundle") &&
      props.autoOpenUpsellDialog
    ) {
      return redirect("/subscription-plans");
    }
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dialogState = useOverlayTriggerState({
    defaultOpen: props.enabledFeatureFlags.includes("PrivacyProductsBundle")
      ? false
      : props.autoOpenUpsellDialog,
    onOpenChange(isOpen) {
      if (
        props.enabledFeatureFlags.includes("PrivacyProductsBundle") &&
        isOpen
      ) {
        return redirect("/subscription-plans");
      }

      // Remove `dialog` from URLSearchParams on closing the upsell dialog
      // after it has been opened by linking to it.
      if (!isOpen && props.autoOpenUpsellDialog) {
        const nextSearchParams = new URLSearchParams(searchParams.toString());
        nextSearchParams.delete("dialog");
        const updatedPathname = `${pathname}?${nextSearchParams.toString()}`;
        // Directly interacting with the history API is recommended by Next.js to
        // avoid re-rendering on the server:
        // See https://github.com/vercel/next.js/discussions/48110#discussioncomment-7563979.
        window.history.replaceState(null, "", updatedPathname);
      }
    },
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
  const scanDateFormatter = new Intl.DateTimeFormat(getLocale(l10n), {
    dateStyle: "medium",
  });

  return (
    <>
      <div className={styles.upsellWrapper}>
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
        {props.experimentData?.["last-scan-date"].enabled &&
          props.lastScanDate !== null && (
            <span className={styles.lastScanIndicator}>
              <Image src={LastScanIcon} alt="" width={31} height={25} />
              <b>{l10n.getString("plus-indicator-scan-date-label")}</b>&nbsp;
              {scanDateFormatter.format(props.lastScanDate)}
            </span>
          )}
      </div>
      {!props.enabledFeatureFlags.includes("PrivacyProductsBundle") &&
        dialogState.isOpen && (
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

export type UpsellBadgeProps = UpsellButtonProps & {
  lastScanDate: Date | null;
  enabledFeatureFlags: FeatureFlagName[];
  /**
   * Loading the experiment data for <MobileShell> was a bit too invasive for a
   * feature that has no visible effects on mobile, so this parameter is
   * optional while we're only looking at the `LastScanDateBadge`. If we do look
   * at more experiments in the future, make sure to remove the `?` so that
   * they're actually passed everywhere.
   */
  experimentData?: ExperimentData["Features"];
  autoOpenUpsellDialog?: boolean;
};
export function UpsellBadge(props: UpsellBadgeProps) {
  const countryCode = useContext(CountryCodeContext);
  const session = useSession();

  if (!session.data) {
    return <></>;
  }

  const { user } = session.data;
  const userHasPremium = hasPremium(user);
  if (userHasPremium || canSubscribeToPremium({ user, countryCode })) {
    return (
      <UpsellToggleButton
        {...props}
        autoOpenUpsellDialog={props.autoOpenUpsellDialog}
        hasPremium={userHasPremium}
        enabledFeatureFlags={props.enabledFeatureFlags}
      />
    );
  }

  return <></>;
}
