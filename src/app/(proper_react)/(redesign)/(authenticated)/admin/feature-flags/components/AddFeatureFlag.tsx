/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

// TODO investigate way to harmonize this with `FeatureFlag` type
interface FeatureFlagElement {
  name: {
    value: string | null;
  } | null;
  isEnabled: {
    checked: string | null;
  } | null;
}

export const AddFeatureFlag = () => {
  const router = useRouter();

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> & {
      target: FeatureFlagElement;
    },
  ) => {
    event.preventDefault();

    const eventTarget: FeatureFlagElement = event.target;

    if (!eventTarget || !eventTarget.name) {
      throw new Error("No flag name provided");
    }

    const data = {
      name: eventTarget.name.value,
      isEnabled: eventTarget.isEnabled?.checked ? true : false,
    };

    const endpoint = "/api/v1/admin/feature-flags";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(endpoint, options)
      .then((response) => {
        if (response.ok) {
          router.refresh();
        }
        // @ts-ignore convince TS this is a <form> element
        eventTarget.reset();
      })
      .catch((ex) => console.error(ex));
  };
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" />
            </td>
            <td>
              <input id="isEnabled" name="isEnabled" type="checkbox" />
            </td>
            <td>
              <button name="Add">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
