/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { captureException } from "@sentry/node";
import crypto from "crypto";

import { logger } from "../../../functions/server/logging";
import { Scan, optoutProfile } from "../../../functions/server/onerep";
import { refreshStoredScanResults } from "../../../functions/server/refreshStoredScanResults";

export interface OnerepWebhookRequest {
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
    const buffers: Buffer[] = [];
    // @ts-ignore FIXME Type error: Type 'ReadableStream<Uint8Array>' must have a '[Symbol.asyncIterator]()' method that returns an async iterator.
    for await (const data of req.body) {
      buffers.push(data);
    }
    finalBuffer = Buffer.concat(buffers);

    if (!contentSignatureValid(finalBuffer, req.headers.get("signature"))) {
      logger.error("onerep_webhook_signature_invalid");
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch (ex) {
    logger.error("onerep_webhook_auth_exception", ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 500 });
  }
  try {
    const result: OnerepWebhookRequest = JSON.parse(finalBuffer.toString());
    logger.debug("OneRep Webhook Request received:", result);

    if (result.type !== "scan.completed") {
      logger.info("ignored_onerep_webhook_type", result.type);
      return NextResponse.json({ success: true }, { status: 202 });
    }

    if (result.data.object.status !== "finished") {
      logger.info("ignored_onerep_webhook_status", result.data.object.status);
      return NextResponse.json({ success: true }, { status: 202 });
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

      // Automatically call opt-out for any new monthly automatic "monitoring" scans.
      // This type of scan will only be called for activated profiles.
      await optoutProfile(profileId);
    }

    // The webhook just tells us which scan ID finished, we need to fetch the payload and refresh.
    await refreshStoredScanResults(profileId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    logger.error("onerep_webhook_exception", ex);
    captureException(ex);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}

function contentSignatureValid(
  buffer: Buffer | crypto.BinaryLike,
  signature: string | null,
) {
  if (!process.env.ONEREP_WEBHOOK_SECRET) {
    throw new Error("env var ONEREP_WEBHOOK_SECRET must be set");
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.ONEREP_WEBHOOK_SECRET)
    .update(buffer)
    .digest("hex");

  return signature === expectedSignature;
}
