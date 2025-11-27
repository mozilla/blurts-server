/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../../components/client/toolbar/Toolbar";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../../../../../../hooks/l10n";
import { ExposureCard } from "../../../../../../components/client/exposure_card/ExposureCard";
import {
  ExposuresFilter,
  FilterState,
} from "../../../../../../components/client/ExposuresFilter";
import { getDashboardSummary } from "../../../../../../functions/server/dashboard";
import { getExposureStatus } from "../../../../../../components/server/StatusPill";
import { TabList } from "../../../../../../components/client/TabList";
import { filterExposures } from "./filterExposures";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { hasPremium } from "../../../../../../functions/universal/user";
import type { LatestOnerepScanData } from "../../../../../../../db/tables/onerep_scans";
import { getLocale } from "../../../../../../functions/universal/getLocale";
import { Button } from "../../../../../../components/client/Button";

import NoExposuresIllustration from "./images/dashboard-no-exposures.svg";
import { CountryCodeContext } from "../../../../../../../contextProviders/country-code";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { getNextGuidedStep } from "../../../../../../functions/server/getRelevantGuidedSteps";
import { CsatSurvey } from "../../../../../../components/client/csat_survey/CsatSurvey";
import { WaitlistDialog } from "../../../../../../components/client/SubscriberWaitlistDialog";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import {
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_ONEREP_MAX_SCANS_THRESHOLD,
} from "../../../../../../../constants";
import { ExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { DataBrokerRemovalTime } from "../../../../../../functions/server/getDataBrokerRemovalTimeEstimates";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";
import { parseIso8601Datetime } from "../../../../../../../utils/parse";
import { PlusShutdownBanner } from "../../../../../../components/client/PlusShutdownBanner";
import { ShutdownState } from "../../../../../../functions/server/getPlusShutdownState";

export type TabType = "action-needed" | "fixed";

export type Props = {
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
  user: Session["user"];
  userBreaches: SubscriberBreach[];
  userScanData: LatestOnerepScanData;
  countryCode: string;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  monthlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    monthly: number;
  };
  shutdownState: ShutdownState;
  fxaSettingsUrl: string;
  scanCount: number;
  isNewUser: boolean;
  hasFirstMonitoringScan: boolean;
  elapsedTimeInDaysSinceInitialScan?: number;
  totalNumberOfPerformedScans?: number;
  activeTab: TabType;
  signInCount: number | null;
  removalTimeEstimates: DataBrokerRemovalTime[];
  userAnnouncements: UserAnnouncementWithDetails[];
};

export type TabData = {
  name: string;
  key: TabType;
};

