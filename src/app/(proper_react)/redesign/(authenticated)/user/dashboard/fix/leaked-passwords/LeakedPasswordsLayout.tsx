/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ResolutionContainer } from "../ResolutionContainer";
import { ResolutionContent } from "../ResolutionContent";
import { Button } from "../../../../../../../components/server/Button";
import { useL10n } from "../../../../../../../hooks/l10n";
import { LeakedPassword } from "./leakedPasswordsData";
import Link from "next/link";

export interface LeakedPasswordsLayoutProps {
  label: string;
  pageData: LeakedPassword;
  locale: string;
}

export function LeakedPasswordsLayout({
  pageData,
  locale,
}: LeakedPasswordsLayoutProps) {
  const l10n = useL10n();
  const { title, illustration, content } = pageData;

  return (
    <ResolutionContainer
      type="leakedPasswords"
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
              // TODO: MNTOR-1700 Add routing logic
            }}
            autoFocus={true}
          >
            {l10n.getString("leaked-passwords-mark-as-fixed")}
          </Button>
          <Link
            // TODO: Add test once MNTOR-1700 logic is added
            /* c8 ignore next */
            href="/"
          >
            {l10n.getString("leaked-passwords-skip")}
          </Link>
        </>
      }
      estimatedTime={4}
    >
      <ResolutionContent content={content} locale={locale} />
    </ResolutionContainer>
  );
}
