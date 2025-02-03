/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../../../functions/server/getServerSession";

import { logger } from "../../../../../../functions/server/logging";
import {
  isOnerepScanResultForSubscriber,
  setOnerepScanResultManualResolution,
} from "../../../../../../../db/tables/onerep_scans";
import { markQaCustomBrokerAsResolved } from "../../../../../../../db/tables/qa_customs";
import { isAdmin } from "../../../../../utils/auth";

export type ResolveScanResultResponse =
  | {
      success: true;
    }
  | { success: false; message: string };

export async function POST(
  req: NextRequest,
  props: { params: Promise<{ onerepScanResultId: string }> },
): Promise<NextResponse<ResolveScanResultResponse>> {
  const params = await props.params;
  const session = await getServerSession();
  if (!session?.user?.subscriber) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Unauthenticated" }),
      { status: 401 },
    );
  }

  const scanResultId = Number.parseInt(params.onerepScanResultId, 10);
  if (typeof scanResultId !== "number" || Number.isNaN(scanResultId)) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Invalid scan result ID" }),
      { status: 400 },
    );
  }

  // This marks a QA broker as resolved. Collisions aren't a worry because a real user is never admin.
  if (isAdmin(session.user.subscriber.primary_email)) {
    const rowsAffected = await markQaCustomBrokerAsResolved(scanResultId);
    if (rowsAffected > 0) {
      return new NextResponse<ResolveScanResultResponse>(
        JSON.stringify({ success: true }),
        { status: 200 },
      );
    }
  }

  const isAllowedToResolve = await isOnerepScanResultForSubscriber({
    onerepScanResultId: scanResultId,
    subscriberId: session.user.subscriber.id,
  });
  if (!isAllowedToResolve) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Unauthorized" }),
      { status: 403 },
    );
  }

  try {
    await setOnerepScanResultManualResolution(scanResultId, true);
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: true }),
      { status: 200 },
    );
  } catch (e) {
    logger.error(e);
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({
        success: false,
        message: "Something went wrong, please try again.",
      }),
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
): Promise<NextResponse<ResolveScanResultResponse>> {
  // const scanResultId = Number.parseInt(params.onerepScanResultId, 10);
  // const { resolved } = body;
  const session = await getServerSession();

  if (!session?.user?.subscriber) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Unauthenticated" }),
      { status: 401 },
    );
  }

  const { resolved, scanResultId } = await req.json();

  if (typeof scanResultId !== "number" || Number.isNaN(scanResultId)) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Invalid scan result ID" }),
      { status: 400 },
    );
  }

  if (typeof resolved !== "boolean") {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Invalid resolution value" }),
      { status: 400 },
    );
  }

  const isAllowedToResolve = await isOnerepScanResultForSubscriber({
    onerepScanResultId: scanResultId,
    subscriberId: session.user.subscriber.id,
  });
  if (!isAllowedToResolve) {
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: false, message: "Unauthorized" }),
      { status: 403 },
    );
  }

  try {
    await setOnerepScanResultManualResolution(scanResultId, resolved);
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({ success: true }),
      { status: 200 },
    );
  } catch (e) {
    logger.error(e);
    return new NextResponse<ResolveScanResultResponse>(
      JSON.stringify({
        success: false,
        message: "Something went wrong, please try again.",
      }),
      { status: 500 },
    );
  }
}
