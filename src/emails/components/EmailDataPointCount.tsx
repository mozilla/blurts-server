/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { ExtendedReactLocalization } from "../../app/functions/l10n";

export const DataPointCount = ({
  l10n,
}: {
  l10n: ExtendedReactLocalization;
}) => {
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
              {l10n.getString("email-breach-alert-plus-scan-results-heading")}
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
          <mj-text align="center" font-size="14px" line-height="21px">
            <p>
              {l10n.getFragment(
                "email-breach-alert-plus-scan-results-data-points-label",
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
                  vars: { data_point_count: 10 },
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
            href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utmCampaignId}&utm_content=take-action${props.utmContentSuffix}`}
            background-color="#0060DF"
            border-radius="8px"
            padding="12px 24px"
            font-weight={600}
            font-size="15px"
            line-height="22px"
            width="100%"
          >
            {l10n.getString("email-breach-alert-plus-scan-results-cta-label")}
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
              {l10n.getString("email-breach-alert-plus-scan-results-trailer")}
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
};
