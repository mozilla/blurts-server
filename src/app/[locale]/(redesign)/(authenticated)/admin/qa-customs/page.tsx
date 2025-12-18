/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "../../../../../functions/server/getServerSession";
import { notFound } from "next/navigation";
import { isAdmin } from "../../../../../api/utils/auth";
import HibpConfigPage from "./hibpConfig";
import styles from "./ConfigPage.module.scss";
import {
  createQaTogglesRow,
  AllowedToggleColumns,
} from "../../../../../../db/tables/qa_customs";
import { config } from "../../../../../../config";

export default async function DevPage() {
  const session = await getServerSession();
  let existingRow = null;

  if (
    config.appEnv === "production" ||
    !session?.user?.email ||
    !isAdmin(session.user.email) ||
    !session?.user?.subscriber?.primary_sha1
  ) {
    return notFound();
  } else {
    const { primary_sha1 } = session.user.subscriber;
    existingRow = await createQaTogglesRow(primary_sha1);
  }

  return (
    <div className={styles.configContainer}>
      <HibpConfigPage
        emailHashFull={session.user.subscriber.primary_sha1}
        showApiBreaches={existingRow.show_real_breaches}
        showQaBreaches={existingRow.show_custom_breaches}
        showApiParamEnum={AllowedToggleColumns.ShowRealBreaches}
        showQaParamEnum={AllowedToggleColumns.ShowCustomBreaches}
      />
      ;
    </div>
  );
}
