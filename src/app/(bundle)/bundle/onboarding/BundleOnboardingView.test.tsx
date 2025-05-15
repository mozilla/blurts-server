/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { BundleOnboarding } from "./BundleOnboardingView.stories";
import { axe } from "jest-axe";
import { useTelemetry } from "../../../hooks/useTelemetry";
import userEvent from "@testing-library/user-event";

jest.mock("../../../hooks/useTelemetry");

it("passes the axe accessibility test suite", async () => {
  const ComposedBundlePage = composeStory(BundleOnboarding, Meta);
  const { container } = render(<ComposedBundlePage />);
  expect(await axe(container)).toHaveNoViolations();
});

it("tracks the click on the ctas", async () => {
  const mockedRecord = useTelemetry();
  const user = userEvent.setup();
  const ComposedBundlePage = composeStory(BundleOnboarding, Meta);
  render(<ComposedBundlePage />);

  // VPN CTA
  const vpnLink = screen.getByRole("link", { name: "Get ⁨VPN⁩" });
  await user.click(vpnLink);
  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "launch_vpn_download_page",
    }),
  );

  // Monitor Plus CTA
  const monitorLink = screen.getByRole("link", { name: "Go to ⁨Monitor⁩" });
  await user.click(monitorLink);
  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "launch_monitor",
    }),
  );

  // Relay Premium CTA
  const relayLink = screen.getByRole("link", { name: "Go to ⁨Relay⁩" });
  await user.click(relayLink);
  expect(mockedRecord).toHaveBeenCalledWith(
    "upgradeIntent",
    "click",
    expect.objectContaining({
      button_id: "launch_relay",
    }),
  );
});

it("opens a new tab when cta is selected", async () => {
  const user = userEvent.setup();
  const ComposedBundlePage = composeStory(BundleOnboarding, Meta);
  render(<ComposedBundlePage />);

  const monitorLink = screen.getByRole("link", { name: "Go to ⁨Monitor⁩" });
  await user.click(monitorLink);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const vpnLink = screen.getByRole("link", { name: "Get ⁨VPN⁩" });
  await user.click(vpnLink);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

  const relayLink = screen.getByRole("link", { name: "Go to ⁨Relay⁩" });
  await user.click(relayLink);

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
});
