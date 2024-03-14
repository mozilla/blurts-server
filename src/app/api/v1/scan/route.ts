/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { validateEmailAddress } from "../../../../utils/emailAddress";
import { getBreaches } from "../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../utils/hibp";
import { getSha1 } from "../../../../utils/fxa";
import { getL10n } from "../../../functions/server/l10n";
import { getBreachLogo } from "../../../../utils/breachLogo";
import { Breach } from "../../../functions/universal/breach";

export interface RequestBreachScanErrorResponse {
  success: false;
}

export interface RequestBreachScanSuccessResponse {
  success: true;
  breaches: Array<unknown>;
  heading: string;
  logos: string[];
  dataClassStrings: string[][];
  total: number;
}

export type RequestBreachScanResponse =
  | RequestBreachScanErrorResponse
  | RequestBreachScanSuccessResponse;

export async function POST(request: Request) {
  const body = await request.json();

  const validatedEmail = validateEmailAddress(body.email);

  if (validatedEmail === null) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const l10n = getL10n();

  try {
    const allBreaches = await getBreaches();
    const breaches = (await getBreachesForEmail(
      getSha1(validatedEmail.email),
      allBreaches,
      false,
    )) as Breach[];

    const successResponse: RequestBreachScanSuccessResponse = {
      success: true,
      breaches: breaches.slice(0, 6),
      total: breaches.length,
      heading:
        // This is sent in the API response so we can replace the variables in
        // the Fluent string (because Fluent might change the strings depending
        // on the variables, specifically the count, and we don't run Fluent on
        // the client side):
        l10n
          .getString("exposure-landing-result-hero-heading", {
            // Will be injected client-side, since this is derived from user
            // input and thus needs to be sanitized by the browser:
            email: "",
            count: breaches.length,
          })
          .replace("<email>", '<span class="breach-result-email">')
          .replace("</email>", "</span>")
          .replace("<count>", '<span class="breach-result-count">')
          .replace("</count>", "</span>"),
      // This is sent in the API response because we don't have Fluent on the
      // client side, and thus can't dynamically localise breached data classes:
      dataClassStrings: breaches.map((breach) =>
        breach.DataClasses.map((dataClass: string) =>
          l10n.getString(dataClass),
        ),
      ),
      // This is sent in the API response because we can't call `getBreachLogo`
      // client side, where it would expose AppConstants:
      logos: breaches.map((breach) => getBreachLogo(breach)),
    };
    return NextResponse.json(successResponse);
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
