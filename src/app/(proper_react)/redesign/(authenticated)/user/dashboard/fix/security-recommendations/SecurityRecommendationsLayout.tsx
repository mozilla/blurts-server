/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import type { SecurityRecommendation } from "./securityRecommendationsData";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { useL10n } from "../../../../../../../hooks/l10n";

export interface SecurityRecommendationsLayoutProps {
  label: string;
  pageData: SecurityRecommendation;
  exposedData: SubscriberBreach[];
}

export function SecurityRecommendationsLayout({
  label,
  pageData,
  exposedData,
}: SecurityRecommendationsLayoutProps) {
  const l10n = useL10n();
  const { title, illustration, content } = pageData;

  return (
    <ResolutionContainer
      label={label}
      type="securityRecommendations"
      title={title}
      illustration={illustration}
      cta={
        <Button
          variant="primary"
          small
          // TODO: Add test once MNTOR-1700 logic is added
          /* c8 ignore next 3 */
          onClick={() => {
            // TODO: MNTOR-1700 Add routing logic
          }}
          autoFocus={true}
        >
          {l10n.getString("security-recommendation-steps-cta-label")}
        </Button>
      }
    >
      <ResolutionContent content={content} exposedData={exposedData} />
    </ResolutionContainer>
  );
}
