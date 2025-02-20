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
import React, { useState } from "react";
import {
  BackArrow,
  ClockIcon,
  OpenInNew,
} from "../../../../../../../../../components/server/Icons";
import { LatestOnerepScanData } from "../../../../../../../../../../db/tables/onerep_scans";
import { ExposureCardDataClassLayout } from "../../../../../../../../../components/client/exposure_card/ExposureCardDataClass";
import confetti from "canvas-confetti";
import { toast } from "react-toastify";
import fetchWithDelay from "../../../../../../../../../../utils/fetchWithDelay";
import { useRouter } from "next/navigation";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export type Props = {
  data: LatestOnerepScanData;
  stepDeterminationData: StepDeterminationData;
  subscriberEmails: string[];
  enabledFeatureFlags: FeatureFlagName[];
};

export const RemovalUnderMaintenanceView = (props: Props) => {
  const l10n = useL10n();
  const router = useRouter();
  const [detailedRemovalGuide, setDetailedRemovalGuide] = useState(false);
  const [firstScanResultNotResolved, setFirstScanResultNotResolved] = useState(
    props.data.results[0],
  );
  const [isLoadingNextDataBroker, setIsLoadingNextDataBroker] = useState(false);

  const nextGuidedStep = getNextGuidedStep(
    props.stepDeterminationData,
    props.enabledFeatureFlags,
    "DataBrokerManualRemoval",
  );

  // Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
  /* c8 ignore start */

  function moveToNextAvailableStep() {
    const currentResultIndex = props.data.results.findIndex(
      (result) =>
        result.onerep_scan_result_id ===
        firstScanResultNotResolved.onerep_scan_result_id,
    );

    if (currentResultIndex < props.data.results.length - 1) {
      // Move to the next unresolved result
      const nextUnresolvedResult = props.data.results[currentResultIndex + 1];
      setFirstScanResultNotResolved(nextUnresolvedResult);
    } else {
      // Redirect if no unresolved scan result remains
      router.push(nextGuidedStep.href);
      router.refresh();
    }
  }

  async function handleManualRemovalChange() {
    setIsLoadingNextDataBroker(true);
    try {
      const response = await fetchWithDelay(
        `/api/v1/user/scan-result/${firstScanResultNotResolved.onerep_scan_result_id}/resolution`,
        {
          method: "POST",
          credentials: "same-origin",
          delay: 750,
        },
      );

      if (!response.ok) {
        toast.error("Could not resolve data broker.");
        console.error(
          "Could not update next data broker with removal under maintenance status.",
        );
        return;
      }
      void confetti();

      // Mark the current scan result as manually resolved
      moveToNextAvailableStep();
    } catch (error) {
      console.error("Error occurred in handleManualRemovalChange:", error);
    } finally {
      setIsLoadingNextDataBroker(false);
    }
  }
  /* c8 ignore stop */

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
      <div
        className={`${styles.dataClassesList}
        ${isLoadingNextDataBroker ? styles.fadeOut : ""}
      `}
      >
        {exposureCategoriesArray.map((item) => (
          <React.Fragment key={item.key}>{item}</React.Fragment>
        ))}
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
          target="_blank"
          rel="noopener noreferrer"
        >
          {l10n.getString(
            "data-broker-removal-maintenance-cta-go-to-data-broker",
          )}
          <OpenInNew
            alt={l10n.getString("open-in-new-tab-alt")}
            width="13"
            height="13"
          />
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
      <p
        className={`${styles.header} ${isLoadingNextDataBroker ? styles.fadeOut : ""}`}
      >
        {l10n.getFragment("data-broker-removal-maintenance-header", {
          elems: {
            link_to_data_broker: (
              <TelemetryLink
                href={firstScanResultNotResolved.link}
                target="_blank"
                rel="noopener noreferrer"
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
          <dl>
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
          </dl>
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
          <dl>
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
          </dl>
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
        <BackArrow
          width="20"
          height="20"
          alt={l10n.getString(
            "data-broker-removal-guide-button-back-to-exposures",
          )}
        />
      </button>
      <p className={styles.headerRemovalGuide}>
        {l10n.getString("data-broker-removal-guide-header")}
      </p>
      <p>{l10n.getString("data-broker-removal-guide-top-section-para-1")}</p>
      <br />
      <p>{l10n.getString("data-broker-removal-guide-top-section-para-2")}</p>

      <div className={styles.removalContentSection}>
        <dl>
          <dt className={styles.removalGuideInstructions}>
            {l10n.getString("data-broker-removal-guide-step-1-header")}
          </dt>
          <dd>
            {l10n.getString("data-broker-removal-guide-step-1-body")}

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
          </dd>
        </dl>
      </div>

      <div className={styles.removalContentSection}>
        <dl>
          <dt className={styles.removalGuideInstructions}>
            {l10n.getString("data-broker-removal-guide-step-2-header")}
          </dt>
          <dd>
            {l10n.getString("data-broker-removal-guide-step-2-body-para-1")}
          </dd>
          <dd>
            {l10n.getString("data-broker-removal-guide-step-2-body-para-2")}
          </dd>
        </dl>
      </div>

      <div className={styles.removalContentSection}>
        <dl>
          <dt className={styles.removalGuideInstructions}>
            {l10n.getString("data-broker-removal-guide-step-3-header")}
          </dt>
          <dd>
            {l10n.getString("data-broker-removal-guide-step-3-body-para-1")}
          </dd>
          <dd>
            {l10n.getString("data-broker-removal-guide-step-3-body-para-2")}
          </dd>
        </dl>
      </div>

      <div className={styles.removalContentSection}>
        <dl>
          <dt className={styles.removalGuideInstructions}>
            {l10n.getString("data-broker-removal-guide-step-4-header")}
          </dt>
          <dd>{l10n.getString("data-broker-removal-guide-step-4-body")}</dd>
        </dl>
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
      nextStep={() => moveToNextAvailableStep()}
      currentSection="data-broker-profiles"
      data={props.stepDeterminationData}
      hideProgressIndicator={detailedRemovalGuide}
      hideNavClose={detailedRemovalGuide}
      hideNextNavigationRightArrow={detailedRemovalGuide}
      enabledFeatureFlags={props.enabledFeatureFlags}
    >
      {!detailedRemovalGuide ? dataBrokerInformation : removalGuideInstructions}
    </FixView>
  );
};
