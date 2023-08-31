/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "@testing-library/jest-dom";
import { setProjectAnnotations } from "@storybook/react";
import { toHaveNoViolations } from "jest-axe";
import { expect } from "@jest/globals";
import { defaultFallbackInView } from "react-intersection-observer";

import * as globalStorybookConfig from "./.storybook/preview";

setProjectAnnotations(
  globalStorybookConfig as Parameters<typeof setProjectAnnotations>[0]
);

expect.extend(toHaveNoViolations);

// See https://www.benmvp.com/blog/avoiding-react-act-warning-when-accessibility-testing-next-link-jest-axe/
// If no `IntersectionObserver` exists, Next.js's <Link> will do a state update
// immediately after rendering, causing warnings about wrapping tests in act().
global.IntersectionObserver = jest.fn();
// Then in jest.config.cjs, we add an actual mock for the IntersectionObserver
// API in `setupFilesAfterEnv`. When a <Link> scrolls into view, Next.js will
// attempt to preload the target, causing another rerender that would cause a
// warning about wrapping tests in act(). Thus, we tell it it's not in view.
defaultFallbackInView(false);
