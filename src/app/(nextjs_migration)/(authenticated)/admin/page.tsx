/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export default async function AdminPage() {
  return (
    <section>
      <h1>Admin</h1>

      <ul>
        <li>
          <a href="/admin/emails">Email preview</a>
        </li>
        <li>
          <a href="/admin/location-search">Location search</a>
        </li>
      </ul>
    </section>
  );
}
