/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  MonthlyReportFreeUserNoScanWithExposures,
  MonthlyReportFreeUserWithScan,
} from "./MonthlyActivityFreeUser.stories";

it("shows the right cta label if a user has not yet run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithExposures,
    Meta,
  );
  render(<ComposedEmail />);

  const getFirstScanFreeBtn = screen.getByRole("link", {
    name: "Get first scan free",
  });

  expect(getFirstScanFreeBtn).toBeInTheDocument();
});

it("shows the right cta label if a user has run a scan", () => {
  const ComposedEmail = composeStory(MonthlyReportFreeUserWithScan, Meta);
  render(<ComposedEmail />);

  const getFirstScanFreeBtn = screen.getByRole("link", {
    name: "Get ⁨Monitor Plus⁩",
  });

  expect(getFirstScanFreeBtn).toBeInTheDocument();
});

it("shows the right data exposure value if a user is a free user", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithExposures,
    Meta,
  );
  render(<ComposedEmail />);

  // For free users, the data point count should be "Data breaches" instead
  expect(screen.queryByText("Data exposures")).not.toBeInTheDocument();
});

it("shows the inactive state if there are 0 manually resolved data brokers", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithExposures,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedDataBreaches = screen.getByText(
    "Manually resolved data breaches",
  );

  // For free users, the data point count should be "Data breaches" instead
  expect(manuallyResolvedDataBreaches).toHaveStyle("color: #9E9E9E");
});
