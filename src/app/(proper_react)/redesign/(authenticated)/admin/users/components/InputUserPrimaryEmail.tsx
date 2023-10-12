/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
import { useRouter } from "next/navigation";

export const InputUserPrimaryEmail = () => {
  const router = useRouter();

  const onClick = () => {
    const userPrimaryEmail = document.getElementById("userPrimaryEmail")?.id;

    console.debug("id:", userPrimaryEmail);

    if (!userPrimaryEmail) {
      throw new Error("No userPrimaryEmail provided");
    }

    const endpoint = `/api/v1/admin/users/${userPrimaryEmail}`;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userPrimaryEmail }),
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
    <>
      <input type="email" id="userPrimaryEmail" />
      <button onClick={onClick}>Search</button>
    </>
  );
};
