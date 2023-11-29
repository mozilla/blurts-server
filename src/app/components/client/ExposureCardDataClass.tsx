/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "./ExposureCard";
import { StateAbbr } from "../../../utils/states";

type OnerepScanResultSerializedColumns = Extract<
  keyof OnerepScanResultRow,
  "emails" | "phones" | "addresses" | "relatives"
>;

type DataBrokerDataClassProps = {
  scanResultData: OnerepScanResultRow;
  exposureCategoryLabel: string;
  num: number;
  icon: ReactElement;
  isPremiumUser: boolean;
  dataBrokerResultType?: OnerepScanResultSerializedColumns;
};

type DataBrokerAddress = {
  city: string;
  state: StateAbbr;
  street?: string;
  zip?: string;
};

type DataClassDetails = {
  exposure: Exposure;
  dataBrokerResultType?: OnerepScanResultSerializedColumns;
};

const PremiumDataClassDetailsElem = (props: DataClassDetails) => {
  const { exposure, dataBrokerResultType } = props;

  let content: JSX.Element[] | null = null;

  if (isScanResult(exposure)) {
    const addresses = exposure.addresses || [];

    switch (dataBrokerResultType) {
      case "addresses":
        content = addresses.map(
          ({ city, state, street, zip }: DataBrokerAddress) => (
            <li key={`${city}-${String(state)}-${street}-${zip}`}>
              {city}, {String(state)}, {street}, {zip}
            </li>
          ),
        );
        break;
      case "emails":
      case "phones":
      case "relatives": {
        const items = exposure[dataBrokerResultType] || [];
        content = items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ));
        break;
      }
      default:
        break;
    }
  }

  return (
    <div className={styles.emails}>
      <ul className={styles.emailsList}>{content}</ul>
    </div>
  );
};

export const DataBrokerDataClass = (props: DataBrokerDataClassProps) => {
  const emailsList = (
    <ul className={styles.emailsList}>
      {props.scanResultData.emails.map((email: string, index: number) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  );

  const dataClassExpandedDetails = !props.isPremiumUser ? (
    <PremiumDataClassDetailsElem
      exposure={props.scanResultData}
      dataBrokerResultType={props.dataBrokerResultType}
    />
  ) : (
    emailsList
  );
  return (
    <ExposureCardDataClassLayout
      type={props.scanResultData}
      icon={props.icon}
      label={props.exposureCategoryLabel}
      count={props.num}
      isPremiumUser={props.isPremiumUser}
      detailsList={dataClassExpandedDetails}
    />
  );
};

type BreachDataClassProps = {
  subscriberBreachData: SubscriberBreach;
  exposureCategoryLabel: string;
  icon: ReactElement;
};

export const BreachDataClass = (props: BreachDataClassProps) => {
  const emailLength = props.subscriberBreachData.emailsAffected.length;

  const emailsList = (
    <div className={styles.emails}>
      <ul className={styles.emailsList}>
        {props.subscriberBreachData.emailsAffected.map(
          (email: string, index: number) => (
            <li key={index}>{email}</li>
          ),
        )}
      </ul>
    </div>
  );

  return (
    <ExposureCardDataClassLayout
      type={props.subscriberBreachData}
      icon={props.icon}
      label={props.exposureCategoryLabel}
      count={emailLength}
      detailsList={emailsList}
    />
  );
};

type ExposureCardDataClassLayoutProps = {
  type: Exposure;
  icon: ReactElement;
  label: string;
  count: number;
  detailsList: ReactElement;
  isPremiumUser?: boolean;
};

const ExposureCardDataClassLayout = (
  props: ExposureCardDataClassLayoutProps,
) => {
  const l10n = useL10n();
  return (
    <div className={styles.detailsFoundItem}>
      <div className={styles.label}>
        <span className={styles.exposureTypeIcon}>{props.icon}</span>
        <span>
          {isScanResult(props.type) && !props.isPremiumUser
            ? props.label
            : l10n.getString("exposure-card-label-and-count", {
                category_label: props.label,
                count: props.count,
              })}
        </span>
      </div>

      {isScanResult(props.type) && props.detailsList}
      {!isScanResult(props.type) &&
        props.label === l10n.getString("exposure-card-email") &&
        props.detailsList}
    </div>
  );
};
