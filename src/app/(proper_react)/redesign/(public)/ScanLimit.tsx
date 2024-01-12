/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./LandingView.module.scss";
import { useL10n } from "../../../hooks/l10n";
import { Button } from "../../../components/client/Button";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { CONST_URL_WAITLIST } from "../../../../constants";

export const ScanLimit = () => {
  const l10n = useL10n();

  return (
    <div className={styles.scanLimitWrapper}>
      <div className={styles.info}>
        <b>{l10n.getString("landing-premium-max-scan-at-capacity")}</b>
        <p>{l10n.getString("landing-premium-max-scan")}</p>
      </div>
      <WaitlistCta />
    </div>
  );
};

export const WaitlistCta = () => {
  const l10n = useL10n();
  const record = useTelemetry();

  return (
    <Button
      className={styles.waitlistCta}
      variant="primary"
      href={CONST_URL_WAITLIST}
      onPress={() => {
        record("ctaButton", "click", {
          button_id: "intent_to_join_waitlist_header",
        });
      }}
    >
      {l10n.getString("landing-premium-max-scan-waitlist")}
    </Button>
  );
};
