/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { DataBrokerImage } from "./DataBrokerImage";

it("renders a fallback icon until the image has loaded", async () => {
  render(<DataBrokerImage name="SSSSome name" />);

  const falbackLogo = screen.getByRole("img", { hidden: true });
  expect(falbackLogo).toBeInTheDocument();
  expect(falbackLogo.textContent).toBe("S");
  expect(falbackLogo.tagName).not.toBe("IMG");

  await waitForElementToBeRemoved(falbackLogo);
  const loadedImage = screen.getByRole("img", { hidden: true });
  expect(loadedImage).toBeInTheDocument();
  expect(loadedImage.tagName).toBe("IMG");
});
