/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useState } from "react";
import { useL10n } from "../../hooks/l10n";
import {
  DismissOptions,
  useLocalDismissal,
} from "../../hooks/useLocalDismissal";
import styles from "./CsatSurvey.module.scss";
import { Button } from "./Button";
import { CloseBtn } from "../server/Icons";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";
import { TabType } from "../../(proper_react)/(redesign)/(authenticated)/user/(dashboard)/dashboard/View";
import { CONST_DAY_MILLISECONDS } from "../../../constants";

const SurveyResponses = {
  "very-dissatisfied": "Very Dissatisfied",
  dissatisfied: "Dissatisfied",
  neutral: "Neutral",
  satisfied: "Satisfied",
  "very-satisfied": "Very Satisfied",
} as const;

type SurveyLinks = Record<keyof typeof SurveyResponses, string>;

type SurveyTypes = "initial" | "3-months" | "6-months" | "12-months";

type Survey = {
  id: SurveyTypes;
  timeThreshold: number;
  options: SurveyLinks;
};

const surveys: Survey[] = [
  {
    id: "initial",
    timeThreshold: 0,
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
    timeThreshold: 90,
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
    timeThreshold: 180,
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
    timeThreshold: 351,
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
  elapsedTimeSinceInitialScan: number;
  hasAutoFixedDataBrokers: boolean;
  selectedTab: TabType;
};

const getRelevantSurvey = ({
  elapsedTimeSinceInitialScan,
  hasAutoFixedDataBrokers,
  selectedTab,
}: Props): Survey | undefined => {
  const relevantSurvey = surveys.findLast(
    (survey) =>
      elapsedTimeSinceInitialScan >=
      survey.timeThreshold * CONST_DAY_MILLISECONDS,
  );

  // Show the initial survey on the ”fixed” dashboard tab only to users
  // that have autmatically fixed data broker results.
  if (
    relevantSurvey?.id === "initial" &&
    (!hasAutoFixedDataBrokers || selectedTab !== "fixed")
  ) {
    return;
  }

  return relevantSurvey;
};

export const CsatSurvey = (props: Props) => {
  const l10n = useL10n();
  const [answer, setAnswer] = useState<keyof SurveyLinks>();

  const hasRenderedClientSide = useHasRenderedClientSide();
  const survey = getRelevantSurvey(props);
  const localDismissal = useLocalDismissal(`survey-csat_${survey?.id}`);

  if (
    !hasRenderedClientSide ||
    typeof survey === "undefined" ||
    (localDismissal.isDismissed && process.env.STORYBOOK !== "true")
  ) {
    return null;
  }

  const dismiss = (options?: DismissOptions) => {
    localDismissal.dismiss(options);
  };

  const submit = (satisfaction: keyof SurveyLinks) => {
    setAnswer(satisfaction);
    dismiss({ soft: true });
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
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("very-dissatisfied")}
              >
                {l10n.getString("survey-csat-answer-very-dissatisfied")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("dissatisfied")}
              >
                {l10n.getString("survey-csat-answer-dissatisfied")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("neutral")}
              >
                {l10n.getString("survey-csat-answer-neutral")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("satisfied")}
              >
                {l10n.getString("survey-csat-answer-satisfied")}
              </Button>
            </li>
            <li>
              <Button
                className={styles.answer}
                variant="primary"
                small
                onPress={() => submit("very-satisfied")}
              >
                {l10n.getString("survey-csat-answer-very-satisfied")}
              </Button>
            </li>
          </ol>
        </>
      )}
      <button
        className={styles.closeButton}
        onClick={() => dismiss()}
        title={l10n.getString("survey-csat-survey-dismiss")}
      >
        <CloseBtn
          alt={l10n.getString("survey-csat-survey-dismiss")}
          width="14"
          height="14"
        />
      </button>
    </aside>
  );
};
