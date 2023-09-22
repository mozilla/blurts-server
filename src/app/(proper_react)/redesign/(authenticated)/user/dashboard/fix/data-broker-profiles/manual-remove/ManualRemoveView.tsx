/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "../dataBrokerProfiles.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import {
  AvatarIcon,
  ClockIcon,
} from "../../../../../../../../components/server/Icons";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getSubscriberBreaches } from "../../../../../../../../functions/server/getUserBreaches";
import { Button } from "../../../../../../../../components/server/Button";
import {
  getDashboardSummary,
  getExposureReduction,
} from "../../../../../../../../functions/server/dashboard";

export default async function ManualRemoveView() {
  const l10n = getL10n();

  const session = await getServerSession(authOptions);

  if (!session?.user?.subscriber?.id) {
    redirect("/redesign/user/dashboard/");
  }
  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanResult = await getLatestOnerepScanResults(profileId);
  const scanResultItems = scanResult.results;
  const subBreaches = await getSubscriberBreaches(session.user);
  const summary = getDashboardSummary(scanResultItems, subBreaches);

  // TODO: Use api to set/query count
  const countOfDataBrokerProfiles = scanResultItems.length;
  const estimatedTime = countOfDataBrokerProfiles * 10; // 10 minutes per data broker site.
  const exposureReduction = getExposureReduction(summary, scanResultItems);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-how-to-remove-headline"
          )}
        </h3>
        <ol className={styles.removalStepsList}>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-content"
              )}
            </span>
          </li>
          <li>
            <strong>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-title"
              )}
            </strong>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-content"
              )}
            </span>
          </li>
        </ol>
      </div>
      <div className={styles.content}>
        <h3 className={styles.questionTooltipWrapper}>
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-review-profiles-headline"
          )}
        </h3>
        {/* TODO: Add exposure cards table as seen on the dashboard */}
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          variant="primary"
          href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-button-remove-for-me"
          )}
        </Button>
        <Button
          variant="secondary"
          href="/" // TODO: MNTOR-1700 Add routing logic here
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-manual-remove-button-skip"
          )}
        </Button>
      </div>
      <div className={styles.dataBrokerResolutionStats}>
        <div>
          <ClockIcon width="18" height="18" alt="" />
          {l10n.getString("data-broker-profiles-estimated-time", {
            estimated_time: estimatedTime,
          })}
        </div>
        <div>
          <AvatarIcon width="18" height="18" alt="" />
          {l10n.getString("data-broker-profiles-exposure-reduction", {
            exposure_reduction: exposureReduction,
          })}
        </div>
      </div>
    </div>
  );
}
