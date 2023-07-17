/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { captureException } from "@sentry/node";
import crypto from "crypto";

import { setOnerepScanResults } from "../../../../db/tables/onerep_scans";
import { getAllScanResults } from "../../../functions/server/onerep";

interface OnerepWebhookRequest {
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

export async function POST(req: NextRequest) {
  let finalBuffer;
  try {
    if (!process.env.ONEREP_WEBHOOK_SECRET) {
      throw new Error("env var ONEREP_WEBHOOK_SECRET must be set");
    }

    const buffers = [];
    // @ts-ignore TODO convince TypeScript req.body is not null
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
    const result: OnerepWebhookRequest = JSON.parse(finalBuffer.toString());
    console.debug("OneRep Webhook Request received:", result);

    if (result.type !== "scan.completed") {
      throw new Error("Unexpected OneRep webhook type received");
    }
    if (result.data.object.status !== "finished") {
      throw new Error("Received OneRep webhook, but scan not finished");
    }

    const profileId = result.data.object.profile_id;
    const scanId = result.data.object.id;

    // The webhook just tells us which scan ID finished, we need to fetch the payload.
    const scanListFull = await getAllScanResults(profileId);
    // Store full list of results in the DB.
    await setOnerepScanResults(profileId, scanId, {
      data: scanListFull,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    console.error(ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
