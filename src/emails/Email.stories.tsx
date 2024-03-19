/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { ExtendedReactLocalization } from "../app/hooks/l10n";
import mjml2html from "mjml-browser";
import { getOneL10nSync } from "../app/functions/server/mockL10n";
import { render } from "ejs";

export type Props = {
  template: string;
  l10n: ExtendedReactLocalization;
  data: object;
};

const Email = (props: Props) => {
  const emailStr = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>
          <h1 data-l10n-id="data-breach-header-1">You've been in a new data breach</h1>
          <span data-l10n-id="data-breach-header-2">We'll guide you through the steps you need to take to fix it</span>
        </mj-text>
      </mj-column>
      <mj-column>
        <mj-image src="http://localhost:6060/images/email/background.png"/>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text align="center">
          <p data-l10n-id="data-breach-body-1">On <%= breachDate %>, we detected a new data breach on <%= breachCompany %>. Your <%= breachClasses %> were included in this breach.</p>
          <p data-l10n-id="data-breach-body-2">Fixing this breach requires action, since you may need to access your accounts.</p>
          <p data-l10n-id="data-breach-body-3">We'll guide you step by step on what you need to do.</p>
        </mj-text>
        <mj-button>
          <span data-l10n-id="lets-fix-it-cta-btn">Let's Fix it</span>
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

  const result = mjml2html(emailStr);
  const renderedHtml = render(result.html, props.data);

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

const data = {
  breachCompany: "Example.com",
  breachDate: "March 19, 2024",
  breachClasses: "email and social security number",
};

const meta: Meta<typeof Email> = {
  title: "Email",
  component: () => (
    <Email l10n={getOneL10nSync("en")} template="breach-alert" data={data} />
  ),
  args: {
    l10n: getOneL10nSync(),
  },
};

export default meta;
type Story = StoryObj<typeof Email>;

export const BreachAlert: Story = {
  args: {
    template: "breach-alert",
    data,
  },
};
