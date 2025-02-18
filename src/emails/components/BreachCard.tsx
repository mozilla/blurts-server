/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../app/functions/l10n";
import { formatDate } from "../../utils/formatDate";
import { HibpLikeDbBreach } from "../../utils/hibp";
import { getLocale } from "../../app/functions/universal/getLocale";

export type Props = {
  breach: HibpLikeDbBreach;
  l10n: ExtendedReactLocalization;
};

export const BreachCard = (props: Props) => {
  const listFormatter = new Intl.ListFormat(getLocale(props.l10n));

  return (
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
            <p style={{ color: "#5e5e72" }}>
              {props.l10n.getString("breach-added-label")}
            </p>
            <p>
              <b>{formatDate(props.breach.AddedDate, getLocale(props.l10n))}</b>
            </p>
            {
              // These lines get covered by the BreachAlertEmail.test.tsx tests,
              // but for some reason get marked as uncovered again once the
              // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
              /* c8 ignore next 2 */
              Array.isArray(props.breach.DataClasses) &&
                props.breach.DataClasses.length > 0 && (
                  <>
                    <p style={{ color: "#5e5e72" }}>
                      {props.l10n.getString("compromised-data")}
                    </p>
                    <p>
                      <b>
                        {listFormatter.format(
                          props.breach.DataClasses.map((classKey) =>
                            props.l10n.getString(classKey),
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
  );
};

const BreachLogo = (props: { breach: HibpLikeDbBreach }) => {
  // These lines get covered by the BreachAlertEmail.test.tsx tests,
  // but for some reason get marked as uncovered again once the
  // `src/scripts/cronjobs/emailBreachAlerts.test.ts` tests are run:
  /* c8 ignore next 15 */
  if (props.breach.FaviconUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.breach.FaviconUrl}
        alt=""
        width="32px"
        height="32px"
        style={{ display: "inline-block" }}
      />
    );
  }

  return null;
};
