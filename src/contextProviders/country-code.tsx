/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext } from "react";

interface SessionProviderProps {
  children: ReactNode;
  countryCode: string;
}

export const CountryCodeContext = createContext("");

export const CountryCodeProvider = ({
  children,
  countryCode,
}: SessionProviderProps) => {
  return (
    <CountryCodeContext.Provider value={countryCode}>
      {children}
    </CountryCodeContext.Provider>
  );
};
