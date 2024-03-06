/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import type { SecurityRecommendationContent } from "./security-recommendations/securityRecommendationsData";
import type { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../../hooks/l10n";
import styles from "./ResolutionContent.module.scss";

interface ResolutionContentProps {
  content: SecurityRecommendationContent;
  exposedData?: SubscriberBreach[];
  locale: string;
}

export const ResolutionContent = ({
  content,
  exposedData,
  locale,
}: ResolutionContentProps) => {
  const l10n = useL10n();

  const { summary, description, recommendations } = content;
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
  });

  const listOfBreaches =
    /* c8 ignore next 4 */
    // Since the Node 20.10 upgrade, it's been intermittently marking this (and
    // this comment) as uncovered, even though I think it's covered by tests.
    exposedData &&
    exposedData.map(({ id, title, breachDate }) => (
      <div key={id} className={styles.breachItem}>
        {l10n.getFragment("high-risk-breach-name-and-date", {
          elems: { breach_date: <span className={styles.date} /> },
          vars: {
            breach_name: title,
            breach_date: dateFormatter.format(breachDate),
          },
        })}
      </div>
    ));

  return (
    <>
      <p>{summary}</p>
      {exposedData && (
        <div className={styles.breachItemsWrapper}>{listOfBreaches}</div>
      )}
      {description}
      {recommendations && (
        <div className={styles.recommendations}>
          <h4>{recommendations.title}</h4>
          {recommendations.subtitle && <p>{recommendations.subtitle}</p>}
          {recommendations.steps}
        </div>
      )}
    </>
  );
};
