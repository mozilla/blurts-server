/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Mock for next/font/local
export default function localFont(_config?: any) {
  return {
    className: 'mock-local-font',
    variable: '--mock-local-font',
    style: {}
  };
}