/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../../components/EmailFooter";
import { EmailHeader } from "../../components/EmailHeader";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";

export type Props = {
  l10n: ExtendedReactLocalization;
  data: {
    dataBrokerName: string;
    dataBrokerLink: string;
    removalDate: Date;
  };
};

export const FirstDataBrokerRemovalFixed = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "first-removal";

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-first-broker-removal-fixed-preview", {
            data_broker_name: props.data.dataBrokerName,
          })}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text
              align="center"
              font-size="30px"
              line-height="40px"
              font-weight="700"
            >
              {l10n.getString("email-first-broker-removal-fixed-heading")}
            </mj-text>
            <mj-text align="center" font-size="24px" line-height="29px">
              {l10n.getString("email-first-broker-removal-fixed-subheading")}
            </mj-text>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getFragment(
                "email-first-broker-removal-fixed-content-one",
                {
                  vars: {
                    data_broker_name: props.data.dataBrokerName,
                    data_broker_removal_date: props.data.removalDate,
                  },
                  elems: {
                    "data-broker-link": (
                      <a
                        href={`${props.data.dataBrokerLink}?utm_medium=email&utm_source=monitor-product&utm_campaign=${utmCampaign}&utm_content=data-broker`}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  },
                },
              )}
            </mj-text>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getString("email-first-broker-removal-fixed-content-two")}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="20px">
          <mj-column>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/fixed?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=view-dashboard`}
              background-color="#0060DF"
              font-weight="600"
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-first-broker-removal-fixed-cta-label")}
            </mj-button>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} isOneTimeEmail />
      </mj-body>
    </mjml>
  );
};
