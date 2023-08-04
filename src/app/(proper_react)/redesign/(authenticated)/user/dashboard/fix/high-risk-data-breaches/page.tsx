/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import {
  UserBreaches,
  getUserBreaches,
  processBreachesData,
} from "../../../../../../../functions/server/getUserBreaches";
import { authOptions } from "../../../../../../../api/utils/auth";
import { redirect } from "next/navigation";
import { View } from "./View";
import { HibpLikeDbBreach } from "../../../../../../../../utils/hibp";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import {
  AllEmailsAndBreaches,
  BundledVerifiedEmails,
} from "../../../../../../../../utils/breaches";

export default async function HighRiskDataBreaches() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  // Original data breaches
  // const userBreachesData: UserBreaches = await getUserBreaches({
  //   user: session.user,
  // });
  // const breaches = await getUserBreaches({ user: session.user });

  // Mocked data breaches
  const scannedResultsArraySample: HibpLikeDbBreach[] = [];

  for (let i = 0; i < 5; i++) {
    const breachItem = createRandomBreach({ isHighRiskOnly: true }); // Use a different fakerSeed for each iteration
    scannedResultsArraySample.push(breachItem);
  }

  const mockedUserBreaches: UserBreaches = {
    ssnBreaches: [],
    passwordBreaches: [],
    phoneBreaches: [],
    bankAccountBreaches: [],
    pinNumberBreaches: [],
    creditCardNumberBreaches: [],
    emailVerifiedCount: 2,
    emailTotalCount: 5,
    emailSelectIndex: 1,
    breachesData: {
      unverifiedEmails: [],
      verifiedEmails: [
        {
          breaches: scannedResultsArraySample,
          email: "email@example.com",
          id: 2,
          primary: true,
          verified: true,
        },
      ],
    },
  };

  const sanitizedBreaches = processBreachesData(
    mockedUserBreaches.breachesData
  );

  //TODO: Add logic to check completion between high risk states
  return <View breaches={sanitizedBreaches} />;
}
