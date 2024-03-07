/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode, useId } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { StatusPill } from "../../server/StatusPill";
import {
  ChevronDown,
  EmailIcon,
  LocationPinIcon,
  MultipleUsersIcon,
  PhoneIcon,
} from "../../server/Icons";
import { useL10n } from "../../../hooks/l10n";
import { ExposureCardDataClassLayout } from "./ExposureCardDataClass";
import { DataBrokerImage } from "./DataBrokerImage";
import { CONST_URL_SUMO_MONITOR_REMOVAL } from "../../../../constants";
import { TelemetryLink } from "../TelemetryLink";

export type ScanResultCardProps = {
  scanResult: OnerepScanResultRow;
  locale: string;
  isPremiumBrokerRemovalEnabled: boolean;
  resolutionCta: ReactNode;
  isPremiumUser: boolean;
  isExpanded: boolean;
  isOnManualRemovePage?: boolean;
  onToggleExpanded: () => void;
};

export const ScanResultCard = (props: ScanResultCardProps) => {
  const { scanResult, locale, isPremiumBrokerRemovalEnabled } = props;
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
        icon={<MultipleUsersIcon alt="" width="13" height="13" />}
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
        icon={<PhoneIcon alt="" width="13" height="13" />}
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
        icon={<EmailIcon alt="" width="13" height="13" />}
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
        icon={<LocationPinIcon alt="" width="13" height="13" />}
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
    />
  );

  const removalInfoLink = (
    <TelemetryLink
      href={CONST_URL_SUMO_MONITOR_REMOVAL}
      target="_blank"
      eventData={{
        link_id: "explanation_of_removal_time",
      }}
    />
  );

  const upsellLink = (
    <TelemetryLink
      upsell
      eventData={{
        link_id: "clicked_upsell",
      }}
      href="/user/dashboard/fix/data-broker-profiles/automatic-remove"
    />
  );

  const dataBrokerDescription = () => {
    switch (scanResult.status) {
      case "optout_in_progress":
      case "waiting_for_verification":
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-in-progress",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
              removal_info: removalInfoLink,
            },
          },
        );
      case "new":
        // Data broker cards manually resolved do not change their status to "removed";
        // instead, we track them using the "manually_resolved" property.
        if (scanResult.manually_resolved) {
          return l10n.getFragment(
            "exposure-card-description-info-for-sale-fixed-manually-fixed",
            {
              elems: {
                data_broker_profile: dataBrokerProfileLink,
              },
            },
          );
        }
        /* c8 ignore start */
        if (props.isOnManualRemovePage) {
          return scanResult.manually_resolved
            ? l10n.getFragment(
                "exposure-card-description-info-for-sale-fixed-manually-fixed",
                {
                  elems: {
                    data_broker_profile: dataBrokerProfileLink,
                  },
                },
              )
            : l10n.getFragment(
                "exposure-card-description-info-for-sale-action-needed-manual-fix-page",
                {
                  elems: {
                    data_broker_profile: dataBrokerProfileLink,
                  },
                },
              );
        }
        /* c8 ignore stop */
        return l10n.getFragment(
          "exposure-card-description-info-for-sale-action-needed-dashboard",
          {
            elems: {
              data_broker_profile: dataBrokerProfileLink,
              upsell_link: upsellLink,
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

  const exposureCard = (
    <div>
      <div className={styles.exposureCard}>
        <div className={styles.exposureHeader}>
          <dl className={styles.exposureHeaderList}>
            <dt className={styles.visuallyHidden}>
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
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-exposure-type")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {l10n.getString("exposure-card-exposure-type-data-broker")}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-date-found")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {dateFormatter.format(scanResult.created_at)}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-status")}
            </dt>
            <dd>
              <StatusPill exposure={scanResult} />
            </dd>
          </dl>
          <button
            className={styles.chevron}
            onClick={() => props.onToggleExpanded()}
            aria-expanded={props.isExpanded}
            aria-controls={cardId}
          >
            <ChevronDown
              className={props.isExpanded ? styles.isOpen : ""}
              alt={
                props.isExpanded
                  ? l10n.getString("chevron-up-alt")
                  : l10n.getString("chevron-down-alt")
              }
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
          <div>
            <p>{dataBrokerDescription()}</p>
          </div>
          <div className={styles.exposedInfoContainer}>
            <div className={styles.exposedInfoWrapper}>
              <p className={styles.exposedInfoTitle}>
                {l10n.getString("exposure-card-your-exposed-info")}
              </p>
              <div className={styles.dataClassesList}>
                {exposureCategoriesArray.map((item) => (
                  <React.Fragment key={item.key}>{item}</React.Fragment>
                ))}
              </div>
            </div>
            {isPremiumBrokerRemovalEnabled &&
            // Verifying the status for automatically removed data brokers v. manually resolved are handled differently
            props.scanResult.status === "new" &&
            !props.scanResult.manually_resolved ? (
              <span className={styles.fixItBtn}>{props.resolutionCta}</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};
