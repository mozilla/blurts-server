/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./welcomeToPremium.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";
import { PercentageChart } from "../../../../../../../../components/client/PercentageChart";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import {
  getDashboardSummary,
  getExposureReduction,
} from "../../../../../../../../functions/server/dashboard";
import { Button } from "../../../../../../../../components/server/Button";

export default async function WelcomeToPremium() {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] ?? -1;
  const scanResultItems =
    (await getLatestOnerepScanResults(profileId))?.results ?? [];
  const countOfDataBrokerProfiles = scanResultItems.length;
  const subBreaches = await getSubscriberBreaches(session.user);
  const summary = getDashboardSummary(scanResultItems, subBreaches);
  const exposureReduction = getExposureReduction(summary, scanResultItems);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "welcome-to-premium-data-broker-profiles-title-part-one"
          )}
          <br />
          {l10n.getString(
            "welcome-to-premium-data-broker-profiles-title-part-two"
          )}
        </h3>
        <p>
          {l10n.getString(
            "welcome-to-premium-data-broker-profiles-description-part-one",
            {
              profile_total_num: countOfDataBrokerProfiles,
              exposure_reduction_percentage: exposureReduction,
            }
          )}
        </p>
        <p>
          {l10n.getString(
            "welcome-to-premium-data-broker-profiles-description-part-two"
          )}
        </p>
        <p>
          {l10n.getString(
            "welcome-to-premium-data-broker-profiles-description-part-three"
          )}
        </p>
        <div className={styles.buttonsWrapper}>
          <Button
            variant="primary"
            href="/redesign/user/dashboard/fix/high-risk-data-breaches"
            disabled
            wide
          >
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-cta-label"
            )}
          </Button>
        </div>
      </div>
      <div className={styles.chart}>
        <PercentageChart exposureReduction={exposureReduction} />
      </div>
    </div>
  );
}
