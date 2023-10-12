/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../../../../../hooks/l10n";
import {
  Exposure,
  ExposureCard,
  isScanResult,
} from "../../../../../components/client/ExposureCard";
import {
  ExposuresFilter,
  FilterState,
} from "../../../../../components/client/ExposuresFilter";
import { getDashboardSummary } from "../../../../../functions/server/dashboard";
import { getExposureStatus } from "../../../../../components/server/StatusPill";
import { TabList } from "../../../../../components/client/TabList";
import { FeatureFlagsEnabled } from "../../../../../functions/server/featureFlags";
import { filterExposures } from "./filterExposures";
import { SubscriberBreach } from "../../../../../../utils/subscriberBreaches";
import {
  canSubscribeToPremium,
  hasPremium,
} from "../../../../../functions/universal/user";
import { LatestOnerepScanData } from "../../../../../../db/tables/onerep_scans";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { Button } from "../../../../../components/server/Button";

import AllFixedIllustration from "./images/dashboard-all-fixed.svg";
import NoExposuresIllustration from "./images/dashboard-no-exposures.svg";
import ScanProgressIllustration from "./images/scan-illustration.svg";
import { CountryCodeContext } from "../../../../../../contextProviders/country-code";

export type Props = {
  featureFlagsEnabled: Pick<
    FeatureFlagsEnabled,
    "FreeBrokerScan" | "PremiumBrokerRemoval"
  >;
  user: Session["user"];
  userBreaches: SubscriberBreach[];
  userScanData: LatestOnerepScanData;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  scanCount: number;
};

export type TabType = "action-needed" | "fixed";

export type TabData = {
  name: string;
  key: TabType;
};

