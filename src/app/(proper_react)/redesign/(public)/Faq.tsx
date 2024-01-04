/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useL10n } from "../../../hooks/l10n";
import styles from "./LandingView.module.scss";
import { CloseBigIcon } from "../../../components/server/Icons";

export type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = (props: FaqItemProps) => {
  const [expandedAnswer, setExpandedAnswer] = useState(false);

  const handleExpandAnswer = () => {
    setExpandedAnswer(!expandedAnswer);
  };
  return (
    <>
      <dt className={styles.faqQuestion}>
        {props.question}
        <button onClick={handleExpandAnswer}>
          <CloseBigIcon
            alt=""
            className={`${expandedAnswer && styles.expanded}`}
          />
        </button>
      </dt>
      <dd
        className={`${styles.faqAnswer} ${expandedAnswer && styles.expanded}`}
      >
        {props.answer}
      </dd>
    </>
  );
};

export const FaqSection = () => {
  const l10n = useL10n();
  return (
    <div className={styles.faqWrapper}>
      <dl>
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
