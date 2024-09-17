/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import { CookiesProvider as ReactCookiesProvider } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

interface SessionProviderProps {
  children: ReactNode;
  defaultSetOptions: CookieSetOptions;
}

export const CookiesProvider = ({
  children,
  defaultSetOptions,
}: SessionProviderProps) => {
  return (
    <ReactCookiesProvider defaultSetOptions={defaultSetOptions}>
      {children}
    </ReactCookiesProvider>
  );
};
