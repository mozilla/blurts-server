/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

export const AddFeatureFlag = () => {
  // @ts-ignore FIXME determine correct event type
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event?.target?.name.value,
      isEnabled: event?.target?.isEnabled.value ? true : false,
      dependencies: event?.target?.dependencies.value.split(","),
      allowList: event?.target?.allowList.value.split(","),
      waitList: event?.target?.waitList.value.split(","),
      owner: event?.target?.owner.value,
    };

    const endpoint = "/api/v1/admin/feature-flags" as string;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Send the form data to our forms API on Vercel and get a response.
    fetch(endpoint, options)
      .then((response) => {
        if (response.ok) {
          window.location.reload(); // FIXME re-render component w/o page reload
        }
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
            <th>Dependencies</th>
            <th>Allow List</th>
            <th>Wait List</th>
            <th>Owner</th>
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
              <input id="dependencies" name="dependencies" />
            </td>
            <td>
              <input id="allowList" name="allowList" />
            </td>
            <td>
              <input id="waitList" name="waitList" />
            </td>
            <td>
              <input id="owner" name="owner" />
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
