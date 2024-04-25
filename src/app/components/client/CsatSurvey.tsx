/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { Button } from "./Button";
import { CloseBtn } from "../server/Icons";
import { useL10n } from "../../hooks/l10n";
import { useLocalDismissal } from "../../hooks/useLocalDismissal";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";
import { useTelemetry } from "../../hooks/useTelemetry";
import styles from "./CsatSurvey.module.scss";

const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

type SurveyResponse = (typeof surveyResponses)[number];

type SurveyLinks = Record<SurveyResponse, string>;

type SurveyTypes = "initial" | "3-months" | "6-months" | "12-months";

type Survey = {
  id: SurveyTypes;
  daysThreshold: number;
  options: SurveyLinks;
};

const surveys: Survey[] = [
  {
    id: "initial",
    daysThreshold: 0,
    options: {
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
    daysThreshold: 90,
    options: {
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
    daysThreshold: 180,
    options: {
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
    daysThreshold: 351,
    options: {
      "very-dissatisfied":
        "https://survey.alchemer.com/s3/7718562/c254fe9e3c33",
      dissatisfied: "https://survey.alchemer.com/s3/7718562/8d2a7f93852f",
      neutral: "https://survey.alchemer.com/s3/7718562/76e17004efd6",
      satisfied: "https://survey.alchemer.com/s3/7718562/92b30b6aa491",
      "very-satisfied": "https://survey.alchemer.com/s3/7718562/002e20b6b82f",
    },
  },
] as const;

type Props = {
  elapsedTimeInDaysSinceInitialScan: number;
  hasAutoFixedDataBrokers: boolean;
};

const getRelevantSurvey = ({
  elapsedTimeInDaysSinceInitialScan,
  hasAutoFixedDataBrokers,
}: Props): Survey | undefined => {
  const relevantSurvey = surveys.findLast(
    (survey) => elapsedTimeInDaysSinceInitialScan >= survey.daysThreshold,
  );

  // Show the initial survey only to users who have automatically fixed
  // data broker results.
  if (relevantSurvey?.id === "initial" && !hasAutoFixedDataBrokers) {
    return;
  }

  return relevantSurvey;
};

export const CsatSurvey = (props: Props) => {
  const l10n = useL10n();
  const [answer, setAnswer] = useState<keyof SurveyLinks>();

  const recordTelemetry = useTelemetry();
  const hasRenderedClientSide = useHasRenderedClientSide();
  const survey = getRelevantSurvey(props);
  const localDismissal = useLocalDismissal(`survey-csat_${survey?.id}`);

  if (
    !hasRenderedClientSide ||
    typeof survey === "undefined" ||
    localDismissal.isDismissed
  ) {
    return null;
  }

  const { dismiss } = localDismissal;

  const submit = (satisfaction: SurveyResponse) => {
    setAnswer(satisfaction);
    dismiss({ soft: true });
    recordTelemetry("button", "click", {
      button_id: `csat_survey_${survey.id}_${satisfaction}`,
    });
  };

  return (
    <aside className={styles.wrapper}>
      {typeof answer !== "undefined" ? (
        <div className={styles.prompt}>
          <a
            href={survey.options[answer]}
            onClick={() => dismiss()}
            target="_blank"
            rel="noopen noreferrer"
          >
            {l10n.getString("survey-csat-follow-up-link-label")}
          </a>
        </div>
      ) : (
        <>
          <div className={styles.prompt}>
            {l10n.getString("survey-csat-question")}
          </div>
          <ol className={`${styles.answers} noList`}>
            {surveyResponses.map((response) => (
              <li key={response}>
                <Button
                  className={styles.answer}
                  variant="primary"
                  small
                  onPress={() => submit(response)}
                >
                  {l10n.getString(`survey-csat-answer-${response}`)}
                </Button>
              </li>
            ))}
          </ol>
        </>
      )}
      <button className={styles.closeButton} onClick={() => dismiss()}>
        <CloseBtn
          alt={l10n.getString("survey-csat-survey-dismiss-label")}
          width="14"
          height="14"
        />
      </button>
    </aside>
  );
};
