/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  MonthlyActivityEmailFreeStory,
  MonthlyActivityEmailPlusWithManualStory,
  MonthlyActivityEmailPlusWithoutManualStory,
} from "./MonthlyActivityEmail.stories";

it("has an upgrade banner for free users", () => {
  const ComposedEmail = composeStory(MonthlyActivityEmailFreeStory, Meta);
  render(<ComposedEmail />);

  const banner = screen.getByText("Upgrade for extra protection");
  expect(banner).toBeInTheDocument();
});

it("does not imply we did everything when a user has fixed exposures/breaches themselves", () => {
  const ComposedEmail = composeStory(
    MonthlyActivityEmailPlusWithManualStory,
    Meta,
  );
  render(<ComposedEmail />);

  const whatWeFixedInHeroText = screen.queryByText(
    "Here’s how we’ve protected you.",
  );
  const whatWeFixedInLeadText = screen.queryByText("Here’s what we fixed:");
  expect(whatWeFixedInHeroText).not.toBeInTheDocument();
  expect(whatWeFixedInLeadText).not.toBeInTheDocument();
});

it("emphasises that things have happened while someone was subscribed to Plus and didn't do anything themselves", () => {
  const ComposedEmail = composeStory(
    MonthlyActivityEmailPlusWithoutManualStory,
    Meta,
  );
  render(<ComposedEmail />);

  const dashboardLink = screen.getByRole("link", { name: "View all activity" });
  expect(dashboardLink).toBeInTheDocument();
});
