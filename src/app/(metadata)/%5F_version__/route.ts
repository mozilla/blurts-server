/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { vers } from "../../../utils/dockerflow";

// Note: this URL starts with an underscore, but Next.js interprets that as
//       marking the file as private:
//       https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders
//       To actually use an underscore, we need to name it %5F instead.

export function GET(_req: NextRequest) {
  return NextResponse.json(vers());
}
