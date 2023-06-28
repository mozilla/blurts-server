/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";
import { ExposureCard, ExposureCardProps } from "../components/client/ExposureCard";
import styles from "./Dashboard.module.scss";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../hooks/l10n";

type DashboardProps = {
  exposures: ExposureCardProps[];
}

export const Dashboard = (props: DashboardProps) => {
  const l10n = useL10n();
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
        <h2>{l10n.getString("dashboard-exposures-area-headline")}</h2>
        <p>{l10n.getString("dashboard-exposures-area-description", {
          // TODO: Use real user data 
          exposures_total_num: 90, 
          data_breach_total_num: 15,
          data_broker_total_num: 75,
        })}</p>
        <ul className={styles.exposureList}>
          {props.exposures.map((exposure, index) => (
            <li key={index} className={styles.exposureListItem}>
              <ExposureCard {...exposure} />
            </li>
          ))}
        </ul>
        </section>
      </div>
    </ShellEl>
  );
};


