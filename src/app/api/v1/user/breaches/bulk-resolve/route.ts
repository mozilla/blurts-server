/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../../utils/auth";
import { getServerSession } from "next-auth";
import { logger } from "../../../../../functions/server/logging";
import {
  BreachBulkResolutionRequest,
  Subscriber,
} from "../../../../../(nextjs_migration)/(authenticated)/user/breaches/breaches.js";
import { getBreaches } from "../../../../../functions/server/getBreaches";
import { getAllEmailsAndBreaches } from "../../../../../../utils/breaches";
import {
  getSubscriberByEmail,
  setBreachResolution,
} from "../../../../../../db/tables/subscribers";
import appConstants from "../../../../../../appConstants";

export async function PUT(req: NextRequest): Promise<NextResponse> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Unauthenticated" }),
      { status: 401 },
    );
  }

  if (typeof session?.user?.email === "string") {
    try {
      const subscriber: Subscriber = await getSubscriberByEmail(
        session?.user?.email,
      );
      const allBreaches = await getBreaches();
      const j = await req.json();
      const { dataType: dataTypeToResolve }: BreachBulkResolutionRequest = j;
      console.log({ dataTypeToResolve });

      // check if breach id is a part of affectEmail's breaches
      const { verifiedEmails } = await getAllEmailsAndBreaches(
        subscriber,
        allBreaches,
      );

      const currentBreachResolution = subscriber.breach_resolution || {}; // get this from existing breach resolution if available
      currentBreachResolution.useBreachId = true;

      for (const verifiedEmail of verifiedEmails) {
        const currentEmail = verifiedEmail.email;
        for (const currentBreach of verifiedEmail.breaches) {
          const currentBreachDataTypes = currentBreach.DataClasses;

          if (currentBreachDataTypes?.includes(dataTypeToResolve)) {
            const breachId = currentBreach.Id;
            let currentResolutionsChecked =
              currentBreachResolution[currentEmail]?.[breachId]
                ?.resolutionsChecked;
            if (currentResolutionsChecked) {
              if (!currentResolutionsChecked.includes(dataTypeToResolve)) {
                currentResolutionsChecked.push(dataTypeToResolve);
              }
            } else {
              currentResolutionsChecked = [dataTypeToResolve];
            }

            const isResolved =
              currentResolutionsChecked.length ===
              currentBreachDataTypes.length;

            currentBreachResolution[currentEmail] = {
              ...(currentBreachResolution[currentEmail] || {}),
              ...{
                [breachId]: {
                  resolutionsChecked: currentResolutionsChecked,
                  isResolved,
                },
              },
            };
          }
        }
      }

      // set useBreachId to mark latest version of breach resolution
      // without this line, the get call might assume recency index
      currentBreachResolution.useBreachId = true;

      // if (affectedEmailAsSubscriber) {
      //   currentEmail = verifiedEmails.find(
      //     (ve) => ve.email === affectedEmailAsSubscriber,
      //   );
      // } else {
      //   currentEmail = verifiedEmails.find(
      //     (ve) => ve.email === affectedEmailInEmailAddresses,
      //   );
      // }
      // const currentBreaches = currentEmail?.breaches?.filter(
      //   (b) => b.Id === breachIdNumber,
      // );
      // if (!currentBreaches) {
      //   return NextResponse.json({
      //     success: false,
      //     message: "Error: breachId provided does not exist",
      //   });
      // }

      // check if resolutionsChecked array is a subset of the breaches' datatypes
      // const isSubset = resolutionsChecked.every((val) =>
      //   currentBreaches[0].DataClasses.includes(val),
      // );
      // if (!isSubset) {
      //   return NextResponse.json({
      //     success: false,
      //     message: `Error: the resolutionChecked param contains more than allowed data types: [${resolutionsChecked.join(
      //       ", ",
      //     )}]`,
      //   });
      // }

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

      // const currentBreachDataTypes = currentBreaches[0].DataClasses; // get this from existing breaches
      // const currentBreachResolution = subscriber.breach_resolution || {}; // get this from existing breach resolution if available
      // const isResolved =
      //   resolutionsChecked.length === currentBreachDataTypes.length;
      // currentBreachResolution[affectedEmail] = {
      //   ...(currentBreachResolution[affectedEmail] || {}),
      //   ...{
      //     [breachIdNumber]: {
      //       resolutionsChecked,
      //       isResolved,
      //     },
      //   },
      // };

      // set useBreachId to mark latest version of breach resolution
      // without this line, the get call might assume recency index
      // currentBreachResolution.useBreachId = true;

      const updatedSubscriber = await setBreachResolution(
        subscriber,
        currentBreachResolution,
      );

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
