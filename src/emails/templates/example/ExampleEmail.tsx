/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { getEmailL10n } from "../../getEmailL10n";
import { getLocale } from "../../../app/functions/universal/getLocale";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

export type Props = {
  subscriber: SubscriberRow;
  breach: SubscriberBreach;
};

export const ExampleEmail = (props: Props) => {
  const l10n = getEmailL10n(props.subscriber);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat(getLocale(l10n), options);

  return (
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>
              <h1>{l10n.getString("data-breach-header-1")}</h1>
              <p>
                Hello {props.subscriber.fxa_profile_json?.name ?? "mr. person"},
              </p>
              <p>
                {l10n.getString("data-breach-body-1", {
                  date: dateFormatter.format(props.breach.breachDate),
                  company: props.breach.title,
                })}
              </p>
              <p>
                {l10n.getFragment("questions-body-2", {
                  elems: {
                    "support-link": <a href="https://example.com" />,
                  },
                })}
              </p>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  );
};
