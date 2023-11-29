/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext } from "react";
import { PUBLIC_ENV } from "../app/layout";

interface SessionProviderProps {
  children: ReactNode;
  publicEnv: typeof PUBLIC_ENV;
}

export const PublicEnvContext = createContext({
  APP_ENV: "",
});

export const PublicEnvProvider = ({
  children,
  publicEnv,
}: SessionProviderProps) => {
  return (
    <PublicEnvContext.Provider value={publicEnv}>
      {children}
    </PublicEnvContext.Provider>
  );
};
