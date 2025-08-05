/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { notFound } from "next/navigation";
import { getSubscribersByHashes } from "../../../../../../db/tables/subscribers";
import { isAdmin } from "../../../../../api/utils/auth";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { getProfileDetails } from "../../../../../../db/tables/onerep_profiles";
import {
  createScan,
  getProfile,
  UpdateableProfileDetails,
} from "../../../../../functions/server/onerep";
import updateDataBrokerScanProfile from "../../../../../functions/server/updateDataBrokerScanProfile";
import { getAllScansForProfile } from "../../../../../../db/tables/onerep_scans";
import { refreshStoredScanResults } from "../../../../../functions/server/refreshStoredScanResults";

export async function lookupFxaUid(emailHash: string) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production"
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
    process.env.APP_ENV === "production" ||
    typeof onerepProfileId !== "number" ||
    !Number.isInteger(onerepProfileId)
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
    process.env.APP_ENV === "production" ||
    typeof onerepProfileId !== "number" ||
    !Number.isInteger(onerepProfileId)
  ) {
    return notFound();
  }

  try {
    await updateDataBrokerScanProfile(onerepProfileId, profileData);
  } catch (error) {
    console.error("Could not update profile details:", error);
  }
}

export async function getAllProfileScans(onerepProfileId: number) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production"
  ) {
    return notFound();
  }

  try {
    return await getAllScansForProfile(onerepProfileId);
  } catch (error) {
    console.error("Getting all profile scans failed:", error);
  }
}

export async function triggerManualProfileScan(onerepProfileId: number) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production" ||
    typeof onerepProfileId !== "number" ||
    !Number.isInteger(onerepProfileId)
  ) {
    return notFound();
  }
  console.info("Manual scan initiated by admin for:", onerepProfileId);

  try {
    const scanResult = await createScan(onerepProfileId);
    await refreshStoredScanResults(onerepProfileId);
    return scanResult;
  } catch (error) {
    console.error("Manual scan triggered by admin failed:", error);
  }
}
