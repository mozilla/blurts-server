/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useState } from "react";
import { Session } from "next-auth";
import { useL10n } from "../../hooks/l10n";
import {
  DismissOptions,
  useLocalDismissal,
} from "../../hooks/useLocalDismissal";
import styles from "./CsatSurvey.module.scss";
import { Button } from "./Button";
import { CloseBtn } from "../server/Icons";

const SurveyResponses = {
  "very-dissatisfied": "Very Dissatisfied",
  dissatisfied: "Dissatisfied",
  neutral: "Neutral",
  satisfied: "Satisfied",
  "very-satisfied": "Very Satisfied",
} as const;

type SurveyLinks = Record<keyof typeof SurveyResponses, string>;

type SurveyTypes = "initial" | "3-months" | "6-months" | "12-months";

type SurveyAnswer = {
  id: SurveyTypes;
  displayThreshold: number;
  options: SurveyLinks;
};

const dayInMilliseconds = 24 * 60 * 60 * 1000;

const surveyAnswers: SurveyAnswer[] = [
  {
    id: "initial",
    displayThreshold: 0,
    options: {
      "very-dissatisfied": "https://survey.alchemer.com/s3/",
      dissatisfied: "https://survey.alchemer.com/s3/",
      neutral: "https://survey.alchemer.com/s3/",
      satisfied: "https://survey.alchemer.com/s3/",
      "very-satisfied": "https://survey.alchemer.com/s3/",
    },
  },
  {
    id: "3-months",
    displayThreshold: 90,
    options: {
      "very-dissatisfied": "https://survey.alchemer.com/s3/",
      dissatisfied: "https://survey.alchemer.com/s3/",
      neutral: "https://survey.alchemer.com/s3/",
      satisfied: "https://survey.alchemer.com/s3/",
      "very-satisfied": "https://survey.alchemer.com/s3/",
    },
  },
  {
    id: "6-months",
    displayThreshold: 180,
    options: {
      "very-dissatisfied": "https://survey.alchemer.com/s3/",
      dissatisfied: "https://survey.alchemer.com/s3/",
      neutral: "https://survey.alchemer.com/s3/",
      satisfied: "https://survey.alchemer.com/s3/",
      "very-satisfied": "https://survey.alchemer.com/s3/",
    },
  },
  {
    id: "12-months",
    displayThreshold: 351,
    options: {
      "very-dissatisfied": "https://survey.alchemer.com/s3/",
      dissatisfied: "https://survey.alchemer.com/s3/",
      neutral: "https://survey.alchemer.com/s3/",
      satisfied: "https://survey.alchemer.com/s3/",
      "very-satisfied": "https://survey.alchemer.com/s3/",
    },
  },
] as const;

type Props = {
  user: Session["user"];
};

const getSurveyAnswer = (
  subscriptionDate: number,
): SurveyAnswer | undefined => {
  return surveyAnswers.findLast(
    (answer) =>
      subscriptionDate <=
      Date.now() - answer.displayThreshold * dayInMilliseconds,
  );
};

export const CsatSurvey = (_props: Props) => {
  const l10n = useL10n();
  const [answer, setAnswer] = useState<keyof SurveyLinks>();

  const subscriptionDate = Date.now() - dayInMilliseconds;
  const surveyAnswer = getSurveyAnswer(subscriptionDate);

  const localDismissal = useLocalDismissal(
    "survey-csat-subscriber_test",
    // After the third month, show every three months:
    { duration: dayInMilliseconds * 60 },
  );

  const dismiss = (options?: DismissOptions) => {
    localDismissal.dismiss(options);
  };

  const submit = (satisfaction: keyof SurveyLinks) => {
    setAnswer(satisfaction);
    dismiss({ soft: true });
  };

  return (
    <aside className={styles.wrapper}>
      ({surveyAnswer && surveyAnswer.id})
      {typeof answer !== "undefined" ? (
        <div className={styles.prompt}>
          <a
            href=""
            onClick={() => dismiss()}
            target="_blank"
            rel="noopen noreferrer"
          >
            {l10n.getString("survey-csat-subscriber-follow-up-link-label")}
          </a>
        </div>
      ) : (
        <>
          <div className={styles.prompt}>
            {l10n.getString("survey-csat-subscriber-question")}
          </div>
          <ol className={`${styles.answers} noList`}>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("very-dissatisfied")}
              >
                {l10n.getString(
                  "survey-csat-subscriber-answer-very-dissatisfied",
                )}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("dissatisfied")}
              >
                {l10n.getString("survey-csat-subscriber-answer-dissatisfied")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("neutral")}
              >
                {l10n.getString("survey-csat-subscriber-answer-neutral")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("satisfied")}
              >
                {l10n.getString("survey-csat-subscriber-answer-satisfied")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("very-satisfied")}
              >
                {l10n.getString("survey-csat-subscriber-answer-very-satisfied")}
              </Button>
            </li>
          </ol>
        </>
      )}
      <button
        className={styles.closeButton}
        onClick={() => dismiss()}
        title={l10n.getString("survey-option-dismiss")}
      >
        <CloseBtn
          alt={l10n.getString("survey-option-dismiss")}
          width="14"
          height="14"
        />
      </button>
    </aside>
  );
};
