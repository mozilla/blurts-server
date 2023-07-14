/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getOnerepProfileId } from "../../../../../../../db/tables/subscribers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../api/utils/auth";
import { getLatestOnerepScan } from "../../../../../../../db/tables/onerep_scans";
import { isUserSubscribed } from "../../../../../../functions/server/isUserSubscribed";

export function generateMetadata() {
  return {
    title: "Welcome - Results",
  };
}

export default async function UserWelcomeResults() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    throw new Error("No session");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanResult = await getLatestOnerepScan(profileId);

  const results = JSON.stringify(scanResult, null, 2);

  const ctaButton = async () => {
    if (process.env.PREMIUM_ENABLED === "true") {
      if (await isUserSubscribed()) {
        return (
          <a className="button primary" href="remove">
            <button className="button primary">Remove my Data</button>
          </a>
        );
      } else {
        return (
          <a
            className="button primary"
            href={`${process.env.FXA_SUBSCRIPTIONS_URL ?? ""}/products/${
              process.env.PREMIUM_PRODUCT_ID ?? ""
            }?plan=${process.env.PREMIUM_PLAN_ID_US ?? ""}`}
          >
            <button className="button primary">Subscribe to Premium</button>
          </a>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <main>
      {ctaButton()}
      <h2>Results</h2>
      <pre>{results}</pre>
    </main>
  );
}
