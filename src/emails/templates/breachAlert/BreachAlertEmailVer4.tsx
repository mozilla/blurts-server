/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { RedesignedEmailFooter } from "../../components/EmailFooter";
import { HibpLikeDbBreach } from "../../../utils/hibp";
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
      </mj-head>
      <mj-body background-color="#ffffff">
        {/* Narrow purple accent bar at top */}
        <mj-section background-color="#592ACB" padding="0">
          <mj-column>
            <mj-spacer height="8px" />
          </mj-column>
        </mj-section>

        {/* Logo */}
        <mj-section padding="20px 24px 0 24px">
          <mj-column>
            <mj-image
              align="left"
              width="160px"
              padding="0"
              alt=""
              src={`${config.serverUrl}/images/email/monitor-logo-transparent.png`}
            />
          </mj-column>
        </mj-section>

        {/* Heading — centered */}
        <mj-section padding="24px 24px 0 24px">
          <mj-column>
            <mj-text
              font-size="22px"
              font-weight="700"
              line-height="32px"
              align="center"
              padding="0"
            >
              {l10n.getString("email-breach-alert-all-hero-heading-1", {
                "company-name": props.breach.Title,
              })}
            </mj-text>
          </mj-column>
        </mj-section>

        {/* Lead paragraph — centered */}
        <mj-section padding="16px 24px 0 24px">
          <mj-column>
            <mj-text
              font-size="16px"
              line-height="24px"
              align="center"
              padding="0"
            >
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
            </mj-text>
          </mj-column>
        </mj-section>

        {/* Breach info card — purple border, white background */}
        <mj-section padding="20px 24px 0 24px">
          <mj-column border="2px solid #592ACB" padding="20px">
            <mj-text
              font-size="12px"
              font-weight="700"
              color="#592ACB"
              padding="0 0 10px 0"
            >
              {l10n.getString("email-breach-alert-all-source-title-1")}
            </mj-text>
            <mj-text
              font-size="18px"
              font-weight="700"
              line-height="26px"
              padding="0 0 12px 0"
            >
              {props.breach.Title}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0 0 6px 0">
              <strong>
                {l10n.getString("email-breach-alert-date-of-breach")}
              </strong>{" "}
              {props.breach.BreachDate.toLocaleDateString()}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0">
              <strong>
                {l10n.getString("email-breach-alert-info-exposed")}
              </strong>{" "}
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
            </mj-text>
          </mj-column>
        </mj-section>

        {/* Next steps */}
        <mj-section padding="20px 24px 0 24px">
          <mj-column>
            <mj-text font-size="16px" font-weight="700" padding="0 0 8px 0">
              {l10n.getString("email-breach-alert-next-steps")}
            </mj-text>
            <mj-text font-size="16px" line-height="24px" padding="0">
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

        {/* CTA button */}
        <mj-section padding="20px 24px">
          <mj-column>
            <mj-button
              href={`${config.serverUrl}/user/dashboard/action-needed/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${utmCampaignId}&utm_content=lets-get-started${utmContentSuffix}`}
              background-color="#592ACB"
              font-weight="600"
              border-radius="8px"
              font-size="16px"
              line-height="24px"
              padding="0 0 8px 0"
              align="center"
            >
              {l10n.getString(
                "email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard",
              )}
            </mj-button>
          </mj-column>
        </mj-section>

        {/* FAQs — numbered questions */}
        <mj-section padding="0 24px">
          <mj-column>
            <mj-divider
              padding="0"
              border-width="1px"
              border-style="solid"
              border-color="#d9d9d9"
            />
          </mj-column>
        </mj-section>

        <mj-section padding="20px 24px 0 24px">
          <mj-column>
            <mj-text font-size="16px" font-weight="700" padding="0 0 16px 0">
              {l10n.getString("email-breach-alert-faqs-title")}
            </mj-text>

            {/* FAQ 1 */}
            <mj-text
              font-size="15px"
              font-weight="700"
              line-height="22px"
              padding="0 0 4px 0"
            >
              {"1. "}
              {l10n.getString("email-breach-alert-faq-qn-1")}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0 0 16px 0">
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
            <mj-text
              font-size="15px"
              font-weight="700"
              line-height="22px"
              padding="0 0 4px 0"
            >
              {"2. "}
              {l10n.getString("email-breach-alert-faq-qn-2")}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0 0 16px 0">
              {l10n.getString("email-breach-alert-faq-ans-2")}
            </mj-text>

            {/* FAQ 3 */}
            <mj-text
              font-size="15px"
              font-weight="700"
              line-height="22px"
              padding="0 0 4px 0"
            >
              {"3. "}
              {l10n.getString("email-breach-alert-faq-qn-3")}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0 0 16px 0">
              {l10n.getString("email-breach-alert-faq-ans-3")}
            </mj-text>

            {/* FAQ 4 */}
            <mj-text
              font-size="15px"
              font-weight="700"
              line-height="22px"
              padding="0 0 4px 0"
            >
              {"4. "}
              {l10n.getString("email-breach-alert-faq-qn-4")}
            </mj-text>
            <mj-text font-size="15px" line-height="22px" padding="0 0 24px 0">
              {l10n.getString("email-breach-alert-faq-ans-4")}
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
