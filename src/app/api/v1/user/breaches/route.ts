/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {
  Breach,
  BreachResolutionApiBody,
  BreachStats,
  Subscriber,
  VerifiedEmail,
} from "../../../../(nextjs_migration)/(authenticated)/user/breaches/breaches.js";

import { authOptions } from "../../../auth/[...nextauth]/route";
import { getBreaches } from "../../../../functions/server/getBreaches";
import { getAllEmailsAndBreaches } from "../../../../../utils/breaches.js";
import { getSubscriberByEmail } from "../../../../../../src/db/tables/subscribers.js";
import {
  setBreachResolution,
  updateBreachStats,
} from "../../../../../../src/db/tables/subscribers.js";

function breachStatsV1(verifiedEmails: Array<VerifiedEmail>) {
  const breachStats: BreachStats = {
    monitoredEmails: {
      count: 0,
    },
    numBreaches: {
      count: 0,
      numResolved: 0,
      numUnresolved: 0,
    },
    passwords: {
      count: 0,
      numResolved: 0,
    },
  };
  let foundBreaches: Array<Breach> = [];

  // combine the breaches for each account, breach duplicates are ok
  // since the user may have multiple accounts with different emails
  verifiedEmails.forEach((email) => {
    email.breaches.forEach((breach) => {
      if (breach.IsResolved) {
        breachStats.numBreaches.numResolved++;
      }

      const dataClasses = breach.DataClasses;
      if (dataClasses.includes("passwords")) {
        breachStats.passwords.count++;
        if (breach.IsResolved) {
          breachStats.passwords.numResolved++;
        }
      }
    });
    foundBreaches = [...foundBreaches, ...email.breaches];
  });

  // total number of verified emails being monitored
  breachStats.monitoredEmails.count = verifiedEmails.length;
  // total number of breaches across all emails
  breachStats.numBreaches.count = foundBreaches.length;
  breachStats.numBreaches.numUnresolved =
    breachStats.numBreaches.count - breachStats.numBreaches.numResolved;

  return breachStats;
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ success: false }, { status: 403 });
    }

    const subscriber: Subscriber = await getSubscriberByEmail(
      session.user.email
    );
    const body = await request.json();
    const {
      affectedEmail,
      breachId,
      resolutionsChecked,
    }: BreachResolutionApiBody = body;

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
        status: 403,
      });
    }

    // check if breach id is a part of affectEmail's breaches
    const allBreaches = await getBreaches();
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
        status: 400,
      });
    }

    // check if resolutionsChecked array is a subset of the breaches' datatypes
    const isSubset = resolutionsChecked.every((val) =>
      currentBreaches[0].DataClasses.includes(val)
    );
    if (!isSubset) {
      return NextResponse.json({
        success: false,
        message: `Error: the resolutionChecked param contains more than allowed data types: ${resolutionsChecked}`,
        status: 400,
      });
    }

    /* new JsonB:
    {
      email_id: {
        recency_index: {
          resolutions: ['email', ...],
          isResolved: true
        }
      }
    }
    */

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
    const userBreachStats = breachStatsV1(verifiedEmails);
    await updateBreachStats(subscriber.id, userBreachStats);

    const successResponse = {
      success: true,
      breachResolution: updatedSubscriber.breach_resolution,
    };
    return NextResponse.json(successResponse);
  } catch (e) {
    return NextResponse.json({
      success: false,
      status: 500,
    });
  }
}
