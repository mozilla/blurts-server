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
  MonthlyReportFreeUserWithMoscaryEnabled,
} from "./MonthlyActivityFreeEmail.stories";

it("shows the right label in the right box if a scan hasn't been run", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithBreachesNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const getFirstScanFreeLabel = screen.getByText(
    "Free data broker scan available",
  );

  expect(getFirstScanFreeLabel).toBeInTheDocument();
});

it("shows the right label in the right box if a user has run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const autoRemovedExposuresLabel = screen.getByText("Auto-removed exposures", {
    exact: false,
  });

  expect(autoRemovedExposuresLabel).toBeInTheDocument();
});

it("shows the inactive state if there are 0 manually resolved data breaches", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserNoScanWithBreachesNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedDataBreaches = screen.getByText(
    "Data breaches resolved manually",
    { exact: false },
  );

  expect(manuallyResolvedDataBreaches).toHaveStyle("color: #6D6D6E");
});

it("shows the active state if there are manually resolved data breaches", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const manuallyResolvedExposures = screen.getByText(
    "Data breaches resolved manually",
    { exact: false },
  );

  expect(manuallyResolvedExposures).toHaveStyle("color: #000000");
});

it("says exposures instead of breaches once a user has run a scan", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithScanWithExposuresNothingResolved,
    Meta,
  );
  render(<ComposedEmail />);

  const dataExposures = screen.getByText("Data exposures", { exact: true });

  expect(screen.queryByText("Data breaches", { exact: true })).toBeNull();
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

it("lists data exposures also for users who ran a scan through Moscary", () => {
  const ComposedEmail = composeStory(
    MonthlyReportFreeUserWithMoscaryEnabled,
    Meta,
  );
  render(<ComposedEmail />);

  const dataExposures = screen.getByText("Data exposures", { exact: true });

  expect(screen.queryByText("Data breaches", { exact: true })).toBeNull();
  expect(dataExposures).toBeInTheDocument();
});
