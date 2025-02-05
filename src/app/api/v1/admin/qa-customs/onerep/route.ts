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
  addQaCustomBroker,
  deleteQaCustomBrokerRow,
  getAllQaCustomBrokers,
  QaBrokerData,
  setQaCustomBrokerStatus,
} from "../../../../../../db/tables/qa_customs";
import { getServerSession } from "../../../../../functions/server/getServerSession";

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

const mockAddress = {
  zip: "93386",
  city: "Berkeley",
  state: "CA",
  street: "Von Meadows",
};
const mockPhone = "000000000";
const mockEmail = "mockEmail@email.com";
const mockRelative = "Relative Johnson";
type mockInputs = string | { [key: string]: string };

function duplicateObj(obj: mockInputs, n: string | undefined) {
  const howMany = n ? parseInt(n, 10) : 0;
  return Array.from({ length: howMany }, () => obj);
}

export async function GET(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const prodErr = errorIfProduction();
  if (prodErr !== null) return prodErr;

  const profileId = Number(req.nextUrl.searchParams.get("onerep_profile_id"));

  if (!profileId || Number.isNaN(profileId)) {
    return NextResponse.json(
      { error: "Missing onerep_profile_id parameter" },
      { status: 400 },
    );
  }

  return NextResponse.json(await getAllQaCustomBrokers(profileId));
}

export async function POST(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const prodErr = errorIfProduction();
  if (prodErr !== null) return prodErr;

  const body = await req.json();

  const onerep_profile_id = parseInt(body.onerep_profile_id || "21", 10);
  const link = body.link || "https://test-broker.com";
  const age = body.age ? parseInt(body.age, 10) : undefined;
  const data_broker = body.data_broker || "test_broker";
  const emails = duplicateObj(mockEmail, body.emails) as string[];
  const phones = duplicateObj(mockPhone, body.phones) as string[];
  const addresses = duplicateObj(mockAddress, body.addresses) as {
    [key: string]: string;
  }[];
  const relatives = duplicateObj(mockRelative, body.relatives) as string[];
  const first_name = body.first_name || "John";
  const middle_name = body.middle_name || "";
  const last_name = body.last_name || "Doe";
  const status = body.status || "new";
  const manually_resolved = body.manually_resolved || false;
  const optout_attempts = body.optout_attempts || null;
  const last_optout_at = body.last_optout_at || null;

  const brokerData: QaBrokerData = {
    onerep_profile_id,
    link,
    age,
    data_broker,
    emails,
    phones,
    addresses,
    relatives,
    first_name,
    middle_name,
    last_name,
    status,
    manually_resolved,
    optout_attempts,
    last_optout_at,
  };
  try {
    await addQaCustomBroker(brokerData);
    return new NextResponse("Success", { status: 200 });
  } catch {
    return internalServerError();
  }
}

export async function DELETE(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const prodErr = errorIfProduction();
  if (prodErr !== null) return prodErr;

  const onerepScanResultId = Number(
    req.nextUrl.searchParams.get("onerep_scan_result_id"),
  );

  if (!onerepScanResultId || Number.isNaN(onerepScanResultId)) {
    return NextResponse.json(
      { error: "Missing onerep_scan_result_id parameter" },
      { status: 400 },
    );
  }

  await deleteQaCustomBrokerRow(onerepScanResultId);
  return successResponse();
}

export async function PUT(req: NextRequest) {
  const err = await checkAdmin();
  if (err) return err;

  const prodErr = errorIfProduction();
  if (prodErr !== null) return prodErr;

  const onerepScanResultId = Number(
    req.nextUrl.searchParams.get("onerep_scan_result_id"),
  );
  const newStatus = req.nextUrl.searchParams.get("new_status");

  if (!onerepScanResultId || Number.isNaN(onerepScanResultId) || !newStatus) {
    return new NextResponse(
      "Missing onerep_scan_result_id or newStatus parameter",
      { status: 400 },
    );
  }

  await setQaCustomBrokerStatus(onerepScanResultId, newStatus);
  return successResponse();
}
