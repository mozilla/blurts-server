/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  CsatSurveyProps,
  RelevantSurveyWithTelemetry,
  SurveyData,
  getRelevantSurveys,
} from "./csatSurvey";

const surveyData: SurveyData = {
  id: "csat_survey_latest_scan_date",
  requiredExperiments: [
    {
      id: "last-scan-date",
      statusAllowList: ["enabled", "disabled"],
    },
    {
      id: "last-scan-date-csat-survey",
      statusAllowList: ["enabled"],
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
    isSecondSignInAfterFreeScan: boolean;
    hasSecondMonthlyScan: boolean;
  },
): RelevantSurveyWithTelemetry | null => {
  const surveys = getRelevantSurveys({ ...surveyData, ...props });
  if (!surveys || surveys?.length === 0) {
    return null;
  }
  // In case there are multiple matching survey variations for the current user:
  // Return the first one.
  const relevantSurvey = surveys[0];

  // Distinguish between users who are and are not enrolled in the experiment.
  const experimentBranchId = props.experimentData["last-scan-date"].enabled
    ? "treatment"
    : "control";
  return {
    ...relevantSurvey,
    telemetryId: `${relevantSurvey.id}_${experimentBranchId}`,
  };
};

export { getLatestScanDateCsatSurvey };
