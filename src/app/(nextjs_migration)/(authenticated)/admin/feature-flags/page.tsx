/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getAllFeatureFlags } from "../../../../../db/tables/featureFlags";
import { authOptions, isAdmin } from "../../../../api/utils/auth";

export default async function FeatureFlagRootPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return redirect("/");
  }

  if (!isAdmin) {
    return notFound();
  }

  const AllFlagsTable = (featureFlags: { data: Array<any> }) => {
    const { data } = featureFlags;
    // Extract column names from the first object in the data array
    const columns = Object.keys(data[0]);

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Enabled</th>
              <th>Dependencies</th>
              <th>Allow List</th>
              <th>Wait List</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key="">
                <td>{item.name}</td>
                <td>{String(item.is_enabled)}</td>
                <td>{item.dependencies}</td>
                <td>{item.allow_list.join(", ")}</td>
                <td>{item.wait_list.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const featureFlags = (await getAllFeatureFlags()) || null;

  return (
    <div>
      <h1>All Feature Flags</h1>
      <AllFlagsTable data={featureFlags} />
    </div>
  );
}
