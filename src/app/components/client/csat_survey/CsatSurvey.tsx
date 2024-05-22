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
  const surveys = [
    getAutomaticRemovalCsatSurvey({
      ...surveyOptions,
      elapsedTimeInDaysSinceInitialScan:
        props.elapsedTimeInDaysSinceInitialScan,
      hasAutoFixedDataBrokers: props.hasAutoFixedDataBrokers,
    }),
    getLatestScanDateCsatSurvey(surveyOptions),
  ];

  const cookies = new Cookies(null, { path: "/" });
  const filteredSurveys = surveys.filter((survey) => {
    if (!survey) {
      return;
    }

    const cookieId = `${survey.localDismissalId}_dismissed`;
    const surveyIsDismissed = cookies.get(cookieId);

    return !surveyIsDismissed;
  });

  const currentSurvey =
    filteredSurveys && filteredSurveys.length > 0
      ? filteredSurveys.slice(-1)[0]
      : null;

  return (
    <>
      <pre>{JSON.stringify(filteredSurveys, null, 2)}</pre>
      <pre>{JSON.stringify(surveys, null, 2)}</pre>
      {currentSurvey && (
        <CsatSurveyBanner
          key={currentSurvey.localDismissalId}
          localDismissalId={currentSurvey.localDismissalId}
          survey={currentSurvey.survey}
        />
      )}
    </>
  );
};
