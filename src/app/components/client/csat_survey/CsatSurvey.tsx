/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { Cookies } from "react-cookie";
import { CsatSurveyBanner } from "./CsatSurveyBanner";
import { TabType } from "../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { getAutomaticRemovalCsatSurvey } from "./surveys/automaticRemovalCsatSurvey";
import { getLatestScanDateCsatSurvey } from "./surveys/latestScanDateCsatSurvey";
import { COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS } from "../../../hooks/useLocalDismissal";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { getPetitionBannerCsatSurvey } from "./surveys/petitionBannerCsatSurvey";

export type CsatSurveyProps = {
  activeTab: TabType;
  user: Session["user"];
  experimentData: ExperimentData;
  enabledFeatureFlags: FeatureFlagName[];
  hasAutoFixedDataBrokers: boolean;
  hasFirstMonitoringScan: boolean;
  elapsedTimeInDaysSinceInitialScan: number | null;
  lastScanDate: Date | null;
  signInCount: number | null;
};

export const CsatSurvey = (props: CsatSurveyProps) => {
  const surveyOptions = {
    activeTab: props.activeTab,
    experimentData: props.experimentData,
    user: props.user,
  };
  // The order of the surveys here matter: If there are multiple matching
  // surveys for the user we dismiss all surveys, but the last one in the list.
  const surveys = [
    props.elapsedTimeInDaysSinceInitialScan !== null &&
      getAutomaticRemovalCsatSurvey({
        ...surveyOptions,
        elapsedTimeInDaysSinceInitialScan:
          props.elapsedTimeInDaysSinceInitialScan,
        hasAutoFixedDataBrokers: props.hasAutoFixedDataBrokers,
      }),
    props.enabledFeatureFlags.includes("LatestScanDateCsatSurvey") &&
      props.lastScanDate !== null &&
      getLatestScanDateCsatSurvey({
        ...surveyOptions,
        signInCount: props.signInCount,
        hasFirstMonitoringScan: props.hasFirstMonitoringScan,
        lastScanDate: props.lastScanDate,
      }),
    props.enabledFeatureFlags.includes("PetitionBanner") &&
      getPetitionBannerCsatSurvey(surveyOptions),
  ];

  // Filters out previously dismissed surveys to make sure `currentSurvey` will
  // always be relevant to show for the user.
  const cookies = new Cookies(null, { path: "/" });
  const filteredSurveys = surveys.filter((survey) => {
    if (!survey) {
      return;
    }
    const cookieDismissalId = `${survey.id}_dismissed`;
    const surveyIsDismissed = cookies.get(cookieDismissalId);
    return !surveyIsDismissed;
  });
  const currentSurvey =
    filteredSurveys.length > 0 && filteredSurveys.slice(-1)[0];
  if (!currentSurvey) {
    return;
  }

  // Mark all surveys except the current one as automatically dismissed.
  filteredSurveys.forEach((survey) => {
    if (survey && survey?.id !== currentSurvey?.id) {
      const cookieDismissalId = `${survey.localDismissalId}_dismissed`;
      cookies.set(cookieDismissalId, Date.now().toString(), {
        maxAge: COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS,
      });
    }
  });

  // Only show if the petition CSAT banner if the “Data privacy petition banner” been dismissed previously.
  const isPetitionCsatBanner =
    currentSurvey.localDismissalId.includes("petition_banner");
  const hasDismissedDataPrivacyPetitionBanner =
    typeof Object.keys(cookies.getAll()).find((cookieName) =>
      cookieName.includes("data_privacy_petition_banner"),
    ) !== "undefined";
  if (isPetitionCsatBanner && !hasDismissedDataPrivacyPetitionBanner) {
    return;
  }

  return (
    <CsatSurveyBanner
      key={currentSurvey.id}
      survey={currentSurvey}
      localDismissalId={currentSurvey.localDismissalId}
      metricKeys={currentSurvey.metricKeys}
    />
  );
};
