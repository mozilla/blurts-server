/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* c8 ignore start */

import { SubscriberRow } from "knex/types/tables";
import { ExtendedReactLocalization } from "../../app/functions/l10n";
import { DashboardSummary } from "../../app/functions/server/dashboard";
import { getSignupLocaleCountry } from "../functions/getSignupLocaleCountry";
import { isEligibleForPremium } from "../../app/functions/universal/premium";
import { SanitizedSubscriberRow } from "../../app/functions/server/sanitize";
import { sumSanitizedDataPoints } from "../functions/reduceSanitizedDataPoints";

type Props = {
  l10n: ExtendedReactLocalization;
  dataSummary: DashboardSummary;
  subscriber:
    | Pick<SanitizedSubscriberRow, "fxa_profile_json" | "onerep_profile_id">
    | Pick<SubscriberRow, "fxa_profile_json" | "onerep_profile_id">;
  utmCampaignId: string;
};

export const DataPointCount = (props: Props) => {
  const assumedCountryCode = getSignupLocaleCountry(props.subscriber);
  const unresolvedDataBreaches = props.dataSummary.dataBreachUnresolvedNum;

  const hasRunFreeScan = typeof props.subscriber.onerep_profile_id === "number";
  const utmContentSuffix = isEligibleForPremium(assumedCountryCode)
    ? "-us"
    : "-global";
  return (
    <mj-wrapper padding="24px 16px">
      <mj-section
        padding="24px 52px 16px"
        background-color="#F9F9FA"
        border-radius="16px 16px 0 0"
      >
        <mj-column>
          <mj-text
            font-size="24px"
            line-height="24px"
            padding="0"
            align="center"
            font-weight={500}
          >
            <h3>
              {props.l10n.getString(
                "email-breach-alert-plus-scan-results-heading",
              )}
            </h3>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section padding="24px 52px" background-color="#F9F9FA">
        <mj-column
          background-color="#E7DFFF"
          border-radius="16px"
          padding="16px 24px"
        >
          <mj-text
            padding="0"
            align="center"
            font-weight="bold"
            font-size="60px"
            line-height="68px"
          >
            {hasRunFreeScan
              ? sumSanitizedDataPoints(
                  props.dataSummary.unresolvedSanitizedDataPoints,
                )
              : unresolvedDataBreaches}
          </mj-text>
          <mj-text
            align="center"
            font-size="14px"
            line-height="21px"
            padding="0"
          >
            <p>
              {props.l10n.getString(
                isEligibleForPremium(assumedCountryCode) && hasRunFreeScan
                  ? "email-breach-alert-plus-scan-results-data-points-label"
                  : "email-monthly-report-no-scan-results-data-points-label",
                {
                  data_point_count: hasRunFreeScan
                    ? sumSanitizedDataPoints(
                        props.dataSummary.unresolvedSanitizedDataPoints,
                      )
                    : unresolvedDataBreaches,
                },
              )}
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section
        padding="16px 52px 24px"
        background-color="#F9F9FA"
        border-radius="0 0 16px 16px"
      >
        <mj-column>
          <mj-button
            href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${props.utmCampaignId}&utm_content=resolve-exposures${utmContentSuffix}`}
            background-color="#592ACB"
            border-radius="8px"
            padding="12px 24px"
            font-weight={600}
            font-size="15px"
            line-height="22px"
            width="100%"
          >
            {props.l10n.getString("email-breach-alert-scan-results-cta-label")}
          </mj-button>
          <mj-text
            font-size="12px"
            line-height="24px"
            padding="0"
            align="center"
            font-weight={400}
            font-style="italic"
            color="#6D6D6E"
          >
            <p>
              {props.l10n.getString(
                "email-breach-alert-plus-scan-results-trailer",
              )}
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
};
/* c8 ignore stop */
