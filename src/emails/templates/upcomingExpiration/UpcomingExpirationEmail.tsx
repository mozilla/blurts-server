/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import {
  getUnstyledRedesignedEmailFooter,
  RedesignedEmailFooter,
} from "../../components/EmailFooter";
import {
  EmailHeader,
  getUnstyledEmailHeader,
} from "../../components/EmailHeader";
import { HeaderStyles, MetaTags } from "../../components/HeaderStyles";
import { getLocale } from "../../../app/functions/universal/getLocale";

export type Props = {
  subscriber: SanitizedSubscriberRow;
  expirationDate: Date;
  l10n: ExtendedReactLocalization;
};

const utmCampaign = "plus-expiration";
const utmSource = "monitor-product";
const utmMedium = "product-email";

export const UpcomingExpirationEmail = (props: Props) => {
  const l10n = props.l10n;

  return (
    <mjml>
      <mj-head>
        <mj-preview>
          {l10n.getString("email-plus-expiration-preview")}
        </mj-preview>
        <MetaTags />
        <HeaderStyles />
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section>
          <mj-column>
            <mj-text font-size="16px" line-height="24px">
              <h1>{l10n.getString("email-plus-expiration-heading")}</h1>
              <p>
                {l10n.getString("email-plus-expiration-body-part1", {
                  end_date: props.expirationDate.toLocaleDateString(
                    getLocale(l10n),
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  ),
                })}
              </p>
              <p>
                {l10n.getFragment("email-plus-expiration-body-part2-styled", {
                  vars: {
                    end_date: props.expirationDate.toLocaleDateString(
                      getLocale(l10n),
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    ),
                  },
                  elems: {
                    b: <b />,
                    "renewal-link": (
                      <a
                        href={`${process.env.SERVER_URL}/user/plus-expiration/?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=resubscribe-link`}
                        style={{
                          color: "#0065F2",
                        }}
                      />
                    ),
                    "support-link": (
                      <a
                        href={`https://support.mozilla.org?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=expiration-support`}
                        style={{
                          color: "#0065F2",
                        }}
                      />
                    ),
                  },
                })}
              </p>
              <p>
                {l10n.getString("email-plus-expiration-signoff")}
                <br />
                {l10n.getString("email-plus-expiration-sender")}
              </p>
            </mj-text>
            <mj-button
              href={`${process.env.SERVER_URL}/user/plus-expiration/?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=resubscribe-button`}
              background-color="#592ACB"
              border-radius="8px"
              padding="12px 24px"
              font-weight={600}
              font-size="15px"
              line-height="22px"
              align="left"
            >
              {l10n.getString("email-plus-expiration-trailer-button")}
            </mj-button>
            <mj-text font-size="16px" line-height="24px">
              <a
                href={`${process.env.SERVER_URL}/terms/expiration-offer/?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=terms-link`}
                style={{
                  fontSize: "14px",
                  color: "#0065F2",
                }}
              >
                {l10n.getString("email-plus-expiration-trailer-terms")}
              </a>
            </mj-text>
          </mj-column>
        </mj-section>
        <RedesignedEmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};

export const getUnstyledUpcomingExpirationEmail = (props: Props): string => {
  const l10n = props.l10n;
  return `
${getUnstyledEmailHeader({ l10n: l10n, utm_campaign: utmCampaign })}

# ${l10n.getString("email-plus-expiration-heading")}

${l10n.getString("email-plus-expiration-body-part1", {
  end_date: props.expirationDate.toLocaleDateString(getLocale(l10n), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
})}

${l10n.getString("email-plus-expiration-body-part2-plain", {
  end_date: props.expirationDate.toLocaleDateString(getLocale(l10n), {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  renewal_link: `${process.env.SERVER_URL}/user/plus-expiration/?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=resubscribe-link-plain`,
})}

${l10n.getString("email-plus-expiration-body-part3-plain", {
  support_link: `https://support.mozilla.org?utm_campaign=${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=expiration-support-plain`,
})}

${l10n.getString("email-plus-expiration-signoff")}
${l10n.getString("email-plus-expiration-sender")}

${getUnstyledRedesignedEmailFooter({ l10n: l10n, utm_campaign: utmCampaign })}
  `;
};
