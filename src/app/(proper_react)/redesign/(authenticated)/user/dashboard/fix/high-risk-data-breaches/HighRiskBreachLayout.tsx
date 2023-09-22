/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import { HighRiskBreach } from "./highRiskBreachData";

export type HighRiskBreachLayoutProps = {
  locale: string;
  pageData: HighRiskBreach;
};

export function HighRiskBreachLayout({
  pageData,
  locale,
}: HighRiskBreachLayoutProps) {
  const l10n = useL10n();
  const { title, illustration, content, exposedData, type } = pageData;
  const hasBreaches = type !== "none";

  return (
    <ResolutionContainer
      type="securityRecommendations"
      title={title}
      illustration={illustration}
      cta={
        <>
          <Button
            variant="primary"
            small
            // TODO: Add test once MNTOR-1700 logic is added
            /* c8 ignore next 3 */
            onClick={() => {
              // TODO: MNTOR-1700 Add routing logic + fix event here
            }}
          >
            {hasBreaches
              ? l10n.getString("high-risk-breach-mark-as-fixed")
              : l10n.getString("high-risk-breach-none-continue")}
          </Button>
          {hasBreaches && (
            <Link
              // TODO: Add test once MNTOR-1700 logic is added
              href="/"
            >
              {l10n.getString("high-risk-breach-skip")}
            </Link>
          )}
        </>
      }
      estimatedTime={hasBreaches ? 15 : undefined}
    >
      <ResolutionContent
        content={content}
        exposedData={exposedData}
        locale={locale}
      />
    </ResolutionContainer>
  );
}
