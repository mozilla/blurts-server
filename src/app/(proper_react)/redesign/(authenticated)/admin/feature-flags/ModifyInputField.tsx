/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

export const ModifyInputField = (props: {
  id: string | undefined;
  name: string | undefined;
  defaultValue: string | undefined;
}) => {
  // @ts-ignore FIXME determine correct event type
  const handleChange = (event) => {
    const id = event.target.id;
    const name = event.target.name;
    const value = event.target.value;

    const endpoint = `/api/v1/admin/feature-flags/${name as string}`;

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
          window.location.reload(); // FIXME re-render w/o page reload
        }
      })
      .catch((ex) => console.error(ex));
  };
  return (
    <input
      id={props.id}
      name={props.name}
      defaultValue={props.defaultValue}
      onBlur={handleChange}
    />
  );
};
