/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import styles from "./DataBrokerProfiles.module.scss";
import { useL10n } from "../../hooks/l10n";
import IconChevronDown from "./assets/icon-chevron-down.svg";
import { useState } from "react";
import { OnerepScanResultRow } from "knex/types/tables";
import { getDataBrokerName } from "../../functions/universal/dataBrokerNames";
import { OpenInNew } from "../server/Icons";
import { useTelemetry } from "../../hooks/useTelemetry";

export type Props = {
  data: OnerepScanResultRow[];
};

export const DataBrokerProfiles = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [showAllProfiles, setShowAllProfiles] = useState(false);

  return (
    <div className={styles.dataBrokerProfileCardsWapper}>
      <ul
        className={`${styles.dataBrokerProfileCards} ${
          showAllProfiles ? styles.showAll : ""
        }`}
      >
        {props.data.map((data) => (
          <li key={data.data_broker_id}>
            <DataBrokerProfileCard data={data} />
          </li>
        ))}
      </ul>
      <button
        className={`${styles.viewProfilesToggle} ${
          showAllProfiles ? styles.active : ""
        }`}
        onClick={() => {
          setShowAllProfiles(!showAllProfiles);
          recordTelemetry("button", "click", {
            button_id: "see_more_profiles",
          });
        }}
      >
        <span>
          {showAllProfiles
            ? l10n.getString(
                "fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-less",
              )
            : l10n.getString(
                "fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-more",
              )}
        </span>
        <Image alt="" src={IconChevronDown} />
      </button>
    </div>
  );
};

export type DataBrokerProfileCardProps = {
  data: OnerepScanResultRow;
};

export const DataBrokerProfileCard = (props: DataBrokerProfileCardProps) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();

  return (
    <div className={styles.dataBrokerProfileCard}>
      <span className={styles.dataBrokerName}>
        {getDataBrokerName(props.data.data_broker)}
      </span>
      <a
        href={props.data.link}
        target="_blank"
        onClick={() => {
          recordTelemetry("link", "click", {
            link_id: "viewed_data_broker",
          });
        }}
      >
        {l10n.getString(
          "fix-flow-data-broker-profiles-view-data-broker-profiles-view-profile",
        )}
        <span className={styles.openInNewTab}>
          <OpenInNew
            alt={l10n.getString("open-in-new-tab-alt")}
            width="13"
            height="13"
          />
        </span>
      </a>
    </div>
  );
};
