/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import type { SecurityRecommendation } from "./securityRecommendationsContent";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";

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
          onClick={() => {
            // TODO: Go to next security recommendation or close “fix flow”
            alert("Got it!");
          }}
          autoFocus={true}
        >
          Got it!
        </Button>
      }
    >
      <ResolutionContent content={content} exposedData={exposedData} />
    </ResolutionContainer>
  );
}
