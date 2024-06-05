/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { TabType } from "../../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { hasPremium } from "../../../../functions/universal/user";
import { AutomaticRemovalVariation } from "./automaticRemovalCsatSurvey";
import { ExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";

const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

export type SurveyResponse = (typeof surveyResponses)[number];

export type SurveyType = "csat_survey" | "csat_survey_latest_scan_date";

export type UserType = "free-user" | "plus-user";

export type SurveyLinks = Record<SurveyResponse, string>;

export type SurveyData = {
  id: SurveyType;
  requiredExperimentIds: (keyof ExperimentData)[];
  variations: Survey[];
};

export type LatestScanDateVariation = {
  id: UserType;
  showForUser: UserType[];
  showOnTab: TabType[];
};

export type Survey = AutomaticRemovalVariation | LatestScanDateVariation;

export type CsatSurveyProps = {
  activeTab: TabType;
  experimentData: ExperimentData;
  user: Session["user"];
};

export type RelevantSurvey = {
  localDismissalId: string;
  survey: Survey;
};

export function getRelevantSurveys({
  id,
  requiredExperimentIds,
  variations,
  activeTab,
  experimentData,
  user,
}: SurveyData & CsatSurveyProps): RelevantSurvey[] | null {
  if (
    !requiredExperimentIds.every(
      (experimentId) => experimentData[experimentId].enabled,
    )
  ) {
    return null;
  }

  const filteredSurveys = variations.filter((surveyVariation) => {
    const isRelevantUser = surveyVariation.showForUser.includes(
      hasPremium(user) ? "plus-user" : "free-user",
    );
    const isRelevantTab = surveyVariation.showOnTab.includes(activeTab);
    return isRelevantUser && isRelevantTab;
  });

  return filteredSurveys.map((survey) => ({
    localDismissalId: `${id}_${survey.id}`,
    survey,
  }));
}
