/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  StepDeterminationData,
  getNextGuidedStep,
} from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { FixView } from "../../FixView";
import styles from "./RemovalUnderMaintenance.module.scss";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { TelemetryLink } from "../../../../../../../../../components/client/TelemetryLink";
import { TelemetryButton } from "../../../../../../../../../components/client/TelemetryButton";
import { CONST_URL_SUMO_MANUAL_REMOVAL } from "../../../../../../../../../../constants";
import React, { useEffect, useState } from "react";
import {
  BackArrow,
  ClockIcon,
} from "../../../../../../../../../components/server/Icons";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";
import { ExposureCardDataClassLayout } from "../../../../../../../../../components/client/exposure_card/ExposureCardDataClass";
import confetti from "canvas-confetti";
import { OnerepScanResultRow } from "knex/types/tables";

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
  const [isLoadingNextDataBroker, setIsLoadingNextDataBroker] = useState(false);
  const [fadeState, setFadeState] = useState<"fadeIn" | "fadeOut" | "">("");

  const nextGuidedStep = getNextGuidedStep(
    props.stepDeterminationData,
    "DataBrokerManualRemoval",
  );

  const [nextScanResultNotResolved, setNextScanResultNotResolved] = useState<
    OnerepScanResultRow | undefined
  >();

  const updateDataBrokerWithTimeout = () => {
    setIsLoadingNextDataBroker(true);
    setFadeState("fadeOut");

    setTimeout(() => {
      setIsLoadingNextDataBroker(false);
      void confetti();

      // Trigger the next unresolved scan result after the timeout
      const nextUnresolved = props.data.results.find(
        (scanResult) => !scanResult.manually_resolved,
      );
      setNextScanResultNotResolved(nextUnresolved);

      // Redirect if no unresolved scan result remains
      if (!nextUnresolved) {
        window.location.href = nextGuidedStep.href;
      }

      setFadeState("fadeIn"); // trigger the fade-in for the next scan result
    }, 2000);
  };

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

    // Mark the current scan result as manually resolved
    firstScanResultNotResolved.manually_resolved = true;

    // Trigger the timeout update
    updateDataBrokerWithTimeout();
  }

  // Effect to update the current unresolved scan result when `nextScanResultNotResolved` changes
  useEffect(() => {
    if (nextScanResultNotResolved) {
      setFirstScanResultNotResolved(nextScanResultNotResolved);
    }
  }, [nextScanResultNotResolved]);

  const exposureCategoriesArray: React.ReactElement[] = [];
  if (firstScanResultNotResolved.relatives.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={firstScanResultNotResolved}
        key="relatives"
        dataBrokerDataType="relatives"
        label={l10n.getString("exposure-card-family-members")}
        count={firstScanResultNotResolved.relatives.length}
        isPremiumUser={true}
      />,
    );
  }
  if (firstScanResultNotResolved.phones.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={firstScanResultNotResolved}
        key="phones"
        dataBrokerDataType="phones"
        label={l10n.getString("exposure-card-phone-number")}
        count={firstScanResultNotResolved.phones.length}
        isPremiumUser={true}
      />,
    );
  }
  if (firstScanResultNotResolved.emails.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={firstScanResultNotResolved}
        key="emails"
        dataBrokerDataType="emails"
        label={l10n.getString("exposure-card-email")}
        count={firstScanResultNotResolved.emails.length}
        isPremiumUser={true}
      />,
    );
  }
  if (firstScanResultNotResolved.addresses.length > 0) {
    exposureCategoriesArray.push(
      <ExposureCardDataClassLayout
        exposure={firstScanResultNotResolved}
        key="addresses"
        dataBrokerDataType="addresses"
        label={l10n.getString("exposure-card-address")}
        count={firstScanResultNotResolved.addresses.length}
        isPremiumUser={true}
      />,
    );
  }

  const dataBrokerCard = (
    <div
      className={styles.exposureCard}
      aria-label={firstScanResultNotResolved.data_broker}
    >
      <div className={`${styles.fadeTransition} ${styles[fadeState]}`}>
        <div className={styles.dataClassesList}>
          {exposureCategoriesArray.map((item) => (
            <React.Fragment key={item.key}>{item}</React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.buttonsWrapper}>
        <TelemetryButton
          variant="primary"
          href={firstScanResultNotResolved.link}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: `go_to_${firstScanResultNotResolved.data_broker}_link_to_get_started`,
            },
          }}
        >
          {l10n.getString(
            "data-broker-removal-maintenance-cta-go-to-data-broker",
          )}
        </TelemetryButton>
        <TelemetryButton
          variant="secondary"
          isLoading={isLoadingNextDataBroker}
          onPress={() => void handleManualRemovalChange()}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: `data_broker_removal_mark_as_resolved`,
            },
          }}
        >
          {l10n.getString(
            "data-broker-removal-maintenance-cta-mark-as-resolved",
          )}
        </TelemetryButton>
      </div>
      <div className={styles.estimatedTime}>
        <ClockIcon width="15" height="15" alt="" />
        {l10n.getString("data-broker-removal-maintenance-estimated-time", {
          range: "5 - 10",
        })}
      </div>
    </div>
  );

  const dataBrokerInformation = (
    <div className={styles.dataBrokerInformationWrapper}>
      <p className={styles.header}>
        {l10n.getFragment("data-broker-removal-maintenance-header", {
          elems: {
            link_to_data_broker: (
              <TelemetryLink
                className={styles[fadeState]}
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
        {dataBrokerCard}
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
