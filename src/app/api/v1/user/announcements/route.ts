/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { initializeUserAnnouncements } from "../../../../../db/tables/user_announcements";
import { redirect } from "next/navigation";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";
import { getLocale } from "../../../../functions/universal/getLocale";
import { getExperimentationIdFromUserSession } from "../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../functions/server/getExperiments";
import { getCountryCode } from "../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { getL10n } from "../../../../functions/l10n/storybookAndJest";
import { getAcceptLangHeaderInServerComponents } from "../../../../functions/l10n/serverComponents";

export async function GET() {
  const session = await getServerSession();

  if (!session?.user?.subscriber) {
    return redirect("/auth/logout");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  const currentLocale = getLocale(
    getL10n(await getAcceptLangHeaderInServerComponents()),
  );
  const experimentationId = await getExperimentationIdFromUserSession(
    session?.user ?? null,
  );
  const experimentData = await getExperiments({
    experimentationId,
    countryCode: getCountryCode(await headers()),
    locale: currentLocale,
  });

  try {
    const userAnnouncements = await initializeUserAnnouncements(
      session.user,
      enabledFeatureFlags,
      experimentData["Features"],
    );
    return NextResponse.json(userAnnouncements, { status: 200 });
  } catch (error) {
    console.error("Error initializing announcements:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
