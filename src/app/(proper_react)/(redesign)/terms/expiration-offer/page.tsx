/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound } from "next/navigation";
import { View } from "./View";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../functions/l10n/serverComponents";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";
import { logger } from "../../../../functions/server/logging";

export default async function ExpirationOfferTermsPage() {
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });
  if (!enabledFeatureFlags.includes("ExpirationNotification")) {
    logger.warn("plus_expiration_viewing_terms_with_flag_off");
    return notFound();
  }

  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  return <View l10n={l10n} />;
}
