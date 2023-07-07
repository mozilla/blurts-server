/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  BreachResolutionRequest,
  Subscriber,
} from "../../../../(nextjs_migration)/(authenticated)/user/breaches/breaches.js";

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getBreaches } from "../../../../functions/server/getBreaches";
import { getAllEmailsAndBreaches } from "../../../../../utils/breaches";
import {
  getSubscriberByEmail,
  setBreachResolution,
} from "../../../../../db/tables/subscribers";
import appConstants from "../../../../../appConstants";

// Get breaches data
export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (typeof token?.email === "string") {
    // Signed in
    try {
      const subscriber: Subscriber = await getSubscriberByEmail(token.email);
      const allBreaches = await getBreaches();
      const breaches = await getAllEmailsAndBreaches(subscriber, allBreaches);
      const successResponse = {
        success: true,
        breaches,
      };
      return NextResponse.json(successResponse);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}

export async function PUT(req: NextRequest) {
  const token = await getToken({ req });
  if (typeof token?.email === "string") {
    try {
      const subscriber: Subscriber = await getSubscriberByEmail(token.email);
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
        allBreaches
      );
      let currentEmail;
      if (affectedEmailAsSubscriber) {
        currentEmail = verifiedEmails.find(
          (ve) => ve.email === affectedEmailAsSubscriber
        );
      } else {
        currentEmail = verifiedEmails.find(
          (ve) => ve.email === affectedEmailInEmailAddresses
        );
      }
      const currentBreaches = currentEmail?.breaches?.filter(
        (b) => b.Id === breachIdNumber
      );
      if (!currentBreaches) {
        return NextResponse.json({
          success: false,
          message: "Error: breachId provided does not exist",
        });
      }

      // check if resolutionsChecked array is a subset of the breaches' datatypes
      const isSubset = resolutionsChecked.every((val) =>
        currentBreaches[0].DataClasses.includes(val)
      );
      if (!isSubset) {
        return NextResponse.json({
          success: false,
          message: `Error: the resolutionChecked param contains more than allowed data types: [${resolutionsChecked.join(
            ", "
          )}]`,
        });
      }

      // /* new JsonB:
      // {
      //   email_id: {
      //     recency_index: {
      //       resolutions: ['email', ...],
      //       isResolved: true
      //     }
      //   }
      // }
      // */

      const currentBreachDataTypes = currentBreaches[0].DataClasses; // get this from existing breaches
      const currentBreachResolution = subscriber.breach_resolution || {}; // get this from existing breach resolution if available
      const isResolved =
        resolutionsChecked.length === currentBreachDataTypes.length;
      currentBreachResolution[affectedEmail] = {
        ...(currentBreachResolution[affectedEmail] || {}),
        ...{
          [breachIdNumber]: {
            resolutionsChecked,
            isResolved,
          },
        },
      };

      // set useBreachId to mark latest version of breach resolution
      // without this line, the get call might assume recency index
      currentBreachResolution.useBreachId = true;

      const updatedSubscriber = await setBreachResolution(
        subscriber,
        currentBreachResolution
      );

      return NextResponse.json({
        success: true,
        breachResolutions: updatedSubscriber.breach_resolution,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL);
  }
}
