/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../../../functions/server/l10n";
import {
  getOnerepProfileId,
  getLatestOnerepScan,
  setOnerepScan,
  setOnerepScanResults,
} from "../../../../../../../db/tables/subscribers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";
import {
  createScan,
  listScanResults,
  showScanDetails,
  isEligible,
} from "../../../../../../functions/server/onerep";
import Script from "next/script";

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: "Welcome - Scanning", // FIXME l10n.getString("breach-meta-title"),
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("brand-fx-monitor"),
      description: l10n.getString("meta-desc-2"),
      siteName: l10n.getString("brand-fx-monitor"),
      type: "website",
      url: process.env.SERVER_URL,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function UserWelcomeScanning() {
  const eligible = await isEligible();
  if (!eligible) {
    return (
      <main>
        <h2>You have already used your free scan.</h2>
      </main>
    );
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    throw new Error("No session");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"];
  const scan = await createScan(profileId);
  await setOnerepScan(profileId, scan.id);

  let iterations = 0;
  const totalIterations = 15;

  const interval = setInterval(async () => {
    const scanDetails = await showScanDetails(profileId, scan.id);

    // Give up after set number of iterations.
    if (iterations >= totalIterations) {
      clearInterval(interval);
    } else if (scanDetails.status === "finished") {
      clearInterval(interval);

      const scanListFull = [];
      const firstPage = await listScanResults(profileId, { per_page: 100 });
      // Results are paginated, use per_page maximum and collect all pages into one result.
      if (firstPage.meta.last_page > 1) {
        let currentPage = 2;
        while (currentPage <= firstPage.meta.last_page) {
          const nextPage = await listScanResults(profileId, { per_page: 100 });
          currentPage++;
          nextPage.data.forEach((element: object) =>
            scanListFull.push(element)
          );
        }
      } else {
        scanListFull.push(firstPage.data);
      }
      // Store full list of results in the DB.
      setOnerepScanResults(profileId, scan.id, { data: scanListFull[0] });
    } else {
      iterations++;
    }
  }, 1000);

  return (
    <>
      <Script
        type="module"
        src="/nextjs_migration/client/js/welcome.js"
      ></Script>
      <main>
        <h2 id="status">Scanning for exposures...</h2>
        <div id="progress">0%</div>
      </main>
    </>
  );
}
