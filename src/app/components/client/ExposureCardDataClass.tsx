/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { useL10n } from "../../hooks/l10n";

type DataBrokerDataClassProps = {
  scanResultData: OnerepScanResultRow;
  exposureCategoryLabel: string;
  num: number;
  icon: ReactElement;
  isPremiumUser: boolean;
};

export const DataBrokerDataClass = (props: DataBrokerDataClassProps) => {
  const emailsList = props.isPremiumUser ? (
    <ul className={styles.emailsList}>
      {props.scanResultData.emails.map((email: string, index: number) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  ) : (
    <></>
  );

  return (
    <ExposureCardDataClassLayout
      icon={props.icon}
      label={props.exposureCategoryLabel}
      count={props.num}
      emailData={emailsList}
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
    <ul className={styles.emailsList}>
      {props.subscriberBreachData.emailsAffected.map(
        (email: string, index: number) => (
          <li key={index}>{email}</li>
        ),
      )}
    </ul>
  );

  return (
    <ExposureCardDataClassLayout
      icon={props.icon}
      label={props.exposureCategoryLabel}
      count={emailLength}
      emailData={emailsList}
    />
  );
};

type ExposureCardDataClassLayoutProps = {
  icon: ReactElement;
  label: string;
  count: number;
  emailData: ReactElement;
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
          {l10n.getString("exposure-card-label-and-count", {
            category_label: props.label,
            count: props.count,
          })}
        </span>
      </div>
      {props.emailData &&
        props.label === l10n.getString("exposure-card-email") && (
          <div className={styles.emails}>{props.emailData}</div>
        )}
    </div>
  );
};
