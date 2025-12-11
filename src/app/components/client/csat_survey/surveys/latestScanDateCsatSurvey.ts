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
  id: "last_scan_date",
  requiredExperiments: [
    {
      id: "last-scan-date",
      statusAllowList: ["enabled", "disabled"],
    },
  ],
  variations: [
    {
      id: "free-user",
      showForUser: ["free-user"],
      showOnTab: ["action-needed"],
    },
    {
      id: "plus-user",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
    },
  ],
};

const getLatestScanDateCsatSurvey = (
  props: CsatSurveyProps & {
    lastScanDate: Date;
    hasFirstMonitoringScan: boolean;
    signInCount: number | null;
  },
): RelevantSurveyWithMetric | null => {
  const isAtLeastSecondLogin =
    props.signInCount !== null && props.signInCount >= 2;
  const filteredSurveyData = {
    ...surveyData,
    variations: surveyData.variations.filter((surveyVariation) => {
      return (
        (surveyVariation.id === "free-user" && isAtLeastSecondLogin) ||
        (surveyVariation.id === "plus-user" && props.hasFirstMonitoringScan)
      );
    }),
  };
  const surveys = getRelevantSurveys({ ...filteredSurveyData, ...props });

  if (!surveys || surveys.length === 0) {
    return null;
  }

  // In case there would be multiple matching survey variations for the current user:
  // Return the first one.
  const relevantSurvey = surveys[0];

  // Distinguish between users who are and are not enrolled in the experiment.
  const experimentBranchId = props.experimentData["last-scan-date"].enabled
    ? "treatment"
    : "control";
  return {
    ...relevantSurvey,
    localDismissalId: `${surveyData.id}_${relevantSurvey.id}`,
    metricKeys: {
      survey_id: surveyData.id,
      experiment_branch: experimentBranchId,
      last_scan_date: props.lastScanDate
        .toISOString()
        .slice(0, 10)
        .replaceAll("-", ""),
    },
  };
};

export { getLatestScanDateCsatSurvey };
