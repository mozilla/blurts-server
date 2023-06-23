/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getL10n } from "../../../../../../functions/server/l10n";

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
  const l10n = getL10n();

  const current = 1;
  const total = 672;
  const percentage = ((current / total) * 100).toFixed(1);

  const body = JSON.stringify({
    first_name: "Test",
    last_name: "User",
    addresses: [
      {
        state: "NY",
        city: "New York",
        zip: "11111",
        address_line: "1st Ave 1 Apt 1",
      },
    ],
  });

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
      options.body = body;
    }
    const result = await fetch(`https://api.onerep.com/${path}`, options);
    if (!result.ok) {
      throw new Error("Error connecting to provider");
    }
    return result.json();
  }

  const profile = await callOneRep("POST", "profiles");
  const scan = await callOneRep("POST", `profiles/${profile.id}/scans`);

  let iterations = 0;
  const interval = setInterval(async () => {
    const scanDetails = await callOneRep(
      "GET",
      `profiles/${profile.id}/scans/${scan.id}`
    );
    console.debug(scanDetails);

    // TODO give up after a certain amount of time / iterations
    if (iterations >= 5) {
      clearInterval(interval);
    } else if (scanDetails.status === "finished") {
      clearInterval(interval);

      const scanResults = await callOneRep("GET", `scan-results/${scan.id}`);
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
