/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, { ProgressCardItemNonUs } from "./stories/ProgressCard.stories";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

const mockedRecordTelemetry = jest.fn();

jest.mock("../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

it("passes the axe accessibility test suite", async () => {
  const ComposedProgressCard = composeStory(ProgressCardItemNonUs, Meta);
  const { container } = render(<ComposedProgressCard />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);
