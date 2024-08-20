/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { RelevantLocation } from "../../api/v1/location-autocomplete/types";
import type { useLocationSuggestions as ogUseLocationSuggestions } from "../locationSuggestions";

const mockSetFilterText = jest.fn();

export const useLocationSuggestions: typeof ogUseLocationSuggestions = () => {
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
    setFilterText: mockSetFilterText,
    filterText: "Tulsa, OK, USA",
    isLoading: false,
    loadingState: "idle",
  };

  return mockedReturnValue as ReturnType<typeof ogUseLocationSuggestions>;
};
