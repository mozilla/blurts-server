/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { TabType } from "../../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { FeatureFlagName } from "../../../../../db/tables/featureFlags";
import { hasPremium } from "../../../../functions/universal/user";
import { AutomaticRemovalVariation } from "./automaticRemovalCsatSurvey";

const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

export type SurveyResponse = (typeof surveyResponses)[number];

export type SurveyType = "survey-csat" | "survey-csat-latest-scan-date";

export type UserType = "free-user" | "plus-user";

export type SurveyLinks = Record<SurveyResponse, string>;

export type SurveyData = {
  id: SurveyType;
  experimentId: FeatureFlagName;
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
  enabledFeatureFlags: FeatureFlagName[];
  user: Session["user"];
};

export type RelevantSurvey = {
  localDismissalId: string;
  survey: Survey;
};

export function getRelevantSurveys({
  id,
  experimentId,
  variations,
  activeTab,
  enabledFeatureFlags,
  user,
}: SurveyData & CsatSurveyProps): RelevantSurvey[] | null {
  if (!enabledFeatureFlags.includes(experimentId)) {
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
