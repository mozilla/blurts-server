/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../app/functions/l10n";

export type Props = { l10n: ExtendedReactLocalization; utm_campaign: string };

export const EmailHeader = (props: Props) => {
  const l10n = props.l10n;

  return (
    <mj-section
      full-width="full-width"
      border-bottom="1px solid #dcdcdc"
      padding="10px 20px"
      background-color="white"
    >
      <mj-column
        width="60%"
        padding-left="0"
        padding-right="0"
        vertical-align="middle"
      >
        <mj-image
          alt={l10n.getString("public-nav-name")}
          src={`${process.env.SERVER_URL}/images/email/monitor-logo-with-bg.png`}
          href={`${process.env.SERVER_URL}/user/dashboard/fixed?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utm_campaign}&utm_content=header-logo`}
          width="200px"
          align="left"
        />
      </mj-column>
      <mj-column
        width="40%"
        padding-left="0"
        padding-right="0"
        vertical-align="middle"
      >
        <mj-text align="right">
          <a
            href={`${process.env.SERVER_URL}/user/dashboard/fixed?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utm_campaign}&utm_content=sign-in-us`}
            style={{ color: "#0060DF" }}
          >
            {l10n.getString("email-header-button-sign-in")}
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  );
};

export const getUnstyledEmailHeader = (props: Props) => {
  const l10n = props.l10n;

  return `\
${l10n.getString("public-nav-name")}
${"-".repeat(30)}
  `;
};
