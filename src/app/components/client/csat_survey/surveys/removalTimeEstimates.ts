/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  CsatSurveyProps,
  RelevantSurveyWithMetric,
  SurveyData,
  getRelevantSurveys,
} from "./csatSurvey";

const surveyData: SurveyData = {
  id: "removal_time_estimates_banner",
  requiredExperiments: [
    {
      id: "data-broker-removal-time-estimates",
      statusAllowList: ["enabled", "disabled"],
    },
  ],
  variations: [
    {
      id: "plus-user",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
    },
  ],
};

const getRemovalTimeEstimatesCsatSurvey = (
  props: CsatSurveyProps,
): RelevantSurveyWithMetric | null => {
  const surveys = getRelevantSurveys({ ...surveyData, ...props });

  if (!surveys || surveys.length === 0) {
    return null;
  }

  // In case there would be multiple matching survey variations for the current user:
  // Return the first one.
  const relevantSurvey = surveys[0];

  // Distinguish between users who are and are not enrolled in the experiment.
  const experimentBranchId = props.experimentData[
    "data-broker-removal-time-estimates"
  ].enabled
    ? "treatment"
    : "control";
  return {
    ...relevantSurvey,
    localDismissalId: `${surveyData.id}_${relevantSurvey.id}`,
    metricKeys: {
      survey_id: surveyData.id,
      experiment_branch: experimentBranchId,
    },
  };
};

export { getRemovalTimeEstimatesCsatSurvey };
