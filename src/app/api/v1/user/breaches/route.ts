/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { logger } from "../../../../functions/server/logging";
import { getBreaches } from "../../../../functions/server/getBreaches";
import { getAllEmailsAndBreaches } from "../../../../../utils/breaches";
import {
  getSubscriberByFxaUid,
  setBreachResolution,
} from "../../../../../db/tables/subscribers";
import appConstants from "../../../../../appConstants";
import { HibpBreachDataTypes } from "../../../../functions/universal/breach";

export interface BreachResolutionRequest {
  affectedEmail: string;
  breachId: number;
  resolutionsChecked: Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>;
}

// Get breaches data
export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (typeof token?.subscriber?.fxa_uid === "string") {
    // Signed in
    try {
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      const allBreaches = await getBreaches();
      const breaches = await getAllEmailsAndBreaches(subscriber, allBreaches);
      const successResponse = {
        success: true,
        breaches,
      };
      return NextResponse.json(successResponse);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}

export async function PUT(req: NextRequest) {
  const token = await getToken({ req });
  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const allBreaches = await getBreaches();
      const j = await req.json();
      const {
        affectedEmail,
        breachId,
        resolutionsChecked,
      }: BreachResolutionRequest = j;
      const breachIdNumber = Number(breachId);
      const affectedEmailAsSubscriber =
        subscriber.primary_email === affectedEmail
          ? subscriber.primary_email
          : false;
      const affectedEmailInEmailAddresses =
        subscriber.email_addresses.find((ea) => ea.email === affectedEmail)
          ?.email || false;

      // check if current user's emails array contain affectedEmail
      if (!affectedEmailAsSubscriber && !affectedEmailInEmailAddresses) {
        return NextResponse.json({
          success: false,
          message: "Error: affectedEmail is not valid for this subscriber",
        });
      }

      // check if breach id is a part of affectEmail's breaches
      const { verifiedEmails } = await getAllEmailsAndBreaches(
        subscriber,
        allBreaches,
      );
      let currentEmail;
      if (affectedEmailAsSubscriber) {
        currentEmail = verifiedEmails.find(
          (ve) => ve.email === affectedEmailAsSubscriber,
        );
      } else {
        currentEmail = verifiedEmails.find(
          (ve) => ve.email === affectedEmailInEmailAddresses,
        );
      }
      const currentBreaches = currentEmail?.breaches?.filter(
        (b) => b.Id === breachIdNumber,
      );
      if (!currentBreaches) {
        return NextResponse.json({
          success: false,
          message: "Error: breachId provided does not exist",
        });
      }

      // check if resolutionsChecked array is a subset of the breaches' datatypes
      const isSubset = resolutionsChecked.every((val) =>
        currentBreaches[0].DataClasses.includes(val),
      );
      if (!isSubset) {
        return NextResponse.json({
          success: false,
          message: `Error: the resolutionChecked param contains more than allowed data types: [${resolutionsChecked.join(
            ", ",
          )}]`,
        });
      }

      // /* new JsonB:
      // {
      //   email_id: {
      //     recency_index: {
      //       resolutions: ['email', ...],
      //     }
      //   }
      // }
      // */

      // Typed as `any` because `subscriber` used to be typed as `any`, and
      // making that type more specific was enough work just by itself:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentBreachResolution: any = subscriber.breach_resolution || {}; // get this from existing breach resolution if available
      currentBreachResolution[affectedEmail] = {
        ...(currentBreachResolution[affectedEmail] || {}),
        ...{
          [breachIdNumber]: {
            resolutionsChecked,
          },
        },
      };

      // set useBreachId to mark latest version of breach resolution
      // without this line, the get call might assume recency index
      currentBreachResolution.useBreachId = true;

      const updatedSubscriber = await setBreachResolution(
        subscriber,
        currentBreachResolution,
      );
      if (!updatedSubscriber) {
        throw new Error("Could not retrieve updated subscriber data.");
      }

      return NextResponse.json({
        success: true,
        breachResolutions: updatedSubscriber.breach_resolution,
      });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL);
  }
}
