/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { TabType } from "./View";
import { Button } from "../../../../../components/server/Button";
import { useL10n } from "../../../../../hooks/l10n";
import { DoughnutChart as Chart } from "../../../../../components/client/Chart";
import { ProgressCard } from "../../../../../components/client/ProgressCard";
import { DashboardSummary } from "../../../../../functions/server/dashboard";
import { useRouter } from "next/navigation";

const ONEREP_DATA_BROKER_COUNT = 190;

export type DashboardTopBannerProps = {
  content:
    | "LetsFixDataContent"
    | "DataBrokerScanUpsellContent"
    | "NoExposuresFoundContent"
    | "ResumeBreachResolutionContent"
    | "YourDataIsProtectedContent";
  bannerData: DashboardSummary;
  hasRunScan: boolean;
  type: TabType;
  ctaCallback?: () => void;
};

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();
  const router = useRouter();

  const isFixedTab = props.type === "fixed";
  const { totalExposures, dataBrokerFixedNum, dataBreachFixedNum } =
    props.bannerData;

  const chartDataKey = isFixedTab
    ? "fixedSanitizedExposures"
    : "sanitizedExposures";
  const chartData: [string, number][] = props.bannerData[chartDataKey].map(
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
        // Ignored for test coverage; to be replaced by a link:
        /* c8 ignore next 4 */
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
          data_broker_sites_total_num: ONEREP_DATA_BROKER_COUNT,
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
          data_broker_sites_total_num: ONEREP_DATA_BROKER_COUNT,
        }
      ),
      cta: {
        content: l10n.getString("dashboard-top-banner-no-exposures-found-cta"),
        // Ignored for test coverage; to be implemented:
        /* c8 ignore next 3 */
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
          remaining_exposures_total_num: totalExposures - dataBrokerFixedNum,
        }
      ),
      cta: {
        content: l10n.getString(
          "dashboard-top-banner-lets-keep-protecting-cta"
        ),
        // Ignored for test coverage; to be implemented:
        /* c8 ignore next 3 */
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
          starting_exposure_total_num: totalExposures,
        }
      ),
      cta: {
        content: l10n.getString(
          "dashboard-top-banner-your-data-is-protected-cta"
        ),
        // Ignored for test coverage; to be implemented:
        /* c8 ignore next 3 */
        onClick: () => {
          props?.ctaCallback?.();
        },
      },
    },
  };

  const content = contentData[props.content];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.explainerContentWrapper}>
          {content && !isFixedTab && (
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
          {isFixedTab && (
            <ProgressCard
              resolvedByYou={dataBreachFixedNum}
              autoRemoved={dataBrokerFixedNum}
              totalNumExposures={totalExposures}
            />
          )}
        </div>
        <div className={styles.chart}>
          <Chart hasRunScan={props.hasRunScan} data={chartData} />
        </div>
      </div>
    </>
  );
};
