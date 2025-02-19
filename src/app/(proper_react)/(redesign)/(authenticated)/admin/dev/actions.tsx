/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getSubscribersByHashes } from "../../../../../../db/tables/subscribers";
import { isAdmin } from "../../../../../api/utils/auth";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getProfileDetails,
  updateProfileDetails,
} from "../../../../../../db/tables/onerep_profiles";
import { UpdateableProfileDetails } from "knex/types/tables";
import {
  getProfile,
  updateProfile,
} from "../../../../../functions/server/onerep";

export async function lookupFxaUid(emailHash: string) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV !== "local"
  ) {
    return notFound();
  }

  const subscriber = await getSubscribersByHashes([emailHash]);
  if (subscriber.length) {
    return subscriber[0].fxa_uid;
  }
}

export async function getOnerepProfile(onerepProfileId: number) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV !== "local"
  ) {
    return notFound();
  }

  try {
    return {
      local: await getProfileDetails(onerepProfileId),
      remote: await getProfile(onerepProfileId),
    };
  } catch (error) {
    console.error("Could not get profile details:", error);
  }
}

export async function updateOnerepProfile(
  onerepProfileId: number,
  profileData: UpdateableProfileDetails,
) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV !== "local"
  ) {
    return notFound();
  }

  try {
    await updateProfile(onerepProfileId, profileData);
    await updateProfileDetails(onerepProfileId, profileData);
  } catch (error) {
    console.error("Could not update profile details:", error);
  }
}
