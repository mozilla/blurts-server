/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Link from "next/link";
import buttonStyles from "../../../../../../../../components/server/button.module.scss";
import styles from "./welcomeToPremium.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { getLatestOnerepScan } from "../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";
import { DoughnutChart } from "../../../../../../../../components/client/Chart";

export default async function WelcomeToPremium() {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanResult = await getLatestOnerepScan(profileId);
  const scanResultItems = scanResult?.onerep_scan_results?.data ?? [];
  const countOfDataBrokerProfiles = scanResultItems.length;

  const chartData: Array<[string, number]> = [
    ["Exposure", 97],
    ["Other", 3],
  ];

  return (
    <>
      <div>
        <div className={`${styles.content}`}>
          <h4>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-title-part-one"
            )}
            <br />
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-title-part-two"
            )}
          </h4>
          <p>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-description-part-one",
              {
                profile_total_num: countOfDataBrokerProfiles,
                exposure_reduction_percentage: 90,
              }
            )}
          </p>
          <p>
            {l10n.getFragment(
              "welcome-to-premium-data-broker-profiles-description-part-two",
              {
                elems: {
                  link_to_info: (
                    <a href="/" target="_blank" rel="noopener noreferrer" />
                  ),
                },
              }
            )}
          </p>
          <p>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-description-part-three"
            )}
          </p>
        </div>
        <div className={styles.content}></div>
        <div className={styles.buttonsWrapper}>
          <Link
            className={`${buttonStyles.button} ${buttonStyles.primary}`}
            href="/redesign/user/dashboard/fix/high-risk-data-breaches"
          >
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-cta-label"
            )}
          </Link>
        </div>
      </div>
      <div>
        <DoughnutChart
          hasRunScan={true}
          data={chartData}
          isEligibleForFreeScan={true}
        />
      </div>
    </>
  );
}
