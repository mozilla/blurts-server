/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { LocationSearchInput } from "../../../../components/client/LocationSearchInput";

export default async function LocationSearchPage() {
  return (
    <section>
      <h1>Location search</h1>

      <LocationSearchInput />
    </section>
  );
}
