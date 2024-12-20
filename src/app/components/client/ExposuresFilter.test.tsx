/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  ExposuresFilterDefault,
} from "./stories/ExposuresFilter.stories";
import { defaultExperimentData } from "../../../telemetry/generated/nimbus/experiments";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  const { container } = render(<ExposuresFilter enabledFeatureFlags={[]} />);
  expect(await axe(container)).toHaveNoViolations();
});

it("shows and hides the exposure type explainer", async () => {
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(<ExposuresFilter enabledFeatureFlags={[]} />);

  const exposureTypeHeader = screen.getByText("Exposure type");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "OK",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});

it("shows and hides the removal time explainer dialog by clicking the “Got it” button to Plus subscribers", async () => {
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(
    <ExposuresFilter
      isPlusSubscriber
      enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
      experimentData={{
        ...defaultExperimentData["Features"],
        "data-broker-removal-time-estimates": {
          enabled: true,
        },
      }}
    />,
  );

  const exposureTypeHeader = screen.getByText("Removal time");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "Got it",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});

it("shows and hides the removal time explainer dialog by clicking the close button to Plus subscribers", async () => {
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(
    <ExposuresFilter
      isPlusSubscriber
      enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
      experimentData={{
        ...defaultExperimentData["Features"],
        "data-broker-removal-time-estimates": {
          enabled: true,
        },
      }}
    />,
  );

  const exposureTypeHeader = screen.getByText("Removal time");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = screen.getByRole("button", {
    name: "Close modal",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});

it("shows and hides the status explainer", async () => {
  const user = userEvent.setup();
  const ExposuresFilter = composeStory(ExposuresFilterDefault, Meta);
  render(<ExposuresFilter enabledFeatureFlags={[]} />);

  const exposureTypeHeader = screen.getByText("Status");
  const explainerTrigger = within(exposureTypeHeader).getByRole("button", {
    name: "Open modal",
  });
  await user.click(explainerTrigger);

  const explainerDialog = screen.getByRole("dialog");
  expect(explainerDialog).toBeInTheDocument();
  const explainerCloseButton = within(explainerDialog).getByRole("button", {
    name: "Got it",
  });
  await user.click(explainerCloseButton);
  expect(explainerDialog).not.toBeInTheDocument();
});
