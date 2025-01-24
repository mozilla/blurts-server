/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardSummary } from "../../../app/functions/server/dashboard";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../../components/EmailFooter";
import { EmailHeader } from "../../components/EmailHeader";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";

export type Props = {
  subscriber: SanitizedSubscriberRow;
  l10n: ExtendedReactLocalization;
  data: DashboardSummary;
};

export const MonthlyActivityPlusEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "monthly-report-plus";

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-plus-auto-preview")}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getString("email-monthly-plus-auto-intro-content")}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section>
          <mj-column vertical-align="bottom">
            <mj-image
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=auto-removed`}
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-done.png`}
              alt=""
              width="90px"
              align="center"
            />
            <mj-text
              font-size="14px"
              line-height="18px"
              font-weight={600}
              align="center"
            >
              {l10n.getString(
                "email-monthly-plus-auto-fixed-section-done-heading",
              )}
            </mj-text>
            <mj-text
              font-size="38px"
              line-height="40px"
              font-weight={700}
              align="center"
            >
              {props.data.dataBrokerAutoFixedDataPointsNum}
            </mj-text>
          </mj-column>
          <mj-column vertical-align="bottom">
            <mj-image
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=in-progress`}
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-in-progress.png`}
              alt=""
              width="90px"
              align="center"
            />
            <mj-text
              font-size="14px"
              line-height="18px"
              font-weight={600}
              align="center"
            >
              {l10n.getString(
                "email-monthly-plus-auto-fixed-section-in-progress-heading",
              )}
            </mj-text>
            <mj-text
              font-size="38px"
              line-height="40px"
              font-weight={700}
              align="center"
            >
              {props.data.dataBrokerInProgressDataPointsNum}
            </mj-text>
          </mj-column>
          <mj-column vertical-align="bottom">
            <mj-image
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=manually-fixed`}
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-manual.png`}
              alt=""
              width="90px"
              align="center"
            />
            <mj-text
              font-size="14px"
              line-height="18px"
              font-weight={600}
              align="center"
            >
              {l10n.getString(
                "email-monthly-plus-auto-fixed-section-manual-heading",
              )}
            </mj-text>
            <mj-text
              font-size="38px"
              line-height="40px"
              font-weight={700}
              align="center"
            >
              {props.data.dataBrokerManuallyResolvedDataPointsNum +
                props.data.dataBreachFixedDataPointsNum}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="20px">
          <mj-column>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-monthly-plus-auto-cta-label")}
            </mj-button>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};
