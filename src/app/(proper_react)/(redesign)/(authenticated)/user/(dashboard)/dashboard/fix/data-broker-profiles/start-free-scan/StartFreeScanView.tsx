/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import ImageCityScape from "./images/city-scape.svg";
import styles from "../dataBrokerProfiles.module.scss";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { FixView } from "../../FixView";
import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import {
  CONST_URL_SUMO_HOW_IT_WORKS,
  CONST_ONEREP_DATA_BROKER_COUNT,
} from "../../../../../../../../../../constants";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { TelemetryLink } from "../../../../../../../../../components/client/TelemetryLink";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export type Props = {
  data: StepDeterminationData;
  subscriberEmails: string[];
  enabledFeatureFlags: FeatureFlagName[];
};

export function StartFreeScanView(props: Props) {
  const l10n = useL10n();

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
      <div className={styles.contentWrapper}>
        <Image className={styles.cityScape} src={ImageCityScape} alt="" />
        <div className={styles.content}>
          <h3>
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-headline",
            )}
          </h3>
          <p>
            {/* c8 ignore next 3 */}
            {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
              ? l10n.getString(
                  "fix-flow-data-broker-profiles-start-free-scan-content-p1-masked",
                )
              : l10n.getString(
                  "fix-flow-data-broker-profiles-start-free-scan-content-p1",
                  {
                    data_broker_count: CONST_ONEREP_DATA_BROKER_COUNT,
                  },
                )}
          </p>
          <p>
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-content-p2",
            )}{" "}
            <TelemetryLink
              href={CONST_URL_SUMO_HOW_IT_WORKS}
              target="_blank"
              eventData={{
                link_id: "returning_user_info_scan_learn_more",
              }}
            >
              {l10n.getString(
                "fix-flow-data-broker-profiles-start-free-scan-link-learn-more",
              )}
            </TelemetryLink>
          </p>
        </div>
        <div className={styles.buttonsWrapper}>
          <TelemetryButton
            variant="primary"
            href="/user/welcome/free-scan?referrer=fix"
            event={{
              module: "ctaButton",
              name: "click",
              data: {
                button_id: "intent_to_start_free_scan",
              },
            }}
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-button-start-scan",
            )}
          </TelemetryButton>
          <TelemetryButton
            variant="secondary"
            href={
              getNextGuidedStep(props.data, props.enabledFeatureFlags, "Scan")
                .href
            }
            event={{
              module: "button",
              name: "click",
              data: {
                button_id: "skipped_free_scan",
              },
            }}
          >
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-button-skip",
            )}
          </TelemetryButton>
        </div>
      </div>
    </FixView>
  );
}
