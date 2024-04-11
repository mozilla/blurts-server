/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { DashboardSummary } from "../../../app/functions/server/dashboard";
import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { ExtendedReactLocalization } from "../../../app/hooks/l10n";
import { EmailFooter } from "../EmailFooter";
import { EmailHeader } from "../EmailHeader";

export type Props = {
  subscriber: SanitizedSubscriberRow;
  l10n: ExtendedReactLocalization;
  data: DashboardSummary;
};

export const MonthlyActivityEmail = (props: Props) => {
  if (props.subscriber.fxa_profile_json?.subscriptions?.includes("monitor")) {
    if (
      props.data.dataBreachFixedDataPointsNum +
        props.data.dataBrokerManuallyResolvedDataPointsNum >
      0
    ) {
      return <MonthlyActivityPlusWithManualRemovalsEmail {...props} />;
    }

    return <MonthlyActivityPlusWithAutoRemovalsOnlyEmail {...props} />;
  }

  return <MonthlyActivityFreeEmail {...props} />;
};

const MonthlyActivityPlusWithManualRemovalsEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "monthly-report-plus";

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-plus-manual-preview")}
        </mj-preview>
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text
              align="center"
              font-size="16px"
              line-height="24px"
              padding-bottom="40px"
            >
              {l10n.getString("email-monthly-plus-manual-intro-content")}
            </mj-text>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-monthly-plus-manual-cta-label")}
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section padding="20px">
          <mj-column>
            <mj-text
              align="center"
              font-size="24px"
              line-height="26px"
              font-weight={700}
            >
              {l10n.getString("email-monthly-plus-manual-fixed-heading")}
            </mj-text>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getString("email-monthly-plus-manual-fixed-lead")}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section>
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
                "email-monthly-plus-manual-fixed-section-manual-heading",
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
                "email-monthly-plus-manual-fixed-section-in-progress-heading",
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
                "email-monthly-plus-manual-fixed-section-done-heading",
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
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};

const MonthlyActivityPlusWithAutoRemovalsOnlyEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "monthly-report-plus";

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-monthly-plus-auto-preview")}
        </mj-preview>
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

const MonthlyActivityFreeEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "monthly-report-free";

  return (
    <mjml>
      <mj-head>
        <mj-preview>{l10n.getString("email-monthly-free-preview")}</mj-preview>
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text
              align="center"
              font-size="16px"
              line-height="24px"
              padding-bottom="40px"
            >
              {l10n.getString("email-monthly-free-intro-content")}
            </mj-text>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-monthly-free-cta-label")}
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section padding="20px">
          <mj-column>
            <mj-text
              align="center"
              font-size="24px"
              line-height="26px"
              font-weight={700}
            >
              {l10n.getString("email-monthly-free-fixed-heading")}
            </mj-text>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getString("email-monthly-free-fixed-lead")}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding-bottom="40px">
          <mj-column vertical-align="bottom">
            <mj-image
              href={`${process.env.SERVER_URL}/user/dashboard?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=auto-removed`}
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-done-disabled.png`}
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
              {l10n.getString("email-monthly-free-fixed-section-done-heading")}
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
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-in-progress-disabled.png`}
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
                "email-monthly-free-fixed-section-in-progress-heading",
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
                "email-monthly-free-fixed-section-manual-heading",
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
        <mj-section
          border-radius="8px"
          border="2px solid #FF9100"
          background-color="white"
          padding="10px"
          text-align="center"
        >
          <mj-column vertical-align="middle">
            <mj-image
              src={`${process.env.SERVER_URL}/images/email/monthly-activity/illustration-plus.png`}
              alt=""
              align="center"
              width="115px"
            />
          </mj-column>
          <mj-column width="300px" vertical-align="middle">
            <mj-text font-size="18px" line-height="20px" font-weight={700}>
              {l10n.getString("email-monthly-free-banner-plus-heading")}
            </mj-text>
            <mj-text font-size="16px" line-height="24px">
              {l10n.getString("email-monthly-free-banner-plus-content")}
            </mj-text>
          </mj-column>
          <mj-column width="300px" vertical-align="middle">
            <mj-button
              href={`${process.env.SERVER_URL}?utm_source=monitor-product&utm_medium=email&utm_campaign=${utmCampaign}&utm_content=plus-banner-cta#plans`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
              align="center"
            >
              {l10n.getString("email-monthly-free-banner-plus-cta-label")}
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section>
          <mj-column>
            <mj-spacer height="55px" />
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};
