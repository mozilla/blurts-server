/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../../app/functions/l10n";
import { EmailFooter } from "../../EmailFooter";
import { EmailHeader } from "../../EmailHeader";
import { HibpLikeDbBreach } from "../../../../utils/hibp";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import type { LatestOnerepScanData } from "../../../../db/tables/onerep_scans";
import type { SubscriberBreach } from "../../../../utils/subscriberBreaches";
import { EmailHero } from "../../../components/EmailHero";
import { DataPointCount } from "../../../components/EmailDataPointCount";
import { DashboardSummary } from "../../../../app/functions/server/dashboard";
import { EmailBanner } from "../../../components/EmailBanner";
import { getPremiumSubscriptionUrl } from "../../../../app/functions/server/getPremiumSubscriptionInfo";
import { isEligibleForPremium } from "../../../../app/functions/universal/premium";
import { getSignupLocaleCountry } from "../../../functions/getSignupLocaleCountry";

export type MonthlyReportFreeUserEmailProps = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
  utmContentSuffix: string;
  subscriber: SubscriberRow;
  month: string;
  dataSummary: DashboardSummary;
  unsubscribeLink: string;
};

export const MonthlyReportFreeUserEmail = (
  props: MonthlyReportFreeUserEmailProps,
) => {
  const l10n = props.l10n;

  const premiumSubscriptionUrlObject = new URL(
    getPremiumSubscriptionUrl({ type: "yearly" }),
  );
  const assumedCountryCode = getSignupLocaleCountry(props.subscriber);
  const hasRunFreeScan = props.subscriber.onerep_profile_id !== null;

  const bannerDataCta = {
    label: hasRunFreeScan
      ? l10n.getString("email-monthly-report-free-banner-cta-upgrade")
      : l10n.getString("email-monthly-report-free-banner-cta-free-scan"),
    link: hasRunFreeScan
      ? premiumSubscriptionUrlObject.href
      : `${process.env.SERVER_URL}/user/dashboard/?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utmCampaignId}&utm_content=take-action${props.utmContentSuffix}`,
  };

  const purpleActiveColor = "#7542E5";
  const greyInactiveColor = "#9E9E9E";

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-report-hero-free-heading", {
            monthOfReport: props.month,
          })}
        </mj-preview>
        <mj-style>
          {/* This class rounds the edges of a table element */}
          {`
            .stat_column {
              table {
                border-collapse: separate;
                border-spacing: 0;
                padding: 15px 0px;
              }
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
          utm_campaign={"test"}
          heading={l10n.getString("email-monthly-report-hero-free-heading", {
            monthOfReport: props.month,
          })}
          subheading={l10n.getString("email-monthly-report-hero-free-body")}
        />
        {/* Show the Data Point Count if there are unresolved breaches, otherwise show the congratulatory banner */}
        {props.dataSummary.dataBreachUnresolvedNum > 0 ? (
          <DataPointCount
            subscriber={props.subscriber}
            l10n={l10n}
            utmCampaignId={props.utmCampaignId}
            utmContentSuffix={props.utmContentSuffix}
            dataSummary={props.dataSummary}
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
                    <mj-text align="center" color="#9E9E9E">
                      {l10n.getFragment(
                        "email-monthly-report-free-summary-auto-removed",
                        {
                          elems: {
                            stat: (
                              <div
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "50px",
                                  paddingBottom: "4px",
                                }}
                              />
                            ),
                          },
                          vars: {
                            // Since this goes out to free users, the auto-removed data broker count will always be 0
                            data_point_count: 0,
                          },
                        },
                      )}
                    </mj-text>
                  </mj-column>
                  <mj-column
                    css-class={`stat_column ${props.dataSummary.dataBrokerManuallyResolvedNum > 0 ? `manually_resolved_column_sparkles` : ``}`}
                    inner-border={`2px solid ${props.dataSummary.dataBrokerManuallyResolvedNum > 0 ? purpleActiveColor : greyInactiveColor}`}
                    inner-border-radius="10px"
                    padding="8px"
                  >
                    <mj-text
                      align="center"
                      color={
                        props.dataSummary.dataBrokerManuallyResolvedNum > 0
                          ? purpleActiveColor
                          : greyInactiveColor
                      }
                    >
                      {l10n.getFragment(
                        "email-monthly-report-free-summary-manually-resolved",
                        {
                          elems: {
                            stat: (
                              <div
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "50px",
                                  paddingBottom: "4px",
                                }}
                              />
                            ),
                          },
                          vars: {
                            data_point_count:
                              props.dataSummary.dataBrokerManuallyResolvedNum,
                          },
                        },
                      )}
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
                  <mj-column>&nbsp;</mj-column>
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

        <EmailHeader l10n={l10n} utm_campaign={props.utmCampaignId} />
        <EmailFooter
          l10n={l10n}
          utm_campaign={props.utmCampaignId}
          subscriber={props.subscriber}
          unsubscribeLink={props.unsubscribeLink}
        />
      </mj-body>
    </mjml>
  );
};

export type MonthlyReportFreeUserProps = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
  subscriber: SubscriberRow;
  scanData: LatestOnerepScanData;
  allSubscriberBreaches: SubscriberBreach[];
  enabledFeatureFlags: FeatureFlagName[];
};

/* c8 ignore stop */
