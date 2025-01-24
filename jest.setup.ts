/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import "jest-axe/extend-expect";
import { TextEncoder } from "util";
import { setProjectAnnotations } from "@storybook/react";
import { defaultFallbackInView } from "react-intersection-observer";
import {
  resetIntersectionMocking,
  setupIntersectionMocking,
} from "react-intersection-observer/test-utils";
import failOnConsole from "jest-fail-on-console";
import * as globalStorybookConfig from "./.storybook/preview";

setProjectAnnotations(
  globalStorybookConfig as Parameters<typeof setProjectAnnotations>[0],
);

// Prevent logs from cluttering up actual problems in our tests:
failOnConsole({
  shouldFailOnError: true,
  shouldFailOnWarn: true,
  shouldFailOnInfo: true,
  shouldFailOnDebug: true,
  shouldFailOnLog: true,
  shouldFailOnAssert: true,
});

// See https://www.benmvp.com/blog/avoiding-react-act-warning-when-accessibility-testing-next-link-jest-axe/
// If no `IntersectionObserver` exists, Next.js's <Link> will do a state update
// immediately after rendering, causing warnings about wrapping tests in act().
global.IntersectionObserver = jest.fn();
// Then before every test, we add an actual mock for the IntersectionObserver
// API in `setupFilesAfterEnv`. When a <Link> scrolls into view, Next.js will
// attempt to preload the target, causing another rerender that would cause a
// warning about wrapping tests in act(). Thus, we tell it it's not in view.
defaultFallbackInView(false);
beforeEach(() => {
  setupIntersectionMocking(jest.fn);

  // react-dom/server.edge is apparently needed instead of react-dom/server
  // to avoid this error:
  // > Uncaught ReferenceError: MessageChannel is not defined
  // See https://github.com/jsdom/jsdom/issues/2448#issuecomment-1581009331
  window.MessageChannel = jest.fn().mockImplementation(() => {
    return {
      port1: {
        postMessage: jest.fn(),
      },
      port2: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };
  });
});
afterEach(() => {
  resetIntersectionMocking();
});

global.TextEncoder = TextEncoder;

// Jest doesn't like the top-level await in envVars.ts, so we mock it.
jest.mock("./src/envVars", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv-flow").config();
  return {
    getEnvVarsOrThrow: () => process.env,
  };
});
