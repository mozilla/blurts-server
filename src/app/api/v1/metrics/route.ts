/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { registry } from "../../../../metrics";

export async function GET() {
  const metrics = await registry.metrics();
  return new NextResponse(metrics, {
    status: 200,
    headers: {
      "Content-Type":
        registry.contentType || "text/plain; version=0.0.4; charset=utf-8",
    },
  });
}
