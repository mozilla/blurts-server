/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile } from "node:fs/promises";
import { dirname, resolve as pathResolve } from "node:path";
import { fileURLToPath } from "node:url";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { "breach-domain": string } }
) {
  const logoPath = pathResolve(
    dirname(fileURLToPath(import.meta.url)),
    `../../../../../public/logo_cache/${context.params["breach-domain"]}.ico`
  );
  try {
    const file = await readFile(logoPath);
    return new NextResponse(file, {
      headers: { "Content-Type": "image/x-icon" },
    });
  } catch (e) {
    return new NextResponse(null, { status: 404 });
  }
}
