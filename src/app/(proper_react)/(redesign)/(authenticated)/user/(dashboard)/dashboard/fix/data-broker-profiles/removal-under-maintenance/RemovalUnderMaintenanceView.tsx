/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";
import { DataBrokerRemovalMaintenance } from "./DataBrokerRemovalMaintenance";
import styles from "./RemovalUnderMaintenance.module.scss";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { TelemetryLink } from "../../../../../../../../../components/client/TelemetryLink";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { CONST_URL_SUMO_MANUAL_REMOVAL } from "../../../../../../../../../../constants";
import { useState } from "react";
import { BackArrow } from "../../../../../../../../../components/server/Icons";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";

export type Props = {
  data: LatestOnerepScanData;
  stepDeterminationData: StepDeterminationData;
  subscriberEmails: string[];
};

export const RemovalUnderMaintenanceView = (props: Props) => {
  const l10n = useL10n();
  const [detailedRemovalGuide, setDetailedRemovalGuide] = useState(false);
  const [firstScanResultNotResolved, setFirstScanResultNotResolved] = useState(
    props.data.results[0],
  );
  const nextGuidedStep = getNextGuidedStep(
    props.stepDeterminationData,
    "DataBrokerManualRemoval",
  );

  async function handleManualRemovalChange() {
    const response = await fetch(
      `/api/v1/user/scan-result/${firstScanResultNotResolved.onerep_scan_result_id}/resolution`,
      {
        method: "POST",
        credentials: "same-origin",
      },
    );

    if (!response.ok) {
      console.error(
        "Could not update next data broker with removal under maintenance status.",
      );
      return;
    }

    // Mannualy move to next step in response works
    firstScanResultNotResolved.manually_resolved = true;

    // Find the next unresolved scan result
    const nextScanResultNotResolved = props.data.results.find(
      (scanResult) => !scanResult.manually_resolved,
    );

    // Update the state to the next unresolved scan result
    if (nextScanResultNotResolved) {
      setFirstScanResultNotResolved(nextScanResultNotResolved);
    }

    // Move to the next step
    else {
      window.location.href = nextGuidedStep.href;
    }
  }
  const dataBrokerInformation = (
    <div className={styles.dataBrokerInformationWrapper}>
      <p className={styles.header}>
        {l10n.getFragment("data-broker-removal-maintenance-header", {
          elems: {
            link_to_data_broker: (
              <TelemetryLink
                href={firstScanResultNotResolved.link}
                target="_blank"
                eventData={{
                  link_id: `go_to_${firstScanResultNotResolved.data_broker}_link`,
                }}
              />
            ),
          },
          vars: {
            data_broker_name: firstScanResultNotResolved.data_broker,
          },
        })}
      </p>
      <div className={styles.exposureCardWrapper}>
        <DataBrokerRemovalMaintenance
          scanResult={firstScanResultNotResolved}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onMarkAsResolved={() => {
            handleManualRemovalChange().catch((error) => {
              console.error("Error during manual removal change:", error);
            });
          }}
        />
        <div className={styles.removalContentSection}>
          <dt>
            {l10n.getString(
              "data-broker-removal-maintenance-steps-to-remove-header",
            )}
          </dt>
          <dd>
            <ol>
              <li>
                {l10n.getString(
                  "data-broker-removal-maintenance-steps-to-remove-header-step-one",
                )}
              </li>
              <li>
                {l10n.getString(
                  "data-broker-removal-maintenance-steps-to-remove-header-step-two",
                )}
              </li>
            </ol>
          </dd>
          <TelemetryButton
            variant="link"
            onPress={() => setDetailedRemovalGuide(true)}
            event={{
              module: "button",
              name: "click",
              data: {
                button_id: "view_removal_instructions",
              },
            }}
          >
            {l10n.getString(
              "data-broker-removal-maintenance-steps-to-remove-view-more-link",
            )}
          </TelemetryButton>
        </div>

        <div className={styles.removalContentSection}>
          <dt>
            {l10n.getString(
              "data-broker-removal-maintenance-steps-to-remove-header",
            )}
          </dt>
          <dd>
            {l10n.getFragment(
              "data-broker-removal-maintenance-rationale-answer",
              {
                elems: {
                  learn_about_data_exposure_link: (
                    <TelemetryLink
                      href={CONST_URL_SUMO_MANUAL_REMOVAL}
                      target="_blank"
                      eventData={{
                        link_id: "learn_more_about_data_broker_removal",
                      }}
                    />
                  ),
                },
              },
            )}
          </dd>
        </div>
      </div>
    </div>
  );

  const removalGuideInstructions = (
    <div className={styles.removalGuideInstructionsWrapper}>
      <button
        onClick={() => {
          setDetailedRemovalGuide(!detailedRemovalGuide);
        }}
        className={styles.backArrow}
      >
        <BackArrow width="20" height="20" alt="" />
      </button>
      <p className={styles.headerRemovalGuide}>
        {l10n.getString("data-broker-removal-guide-header")}
      </p>
      <p>{l10n.getString("data-broker-removal-guide-top-section-para-1")}</p>
      <br />
      <p>{l10n.getString("data-broker-removal-guide-top-section-para-2")}</p>

      <div className={styles.removalContentSection}>
        <dt className={styles.removalGuideInstructions}>
          {l10n.getString("data-broker-removal-guide-step-1-header")}
        </dt>
        <dd>{l10n.getString("data-broker-removal-guide-step-1-body")}</dd>
        <ul>
          <li>
            {l10n.getString("data-broker-removal-guide-step-1-list-item-1")}
          </li>
          <li>
            {l10n.getString("data-broker-removal-guide-step-1-list-item-2")}
          </li>
          <li>
            {l10n.getString("data-broker-removal-guide-step-1-list-item-3")}
          </li>
          <li>
            {l10n.getString("data-broker-removal-guide-step-1-list-item-4")}
          </li>
        </ul>
      </div>

      <div className={styles.removalContentSection}>
        <dt className={styles.removalGuideInstructions}>
          {l10n.getString("data-broker-removal-guide-step-2-header")}
        </dt>
        <dd>
          {l10n.getString("data-broker-removal-guide-step-2-body-para-1")}
        </dd>
        <dd>
          {l10n.getString("data-broker-removal-guide-step-2-body-para-2")}
        </dd>
      </div>

      <div className={styles.removalContentSection}>
        <dt className={styles.removalGuideInstructions}>
          {l10n.getString("data-broker-removal-guide-step-3-header")}
        </dt>
        <dd>
          {l10n.getString("data-broker-removal-guide-step-3-body-para-1")}
        </dd>
        <dd>
          {l10n.getString("data-broker-removal-guide-step-3-body-para-2")}
        </dd>
      </div>

      <div className={styles.removalContentSection}>
        <dt className={styles.removalGuideInstructions}>
          {l10n.getString("data-broker-removal-guide-step-4-header")}
        </dt>
        <dd>{l10n.getString("data-broker-removal-guide-step-4-body")}</dd>
      </div>

      <div className={styles.buttonWrapper}>
        <TelemetryButton
          onPress={() => setDetailedRemovalGuide(!detailedRemovalGuide)}
          variant="primary"
          event={{
            module: "button",
            name: "click",
            data: {
              button_id: "return_to_data_broker",
            },
          }}
        >
          {l10n.getString("data-broker-removal-guide-button-back-to-exposures")}
        </TelemetryButton>
      </div>
    </div>
  );

  return (
    <FixView
      subscriberEmails={props.subscriberEmails}
      nextStep={nextGuidedStep}
      currentSection="data-broker-profiles"
      data={props.stepDeterminationData}
      hideProgressIndicator={detailedRemovalGuide}
      hideNavClose={detailedRemovalGuide}
      hideNextNavigationRightArrow={detailedRemovalGuide}
    >
      {!detailedRemovalGuide ? dataBrokerInformation : removalGuideInstructions}
    </FixView>
  );
};
