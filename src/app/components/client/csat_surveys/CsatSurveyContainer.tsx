/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Session } from "next-auth";
import { CsatSurvey } from "./CsatSurvey";
import { hasPremium } from "../../../functions/universal/user";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { TabType } from "../../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";

type Props = {
  activeTab: TabType;
  hasAutoFixedDataBrokers: boolean;
  user: Session["user"];
  enabledFeatureFlags: FeatureFlagName[];
  elapsedTimeInDaysSinceInitialScan?: number;
};

const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

type SurveyResponse = (typeof surveyResponses)[number];

type SurveyLinks = Record<SurveyResponse, string>;

type SurveyType = "survey-csat" | "survey-csat-latest-scan-date";

export type AutomaticRemovalVariation = {
  id: "initial" | "3-months" | "6-months" | "12-months";
  showForUser: UserType[];
  showOnTab: TabType[];
  daysThreshold: number;
  followUpSurveyOptions?: SurveyLinks;
};

type UserType = "free-user" | "plus-user";

export type LastestScanDateVariation = {
  id: UserType;
  showForUser: UserType[];
  showOnTab: TabType[];
};

type CustomFilter = (
  surveyVariations: AutomaticRemovalVariation[] | LatestScanDateVariation[],
) => AutomaticRemovalVariation | LatestScanDateVariation | undefined;

type CsatSurveyClassOptions = {
  id: SurveyType;
  experimentId: FeatureFlagName;
  surveyVariations: LastestScanDateVariation[];
  customFilter: CustomFilter;
};

class CsatSurveyClass {
  id: string;
  experimentId: FeatureFlagName;
  surveyVariations: AutomaticRemovalVariation[] | LastestScanDateVariation[];
  customFilter: CustomFilter;

  constructor({
    id,
    experimentId,
    surveyVariations,
    customFilter,
  }: CsatSurveyClassOptions) {
    this.id = id;
    this.experimentId = experimentId;
    this.surveyVariations = surveyVariations;
    this.customFilter = customFilter;
  }

  getRelevantSurvey({
    activeTab,
    enabledFeatureFlags,
    user,
  }: {
    activeTab: TabType;
    enabledFeatureFlags: FeatureFlagName[];
    user: Session["user"];
  }): {
    localDismissalId: string;
    survey: AutomaticRemovalVariation | LatestScanDateVariation;
  } | null {
    if (!enabledFeatureFlags.includes(this.experimentId)) {
      return null;
    }

    const filteredSurveyVariations = this.surveyVariations.filter(
      (surveyVariation) => {
        const isRelevantUser = surveyVariation.showForUser.includes(
          hasPremium(user) ? "plus-user" : "free-user",
        );
        const isRelevantTab = surveyVariation.showOnTab.includes(activeTab);
        return isRelevantUser && isRelevantTab;
      },
    );

    if (typeof filteredSurveyVariations === "undefined") {
      return null;
    }

    const relevantSurvey = this.customFilter(filteredSurveyVariations);

    if (!relevantSurvey) {
      return null;
    }

    return {
      localDismissalId: `${this.id}_${relevantSurvey.id}`,
      survey: relevantSurvey,
    };
  }
}

export type LatestScanDateVariation = {
  id: UserType;
};

export const CsatSurveyContainer = (props: Props) => {
  const automaticRemovalCsatSurvey = new CsatSurveyClass({
    id: "survey-csat",
    experimentId: "CsatSurvey",
    surveyVariations: [
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
          "very-satisfied":
            "https://survey.alchemer.com/s3/7714663/668f6cb4d250",
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
          "very-satisfied":
            "https://survey.alchemer.com/s3/7718223/8f7abc102a9a",
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
          "very-satisfied":
            "https://survey.alchemer.com/s3/7718561/a443cc84b78a",
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
          "very-satisfied":
            "https://survey.alchemer.com/s3/7718562/002e20b6b82f",
        },
      },
    ],
    customFilter: (surveyVariations) => {
      return surveyVariations.findLast(
        (surveyVariation) =>
          typeof props.elapsedTimeInDaysSinceInitialScan !== "undefined" &&
          props.elapsedTimeInDaysSinceInitialScan >=
            surveyVariation.daysThreshold &&
          // Show the initial survey only to users who have automatically fixed
          // data broker results.
          surveyVariation.id === "initial" &&
          props.hasAutoFixedDataBrokers,
      );
    },
  });

  const latestScanDateCsatSurvey = new CsatSurveyClass({
    id: "survey-csat-latest-scan-date",
    experimentId: "CsatSurvey",
    surveyVariations: [
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
    customFilter: (surveyVariations) => {
      return surveyVariations[0];
    },
  });

  const csatSurveys = [automaticRemovalCsatSurvey, latestScanDateCsatSurvey];

  const surveys = csatSurveys
    .map((csatSurvey) => {
      const survey = csatSurvey.getRelevantSurvey({
        activeTab: props.activeTab,
        enabledFeatureFlags: props.enabledFeatureFlags,
        user: props.user,
      });

      return (
        survey && (
          <CsatSurvey
            key={csatSurvey.id}
            localDismissalId={survey.localDismissalId}
            survey={survey.survey}
          />
        )
      );
    })
    .filter((survey) => survey);

  return surveys;
};
