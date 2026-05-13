/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { getLocale } from "../../../app/functions/universal/getLocale";
import { ResolutionRelevantBreachDataTypes } from "../../../app/functions/universal/breach";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";
import { config } from "../../../config";
import { RedesignedEmailFooter } from "../../components/EmailFooter";

export type BreachAlertEmailProps = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
  subscriber: Pick<SubscriberRow, "fxa_profile_json" | "fxa_profile_json">;
  unsubscribeLink: string;
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

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-breach-alert-all-preview")}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
        <mj-style>
          {` .tg-h1 p { line-height: 40px; }
      .tg-text a { text-decoration: underline; color: unset; }
      p { margin: 0px 0px 0px 0px }
      .tg-label { border-radius: 0px 0px 0px 10px }
      .tg-text-footer a { text-decoration: underline; color: #44D8FF; }
      `}
        </mj-style>
      </mj-head>
      <mj-body background-color="#fff">
        {/* <!-- Top Spacing --> */}
        <mj-section padding="0px">
          <mj-column>
            <mj-spacer height="20px"></mj-spacer>
          </mj-column>
        </mj-section>
        {/* <!-- Hero --> */}
        <mj-section
          padding="60px 30px"
          background-color="#F5EAFF"
          border-radius="20px 20px 0px 0px"
        >
          <mj-column width="100%">
            <mj-image
              align="left"
              width="160px"
              padding="0px"
              src={`${config.serverUrl}/images/email/monitor-logo-transparent.png`}
            />
            <mj-spacer height="40px"></mj-spacer>
            <mj-text font-size="20px">
              <h2>
                {l10n.getString("email-breach-alert-all-hero-heading-1", {
                  "company-name": props.breach.Title,
                })}
              </h2>
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-text font-size="16px" line-height="24px" padding-bottom="12px">
              <p>
                {l10n.getFragment("email-breach-alert-all-lead-1", {
                  elems: {
                    link_to_data_breach: (
                      <a
                        href={`${config.serverUrl}/user/dashboard/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=dashboard${utmContentSuffix}`}
                      />
                    ),
                  },
                })}
              </p>
            </mj-text>
          </mj-column>
        </mj-section>
        {/* <!-- Top Article --> */}
        <mj-section padding="40px 30px 0px 30px">
          <mj-column>
            <mj-text
              container-background-color="#592ACB"
              font-size="14px"
              align="right"
              color="#ffffff"
              padding="4px 8px"
              line-height="18px"
              css-class="tg-label"
            >
              {l10n.getString("email-breach-alert-all-source-title-1")}
            </mj-text>
            <mj-text
              font-size="16px"
              line-height="24px"
              font-weight="bold"
              padding-bottom="14px"
              padding-top="28px"
            >
              {props.breach.Title}
            </mj-text>
            <mj-text font-size="16px" line-height="24px" padding-bottom="28px">
              <p>
                <strong>{`${l10n.getString("email-breach-alert-date-of-breach")}: `}</strong>
                {props.breach.BreachDate.toLocaleDateString()}
              </p>
              <br />
              <p>
                <strong>{`${l10n.getString("email-breach-alert-info-exposed")}: `}</strong>
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
              </p>
            </mj-text>
            <mj-button
              href={`${config.serverUrl}/user/dashboard/action-needed/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=lets-get-started${utmContentSuffix}`}
              background-color="#592ACB"
              font-weight={600}
              padding="0 0 8px 0"
              border-radius="8px"
              font-size="16px"
              line-height="24px"
              align="center"
            >
              {l10n.getString(
                "email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard",
              )}
            </mj-button>
          </mj-column>
        </mj-section>

        {/* <!-- Secondary Articles --> */}
        <mj-section padding="40px 30px 20px 30px">
          <mj-column>
            <mj-text
              font-size="16px"
              line-height="24px"
              font-weight="bold"
              padding-bottom="34px"
            >
              {l10n.getString("email-breach-alert-faqs-title")}
            </mj-text>
            {/* <!-- 1 --> */}
            <mj-divider
              padding="0px"
              border-width="2px"
              border-style="solid"
              border-color="lightgrey"
            />
            <mj-text
              font-size="16px"
              line-height="24px"
              font-weight="bold"
              padding-bottom="14px"
              padding-top="28px"
            >
              {l10n.getString("email-breach-alert-faq-qn-2")}
            </mj-text>
            <mj-text font-size="16px" line-height="24px" padding-bottom="28px">
              {l10n.getString("email-breach-alert-faq-ans-2")}
            </mj-text>
            {/* <!-- 2 --> */}
            <mj-divider
              padding="0px"
              border-width="2px"
              border-style="solid"
              border-color="lightgrey"
            />
            <mj-text
              font-size="16px"
              line-height="24px"
              font-weight="bold"
              padding-bottom="14px"
              padding-top="28px"
            >
              {l10n.getString("email-breach-alert-faq-qn-3")}
            </mj-text>
            <mj-text font-size="16px" line-height="24px" padding-bottom="28px">
              {l10n.getString("email-breach-alert-faq-ans-3")}
            </mj-text>
          </mj-column>
        </mj-section>
        <RedesignedEmailFooter
          l10n={l10n}
          utm_campaign={utmCampaignId}
          unsubscribeLink={props.unsubscribeLink}
        />
      </mj-body>
    </mjml>
  );
};

/* c8 ignore stop */
