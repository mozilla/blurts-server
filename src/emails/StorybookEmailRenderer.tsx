/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// We use mjml-browser for Storybook; for real emails, regular mjml should work:
import mjml2html from "mjml-browser";
import { ReactNode } from "react";
import { renderToString } from "react-dom/server";

export type Props = {
  children: ReactNode;
};

export const StorybookEmailRenderer = (props: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: mjml2html(renderToString(props.children)).html,
      }}
    />
  );
};
