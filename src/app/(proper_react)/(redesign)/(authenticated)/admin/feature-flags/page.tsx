/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { getAllFeatureFlags } from "../../../../../../db/tables/featureFlags";
import { AddFeatureFlag } from "./components/AddFeatureFlag";
import { ToggleFlagEnabled } from "./components/ToggleFlagEnabled";
import { FeatureFlagRow } from "knex/types/tables";
import { isAdmin } from "../../../../../api/utils/auth";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";
import styles from "./page.module.scss";
import { ModifyInputField } from "./components/ModifyInputField";
import {
  getSubscriptionBillingAmount,
  getPremiumSubscriptionUrl,
} from "../../../../../functions/server/getPremiumSubscriptionInfo";

export default async function FeatureFlagPage() {
  const session = await getServerSession();

  const monthlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "monthly" });
  const yearlySubscriptionUrl = getPremiumSubscriptionUrl({ type: "yearly" });
  const fxaSettingsUrl = process.env.FXA_SETTINGS_URL!;

  if (!session?.user?.email) {
    return redirect("/");
  }

  if (!isAdmin(session.user.email)) {
    return notFound();
  }

  const AllFlagsTable = (featureFlags: { data: Array<FeatureFlagRow> }) => {
    const { data } = featureFlags;

    if (!data || data.length === 0) {
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
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <ToggleFlagEnabled
                  id="isEnabled"
                  name={item.name}
                  isEnabled={item.is_enabled}
                />
                {item.is_enabled}
              </td>
              <td>
                <ModifyInputField
                  id="dependencies"
                  name={item.name}
                  defaultValue={item.dependencies?.join(",")}
                />
              </td>
              <td>
                <ModifyInputField
                  id="allowList"
                  name={item.name}
                  defaultValue={item.allow_list?.join(",")}
                />
              </td>
              <td>
                <ModifyInputField
                  id="waitList"
                  name={item.name}
                  defaultValue={item.wait_list?.join(",")}
                />
              </td>
              <td>
                <ModifyInputField
                  id="owner"
                  name={item.name}
                  defaultValue={item.owner}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const featureFlags = (await getAllFeatureFlags()) || null;

  return (
    <div className={styles.wrapper}>
      <nav className={styles.tabBar}>
        <div className={styles.end}>
          <Toolbar
            user={session.user}
            monthlySubscriptionUrl={monthlySubscriptionUrl}
            yearlySubscriptionUrl={yearlySubscriptionUrl}
            subscriptionBillingAmount={getSubscriptionBillingAmount()}
            fxaSettingsUrl={fxaSettingsUrl}
          />
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
