/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../../../../../hooks/l10n";
import type { UserBreaches } from "../../../../../functions/server/getUserBreaches";
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
import { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { BundledVerifiedEmails } from "../../../../../../utils/breaches";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { StatusPillType } from "../../../../../components/server/StatusPill";
import { TabList } from "../../../../../components/client/TabList";
import AllFixedLogo from "./images/dashboard-all-fixed.svg";
import { FeatureFlagsEnabled } from "../../../../../functions/server/featureFlags";
import { filterExposures } from "./filterExposures";

export type Props = {
  user: Session["user"];
  userBreaches: UserBreaches;
  userScannedResults: ScanResult[];
  bannerData: DashboardSummary;
  locale: string;
  featureFlagsEnabled: Pick<
    FeatureFlagsEnabled,
    "FreeBrokerScan" | "PremiumBrokerRemoval"
  >;
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

  const dateObject = (isoString: string): Date => {
    return new Date(isoString);
  };

  const breachesDataArray = props.userBreaches.breachesData.verifiedEmails
    .map((elem: BundledVerifiedEmails) => elem.breaches)
    .flat();
  const scannedResultsDataArray =
    props.userScannedResults.map((elem: ScanResult) => elem) || [];

  // Merge exposure cards
  const combinedArray = [...breachesDataArray, ...scannedResultsDataArray];

  // Sort in descending order
  const arraySortedByDate = combinedArray.sort((a, b) => {
    const dateA =
      (a as HibpLikeDbBreach).AddedDate || (a as ScanResult).created_at;
    const dateB =
      (b as HibpLikeDbBreach).AddedDate || (b as ScanResult).created_at;

    const timestampA =
      typeof dateA === "object" ? dateA.getTime() : new Date(dateA).getTime();
    const timestampB =
      typeof dateB === "object" ? dateB.getTime() : new Date(dateB).getTime();

    return timestampB - timestampA;
  });

  const getExposureStatus = (exposure: Exposure): StatusPillType => {
    if (isScanResult(exposure)) {
      switch (exposure.status) {
        case "removed":
          return "fixed";
        case "waiting_for_verification":
          return "progress";
        default:
          return "needAction";
      }
    }

    return exposure.IsResolved ? "fixed" : "needAction";
  };

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
    let email;
    // Get the email assosciated with breach
    if (!isScanResult(exposure)) {
      props.userBreaches.breachesData.verifiedEmails.forEach(
        (verifiedEmail) => {
          if (
            verifiedEmail.breaches.some((breach) => breach.Id === exposure.Id)
          ) {
            email = verifiedEmail.email;
          }
        }
      );
    }

    const status = getExposureStatus(exposure);

    return isScanResult(exposure) ? (
      // Scanned result
      <li key={`scan-${exposure.id}`} className={styles.exposureListItem}>
        <ExposureCard
          exposureData={exposure}
          exposureName={exposure.data_broker}
          exposureDetailsLink={exposure.link}
          dateFound={dateObject(exposure.created_at)}
          statusPillType={status}
          locale={props.locale}
          color={getRandomLightNebulaColor(exposure.data_broker)}
          featureFlagsEnabled={props.featureFlagsEnabled}
        />
      </li>
    ) : (
      // Breaches result
      <li key={`breach-${exposure.Id}`} className={styles.exposureListItem}>
        <ExposureCard
          exposureData={exposure}
          exposureName={exposure.Title}
          fromEmail={email}
          exposureDetailsLink={`/breach-details/${exposure.Name}`}
          dateFound={exposure.AddedDate}
          statusPillType={status}
          locale={props.locale}
          color={getRandomLightNebulaColor(exposure.Name)}
          featureFlagsEnabled={props.featureFlagsEnabled}
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

  const type = isScanResultItemsEmpty
    ? "DataBrokerScanUpsellContent"
    : "LetsFixDataContent";

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
          content={featureFlagsEnabled ? type : "NoContent"}
          type={selectedTab as TabType}
          hasRunScan={!isScanResultItemsEmpty}
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
            setFilterValues={setFilters}
          />
        </div>
        {noUnresolvedExposures ? (
          <div className={styles.noExposures}>
            <Image src={AllFixedLogo} alt="" />
            <strong>
              {l10n.getString("dashboard-exposures-all-fixed-label")}
            </strong>
          </div>
        ) : (
          <ul className={styles.exposureList}>{exposureCardElems}</ul>
        )}
      </div>
    </div>
  );
};

// Same logic as breachLogo.js
function getRandomLightNebulaColor(name: string) {
  const colors = [
    "#C689FF",
    "#D9BFFF",
    "#AB71FF",
    "#E7DFFF",
    "#AB71FF",
    "#3FE1B0",
    "#54FFBD",
    "#88FFD1",
    "#B3FFE3",
    "#D1FFEE",
    "#F770FF",
    "#F68FFF",
    "#F6B8FF",
    "#00B3F4",
    "#00DDFF",
    "#80EBFF",
    "#FF8450",
    "#FFA266",
    "#FFB587",
    "#FFD5B2",
    "#FF848B",
    "#FF9AA2",
    "#FFBDC5",
    "#FF8AC5",
    "#FFB4DB",
  ];

  const charValues = name.split("").map((letter) => letter.codePointAt(0));

  const charSum = charValues.reduce((sum: number | undefined, codePoint) => {
    if (codePoint === undefined) return sum;
    if (sum === undefined) return codePoint;
    return sum + codePoint;
  }, undefined);

  if (charSum === undefined) {
    return colors[0];
  }

  const colorIndex = charSum % colors.length;
  return colors[colorIndex];
}
