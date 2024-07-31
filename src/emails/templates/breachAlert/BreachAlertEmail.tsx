/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { ExtendedReactLocalization } from "../../../app/functions/l10n";
import { EmailFooter } from "../EmailFooter";
import { EmailHeader } from "../EmailHeader";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { formatDate } from "../../../utils/formatDate";
import { getLocale } from "../../../app/functions/universal/getLocale";

export type Props = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
  breachedEmail: string;
  utmCampaignId: string;
};

export const BreachAlertEmail = (props: Props) => {
  const l10n = props.l10n;
  const listFormatter = new Intl.ListFormat(getLocale(l10n));

  return (
    <mjml>
      <mj-head>
        <mj-preview>{l10n.getString("email-spotted-new-breach")}</mj-preview>
        <mj-style>
          {`
          .metadata-heading {
            color: #5e5e72;
          }
          img.breach-logo {
            display: inline-block;
          }
          `}
        </mj-style>
      </mj-head>
      <mj-body>
        <EmailHeader l10n={l10n} utm_campaign={props.utmCampaignId} />
        <mj-section padding="20px">
          <mj-column>
            <mj-text align="center" font-size="16px" line-height="24px">
              {l10n.getFragment("email-breach-detected-2", {
                vars: { "email-address": props.breachedEmail },
                elems: { b: <b /> },
              })}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-wrapper border="1px solid #eee" text-align="center" padding="0">
          <mj-section background-color="#eee">
            <mj-column vertical-align="middle">
              <mj-text
                font-size="18px"
                line-height="24px"
                align="center"
                height="32px"
              >
                <BreachLogo breach={props.breach} />
                <span style={{ paddingInlineStart: "4px" }}>
                  {props.breach.Title}
                </span>
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section padding="20px">
            <mj-column>
              <mj-text align="center" font-size="16px" padding="24px">
                <p className="metadata-heading">
                  {l10n.getString("breach-added-label")}
                </p>
                <p>
                  <b>
                    {formatDate(props.breach.AddedDate, getLocale(props.l10n))}
                  </b>
                </p>
                {
                  // These lines get covered by the BreachAlertEmail.test.tsx tests,
                  // but for some reason get marked as uncovered again once the
                  // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
                  /* c8 ignore next 2 */
                  Array.isArray(props.breach.DataClasses) &&
                    props.breach.DataClasses.length > 0 && (
                      <>
                        <p className="metadata-heading">
                          {l10n.getString("compromised-data")}
                        </p>
                        <p>
                          <b>
                            {listFormatter.format(
                              props.breach.DataClasses.map((classKey) =>
                                l10n.getString(classKey),
                              ),
                            )}
                          </b>
                        </p>
                      </>
                    )
                }
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-wrapper>
        <mj-section padding="20px">
          <mj-column>
            <mj-button
              href={`${process.env.SERVER_URL}/user/dashboard/action-needed?utm_source=monitor-product&utm_medium=email&utm_campaign=${props.utmCampaignId}&utm_content=view-your-dashboard-us`}
              background-color="#0060DF"
              font-weight={600}
              font-size="15px"
              line-height="22px"
            >
              {l10n.getString("email-dashboard-cta")}
            </mj-button>
          </mj-column>
        </mj-section>
        <EmailFooter l10n={l10n} utm_campaign={props.utmCampaignId} />
      </mj-body>
    </mjml>
  );
};

const BreachLogo = (props: { breach: HibpLikeDbBreach }) => {
  // These lines get covered by the BreachAlertEmail.test.tsx tests,
  // but for some reason get marked as uncovered again once the
  // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
  /* c8 ignore next 12 */
  if (props.breach.FaviconUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.breach.FaviconUrl}
        alt=""
        width="32px"
        height="32px"
        className="breach-logo"
      />
    );
  }

  return null;
};
