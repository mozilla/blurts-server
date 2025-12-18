/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import Meta, {
  MonitorLogoActionNeeded,
  MonitorLogoFixFlow,
} from "./MonitorLogo.stories";
import * as navigation from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = navigation.usePathname as unknown as jest.Mock;

describe("MonitorLogo", () => {
  beforeEach(() => mockedUsePathname.mockReset());

  it("has white background on dashboard", () => {
    mockedUsePathname.mockReturnValue("/fy-NL/");

    const Composed = composeStory(MonitorLogoActionNeeded, Meta);
    render(<Composed />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveClass("isOnDashboard");
  });

  it("does not have white background on /fix", () => {
    mockedUsePathname.mockReturnValue("/fy-NL/fix/leaked-passwords/passwords");

    const Composed = composeStory(MonitorLogoFixFlow, Meta);
    render(<Composed />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).not.toHaveClass("isOnDashboard");
  });
});
