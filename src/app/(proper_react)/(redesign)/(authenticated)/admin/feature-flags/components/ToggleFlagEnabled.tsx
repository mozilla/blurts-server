/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

interface FeatureToggleElement {
  id: string | null;
  name: string | null;
  checked: string | null;
}

export const ToggleFlagEnabled = (props: {
  id: string | undefined;
  name: string | undefined;
  isEnabled: boolean | undefined;
}) => {
  const router = useRouter();

  const handleChange = (
    event: ChangeEventHandler<HTMLInputElement> & {
      target: FeatureToggleElement;
    },
  ) => {
    const eventTarget: FeatureToggleElement = event.target;

    const id = eventTarget.id;
    const name = eventTarget.name;
    const isEnabled = eventTarget.checked ? true : false;

    if (!name) {
      throw new Error("No flag name provided");
    }

    const endpoint = `/api/v1/admin/feature-flags/${name}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, isEnabled }),
    };
    fetch(endpoint, options)
      .then((response) => {
        if (response.ok) {
          router.refresh();
        }
      })
      .catch((ex) => console.error(ex));
  };

  return (
    <input
      id={props.id}
      name={props.name}
      type="checkbox"
      checked={props.isEnabled}
      onChange={handleChange as unknown as ChangeEventHandler<HTMLInputElement>}
    ></input>
  );
};
