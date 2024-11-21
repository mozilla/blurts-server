/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { OnerepScanResultRow } from "knex/types/tables";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { ExposureCardDataClassLayout } from "../../../../../../../../../components/client/exposure_card/ExposureCardDataClass";
import styles from "./DataBrokerRemovalMaintenance.module.scss";
import React from "react";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { ClockIcon } from "../../../../../../../../../components/server/Icons";

export type DataBrokerRemovalMaintenanceProps = {
  scanResult: OnerepScanResultRow;
  onMarkAsResolved?: () => void;
};

export const DataBrokerRemovalMaintenance = (
  props: DataBrokerRemovalMaintenanceProps,
) => {
  const { scanResult } = props;
  const l10n = useL10n();

  const exposureCategoriesArray: React.ReactElement[] = [];

  // Scan Result Categories
  if (scanResult.relatives.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={scanResult}
        key="relatives"
        dataBrokerDataType="relatives"
        label={l10n.getString("exposure-card-family-members")}
        count={scanResult.relatives.length}
        isPremiumUser={true}
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
        isPremiumUser={true}
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
        isPremiumUser={true}
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
        isPremiumUser={true}
      />,
    );
  }

  const exposureCard = (
    <div
      className={styles.exposureCard}
      aria-label={props.scanResult.data_broker}
    >
      <div className={styles.dataClassesList}>
        {exposureCategoriesArray.map((item) => (
          <React.Fragment key={item.key}>{item}</React.Fragment>
        ))}
      </div>
      <div className={styles.buttonsWrapper}>
        <TelemetryButton
          variant="primary"
          href={props.scanResult.link}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: `go_to_${props.scanResult.data_broker}_link_to_get_started`,
            },
          }}
        >
          {l10n.getString(
            "data-broker-removal-maintenance-cta-go-to-data-broker",
          )}
        </TelemetryButton>
        <TelemetryButton
          variant="secondary"
          onPress={props.onMarkAsResolved}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: `data_broker_removal_mark_as_resolved`,
            },
          }}
        >
          {l10n.getString(
            "data-broker-removal-maintenance-cta-mark-as-resolved",
          )}
        </TelemetryButton>
      </div>
      <div className={styles.estimatedTime}>
        <ClockIcon width="15" height="15" alt="" />
        {l10n.getString("data-broker-removal-maintenance-estimated-time", {
          range: "5 - 10",
        })}
      </div>
    </div>
  );

  return exposureCard;
};
