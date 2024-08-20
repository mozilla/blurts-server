/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import styles from "./welcomeToPlus.module.scss";
import { PercentageChart } from "../../../../../../../../../components/client/PercentageChart";
import {
  getDashboardSummary,
  getDataPointReduction,
} from "../../../../../../../../../functions/server/dashboard";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";
import { ExtendedReactLocalization } from "../../../../../../../../../functions/l10n";
import noBreachesIllustration from "../../images/high-risk-breaches-none.svg";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../../../../../../../../constants";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { TelemetryLink } from "../../../../../../../../../components/client/TelemetryLink";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export function WelcomeToPlusView(props: Props) {
  const l10n = props.l10n;

  const scanResultsInProgress =
    props.data.latestScanData?.results.filter(
      (result) => !result.manually_resolved && result.status !== "removed",
    ) ?? [];
  const scanResultsInProgressCount = scanResultsInProgress.length;
  const hasRelevantScanResults = scanResultsInProgressCount > 0;
  const summary = getDashboardSummary(
    scanResultsInProgress,
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
            {hasRelevantScanResults && (
              <>
                <br />
                {l10n.getString(
                  "welcome-to-premium-data-broker-profiles-title-part-two",
                )}
              </>
            )}
          </h3>
          <p>
            {hasRelevantScanResults
              ? /* c8 ignore next 14 */
                // As the `SetExpectationsForUsers` feature flag is removed, the
                // branch will be covered again:
                l10n.getFragment(
                  props.enabledFeatureFlags.includes("SetExpectationsForUsers")
                    ? "welcome-to-premium-data-broker-profiles-description-part-one"
                    : "welcome-to-premium-data-broker-profiles-description-part-one-deprecated",
                  {
                    vars: {
                      profile_total_num: scanResultsInProgressCount,
                      exposure_reduction_percentage: dataPointReduction,
                    },
                    elems: { b: <b /> },
                  },
                )
              : l10n.getString(
                  "welcome-to-premium-data-broker-profiles-zero-state-description-part-one",
                  {
                    data_broker_count: CONST_ONEREP_DATA_BROKER_COUNT,
                  },
                )}
          </p>
          <p>
            {hasRelevantScanResults
              ? /* c8 ignore next 23 */
                // As the `SetExpectationsForUsers` feature flag is removed, the
                // branch will be covered again:
                !props.enabledFeatureFlags.includes(
                  "SetExpectationsForUsers",
                ) &&
                l10n.getFragment(
                  "welcome-to-premium-data-broker-profiles-description-part-two",
                  {
                    elems: {
                      how_it_works_link: (
                        <TelemetryLink
                          href="/how-it-works"
                          className={styles.howItWorksLink}
                          target="_blank"
                          eventData={{
                            link_id: "explanation_of_removal_time",
                          }}
                        />
                      ),
                    },
                  },
                )
              : l10n.getString(
                  "welcome-to-premium-data-broker-profiles-zero-state-description-part-two",
                )}
          </p>
          <p>
            {hasRelevantScanResults
              ? l10n.getString(
                  "welcome-to-premium-data-broker-profiles-description-part-three",
                )
              : l10n.getString(
                  "welcome-to-premium-data-broker-profiles-zero-state-description-part-three",
                )}
          </p>
          <div className={styles.buttonsWrapper}>
            <TelemetryButton
              variant="primary"
              href={getNextGuidedStep(props.data, "Scan").href}
              wide
              event={{
                module: "ctaButton",
                name: "click",
                data: {
                  button_id: "guided_experience_progress",
                },
              }}
            >
              {l10n.getString(
                "welcome-to-premium-data-broker-profiles-cta-label",
              )}
            </TelemetryButton>
          </div>
        </div>
        {hasRelevantScanResults ? (
          <div className={styles.chart}>
            <PercentageChart
              exposureReduction={dataPointReduction}
              enabledFeatureFlags={props.enabledFeatureFlags}
            />
          </div>
        ) : (
          <div
            className={`${styles.illustrationWrapper} ${styles.hideOnMobile}`}
          >
            <Image src={noBreachesIllustration} alt="" />
          </div>
        )}
      </div>
    </FixView>
  );
}
