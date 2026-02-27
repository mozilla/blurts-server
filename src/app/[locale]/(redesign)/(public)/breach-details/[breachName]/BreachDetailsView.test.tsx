/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi } from "vitest";
import { composeStory } from "@storybook/react";
import { type ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import Meta, { BreachDetailViewStory } from "./BreachDetailView.stories";
import { createRandomHibpListing } from "../../../../../../apiMocks/mockData";
import { type TelemetryLink } from "../../../../../components/client/TelemetryLink";

vi.mock("../../../../../components/client/SignInButton", () => {
  return {
    SignInButton: () => <span>Sign In</span>,
  };
});
vi.mock("../../../../../components/client/TelemetryLink", () => {
  return {
    TelemetryLink: ({
      eventData: _eventData,
      ...otherProps
    }: ComponentProps<typeof TelemetryLink>) => <a {...otherProps} />,
  };
});

it("details the breach", () => {
  const ComposedBreachDetailView = composeStory(BreachDetailViewStory, Meta);
  render(<ComposedBreachDetailView />);

  const overviewSection = screen.getByText(
    "was breached. Once the breach was discovered and verified, it was added to our database on",
    { exact: false },
  );
  expect(overviewSection).toBeInTheDocument();
});

it("tells search engines that we do not endorse breached websites, even if we link to them", () => {
  const ComposedBreachDetailView = composeStory(BreachDetailViewStory, Meta);
  const breachedDomain = "example.com";
  render(
    <ComposedBreachDetailView
      breach={createRandomHibpListing({ Domain: breachedDomain })}
    />,
  );

  const linksToBreachedDomain = screen
    .getAllByRole("link")
    .filter(
      (link) => link.getAttribute("href") === `https://${breachedDomain}`,
    );
  expect(linksToBreachedDomain).not.toHaveLength(0);
  linksToBreachedDomain.forEach((link) => {
    expect(link.getAttribute("rel")).toMatch("nofollow");
  });
});

it("special-cases the description for BVD, as per their request", () => {
  const ComposedBreachDetailView = composeStory(BreachDetailViewStory, Meta);
  render(
    <ComposedBreachDetailView
      breach={createRandomHibpListing({
        Name: "BVD",
        Title: "Public Business Data",
      })}
    />,
  );

  const regularOverviewSection = screen.queryByText(
    "was breached. Once the breach was discovered and verified, it was added to our database on",
    { exact: false },
  );
  expect(regularOverviewSection).not.toBeInTheDocument();
  const sourceMention = screen.getByText(
    'Sourced from a customer of Bureau van Dijk\'s (BvD) "Orbis" product',
    { exact: false },
  );
  const accessLimitsMention = screen.getByText(
    "There was no unauthorised access to BvD's systems, nor did the incident expose any of their or parent company's Moody's clients.",
    { exact: false },
  );
  expect(sourceMention).toBeInTheDocument();
  expect(accessLimitsMention).toBeInTheDocument();
});
