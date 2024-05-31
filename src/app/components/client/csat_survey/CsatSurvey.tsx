/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { Cookies } from "react-cookie";
import { CsatSurveyBanner } from "./CsatSurveyBanner";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { TabType } from "../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { getAutomaticRemovalCsatSurvey } from "./surveys/automaticRemovalCsatSurvey";
import { getLatestScanDateCsatSurvey } from "./surveys/latestScanDateCsatSurvey";
import { COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS } from "../../../hooks/useLocalDismissal";

export type CsatSurveyProps = {
  activeTab: TabType;
  user: Session["user"];
  enabledFeatureFlags: FeatureFlagName[];
  hasAutoFixedDataBrokers: boolean;
  elapsedTimeInDaysSinceInitialScan?: number;
};

export const CsatSurvey = (props: CsatSurveyProps) => {
  const surveyOptions = {
    activeTab: props.activeTab,
    enabledFeatureFlags: props.enabledFeatureFlags,
    user: props.user,
  };
  // The order of the surveys here matter: If there are multiple matching
  // surveys for the user we dismiss all surveys, but the last one in the list.
  const surveys = [
    getAutomaticRemovalCsatSurvey({
      ...surveyOptions,
      elapsedTimeInDaysSinceInitialScan:
        props.elapsedTimeInDaysSinceInitialScan,
      hasAutoFixedDataBrokers: props.hasAutoFixedDataBrokers,
    }),
    getLatestScanDateCsatSurvey(surveyOptions),
  ];

  // Filters out previously dismissed surveys so we don’t show them again.
  const cookies = new Cookies(null, { path: "/" });
  const filteredSurveys = surveys.filter((survey) => {
    if (!survey) {
      return;
    }
    const cookieDismissalId = `${survey.localDismissalId}_dismissed`;
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
    if (
      survey &&
      survey?.localDismissalId !== currentSurvey?.localDismissalId
    ) {
      const cookieDismissalId = `${survey.localDismissalId}_dismissed`;
      cookies.set(cookieDismissalId, Date.now().toString(), {
        maxAge: COOKIE_DISMISSAL_MAX_AGE_IN_SECONDS,
      });
    }
  });

  return (
    currentSurvey && (
      <CsatSurveyBanner
        key={currentSurvey.localDismissalId}
        localDismissalId={currentSurvey.localDismissalId}
        survey={currentSurvey.survey}
      />
    )
  );
};
