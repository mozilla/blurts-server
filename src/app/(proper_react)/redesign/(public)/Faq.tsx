/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useState } from "react";
import { useL10n } from "../../../hooks/l10n";
import styles from "./LandingView.module.scss";
import { CloseBigIcon } from "../../../components/server/Icons";
import Link from "next/link";

export type FaqItemProps = {
  question: string;
  answer: string | ReactNode;
  isExpanded: boolean;
  onExpandAnswer: () => void;
};

const FaqItem = (props: FaqItemProps) => {
  const { question, answer, isExpanded, onExpandAnswer } = props;

  return (
    <>
      <dt className={styles.faqQuestion} onClick={onExpandAnswer}>
        {question}
        <CloseBigIcon alt="" className={`${isExpanded && styles.expanded}`} />
      </dt>
      <dd className={`${styles.faqAnswer} ${isExpanded && styles.expanded}`}>
        {answer}
      </dd>
    </>
  );
};

export const FaqSection = ({
  isEligibleForPremium,
}: {
  isEligibleForPremium: boolean;
}) => {
  const l10n = useL10n();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const handleExpandAnswer = (question: string) => {
    setExpandedQuestion((prevQuestion) =>
      prevQuestion === question ? null : question,
    );
  };

  return (
    <div className={styles.faqWrapper}>
      <b className={styles.faqTitle}>
        {l10n.getString("landing-all-faq-title")}
      </b>
      <Link
        className={styles.faqCta}
        href={process.env.NEXT_PUBLIC_FAQ_MONITOR as string}
        target="_blank"
      >
        {l10n.getString("landing-all-faq-see-all")}
      </Link>
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
          />
        )}
        {isEligibleForPremium && (
          <FaqItem
            question={l10n.getString(
              "landing-premium-continuous-data-removal-qn",
            )}
            answer={l10n.getFragment(
              "landing-premium-continuous-data-removal-ans",
              {
                vars: {
                  data_broker_sites_total_num: parseInt(
                    process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                    10,
                  ),
                },
                elems: {
                  learn_more_link: (
                    <a
                      href={
                        process.env
                          .NEXT_PUBLIC_LEARN_MORE_ABOUT_MONITOR_PLUS_URL
                      }
                      target="_blank"
                    />
                  ),
                },
              },
            )}
            isExpanded={expandedQuestion === "premium-continuous-data-removal"}
            onExpandAnswer={() =>
              handleExpandAnswer("premium-continuous-data-removal")
            }
          />
        )}
        {/* Ignore the remaining tests as testing the first two FAQ questions are sufficient */}
        {/* c8 ignore start */}
        <FaqItem
          question={l10n.getString("landing-all-data-breach-definition-qn")}
          answer={l10n.getString("landing-all-data-breach-definition-ans")}
          isExpanded={expandedQuestion === "data-breach-definition"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-definition")}
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-next-steps-qn")}
          answer={l10n.getString("landing-all-data-breach-next-steps-ans")}
          isExpanded={expandedQuestion === "data-breach-next-steps"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-next-steps")}
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-info-qn")}
          answer={l10n.getString("landing-all-data-breach-info-ans")}
          isExpanded={expandedQuestion === "data-breach-info"}
          onExpandAnswer={() => handleExpandAnswer("data-breach-info")}
        />
        {/* c8 ignore stop */}
      </dl>
    </div>
  );
};
