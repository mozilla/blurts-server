/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import styles from "./View.module.scss";
import TwitterImage from "../../../../../components/client/assets/twitter-icon.png";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import { DashboardTopBanner } from "./DashboardTopBanner";
import { useL10n } from "../../../../../hooks/l10n";
import type { UserBreaches } from "../../../../../functions/server/getUserBreaches";
import { ExposureCard } from "../../../../../components/client/ExposureCard";
import {
  ExposuresFilter,
  FilterState,
} from "../../../../../components/client/ExposuresFilter";
import { useState } from "react";
import { ScanResult } from "../../../../../functions/server/onerep";

export type Props = {
  user: Session["user"];
  userBreaches: UserBreaches;
  userScannedResults?: ScanResult[];
  locale: string;
};

export const View = (props: Props) => {
  const l10n = useL10n();

  const totalBreaches = props.userBreaches?.breachesData.verifiedEmails.reduce(
    (count, emailData) => count + emailData.breaches.length,
    0
  );

  const dateObject = (isoString: string): Date => {
    return new Date(isoString);
  };

  const initialFilterState: FilterState = {
    exposureType: "",
    dateFound: "",
    status: "",
  };

  // TODO: Add both breaches & scan data, and filter through them with filters output
  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  const exposureCards = props.userScannedResults?.map((item, index) => (
    <li key={index} className={styles.exposureListItem}>
      <ExposureCard
        exposureImg={TwitterImage}
        exposureData={item}
        exposureName={item.data_broker}
        exposureDetailsLink=""
        dateFound={dateObject(item.created_at)}
        statusPillType="fixed"
        locale={props.locale}
      />
    </li>
  ));

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
              exposureImg={TwitterImage}
              exposureData={breach}
              exposureName={breach.Name}
              exposureDetailsLink={""}
              dateFound={breach.AddedDate}
              statusPillType={"fixed"}
              locale={props.locale}
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

  return (
    <div className={styles.wrapper}>
      <Toolbar user={props.user}>
        TODO:{" "}
        <a href="https://react-spectrum.adobe.com/react-aria/useTabList.html">
          add a tab list
        </a>
      </Toolbar>
      <div className={styles.dashboardContent}>
        <DashboardTopBanner type={"LetsFixDataContent"} chart={<></>} />
        <section className={styles.exposuresArea}>
          <h2 className={styles.exposuresAreaHeadline}>
            {l10n.getString("dashboard-exposures-area-headline")}
          </h2>
          <p className={styles.exposuresAreaDescription}>
            {l10n.getString("dashboard-exposures-area-description", {
              // TODO: Use real user data
              exposures_total_num: 1337,
              data_breach_total_num: totalBreaches,
              data_broker_total_num: 1337,
            })}
          </p>
          <div className={styles.exposuresFilterWrapper}>
            <ExposuresFilter setFilterValues={setFilters} />
          </div>
          <ul className={styles.exposureList}>
            {props.userScannedResults ? exposureCards : breachExposureCards}
            {/* {props.userBreaches.breachesData.verifiedEmails
              .map((verifiedEmail) => {
                const breachCardsForThisEmail = verifiedEmail.breaches.map(
                  (breach) => {
                    return (
                      <li
                        key={`${verifiedEmail.email}_${breach.Id.toString()}`}
                        className={styles.exposureListItem}
                      >
                        <ExposureCard
                          exposureImg={TwitterImage}
                          exposureData={breach}
                          exposureName={breach.Name}
                          exposureDetailsLink={""}
                          dateFound={breach.AddedDate}
                          statusPillType={"fixed"}
                          locale={props.locale}
                        />
                      </li>
                    );
                  }
                );
                // Technically a JSX.Element can be `any`, but we know it's not.
                // (At least, I *think* that's why this rule triggers.)
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return breachCardsForThisEmail;
              })
              .flat()
            }
            {props.userScannedResults?.map((scannedResult) =>
              {
                return (
                  <>
                  <ExposureCard 
                      exposureImg={TwitterImage}
                      exposureName={""}
                      exposureDetailsLink={""}
                      dateFound={dateObject(scannedResult.created_at)}
                      statusPillType={"fixed"}
                      locale={props.locale} 
                      exposureData={scannedResult}                  
                  />
                  </>
                )
              }
            )} */}
          </ul>
        </section>
      </div>
    </div>
  );
};
