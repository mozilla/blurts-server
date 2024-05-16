/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../EmailFooter";
import { EmailHeader } from "../EmailHeader";
import { EmailStyles } from "../EmailStyles";

export type Props = {
  l10n: ExtendedReactLocalization;
  subscriber: SanitizedSubscriberRow;
  verificationUrl: string;
};

export const VerifyEmailAddressEmail = (props: Props) => {
  const l10n = props.l10n;
  const utmCampaign = "verify-email-address";

  return (
    <mjml>
      <mj-head>
        <EmailStyles />
        <mj-attributes>
          <mj-text font-family="sans" />
          <mj-button font-family="sans" />
        </mj-attributes>
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={utmCampaign} />
        <mj-section padding="50px">
          <mj-column>
            <mj-text align="center">
              {l10n.getString("email-verify-simply-click")}
            </mj-text>
            <mj-button href={props.verificationUrl} background-color="#0060df">
              {l10n.getString("verify-email-cta")}
            </mj-button>
            <mj-text align="center" font-weight="bold">
              {l10n.getString("email-link-expires")}
            </mj-text>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={utmCampaign} />
      </mj-body>
    </mjml>
  );
};
