/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  RedesignedBreachAlertEmailNonUsStory,
  RedesignedBreachAlertEmailUsFreeNoScanStory,
  RedesignedBreachAlertEmailUsFreeWithScanStory,
  RedesignedBreachAlertEmailUsPlusWithScanStory,
} from "./BreachAlertEmail.stories";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

it("lists compromised data", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailNonUsStory,
    Meta,
  );
  render(
    <ComposedEmail
      breach={createRandomHibpListing({
        DataClasses: ["email-addresses", "passwords"],
      })}
    />,
  );

  const datapointListing = screen.getByText("Email addresses and Passwords");
  expect(datapointListing).toBeInTheDocument();
});

it("shows the 'Go to Dashboard' button for non-US users", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailNonUsStory,
    Meta,
  );
  render(<ComposedEmail />);

  const goToDashboardButton = screen.getByRole("link", {
    name: "Go to Dashboard",
  });
  expect(goToDashboardButton).toBeInTheDocument();
});

it("shows the 'Go to Dashboard' button for US users with Plus", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsPlusWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const goToDashboardButton = screen.getByRole("link", {
    name: "Go to Dashboard",
  });
  expect(goToDashboardButton).toBeInTheDocument();
});

it("does not show the 'Go to Dashboard' button for US users without Plus, who haven't run a scan yet", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeNoScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const goToDashboardButton = screen.queryByRole("link", {
    name: "Go to Dashboard",
  });
  expect(goToDashboardButton).not.toBeInTheDocument();
});

it("does not show the 'Go to Dashboard' button for US users without Plus, who have run a scan", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const goToDashboardButton = screen.queryByRole("link", {
    name: "Go to Dashboard",
  });
  expect(goToDashboardButton).not.toBeInTheDocument();
});

it("encourages US users who haven't run a scan yet to run one", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeNoScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const getScanButton = screen.getByRole("link", {
    name: "Get first scan free",
  });
  expect(getScanButton).toBeInTheDocument();
});

it("helps free US users who have run a scan to take manual action", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const takeActionButton = screen.getByRole("link", {
    name: "Resolve exposures",
  });
  expect(takeActionButton).toBeInTheDocument();
});

it("encourages free US users who have run a scan to have Monitor Plus resolve them for them", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const getPlusButton = screen.getByRole("link", {
    name: "Get ⁨Monitor Plus⁩",
  });
  expect(getPlusButton).toBeInTheDocument();
});

it("does not tell users who already have Plus to upgrade", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsPlusWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const getPlusButton = screen.queryByRole("link", {
    name: "Get ⁨Monitor Plus⁩",
  });
  expect(getPlusButton).not.toBeInTheDocument();
});

it("uses `product-email` as the utm_medium everywhere", () => {
  const ComposedEmail = composeStory(
    RedesignedBreachAlertEmailUsFreeWithScanStory,
    Meta,
  );
  render(<ComposedEmail />);

  const links = screen.getAllByRole("link");
  const linkHrefs = links
    .map((link) => link.getAttribute("href"))
    .filter((attr) => attr !== null);
  const utmMediums = linkHrefs
    .map((linkHref) => new URL(linkHref).searchParams.get("utm_medium"))
    .filter((param) => param !== null);

  expect(utmMediums.length).toBeGreaterThan(0);
  expect(utmMediums).toStrictEqual(
    Array(utmMediums.length).fill("product-email"),
  );
});
