/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { UserMenu } from "../../../../../components/client/UserMenu";
import styles from "./page.module.scss";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.tabBar}>
        <div className={styles.start}>
          TODO:{" "}
          <a href="https://react-spectrum.adobe.com/react-aria/useTabList.html">
            add a tab list
          </a>
        </div>
        <div className={styles.end}>
          <UserMenu session={session} />
        </div>
      </nav>
    </div>
  );
}
