/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import styles from "./DataBrokerProfiles.module.scss";
import { useL10n } from "../../hooks/l10n";
import iconChevronDown from "./assets/icon-chevron-down.svg";
import { useState } from "react";
import { ScanResult } from "../../functions/server/onerep";

export type Props = {
  data: ScanResult[];
};

export const DataBrokerProfiles = (props: Props) => {
  const l10n = useL10n();
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
        onClick={() => setShowAllProfiles(!showAllProfiles)}
      >
        <span>
          {showAllProfiles
            ? l10n.getString(
                "fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-less"
              )
            : l10n.getString(
                "fix-flow-data-broker-profiles-view-data-broker-profiles-button-view-more"
              )}
        </span>
        <Image alt="" src={iconChevronDown} />
      </button>
    </div>
  );
};

export type DataBrokerProfileCardProps = {
  data: ScanResult;
};

export const DataBrokerProfileCard = (props: DataBrokerProfileCardProps) => {
  const l10n = useL10n();

  return (
    <div className={styles.dataBrokerProfileCard}>
      <div
        data-broker={props.data.data_broker}
        className={styles.imagePlaceholder}
      ></div>
      {/* TODO: Add logic to show unique image per data broker */}
      {/* <Image src={} alt={props.data.data_broker} /> */}
      <a href={props.data.url}>
        {l10n.getString(
          "fix-flow-data-broker-profiles-view-data-broker-profiles-view-profile"
        )}
      </a>
    </div>
  );
};
