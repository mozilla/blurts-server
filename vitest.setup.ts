/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as axeMatchers from 'vitest-axe/matchers';
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


