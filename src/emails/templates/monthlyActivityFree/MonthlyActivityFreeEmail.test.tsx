/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  MonthlyReportFreeUserNoScanWithBreachesNothingResolved,
  MonthlyReportFreeUserWithoutScanNoExposures,
  MonthlyReportFreeUserWithScanNoRemainingExposures,
  MonthlyReportFreeUserWithScanWithExposuresNothingResolved,
  MonthlyReportFreeUserWithScanWithExposuresResolved,
} from "./MonthlyActivityFreeEmail.stories";

it("shows the right cta label if a user has not yet run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithBreachesNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const getFirstScanFreeBtn = screen.getByRole("link", {
    name: "Get first scan free",
  });

  expect(getFirstScanFreeBtn).toBeInTheDocument();
});

it("shows the right cta label if a user has run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const getFirstScanFreeBtn = screen.getByRole("link", {
    name: "Get ⁨Monitor Plus⁩",
  });

  expect(getFirstScanFreeBtn).toBeInTheDocument();
});

it("shows the inactive state if there are 0 manually resolved data breaches", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithBreachesNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedDataBreaches = screen.getByText(
    "Manually resolved data breaches",
    { exact: false },
  );

  expect(manuallyResolvedDataBreaches).toHaveStyle("color: #9E9E9E");
});

it("shows the active state if there are manually resolved data breaches", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedExposures = screen.getByText(
    "Manually resolved exposures",
    { exact: false },
  );

  expect(manuallyResolvedExposures).toHaveStyle("color: #7542E5");
});

it("says exposures instead of breaches once a user has run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedExposures = screen.getByText(
    "Manually resolved exposures",
    { exact: false },
  );

  const dataExposures = screen.getByText("Data exposures", { exact: false });

  expect(manuallyResolvedExposures).toBeInTheDocument();
  expect(dataExposures).toBeInTheDocument();
});

it("shows the congratulatory banner if no exposures remaining before scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithoutScanNoExposures,
    Meta,
  );
  render(<ComposedEmail />);

  const greatNewsHeader = screen.getByText("Great news!");

  expect(greatNewsHeader).toBeInTheDocument();
});

it("shows the congratulatory banner if no exposures remaining after scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanNoRemainingExposures,
    Meta,
  );
  render(<ComposedEmail />);

  const greatNewsHeader = screen.getByText("Great news!");

  expect(greatNewsHeader).toBeInTheDocument();
});
