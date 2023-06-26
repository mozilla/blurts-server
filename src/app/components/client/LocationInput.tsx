/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ChangeEvent } from "react";

const handleOnInput = async (event: ChangeEvent<HTMLInputElement>) => {
  try {
    const response = await fetch("/api/v1/location-autocomplete", {
      method: "POST",
      body: JSON.stringify({
        searchQuery: event.target.value,
      }),
    });

    if (!response.ok) {
      // TODO: Handle error
    }

    const locationResults = await response.json();
    console.log(locationResults);
  } catch (error) {
    console.error(error);
  }
};

export const LocationInput = () => {
  return (
    <input onInput={handleOnInput} placeholder="Enter your location" required />
  );
};
