/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";

jest.mock("../../../../../../../../../hooks/useTelemetry");

import Meta, {
  WelcomeToPlusViewNoResultsStory,
  WelcomeToPlusViewInProgressStory,
} from "./WelcomeToPlus.stories";

it("passes the axe accessibility test suite", async () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  const { container } = render(<ComposedWelcomeToPlusView />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows the progress indicator on the “Welcome to Plus” view", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  render(<ComposedWelcomeToPlusView />);

  const guidedStepsNavigation = screen.getByRole("navigation", {
    name: "Guided steps",
  });
  expect(guidedStepsNavigation).toBeInTheDocument();
});

it("shows the correct number of broker profiles with no broker scan results", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewNoResultsStory,
    Meta,
  );
  render(<ComposedWelcomeToPlusView />);

  const paragraphElement = screen.getByText(
    "Great news! We scanned ⁨190⁩ data broker sites and didn’t find any sites selling your personal information. We’ll run a scan every month to make sure it stays that way.",
  );

  expect(paragraphElement).toBeInTheDocument();
});

it("shows the correct number of broker profiles with one broker scan results", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  const brokerScanCount = 1;
  render(<ComposedWelcomeToPlusView brokerScanCount={brokerScanCount} />);

  const paragraphElement = screen.getByText(
    `We’ve already started our auto-removal process of ${brokerScanCount}`,
    { exact: false },
  );

  expect(paragraphElement).toBeInTheDocument();
});

it("shows the correct number of broker profiles with multiple broker scan results", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  const brokerScanCount = 5;
  render(<ComposedWelcomeToPlusView brokerScanCount={brokerScanCount} />);

  const paragraphElement = screen.getByText(
    `We’ve already started our auto-removal process of ⁨${brokerScanCount}⁩ profiles`,
    { exact: false },
  );

  expect(paragraphElement).toBeInTheDocument();
});

it("checks the CTA button link to the next step in the guided resolution flow", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  render(<ComposedWelcomeToPlusView />);

  const ctaButtonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });

  expect(ctaButtonLink).toHaveAttribute("href", "/user/dashboard");
});

it("checks the arrow button link to the next step in the guided resolution flow", () => {
  const ComposedWelcomeToPlusView = composeStory(
    WelcomeToPlusViewInProgressStory,
    Meta,
  );
  render(<ComposedWelcomeToPlusView />);

  const arrowButtonLink = screen.getByLabelText("Go to next step");

  expect(arrowButtonLink).toHaveAttribute("href", "/user/dashboard");
});
