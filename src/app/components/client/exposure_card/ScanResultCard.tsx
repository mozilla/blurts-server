/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode, useId } from "react";
import Image from "next/image";
import { OnerepScanResultDataBrokerRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { StatusPill } from "../../server/StatusPill";
import { ChevronDown } from "../../server/Icons";
import { useL10n } from "../../../hooks/l10n";
import { ExposureCardDataClassLayout } from "./ExposureCardDataClass";
import { DataBrokerImage } from "./DataBrokerImage";
import { TelemetryLink } from "../TelemetryLink";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import SparkleImage from "../assets/sparkle.png";
import { isDataBrokerUnderMaintenance } from "../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";

export type ScanResultCardProps = {
  scanResult: OnerepScanResultDataBrokerRow;
  locale: string;
  resolutionCta: ReactNode;
  isPremiumUser: boolean;
  isExpanded: boolean;
  isOnManualRemovePage?: boolean;
  enabledFeatureFlags?: FeatureFlagName[];
  experimentData?: ExperimentData["Features"];
  removalTimeEstimate?: number;
  onToggleExpanded: () => void;
};

export const ScanResultCard = (props: ScanResultCardProps) => {
  const { scanResult, locale } = props;
  const l10n = useL10n();
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];
  const cardId = useId();

  // Scan Result Categories
  if (scanResult.relatives.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={scanResult}
        key="relatives"
        dataBrokerDataType="relatives"
        label={l10n.getString("exposure-card-family-members")}
        count={scanResult.relatives.length}
        isPremiumUser={props.isPremiumUser}
      />,
    );
  }
  if (scanResult.phones.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={scanResult}
        key="phones"
        dataBrokerDataType="phones"
        label={l10n.getString("exposure-card-phone-number")}
        count={scanResult.phones.length}
        isPremiumUser={props.isPremiumUser}
      />,
    );
  }
  if (scanResult.emails.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={scanResult}
        key="emails"
        dataBrokerDataType="emails"
        label={l10n.getString("exposure-card-email")}
        count={scanResult.emails.length}
        isPremiumUser={props.isPremiumUser}
      />,
    );
  }
  if (scanResult.addresses.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={scanResult}
        key="addresses"
        dataBrokerDataType="addresses"
        label={l10n.getString("exposure-card-address")}
        count={scanResult.addresses.length}
        isPremiumUser={props.isPremiumUser}
      />,
    );
  }
  const COMPANY_NAME_MAX_CHARACTER_COUNT = 20;
  const isCompanyNameTooLong =
    scanResult.data_broker.length > COMPANY_NAME_MAX_CHARACTER_COUNT;

  const dataBrokerProfileLink = (
    <TelemetryLink
      href={scanResult.link}
      target="_blank"
      eventData={{
        link_id: `data_broker_${scanResult.id}`,
      }}
      showIcon
    />
  );

  const upsellLink = (
    <TelemetryLink
      upsell
      eventData={{
        link_id: "clicked_upsell",
      }}
      href={
        props.enabledFeatureFlags?.includes("SubscriptionPlansPage")
          ? "/subscription-plans"
          : "/user/dashboard/fix/data-broker-profiles/automatic-remove"
      }
    />
  );

  const dataBrokerDescription = () => {
    // Data broker cards manually resolved do not change their status to "removed";
    // instead, we track them using the "manually_resolved" property.

    if (
      // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
      props.enabledFeatureFlags?.includes(
        "EnableRemovalUnderMaintenanceStep",
      ) &&
      isDataBrokerUnderMaintenance(props.scanResult)
    ) {
      if (scanResult.manually_resolved) {
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-fixed-removal-under-maintenance-manually-fixed",
          { elems: { data_broker_profile: dataBrokerProfileLink } },
        );
      }
      return l10n.getFragment(
        "exposure-card-description-info-for-sale-manual-removal-needed",
        {
          elems: {
            b: <b />,
          },
        },
      );
    }

    if (scanResult.manually_resolved) {
      return l10n.getFragment(
        "exposure-card-description-info-for-sale-fixed-manually-fixed",
        { elems: { data_broker_profile: dataBrokerProfileLink } },
      );
    }
    // if a data broker is not manually resolved
    switch (scanResult.status) {
      case "waiting_for_verification":
        if (props.enabledFeatureFlags?.includes("AdditionalRemovalStatuses")) {
          return l10n.getFragment(
            "exposure-card-description-info-for-sale-requested-removal-dashboard",
            {
              elems: {
                data_broker_profile: dataBrokerProfileLink,
              },
            },
          );
        }
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-in-progress-dashboard",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
            },
          },
        );
      case "optout_in_progress":
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-in-progress-dashboard",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
            },
          },
        );
      case "new":
        if (props.isOnManualRemovePage) {
          return l10n.getFragment(
            "exposure-card-description-info-for-sale-action-needed-manual-fix-page",
            {
              elems: {
                data_broker_profile: dataBrokerProfileLink,
                upsell_link: upsellLink,
              },
            },
          );
        }

        return l10n.getFragment(
          "exposure-card-description-info-for-sale-action-needed-dashboard",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
            },
          },
        );
      case "removed":
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-fixed",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
            },
          },
        );
    }
  };

  const attemptCount = scanResult.optout_attempts ?? 0;
  const statusPillNote =
    props.enabledFeatureFlags?.includes("AdditionalRemovalStatuses") &&
    props.enabledFeatureFlags?.includes("DataBrokerRemovalAttempts") &&
    !scanResult.manually_resolved &&
    scanResult.status === "waiting_for_verification" &&
    attemptCount >= 1 &&
    typeof scanResult.last_optout_at !== "undefined"
      ? l10n.getString("status-pill-requested-removal-info", {
          attempt_count: attemptCount,
          last_attempt_date: new Intl.DateTimeFormat(locale).format(
            scanResult.last_optout_at,
          ),
        })
      : "";

  let removalEstimateTimeLabel = l10n.getString(
    "dashboard-exposures-filter-exposure-removal-time-label-unknown",
  );
  if (typeof props.removalTimeEstimate !== "undefined") {
    const removalTimeEstimateRangeMarkers = [180, 90, 60, 13, 7];
    const removalTimeLabelId =
      removalTimeEstimateRangeMarkers.findLast(
        (rangeMarker) => (props.removalTimeEstimate as number) <= rangeMarker,
      ) ?? "other";
    removalEstimateTimeLabel = l10n.getString(
      `dashboard-exposures-filter-exposure-removal-time-label-${removalTimeLabelId}`,
    );
  }

  const resolveExposuresCta = (() => {
    if (props.scanResult.manually_resolved) {
      return (
        <div className={styles.manualResolutionPraise}>
          <Image alt="" src={SparkleImage} width="20" height="20" />
          <span>
            {l10n.getFragment("exposure-card-manual-resolution-praise", {
              elems: {
                b: <b />,
              },
            })}
          </span>
        </div>
      );
    }

    if (
      // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
      props.enabledFeatureFlags?.includes(
        "EnableRemovalUnderMaintenanceStep",
      ) &&
      isDataBrokerUnderMaintenance(props.scanResult)
    ) {
      return <span>{props.resolutionCta}</span>;
    }

    switch (props.scanResult.status) {
      case "new":
        return <span>{props.resolutionCta}</span>;
      default:
        return null;
    }
  })();

  const exposureCard = (
    <div aria-label={props.scanResult.data_broker}>
      <div className={styles.exposureCard}>
        <div className={styles.exposureHeader}>
          <dl className={styles.exposureHeaderList}>
            <dt className={`${styles.hideOnMobile} ${styles.visuallyHidden}`}>
              {l10n.getString("exposure-card-label-company-logo")}
            </dt>
            <dd
              className={`${styles.hideOnMobile} ${styles.exposureImageWrapper}`}
            >
              <DataBrokerImage name={scanResult.data_broker} />
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-company")}
            </dt>
            <dd>
              <span
                className={`${styles.exposureCompanyTitle} ${
                  styles.companyNameArea
                }
                ${isCompanyNameTooLong ? styles.makeFontSmaller : ""}`}
              >
                {scanResult.data_broker}
              </span>
            </dd>
            <dt className={`${styles.hideOnMobile} ${styles.visuallyHidden}`}>
              {l10n.getString("exposure-card-exposure-type")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {l10n.getString("exposure-card-exposure-type-data-broker")}
            </dd>
            <dt className={`${styles.hideOnMobile} ${styles.visuallyHidden}`}>
              {l10n.getString("exposure-card-date-found")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {dateFormatter.format(scanResult.created_at)}
            </dd>
            {props.isPremiumUser &&
              props.enabledFeatureFlags?.includes(
                "DataBrokerRemovalTimeEstimateLabel",
              ) &&
              props.experimentData?.["data-broker-removal-time-estimates"]
                .enabled && (
                <>
                  <dt
                    className={`${styles.hideOnMobile} ${styles.visuallyHidden}`}
                  >
                    {l10n.getString(
                      "dashboard-exposures-filter-exposure-removal-time-title",
                    )}
                  </dt>
                  <dd className={styles.hideOnMobile}>
                    {removalEstimateTimeLabel}
                  </dd>
                </>
              )}
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-status")}
            </dt>
            <dd>
              <StatusPill
                isRemovalUnderMaintenance={isDataBrokerUnderMaintenance(
                  props.scanResult,
                )}
                exposure={scanResult}
                note={statusPillNote}
                enabledFeatureFlags={props.enabledFeatureFlags}
              />
            </dd>
          </dl>
          <button
            className={styles.chevron}
            onClick={() => props.onToggleExpanded()}
            aria-expanded={props.isExpanded}
            aria-label={l10n.getString("chevron-alt")}
            aria-controls={cardId}
          >
            <ChevronDown
              className={props.isExpanded ? styles.isOpen : ""}
              alt=""
              width="20"
              height="20"
            />
          </button>
        </div>
        <div
          id={cardId}
          className={`${styles.exposureDetailsSection} ${
            props.isExpanded ? styles.isOpen : ""
          }`}
        >
          <div className={styles.exposureDetailsTopDescription}>
            <p>{dataBrokerDescription()}</p>
            <span className={styles.resolveExposuresCtaDesktop}>
              {resolveExposuresCta}
            </span>
          </div>
          <div className={styles.exposureDetailsContent}>
            <p className={styles.exposedInfoTitle}>
              {l10n.getString("exposure-card-found-the-following-data")}
            </p>
            <div className={styles.exposedDataTypes}>
              {exposureCategoriesArray.map((item) => (
                <React.Fragment key={item.key}>{item}</React.Fragment>
              ))}
            </div>
          </div>
          <span className={styles.resolveExposuresCtaMobile}>
            {resolveExposuresCta}
          </span>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};
