/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useRef, useState } from "react";
import { useL10n } from "../../../../../hooks/l10n";
import { useButton, useFocusRing } from "react-aria";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { Button } from "../../../../../components/client/Button";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import {
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_URL_SUMO_MONITOR_FAQ,
  CONST_URL_SUMO_MONITOR_PLUS,
} from "../../../../../../constants";
import {
  ChevronDown,
  CloseBigIcon,
} from "../../../../../components/server/Icons";
import styles from "./Faq.module.scss";

export type FaqItemProps = {
  question: string;
  answer: string | ReactNode;
  isExpanded: boolean;
  id: string;
  onExpandAnswer: () => void;
};

const FaqItem = (props: FaqItemProps) => {
  const l10n = useL10n();
  const buttonRef = useRef(null);

  const { buttonProps } = useButton(
    {
      onPress: props.onExpandAnswer,
    },
    buttonRef,
  );
  const { focusProps } = useFocusRing();

  return (
    <>
      <dt>
        <button
          {...buttonProps}
          {...focusProps}
          aria-expanded={props.isExpanded}
          aria-controls={`faq-${props.id}`}
          className={styles.faqQuestion}
        >
          {props.question}
          {props.isExpanded ? (
            <CloseBigIcon
              alt={l10n.getString("landing-redesign-faq-close-button-alt")}
            />
          ) : (
            <ChevronDown
              alt={l10n.getString("landing-redesign-faq-expand-button-alt")}
            />
          )}
        </button>
      </dt>
      <dd
        aria-hidden={!props.isExpanded}
        className={`${styles.faqAnswer} ${props.isExpanded && styles.expanded}`}
      >
        {props.answer}
      </dd>
    </>
  );
};

export const Faq = () => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqItems: FaqItemProps[] = [
    {
      id: "premium-what-websites-sell-info",
      question: l10n.getString("landing-premium-what-websites-sell-info-qn"),
      answer: l10n.getString("landing-premium-what-websites-sell-info-ans"),
      isExpanded: expandedQuestion === "premium-what-websites-sell-info",
      onExpandAnswer: () => {
        handleExpandAnswer("premium-what-websites-sell-info");
      },
    },
    {
      id: "premium-continuous-data-removal",
      question: l10n.getString("landing-premium-continuous-data-removal-qn"),
      answer: l10n.getFragment("landing-premium-continuous-data-removal-ans", {
        vars: {
          data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
        },
        elems: {
          learn_more_link: (
            <Button
              variant="link"
              href={CONST_URL_SUMO_MONITOR_PLUS}
              target="_blank"
            />
          ),
        },
      }),
      isExpanded: expandedQuestion === "premium-continuous-data-removal",
      onExpandAnswer: () => {
        handleExpandAnswer("premium-continuous-data-removal");
      },
    },
    {
      id: "data-breach-definition",
      question: l10n.getString("landing-all-data-breach-definition-qn"),
      answer: l10n.getString("landing-all-data-breach-definition-ans"),
      isExpanded: expandedQuestion === "data-breach-definition",
      onExpandAnswer: () => handleExpandAnswer("data-breach-definition"),
    },
    {
      id: "data-breach-next-steps",
      question: l10n.getString("landing-all-data-breach-next-steps-qn"),
      answer: l10n.getString("landing-all-data-breach-next-steps-ans"),
      isExpanded: expandedQuestion === "data-breach-next-steps",
      onExpandAnswer: () => handleExpandAnswer("data-breach-next-steps"),
    },
    {
      id: "data-breach-info",
      question: l10n.getString("landing-all-data-breach-info-qn"),
      answer: l10n.getString("landing-all-data-breach-info-ans"),
      isExpanded: expandedQuestion === "data-breach-info",
      onExpandAnswer: () => handleExpandAnswer("data-breach-info"),
    },
  ];

  const handleExpandAnswer = (question: string) => {
    setExpandedQuestion((prevQuestion) => {
      if (prevQuestion === question) {
        return null;
      }
      recordTelemetry("expand", "click", {
        button_id: `expand_faq_${question}`,
      });
      return question;
    });
  };

  return (
    <div id="faq" className={styles.content}>
      <h3>
        <b>{l10n.getString("landing-redesign-faq-section-title")}</b>
      </h3>
      <dl className={styles.faqList}>
        {faqItems.map(
          ({ question, answer, isExpanded, id, onExpandAnswer }) => (
            <FaqItem
              key={id}
              id={id}
              question={question}
              answer={answer}
              isExpanded={isExpanded}
              onExpandAnswer={onExpandAnswer}
            />
          ),
        )}
      </dl>
      <TelemetryButton
        variant="primary"
        href={CONST_URL_SUMO_MONITOR_FAQ}
        target="_blank"
        event={{
          module: "link",
          name: "click",
          data: {
            link_id: "see_all_faqs",
          },
        }}
      >
        {l10n.getString("landing-redesign-faq-sumo-link-label")}
      </TelemetryButton>
    </div>
  );
};
