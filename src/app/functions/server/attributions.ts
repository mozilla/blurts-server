/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { cookies } from "next/headers";
import {
  addAttributionForSubscriber,
  getLatestAttributionForSubscriberWithType,
} from "../../../db/tables/attributions";

export async function getAttributionsFromCookiesOrDb(subscriberId: number) {
  const cookiesList = await cookies();
  let additionalSubplatParams = new URLSearchParams(
    cookiesList.get("attributionsLastTouch")?.value,
  );

  // store utm attributions if present in cookies
  if (cookiesList.get("attributionsFirstTouch")?.value) {
    const searchParams = new URLSearchParams(
      cookiesList.get("attributionsFirstTouch")?.value,
    );
    const attribution = {
      type: "firstTouch",
      entrypoint: searchParams.get("entrypoint") ?? "",
      utm_campaign: searchParams.get("utm_campaign") ?? "",
      utm_medium: searchParams.get("utm_medium") ?? "",
      utm_source: searchParams.get("utm_source") ?? "",
      utm_term: searchParams.get("utm_term") ?? "",
    };
    await addAttributionForSubscriber(subscriberId, attribution);
  }

  if (additionalSubplatParams.size > 0) {
    const attribution = {
      type: "lastTouch",
      entrypoint: additionalSubplatParams.get("entrypoint") ?? "",
      utm_campaign: additionalSubplatParams.get("utm_campaign") ?? "",
      utm_medium: additionalSubplatParams.get("utm_medium") ?? "",
      utm_source: additionalSubplatParams.get("utm_source") ?? "",
      utm_term: additionalSubplatParams.get("utm_term") ?? "",
    };
    await addAttributionForSubscriber(subscriberId, attribution);
  } else {
    // if "attributionsLastTouch" cookie isn't present, try to load the attribution from the db
    const attributionLastTouch =
      await getLatestAttributionForSubscriberWithType(
        subscriberId,
        "lastTouch",
      );
    if (attributionLastTouch) {
      additionalSubplatParams = new URLSearchParams(
        attributionLastTouch as Record<string, string>,
      );
    }
  }
  return additionalSubplatParams;
}
