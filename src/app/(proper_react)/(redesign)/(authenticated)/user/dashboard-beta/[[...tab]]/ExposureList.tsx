/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { memo, useCallback, useMemo, useState } from "react";
import styles from "./ExposureList.module.scss";
import {
  Exposure,
  ExposureCard,
  isScanResult,
} from "../../../../../../components/client/exposure_card/ExposureCard";
import { useL10n } from "../../../../../../hooks/l10n";
import { EnvironmentConstants } from "../../../../../../functions/server/getEnvironmentConstants";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { getLocale } from "../../../../../../functions/universal/getLocale";
import { hasPremium } from "../../../../../../functions/universal/user";
import { isEligibleForPremium } from "../../../../../../functions/universal/premium";
import { Button } from "../../../../../../components/client/Button";
import { getNextGuidedStep } from "../../../../../../functions/server/getRelevantGuidedSteps";
import type { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import {
  ExposuresFilter,
  FilterState,
} from "../../../../../../components/client/ExposuresFilter";
import { filterExposures } from "../../(dashboard)/dashboard/filterExposures";

export type Props = {
  session: Session;
  envConstants: EnvironmentConstants;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  countryCode: string;
  scanData: LatestOnerepScanData;
  userBreaches: SubscriberBreach[];
  removalTimeEstimates: DataBrokerRemovalTime[];
};

export const ExposureList = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [expandedExposueCardKey, setExpandedExposureCardKey] = useState<
    string | null
  >(null);

  const initialFilterState: FilterState = {
    exposureType: "show-all-exposure-type",
    dateFound: "show-all-date-found",
  };
  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  const nextGuidedStepHref = getNextGuidedStep(
    {
      user: props.session.user,
      countryCode: props.countryCode,
      latestScanData: props.scanData,
      subscriberBreaches: props.userBreaches,
    },
    props.enabledFeatureFlags,
  ).href;

  // Let `onToggleExpand` refer to the same function across renders,
  // so that it's not a changed prop that would cause <MemoizedExposureCard> to re-render.
  const onToggleExpand = useCallback(
    (key: string) => {
      if (key === expandedExposueCardKey) {
        setExpandedExposureCardKey(null);
        recordTelemetry("collapse", "click", {
          button_id: key,
        });
      } else {
        setExpandedExposureCardKey(key);
        recordTelemetry("expand", "click", {
          button_id: key,
        });
      }
    },
    [expandedExposueCardKey, recordTelemetry],
  );

  const resolutionCtaLabel = l10n.getString(
    "exposure-card-resolve-exposures-cta",
  );
  // Let `resolutionCta` refer to the same object across renders,
  // so that it's not a changed prop that would cause <MemoizedExposureCard> to re-render.
  const resolutionCta = useMemo(() => {
    return (
      <Button variant="primary" wide href={nextGuidedStepHref}>
        {resolutionCtaLabel}
      </Button>
    );
  }, [nextGuidedStepHref, resolutionCtaLabel]);

  const exposures = filterExposures(
    (props.userBreaches as Exposure[]).concat(props.scanData.results),
    filters,
  );
  return (
    <div className={styles.wrapper}>
      <ExposuresFilter
        experimentData={props.experimentData}
        enabledFeatureFlags={props.enabledFeatureFlags}
        initialFilterValues={initialFilterState}
        filterValues={filters}
        setFilterValues={setFilters}
        isEligibleForPremium={isEligibleForPremium(props.countryCode)}
        isPlusSubscriber={hasPremium(props.session.user)}
      />
      <ul className={styles.exposureList}>
        {exposures.map((exposure) => {
          const exposureCardKey = isScanResult(exposure)
            ? "data_broker_card_" + exposure.onerep_scan_result_id
            : "data_breach_card_" + exposure.id;
          const removalTimeEstimate = isScanResult(exposure)
            ? props.removalTimeEstimates.find(
                ({ d }) => d === exposure.data_broker,
              )
            : undefined;
          return (
            <li key={exposureCardKey}>
              <MemoizedExposureCard
                experimentData={props.experimentData}
                enabledFeatureFlags={props.enabledFeatureFlags}
                removalTimeEstimate={removalTimeEstimate?.t}
                exposureData={exposure}
                isExpanded={exposureCardKey === expandedExposueCardKey}
                onToggleExpanded={onToggleExpand}
                id={exposureCardKey}
                locale={getLocale(l10n)}
                isPremiumUser={hasPremium(props.session.user)}
                isEligibleForPremium={isEligibleForPremium(props.countryCode)}
                resolutionCta={resolutionCta}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Ensure that ExposureCard doesn't get re-rendered whenever ExposureList re-renders.
// The main use case is when expanding a single card (and collapsing another);
// without memoization, that can get slow with a larger number of cards.
const MemoizedExposureCard = memo(ExposureCard);
