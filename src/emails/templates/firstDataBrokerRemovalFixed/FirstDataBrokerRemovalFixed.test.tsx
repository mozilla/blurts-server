/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  FirstDataBrokerRemovalFixedStory,
} from "./FirstDataBrokerRemovalFixed.stories";

it("shows the correct data broker name and removal date in the content", () => {
  const ComposedEmail = composeStory(FirstDataBrokerRemovalFixedStory, Meta);
  render(<ComposedEmail />);

  const contentParagraph = screen.getByText(
    `We’re excited to share that we successfully removed your info from ⁨Data broker name⁩ on ⁨5/31/2024⁩.`,
  );
  expect(contentParagraph).toBeInTheDocument();
});

it("has a link that sends user to the dashboard with the correct href attribute", () => {
  const ComposedEmail = composeStory(FirstDataBrokerRemovalFixedStory, Meta);
  render(<ComposedEmail />);

  const dashboardLink = screen.getByRole("link", { name: "View dashboard" });
  expect(dashboardLink).toHaveAttribute(
    "href",
    `${process.env.SERVER_URL}/user/dashboard/fixed?utm_source=monitor-product&utm_medium=email&utm_campaign=first-removal&utm_content=view-dashboard`,
  );
});
