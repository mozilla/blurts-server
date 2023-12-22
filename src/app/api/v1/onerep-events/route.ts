/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { captureException } from "@sentry/node";
import crypto from "crypto";

import { logger } from "../../../functions/server/logging";
import { Scan, optoutProfile } from "../../../functions/server/onerep";
import { refreshStoredScanResults } from "../../../functions/server/refreshStoredScanResults";

interface OnerepWebhookRequest {
  id: number;
  profile_id: number;
  type: "scan.completed";
  data: {
    object: {
      id: number;
      profile_id: number;
      status: "finished";
      reason: Scan["reason"];
      created_at: string;
      updated_at: string;
      url: string;
    };
  };
  created_at: string;
}

export async function POST(req: NextRequest) {
  let finalBuffer: Buffer;
  try {
    if (!process.env.ONEREP_WEBHOOK_SECRET) {
      throw new Error("env var ONEREP_WEBHOOK_SECRET must be set");
    }

    const buffers: Buffer[] = [];
    // @ts-ignore FIXME Type error: Type 'ReadableStream<Uint8Array>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator.
    for await (const data of req.body) {
      buffers.push(data);
    }
    finalBuffer = Buffer.concat(buffers);

    const actualSignature = req.headers.get("signature");

    const expectedSignature = crypto
      .createHmac("sha256", process.env.ONEREP_WEBHOOK_SECRET)
      .update(finalBuffer)
      .digest("hex");

    if (actualSignature !== expectedSignature) {
      throw new Error("Webhook signature invalid");
    }
  } catch (ex) {
    logger.error(ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 401 });
  }

  try {
    const result: OnerepWebhookRequest = JSON.parse(finalBuffer.toString());
    logger.debug("OneRep Webhook Request received:", result);

    if (result.type !== "scan.completed") {
      logger.debug("Unexpected OneRep webhook type received:", result.type);
      return;
    }

    if (result.data.object.status !== "finished") {
      logger.debug(
        "Received OneRep webhook, but scan not finished",
        result.data.object.status,
      );
      return;
    }

    const profileId = result.data.object.profile_id;
    const scanId = result.data.object.id;
    const reason = result.data.object.reason;

    logger.info("received_onerep_webhook", { profileId, scanId, reason });

    if (reason === "monitoring") {
      logger.info("auto_opt_out_monitoring_scan", {
        profileId,
        scanId,
        reason,
      });
      await optoutProfile(profileId);
    }

    // The webhook just tells us which scan ID finished, we need to fetch the payload and refresh.
    await refreshStoredScanResults(profileId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    logger.error(ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
