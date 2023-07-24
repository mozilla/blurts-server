/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const form = document.forms.details;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = JSON.stringify(Object.fromEntries(new FormData(e.target)));
  fetch("/api/v1/user/welcome", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then(async (result) => {
    const message = await result.json();
    if (message && message.success === true) {
      window.location = "scanning";
    } else {
      throw new Error("Could not submit profile:", message);
    }
  });
});
