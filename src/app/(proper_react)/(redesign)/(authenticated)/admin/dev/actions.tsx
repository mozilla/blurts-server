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
  createScan as onerep_createScan,
  getProfile as onerep_getProfile,
  UpdateableProfileDetails,
} from "../../../../../functions/server/onerep";
import { updateOnerepDataBrokerScanProfile } from "../../../../../functions/server/updateDataBrokerScanProfile";
import { getAllScansForProfile } from "../../../../../../db/tables/onerep_scans";
import { refreshStoredScanResults } from "../../../../../functions/server/refreshStoredScanResults";
import {
  getProfile as moscary_getProfile,
  createScan as moscary_createScan,
} from "../../../../../functions/server/moscary";
import { UUID } from "node:crypto";

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
      remote: await onerep_getProfile(onerepProfileId),
    };
  } catch (error) {
    console.error("Could not get profile details:", error);
  }
}

export async function getMoscaryProfile(moscaryProfileId: UUID) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production"
  ) {
    return notFound();
  }

  try {
    return await moscary_getProfile(moscaryProfileId);
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
    await updateOnerepDataBrokerScanProfile(onerepProfileId, profileData);
  } catch (error) {
    console.error("Could not update profile details:", error);
  }
}

export async function getAllOnerepProfileScans(onerepProfileId: number) {
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

export async function triggerManualOnerepProfileScan(onerepProfileId: number) {
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
  console.info("Manual OneRep scan initiated by admin for:", onerepProfileId);

  try {
    const scanResult = await onerep_createScan(onerepProfileId);
    await refreshStoredScanResults(onerepProfileId);
    return scanResult;
  } catch (error) {
    console.error("Manual scan triggered by admin failed:", error);
  }
}

export async function triggerManualMoscaryProfileScan(moscaryProfileId: UUID) {
  const session = await getServerSession();
  if (
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    process.env.APP_ENV === "production"
  ) {
    return notFound();
  }
  console.info("Manual Moscary scan initiated by admin for:", moscaryProfileId);

  try {
    const scanResult = await moscary_createScan(moscaryProfileId);
    return scanResult;
  } catch (error) {
    console.error("Manual scan triggered by admin failed:", error);
  }
}