export const View = (props: Props) => {
  const l10n = useL10n();
  const countryCode = useContext(CountryCodeContext);

  const initialFilterState: FilterState = {
    exposureType: "show-all-exposure-type",
    dateFound: "show-all-date-found",
  };
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [selectedTab, setSelectedTab] = useState<TabType>("action-needed");
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
  const initialScanInProgress =
    props.userScanData.scan?.onerep_scan_status === "in_progress" &&
    props.scanCount === 1;

  // Merge exposure cards
  const combinedArray = [...breachesDataArray, ...props.userScanData.results];

  // Sort in descending order
  const arraySortedByDate = combinedArray.sort((a, b) => {
    const dateA =
      (a as SubscriberBreach).addedDate ||
      (a as OnerepScanResultRow).created_at;
    const dateB =
      (b as SubscriberBreach).addedDate ||
      (b as OnerepScanResultRow).created_at;

    const timestampA = dateA.getTime();
    const timestampB = dateB.getTime();

    return timestampB - timestampA;
  });

  const getTabSpecificExposures = (tabKey: TabType) =>
    arraySortedByDate.filter((exposure: Exposure) => {
      const exposureStatus = getExposureStatus(exposure);
      return (
        (tabKey === "action-needed" && exposureStatus === "needAction") ||
        (tabKey === "fixed" && exposureStatus !== "needAction")
      );
    });

  const tabSpecificExposures = getTabSpecificExposures(selectedTab);
  const filteredExposures = filterExposures(tabSpecificExposures, filters);

  const exposureCardElems = filteredExposures.map((exposure: Exposure) => {
    return (
      <li
        key={`${isScanResult(exposure) ? "scan" : "breach"}-${exposure.id}`}
        className={styles.exposureListItem}
      >
        <ExposureCard
          exposureData={exposure}
          locale={getLocale(l10n)}
          isPremiumBrokerRemovalEnabled={
            props.featureFlagsEnabled.PremiumBrokerRemoval
          }
          isPremiumUser={hasPremium(props.user)}
          resolutionCta={
            <Button
              variant="primary"
              wide
              href={
                isScanResult(exposure)
                  ? "/redesign/user/dashboard/fix/data-broker-profiles/manual-remove"
                  : // TODO MNTOR-2226: Figure out where this CTA should go
                    undefined
              }
            >
              {l10n.getString("exposure-card-cta")}
            </Button>
          }
        />
      </li>
    );
  });
  const noUnresolvedExposures = exposureCardElems.length === 0;
  const dataSummary = getDashboardSummary(
    props.userScanData.results,
    props.userBreaches
  );

  const hasExposures = combinedArray.length > 0;
  const hasUnresolvedBreaches =
    tabSpecificExposures.filter((exposure) => !isScanResult(exposure)).length >
    0;
  const hasUnresolvedBrokers =
    tabSpecificExposures.filter(isScanResult).length > 0;

  const hasUnresolvedExposures = hasUnresolvedBreaches || hasUnresolvedBrokers;
  const hasFixedExposures = hasExposures && !hasUnresolvedExposures;

  const TabContentActionNeeded = () => {
    const {
      dataBreachUnresolvedNum,
      dataBrokerTotalNum,
      dataBrokerFixedNum,
      dataBrokerInProgressNum,
      dataBreachFixedExposuresNum,
      dataBrokerFixedExposuresNum,
      dataBrokerInProgressExposuresNum,
      totalExposures,
    } = dataSummary;

    let exposuresAreaDescription;

    if (hasUnresolvedExposures) {
      exposuresAreaDescription = l10n.getString(
        "dashboard-exposures-area-description",
        {
          exposures_unresolved_num:
            totalExposures -
            dataBrokerFixedExposuresNum -
            dataBreachFixedExposuresNum -
            dataBrokerInProgressExposuresNum,
          data_breach_unresolved_num: dataBreachUnresolvedNum,
          data_broker_unresolved_num:
            dataBrokerTotalNum - dataBrokerFixedNum - dataBrokerInProgressNum,
        }
      );
    }

    if (initialScanInProgress && !noUnresolvedExposures) {
      exposuresAreaDescription = l10n.getString(
        "dashboard-exposures-breaches-scan-progress-description",
        {
          exposures_unresolved_num:
            totalExposures -
            dataBrokerFixedExposuresNum -
            dataBreachFixedExposuresNum -
            dataBrokerInProgressExposuresNum,
          data_breach_unresolved_num: dataBreachUnresolvedNum,
        }
      );
    } else if (initialScanInProgress) {
      exposuresAreaDescription = l10n.getString(
        "dashboard-exposures-no-breaches-scan-progress-description"
      );
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
        {l10n.getString("dashboard-fixed-area-headline")}
      </h2>
    </>
  );

  const freeScanCta = props.isEligibleForFreeScan && (
    <p>
      {l10n.getFragment("dashboard-exposures-all-fixed-free-scan", {
        vars: {
          data_broker_total_num: parseInt(
            process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
            10
          ),
        },
        elems: {
          start_free_scan_link: <a href="/redesign/user/welcome" />,
        },
      })}
    </p>
  );

  const getZeroStateIndicator = () => {
    if (initialScanInProgress) {
      return (
        <>
          <Image src={ScanProgressIllustration} alt="" />
          <strong>
            {l10n.getString("dashboard-exposures-scan-progress-label")}
          </strong>
        </>
      );
    }

    if (!hasUnresolvedExposures && hasFixedExposures) {
      return (
        <>
          <Image src={AllFixedIllustration} alt="" />
          <strong>
            {l10n.getString("dashboard-exposures-all-fixed-label")}
          </strong>
          {freeScanCta}
        </>
      );
    }

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
        yearlySubscriptionUrl={props.yearlySubscriptionUrl}
      >
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) =>
            setSelectedTab(selectedKey as TabType)
          }
          selectedKey={selectedTab}
        />
      </Toolbar>
      <div className={styles.dashboardContent}>
        <DashboardTopBanner
          tabType={selectedTab}
          scanInProgress={initialScanInProgress}
          isPremiumUser={hasPremium(props.user)}
          isEligibleForPremium={canSubscribeToPremium({
            user: props.user,
            countryCode,
          })}
          isEligibleForFreeScan={props.isEligibleForFreeScan}
          hasExposures={hasExposures}
          hasUnresolvedBreaches={hasUnresolvedBreaches}
          hasUnresolvedBrokers={hasUnresolvedBrokers}
          bannerData={getDashboardSummary(
            props.userScanData.results,
            props.userBreaches
          )}
          stepDeterminationData={{
            countryCode,
            latestScanData: props.userScanData,
            subscriberBreaches: props.userBreaches,
            user: props.user,
          }}
          onShowFixed={() => {
            setSelectedTab("fixed");
          }}
        />
        <section className={styles.exposuresArea}>
          {selectedTab === "action-needed" ? (
            <TabContentActionNeeded />
          ) : (
            <TabContentFixed />
          )}
        </section>
        <div className={styles.exposuresFilterWrapper}>
          <ExposuresFilter
            initialFilterValues={initialFilterState}
            filterValues={filters}
            setFilterValues={setFilters}
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
