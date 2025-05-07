/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCardDataClass.module.scss";
import { useL10n } from "../../../hooks/l10n";
import { Exposure, isScanResult } from "./ExposureCard";
import { HibpBreachDataTypes } from "../../../functions/universal/breach";

type OnerepScanResultSerializedColumns = Extract<
  keyof OnerepScanResultRow,
  "emails" | "phones" | "addresses" | "relatives"
>;

type PremiumDataClassDetailsProps = {
  exposure: Exposure;
  dataBrokerDataType: OnerepScanResultSerializedColumns;
};

// Only for data broker cards
const PremiumDataClassDetails = (props: PremiumDataClassDetailsProps) => {
  const { exposure, dataBrokerDataType } = props;

  // TODO: MNTOR-2617 Add unit test when changing this code:
  /* c8 ignore next 3 */
  if (!isScanResult(exposure)) {
    return null;
  }
  if (dataBrokerDataType === "addresses") {
    return (exposure.addresses ?? []).map(
      ({ city, state, street, zip }, index: number) => (
        <li key={`${props.dataBrokerDataType}-${index}`}>
          {street}, {city}, {String(state)}, {zip}
        </li>
      ),
    );
  }
  if (
    dataBrokerDataType === "emails" ||
    dataBrokerDataType === "phones" ||
    dataBrokerDataType === "relatives"
  ) {
    return (exposure[dataBrokerDataType] ?? []).map(
      (item: string, index: number) => (
        <li key={`${props.dataBrokerDataType}-${index}`}>{item}</li>
      ),
    );
    // TODO: MNTOR-2617 Add unit test when changing this code:
    /* c8 ignore next 3 */
  } else {
    return null;
  }
};

type ExposureCardDataClassLayoutProps = {
  exposure: Exposure;
  label: string;
  count: number;
  isPremiumUser?: boolean;
  dataBrokerDataType?: OnerepScanResultSerializedColumns;
  dataBreachDataType?: HibpBreachDataTypes[keyof HibpBreachDataTypes];
};

export const ExposureCardDataClassLayout = (
  props: ExposureCardDataClassLayoutProps,
) => {
  const l10n = useL10n();
  const isPremiumUser = props.isPremiumUser;
  // Premium users will have fully expanded lists under their respective data class header.
  // Breach cards should only have the emails list expanded.
  let detailsList;
  // Default data class header format: "DataClass: [number]", e.g., "Phone number: 3".
  // For premium users, data class headers for data broker cards will update to include just the data class, without the count, e.g., "Phone number". Breach cards remain unchanged.
  let dataClassHeader: ReactElement | string = (
    <>
      {l10n.getString("exposure-card-label-and-count", {
        category_label: props.label,
        count: props.count,
      })}
    </>
  );

  // Data breach cards only
  if (!isScanResult(props.exposure)) {
    const emailsList =
      // Displaying the list of monitored emails exclusively in a breach card
      props.dataBreachDataType === "email-addresses" ? (
        <>
          {props.exposure.emailsAffected.map((email: string, index: number) => (
            <li key={`${props.dataBreachDataType}-${index}`}>{email}</li>
          ))}
        </>
      ) : (
        <></>
      );
    detailsList = emailsList;
  }

  // Data broker cards only
  else {
    // Update data class header for premium users
    if (isPremiumUser) {
      dataClassHeader = props.label;
    }

    // Render data class details for premium users
    const dataClassExpandedDetails =
      isPremiumUser && props.dataBrokerDataType ? (
        <PremiumDataClassDetails
          exposure={props.exposure}
          dataBrokerDataType={props.dataBrokerDataType}
        />
      ) : (
        <></>
      );
    detailsList = dataClassExpandedDetails;
  }

  return (
    <div className={styles.detailsFoundItem}>
      <div className={styles.label}>
        <span>{dataClassHeader}</span>
      </div>
      <div className={styles.dataClassListDetailsWrapper}>
        <ul className={styles.dataClassListDetails}>{detailsList}</ul>
      </div>
    </div>
  );
};
