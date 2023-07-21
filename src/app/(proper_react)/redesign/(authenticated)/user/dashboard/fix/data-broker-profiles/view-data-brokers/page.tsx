/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Link from "next/link";
import buttonStyles from "../../../../../../../../components/server/button.module.scss";
import styles from "../dataBrokerProfiles.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { DataBrokerProfiles } from "../../../../../../../../components/client/DataBrokerProfiles";
import iconQuestionMark from "./images/icon-question-mark.svg";
import { getLatestOnerepScan } from "../../../../../../../../../db/tables/onerep_scans";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { redirect } from "next/navigation";

export default async function ViewDataBrokers() {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanResult = await getLatestOnerepScan(profileId);
  const scanResultItems = scanResult?.onerep_scan_results?.data ?? [];

  // TODO: Use api to set/query count
  const countOfDataBrokerProfiles = scanResultItems.length;

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
        <h3 className={styles.questionTooltipWrapper}>
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-view-info-on-sites"
          )}
          <button className={styles.questionTooltip}>
            <Image alt="" src={iconQuestionMark} />
          </button>
        </h3>
        <DataBrokerProfiles data={scanResultItems} />
      </div>
      <div className={styles.buttonsWrapper}>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.primary}`}
          href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-for-me"
          )}
        </Link>
        <Link
          className={`${buttonStyles.button} ${buttonStyles.secondary}`}
          href={
            "/redesign/user/dashboard/fix/data-broker-profiles/manual-remove"
          }
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-manually"
          )}
        </Link>
      </div>
    </div>
  );
}
