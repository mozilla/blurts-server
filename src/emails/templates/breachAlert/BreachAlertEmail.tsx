/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { RedesignedEmailFooter } from "../../components/EmailFooter";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { EmailHero } from "../../components/EmailHero";
import { getLocale } from "../../../app/functions/universal/getLocale";
import { DashboardSummary } from "../../../app/functions/server/dashboard";
import { ResolutionRelevantBreachDataTypes } from "../../../app/functions/universal/breach";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";

export type BreachAlertEmailProps = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
  subscriber: Pick<
    SubscriberRow,
    "fxa_profile_json" | "onerep_profile_id" | "fxa_profile_json"
  >;
  /**
   * We need to run a bunch of queries to collect this data,
   * so it's optional; however, make sure to pass it in for
   * free users who are eligible for Plus (i.e. in the US),
   * who have run a scan — those are the ones we show a
   * <DataPointCount> for at the moment.
   */
  dataSummary?: DashboardSummary;
};

// These components are fully covered by the BreachAlertEmail test,
// but for some reason get marked as uncovered again once the
// `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
/* c8 ignore start */
export const BreachAlertEmail = (props: BreachAlertEmailProps) => {
  const l10n = props.l10n;
  const locale = getLocale(props.l10n);
  const listFormatter = new Intl.ListFormat(locale);
  const utmContentSuffix = "-global";
  const utmCampaignId = "breach-alert-global";

  const premiumSubscriptionUrlObject = new URL(
    `${process.env.SERVER_URL}/link/subscribe/monthly`,
  );
  premiumSubscriptionUrlObject.searchParams.set("utm_medium", "product-email");
  premiumSubscriptionUrlObject.searchParams.set(
    "utm_source",
    "monitor-product",
  );
  premiumSubscriptionUrlObject.searchParams.set("utm_campaign", utmCampaignId);
  premiumSubscriptionUrlObject.searchParams.set(
    "utm_content",
    `get-monitor-plus${utmContentSuffix}`,
  );

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-breach-alert-all-preview")}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
        <mj-style>
          {`
            dt {
              font-weight: bold;
              display: inline-block;
              padding-right: 4px;
              padding-inline-end: 4px;
            }
            dd {
              display: inline;
            }
          `}
        </mj-style>
      </mj-head>
      <mj-body>
        <EmailHero
          l10n={l10n}
          utm_campaign={utmCampaignId}
          utmContentSuffix={utmContentSuffix}
          heading={l10n.getString("email-breach-alert-all-hero-heading")}
          subheading={l10n.getString("email-breach-alert-all-hero-subheading")}
        />
        <mj-section padding="24px 52px 12px">
          <mj-column>
            <mj-text font-size="16px" line-height="24px">
              <p>{l10n.getString("email-breach-alert-all-lead")}</p>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="16px 52px">
          <mj-column>
            <mj-text font-size="16px" line-height="24px">
              <dl>
                <div>
                  <dt>
                    <b>
                      {l10n.getString("email-breach-alert-all-source-title")}
                    </b>
                  </dt>
                  <dd>{props.breach.Title}</dd>
                </div>
                <div>
                  <dt>
                    <b>
                      {l10n.getString(
                        "email-breach-alert-all-data-points-title",
                      )}
                    </b>
                  </dt>
                  <dd>
                    {listFormatter.format(
                      (props.breach.DataClasses ?? [])
                        .filter((datatype) =>
                          (
                            Object.values(
                              ResolutionRelevantBreachDataTypes,
                            ) as string[]
                          ).includes(datatype),
                        )
                        .map((classKey) => props.l10n.getString(classKey)),
                    )}
                  </dd>
                </div>
              </dl>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="12px 52px">
          <mj-column>
            <mj-text font-size="16px" line-height="24px">
              <p>{l10n.getString("email-breach-alert-all-next-steps-lead")}</p>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="12px 0 24px 52px" text-align="left">
          <mj-column padding="0" padding-left="24px" width="250px">
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/action-needed/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=lets-get-started${utmContentSuffix}`}
              background-color="#0060DF"
              border="2px solid #0060DF"
              font-weight={600}
              padding="0 0 8px 0"
              border-radius="8px"
              font-size="16px"
              line-height="24px"
              align="left"
              width="240px"
            >
              {l10n.getString("email-breach-alert-all-next-steps-cta-label")}
            </mj-button>
          </mj-column>
          <mj-column padding="0" padding-left="24px" width="250px">
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=dashboard${utmContentSuffix}`}
              background-color="white"
              border="2px solid #0060DF"
              color="#0060DF"
              font-weight={600}
              padding="0"
              border-radius="8px"
              font-size="16px"
              line-height="24px"
              align="left"
              width="240px"
            >
              {l10n.getString(
                "email-breach-alert-all-next-steps-button-dashboard",
              )}
            </mj-button>
          </mj-column>
        </mj-section>

        <RedesignedEmailFooter l10n={l10n} utm_campaign={utmCampaignId} />
      </mj-body>
    </mjml>
  );
};

/* c8 ignore stop */
