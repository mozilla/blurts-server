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
import PremiumButton from "../../../../../components/client/PremiumButton";
import {
  InputData as StepDeterminationData,
  getRelevantGuidedSteps,
} from "../../../../../functions/server/getRelevantGuidedSteps";
import { hasPremium } from "../../../../../functions/universal/user";

export type BannerContent =
  | "ScanInProgressContent"
  | "LetsFixDataContent"
  | "DataBrokerScanUpsellContent"
  | "NoExposuresFoundContent"
  | "ResumeBreachResolutionContent"
  | "YourDataIsProtectedContent"
  | "YourDataIsProtectedAllFixedContent"
  | "NoContent";

export type DashboardTopBannerProps = {
  content: BannerContent;
  bannerData: DashboardSummary;
  stepDeterminationData: StepDeterminationData;
  isEligibleForFreeScan: boolean;
  type: TabType;
  scanInProgress: boolean;
  onShowFixed: () => void;
};

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const l10n = useL10n();

  const chartDataKey =
    props.type === "fixed" ? "fixedSanitizedExposures" : "sanitizedExposures";
  const chartData: [string, number][] = props.bannerData[chartDataKey].map(
    (obj) => {
      const [key, value] = Object.entries(obj)[0];
      return [l10n.getString(key), value];
    }
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.explainerContentWrapper}>
          <Content
            bannerData={props.bannerData}
            isOnFixedTab={props.type === "fixed"}
            onShowFixed={props.onShowFixed}
            stepDeterminationData={props.stepDeterminationData}
          />
        </div>
        <div className={styles.chart}>
          <Chart
            scanInProgress={props.scanInProgress}
            data={chartData}
            isEligibleForFreeScan={props.isEligibleForFreeScan}
          />
        </div>
      </div>
    </>
  );
};

