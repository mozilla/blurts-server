/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import Image from "next/image";
import ImageCityScape from "./images/city-scape.svg";
import styles from "../dataBrokerProfiles.module.scss";
import { Button } from "../../../../../../../../components/server/Button";
import { getLatestOnerepScanResults } from "../../../../../../../../../db/tables/onerep_scans";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../../../api/utils/auth";
import { getOnerepProfileId } from "../../../../../../../../../db/tables/subscribers";
import { getCountryCode } from "../../../../../../../../functions/server/getCountryCode";
import { getL10n } from "../../../../../../../../functions/server/l10n";

export default async function StartFreeScan() {
  const l10n = getL10n();

  const countryCode = getCountryCode(headers());
  if (countryCode !== "us") {
    redirect("/redesign/user/dashboard");
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    return redirect("/");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const onerepProfileId = result[0]["onerep_profile_id"];

  if (typeof onerepProfileId === "number") {
    const scanData = await getLatestOnerepScanResults(onerepProfileId);
    if (scanData.scan !== null) {
      // If the user already has done a scan, let them view their results:
      return redirect(
        "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers"
      );
    }
  }

  return (
    <div className={styles.contentWrapper}>
      <Image className={styles.cityScape} src={ImageCityScape} alt="" />
      <div className={styles.content}>
        <h3>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-headline"
          )}
        </h3>
        <p>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-content-p1",
            {
              data_broker_count: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </p>
        <p>
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-content-p2"
          )}
          <a href="#">
            {l10n.getString(
              "fix-flow-data-broker-profiles-start-free-scan-link-learn-more"
            )}
          </a>
        </p>
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          variant="primary"
          href={
            "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers"
          }
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-button-start-scan"
          )}
        </Button>
        <Button
          variant="secondary"
          href={"/redesign/user/dashboard/fix/high-risk-data-breaches"}
        >
          {l10n.getString(
            "fix-flow-data-broker-profiles-start-free-scan-button-skip"
          )}
        </Button>
      </div>
    </div>
  );
}
