/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { ReactElement } from "react";
import { Button } from "../../../../../components/server/Button";
import { useL10n } from "../../../../../hooks/l10n";
import { DoughnutChart as Chart } from "../../../../../components/client/Chart";

export type DashboardTopBannerProps = {
  type:
    | "LetsFixDataContent"
    | "DataBrokerScanUpsellContent"
    | "NoExposuresFoundContent"
    | "ResumeBreachResolutionContent"
    | "YourDataIsProtected";
  chart: ReactElement;
};

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();

  // all values are mocked for now
  const chartData: Array<[string, number]> = [
    ["Home address", 11],
    ["Family members", 12],
    ["Contact Info", 1],
    ["Full name", 5],
    ["Other", 2],
  ];

  const contentData = {
    LetsFixDataContent: {
      headline: l10n.getString("dashboard-top-banner-protect-your-data-title"),
      description: l10n.getString(
        "dashboard-top-banner-protect-your-data-description",
        {
          // TODO: Replace all mocked exposure data
          data_breach_total_num: 95,
          data_broker_total_num: 15,
        }
      ),
      cta: {
        content: l10n.getString("dashboard-top-banner-protect-your-data-cta"),
        onClick: () => {
          window.location.href = "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers";
        },
      },
    },
    DataBrokerScanUpsellContent: {
      headline: l10n.getString(
        "dashboard-top-banner-monitor-protects-your-even-more-title"
      ),
      description: l10n.getString(
        "dashboard-top-banner-monitor-protects-your-even-more-description",
        {
          data_broker_sites_total_num: 190,
        }
      ),
      cta: {
        content: l10n.getString(
          "dashboard-top-banner-monitor-protects-your-even-more-cta"
        ),
        onClick: () => {
          // do something
        },
      },
    },
    NoExposuresFoundContent: {
      headline: l10n.getString("dashboard-top-banner-no-exposures-found-title"),
      description: l10n.getString(
        "dashboard-top-banner-no-exposures-found-description",
        {
          data_broker_sites_total_num: 190,
        }
      ),
      cta: {
        content: l10n.getString("dashboard-top-banner-no-exposures-found-cta"),
        onClick: () => {
          // do something
        },
      },
    },
    ResumeBreachResolutionContent: {
      headline: l10n.getString(
        "dashboard-top-banner-lets-keep-protecting-title"
      ),
      description: l10n.getString(
        "dashboard-top-banner-lets-keep-protecting-description",
        {
          remaining_exposures_total_num: 40,
        }
      ),
      cta: {
        content: l10n.getString(
          "dashboard-top-banner-lets-keep-protecting-cta"
        ),
        onClick: () => {
          // do something
        },
      },
    },
    YourDataIsProtected: {
      headline: l10n.getString(
        "dashboard-top-banner-your-data-is-protected-title"
      ),
      description: l10n.getString(
        "dashboard-top-banner-your-data-is-protected-description",
        {
          starting_exposure_total_num: 100,
        }
      ),
      cta: {
        content: l10n.getString(
          "dashboard-top-banner-your-data-is-protected-cta"
        ),
        onClick: () => {
          // do something
        },
      },
    },
  };

  const content = contentData[props.type];

  return (
    <div className={styles.container}>
      <div className={styles.explainerContentWrapper}>
        {content && (
          <div className={styles.explainerContent}>
            <h3>{content.headline}</h3>
            <p>{content.description}</p>
            <span className={styles.cta}>
              <Button variant="primary" small onClick={content.cta.onClick}>
                {content.cta.content}
              </Button>
            </span>
          </div>
        )}
      </div>
      <div className={styles.chart}>
        <Chart data={chartData} totalExposures={908} />
      </div>
    </div>
  );
};
