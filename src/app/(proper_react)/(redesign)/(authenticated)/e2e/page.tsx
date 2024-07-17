/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { isTestEmail } from "../../../../api/utils/mockUtils";
import { getServerSession } from "../../../../functions/server/getServerSession";
import NotFound from "../../../../not-found";
import ResetButton from "./ResetButton";

const DynamicConfig = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Session not found");
  }

  const showNotFound = !isTestEmail(session.user.email);

  // Check 'hibp' and 'onerep' in the searchParams object and compare to 'true' as string
  const hibp = (searchParams?.hibp || "false") === "true";
  const onerep = (searchParams?.onerep || "false") === "true";

  return (
    <main>
      {showNotFound ? (
        <NotFound />
      ) : (
        <ResetButton hibp={hibp} onerep={onerep} />
      )}
    </main>
  );
};

export default DynamicConfig;
