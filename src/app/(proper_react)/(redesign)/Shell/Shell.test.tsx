/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  ShellAuthenticated,
  ShellAuthenticatedRedesign,
} from "./Shell.stories";

describe("ShellAuthenticated", () => {
  it("passes the axe accessibility test suite", async () => {
    const ShellComponent = composeStory(ShellAuthenticated, Meta);
    const { container } = render(<ShellComponent />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ShellAuthenticatedRedesign", () => {
  it("passes the axe accessibility test suite", async () => {
    const ShellComponent = composeStory(ShellAuthenticatedRedesign, Meta);
    const { container } = render(<ShellComponent />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows the “Update scan info” navbar item when the flag `EditScanProfileDetails` is enabled", async () => {
    const ShellComponent = composeStory(ShellAuthenticatedRedesign, Meta);
    render(
      <ShellComponent
        enabledFeatureFlags={[
          "SidebarNavigationRedesign",
          "EditScanProfileDetails",
        ]}
      />,
    );

    // Note: there are two user menus, for both small and wide screens:
    const updateScanInfoItems = screen.getAllByRole("link", {
      name: "Update scan info",
    });
    expect(updateScanInfoItems[0]).toBeInTheDocument();
    expect(updateScanInfoItems[1]).toBeInTheDocument();

    const editYourInfoItems = screen.queryAllByRole("link", {
      name: "Edit your info",
    });
    expect(editYourInfoItems).toHaveLength(0);
  });

  it("shows the “Edit your info” navbar item when the flag `EditScanProfileDetails` is not enabled", async () => {
    const ShellComponent = composeStory(ShellAuthenticatedRedesign, Meta);
    render(
      <ShellComponent enabledFeatureFlags={["SidebarNavigationRedesign"]} />,
    );

    // Note: there are two user menus, for both small and wide screens:
    const editYourInfoItems = screen.getAllByRole("link", {
      name: "Edit your info",
    });
    expect(editYourInfoItems[0]).toBeInTheDocument();
    expect(editYourInfoItems[1]).toBeInTheDocument();

    const updateScanInfoItems = screen.queryAllByRole("link", {
      name: "Update scan info",
    });
    expect(updateScanInfoItems).toHaveLength(0);
  });
});
