/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../EmailFooter";
import { EmailHeader } from "../EmailHeader";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { BreachCard } from "../../components/BreachCard";

export type Props = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
};

export const BreachAlertEmail = (props: Props) => {
  const l10n = props.l10n;

  return (
    <mjml>
      <mj-head>
        <mj-preview>{l10n.getString("email-spotted-new-breach")}</mj-preview>
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={props.utmCampaignId} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getFragment("email-breach-detected-2", {
                vars: { "email-address": props.breachedEmail },
                elems: { b: <b /> },
              })}
            </mj-text>
          </mj-column>
        </mj-section>
        <BreachCard breach={props.breach} l10n={l10n} />
        <mj-section padding="20px">
          <mj-column>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utmCampaignId}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-dashboard-cta")}
            </mj-button>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={props.utmCampaignId} />
      </mj-body>
    </mjml>
  );
};
