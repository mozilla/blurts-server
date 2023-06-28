/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

import { getComponentAsString } from "../../../../functions/server/getComponentAsString";
import AddEmailDialog from "../../../../components/server/AddEmailDialog";

export async function GET() {
  try {
    const dialogContentString = await getComponentAsString({
      component: AddEmailDialog(),
    });

    return new NextResponse(dialogContentString, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
