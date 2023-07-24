/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
import { useRouter } from "next/navigation";
import { FocusEventHandler } from "react";

interface FeatureFieldElement {
  id: {
    value: string;
  };
  name: {
    value: string;
  };
  value: {
    value: string;
  };
}

export const ModifyInputField = (props: {
  id: string | undefined;
  name: string | undefined;
  defaultValue: string | undefined;
}) => {
  const router = useRouter();

  const handleBlur = (
    event: FocusEventHandler<HTMLFormElement> & {
      target: FeatureFieldElement;
    }
  ) => {
    const id = event.target.id.value;
    const name = event.target.name.value;
    const value = event.target.value.value;

    const endpoint = `/api/v1/admin/feature-flags/${name }`;

    const options = {
      method: "POST",
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
      onBlur={handleBlur}
    />
  );
};
