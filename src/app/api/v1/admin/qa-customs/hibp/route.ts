/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "../../../../utils/auth";
import {
  internalServerError,
  unauthError,
} from "../../../../utils/errorThrower";
import {
  addQaCustomBreach,
  getAllQaCustomBreaches,
  QaBreachData,
  deleteQaCustomBreach,
} from "../../../../../../db/tables/qa_customs";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { randomInt } from "crypto";

function successResponse() {
  return NextResponse.json(
    { error: "Request reached and fulfilled." },
    { status: 200 },
  );
}

async function checkAdmin() {
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) return unauthError();
  return null;
}

export async function GET(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const emailHashPrefix = req.nextUrl.searchParams.get("emailHashPrefix");

  if (!emailHashPrefix) {
    return NextResponse.json(
      { error: "Missing emailHashPrefix parameter" },
      { status: 400 },
    );
  }

  return NextResponse.json(await getAllQaCustomBreaches(emailHashPrefix));
}

export async function POST(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const body = await req.json();

  if (!body.emailHashPrefix || body.emailHashPrefix.length < 6)
    return NextResponse.json(
      { error: "emailHash is too small" },
      { status: 400 },
    );

  const emailHashPrefix = body.emailHashPrefix.slice(0, 6);
  const Name = body.Name || "Custom Breach";
  const Title = body.Title || "Custom Breach";
  const Domain = body.Domain || "custom-breach.com";
  const ModifiedDate = body.ModifiedDate;
  const PwnCount = randomInt(10 ** 6, 10 ** 9);
  const Description =
    body.Description ||
    "This is a <em>Custom Breach</em>! Nothing to worry about :)";
  const LogoPath =
    body.LogoPath ||
    "https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg";
  const DataClasses = body.DataClasses || [];
  const IsVerified = body.IsVerified !== undefined ? body.IsVerified : true;
  const IsFabricated = body.IsFabricated || false;
  const IsSensitive = body.IsSensitive || false;
  const IsRetired = body.IsRetired || false;
  const IsSpamList = body.IsSpamList || false;
  const IsMalware = body.IsMalware || false;
  const FaviconUrl = body.FaviconUrl || null;

  const breachData: QaBreachData = {
    emailHashPrefix,
    Name,
    Title,
    Domain,
    ModifiedDate,
    PwnCount,
    Description,
    LogoPath,
    DataClasses,
    IsVerified,
    IsFabricated,
    IsSensitive,
    IsRetired,
    IsSpamList,
    IsMalware,
    FaviconUrl,
  };

  try {
    await addQaCustomBreach(breachData);
    return successResponse();
  } catch (error) {
    console.error("Error inserting custom breach:", error);
    return internalServerError();
  }
}

export async function DELETE(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const emailHash = req.nextUrl.searchParams.get("emailHashPrefix");
  const id = Number(req.nextUrl.searchParams.get("id"));

  if (!emailHash || !id || Number.isNaN(id)) {
    return NextResponse.json(
      { error: "Missing or invalid emailHashPrefix or id parameter" },
      { status: 400 },
    );
  }

  try {
    await deleteQaCustomBreach(emailHash, id);
    return successResponse();
  } catch (error) {
    console.error("Error deleting custom breach:", error);
    return internalServerError();
  }
}

export function PUT() {
  //Change it for breach resolution within toggles table
  return NextResponse.json(
    { message: "Endpoint unavailable for now" },
    { status: 200 },
  );

  // const err = await checkAdmin();
  //  if (err) return err;

  //  const onerepScanResultId = Number(req.nextUrl.searchParams.get("onerep_scan_result_id"));
  //  const newStatus = req.nextUrl.searchParams.get("new_status");

  //  if (!onerepScanResultId || Number.isNaN(onerepScanResultId) || !newStatus) {
  //    return new NextResponse('Missing onerep_scan_result_id or newStatus parameter', { status: 400 });
  //  }

  //  await setQaCustomBrokerStatus(onerepScanResultId, newStatus);
  //  return successResponse();
}
