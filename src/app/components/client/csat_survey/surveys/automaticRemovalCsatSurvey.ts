/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { TabType } from "../../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import {
  CsatSurveyProps,
  RelevantSurveyWithMetric,
  Survey,
  SurveyData,
  SurveyLinks,
  UserType,
  getRelevantSurveys,
} from "./csatSurvey";

export type AutomaticRemovalVariation = {
  id: "initial" | "3-months" | "6-months" | "12-months" | "24-months";
  showForUser: UserType[];
  showOnTab: TabType[];
  daysThreshold: number;
  followUpSurveyOptions: SurveyLinks;
};

function isAutomaticRemovalSurvey(
  survey: Survey,
): survey is AutomaticRemovalVariation {
  return "daysThreshold" in survey;
}

const surveyData: SurveyData = {
  id: "csat_survey",
  requiredExperiments: [],
  variations: [
    {
      id: "initial",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
      daysThreshold: 0,
      followUpSurveyOptions: {
        "very-dissatisfied":
          "https://survey.alchemer.com/s3/7714663/69d629a9e8e6",
        dissatisfied: "https://survey.alchemer.com/s3/7714663/481c08f43d81",
        neutral: "https://survey.alchemer.com/s3/7714663/6a94888b165c",
        satisfied: "https://survey.alchemer.com/s3/7714663/996da64e2fbb",
        "very-satisfied": "https://survey.alchemer.com/s3/7714663/668f6cb4d250",
      },
    },
    {
      id: "3-months",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
      daysThreshold: 90,
      followUpSurveyOptions: {
        "very-dissatisfied":
          "https://survey.alchemer.com/s3/7718223/9bf87045f7fb",
        dissatisfied: "https://survey.alchemer.com/s3/7718223/4ebd39f49be3",
        neutral: "https://survey.alchemer.com/s3/7718223/fe77a597f97a",
        satisfied: "https://survey.alchemer.com/s3/7718223/fbbb597a762a",
        "very-satisfied": "https://survey.alchemer.com/s3/7718223/8f7abc102a9a",
      },
    },
    {
      id: "6-months",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
      daysThreshold: 180,
      followUpSurveyOptions: {
        "very-dissatisfied":
          "https://survey.alchemer.com/s3/7718561/1354e1186d33",
        dissatisfied: "https://survey.alchemer.com/s3/7718561/6dfb2e8b6d68",
        neutral: "https://survey.alchemer.com/s3/7718561/2ff6ff90e603",
        satisfied: "https://survey.alchemer.com/s3/7718561/9393c233103e",
        "very-satisfied": "https://survey.alchemer.com/s3/7718561/a443cc84b78a",
      },
    },
    {
      id: "12-months",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
      daysThreshold: 351,
      followUpSurveyOptions: {
        "very-dissatisfied":
          "https://survey.alchemer.com/s3/7718562/c254fe9e3c33",
        dissatisfied: "https://survey.alchemer.com/s3/7718562/8d2a7f93852f",
        neutral: "https://survey.alchemer.com/s3/7718562/76e17004efd6",
        satisfied: "https://survey.alchemer.com/s3/7718562/92b30b6aa491",
        "very-satisfied": "https://survey.alchemer.com/s3/7718562/002e20b6b82f",
      },
    },
    {
      id: "24-months",
      showForUser: ["plus-user"],
      showOnTab: ["fixed"],
      daysThreshold: 716,
      followUpSurveyOptions: {
        "very-dissatisfied":
          "https://survey.alchemer.com/s3/8176616/edb0c3f18778",
        dissatisfied: "https://survey.alchemer.com/s3/8176616/9b6ca1d007a5",
        neutral: "https://survey.alchemer.com/s3/8176616/37955cef0c5e",
        satisfied: "https://survey.alchemer.com/s3/8176616/091e554aa6ab",
        "very-satisfied": "https://survey.alchemer.com/s3/8176616/7ac85d1249cd",
      },
    },
  ],
};

const getAutomaticRemovalCsatSurvey = (
  props: CsatSurveyProps & {
    elapsedTimeInDaysSinceInitialScan: number;
    hasAutoFixedDataBrokers: boolean;
  },
): RelevantSurveyWithMetric | null => {
  const surveys = getRelevantSurveys({ ...surveyData, ...props });
  // Find the last survey variation that matches the time since the users
  // automatic removal.
  const relevantSurvey =
    surveys &&
    surveys.filter(isAutomaticRemovalSurvey).findLast((survey) => {
      // Show the initial survey only to users who have automatically fixed
      // data broker results.
      if (survey.id === "initial" && !props.hasAutoFixedDataBrokers) {
        return;
      }

      return props.elapsedTimeInDaysSinceInitialScan >= survey.daysThreshold;
    });

  if (!relevantSurvey) {
    return null;
  }

  return {
    ...relevantSurvey,
    localDismissalId: `${surveyData.id}_${relevantSurvey.id}`,
    metricKeys: {
      survey_id: surveyData.id,
      // We only show the survey to users who are part of the experiment.
      experiment_branch: "treatment",
      automated_removal_period: relevantSurvey.id,
    },
  };
};

export { getAutomaticRemovalCsatSurvey };
