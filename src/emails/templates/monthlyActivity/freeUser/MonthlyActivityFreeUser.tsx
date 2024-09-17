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
        <DataPointCount
          subscriber={props.subscriber}
          l10n={l10n}
          utmCampaignId={props.utmCampaignId}
          utmContentSuffix={props.utmContentSuffix}
          dataSummary={props.dataSummary}
        />
        <EmailBanner
          heading={l10n.getString("email-monthly-report-free-banner-heading")}
          content={l10n.getString("email-monthly-report-free-banner-body")}
          ctaLabel={l10n.getString("email-monthly-report-free-banner-cta-scan")}
          ctaTarget={`${process.env.SERVER_URL}/user/dashboard/?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utmCampaignId}&utm_content=take-action${props.utmContentSuffix}`}
        />
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
