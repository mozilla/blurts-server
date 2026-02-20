/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { BreachAlertEmailNonUsStory } from "./BreachAlertEmail.stories";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

it("lists compromised data", () => {
  const ComposedEmail = composeStory(BreachAlertEmailNonUsStory, Meta);
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
  const ComposedEmail = composeStory(BreachAlertEmailNonUsStory, Meta);
  render(<ComposedEmail />);

  const goToDashboardButton = screen.getByRole("link", {
    name: "Go to Dashboard",
  });
  expect(goToDashboardButton).toBeInTheDocument();
});

it("uses `product-email` as the utm_medium everywhere", () => {
  const ComposedEmail = composeStory(BreachAlertEmailNonUsStory, Meta);
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
