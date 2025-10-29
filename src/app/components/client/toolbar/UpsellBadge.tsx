/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useOverlayTrigger, useToggleButton } from "react-aria";
import { useOverlayTriggerState, useToggleState } from "react-stately";
import { useL10n } from "../../../hooks/l10n";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../functions/universal/user";
import styles from "./UpsellBadge.module.scss";
import LastScanIcon from "./images/icon-last-scan.svg";
import { CountryCodeContext } from "../../../../contextProviders/country-code";
import { useSession } from "next-auth/react";
import { sendGAEvent } from "../GoogleAnalyticsWorkaround";
import { getLocale } from "../../../functions/universal/getLocale";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { WaitlistDialog } from "../SubscriberWaitlistDialog";
import { GleanMetricMap } from "../../../../telemetry/generated/_map";
import { TelemetryButton } from "../TelemetryButton";
import { Props as ButtonProps } from "../Button";

export type UpsellLinkButtonProps = {
  enabledFeatureFlags: FeatureFlagName[];
};

export function UpsellLinkButton(
  props: ButtonProps &
    UpsellLinkButtonProps & {
      eventData: GleanMetricMap["upgradeIntent"]["click"];
      children?: ReactNode;
      className?: string;
    },
) {
  const pathname = usePathname();

  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
    onOpenChange: (isOpen) => {
      sendGAEvent("event", "premium_waitlist_modal", {
        action: isOpen ? "opened" : "closed",
        page_location: pathname,
      });
    },
  });

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState,
  );

  const showWaitlist = props.enabledFeatureFlags.includes("DisableOneRepScans");

  return (
    <>
      <TelemetryButton
        {...triggerProps}
        onPress={() => {
          if (showWaitlist) {
            dialogState.open();
          }
        }}
        className={props.className}
        variant={props.variant}
        small={props.small}
        href={showWaitlist ? undefined : "/subscription-plans"}
        target="_blank"
        event={{
          module: "upgradeIntent",
          name: "click",
          data: props.eventData,
        }}
      >
        {props.children}
      </TelemetryButton>
      {dialogState.isOpen && (
        <WaitlistDialog dialogTriggerState={dialogState} {...overlayProps} />
      )}
    </>
  );
}

export type UpsellToggleLinkButtonProps = UpsellBadgeProps & {
  hasPremium: boolean;
};

function UpsellToggleLinkButton(props: UpsellToggleLinkButtonProps) {
  const l10n = useL10n();
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState({
    ...props,
    isSelected: props.hasPremium,
  });

  const { buttonProps } = useToggleButton(
    {
      isDisabled: state.isSelected,
    },
    state,
    ref,
  );
  const scanDateFormatter = new Intl.DateTimeFormat(getLocale(l10n), {
    dateStyle: "medium",
  });

  return (
    <div className={styles.upsellWrapper}>
      <UpsellLinkButton
        {...buttonProps}
        variant="primary"
        small
        className={`${styles.upsellBadge} ${
          state.isSelected ? styles.isSelected : ""
        }`}
        enabledFeatureFlags={props.enabledFeatureFlags}
        eventData={{
          button_id: "nav_upsell",
        }}
      >
        {state.isSelected
          ? l10n.getString("plus-indicator-label-active")
          : l10n.getString("plus-indicator-label-inactive")}
        <span className={styles.toggleIndicator} />
      </UpsellLinkButton>
      {props.experimentData?.["last-scan-date"].enabled &&
        props.lastScanDate !== null && (
          <span className={styles.lastScanIndicator}>
            <Image src={LastScanIcon} alt="" width={31} height={25} />
            <b>{l10n.getString("plus-indicator-scan-date-label")}</b>&nbsp;
            {scanDateFormatter.format(props.lastScanDate)}
          </span>
        )}
    </div>
  );
}

export type UpsellBadgeProps = UpsellLinkButtonProps & {
  lastScanDate: Date | null;
  /**
   * Loading the experiment data for <MobileShell> was a bit too invasive for a
   * feature that has no visible effects on mobile, so this parameter is
   * optional while we're only looking at the `LastScanDateBadge`. If we do look
   * at more experiments in the future, make sure to remove the `?` so that
   * they're actually passed everywhere.
   */
  experimentData?: ExperimentData["Features"];
};

export function UpsellBadge(props: UpsellBadgeProps) {
  const countryCode = useContext(CountryCodeContext);
  const session = useSession();

  if (!session.data) {
    return <></>;
  }

  const { user } = session.data;
  const userHasPremium = hasPremium(user);
  if (
    userHasPremium ||
    canSubscribeToPremium({
      user,
      countryCode,
      enabledFeatureFlags: props.enabledFeatureFlags,
    })
  ) {
    return <UpsellToggleLinkButton {...props} hasPremium={userHasPremium} />;
  }

  return <></>;
}
