/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { logger } from "../../../../../functions/server/logging";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  createProfile as createOnerepProfile,
  createScan as createOnerepScan,
  isEligibleForFreeScan as isEligibleForFreeOnerepScan,
} from "../../../../../functions/server/onerep";
import type { CreateProfileRequest } from "../../../../../functions/server/onerep";
import { meetsAgeRequirement } from "../../../../../functions/universal/user";
import {
  getSubscriberByFxaUid,
  setMoscaryId,
} from "../../../../../../db/tables/subscribers";
import {
  setOnerepProfileId,
  setOnerepScan,
} from "../../../../../../db/tables/onerep_scans";
import { setProfileDetails } from "../../../../../../db/tables/onerep_profiles";
import { StateAbbr } from "../../../../../../utils/states";
import { ISO8601DateString } from "../../../../../../utils/parse";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { getExperimentationId } from "../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../functions/universal/getLocale";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../functions/l10n/serverComponents";
import { getEnabledFeatureFlags } from "../../../../../../db/tables/featureFlags";
import {
  createProfile,
  createScan,
  isEligibleForFreeScan,
} from "../../../../../functions/server/moscary";

export interface WelcomeScanBody {
  success: boolean;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  city: string;
  state: StateAbbr;
  dateOfBirth: ISO8601DateString;
  middleName?: string;
  nameSuffix?: string;
}

export async function POST(
  req: NextRequest,
): Promise<NextResponse<WelcomeScanBody> | NextResponse<unknown>> {
  const session = await getServerSession();

  if (!session?.user?.subscriber) {
    throw new Error("No fxa_uid found in session");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  const countryCode = getCountryCode(await headers());
  const eligible = enabledFeatureFlags.includes("Moscary")
    ? await isEligibleForFreeScan(session.user, countryCode)
    : await isEligibleForFreeOnerepScan(session.user, countryCode);
  if (!eligible) {
    logger.warn("scan_created_warn", {
      message: "User is not eligible for feature",
    });
    return NextResponse.json({ success: false }, { status: 422 });
  }

  const params: UserInfo = await req.json();
  const requiredParamKeys: Array<keyof UserInfo> = [
    "firstName",
    "lastName",
    "city",
    "state",
    "dateOfBirth",
  ];
  requiredParamKeys.forEach((requiredParamKey) => {
    if (!params[requiredParamKey]) {
      throw new Error(`${requiredParamKey} is required`);
    }
  });

  const {
    firstName,
    middleName,
    lastName,
    nameSuffix,
    city,
    state,
    dateOfBirth,
  } = params;
  if (!meetsAgeRequirement(dateOfBirth)) {
    throw new Error(`User does not meet the age requirement: ${dateOfBirth}`);
  }

  const experimentationId = await getExperimentationId(session.user);
  const experimentData = await getExperiments({
    experimentationId,
    countryCode: getCountryCode(await headers()),
    locale: getLocale(getL10n(await getAcceptLangHeaderInServerComponents())),
  });
  const optionalInfoExperimentData =
    experimentData["Features"]["welcome-scan-optional-info"];

  const profileData: CreateProfileRequest = {
    first_name: firstName,
    last_name: lastName,
    addresses: [{ city, state }],
    birth_date: dateOfBirth,
    ...(optionalInfoExperimentData.enabled &&
      (optionalInfoExperimentData.variant === "middleName" ||
        optionalInfoExperimentData.variant === "suffixAndMiddleName") && {
        middle_name: middleName,
      }),
    ...(optionalInfoExperimentData.enabled &&
      (optionalInfoExperimentData.variant === "suffix" ||
        optionalInfoExperimentData.variant === "suffixAndMiddleName") && {
        name_suffix: nameSuffix,
      }),
  };

  if (typeof session?.user?.subscriber.fxa_uid === "string") {
    try {
      const subscriber = await getSubscriberByFxaUid(
        session.user.subscriber.fxa_uid,
      );

      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      if (enabledFeatureFlags.includes("Moscary")) {
        if (subscriber.moscary_id === null) {
          const profileId = await createProfile(profileData);
          await setMoscaryId(subscriber, profileId);
          // Start exposure scan
          const scan = await createScan(profileId);
          logger.info("scan_created", {
            scanId: scan.id,
            scanStatus: scan.status,
            scanReason: "manual",
          });

          return NextResponse.json({ success: true }, { status: 200 });
        }
      } else {
        if (!subscriber.onerep_profile_id) {
          // Create OneRep profile
          const profileId = await createOnerepProfile(profileData);
          await setOnerepProfileId(subscriber, profileId);
          await setProfileDetails(profileId, profileData);

          // Start exposure scan
          const scan = await createOnerepScan(profileId);
          const scanId = scan.id;
          await setOnerepScan(profileId, scanId, scan.status, "manual");
          // TODO MNTOR-2686 - refactor onerep.ts and centralize logging.
          logger.info("scan_created", {
            onerepScanId: scanId,
            onerepScanStatus: scan.status,
            onerepScanReason: "manual",
          });

          return NextResponse.json({ success: true }, { status: 200 });
        }
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
