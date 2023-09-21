/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import { BannerContent, DashboardTopBanner } from "./DashboardTopBanner";
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
import { getExposureStatus } from "../../../../../components/server/StatusPill";
import { TabList } from "../../../../../components/client/TabList";
import { FeatureFlagsEnabled } from "../../../../../functions/server/featureFlags";
import { filterExposures } from "./filterExposures";
import { SubscriberBreach } from "../../../../../../utils/subscriberBreaches";
import { hasPremium } from "../../../../../functions/universal/user";
import AllFixedLogo from "./images/dashboard-all-fixed.svg";
import ScanProgressIllustration from "./images/scan-illustration.svg";
import { LatestOnerepScanData } from "../../../../../../db/tables/onerep_scans";
import { getDashboardSummary } from "../../../../../functions/server/dashboard";

export type Props = {
  featureFlagsEnabled: Pick<
    FeatureFlagsEnabled,
    "FreeBrokerScan" | "PremiumBrokerRemoval"
  >;
  locale: string;
  user: Session["user"];
  userBreaches: SubscriberBreach[];
  userScanData: LatestOnerepScanData;
  isEligibleForFreeScan: boolean;
  scanInProgress: boolean;
  countryCode: string;
};

export type TabType = "action-needed" | "fixed";

export const View = (props: Props) => {
  const l10n = useL10n();

  const initialFilterState: FilterState = {
    exposureType: "show-all-exposure-type",
    dateFound: "show-all-date-found",
  };
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [selectedTab, setSelectedTab] = useState<Key>("action-needed");
  const tabsData = [
    {
      name: l10n.getString("dashboard-tab-label-action-needed"),
      key: "action-needed",
    },
    {
      name: l10n.getString("dashboard-tab-label-fixed"),
      key: "fixed",
    },
  ];
  const isActionNeededTab = selectedTab === "action-needed";

  const breachesDataArray = props.userBreaches.flat();

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

  const tabSpecificExposures = arraySortedByDate.filter(
    (exposure: Exposure) => {
      const exposureStatus = getExposureStatus(exposure);
      return (
        (isActionNeededTab && exposureStatus === "needAction") ||
        (!isActionNeededTab && exposureStatus !== "needAction")
      );
    }
  );
  const filteredExposures = filterExposures(tabSpecificExposures, filters);

  const exposureCardElems = filteredExposures.map((exposure: Exposure) => {
    return (
      <li
        key={`${isScanResult(exposure) ? "scan" : "breach"}-${exposure.id}`}
        className={styles.exposureListItem}
      >
        <ExposureCard
          exposureData={exposure}
          locale={props.locale}
          isPremiumBrokerRemovalEnabled={
            props.featureFlagsEnabled.PremiumBrokerRemoval
          }
        />
      </li>
    );
  });
  const isScanResultItemsEmpty = props.userScanData.results.length === 0;
  const noUnresolvedExposures = exposureCardElems.length === 0;
  const dataSummary = getDashboardSummary(
    props.userScanData.results,
    props.userBreaches
  );
  const isAllFixed =
    dataSummary.dataBreachFixedNum === dataSummary.dataBreachTotalNum &&
    dataSummary.dataBrokerFixedNum === dataSummary.dataBrokerTotalNum;

  let exposuresAreaDescription = "";
  if (props.scanInProgress && !noUnresolvedExposures) {
    exposuresAreaDescription = l10n.getString(
      "dashboard-exposures-breaches-scan-progress-description",
      {
        exposures_total_num: 123,
        data_breach_total_num: 456,
      }
    );
  } else if (props.scanInProgress) {
    exposuresAreaDescription = l10n.getString(
      "dashboard-exposures-no-breaches-scan-progress-description"
    );
  }

  const TabContentActionNeeded = () => {
    return (
      <>
        <h2 className={styles.exposuresAreaHeadline}>
          {l10n.getString("dashboard-exposures-area-headline")}
        </h2>
        <p className={styles.exposuresAreaDescription}>
          {exposuresAreaDescription}
        </p>
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

  let contentType: BannerContent = "NoContent";
  if (
    props.featureFlagsEnabled?.FreeBrokerScan &&
    props.featureFlagsEnabled?.PremiumBrokerRemoval
  ) {
    if (isScanResultItemsEmpty && !props.scanInProgress) {
      contentType = "DataBrokerScanUpsellContent";
    } else if (isScanResultItemsEmpty) {
      contentType = "ScanInProgressContent";
    } else if (
      (!noUnresolvedExposures || !isAllFixed) &&
      !props.scanInProgress
    ) {
      contentType = "LetsFixDataContent";
    }
  }

  // MNTOR-1940: US user who is returning to the experience, free, and has resolved all their tasks
  if (
    noUnresolvedExposures &&
    !isScanResultItemsEmpty &&
    !hasPremium(props.user) &&
    // TODO: A bug causes `isAllFixed` to not be `true` when it should be:
    // https://mozilla-hub.atlassian.net/browse/MNTOR-2192
    /* c8 ignore next 4 */
    isAllFixed
  ) {
    contentType = "YourDataIsProtectedAllFixedContent";
  }

  const freeScanCta = isScanResultItemsEmpty && (
    <p>
      {l10n.getFragment("dashboard-exposures-all-fixed-free-scan", {
        vars: {
          data_broker_total_num: parseInt(
            process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
            10
          ),
        },
        elems: {
          free_scan_link: <a href="/redesign/user/welcome" />,
        },
      })}
    </p>
  );

  const getZeroStateIndicator = () => {
    return (
      <div className={styles.zeroStateIndicator}>
        <Image
          src={props.scanInProgress ? ScanProgressIllustration : AllFixedLogo}
          alt=""
        />
        <strong>
          {props.scanInProgress
            ? l10n.getString("dashboard-exposures-scan-progress-label")
            : l10n.getString("dashboard-exposures-all-fixed-label")}
        </strong>
        {!props.scanInProgress && freeScanCta}
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Toolbar user={props.user}>
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) => setSelectedTab(selectedKey)}
          selectedKey={selectedTab}
        />
      </Toolbar>
      <div className={styles.dashboardContent}>
        <DashboardTopBanner
          bannerData={getDashboardSummary(
            props.userScanData.results,
            props.userBreaches
          )}
          stepDeterminationData={{
            countryCode: props.countryCode,
            latestScanData: props.userScanData,
            subscriberBreaches: props.userBreaches,
            user: props.user,
          }}
          content={contentType}
          type={selectedTab as TabType}
          hasRunScan={!isScanResultItemsEmpty}
          scanStatus={props.scanStatus}
          isEligibleForFreeScan={props.isEligibleForFreeScan}
          onShowFixed={() => {
            setSelectedTab("fixed");
          }}
        />
        <section className={styles.exposuresArea}>
          {isActionNeededTab ? <TabContentActionNeeded /> : <TabContentFixed />}
        </section>
        <div className={styles.exposuresFilterWrapper}>
          <ExposuresFilter
            initialFilterValues={initialFilterState}
            filterValues={filters}
            setFilterValues={setFilters}
          />
        </div>
        {noUnresolvedExposures ? (
          getZeroStateIndicator()
        ) : (
          <ul className={styles.exposureList}>{exposureCardElems}</ul>
        )}
      </div>
    </div>
  );
};
