/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { BreachAlertEmailStory } from "./BreachAlertEmail.stories";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

it("lists compromised data", () => {
  const ComposedEmail = composeStory(BreachAlertEmailStory, Meta);
  render(
    <ComposedEmail
      breach={createRandomHibpListing({
        DataClasses: ["email-addresses", "passwords"],
      })}
    />,
  );

  const breachCard = screen.getByText("Compromised data:");
  expect(breachCard).toBeInTheDocument();
});

it("displays a breach icon if available", () => {
  const ComposedEmail = composeStory(BreachAlertEmailStory, Meta);
  const { container } = render(
    <ComposedEmail
      breach={createRandomHibpListing({
        FaviconUrl: "https://example.com/image.webp",
      })}
    />,
  );

  expect(
    container.querySelector("img[src='https://example.com/image.webp']"),
  ).toBeInTheDocument();
});

it("does not display a breach icon if none is available", () => {
  const ComposedEmail = composeStory(BreachAlertEmailStory, Meta);
  const { container } = render(
    <ComposedEmail
      breach={createRandomHibpListing({ FaviconUrl: undefined })}
    />,
  );

  expect(
    container.querySelector("img:not([src^='http://localhost'])"),
  ).not.toBeInTheDocument();
});
