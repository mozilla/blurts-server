/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement } from "react";
import styles from "./ExposureCard.module.scss";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { useL10n } from "../../hooks/l10n";

type ScannedExposureCategoryProps = {
  exposureCategoryLabel: string;
  num: number;
  icon: ReactElement;
};

export const ScannedExposureCategory = (
  props: ScannedExposureCategoryProps
) => {
  return (
    <div className={styles.detailsFoundItem}>
      <dt>
        <span className={styles.exposureTypeIcon}>{props.icon}</span>
        {props.exposureCategoryLabel}
      </dt>
      <dd></dd>
    </div>
  );
};

type BreachExposureCategoryProps = {
  subscriberBreach: SubscriberBreach;
  exposureCategoryLabel: string;
  icon: ReactElement;
  showEmail?: boolean;
};

export const BreachExposureCategory = (props: BreachExposureCategoryProps) => {
  const l10n = useL10n();
  const emailLength = props.subscriberBreach.emailsEffected.length;

  const emailsList = (
    <ul className={styles.emailsList}>
      {props.subscriberBreach.emailsEffected?.map(
        (email: string, index: number) => (
          <li key={index}>{email}</li>
        )
      )}
    </ul>
  );

  return (
    <div className={styles.detailsFoundItem}>
      <dt>
        <span className={styles.exposureTypeIcon}>{props.icon}</span>
        {l10n.getString("exposure-card-label-and-count", {
          category_label: props.exposureCategoryLabel,
          count: emailLength,
        })}
      </dt>
      <dd>{props.showEmail && emailsList}</dd>
    </div>
  );
};
