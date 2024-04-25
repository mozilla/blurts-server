/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRouter } from "next/navigation";

export const DeleteFeatureFlag = (props: { name: string | undefined }) => {
  const router = useRouter();

  const onClick = () => {
    const endpoint = "/api/v1/admin/feature-flags";

    const data = {
      name: props.name,
    };

    const options = {
      method: "DELETE",
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
      })
      .catch((ex) => console.error(ex));
  };
  return (
    <button onClick={onClick} name="Delete">
      Delete
    </button>
  );
};
