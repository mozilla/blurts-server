/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "@testing-library/jest-dom";
import { setProjectAnnotations } from "@storybook/react";
import { toHaveNoViolations } from "jest-axe";
import { expect } from "@jest/globals";

import * as globalStorybookConfig from "./.storybook/preview";

setProjectAnnotations(
  globalStorybookConfig as Parameters<typeof setProjectAnnotations>[0]
);

expect.extend(toHaveNoViolations);
