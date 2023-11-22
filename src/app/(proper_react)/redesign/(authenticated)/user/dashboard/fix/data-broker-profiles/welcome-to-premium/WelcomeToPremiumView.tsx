/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./welcomeToPremium.module.scss";
import { getL10n } from "../../../../../../../../functions/server/l10n";
import { PercentageChart } from "../../../../../../../../components/client/PercentageChart";
import {
  getDashboardSummary,
  getExposureReduction,
} from "../../../../../../../../functions/server/dashboard";
import { Button } from "../../../../../../../../components/server/Button";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
};

export function WelcomeToPremiumView(props: Props) {
  const l10n = getL10n();

  const countOfDataBrokerProfiles =
    props.data.latestScanData?.results.length ?? 0;
  const summary = getDashboardSummary(
    props.data.latestScanData?.results ?? [],
    props.data.subscriberBreaches,
  );
  const exposureReduction = getExposureReduction(summary);

  return (
    <FixView
      data={props.data}
      subscriberEmails={props.subscriberEmails}
      nextStep={getNextGuidedStep(props.data, "Scan")}
      currentSection="data-broker-profiles"
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h3>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-title-part-one",
            )}
            <br />
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-title-part-two",
            )}
          </h3>
          <p>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-description-part-one",
              {
                profile_total_num: countOfDataBrokerProfiles,
                exposure_reduction_percentage: exposureReduction,
              },
            )}
          </p>
          <p>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-description-part-two",
            )}
          </p>
          <p>
            {l10n.getString(
              "welcome-to-premium-data-broker-profiles-description-part-three",
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
                "welcome-to-premium-data-broker-profiles-cta-label",
              )}
            </Button>
          </div>
        </div>
        <div className={styles.chart}>
          <PercentageChart exposureReduction={exposureReduction} />
        </div>
      </div>
    </FixView>
  );
}
