/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { renderHook, waitFor } from "@testing-library/react";
import { useLocationSuggestions } from "./locationSuggestions";

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((_, options) => {
    const body = JSON.parse(options.body);
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          results: Array.from(
            { length: body.config.maxResults },
            (_, locationIndex) => ({
              id: `${locationIndex + 1}`,
              n: `City ${locationIndex + 1}`,
              s: `S${locationIndex}`,
            }),
          ).filter((location) => location.n.includes(body.searchQuery)),
        }),
    });
  });
});

describe("useLocationSuggestion", () => {
  it("calls the endpoint `/api/v1/location-autocomplete` with the passed searched query", async () => {
    const searchQuery = "City";
    renderHook(() => useLocationSuggestions(searchQuery));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/location-autocomplete",
        {
          method: "POST",
          body: JSON.stringify({
            searchQuery,
            config: {
              minQueryLength: 1,
              maxResults: 5,
            },
          }),
          signal: new AbortController().signal,
        },
      );
    });
  });

  it("returns a filtered list of matching locations", async () => {
    const searchQuery = "3";
    const { result } = renderHook(() => useLocationSuggestions(searchQuery));

    await waitFor(() => {
      expect(result.current.items).toHaveLength(1);
    });
  });

  it("throws an error if the endpoint `/api/v1/location-autocomplete` does not return a successful response", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });

    const { result } = renderHook(() => useLocationSuggestions("City"));
    await waitFor(() => {
      expect(result.current.error).toMatchObject(
        new Error("No locations found"),
      );
    });
  });
});
