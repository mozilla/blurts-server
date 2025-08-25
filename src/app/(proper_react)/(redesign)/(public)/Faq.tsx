/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useRef, useState } from "react";
import { useL10n } from "../../../hooks/l10n";
import styles from "./Faq.module.scss";
import { CloseBigIcon } from "../../../components/server/Icons";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { useButton, useFocusRing } from "react-aria";
import {
  CONST_URL_SUMO_MONITOR_FAQ,
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_URL_SUMO_MONITOR_PLUS,
} from "../../../../constants";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";

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
          <CloseBigIcon
            alt={l10n.getString("landing-all-close-faq-alt")}
            className={`${props.isExpanded && styles.expanded}`}
          />
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

export const FaqSection = ({
  isEligibleForPremium,
  enabledFeatureFlags,
}: {
  isEligibleForPremium: boolean;
  enabledFeatureFlags: FeatureFlagName[];
}) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

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
    <div id="faq" className={styles.faqWrapper}>
      <b className={styles.faqTitle}>
        {l10n.getString("landing-all-faq-title")}
      </b>
      <a
        className={styles.faqCta}
        href={CONST_URL_SUMO_MONITOR_FAQ}
        target="_blank"
        onClick={() => {
          recordTelemetry("link", "click", {
            link_id: "see_all_faqs",
          });
        }}
      >
        {l10n.getString("landing-all-faq-see-all")}
      </a>
      <dl>
        {isEligibleForPremium && (
          <FaqItem
            question={l10n.getString(
              "landing-premium-what-websites-sell-info-qn",
            )}
            answer={l10n.getString(
              "landing-premium-what-websites-sell-info-ans",
            )}
            isExpanded={expandedQuestion === "premium-what-websites-sell-info"}
            onExpandAnswer={() =>
              handleExpandAnswer("premium-what-websites-sell-info")
            }
            id="premium-what-websites-sell-info"
          />
        )}
        {isEligibleForPremium && (
          <FaqItem
            question={l10n.getString(
              "landing-premium-continuous-data-removal-qn",
            )}
            answer={
              /* c8 ignore start */
              enabledFeatureFlags.includes("MaskDataBrokerCount")
                ? l10n.getFragment(
                    "landing-premium-continuous-data-removal-ans-masked",
                    {
                      elems: {
                        learn_more_link: (
                          <a
                            href={CONST_URL_SUMO_MONITOR_PLUS}
                            target="_blank"
                          />
                        ),
                      },
                    },
                  )
                : /* c8 ignore stop */
                  l10n.getFragment(
                    "landing-premium-continuous-data-removal-ans",
                    {
                      vars: {
                        data_broker_sites_total_num:
                          CONST_ONEREP_DATA_BROKER_COUNT,
                      },
                      elems: {
                        learn_more_link: (
                          <a
                            href={CONST_URL_SUMO_MONITOR_PLUS}
                            target="_blank"
                          />
                        ),
                      },
                    },
                  )
            }
            isExpanded={expandedQuestion === "premium-continuous-data-removal"}
            onExpandAnswer={() =>
              handleExpandAnswer("premium-continuous-data-removal")
            }
            id="premium-continuous-data-removal"
          />
        )}
        {/* Ignore the remaining tests as testing the first two FAQ questions are sufficient */}
        {/* c8 ignore start */}
        <FaqItem
          question={l10n.getString("landing-all-data-breach-definition-qn")}
          answer={l10n.getString("landing-all-data-breach-definition-ans")}
          isExpanded={expandedQuestion === "data-breach-definition"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-definition")}
          id="data-breach-definition"
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-next-steps-qn")}
          answer={l10n.getString("landing-all-data-breach-next-steps-ans")}
          isExpanded={expandedQuestion === "data-breach-next-steps"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-next-steps")}
          id="data-breach-next-steps"
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-info-qn")}
          answer={l10n.getString("landing-all-data-breach-info-ans")}
          isExpanded={expandedQuestion === "data-breach-info"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-info")}
          id="data-breach-info"
        />
        {/* c8 ignore stop */}
      </dl>
    </div>
  );
};
