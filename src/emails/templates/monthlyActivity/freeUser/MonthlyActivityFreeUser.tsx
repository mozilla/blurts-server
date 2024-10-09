/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../../app/functions/l10n";
import { EmailFooter } from "../../EmailFooter";
import { EmailHero } from "../../../components/EmailHero";
import { DataPointCount } from "../../../components/EmailDataPointCount";
import { DashboardSummary } from "../../../../app/functions/server/dashboard";
import { EmailBanner } from "../../../components/EmailBanner";
import { getPremiumSubscriptionUrl } from "../../../../app/functions/server/getPremiumSubscriptionInfo";
import { isEligibleForPremium } from "../../../../app/functions/universal/premium";
import { getSignupLocaleCountry } from "../../../functions/getSignupLocaleCountry";
import { HeaderStyles, MetaTags } from "../../HeaderStyles";

export type MonthlyReportFreeUserEmailProps = {
  l10n: ExtendedReactLocalization;
  utmCampaignId: string;
  subscriber: SubscriberRow;
  dataSummary: DashboardSummary;
  unsubscribeLink: string;
};

export const MonthlyReportFreeUserEmail = (
  props: MonthlyReportFreeUserEmailProps,
) => {
  const hasRunFreeScan = typeof props.subscriber.onerep_profile_id === "number";
  const upgradeCtaTelemetry = {
    utmSource: "monitor-product",
    utmCampaign: hasRunFreeScan
      ? "monthly-report-free-us-scanned"
      : "monthly-report-free-us-no-scan",
    utmMedium: "product-email",
    utmContent: hasRunFreeScan
      ? "unlock-with-monitor-plus-us"
      : "get-first-scan-free-us",
  };

  const l10n = props.l10n;
  const assumedCountryCode = getSignupLocaleCountry(props.subscriber);

  const premiumSubscriptionUrlObject = new URL(
    getPremiumSubscriptionUrl({
      type: "yearly",
    }),
  );

  premiumSubscriptionUrlObject.searchParams.set(
    "utm_source",
    upgradeCtaTelemetry.utmSource,
  );
  premiumSubscriptionUrlObject.searchParams.set(
    "utm_medium",
    upgradeCtaTelemetry.utmMedium,
  );
  premiumSubscriptionUrlObject.searchParams.set(
    "utm_campaign",
    upgradeCtaTelemetry.utmCampaign,
  );
  premiumSubscriptionUrlObject.searchParams.set(
    "utm_content",
    "unlock-with-monitor-plus-us",
  );

  const bannerDataCta = {
    label: hasRunFreeScan
      ? l10n.getString("email-monthly-report-free-banner-cta-upgrade")
      : l10n.getString("email-monthly-report-free-banner-cta-free-scan"),
    link: hasRunFreeScan
      ? premiumSubscriptionUrlObject.href
      : `${process.env.SERVER_URL}/user/dashboard/?utm_source=${upgradeCtaTelemetry.utmSource}&utm_medium=${upgradeCtaTelemetry.utmMedium}&utm_campaign=${upgradeCtaTelemetry.utmCampaign}&utm_content=${upgradeCtaTelemetry.utmContent}`,
  };

  const purpleActiveColor = "#7542E5";
  const greyInactiveColor = "#9E9E9E";

  const resolvedBoxData = {
    dataPointCountLabel: hasRunFreeScan
      ? "email-monthly-report-free-summary-manually-resolved-exposures"
      : "email-monthly-report-free-summary-resolved-breaches",
    // Show a sum of resolved data breach & broker exposures if a scan has been run
    // Otherwise, only show resolved data breaches
    dataPointValue: hasRunFreeScan
      ? props.dataSummary.dataBreachResolvedNum +
        props.dataSummary.dataBrokerManuallyResolvedNum
      : props.dataSummary.dataBreachResolvedNum,
    // The resolved box would be active if
    // a user has run a free scan and there are remaining exposures (data breaches & brokers)
    // or if a user hasn't run a free scan but there are remaining unresolved breaches
    activeState:
      (hasRunFreeScan &&
        props.dataSummary.dataBreachResolvedNum +
          props.dataSummary.dataBrokerManuallyResolvedNum >
          0) ||
      (!hasRunFreeScan && props.dataSummary.dataBreachResolvedNum > 0),
  };

  // Show the congratulatory banner if a user does not have any remaining exposures left to resolve
  const showCongratulatoryBanner = {
    postScan:
      hasRunFreeScan &&
      props.dataSummary.dataBreachUnresolvedNum +
        props.dataSummary.dataBrokerInProgressNum ===
        0,
    preScan: !hasRunFreeScan && props.dataSummary.dataBreachUnresolvedNum === 0,
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

            .upgrade_link {
              display: flex !important;
              align-items: center;
              gap: 10px;
              justify-content: center;
            }

            .manually_resolved_column_sparkles {
              background-image: url(${process.env.SERVER_URL}/images/email/monthly-activity/sparkles.png);
              background-position: center;
              background-size: 90%;
              background-repeat: no-repeat;
            }
        `}
        </mj-style>
      </mj-head>
      <mj-body>
        <EmailHero
          l10n={l10n}
          utm_campaign={props.utmCampaignId}
          heading={l10n.getString("email-monthly-report-hero-free-heading")}
          subheading={l10n.getString("email-monthly-report-hero-free-body")}
        />
        {/* Show the Data Point Count if there are unresolved exposures, otherwise show the congratulatory banner */}
        {!(
          showCongratulatoryBanner.postScan || showCongratulatoryBanner.preScan
        ) ? (
          <DataPointCount
            subscriber={props.subscriber}
            l10n={l10n}
            dataSummary={props.dataSummary}
            utmCampaignId={upgradeCtaTelemetry.utmCampaign}
            utmMedium={upgradeCtaTelemetry.utmMedium}
            utmSource={upgradeCtaTelemetry.utmSource}
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
            ctaTarget={`${process.env.SERVER_URL}/user/dashboard`}
          />
        )}
        {isEligibleForPremium(assumedCountryCode) && (
          <mj-section>
            <mj-text align="center" font-size="18px">
              <h3>
                {l10n.getString("email-monthly-report-free-summary-heading")}
              </h3>
            </mj-text>
            <mj-section css-class="max_width" padding-bottom="0">
              <mj-wrapper padding="0">
                <mj-group>
                  <mj-column
                    css-class="stat_column"
                    inner-border="2px solid #9E9E9E"
                    inner-border-radius="10px"
                    padding="8px"
                  >
                    <mj-text
                      align="center"
                      font-weight="bold"
                      font-size="50px"
                      color="#9E9E9E"
                    >
                      {props.dataSummary.dataBrokerAutoFixedNum}
                    </mj-text>
                    <mj-text align="center" color="#9E9E9E">
                      {l10n.getString(
                        "email-monthly-report-free-summary-auto-removed",
                        {
                          data_point_count:
                            props.dataSummary.dataBrokerAutoFixedNum,
                        },
                      )}
                    </mj-text>
                  </mj-column>
                  <mj-column
                    css-class={`stat_column ${resolvedBoxData.activeState ? `manually_resolved_column_sparkles` : ``}`}
                    inner-border={`2px solid ${resolvedBoxData.activeState ? purpleActiveColor : greyInactiveColor}`}
                    inner-border-radius="10px"
                    padding="8px"
                  >
                    <mj-text
                      align="center"
                      font-weight="bold"
                      font-size="50px"
                      color={
                        resolvedBoxData.activeState
                          ? purpleActiveColor
                          : greyInactiveColor
                      }
                    >
                      {resolvedBoxData.dataPointValue}
                    </mj-text>
                    <mj-text
                      align="center"
                      color={
                        resolvedBoxData.activeState
                          ? purpleActiveColor
                          : greyInactiveColor
                      }
                    >
                      {l10n.getString(resolvedBoxData.dataPointCountLabel, {
                        data_point_count: resolvedBoxData.dataPointValue,
                      })}
                    </mj-text>
                  </mj-column>
                </mj-group>
              </mj-wrapper>

              <mj-wrapper padding="0">
                <mj-group>
                  <mj-column>
                    <mj-group css-class="upgrade_link">
                      <mj-image
                        alt=""
                        src={`${process.env.SERVER_URL}/images/email/icons/lock-icon.png`}
                        width="14px"
                        height="16px"
                      />
                      <mj-button
                        href={premiumSubscriptionUrlObject.href}
                        background-color="transparent"
                        line-height="0"
                        color="#0060DF"
                        text-decoration="underline"
                        inner-padding="0"
                        text-align="left"
                      >
                        <i>
                          {l10n.getString(
                            "email-monthly-report-free-upgrade-cta",
                          )}
                        </i>
                      </mj-button>
                    </mj-group>
                  </mj-column>
                  <mj-column width="50%"> </mj-column>
                </mj-group>
              </mj-wrapper>
            </mj-section>
          </mj-section>
        )}

        {isEligibleForPremium(assumedCountryCode) && (
          <EmailBanner
            variant="dark"
            heading={l10n.getString("email-monthly-report-free-banner-heading")}
            content={l10n.getString("email-monthly-report-free-banner-body")}
            ctaLabel={bannerDataCta.label}
            ctaTarget={bannerDataCta.link}
          />
        )}
        <EmailFooter
          l10n={l10n}
          utm_campaign={props.utmCampaignId}
          unsubscribeLink={props.unsubscribeLink}
        />
      </mj-body>
    </mjml>
  );
};

/* c8 ignore stop */
