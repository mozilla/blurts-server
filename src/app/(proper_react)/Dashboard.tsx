/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";
import { ExposureCard, ExposureCardProps } from "../components/client/ExposureCard";
import styles from "./Dashboard.module.scss";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useState } from "react";

type DashboardProps = {
  exposures: ExposureCardProps[];
}

export const Dashboard = (props: DashboardProps) => {

  return (
    <ShellEl l10n={getL10n()} session={null}>
      <div className={styles.container}>
        <DashboardTopBanner 
          type={"DataBrokerScanUpsellContent"}
          data={{
            exposures: {
              remaining: 13 // TODO: consolidate all user data in a mockfile
            }
          }}
          chart={<></>} 
        />

      <section className={styles.exposuresArea}>
        <h2>View all exposures that are fixed or in-progress</h2>
        <p>We found your information exposed 904 times over 15 data breaches and 157 data broker sites that are selling your personal info.</p>
        <ul className={styles.exposureList}>
          {props.exposures.map((exposure, index) => (
            <li key={index} className={styles.exposureListItem}>
            <ExposureCard
              exposureImg={exposure.exposureImg}
              exposureName={exposure.exposureName}
              exposureType={exposure.exposureType}
              exposureDetailsLink={exposure.exposureDetailsLink}
              dateFound={exposure.dateFound}
              statusPillType={exposure.statusPillType}
            /></li>
          ))}
        </ul>
        </section>
      </div>
    </ShellEl>
  );
};


