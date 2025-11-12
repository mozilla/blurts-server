/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import Meta, { FreeRunup as Story } from "./stories/PlusShutdownBanner.stories";

beforeEach(() => {
  if (document.cookie.length > 0) {
    // If a previous test dismisses the banner,
    // that shouldn't prevent it from showing up in the next one:
    document.cookie = document.cookie + "; expires=1 Jan 1970 00:00:00 GMT;";
  }
});

it("does not render for users outside the US (because they haven't run a scan and do not have Plus)", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      countryCode="nl"
      shutdownState={{
        currentMoment: "runup",
        hasPremium: false,
        ranScan: false,
      }}
    />,
  );

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
});

it("does not render before the countdown has begun", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "ye-olden-days",
        hasPremium: true,
        ranScan: true,
      }}
    />,
  );

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
});

it("does not render if the user has no data that would be deleted", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "runup",
        hasPremium: false,
        ranScan: false,
      }}
    />,
  );

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
});

it("does render for Plus users who will lose the option for auto-removals, even if they haven't used it yet because they haven't run a scan", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "runup",
        hasPremium: true,
        ranScan: false,
      }}
    />,
  );

  expect(screen.queryByRole("complementary")).toBeInTheDocument();
});

it("hides the banner after clicking 'Close', and does not show it again", async () => {
  const user = userEvent.setup();
  const Banner = composeStory(Story, Meta);
  render(<Banner />);

  expect(screen.getByRole("complementary")).toBeInTheDocument();

  // There are multiple buttons with the label "Close":
  // the "X" in the corner, and the button with the actual text.
  const closeButton = screen.getAllByRole("button", { name: "Close" })[0];
  await user.click(closeButton);

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();

  render(<Banner />);

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
});

it("hides the banner after clicking 'X', and does not show it again", async () => {
  const user = userEvent.setup();
  const Banner = composeStory(Story, Meta);
  render(<Banner />);

  expect(screen.getByRole("complementary")).toBeInTheDocument();

  // There are multiple buttons with the label "Close":
  // the "X" in the corner, and the button with the actual text.
  const closeButton = screen.getAllByRole("button", { name: "Close" })[1];
  await user.click(closeButton);

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();

  render(<Banner />);

  expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
});

it("mentions deletion of scan data to free users before launch", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "runup",
        hasPremium: false,
        ranScan: true,
      }}
    />,
  );

  expect(screen.getByRole("complementary")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Update: ⁨Monitor⁩ data broker scan results will be deleted in 30 days",
  );
});

it("mentions deletion of scan and removal data to Plus users before launch", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "runup",
        hasPremium: true,
        ranScan: true,
      }}
    />,
  );

  expect(screen.getByRole("complementary")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Data broker scan results and in-progress removals will be deleted",
  );
});

it("mentions scan results having been deleted to free users", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "shutdown",
        hasPremium: false,
        ranScan: true,
      }}
    />,
  );

  expect(screen.getByRole("complementary")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Data broker scan results have been deleted, but ⁨Monitor⁩ lives on",
  );
});

it("mentions scan results and removal output having been deleted to Plus users", () => {
  const Banner = composeStory(Story, Meta);
  render(
    <Banner
      shutdownState={{
        currentMoment: "shutdown",
        hasPremium: true,
        ranScan: true,
      }}
    />,
  );

  expect(screen.getByRole("complementary")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Data broker scan results have been deleted, but ⁨Monitor⁩ lives on",
  );
});