export const View = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const countryCode = useContext(CountryCodeContext);
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<TabType>(props.activeTab);

  const [announcements, setAnnouncements] = useState<
    UserAnnouncementWithDetails[] | null
  >(props.userAnnouncements);
  useEffect(() => {
    setAnnouncements(props.userAnnouncements);
    const nextPathname = `/user/dashboard/${activeTab}`;
    if (pathname !== nextPathname) {
      // Directly interacting with the history API is recommended by Next.js to
      // avoid re-rendering on the server:
      // See https://github.com/vercel/next.js/discussions/48110#discussioncomment-7563979.
      window.history.replaceState(null, "", nextPathname);
    }
  }, [pathname, activeTab, props.userAnnouncements]);

  const initialFilterState: FilterState = {
    exposureType: "show-all-exposure-type",
    dateFound: "show-all-date-found",
  };
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [activeExposureCardKey, setActiveExposureCardKey] = useState<
    string | null
  >(null);
  const tabsData: TabData[] = [
    {
      name: l10n.getString("dashboard-tab-label-action-needed"),
      key: "action-needed",
    },
    {
      name: l10n.getString("dashboard-tab-label-fixed"),
      key: "fixed",
    },
  ];

  const breachesDataArray = props.userBreaches.flat();

  // Merge exposure cards

  // Sort in descending order
  const arraySortedByDate = breachesDataArray.sort((a, b) => {
    const dateA = a.addedDate;
    const dateB = b.addedDate;

    const timestampA = dateA.getTime();
    const timestampB = dateB.getTime();

    return timestampB - timestampA;
  });

  const getTabSpecificExposures = (tabKey: TabType) =>
    arraySortedByDate.filter((exposure: SubscriberBreach) => {
      const exposureStatus = getExposureStatus(exposure);

      return (
        (tabKey === "action-needed" && exposureStatus === "actionNeeded") ||
        (tabKey === "fixed" && exposureStatus !== "actionNeeded")
      );
    });

  const tabSpecificExposures = getTabSpecificExposures(activeTab);
  const filteredExposures = filterExposures(tabSpecificExposures, filters);
  const exposureCardElems = filteredExposures.map(
    (exposure: SubscriberBreach) => {
      const exposureCardKey = "breach-" + exposure.id;

      return (
        <li key={exposureCardKey} className={styles.exposureListItem}>
          <ExposureCard
            experimentData={props.experimentData}
            enabledFeatureFlags={props.enabledFeatureFlags}
            exposureData={exposure}
            isExpanded={exposureCardKey === activeExposureCardKey}
            onToggleExpanded={() => {
              if (exposureCardKey === activeExposureCardKey) {
                setActiveExposureCardKey(null);
                recordTelemetry("collapse", "click", {
                  button_id: `data_breach_card_${exposure.id}`,
                });
              } else {
                setActiveExposureCardKey(exposureCardKey);
                recordTelemetry("expand", "click", {
                  button_id: `data_breach_card_${exposure.id}`,
                });
              }
            }}
            locale={getLocale(l10n)}
            isPremiumUser={hasPremium(props.user)}
            isEligibleForPremium={props.isEligibleForPremium}
            resolutionCta={
              <Button
                variant="primary"
                wide
                href={
                  getNextGuidedStep(
                    {
                      user: props.user,
                      countryCode,
                      subscriberBreaches: props.userBreaches,
                    },
                    props.enabledFeatureFlags,
                  ).href
                }
              >
                {l10n.getString("exposure-card-resolve-exposures-cta")}
              </Button>
            }
          />
        </li>
      );
    },
  );
  const noUnresolvedExposures = exposureCardElems.length === 0;
  const dataSummary = getDashboardSummary(
    props.userBreaches,
    props.enabledFeatureFlags,
  );

  const hasExposures = breachesDataArray.length > 0;
  const hasUnresolvedBreaches = tabSpecificExposures.length > 0;

  const TabContentActionNeeded = () => {
    const {
      dataBreachUnresolvedNum,
      dataBreachFixedDataPointsNum,
      totalDataPointsNum,
    } = dataSummary;

    let exposuresAreaDescription;

    if (hasUnresolvedBreaches) {
      exposuresAreaDescription =
        l10n.getString("dashboard-exposures-area-description-all-line1", {
          exposures_unresolved_num:
            totalDataPointsNum - dataBreachFixedDataPointsNum,
        }) +
        " " +
        l10n.getString("dashboard-exposures-area-description-all-line2", {
          data_breach_unresolved_num: dataBreachUnresolvedNum,
        });
    }

    return (
      <>
        <h2 className={styles.exposuresAreaHeadline}>
          {l10n.getString("dashboard-exposures-area-headline")}
        </h2>
        {exposuresAreaDescription && (
          <p className={styles.exposuresAreaDescription}>
            {exposuresAreaDescription}
          </p>
        )}
      </>
    );
  };

  const TabContentFixed = () => (
    <>
      <h2 className={styles.exposuresAreaHeadline}>
        {l10n.getString(
          props.isEligibleForPremium
            ? "dashboard-fixed-area-headline-premium"
            : "dashboard-fixed-area-headline-all",
        )}
      </h2>
    </>
  );

  const waitlistTriggerRef = useRef<HTMLAnchorElement>(null);
  const dialogTriggerState = useOverlayTriggerState({});
  const overlayTrigger = useOverlayTrigger(
    { type: "dialog" },
    dialogTriggerState,
    waitlistTriggerRef,
  );

  const freeScanCta = props.isEligibleForFreeScan && (
    <>
      <WaitlistDialog
        dialogTriggerState={dialogTriggerState}
        {...overlayTrigger.overlayProps}
      />
      <p>
        {
          /* c8 ignore start */
          props.enabledFeatureFlags.includes("MaskDataBrokerCount")
            ? l10n.getFragment(
                "dashboard-exposures-all-fixed-free-scan-masked",
                {
                  elems: {
                    a:
                      !props.enabledFeatureFlags.includes(
                        "DisableOneRepScans",
                      ) &&
                      (typeof props.totalNumberOfPerformedScans ===
                        "undefined" ||
                        props.totalNumberOfPerformedScans <
                          CONST_ONEREP_MAX_SCANS_THRESHOLD) ? (
                        <Link
                          ref={waitlistTriggerRef}
                          href="/user/welcome/free-scan?referrer=dashboard"
                          onClick={() => {
                            recordTelemetry("link", "click", {
                              link_id: "exposures_all_fixed_free_scan",
                            });
                          }}
                        />
                      ) : (
                        <Button
                          variant="link"
                          buttonRef={waitlistTriggerRef}
                          {...overlayTrigger.triggerProps}
                        />
                      ),
                  },
                },
              )
            : l10n.getFragment("dashboard-exposures-all-fixed-free-scan", {
                vars: {
                  data_broker_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
                },
                elems: {
                  a:
                    !props.enabledFeatureFlags.includes("DisableOneRepScans") &&
                    (typeof props.totalNumberOfPerformedScans === "undefined" ||
                      props.totalNumberOfPerformedScans <
                        CONST_ONEREP_MAX_SCANS_THRESHOLD) ? (
                      <Link
                        ref={waitlistTriggerRef}
                        href="/user/welcome/free-scan?referrer=dashboard"
                        onClick={() => {
                          recordTelemetry("link", "click", {
                            link_id: "exposures_all_fixed_free_scan",
                          });
                        }}
                      />
                    ) : (
                      <Button
                        variant="link"
                        buttonRef={waitlistTriggerRef}
                        {...overlayTrigger.triggerProps}
                      />
                    ),
                },
              })
          /* c8 ignore stop */
        }
      </p>
    </>
  );

  const getZeroStateIndicator = () => {
    return (
      <>
        <Image src={NoExposuresIllustration} alt="" />
        <strong>{l10n.getString("dashboard-no-exposures-label")}</strong>
        {freeScanCta}
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Toolbar
        user={props.user}
        monthlySubscriptionUrl={props.monthlySubscriptionUrl}
        subscriptionBillingAmount={props.subscriptionBillingAmount}
        fxaSettingsUrl={props.fxaSettingsUrl}
        lastScanDate={
          props.userScanData.scan
            ? parseIso8601Datetime(props.userScanData.scan.created_at)
            : null
        }
        experimentData={props.experimentData}
        enabledFeatureFlags={props.enabledFeatureFlags}
        announcements={announcements}
      >
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) => {
            setActiveTab(selectedKey as TabType);
            recordTelemetry("dashboard", "view", {
              dashboard_tab: selectedKey as TabType,
              legacy_user: !props.isNewUser,
              breach_count: breachesDataArray.length,
            });
          }}
          selectedKey={activeTab}
        />
      </Toolbar>
      <PlusShutdownBanner
        countryCode={props.countryCode}
        shutdownState={props.shutdownState}
      />
      <CsatSurvey
        user={props.user}
        activeTab={activeTab}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        elapsedTimeInDaysSinceInitialScan={
          props.elapsedTimeInDaysSinceInitialScan ?? null
        }
        hasFirstMonitoringScan={props.hasFirstMonitoringScan}
        lastScanDate={
          props.userScanData.scan
            ? parseIso8601Datetime(props.userScanData.scan.created_at)
            : null
        }
        signInCount={props.signInCount}
        isEligibleForPremium={props.isEligibleForPremium}
      />
      <div className={styles.dashboardContent}>
        <DashboardTopBanner
          tabType={activeTab}
          isPremiumUser={hasPremium(props.user)}
          hasExposures={hasExposures}
          hasUnresolvedBreaches={hasUnresolvedBreaches}
          bannerData={getDashboardSummary(
            props.userBreaches,
            props.enabledFeatureFlags,
          )}
          stepDeterminationData={{
            countryCode,
            subscriberBreaches: props.userBreaches,
            user: props.user,
          }}
          onShowFixed={() => {
            setActiveTab("fixed");
            recordTelemetry("dashboard", "view", {
              dashboard_tab: "fixed",
              legacy_user: !props.isNewUser,
              breach_count: breachesDataArray.length,
            });
          }}
          enabledFeatureFlags={props.enabledFeatureFlags}
        />
        <section className={styles.exposuresArea}>
          {activeTab === "action-needed" ? (
            <TabContentActionNeeded />
          ) : (
            <TabContentFixed />
          )}
        </section>
        <div className={styles.exposuresFilterWrapper}>
          <ExposuresFilter
            experimentData={props.experimentData}
            enabledFeatureFlags={props.enabledFeatureFlags}
            initialFilterValues={initialFilterState}
            filterValues={filters}
            setFilterValues={setFilters}
            isEligibleForPremium={props.isEligibleForPremium}
            isPlusSubscriber={hasPremium(props.user)}
          />
        </div>
        {noUnresolvedExposures ? (
          <div className={styles.zeroStateIndicator}>
            {getZeroStateIndicator()}
          </div>
        ) : (
          <ul className={styles.exposureList}>{exposureCardElems}</ul>
        )}
      </div>
    </div>
  );
};
