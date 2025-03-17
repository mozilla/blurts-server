/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { TabType } from "../../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { hasPremium } from "../../../../functions/universal/user";
import { AutomaticRemovalVariation } from "./automaticRemovalCsatSurvey";
import { ExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";
import { GleanMetricMap } from "../../../../../telemetry/generated/_map";

// The variable `surveyResponses` is used as a type reference.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

export type SurveyResponse = (typeof surveyResponses)[number];

export type UserType = "free-user" | "plus-user";

export type SurveyLinks = Record<SurveyResponse, string>;

type RequiredExperimentStatus = "enabled" | "disabled";

type RequiredExperiment = {
  id: keyof ExperimentData["Features"];
  statusAllowList: RequiredExperimentStatus[];
};

export type SurveyData = {
  id:
    | "csat_survey"
    | "last_scan_date"
    | "petition_banner"
    | "removal_time_estimates_banner";
  requiredExperiments: RequiredExperiment[];
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
  experimentData: ExperimentData["Features"];
  user: Session["user"];
};

export type RelevantSurveyWithMetric = Survey & {
  localDismissalId: string;
  metricKeys: GleanMetricMap["csatSurvey"]["click" | "view"];
};

export function getRelevantSurveys({
  requiredExperiments,
  variations,
  activeTab,
  experimentData,
  user,
}: SurveyData & CsatSurveyProps): Survey[] | null {
  // There is currently no CSAT survey that is only shown for enabled
  // experiments and would trigger the early return.
  /* c8 ignore start */
  if (
    !requiredExperiments.every((experiment) => {
      return experiment.statusAllowList.includes(
        experimentData[experiment.id].enabled ? "enabled" : "disabled",
      );
    })
  ) {
    return null;
  }
  /* c8 ignore stop */

  const filteredSurveys = variations.filter((surveyVariation) => {
    const isRelevantUser = surveyVariation.showForUser.includes(
      hasPremium(user) ? "plus-user" : "free-user",
    );
    const isRelevantTab = surveyVariation.showOnTab.includes(activeTab);
    return isRelevantUser && isRelevantTab;
  });

  return filteredSurveys;
}
