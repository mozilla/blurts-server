/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { redirect } from "next/navigation";
import { ResolutionContainer } from "../../ResolutionContainer";
import { ResolutionContent } from "../../ResolutionContent";
import { Button } from "../../../../../../../../components/server/Button";

import securityRecommendations from "../securityRecommendationsContent";

export default function SecurityRecommendationsEmail({ params }: any) {
  const label = "Security recommendations";

  const exposedData = [
    {
      id: "id123",
      title: "test",
      breachDate: "123",
    },
  ];

  const { type } = params;
  const pageData = securityRecommendations.find(
    (content) => content.type === type
  );
  if (!pageData) {
    redirect("/redesign/user/dashboard");
  }

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