const Content = (props: {
  stepDeterminationData: StepDeterminationData;
  bannerData: DashboardSummary;
  isOnFixedTab: boolean;
  onShowFixed: () => void;
}) => {
  const l10n = useL10n();

  if (props.isOnFixedTab) {
    return (
      <ProgressCard
        resolvedByYou={props.bannerData.dataBreachFixedNum}
        autoRemoved={props.bannerData.dataBrokerFixedNum}
        totalNumExposures={props.bannerData.totalExposures}
      />
    );
  }

  const relevantGuidedStep = getRelevantGuidedSteps(
    props.stepDeterminationData
  ).current;

  // There should be a relevant next step for every user (even if it's just
  // going back to the dashbord), so we can't hit this line in tests (and
  // shouldn't be able to in production either):
  /* c8 ignore next 3 */
  if (relevantGuidedStep === null) {
    return null;
  }

  const dataBrokerCount = parseInt(
    process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
    10
  );

  if (relevantGuidedStep.id === "StartScan") {
    // If the user hasn't run a data broker scan yet (and is able to),
    // encourage them to run one:
    return (
      <div className={styles.explainerContent}>
        <h3>
          {l10n.getString(
            "dashboard-top-banner-monitor-protects-your-even-more-title"
          )}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-monitor-protects-your-even-more-description",
            {
              data_broker_sites_total_num: dataBrokerCount,
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={relevantGuidedStep.href} small variant="primary">
            {l10n.getString(
              "dashboard-top-banner-monitor-protects-your-even-more-cta"
            )}
          </Button>
        </div>
        <p>
          <a href="https://mozilla.org/products/monitor/how-it-works/">
            {l10n.getString(
              "dashboard-top-banner-monitor-protects-your-even-more-learn-more"
            )}
          </a>
        </p>
      </div>
    );
  }

  if (relevantGuidedStep.id === "ScanInProgress") {
    // If the user has started a broker scan and it’s not finished yet.
    return (
      <div className={styles.explainerContent}>
        <h3>{l10n.getString("dashboard-top-banner-scan-in-progress-title")}</h3>
        <p>
          {l10n.getFragment(
            "dashboard-top-banner-scan-in-progress-description",
            {
              vars: {
                data_breach_total_num: props.bannerData.totalExposures,
              },
              elems: {
                b: <strong />,
              },
            }
          )}
          <br />
          <br />
          {!props.bannerData.totalExposures
            ? l10n.getString(
                "dashboard-top-banner-scan-in-progress-fix-later-hint"
              )
            : l10n.getString(
                "dashboard-top-banner-scan-in-progress-fix-now-hint"
              )}
        </p>
        <div className={styles.cta}>
          <Button
            href={
              "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers"
            }
            small
            variant="primary"
          >
            {l10n.getString("dashboard-top-banner-scan-in-progress-cta")}
          </Button>
        </div>
      </div>
    );
  }

  if (relevantGuidedStep.id === "ScanResult") {
    if (
      typeof props.stepDeterminationData.latestScanData?.results.length ===
        "number" &&
      props.stepDeterminationData.latestScanData.results.length > 0
    ) {
      // If the user has run a data broker scan, their data was found at a data
      // broker, and they have not yet addressed that, encourage them to do that:
      return (
        <div className={styles.explainerContent}>
          <h3>
            {l10n.getString("dashboard-top-banner-protect-your-data-title")}
          </h3>
          <p>
            {l10n.getString(
              "dashboard-top-banner-protect-your-data-description",
              {
                data_breach_total_num: props.bannerData.dataBreachTotalNum,
                data_broker_total_num: props.bannerData.dataBrokerTotalNum,
              }
            )}
          </p>
          <div className={styles.cta}>
            <Button href={relevantGuidedStep.href} small variant="primary">
              {l10n.getString("dashboard-top-banner-protect-your-data-cta")}
            </Button>
          </div>
        </div>
      );
      // The V8 coverage reporter appears to get confused by the `ignore start`
      // below, and think this closing bracket is ignored as well:
      /* c8 ignore next 2 */
    }

    /* c8 ignore start */
    // If the user has run a data broker scan, but their data was not found,
    // congratulate them and encourage them to see their results.
    // TODO: Check with PM - this state is currently never shown, because users
    //       are directed to their data breaches if they have no unresolved data
    //       brokers. Should we be keeping track of the user "acknowledging"
    //       their scan results or something?
    return (
      <div className={styles.explainerContent}>
        <h3>
          {l10n.getString("dashboard-top-banner-no-exposures-found-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-no-exposures-found-description",
            {
              data_broker_sites_total_num: dataBrokerCount,
            }
          )}
        </p>
        <div className={styles.cta}>
          <Button href={relevantGuidedStep.href} small variant="primary">
            {l10n.getString("dashboard-top-banner-no-exposures-found-cta")}
          </Button>
        </div>
      </div>
    );
  }
  /* c8 ignore stop */

  if (relevantGuidedStep.id === "Done") {
    if (hasPremium(props.stepDeterminationData.user)) {
      return (
        <div className={styles.explainerContent}>
          <h3>
            {l10n.getString(
              "dashboard-top-banner-your-data-is-protected-title"
            )}
          </h3>
          <p>
            {l10n.getString(
              "dashboard-top-banner-your-data-is-protected-description",
              {
                starting_exposure_total_num: props.bannerData.totalExposures,
              }
            )}
          </p>
          <div className={styles.cta}>
            <Button
              onPress={() => {
                props.onShowFixed();
              }}
              small
              variant="primary"
            >
              {l10n.getString(
                "dashboard-top-banner-your-data-is-protected-cta"
              )}
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.explainerContent}>
        <h3>
          {l10n.getString("dashboard-top-banner-your-data-is-protected-title")}
        </h3>
        <p>
          {l10n.getString(
            "dashboard-top-banner-your-data-is-protected-all-fixed-description",
            {
              starting_exposure_total_num: props.bannerData.totalExposures,
            }
          )}
        </p>
        <div className={styles.cta}>
          <PremiumButton
            label={"dashboard-top-banner-your-data-is-protected-all-fixed-cta"}
          />
        </div>
      </div>
    );
  }

  // If the user was halfway through the resolution wizard,
  // encourage them to pick up where they left off:
  return (
    <div className={styles.explainerContent}>
      <h3>
        {l10n.getString("dashboard-top-banner-lets-keep-protecting-title")}
      </h3>
      <p>
        {l10n.getString(
          "dashboard-top-banner-lets-keep-protecting-description",
          {
            remaining_exposures_total_num:
              props.bannerData.totalExposures -
              props.bannerData.dataBrokerFixedNum,
          }
        )}
      </p>
      <div className={styles.cta}>
        <Button href={relevantGuidedStep.href} small disabled variant="primary">
          {l10n.getString("dashboard-top-banner-lets-keep-protecting-cta")}
        </Button>
      </div>
    </div>
  );
};
