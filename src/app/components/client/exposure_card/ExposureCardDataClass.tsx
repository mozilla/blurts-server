/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import styles from "./ExposureCardDataClass.module.scss";
import { useL10n } from "../../../hooks/l10n";
import { HibpBreachDataTypes } from "../../../functions/universal/breach";
import { SubscriberBreach } from "../../../../utils/subscriberBreaches";

type ExposureCardDataClassLayoutProps = {
  exposure: SubscriberBreach;
  label: string;
  count: number;
  isPremiumUser?: boolean;
  dataBreachDataType?: HibpBreachDataTypes[keyof HibpBreachDataTypes];
};

export const ExposureCardDataClassLayout = (
  props: ExposureCardDataClassLayoutProps,
) => {
  const l10n = useL10n();
  // Breach cards should only have the emails list expanded.
  // Default data class header format: "DataClass: [number]", e.g., "Phone number: 3".
  const dataClassHeader: ReactElement | string = (
    <>
      {l10n.getString("exposure-card-label-and-count", {
        category_label: props.label,
        count: props.count,
      })}
    </>
  );

  // Data breach cards only

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

  return (
    <div className={styles.detailsFoundItem}>
      <div className={styles.label}>
        <span>{dataClassHeader}</span>
      </div>
      <div className={styles.dataClassListDetailsWrapper}>
        <ul className={styles.dataClassListDetails}>{emailsList}</ul>
      </div>
    </div>
  );
};
