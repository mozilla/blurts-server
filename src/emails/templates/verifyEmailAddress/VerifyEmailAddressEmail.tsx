/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { getEmailL10n } from "../../getEmailL10n";
import { getVerificationUrl } from "../../../utils/email";

export type Props = {
  subscriber: SubscriberRow;
  emailAddress: EmailAddressRow;
};

export const VerifyEmailAddressEmail = (props: Props) => {
  const l10n = getEmailL10n(props.subscriber);

  return (
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>{l10n.getString("email-verify-simply-click")}</mj-text>
            <mj-button href={getVerificationUrl(props.emailAddress).href}>
              {l10n.getString("verify-email-cta")}
            </mj-button>
            <mj-text>{l10n.getString("email-link-expires")}</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  );
};
