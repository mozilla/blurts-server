/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest } from "next/server";
import { getL10n } from "../../../../../../functions/server/l10n";
import {
  getOnerepProfileId,
  getLatestOnerepScan,
  setOnerepScan,
  setOnerepScanResults,
} from "../../../../../../../db/tables/subscribers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";

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

  const current = 1;
  const total = 672;
  const percentage = ((current / total) * 100).toFixed(1);

  async function callOneRep(method: string, path: string) {
    const bearerToken = process.env.ONEREP_API_KEY;
    const options = {
      method,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    };
    if (method !== "GET" && method !== "HEAD") {
      //@ts-ignore FIXME
      // options.body = body;
    }
    const result = await fetch(
      `${process.env.ONEREP_API_BASE}/${path}`,
      options
    );
    if (!result.ok) {
      throw new Error("Error connecting to provider");
    }
    return result.json();
  }

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
          <h2>You&aposve already scanned this month.</h2>
        </main>
      );
    }
  } else {
    console.debug("no scans");
  }

  const scan = await callOneRep("POST", `profiles/${profileId}/scans`);
  await setOnerepScan(profileId, scan.id);

  let iterations = 0;
  const interval = setInterval(async () => {
    const scanDetails = await callOneRep(
      "GET",
      `profiles/${profileId}/scans/${scan.id}`
    );
    console.debug(scanDetails);

    // TODO give up after a certain amount of time / iterations
    if (iterations >= 5) {
      clearInterval(interval);
    } else if (scanDetails.status === "finished") {
      clearInterval(interval);

      const scanResults = await callOneRep("GET", `scan-results/${scan.id}`);
      setOnerepScanResults(profileId, scan.id, scanResults);

      console.debug(scanResults);
    } else {
      iterations++;
    }
  }, 5000);

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
