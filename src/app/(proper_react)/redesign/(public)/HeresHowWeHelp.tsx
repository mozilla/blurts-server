/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { signIn } from "next-auth/react";
import { Button } from "../../../components/client/Button";
import { useL10n } from "../../../hooks/l10n";
import styles from "./LandingView.module.scss";
import { CheckIcon } from "../../../components/server/Icons";
import { useTelemetry } from "../../../hooks/useTelemetry";

export const HeresHowWeHelp = () => {
  const l10n = useL10n();
  const record = useTelemetry();

  return (
    <div className={styles.heresHowWeHelpWrapper}>
      <h2>{l10n.getString("landing-all-help-protect-you")}</h2>
      <p className={styles.description}>
        {l10n.getString("landing-all-help-protect-you-description")}
      </p>
      <ul>
        <li>
          <CheckIcon alt="" />
          {l10n.getString("landing-all-help-protect-you-feature-one")}
        </li>
        <li>
          <CheckIcon alt="" />
          {l10n.getString("landing-all-help-protect-you-feature-two")}
        </li>
        <li>
          <CheckIcon alt="" />
          {l10n.getString("landing-all-help-protect-you-feature-three")}
        </li>
      </ul>

      <Button
        className={styles.heresHowWeHelpCta}
        variant="primary"
        onPress={() => {
          void signIn("fxa");
          record("ctaButton", "click", {
            button_id: "clicked_get_scan_fifth",
          });
        }}
      >
        {l10n.getString("landing-all-help-protect-you-cta")}
      </Button>
    </div>
  );
};
