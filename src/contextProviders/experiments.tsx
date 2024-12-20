/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext, useContext } from "react";
import { ExperimentData } from "../telemetry/generated/nimbus/experiments";

interface ExperimentsProviderProps {
  children: ReactNode;
  experimentData: ExperimentData;
}

export const ExperimentsContext = createContext<ExperimentData | null>(null);

export const ExperimentsProvider = ({
  children,
  experimentData,
}: ExperimentsProviderProps) => {
  return (
    <ExperimentsContext.Provider value={experimentData}>
      {children}
    </ExperimentsContext.Provider>
  );
};

export const useExperiments = () => useContext(ExperimentsContext);
