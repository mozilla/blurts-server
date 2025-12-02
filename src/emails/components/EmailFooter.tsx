/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../app/functions/l10n";
import { config } from "../../config";
import {
  CONST_URL_PRIVACY_POLICY,
  CONST_URL_SUMO_MONITOR_SUPPORT,
  CONST_URL_SUMO_MONITOR_SUPPORT_CENTER,
  CONST_URL_TERMS,
} from "../../constants";

export type Props = {
  l10n: ExtendedReactLocalization;
  utm_campaign: string;
  isOneTimeEmail?: boolean;
};

export const EmailFooter = (props: Props) => {
  const l10n = props.l10n;

  return (
    <>
      <mj-section border-top="1px solid #dcdcdc" padding="10px 20px">
        <mj-column>
          <mj-image
            alt=""
            src={`${config.serverUrl}/images/email/icons/question-mark-circle-with-bg.png`}
            width="36px"
            height="36px"
            align="center"
          />
          <mj-text font-size="22px" font-weight="700" align="center">
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
            {l10n.getFragment(
              // These lines get covered by the FirstDataBrokerRemovalFixed test,
              // but for some reason get marked as uncovered again once the
              // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
              /* c8 ignore next 2 */
              props.isOneTimeEmail
                ? "email-footer-reason-subscriber-one-time"
                : "email-footer-reason-subscriber",
              {
                elems: {
                  "support-link": (
                    <a
                      href={CONST_URL_SUMO_MONITOR_SUPPORT}
                      style={{ color: "#0060DF" }}
                    />
                  ),
                },
              },
            )}
          </mj-text>
          <mj-text font-size="14px" font-weight="400" align="center">
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
            src={`${config.serverUrl}/images/email/mozilla-logo-bw.png`}
            href={`https://www.mozilla.org/?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utm_campaign}&utm_content=header-logo`}
            width="150px"
            align="center"
          />
          <mj-text font-size="14px" font-weight="400" align="center">
            149 New Montgomery St, 4th Floor, San Francisco, CA 94105
          </mj-text>
          <mj-text font-size="14px" font-weight="600" align="center">
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

export const RedesignedEmailFooter = (props: Props) => {
  const l10n = props.l10n;
  const supportLinkUrlObject = new URL(CONST_URL_SUMO_MONITOR_SUPPORT_CENTER);
  supportLinkUrlObject.searchParams.set("utm_medium", "product-email");
  supportLinkUrlObject.searchParams.set("utm_source", "monitor-product");
  supportLinkUrlObject.searchParams.set("utm_campaign", props.utm_campaign);
  supportLinkUrlObject.searchParams.set("utm_content", "support-center");

  return (
    <mj-wrapper
      full-width="full-width"
      padding="50px 32px"
      background-color="#F9F9FA"
    >
      <mj-section>
        <mj-column>
          <mj-image
            alt=""
            src={`${config.serverUrl}/images/email/icons/question-mark-circle-with-bg.png`}
            width="36px"
            height="36px"
            align="center"
          />
          <mj-text font-size="22px" font-weight="700" align="center">
            {l10n.getString("email-footer-support-heading")}
          </mj-text>
          <mj-text font-size="16px" font-weight="400" align="center">
            {l10n.getFragment("email-footer-support-content", {
              elems: {
                "support-link": (
                  <a
                    href={supportLinkUrlObject.href}
                    style={{ color: "#0060DF" }}
                  />
                ),
              },
            })}
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section padding-top="32px">
        <mj-column>
          <mj-image
            alt={l10n.getString("email-footer-logo-mozilla-alt")}
            src={`${config.serverUrl}/images/email/mozilla-logo-bw.png`}
            href={`https://www.mozilla.org/?utm_source=monitor-product&utm_medium=product-email&utm_campaign=${props.utm_campaign}&utm_content=header-logo`}
            width="150px"
            align="center"
          />
          <mj-text
            font-size="14px"
            line-height="21px"
            font-weight="400"
            align="center"
          >
            149 New Montgomery St, 4th Floor
            <br />
            San Francisco, CA 94105
          </mj-text>
          <mj-text
            font-size="14px"
            line-height="21px"
            font-weight="400"
            align="center"
          >
            {l10n.getString("email-footer-trigger-transactional")}
          </mj-text>
          <mj-text
            font-size="14px"
            line-height="21px"
            font-weight="400"
            align="center"
          >
            {l10n.getFragment("email-footer-source-hibp", {
              elems: {
                "hibp-link": (
                  <a
                    href="https://haveibeenpwned.com"
                    style={{ color: "#0060DF", fontWeight: 400 }}
                  />
                ),
              },
            })}
          </mj-text>
          <mj-text
            font-size="14px"
            line-height="21px"
            font-weight="400"
            align="center"
          >
            <a href={CONST_URL_TERMS} style={{ color: "#0060DF" }}>
              {l10n.getString("terms-of-service")}
            </a>
            &emsp;
            <a href={CONST_URL_PRIVACY_POLICY} style={{ color: "#0060DF" }}>
              {l10n.getString("email-footer-meta-privacy-notice")}
            </a>
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
};

// The unstyled footer is currently not used in any email.
/* c8 ignore start */
export const getUnstyledRedesignedEmailFooter = (props: Props): string => {
  const l10n = props.l10n;
  const supportLinkUrlObject = new URL(CONST_URL_SUMO_MONITOR_SUPPORT_CENTER);
  supportLinkUrlObject.searchParams.set("utm_medium", "product-email");
  supportLinkUrlObject.searchParams.set("utm_source", "monitor-product");
  supportLinkUrlObject.searchParams.set("utm_campaign", props.utm_campaign);
  supportLinkUrlObject.searchParams.set("utm_content", "support-center");

  const separator = "-".repeat(30);

  return `
${separator}

${l10n.getString("email-footer-support-heading")}
${l10n.getString("email-footer-support-content-plain", { support_link: supportLinkUrlObject.href })}

${separator}

Mozilla Corporation
149 New Montgomery St, 4th Floor, San Francisco, CA 94105

${l10n.getString("email-footer-trigger-transactional")}

${l10n.getString("email-footer-source-hibp-plain", { hibp_link: "https://haveibeenpwned.com" })}

${l10n.getString("terms-of-service")}:
${CONST_URL_TERMS}

${l10n.getString("email-footer-meta-privacy-notice")}:
${CONST_URL_PRIVACY_POLICY}
`;
};
/* c8 ignore stop */
