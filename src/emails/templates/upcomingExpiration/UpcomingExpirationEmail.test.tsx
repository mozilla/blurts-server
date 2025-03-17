/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  UpcomingExpirationEmailStory,
} from "./UpcomingExpirationEmail.stories";

it("offers people to renew their subscription", () => {
  const ComposedEmail = composeStory(UpcomingExpirationEmailStory, Meta);
  render(<ComposedEmail />);

  const renewalLnk = screen.getByRole("link", { name: /Renew/ });
  expect(renewalLnk).toBeInTheDocument();
});
