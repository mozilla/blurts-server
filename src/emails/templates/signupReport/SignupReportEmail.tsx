/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Fragment } from "react";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../../components/EmailFooter";
import { EmailHeader } from "../../components/EmailHeader";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { BreachCard } from "../../components/BreachCard";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";

export type Props = {
  l10n: ExtendedReactLocalization;
  breaches: HibpLikeDbBreach[];
  breachedEmailAddress: string;
};

export const SignupReportEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "signup-report";

  return (
    <mjml>
      <mj-head>
        <mj-preview>{l10n.getString("email-breach-summary")}</mj-preview>
        <MetaTags />
        <HeaderStyles />
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text align="center" font-size="16px" line-height="24px">
              {props.breaches.length > 0
                ? l10n.getString("email-breach-detected", {
                    "email-address": props.breachedEmailAddress,
                  })
                : l10n.getString("fxm-warns-you-no-breaches")}
            </mj-text>
          </mj-column>
        </mj-section>
        {props.breaches.map((breach, i) => (
          <Fragment key={breach.Id}>
            {i > 0 && (
              // > mj-spacer cannot be used inside mj-body, only inside: mj-attributes, mj-column, mj-hero.
              // And <mj-column>s "must be located under mj-section tags".
              <mj-section padding="0">
                <mj-column padding="0">
                  <mj-spacer height="20px" />
                </mj-column>
              </mj-section>
            )}
            <BreachCard breach={breach} l10n={l10n} />
          </Fragment>
        ))}
        <mj-section padding="20px">
          <mj-column>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-dashboard-cta")}
            </mj-button>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};
