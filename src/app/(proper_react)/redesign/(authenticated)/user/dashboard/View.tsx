/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import Image from "next/image";
import { Session } from "next-auth";
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
import { ScanResult } from "../../../../../functions/server/onerep";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { getExposureStatus } from "../../../../../components/server/StatusPill";
import { TabList } from "../../../../../components/client/TabList";
import AllFixedLogo from "./images/dashboard-all-fixed.svg";
import { FeatureFlagsEnabled } from "../../../../../functions/server/featureFlags";
import { filterExposures } from "./filterExposures";
import { SubscriberBreach } from "../../../../../../utils/subscriberBreaches";
import { hasPremium } from "../../../../../functions/universal/user";

export type Props = {
  bannerData: DashboardSummary;
  featureFlagsEnabled: Pick<
    FeatureFlagsEnabled,
    "FreeBrokerScan" | "PremiumBrokerRemoval"
  >;
  locale: string;
  user: Session["user"];
  userBreaches: SubscriberBreach[];
  userScannedResults: ScanResult[];
  isEligibleForFreeScan: boolean;
  countryCode?: string;
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

  const breachesDataArray = props.userBreaches
    .map((elem: SubscriberBreach) => elem)
    .flat();
  const scannedResultsDataArray =
    // TODO: Add unit test when changing this code:
    /* c8 ignore next */
    props.userScannedResults.map((elem: ScanResult) => elem) || [];

  // Merge exposure cards
  const combinedArray = [...breachesDataArray, ...scannedResultsDataArray];

  // Sort in descending order
  const arraySortedByDate = combinedArray.sort((a, b) => {
    const dateA =
      (a as SubscriberBreach).addedDate || (a as ScanResult).created_at;
    const dateB =
      (b as SubscriberBreach).addedDate || (b as ScanResult).created_at;

    const timestampA = new Date(dateA).getTime();
    const timestampB = new Date(dateB).getTime();

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
  const isScanResultItemsEmpty = props.userScannedResults.length === 0;
  const noUnresolvedExposures = exposureCardElems.length === 0;

  const TabContentActionNeeded = () => {
    const { dataBreachTotalNum, dataBrokerTotalNum, totalExposures } =
      props.bannerData;
    return (
      <>
        <h2 className={styles.exposuresAreaHeadline}>
          {l10n.getString("dashboard-exposures-area-headline")}
        </h2>
        <p className={styles.exposuresAreaDescription}>
          {l10n.getString("dashboard-exposures-area-description", {
            exposures_total_num: totalExposures,
            data_breach_total_num: dataBreachTotalNum,
            data_broker_total_num: dataBrokerTotalNum,
          })}
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

  const featureFlagsEnabled =
    props.featureFlagsEnabled?.FreeBrokerScan &&
    props.featureFlagsEnabled?.PremiumBrokerRemoval;

  let contentType: BannerContent = "NoContent";
  if (featureFlagsEnabled) {
    if (isScanResultItemsEmpty) {
      contentType = "DataBrokerScanUpsellContent";
    } else if (
      !noUnresolvedExposures &&
      props.countryCode &&
      props.countryCode.toLocaleLowerCase() === "us"
    ) {
      contentType = "LetsFixDataContent";
    }
  }

  // MNTOR-1940: US user who is returning to the experience, free, and has resolved all their tasks
  if (
    props.countryCode &&
    props.countryCode?.toLocaleLowerCase() === "us" &&
    noUnresolvedExposures &&
    !isScanResultItemsEmpty &&
    !hasPremium(props.user)
  ) {
    contentType = "YourDataIsProtectedAllFixedContent";
  }

  // Fixed in: MNTOR-2011
  const freeScanCta = isScanResultItemsEmpty ? (
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
  ) : (
    ""
  );

  return (
    <div className={styles.wrapper}>
      <Toolbar user={props.user}>
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) => setSelectedTab(selectedKey)}
          defaultSelectedKey={selectedTab}
        />
      </Toolbar>
      <div className={styles.dashboardContent}>
        <DashboardTopBanner
          bannerData={props.bannerData}
          content={contentType}
          type={selectedTab as TabType}
          hasRunScan={!isScanResultItemsEmpty}
          isEligibleForFreeScan={props.isEligibleForFreeScan}
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 3 */
          ctaCallback={() => {
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
        {
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 9 */
          noUnresolvedExposures ? (
            <div className={styles.noExposures}>
              <Image src={AllFixedLogo} alt="" />
              <strong>
                {l10n.getString("dashboard-exposures-all-fixed-label")}
              </strong>
              {freeScanCta}
            </div>
          ) : (
            <ul className={styles.exposureList}>{exposureCardElems}</ul>
          )
        }
      </div>
    </div>
  );
};
