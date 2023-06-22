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

  const [selectCta, isSelectedCta] = useState(false);

  const letsFixDataContent = {
    headline: "Let's protect your data",
    description: "We found your data in 15 data breaches and 157 sites selling your personal info. We'll guide you on how to fix it.",
    cta: "Let's fix it",
  }

  const dataBrokerScanUpsellContent = {
    headline: "Monitor now protects you even more",
    description: "We can now find exposures of your personal info on 190 data broker sites that publish and sell your personal info for a profit.",
    cta: "Get first scan free",
  }

  return (
    <ShellEl l10n={getL10n()} session={null}>

      <div className={styles.container}>
      <DashboardTopBanner 
        headline={letsFixDataContent.headline} 
        description={letsFixDataContent.description} 
        chart={<></>} 
        cta={{
           content: letsFixDataContent.cta,
           onClick() {
             selectCta
           },
        }
        }
      />

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
      
      </div>

    </ShellEl>
  );
}

