/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { RedesignedEmailFooter } from "../../components/EmailFooter";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { EmailHero } from "../../components/EmailHero";
import { getLocale } from "../../../app/functions/universal/getLocale";
import { ResolutionRelevantBreachDataTypes } from "../../../app/functions/universal/breach";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";
import { config } from "../../../config";

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
        <mj-style>{`p { margin: 0 0 4px 0; }`}</mj-style>
      </mj-head>
      <mj-body>
        <EmailHero
          l10n={l10n}
          utm_campaign={utmCampaignId}
          utmContentSuffix={utmContentSuffix}
          heading={l10n.getString("email-breach-alert-all-hero-heading-1", {
            "company-name": props.breach.Title,
          })}
        />
        <mj-section padding="24px">
          <mj-column>
            <mj-text font-size="16px" line-height="24px" padding-bottom="28px">
              <p>
                {l10n.getFragment("email-breach-alert-all-lead-1", {
                  vars: {
                    "company-name": props.breach.Title,
                    "breach-date": props.breach.BreachDate.toLocaleDateString(),
                  },
                  elems: {
                    link_to_settings: (
                      <a
                        href={`${config.serverUrl}/user/settings/notifications`}
                      />
                    ),
                  },
                })}
              </p>
            </mj-text>

            <mj-text
              font-size="16px"
              line-height="24px"
              font-weight="700"
              padding-top="0"
              padding-bottom="16px"
            >
              {l10n.getString("email-breach-alert-all-source-title-1")}
            </mj-text>

            <mj-text font-size="16px" line-height="24px" padding-top="0">
              <p>
                <strong>{`${l10n.getString("email-breach-alert-company")}: `}</strong>
                {props.breach.Title}
              </p>
              <p>
                <strong>{`${l10n.getString("email-breach-alert-date-of-breach")}: `}</strong>
                {props.breach.BreachDate.toLocaleDateString()}
              </p>
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
          </mj-column>
        </mj-section>

        <mj-section padding="0 24px 12px">
          <mj-column>
            <mj-text font-size="16px">
              <strong>{l10n.getString("email-breach-alert-next-steps")}</strong>
            </mj-text>
            <mj-text font-size="16px" line-height="24px" padding-top="0">
              {l10n.getFragment("email-breach-alert-next-steps-description", {
                elems: {
                  sign_in_link: (
                    <a
                      href={`${config.serverUrl}/user/dashboard/fixed?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=sign-in${utmContentSuffix}`}
                    />
                  ),
                },
              })}
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section>
          <mj-column>
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

        <mj-section padding="12px 24px">
          <mj-column>
            <mj-text font-size="16px">
              <strong>{l10n.getString("email-breach-alert-faqs-title")}</strong>
            </mj-text>

            {/* FAQ 1 */}
            <mj-text font-size="16px" line-height="24px" padding-top="0">
              <strong>{l10n.getString("email-breach-alert-faq-qn-1")}</strong>
              <br />
              {l10n.getFragment("email-breach-alert-faq-ans-1", {
                elems: {
                  link_to_settings: (
                    <a
                      href={`${config.serverUrl}/user/settings/notifications`}
                    />
                  ),
                },
              })}
            </mj-text>

            {/* FAQ 2 */}
            <mj-text font-size="16px" line-height="24px" padding-top="0">
              <strong>{l10n.getString("email-breach-alert-faq-qn-2")}</strong>
              <br />
              {l10n.getString("email-breach-alert-faq-ans-2")}
            </mj-text>

            {/* FAQ 3 */}
            <mj-text font-size="16px" line-height="24px" padding-top="0">
              <strong>{l10n.getString("email-breach-alert-faq-qn-3")}</strong>
              <br />
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
