/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function getOneRepResult(
  method: string,
  path: string,
  body?: string
) {
  const bearerToken = process.env.ONEREP_API_KEY;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    // @ts-ignore FIXME
    options.body = body;
  }

  const result = await fetch(`${process.env.ONEREP_API_BASE}/${path}`, options);
  if (!result.ok) {
    throw new Error(
      `Error connecting to provider: ${process.env.ONEREP_API_BASE},
       ${JSON.stringify(await result.json())}`
    );
  }
  return result.json();
}
