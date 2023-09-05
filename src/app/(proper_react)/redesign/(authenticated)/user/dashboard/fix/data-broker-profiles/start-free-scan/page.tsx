/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCityScape from "./images/city-scape.svg";
import buttonStyles from "../../../../../../../../components/server/button.module.scss";
import styles from "../dataBrokerProfiles.module.scss";
import { useL10n } from "../../../../../../../../hooks/l10n";

export default function StartFreeScan() {
  const l10n = useL10n();

  return (
    <div className={styles.contentWrapper}>
      <Image className={styles.cityScape} src={ImageCityScape} alt="" />
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-headline"
          )}
        </h3>
        <p>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-content-p1",
            {
              data_broker_count: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </p>
        <p>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-content-p2"
          )}
          <a href="#">
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-link-learn-more"
            )}
          </a>
        </p>
      </div>
      <div className={styles.buttonsWrapper}>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.primary}`}
          href={
            "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers"
          }
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-button-start-scan"
          )}
        </Link>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.secondary}`}
          href={"/redesign/user/dashboard/fix/high-risk-data-breaches"}
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-button-skip"
          )}
        </Link>
      </div>
    </div>
  );
}
