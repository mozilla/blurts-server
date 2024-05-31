/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  CsatSurveyProps,
  RelevantSurvey,
  SurveyData,
  getRelevantSurveys,
} from "./csatSurvey";

const surveyData: SurveyData = {
  id: "csat_survey_latest_scan_date",
  requiredExperimentIds: ["last-scan-date", "last-scan-date-csat-survey"],
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
  props: CsatSurveyProps,
): RelevantSurvey | null => {
  const surveys = getRelevantSurveys({ ...surveyData, ...props });
  // In case there are multiple matching survey variations for the current user:
  // Return the first one.
  return surveys && surveys.length > 0 ? surveys[0] : null;
};

export { getLatestScanDateCsatSurvey };
