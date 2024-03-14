/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DataBreachActionNeeded,
  DataBreachFixed,
  DataBrokerActionNeeded,
  DataBrokerInProgress,
  DataBrokerManualRemoved,
  DataBrokerRemoved,
} from "./ExposureCard.stories";

jest.mock("../../../hooks/useTelemetry");

jest.mock("./DataBrokerImage", () => {
  return {
    // Mock this with an empty React component. Otherwise, tests will complain:
    // > Warning: A suspended resource finished loading inside a test, but the
    // > event was not wrapped in act(...).
    // > When testing, code that resolves suspended data should be wrapped into
    // > act(...)
    DataBrokerImage: () => null,
  };
});

it("passes the axe accessibility test suite", async () => {
  const ComposedProgressCard = composeStory(DataBrokerActionNeeded, Meta);
  const { container } = render(<ComposedProgressCard />);
  expect(await axe(container)).toHaveNoViolations();
});

describe("ScanResultCard", () => {
  // Data broker action needed
  it("shows the right description for a scan result card where there is action needed", () => {
    const ComposedProgressCard = composeStory(DataBrokerActionNeeded, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "This site is publicly publishing and selling",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker removed
  it("shows the right description for a scan result card where a profile has been automatically removed", () => {
    const ComposedProgressCard = composeStory(DataBrokerRemoved, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "will continually monitor to make sure they don’t add you back",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker manually removed
  it("shows the right description for a scan result card where a profile has been manually removed", () => {
    const ComposedProgressCard = composeStory(DataBrokerManualRemoved, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "You marked this profile as fixed.",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker removal in progress
  it("shows the right description for a scan result card where removal is in progress", () => {
    const ComposedProgressCard = composeStory(DataBrokerInProgress, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "We’ve started our auto-removal process",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });
});

describe("DataBreachCard", () => {
  // Data breach fixed
  it("shows the right description for a fixed data breach card", () => {
    const ComposedProgressCard = composeStory(DataBreachFixed, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "You’ve taken the steps needed to fix",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data breach action needed
  it("shows the right description for an unresolved data breach card", () => {
    const ComposedProgressCard = composeStory(DataBreachActionNeeded, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "Your information was exposed in the",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });
});
