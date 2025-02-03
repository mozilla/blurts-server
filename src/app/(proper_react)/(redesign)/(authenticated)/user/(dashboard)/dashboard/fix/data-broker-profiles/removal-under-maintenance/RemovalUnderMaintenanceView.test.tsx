/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  RemovalUnderMaintenanceViewStory,
} from "./RemovalUnderMaintenanceView.stories";
const mockedRouterPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
  }),
  usePathname: jest.fn(),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));
const mockedRecordTelemetry = jest.fn();

jest.mock("../../../../../../../../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

describe("Removal under  maintenance", () => {
  it("passes the axe accessibility test suite", async () => {
    const RemovalUnderMaintenanceView = composeStory(
      RemovalUnderMaintenanceViewStory,
      Meta,
    );
    const { container } = render(<RemovalUnderMaintenanceView />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows removal instructions", async () => {
    const user = userEvent.setup();
    const RemovalUnderMaintenanceView = composeStory(
      RemovalUnderMaintenanceViewStory,
      Meta,
    );
    render(<RemovalUnderMaintenanceView />);
    const viewRemovalInstructionsButton = screen.getByRole("button", {
      name: "View removal instructions",
    });
    await user.click(viewRemovalInstructionsButton);

    const headerRemovalGuide = screen.getByText(
      "Removal guide for data broker websites",
    );
    expect(headerRemovalGuide).toBeInTheDocument();
  });

  it("closes removal instructions using the “back arrow”", async () => {
    const user = userEvent.setup();
    const RemovalUnderMaintenanceView = composeStory(
      RemovalUnderMaintenanceViewStory,
      Meta,
    );
    render(<RemovalUnderMaintenanceView />);
    const viewRemovalInstructionsButton = screen.getByRole("button", {
      name: "View removal instructions",
    });
    await user.click(viewRemovalInstructionsButton);

    const headerRemovalGuideOne = screen.getByText(
      "Removal guide for data broker websites",
    );
    expect(headerRemovalGuideOne).toBeInTheDocument();
    const arrowBackButton = screen.getAllByRole("button", {
      name: "Back to exposures",
    })[0];
    await user.click(arrowBackButton);
    const headerRemovalGuideTwo = screen.queryByText(
      "Removal guide for data broker websites",
    );
    expect(headerRemovalGuideTwo).not.toBeInTheDocument();
  });

  it("closes removal instructions using the “Back to exposures” button", async () => {
    const user = userEvent.setup();
    const RemovalUnderMaintenanceView = composeStory(
      RemovalUnderMaintenanceViewStory,
      Meta,
    );
    render(<RemovalUnderMaintenanceView />);
    const viewRemovalInstructionsButton = screen.getByRole("button", {
      name: "View removal instructions",
    });
    await user.click(viewRemovalInstructionsButton);

    const headerRemovalGuideOne = screen.getByText(
      "Removal guide for data broker websites",
    );
    expect(headerRemovalGuideOne).toBeInTheDocument();
    const closeButton = screen.getAllByRole("button", {
      name: "Back to exposures",
    })[1];
    await user.click(closeButton);
    const headerRemovalGuideTwo = screen.queryByText(
      "Removal guide for data broker websites",
    );
    expect(headerRemovalGuideTwo).not.toBeInTheDocument();
  });

  it("clicks the “Marks exposure resolved” button and shows a loader while resolving the exposure", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(),
    });
    const user = userEvent.setup();
    const RemovalUnderMaintenanceView = composeStory(
      RemovalUnderMaintenanceViewStory,
      Meta,
    );
    render(<RemovalUnderMaintenanceView />);
    const resolveButton = screen.getByRole("button", {
      name: "Mark exposure resolved",
    });
    await user.click(resolveButton);
    expect(resolveButton).toHaveTextContent("Loading");
  });
});

it("clicks the right arrow button to show the next step", async () => {
  const user = userEvent.setup();
  const RemovalUnderMaintenanceView = composeStory(
    RemovalUnderMaintenanceViewStory,
    Meta,
  );
  render(<RemovalUnderMaintenanceView />);
  const rightArrowBtn = screen.getByRole("button", {
    name: "Go to next result",
  });
  await user.click(rightArrowBtn);
  expect(mockedRecordTelemetry).toHaveBeenCalledWith(
    "button",
    "click",
    expect.objectContaining({
      button_id: "go_to_next_result",
    }),
  );
});
