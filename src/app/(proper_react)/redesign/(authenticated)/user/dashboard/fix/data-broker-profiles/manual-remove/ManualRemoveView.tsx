/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import styles from "./ManualRemoveView.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import {
  AvatarIcon,
  ClockIcon,
} from "../../../../../../../../components/server/Icons";
import { LatestOnerepScanData } from "../../../../../../../../../db/tables/onerep_scans";
import { Button } from "../../../../../../../../components/server/Button";
import {
  getDashboardSummary,
  getExposureReduction,
} from "../../../../../../../../functions/server/dashboard";
import { SubscriberBreach } from "../../../../../../../../../utils/subscriberBreaches";
import { RemovalCard } from "./RemovalCard";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";

export type Props = {
  scanData: LatestOnerepScanData;
  breaches: SubscriberBreach[];
  isPremiumUser: boolean;
  user: Session["user"];
  countryCode: string;
  subscriberEmails: string[];
};

export function ManualRemoveView(props: Props) {
  const l10n = getL10n();

  const summary = getDashboardSummary(props.scanData.results, props.breaches);

  const countOfDataBrokerProfiles = props.scanData.results.length;
  const estimatedTime = countOfDataBrokerProfiles * 10; // 10 minutes per data broker site.
  const exposureReduction = getExposureReduction(summary);

  const data: StepDeterminationData = {
    countryCode: props.countryCode,
    latestScanData: props.scanData,
    subscriberBreaches: props.breaches,
    user: props.user,
  };

  const stepAfterSkip = getNextGuidedStep(data, "Scan");

  return (
    <FixView
      data={data}
      subscriberEmails={props.subscriberEmails}
      // In practice, there should always be a next step (at least "Done")
      /* c8 ignore next */
      nextStepHref={stepAfterSkip.href}
      currentSection="data-broker-profiles"
    >
      <div className={styles.main}>
        <div className={styles.content}>
          <h3>
            {l10n.getString(
              "fix-flow-data-broker-profiles-manual-remove-how-to-remove-headline",
            )}
          </h3>
          <ol className={styles.removalStepsList}>
            <li>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-title",
                )}
              </strong>
              <span>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-1-content",
                )}
              </span>
            </li>
            <li>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-title",
                )}
              </strong>
              <span>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-2-content",
                )}
              </span>
            </li>
            <li>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-title",
                )}
              </strong>
              <span>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-3-content",
                )}
              </span>
            </li>
            <li>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-title",
                )}
              </strong>
              <span>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-manual-remove-how-to-remove-step-4-content",
                )}
              </span>
            </li>
          </ol>
        </div>
        <div className={styles.exposureListing}>
          <h3 className={styles.questionTooltipWrapper}>
            {l10n.getString(
              "fix-flow-data-broker-profiles-manual-remove-review-profiles-headline",
            )}
          </h3>
          <div className={styles.exposureList}>
            {props.scanData.results.map((scanResult, index) => {
              return (
                <RemovalCard
                  key={scanResult.onerep_scan_result_id}
                  scanResult={scanResult}
                  isExpanded={index === 0}
                  isPremiumUser={props.isPremiumUser}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button
            variant="primary"
            href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-manual-remove-button-remove-for-me",
            )}
          </Button>
          <Button variant="secondary" href={stepAfterSkip.href}>
            {l10n.getString(
              "fix-flow-data-broker-profiles-manual-remove-button-skip",
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
    </FixView>
  );
}
