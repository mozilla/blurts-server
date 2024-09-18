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

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-report-hero-free-heading")}
        </mj-preview>
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
        <mj-section padding="24px">
          <mj-column>
            <mj-text align="center">
              {l10n.getFragment(
                "email-monthly-report-free-summary-auto-removed",
                {
                  elems: {
                    stat: (
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "60px",
                          lineHeight: "68px",
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
          <mj-column>
            <mj-text align="center">
              {l10n.getFragment(
                "email-monthly-report-free-summary-manually-resolved",
                {
                  elems: {
                    stat: (
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "60px",
                          lineHeight: "68px",
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
        </mj-section>
        <DataPointCount
          subscriber={props.subscriber}
          l10n={l10n}
          utmCampaignId={props.utmCampaignId}
          utmContentSuffix={props.utmContentSuffix}
          dataSummary={props.dataSummary}
        />
        {isEligibleForPremium(assumedCountryCode) && (
          <EmailBanner
            heading={l10n.getString("email-monthly-report-free-banner-heading")}
            content={l10n.getString("email-monthly-report-free-banner-body")}
            ctaLabel={bannerDataCta.label}
            ctaTarget={bannerDataCta.link}
          />
        )}

        <EmailHeader l10n={l10n} utm_campaign={props.utmCampaignId} />
        <EmailFooter l10n={l10n} utm_campaign={props.utmCampaignId} />
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
