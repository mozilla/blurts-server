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

jest.mock("../../../../../../../../../hooks/useTelemetry");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

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
