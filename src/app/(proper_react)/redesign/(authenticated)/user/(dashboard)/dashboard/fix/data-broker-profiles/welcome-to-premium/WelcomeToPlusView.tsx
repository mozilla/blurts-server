/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./welcomeToPlus.module.scss";
import { PercentageChart } from "../../../../../../../../../components/client/PercentageChart";
import {
  getDashboardSummary,
  getDataPointReduction,
} from "../../../../../../../../../functions/server/dashboard";
import { Button } from "../../../../../../../../../components/client/Button";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";
import { ExtendedReactLocalization } from "../../../../../../../../../hooks/l10n";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
  l10n: ExtendedReactLocalization;
};

export function WelcomeToPlusView(props: Props) {
  const l10n = props.l10n;

  const countOfDataBrokerProfiles =
    props.data.latestScanData?.results.length ?? 0;
  const summary = getDashboardSummary(
    props.data.latestScanData?.results ?? [],
    props.data.subscriberBreaches,
  );
  const dataPointReduction = getDataPointReduction(summary);

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
                exposure_reduction_percentage: dataPointReduction,
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
              href={getNextGuidedStep(props.data, "Scan").href}
              wide
            >
              {l10n.getString(
                "welcome-to-premium-data-broker-profiles-cta-label",
              )}
            </Button>
          </div>
        </div>
        <div className={styles.chart}>
          <PercentageChart exposureReduction={dataPointReduction} />
        </div>
      </div>
    </FixView>
  );
}
