/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { getEmailL10n } from "../../getEmailL10n";
import { renderMjml } from "../../renderMjml";
import { getLocale } from "../../../app/functions/universal/getLocale";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";

export type ExampleEmailParams = {
  subscriber: SubscriberRow;
  breach: SubscriberBreach;
};

export function renderExampleEmail(
  template: string,
  params: ExampleEmailParams,
): string {
  const l10n = getEmailL10n(params.subscriber);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat(getLocale(l10n), options);

  return renderMjml(template, {
    "{headerMessage}": l10n.getString("data-breach-header-1"),
    "{bodyMessage}": l10n.getString("data-breach-body-1", {
      date: dateFormatter.format(params.breach.breachDate),
      company: params.breach.title,
    }),
    "{subscriberName}":
      params.subscriber.fxa_profile_json?.name ?? "mr. person",
    "{questionsMessage}": l10n.getFragment("questions-body-2", {
      elems: {
        "support-link": <a href="https://example.com" />,
      },
    }),
  });
}
