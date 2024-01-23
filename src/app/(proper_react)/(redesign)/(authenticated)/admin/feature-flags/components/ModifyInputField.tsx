/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
import { useRouter } from "next/navigation";
import { FocusEventHandler } from "react";

interface FeatureFieldElement {
  id: string | null;
  name: string | null;
  value: string | null;
}

export const ModifyInputField = (props: {
  id: string | undefined;
  name: string | undefined;
  defaultValue: string | undefined;
}) => {
  const router = useRouter();

  const handleBlur = (
    event: FocusEventHandler<HTMLInputElement> & {
      target: FeatureFieldElement;
    },
  ) => {
    const eventTarget: FeatureFieldElement = event.target;
    const id = eventTarget.id;
    const name = eventTarget.name;
    const value = eventTarget.value;

    if (!id) {
      throw new Error("No id provided");
    }

    if (!name) {
      throw new Error("No flag name provided");
    }

    const endpoint = `/api/v1/admin/feature-flags/${name}`;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, value }),
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
      defaultValue={props.defaultValue}
      onBlur={handleBlur as unknown as FocusEventHandler<HTMLInputElement>}
    />
  );
};
