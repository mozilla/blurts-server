/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "../dataBrokerProfiles.module.scss";
import { DataBrokerProfiles } from "../../../../../../../../../components/client/DataBrokerProfiles";
import { AboutBrokersIcon } from "./AboutBrokersIcon";
import { FixView } from "../../FixView";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { ExtendedReactLocalization } from "../../../../../../../../../functions/l10n";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export const ViewDataBrokersView = (props: Props) => {
  const l10n = props.l10n;

  const countOfDataBrokerProfiles =
    props.data.latestScanData?.results.length ?? 0;

  return (
    <FixView
      data={props.data}
      subscriberEmails={props.subscriberEmails}
      nextStep={getNextGuidedStep(
        props.data,
        props.enabledFeatureFlags,
        "Scan",
      )}
      currentSection="data-broker-profiles"
      enabledFeatureFlags={props.enabledFeatureFlags}
    >
      <div>
        <div className={styles.content}>
          <h3>
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-headline",
              { data_broker_sites_results_num: countOfDataBrokerProfiles },
            )}
          </h3>
          <p>
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-content",
            )}
          </p>
        </div>
        <div className={styles.content}>
          <h4 className={styles.questionTooltipWrapper}>
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-view-info-on-sites",
            )}
            <AboutBrokersIcon />
          </h4>
          <DataBrokerProfiles data={props.data.latestScanData?.results ?? []} />
        </div>
        <div className={styles.buttonsWrapper}>
          <TelemetryButton
            variant="primary"
            href="/subscription-plans"
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "guided_experience_upsell",
              },
            }}
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-for-me",
            )}
          </TelemetryButton>
          <TelemetryButton
            variant="secondary"
            href="/user/dashboard/fix/data-broker-profiles/manual-remove"
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "guided_experience_remove_manually",
              },
            }}
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-manually",
            )}
          </TelemetryButton>
        </div>
      </div>
    </FixView>
  );
};
