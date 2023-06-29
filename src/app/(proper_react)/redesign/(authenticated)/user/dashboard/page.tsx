/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import { Toolbar } from "../../../../../components/client/toolbar/Toolbar";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <div className={styles.wrapper}>
      <Toolbar session={session}>
        TODO:{" "}
        <a href="https://react-spectrum.adobe.com/react-aria/useTabList.html">
          add a tab list
        </a>
      </Toolbar>
    </div>
  );
}
