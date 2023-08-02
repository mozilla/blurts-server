/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { Button } from "../../../../../components/server/Button";
import { useL10n } from "../../../../../hooks/l10n";
import { DoughnutChart as Chart } from "../../../../../components/client/Chart";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { useRouter } from "next/navigation";

export type DashboardTopBannerProps = {
  type:
    | "LetsFixDataContent"
    | "DataBrokerScanUpsellContent"
    | "NoExposuresFoundContent"
    | "ResumeBreachResolutionContent"
    | "YourDataIsProtectedContent"
    | "NoContent";
  bannerData: DashboardSummary;
  hasRunScan: boolean;
};

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();
  const router = useRouter();

  const chartData: [string, number][] = props.bannerData.sanitizedExposures.map(
    (obj) => {
      const [key, value] = Object.entries(obj)[0];
      return [l10n.getString(key), value];
    }
  );

  const contentData = {
    LetsFixDataContent: {
      headline: l10n.getString("dashboard-top-banner-protect-your-data-title"),
      description: l10n.getString(
        "dashboard-top-banner-protect-your-data-description",
        {
          data_breach_total_num: props.bannerData.dataBreachTotalNum,
          data_broker_total_num: props.bannerData.dataBrokerTotalNum,
        }
      ),
      cta: {
        content: l10n.getString("dashboard-top-banner-protect-your-data-cta"),
        onClick: () => {
          window.location.href =
            "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers";
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
          router.push("/redesign/user/welcome");
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
          //TODO: Add remaining total exposures
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
    YourDataIsProtectedContent: {
      headline: l10n.getString(
        "dashboard-top-banner-your-data-is-protected-title"
      ),
      description: l10n.getString(
        "dashboard-top-banner-your-data-is-protected-description",
        {
          //TODO: Add original count of exposures
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
    NoContent: {
      headline: null,
      description: null,
      cta: null,
    },
  };

  const content = contentData[props.type];

  return (
    <div className={styles.container}>
      <div className={styles.explainerContentWrapper}>
        {content && (
          <div className={styles.explainerContent}>
            {content.headline ? <h3>{content.headline}</h3> : ""}
            {content.description ? <p>{content.description}</p> : ""}
            {content.cta ? (
              <span className={styles.cta}>
                <Button variant="primary" small onClick={content.cta.onClick}>
                  {content.cta.content}
                </Button>
              </span>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className={styles.chart}>
        <Chart hasRunScan={props.hasRunScan} data={chartData} />
      </div>
    </div>
  );
};
