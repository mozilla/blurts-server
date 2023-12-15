/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext } from "react";

const PUBLIC_ENVS_DEFAULT: Record<string, string> = {
  PUBLIC_APP_ENV: "",
} as const;

interface SessionProviderProps {
  children: ReactNode;
  publicEnvs: {
    [key: keyof typeof PUBLIC_ENVS_DEFAULT]: string;
  };
}

export const PublicEnvContext = createContext(PUBLIC_ENVS_DEFAULT);

export const PublicEnvProvider = ({
  children,
  publicEnvs,
}: SessionProviderProps) => {
  return (
    <PublicEnvContext.Provider value={publicEnvs}>
      {children}
    </PublicEnvContext.Provider>
  );
};
