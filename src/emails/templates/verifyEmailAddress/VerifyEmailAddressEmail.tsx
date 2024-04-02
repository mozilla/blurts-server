/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SanitizedSubscriberRow } from "../../../app/functions/server/sanitize";
import { ExtendedReactLocalization } from "../../../app/hooks/l10n";

export type Props = {
  l10n: ExtendedReactLocalization;
  subscriber: SanitizedSubscriberRow;
  verificationUrl: string;
};

export const VerifyEmailAddressEmail = (props: Props) => {
  const l10n = props.l10n;

  return (
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>{l10n.getString("email-verify-simply-click")}</mj-text>
            <mj-button href={props.verificationUrl}>
              {l10n.getString("verify-email-cta")}
            </mj-button>
            <mj-text>{l10n.getString("email-link-expires")}</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  );
};
