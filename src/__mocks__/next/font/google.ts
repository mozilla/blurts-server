/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Mock for next/font/google
export function Inter(_config?: any) {
  return {
    className: 'mock-inter-font',
    variable: '--mock-inter-font',
    style: {}
  };
}

// Default export for other Google fonts
export default function googleFont(_config?: any) {
  return {
    className: 'mock-google-font',
    variable: '--mock-google-font',
    style: {}
  };
}