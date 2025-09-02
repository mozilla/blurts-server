/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { RedesignedEmailFooter } from "../../components/EmailFooter";
import { EmailHero } from "../../components/EmailHero";
import { DataPointCount } from "../../components/EmailDataPointCount";
import { DashboardSummary } from "../../../app/functions/server/dashboard";
import { EmailBanner } from "../../components/EmailBanner";
import { isEligibleForPremium } from "../../../app/functions/universal/premium";
import { getSignupLocaleCountry } from "../../functions/getSignupLocaleCountry";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { sumSanitizedDataPoints } from "../../functions/reduceSanitizedDataPoints";
import { modifyAttributionsForUrl } from "../../../app/functions/universal/attributions";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { CONST_URL_WAITLIST } from "../../../constants";
import { ExperimentData } from "../../../telemetry/generated/nimbus/experiments";

export type MonthlyActivityFreeEmailProps = {
  l10n: ExtendedReactLocalization;
  subscriber: SanitizedSubscriberRow;
  dataSummary: DashboardSummary;
  unsubscribeLink: string;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
};

type UtmParams = {
  utmSource: string;
  utmCampaign: string;
  utmMedium: string;
  utmContent?: string;
};

const setUtmCampaign = (
  utmSuffix: string,
  hasRunFreeScan: boolean,
  hasResolvedBreaches: boolean,
  hasExposures: boolean,
): string => {
  const scanStatus = hasRunFreeScan ? "scan-yes" : "scan-no";
  const breachStatus = hasResolvedBreaches
    ? "breach-resolved-yes"
    : "breach-resolved-no";
  const exposureStatus = hasExposures ? `exp-yes` : "exp-no";

  return `monthly-report-free${utmSuffix}-${scanStatus}-${exposureStatus}-${breachStatus}`;
};

