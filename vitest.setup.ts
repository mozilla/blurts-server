/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import '@testing-library/jest-dom/vitest';
import { expect, vi, beforeEach, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as axeMatchers from 'vitest-axe/matchers';
import 'vitest-axe/extend-expect';
import { setProjectAnnotations } from '@storybook/react';
import { TextEncoder, TextDecoder } from 'util';
import 'vitest-canvas-mock';
import * as projectAnnotations from './.storybook/preview';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Extend Vitest's expect with axe matchers
expect.extend(axeMatchers);

// Setup Storybook for Vitest
setProjectAnnotations(projectAnnotations);

// Some tests run in a Node.js environment (marked with @vitest-environment node),
// where `window` is not defined. Only set up browser-specific mocks in jsdom.
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { defaultFallbackInView } = require('react-intersection-observer');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { setupIntersectionMocking, resetIntersectionMocking } = require('react-intersection-observer/test-utils');

  // See https://www.benmvp.com/blog/avoiding-react-act-warning-when-accessibility-testing-next-link-jest-axe/
  // If no `IntersectionObserver` exists, Next.js's <Link> will do a state update
  // immediately after rendering, causing warnings about wrapping tests in act().
  global.IntersectionObserver = vi.fn();
  // Then before every test, we add an actual mock for the IntersectionObserver
  // API. When a <Link> scrolls into view, Next.js will attempt to preload the
  // target, causing another rerender that would cause a warning about wrapping
  // tests in act(). Thus, we tell it it's not in view.
  defaultFallbackInView(false);
  beforeEach(() => {
    setupIntersectionMocking(vi.fn);
  });
  afterEach(() => {
    resetIntersectionMocking();
  });
}

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
