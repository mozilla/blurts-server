/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { RefObject, useState } from "react";
import { Button } from "../Button";
import { CloseBtn, OpenInNew } from "../../server/Icons";
import { useL10n } from "../../../hooks/l10n";
import { useLocalDismissal } from "../../../hooks/useLocalDismissal";
import { useHasRenderedClientSide } from "../../../hooks/useHasRenderedClientSide";
import { useTelemetry } from "../../../hooks/useTelemetry";
import styles from "./CsatSurveyBanner.module.scss";
import { Survey } from "./surveys/csatSurvey";
import { GleanMetricMap } from "../../../../telemetry/generated/_map";
import { useViewTelemetry } from "../../../hooks/useViewTelemetry";

const surveyResponses = [
  "very-dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very-satisfied",
] as const;

type SurveyResponse = (typeof surveyResponses)[number];

type SurveyLinks = Record<SurveyResponse, string>;

type Props = {
  localDismissalId: string;
  metricKeys: GleanMetricMap["csatSurvey"]["click"];
  survey: Survey;
};

export const CsatSurveyBanner = ({
  localDismissalId,
  metricKeys,
  survey,
}: Props) => {
  const l10n = useL10n();
  const [answer, setAnswer] = useState<keyof SurveyLinks>();

  const recordTelemetry = useTelemetry();
  const hasRenderedClientSide = useHasRenderedClientSide();
  const localDismissal = useLocalDismissal(localDismissalId);
  const refViewTelemetry = useViewTelemetry("csatSurvey", metricKeys);

  if (
    !hasRenderedClientSide ||
    typeof survey === "undefined" ||
    localDismissal.isDismissed
  ) {
    return null;
  }

  const { dismiss } = localDismissal;
  const hasFollowUpSurveyOptions =
    "followUpSurveyOptions" in survey &&
    typeof survey.followUpSurveyOptions !== "undefined";

  const submit = (response: SurveyResponse) => {
    setAnswer(response);
    dismiss({ soft: hasFollowUpSurveyOptions });
    recordTelemetry("csatSurvey", "click", {
      ...metricKeys,
      response_id: response,
    });
  };

  return (
    <aside
      ref={refViewTelemetry as RefObject<HTMLElement | null>}
      className={styles.wrapper}
    >
      {typeof answer !== "undefined" && hasFollowUpSurveyOptions ? (
        <div className={styles.prompt}>
          <a
            href={(survey.followUpSurveyOptions as SurveyLinks)[answer]}
            onClick={() => dismiss()}
            target="_blank"
            rel="noopen noreferrer"
          >
            {l10n.getString("survey-csat-follow-up-link-label")}
            <OpenInNew
              alt={l10n.getString("open-in-new-tab-alt")}
              width="13"
              height="13"
            />
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
                  onPress={() => submit(response)}
                >
                  {l10n.getString(`survey-csat-answer-${response}`)}
                </Button>
              </li>
            ))}
          </ol>
        </>
      )}
      <button
        className={styles.closeButton}
        onClick={() => {
          dismiss();
          recordTelemetry("csatSurvey", "dismiss", metricKeys);
        }}
      >
        <CloseBtn
          alt={l10n.getString("survey-csat-survey-dismiss-label")}
          width="14"
          height="14"
        />
      </button>
    </aside>
  );
};
