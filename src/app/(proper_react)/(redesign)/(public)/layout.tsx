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

  // Check for Nimbus preview mode. Note that this requires a full page reload
  // to activate: https://nextjs.org/docs/app/api-reference/file-conventions/layout#caveats
  const nimbusPreviewMode = (await headers()).get("x-nimbus-preview-mode");
  const experimentationId = await getExperimentationId(session?.user ?? null);
  const experimentData = await getExperiments({
    experimentationId: experimentationId,
    countryCode: countryCode,
    locale: currentLocale,
    previewMode: nimbusPreviewMode === "true",
  });

  const enrollmentWithConflictingUserId = (
    experimentData.Enrollments ?? []
  ).find((enrollment) => enrollment.nimbus_user_id !== experimentationId);
  if (typeof enrollmentWithConflictingUserId !== "undefined") {
    Sentry.captureMessage(
      `Nimbus user ID from Cirrus: [${enrollmentWithConflictingUserId.nimbus_user_id}] did not match experimentationId: [${experimentationId}]`,
    );
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
