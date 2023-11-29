/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useEffect, useState } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { useL10n } from "../../hooks/l10n";
import { Exposure, isScanResult } from "./ExposureCard";
import { StateAbbr } from "../../../utils/states";

type OnerepScanResultSerializedColumns = Extract<
  keyof OnerepScanResultRow,
  "emails" | "phones" | "addresses" | "relatives"
>;

type DataBrokerAddress = {
  city: string;
  state: StateAbbr;
  street?: string;
  zip?: string;
};

type PremiumDataClassDetailsProps = {
  exposure: Exposure;
  dataBrokerDataType: OnerepScanResultSerializedColumns;
};

// Only for data broker cards
const PremiumDataClassDetails = (props: PremiumDataClassDetailsProps) => {
  const { exposure, dataBrokerDataType } = props;
  let content: JSX.Element[] | null = null;

  if (isScanResult(exposure)) {
    const addresses = exposure.addresses || [];

    switch (dataBrokerDataType) {
      case "addresses":
        content = addresses.map(
          ({ city, state, street, zip }: DataBrokerAddress) => (
            <li key={`${city}-${String(state)}-${street}-${zip}`}>
              {street}, {city}, {String(state)}, {zip}
            </li>
          ),
        );
        break;
      case "emails":
      case "phones":
      case "relatives": {
        const items = exposure[dataBrokerDataType] || [];
        content = items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ));
        break;
      }
    }
  }

  return (
    <div className={styles.dataClassListDetailsWrapper}>
      <ul className={styles.dataClassListDetails}>{content}</ul>
    </div>
  );
};

type ExposureCardDataClassLayoutProps = {
  type: Exposure;
  icon: ReactElement;
  label: string;
  count: number;
  isPremiumUser?: boolean;
  dataBrokerDataType?: OnerepScanResultSerializedColumns;
};

export const ExposureCardDataClassLayout = (
  props: ExposureCardDataClassLayoutProps,
) => {
  const l10n = useL10n();
  const isPremiumUser = props.isPremiumUser;
  // Premium users will have fully expanded lists under their respective data class header.
  // Breach cards should only have the emails list expanded.
  const [detailsList, setDetailsList] = useState<ReactElement>();

  // Default data class header format: "DataClass: [number]", e.g., "Phone number: 3".
  // For premium users, data class headers for data broker cards will update to include just the data class, without the count, e.g., "Phone number". Breach cards remain unchanged.
  const [dataClassHeader, setDataClassHeader] = useState<ReactElement | string>(
    <>
      {l10n.getString("exposure-card-label-and-count", {
        category_label: props.label,
        count: props.count,
      })}
    </>,
  );

  useEffect(() => {
    // Data breach cards only
    if (!isScanResult(props.type)) {
      const emailsList =
        // Displaying the list of monitored emails exclusively in a breach card
        props.label === l10n.getString("exposure-card-email") ? (
          <div className={styles.dataClassListDetailsWrapper}>
            <ul className={styles.dataClassListDetails}>
              {props.type.emailsAffected.map((email: string, index: number) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        );
      setDetailsList(emailsList);
    }

    // Data broker cards only
    else {
      // Update data class header for premium users
      if (isPremiumUser) {
        setDataClassHeader(props.label);
      }

      // Render data class details for premium users
      const dataClassExpandedDetails =
        isPremiumUser && props.dataBrokerDataType ? (
          <PremiumDataClassDetails
            exposure={props.type}
            dataBrokerDataType={props.dataBrokerDataType}
          />
        ) : (
          <></>
        );
      setDetailsList(dataClassExpandedDetails);
    }
    // Only run this condition once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.detailsFoundItem}>
      <div className={styles.label}>
        <span className={styles.exposureTypeIcon}>{props.icon}</span>
        <span>{dataClassHeader}</span>
      </div>
      {detailsList}
    </div>
  );
};
