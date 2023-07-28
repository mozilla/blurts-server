/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import { Session } from "next-auth";
import styles from "./View.module.scss";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../../../../../hooks/l10n";
import type { UserBreaches } from "../../../../../functions/server/getUserBreaches";
import {
  ExposureCard,
  isScanResult,
} from "../../../../../components/client/ExposureCard";
import {
  ExposuresFilter,
  FilterState,
} from "../../../../../components/client/ExposuresFilter";
import { TabList } from "../../../../../components/client/TabList";
import { ScanResult } from "../../../../../functions/server/onerep";
import { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { BundledVerifiedEmails } from "../../../../../../utils/breaches";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { StatusPillType } from "../../../../../components/server/StatusPill";

export type Props = {
  user: Session["user"];
  userBreaches: UserBreaches;
  userScannedResults: ScanResult[];
  bannerData: DashboardSummary;
  locale: string;
};

export type TabType = "action-needed" | "fixed";

export const View = (props: Props) => {
  const l10n = useL10n();

  const initialFilterState: FilterState = {
    exposureType: "",
    dateFound: "",
    status: "",
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

  // Only breaches exposure cards
  const breachExposureCards = props.userBreaches.breachesData.verifiedEmails
    .map((verifiedEmail) => {
      const breachCardsForThisEmail = verifiedEmail.breaches.map((breach) => {
        return (
          <li
            key={`${verifiedEmail.email}_${breach.Id.toString()}`}
            className={styles.exposureListItem}
          >
            <ExposureCard
              exposureData={breach}
              exposureName={breach.Name}
              fromEmail={verifiedEmail.email}
              exposureDetailsLink={""} //TODO: Find out what link to add in a breach card
              dateFound={breach.AddedDate}
              statusPillType="needAction"
              locale={props.locale}
              color={getRandomLightNebulaColor(breach.Name)}
            />
          </li>
        );
      });
      // Technically a JSX.Element can be `any`, but we know it's not.
      // (At least, I *think* that's why this rule triggers.)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return breachCardsForThisEmail;
    })
    .flat();

  const breachesDataArray = props.userBreaches.breachesData.verifiedEmails.map(
    (elem: BundledVerifiedEmails) => elem.breaches
  );
  const scannedResultsDataArray =
    props.userScannedResults.map((elem: ScanResult) => elem) || [];

  // Merge exposure cards
  const combinedArray = [
    ...breachesDataArray.flat(),
    ...scannedResultsDataArray,
  ];

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

  const getBreachStatus = (
    exposure: ScanResult | HibpLikeDbBreach
  ): StatusPillType => {
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

  const getDaysAgoDate = (numOfDays: number) => {
    const currentDate = new Date();
    return new Date(currentDate.getTime() - numOfDays * 24 * 60 * 60 * 1000);
  };

  const filteredExposures = arraySortedByDate.filter(
    (exposure: ScanResult | HibpLikeDbBreach) => {
      // Filter by status
      const breachStatus = getBreachStatus(exposure);
      if (
        (isActionNeededTab && breachStatus !== "needAction") ||
        (!isActionNeededTab && breachStatus === "needAction")
      ) {
        return false;
      }

      let isFilteredByStatus;
      switch (filters.status) {
        case "action-needed":
          isFilteredByStatus = breachStatus === "needAction";
          break;
        case "in-progress":
          isFilteredByStatus = breachStatus === "progress";
          break;
        case "fixed":
          isFilteredByStatus = breachStatus === "fixed";
          break;
        default:
          isFilteredByStatus = true;
          break;
      }

      // Filter by exposure type
      const exposureType = isScanResult(exposure)
        ? "data-broker"
        : "data-breach";
      const isFilteredByExposureType =
        filters.exposureType === "" ||
        filters.exposureType === "show-all-exposure-type" ||
        filters.exposureType === exposureType;

      // Filter by date
      let isFilteredByDate = true;
      if (filters.dateFound !== "" && filters.dateFound !== "show-all-date") {
        const exposureDate = isScanResult(exposure)
          ? new Date(exposure.created_at)
          : exposure.AddedDate;
        switch (filters.dateFound) {
          case "seven-days":
            isFilteredByDate = exposureDate >= getDaysAgoDate(7);
            break;
          case "thirty-days":
            isFilteredByDate = exposureDate >= getDaysAgoDate(30);
            break;
          case "last-year":
            isFilteredByDate = exposureDate >= getDaysAgoDate(365);
            break;
          default:
            // Do nothing
            break;
        }
      }

      return isFilteredByExposureType && isFilteredByDate && isFilteredByStatus;
    }
  );

  const exposureCardElems = filteredExposures.map(
    (exposure: ScanResult | HibpLikeDbBreach, index) => {
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

      const status = getBreachStatus(exposure);

      return isScanResult(exposure) ? (
        // Scanned result
        <li
          key={`scan-${exposure.id}-${index}`}
          className={styles.exposureListItem}
        >
          <ExposureCard
            exposureData={exposure}
            exposureName={exposure.data_broker}
            exposureDetailsLink={exposure.link}
            dateFound={dateObject(exposure.created_at)}
            statusPillType={status}
            locale={props.locale}
            color={getRandomLightNebulaColor(exposure.data_broker)}
          />
        </li>
      ) : (
        // Breaches result
        <li
          key={`breach-${exposure.Id}-${index}`}
          className={styles.exposureListItem}
        >
          <ExposureCard
            exposureData={exposure}
            exposureName={exposure.Title}
            fromEmail={email}
            exposureDetailsLink=""
            dateFound={exposure.AddedDate}
            statusPillType={status}
            locale={props.locale}
            color={getRandomLightNebulaColor(exposure.Name)}
          />
        </li>
      );
    }
  );
  const isScanResultItemsEmpty = props.userScannedResults.length === 0;

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
          content={
            isScanResultItemsEmpty
              ? "DataBrokerScanUpsellContent"
              : "LetsFixDataContent"
          }
          type={selectedTab as TabType}
          hasRunScan={!isScanResultItemsEmpty}
        />
        <section className={styles.exposuresArea}>
          {isActionNeededTab ? <TabContentActionNeeded /> : <TabContentFixed />}
        </section>
        <div className={styles.exposuresFilterWrapper}>
          <ExposuresFilter setFilterValues={setFilters} />
        </div>
        <ul className={styles.exposureList}>
          {isScanResultItemsEmpty ? breachExposureCards : exposureCardElems}
        </ul>
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
