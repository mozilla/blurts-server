/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "../../../../utils/auth";
import {
  errorIfProduction,
  internalServerError,
  unauthError,
} from "../../../../utils/errorThrower";
import {
  addQaCustomBreach,
  QaBreachData,
  deleteQaCustomBreach,
  getAllQaCustomBreaches,
} from "../../../../../../db/tables/qa_customs";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { randomInt } from "crypto";
import {
  getSubscribersByHashes,
  setBreachResolution,
} from "../../../../../../db/tables/subscribers";
import { logger } from "../../../../../functions/server/logging";

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

type EmailBreachData = {
  [breachId: string]: {
    resolutionsChecked: string[];
  };
};

type BreachResolutionObject = {
  useBreachId: boolean;
} & {
  [email: string]: EmailBreachData;
};

/*
  this function returns an object that removes a breach based on its breachId.
*/
function getObjWithRemovedBreach(
  obj: BreachResolutionObject | null,
  breachId: string,
): BreachResolutionObject | null {
  if (!obj) return null;
  const emails = Object.keys(obj);
  let emailCount = emails.length - 1;

  for (const email of emails) {
    if (email === "useBreachId") continue;
    if (obj[email][breachId]) delete obj[email][breachId];
    if (!Object.keys(obj[email]).length) {
      delete obj[email];
      emailCount--;
    }
  }
  if (emailCount === 0) return null;

  return obj;
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
  const Name = body.Name || "Custom-Breach";
  const Title = body.Title || "Custom-Breach";
  const Domain = body.Domain || "custom-breach.com";
  const ModifiedDate = body.ModifiedDate;
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
  const currentTime = new Date().toISOString();
  const AddedDate = body.AddedDate || currentTime;
  const BreachDate = body.BreachDate || currentTime;

  const breachData: QaBreachData = {
    emailHashPrefix,
    Id: randomInt(10 ** 6, 10 ** 9),
    PwnCount: randomInt(10 ** 6, 10 ** 9),
    Name,
    Title,
    Domain,
    ModifiedDate,
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
    BreachDate,
    AddedDate,
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

  const prodErr = errorIfProduction();
  if (prodErr !== null) return prodErr;

  const emailHashFull = req.nextUrl.searchParams.get("emailHashFull");
  const breachId = Number(req.nextUrl.searchParams.get("breachId"));

  if (!emailHashFull || !breachId || Number.isNaN(breachId)) {
    return NextResponse.json(
      { error: "Missing or invalid emailHashPrefix or id parameter" },
      { status: 400 },
    );
  }

  const subscriberRows = await getSubscribersByHashes([emailHashFull]);
  for (const row of subscriberRows) {
    const breachResolutionBefore = row.breach_resolution;
    const breachResolutionAfter = getObjWithRemovedBreach(
      breachResolutionBefore,
      String(breachId),
    );
    const updateRes = await setBreachResolution(row, breachResolutionAfter);
    if (!updateRes) {
      logger.warn(
        "QA custom breach_resolution was not updated, 'setBreachResolution' returned undefined",
      );
    }
  }

  try {
    const emailHashPrefix = emailHashFull.slice(0, 6);
    await deleteQaCustomBreach(emailHashPrefix, breachId);
    return successResponse();
  } catch (error) {
    console.error("Error deleting custom breach:", error);
    return internalServerError();
  }
}
