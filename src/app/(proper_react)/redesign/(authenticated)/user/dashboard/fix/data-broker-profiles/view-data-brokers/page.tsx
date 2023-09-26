/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "../dataBrokerProfiles.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { DataBrokerProfiles } from "../../../../../../../../components/client/DataBrokerProfiles";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";
import { AboutBrokersIcon } from "./AboutBrokersIcon";
import { Button } from "../../../../../../../../components/server/Button";

export default async function ViewDataBrokers() {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const latestScan = await getLatestOnerepScanResults(profileId);

  // TODO: Use api to set/query count
  const countOfDataBrokerProfiles = latestScan.results.length;

  return (
    <div>
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-headline",
            { data_broker_sites_results_num: countOfDataBrokerProfiles }
          )}
        </h3>
        <p>
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-content"
          )}
        </p>
      </div>
      <div className={styles.content}>
        <h4 className={styles.questionTooltipWrapper}>
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-view-info-on-sites"
          )}
          <AboutBrokersIcon />
        </h4>
        <DataBrokerProfiles data={latestScan.results} />
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          variant="primary"
          href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-for-me"
          )}
        </Button>
        <Button
          variant="secondary"
          href={
            "/redesign/user/dashboard/fix/data-broker-profiles/manual-remove"
          }
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-manually"
          )}
        </Button>
      </div>
    </div>
  );
}
