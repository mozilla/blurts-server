/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "../dataBrokerProfiles.module.scss";
import { DataBrokerProfiles } from "../../../../../../../../../components/client/DataBrokerProfiles";
import { AboutBrokersIcon } from "./AboutBrokersIcon";
import { Button } from "../../../../../../../../../components/client/Button";
import { FixView } from "../../FixView";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { ExtendedReactLocalization } from "../../../../../../../../../hooks/l10n";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
  l10n: ExtendedReactLocalization;
};

export const ViewDataBrokersView = (props: Props) => {
  const l10n = props.l10n;

  const countOfDataBrokerProfiles =
    props.data.latestScanData?.results.length ?? 0;

  return (
    <FixView
      data={props.data}
      subscriberEmails={props.subscriberEmails}
      nextStep={getNextGuidedStep(props.data, "Scan")}
      currentSection="data-broker-profiles"
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
          <Button
            variant="primary"
            href="/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-for-me",
            )}
          </Button>
          <Button
            variant="secondary"
            href={
              "/redesign/user/dashboard/fix/data-broker-profiles/manual-remove"
            }
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-button-remove-manually",
            )}
          </Button>
        </div>
      </div>
    </FixView>
  );
};
