/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import { captureException } from "@sentry/node";
import crypto from "crypto";

import { setOnerepScanResults } from "../../../../db/tables/onerep_scans";
import { listScanResults } from "../../../functions/server/onerep";

interface OnerepWebhook {
  id: number;
  profile_id: number;
  type: "scan.completed";
  data: {
    object: {
      id: number;
      profile_id: number;
      status: "finished";
      reason: "manual";
      created_at: string;
      updated_at: string;
      url: string;
    };
  };
  created_at: string;
}

// EXPORT config to tell Next.js NOT to parse the body
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextApiRequest) {
  let finalBuffer;
  try {
    if (!process.env.ONEREP_WEBHOOK_SECRET) {
      throw new Error("env var ONEREP_WEBHOOK_SECRET must be set");
    }

    const buffers = [];
    for await (const data of req.body) {
      buffers.push(data);
    }
    finalBuffer = Buffer.concat(buffers);

    // @ts-ignore TODO convince TypeScript that .get exists here
    const actualSignature = req.headers.get("signature");

    const expectedSignature = crypto
      .createHmac("sha256", process.env.ONEREP_WEBHOOK_SECRET)
      .update(finalBuffer)
      .digest("hex");

    if (actualSignature !== expectedSignature) {
      throw new Error("Webhook signature invalid");
    }
  } catch (ex) {
    console.error(ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 401 });
  }

  try {
    const result: OnerepWebhook = JSON.parse(finalBuffer.toString());

    if (result.type !== "scan.completed") {
      throw new Error("Unexpected OneRep webhook type received");
    }
    if (result.data.object.status !== "finished") {
      throw new Error("Received OneRep webhook, but scan not finished");
    }

    const profileId = result.data.object.profile_id;
    const scanId = result.data.object.id;

    // The webhook just tells us which scan ID finished, we need to fetch the payload.
    const scanListFull = [];
    const firstPage = await listScanResults(profileId, {
      per_page: 100,
    });
    // Results are paginated, use per_page maximum and collect all pages into one result.
    if (firstPage.meta.last_page > 1) {
      let currentPage = 2;
      while (currentPage <= firstPage.meta.last_page) {
        const nextPage = await listScanResults(profileId, {
          per_page: 100,
        });
        currentPage++;
        nextPage.data.forEach((element: object) => scanListFull.push(element));
      }
    } else {
      scanListFull.push(firstPage.data);
    }
    // Store full list of results in the DB.
    await setOnerepScanResults(profileId, scanId, {
      data: scanListFull[0],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    console.error(ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
