/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  SignupReportEmailNoBreachesStory,
  SignupReportEmailSomeBreachesStory,
} from "./SignupReportEmail.stories";

it("lets you know when no breaches were found so far", () => {
  const ComposedEmail = composeStory(SignupReportEmailNoBreachesStory, Meta);
  render(<ComposedEmail />);

  const introduction = screen.getByText(
    "So far, no breaches were found. We\u2019ll send you an alert if your email address appears in a new breach.",
    { exact: false },
  );
  expect(introduction).toBeInTheDocument();
});

it("lets you know when your email was found in known breaches", () => {
  const ComposedEmail = composeStory(SignupReportEmailSomeBreachesStory, Meta);
  render(<ComposedEmail />);

  const introduction = screen.getByText(
    "Search results for your ⁨example@example.com⁩ account have detected that your email may have been exposed. We recommend you act now to resolve this breach.",
  );
  expect(introduction).toBeInTheDocument();
});
