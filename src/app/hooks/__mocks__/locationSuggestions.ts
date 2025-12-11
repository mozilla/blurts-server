/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useState } from "react";
import { RelevantLocation } from "../../api/v1/location-autocomplete/types";
import type { useLocationSuggestions as ogUseLocationSuggestions } from "../locationSuggestions";

export const useLocationSuggestions: typeof ogUseLocationSuggestions = (
  initialFilterText,
) => {
  const [filterText, setFilterText] = useState(initialFilterText);

  const mockedReturnValue: Partial<
    ReturnType<typeof ogUseLocationSuggestions>
  > = {
    items: [
      {
        id: "4553433",
        n: "Tulsa",
        s: "OK",
      },
      {
        id: "5318313",
        n: "Tucson",
        s: "AZ",
      },
    ] as RelevantLocation[],
    setFilterText: setFilterText,
    filterText: filterText,
    isLoading: false,
    loadingState: "idle",
  };

  return mockedReturnValue as ReturnType<typeof ogUseLocationSuggestions>;
};
