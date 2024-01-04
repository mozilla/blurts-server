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
};

const FaqItem = (props: FaqItemProps) => {
  const [expandedAnswer, setExpandedAnswer] = useState(false);
  const handleExpandAnswer = () => {
    setExpandedAnswer(!expandedAnswer);
  };
  return (
    <>
      <dt className={styles.faqQuestion} onClick={handleExpandAnswer}>
        {props.question}
        <CloseBigIcon
          alt=""
          className={`${expandedAnswer && styles.expanded}`}
        />
      </dt>
      <dd
        className={`${styles.faqAnswer} ${expandedAnswer && styles.expanded}`}
      >
        {props.answer}
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
          />
        )}
        <FaqItem
          question={l10n.getString("landing-all-data-breach-definition-qn")}
          answer={l10n.getString("landing-all-data-breach-definition-ans")}
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-next-steps-qn")}
          answer={l10n.getString("landing-all-data-breach-next-steps-ans")}
        />
        <FaqItem
          question={l10n.getString("landing-all-data-breach-info-qn")}
          answer={l10n.getString("landing-all-data-breach-info-ans")}
        />
      </dl>
    </div>
  );
};
