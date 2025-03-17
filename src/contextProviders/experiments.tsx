/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext, useContext } from "react";
import { ExperimentData_V2_Or_V2LikeV1 } from "../app/functions/server/getExperiments";

interface ExperimentsProviderProps {
  children: ReactNode;
  experimentData: ExperimentData_V2_Or_V2LikeV1;
  experimentationId: string;
}

export const ExperimentsContext = createContext<{
  experimentData: ExperimentData_V2_Or_V2LikeV1;
  experimentationId: string;
} | null>(null);

export const ExperimentsProvider = (props: ExperimentsProviderProps) => {
  return (
    <ExperimentsContext.Provider
      value={{
        experimentData: props.experimentData,
        experimentationId: props.experimentationId,
      }}
    >
      {props.children}
    </ExperimentsContext.Provider>
  );
};

export const useExperiments = () => {
  const context = useContext(ExperimentsContext);
  return context;
};
