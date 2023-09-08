/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import type { SecurityRecommendationContent } from "./security-recommendations/securityRecommendationsData";
import type { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../hooks/l10n";
import { getLocale } from "../../../../../../functions/server/l10n";
import styles from "./ResolutionContent.module.scss";

interface ResolutionContentProps {
  content: SecurityRecommendationContent;
  exposedData: SubscriberBreach[];
}

export const ResolutionContent = ({
  content,
  exposedData,
}: ResolutionContentProps) => {
  const l10n = useL10n();

  const { description, recommendations } = content;
  const dateFormatter = new Intl.DateTimeFormat(getLocale(), {
    dateStyle: "short",
  });

  const listOfBreaches =
    exposedData &&
    exposedData.map(({ id, title, breachDate }) => (
      <div key={id} className={styles.breachItem}>
        {l10n.getFragment("high-risk-breach-name-and-date", {
          elems: { breach_date: <span className={styles.date} /> },
          vars: {
            breach_name: title,
            breach_date: dateFormatter.format(new Date(breachDate)),
          },
        })}
      </div>
    ));

  return (
    <>
      {listOfBreaches && (
        <>
          <p>
            {l10n.getString("high-risk-breach-summary", {
              num_breaches: exposedData.length,
            })}
          </p>
          <div className={styles.breachItemsWrapper}>{listOfBreaches}</div>
        </>
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
