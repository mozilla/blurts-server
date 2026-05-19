/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { BreachAlertEmailDefaultStory } from "./BreachAlertEmail.stories";
import { createRandomHibpListing } from "../../../apiMocks/mockData";

it("lists compromised data", () => {
  const ComposedEmail = composeStory(BreachAlertEmailDefaultStory, Meta);
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

it("shows the 'Breach details' section title", () => {
  const ComposedEmail = composeStory(BreachAlertEmailDefaultStory, Meta);
  render(<ComposedEmail breach={createRandomHibpListing()} />);

  expect(screen.getByText("Breach details")).toBeInTheDocument();
});

it("shows the 'Resolve breach on dashboard' button", () => {
  const ComposedEmail = composeStory(BreachAlertEmailDefaultStory, Meta);
  render(<ComposedEmail />);

  const goToDashboardButton = screen.getByRole("link", {
    name: "Resolve breach on dashboard",
  });
  expect(goToDashboardButton).toBeInTheDocument();
});

it("hides exactly one of the light/dark logos in each color scheme", () => {
  const ComposedEmail = composeStory(BreachAlertEmailDefaultStory, Meta);
  render(<ComposedEmail />);

  const lightImages = document.getElementsByClassName("dm-img-light");
  const darkImages = document.getElementsByClassName("dm-img-dark");
  expect(lightImages.length).toBeGreaterThan(0);
  expect(darkImages.length).toBe(lightImages.length);

  expect(computeDisplay("dm-img-light", false)).not.toBe("none");
  expect(computeDisplay("dm-img-dark", false)).toBe("none");
  expect(computeDisplay("dm-img-light", true)).toBe("none");
  expect(computeDisplay("dm-img-dark", true)).not.toBe("none");
});

function computeDisplay(className: string, prefersDark: boolean): string {
  const target = `.${className}`;
  let display = "";

  const selectorMatches = (selector: string) =>
    selector.split(",").some((part) => part.trim() === target);

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of Array.from(rules)) {
      if (rule instanceof CSSMediaRule) {
        const isDarkMedia = rule.conditionText.includes(
          "prefers-color-scheme: dark",
        );
        if (!prefersDark || !isDarkMedia) continue;
        for (const inner of Array.from(rule.cssRules)) {
          if (
            inner instanceof CSSStyleRule &&
            selectorMatches(inner.selectorText) &&
            inner.style.display
          ) {
            display = inner.style.display;
          }
        }
      } else if (
        rule instanceof CSSStyleRule &&
        selectorMatches(rule.selectorText) &&
        rule.style.display
      ) {
        display = rule.style.display;
      }
    }
  }

  return display;
}

it("uses `product-email` as the utm_medium everywhere", () => {
  const ComposedEmail = composeStory(BreachAlertEmailDefaultStory, Meta);
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
