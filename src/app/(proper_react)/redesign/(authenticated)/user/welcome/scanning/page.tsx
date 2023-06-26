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
} from "../../../../../../functions/server/onerep";

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
  const session = await getServerSession(authOptions);

  // @ts-ignore FIXME
  const result = await getOnerepProfileId(session?.user?.subscriber?.id);
  const profileId = result[0]["onerep_profile_id"];
  const scans = await getLatestOnerepScan(profileId);

  if (scans.length) {
    const latestScanDate = new Date(scans[0]["created_at"]);
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    if (latestScanDate > lastMonth) {
      return (
        <main>
          <h2>You have already used your free scan.</h2>
        </main>
      );
    }
  } else {
    console.debug("no scans");
  }

  const scan = await createScan(profileId);
  await setOnerepScan(profileId, scan.id);

  let iterations = 0;
  const interval = setInterval(async () => {
    // FIXME
    const scanDetails = await showScanDetails(profileId, scan.id);

    // TODO give up after a certain amount of time / iterations
    if (iterations >= 5) {
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
  }, 5000);

  const current = 0;
  const total = 672;
  const percentage = ((current / total) * 100).toFixed(1);

  return (
    <main>
      <h2>Scanning for exposures...</h2>
      <h1>
        {current} of {total} known data breaches
      </h1>
      <h1>{percentage}%</h1>
    </main>
  );
}
