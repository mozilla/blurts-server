/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "../../../../../api/utils/auth";
import styles from "./page.module.scss";
import { TogglePremiumEnabled } from "./components/TogglePremium";
import { InputUserPrimaryEmail } from "./components/InputUserPrimaryEmail";
import { getSubscriberByEmail } from "../../../../../../db/tables/subscribers";

export default async function FeatureFlagPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return redirect("/");
  }

  if (!isAdmin(session.user.email)) {
    return notFound();
  }

  // FIXME
  const user = await getSubscriberByEmail("rhelmer@mozilla.com");

  return (
    <div className={styles.wrapper}>
      <nav className={styles.tabBar}></nav>
      <div className={styles.start}>
        Email address:
        <InputUserPrimaryEmail />
      </div>
      <table>
        <thead>
          <tr>
            <th>Primary Email</th>
            <th>Created At</th>
            <th>OneRep Profile ID</th>
            <th>Signup Language</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.primary_email}</td>
            <td>{user.created_at.toString()}</td>
            <td>{user.onerep_profile_id}</td>
            <td>{user.signup_language}</td>
            <td>
              <TogglePremiumEnabled
                id="isEnabled"
                name={user.primary_email}
                onerepProfileId={user.onerep_profile_id}
                isEnabled={false}
              />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