export const MonthlyActivityFreeEmail = (
  props: MonthlyActivityFreeEmailProps,
) => {
  const hasRunFreeScan =
    props.enabledFeatureFlags.includes("Moscary") ||
    props.experimentData["moscary"].enabled
      ? typeof props.subscriber.moscary_id === "string"
      : typeof props.subscriber.onerep_profile_id === "number";

  const l10n = props.l10n;
  const assumedCountryCode = getSignupLocaleCountry(props.subscriber);
  /* c8 ignore next 3 */
  const utmContentSuffix = isEligibleForPremium(assumedCountryCode)
    ? "-us"
    : "-global";

  const utmValues: UtmParams = {
    utmSource: "monitor-product",
    utmCampaign: setUtmCampaign(
      utmContentSuffix,
      hasRunFreeScan,
      props.dataSummary.dataBreachResolvedNum > 0,
      sumSanitizedDataPoints(props.dataSummary.unresolvedSanitizedDataPoints) >
        0,
    ),
    utmMedium: "product-email",
  };

  const replaceValues = {
    utm_source: utmValues.utmSource,
    utm_medium: utmValues.utmMedium,
    utm_campaign: utmValues.utmCampaign,
  };

  const unlockWithMonitorPlusCta = modifyAttributionsForUrl(
    `${process.env.SERVER_URL}/link/subscribe/yearly`,
    {
      ...replaceValues,
      utm_content: `unlock-with-monitor-plus${utmContentSuffix}`,
    },
    {},
  );

  const greyBorderColor = "#CECECF";
  const greyTextColor = "#6D6D6E";
  const blackTextColor = "#000000";
  const greenActiveTextColor = "#00A49A";
  const greenActiveBorderColor = "#88FFD1";
  const purpleActiveTextColor = "#592ACB";
  const purpleActiveBorderColor = "#CB9EFF";

  // Always breach-related
  const leftBoxData = {
    activeState: props.dataSummary.dataBreachResolvedNum > 0,
    dataPointCountLabel: l10n.getString(
      "email-monthly-report-free-breaches-resolved-manually",
    ),
    dataPointValue: props.dataSummary.dataBreachResolvedNum,
  };

  // Always scan-related
  const rightBoxData = {
    activeState: !hasRunFreeScan,
    // When a free scan is run, show auto-removed exposures data point
    // If a free scan hasn't been run, show that that is an available free scan
    dataPointCountLabel: hasRunFreeScan
      ? "email-monthly-report-free-summary-auto-removed"
      : "email-monthly-report-free-broker-scan-available",
    // Show number of free scans if a scan hasn't been run
    // If a free scan is run, show auto-removed exposures (should be 0, unless a user has an expired sub with previously removed exposures)
    dataPointValue: hasRunFreeScan
      ? props.dataSummary.dataBrokerAutoFixedDataPointsNum
      : 1,
  };

  // Show the congratulatory banner if a user does not have any remaining exposures left to resolve
  // Before a scan, we count the number of breach cards as the total exposure amount.
  // After a scan, we count the number of cumalative data points for both breaches and data broker exposures.
  const showCongratulatoryBanner = {
    preScan: !hasRunFreeScan && props.dataSummary.dataBreachUnresolvedNum === 0,
    postScan:
      hasRunFreeScan &&
      sumSanitizedDataPoints(
        props.dataSummary.unresolvedSanitizedDataPoints,
      ) === 0,
  };

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-report-hero-free-heading")}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
        <mj-style>
          {/* This class rounds the edges of a table element */}
          {`
            .stat_column table {
                border-collapse: separate;
                border-spacing: 0;
                padding: 15px 0px;
            }

            .lock_icon {
              background-image: url(${process.env.SERVER_URL}/images/email/monthly-activity/lock-icon.png);
              background-position: top right;
              background-size: 22px 20px;
              background-repeat: no-repeat;
            }
        `}
        </mj-style>
      </mj-head>
      <mj-body>
        <EmailHero
          l10n={l10n}
          utm_campaign={utmValues.utmCampaign}
          heading={l10n.getString("email-monthly-report-hero-free-heading")}
          subheading={l10n.getString("email-monthly-report-hero-free-subtitle")}
          utmContentSuffix={utmContentSuffix}
        />
        {/* Show the Data Point Count if there are unresolved exposures, otherwise show the congratulatory banner */}
        {!(
          showCongratulatoryBanner.postScan || showCongratulatoryBanner.preScan
        ) ? (
          <DataPointCount
            subscriber={props.subscriber}
            l10n={l10n}
            dataSummary={props.dataSummary}
            enabledFeatureFlags={props.enabledFeatureFlags}
            experimentData={props.experimentData}
            utmCampaignId={utmValues.utmCampaign}
            utmMedium={utmValues.utmMedium}
            utmSource={utmValues.utmSource}
          />
        ) : (
          <EmailBanner
            variant="light"
            heading={l10n.getString(
              "email-monthly-report-hero-free-no-breaches-heading",
            )}
            content={l10n.getString(
              "email-monthly-report-hero-free-no-breaches-body",
            )}
            ctaLabel={l10n.getString(
              "email-monthly-report-hero-free-no-breaches-cta",
            )}
            ctaTarget={`${process.env.SERVER_URL}/user/dashboard/?utm_source=${utmValues.utmSource}&utm_medium=${utmValues.utmMedium}&utm_campaign=${utmValues.utmCampaign}&utm_content=view-your-dashboard-us`}
          />
        )}
        {isEligibleForPremium(assumedCountryCode) && (
          <>
            <mj-section padding-bottom="0">
              <mj-column>
                <mj-text align="center" font-size="18px">
                  <h3>
                    {l10n.getString(
                      "email-monthly-report-free-summary-heading",
                    )}
                  </h3>
                </mj-text>
              </mj-column>
            </mj-section>
            <mj-section padding-bottom="0">
              <mj-group width="100%">
                <mj-column
                  css-class={`stat_column`}
                  inner-border={`2px solid ${leftBoxData.activeState ? greenActiveBorderColor : greyBorderColor}`}
                  inner-border-radius="10px"
                  padding="8px"
                >
                  <mj-text
                    align="center"
                    font-weight="bold"
                    font-size="50px"
                    // If there are data breaches manually resolved, show the active state
                    color={
                      leftBoxData.activeState
                        ? greenActiveTextColor
                        : greyTextColor
                    }
                  >
                    {leftBoxData.dataPointValue}
                  </mj-text>
                  <mj-text
                    align="center"
                    color={
                      leftBoxData.activeState ? blackTextColor : greyTextColor
                    }
                  >
                    {leftBoxData.dataPointCountLabel}
                  </mj-text>
                </mj-column>
                <mj-column
                  css-class="stat_column"
                  inner-border={`2px solid ${rightBoxData.activeState ? purpleActiveBorderColor : greyBorderColor}`}
                  inner-border-radius="10px"
                  padding="8px"
                >
                  <mj-text
                    css-class={`${!rightBoxData.activeState && `lock_icon`}`}
                    align="center"
                    font-weight="bold"
                    font-size="50px"
                    // If there is a free scan available, show the active state
                    color={
                      rightBoxData.activeState
                        ? purpleActiveTextColor
                        : greyTextColor
                    }
                  >
                    {rightBoxData.dataPointValue}
                  </mj-text>
                  <mj-text
                    align="center"
                    color={
                      rightBoxData.activeState ? blackTextColor : greyTextColor
                    }
                  >
                    {l10n.getString(rightBoxData.dataPointCountLabel, {
                      data_point_count: rightBoxData.dataPointValue,
                    })}
                  </mj-text>
                </mj-column>
              </mj-group>
              {hasRunFreeScan &&
                !props.enabledFeatureFlags.includes("DisableOneRepScans") && (
                  <mj-column width="100%">
                    <mj-button
                      href={unlockWithMonitorPlusCta}
                      background-color="transparent"
                      color="#0060DF"
                      text-decoration="underline"
                      inner-padding="0"
                      text-align="left"
                    >
                      {l10n.getString("email-monthly-report-free-upgrade-cta")}
                    </mj-button>
                  </mj-column>
                )}
              {hasRunFreeScan &&
                props.enabledFeatureFlags.includes("DisableOneRepScans") && (
                  <mj-column width="100%">
                    <mj-button
                      href={CONST_URL_WAITLIST}
                      background-color="transparent"
                      color="#0060DF"
                      text-decoration="underline"
                      inner-padding="0"
                      text-align="left"
                    >
                      {l10n.getString("landing-premium-max-scan-waitlist")}
                    </mj-button>
                  </mj-column>
                )}
              <mj-column width="100%" border-top="8px">
                <mj-button
                  href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=${utmValues.utmSource}&utm_medium=${utmValues.utmMedium}&utm_campaign=${utmValues.utmCampaign}&utm_content=view-details${utmContentSuffix}`}
                  background-color="#592ACB"
                  border-radius="8px"
                  padding="12px 24px"
                  font-weight={600}
                  font-size="15px"
                  line-height="22px"
                  width="100%"
                >
                  {props.l10n.getString(
                    "email-monthly-report-free-view-details",
                  )}
                </mj-button>
              </mj-column>
            </mj-section>
          </>
        )}
        <RedesignedEmailFooter
          l10n={l10n}
          utm_campaign={utmValues.utmCampaign}
          unsubscribeLink={props.unsubscribeLink}
        />
      </mj-body>
    </mjml>
  );
};

/* c8 ignore stop */
