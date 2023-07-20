/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import {
  FeatureFlag,
  addFeatureFlag,
  getAllFeatureFlags,
} from "../../../../../../db/tables/featureFlags";
import { FeatureFlagRow } from "knex/types/tables";
import { authOptions, isAdmin } from "../../../../../api/utils/auth";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import styles from "./page.module.scss";

export default async function FeatureFlagPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return redirect("/");
  }

  if (!isAdmin) {
    return notFound();
  }

  const AllFlagsTable = (featureFlags: { data: Array<FeatureFlagRow> }) => {
    const { data } = featureFlags;

    if (!data || data.length == 0) {
      return <p>No data</p>;
    }

    return (
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
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.is_enabled ? true : false}
                ></input>
              </td>
              <td>{item.dependencies}</td>
              <td>{item.allow_list?.join(", ")}</td>
              <td>{item.wait_list?.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const featureFlags = (await getAllFeatureFlags()) || null;

  const AddFeatureFlag = () => {
    /*
    const newFlag = {
      name: "",
      isEnabled: true,
      allowList: [],
      owner: "",
    } as FeatureFlag;

    addFeatureFlag(newFlag)
      .then((res) => console.debug(res))
      .catch((ex) => console.error(ex));
    */
    return (
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
          <tr>
            <td>
              <input />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <input />
            </td>
            <td>
              <button name="Add">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.tabBar}>
        <div className={styles.end}>
          <Toolbar user={session.user} />
        </div>
      </nav>
      <div className={styles.start}>
        <h1>All Feature Flags</h1>
        <AllFlagsTable data={featureFlags} />
        <h1>Add New Feature Flag</h1>
        <AddFeatureFlag />
      </div>
    </div>
  );
}
