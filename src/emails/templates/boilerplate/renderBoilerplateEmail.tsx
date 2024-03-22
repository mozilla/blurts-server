/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { getEmailL10n } from "../../getEmailL10n";
import { renderMjml } from "../../renderMjml";

export type BoilerplateEmailParams = {
  subscriber: SubscriberRow;
};

export function renderBoilerplateEmail(
  template: string,
  params: BoilerplateEmailParams,
): string {
  const l10n = getEmailL10n(params.subscriber);

  return renderMjml(template, {
    "{variable}": l10n.getString("fluent-message-id"),
  });
}
