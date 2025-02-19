/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { PublicShell } from "./PublicShell";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../functions/l10n/serverComponents";
import { headers } from "next/headers";
import { getCountryCode } from "../../../functions/server/getCountryCode";
import { getLocale } from "../../../functions/universal/getLocale";
import { getExperiments } from "../../../functions/server/getExperiments";
import { getExperimentationId } from "../../../functions/server/getExperimentationId";
import { getEnabledFeatureFlags } from "../../../../db/tables/featureFlags";
import { getServerSession } from "../../../functions/server/getServerSession";
import * as Sentry from "@sentry/nextjs";

export default async function Layout(props: { children: ReactNode }) {
  const enabledFeatureFlags = await getEnabledFeatureFlags({
    isSignedOut: true,
  });
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const currentLocale = getLocale(l10n);
  const session = await getServerSession();
  const headersList = await headers();
  const countryCode = getCountryCode(headersList);

  const experimentationId = await getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode,
    locale: currentLocale,
  });

  const enrollmentWithConflictingUserId = (
    experimentData.Enrollments ?? []
  ).find((enrollment) => enrollment.nimbus_user_id !== experimentationId);
  if (typeof enrollmentWithConflictingUserId !== "undefined") {
    if (enrollmentWithConflictingUserId.nimbus_user_id === "-1") {
      Sentry.captureMessage(
        `Cirrus did not provide a Nimbus user ID: [${enrollmentWithConflictingUserId.nimbus_user_id}].`,
      );
    } else {
      Sentry.captureMessage(
        `Nimbus user ID from Cirrus: [${enrollmentWithConflictingUserId.nimbus_user_id}] did not match experimentationId: [${experimentationId}]`,
      );
    }
  }

  return (
    <PublicShell
      l10n={l10n}
      countryCode={countryCode}
      enabledFeatureFlags={enabledFeatureFlags}
      experimentData={experimentData["Features"]}
    >
      {props.children}
    </PublicShell>
  );
}
