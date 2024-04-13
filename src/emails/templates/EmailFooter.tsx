/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../app/hooks/l10n";
import {
  CONST_URL_PRIVACY_POLICY,
  CONST_URL_SUMO_MONITOR_SUPPORT,
  CONST_URL_SUMO_MONITOR_SUPPORT_CENTER,
  CONST_URL_TERMS,
} from "../../constants";

export type Props = { l10n: ExtendedReactLocalization; utm_campaign: string };

export const EmailFooter = (props: Props) => {
  const l10n = props.l10n;

  return (
    <>
      <mj-section border-top="1px solid #dcdcdc" padding="10px 20px">
        <mj-column>
          <mj-image
            alt=""
            src={`${process.env.SERVER_URL}/images/email/icons/question-mark-circle-purple.png`}
            width="34px"
            height="34px"
            align="center"
          />
          <mj-text
            color="#321C64"
            font-size="22px"
            font-weight="700"
            align="center"
          >
            {l10n.getString("email-footer-support-heading")}
          </mj-text>
          <mj-text font-size="16px" font-weight="400" align="center">
            {l10n.getFragment("email-footer-support-content", {
              elems: {
                "support-link": (
                  <a
                    href={CONST_URL_SUMO_MONITOR_SUPPORT_CENTER}
                    style={{ color: "#0060DF" }}
                  />
                ),
              },
            })}
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section border-top="1px solid #dcdcdc" padding="10px 20px">
        <mj-column>
          <mj-text font-size="14px" font-weight="400" align="center">
            {l10n.getFragment("email-footer-reason-subscriber", {
              elems: {
                "support-link": (
                  <a
                    href={CONST_URL_SUMO_MONITOR_SUPPORT}
                    style={{ color: "#0060DF" }}
                  />
                ),
              },
            })}
          </mj-text>
          <mj-text
            color="#3D3D3D"
            font-size="14px"
            font-weight="400"
            align="center"
          >
            {l10n.getFragment("email-footer-source-hibp", {
              elems: {
                "hibp-link": (
                  <a
                    href="https://haveibeenpwned.com"
                    style={{ color: "#592ACB", fontWeight: 600 }}
                  />
                ),
              },
            })}
          </mj-text>
          <mj-image
            alt={l10n.getString("email-footer-logo-mozilla-alt")}
            src={`${process.env.SERVER_URL}/images/email/mozilla-logo-bw.png`}
            href={`https://www.mozilla.org/?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utm_campaign}&utm_content=header-logo`}
            width="150px"
            align="center"
          />
          <mj-text
            color="#0C0C0D"
            font-size="14px"
            font-weight="400"
            align="center"
          >
            149 New Montgomery St, 4th Floor, San Francisco, CA 94105
          </mj-text>
          <mj-text
            color="#0C0C0D"
            font-size="14px"
            font-weight="600"
            align="center"
          >
            <a href={CONST_URL_TERMS} style={{ color: "black" }}>
              {l10n.getString("terms-of-service")}
            </a>
            &nbsp;•&nbsp;
            <a href={CONST_URL_PRIVACY_POLICY} style={{ color: "black" }}>
              {l10n.getString("privacy-notice")}
            </a>
          </mj-text>
        </mj-column>
      </mj-section>
    </>
  );
};
