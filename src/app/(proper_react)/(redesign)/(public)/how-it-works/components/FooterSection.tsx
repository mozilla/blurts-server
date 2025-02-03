/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "../HowItWorksView.module.scss";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import { SignUpForm } from "../../SignUpForm";

export type Props = {
  l10n: ExtendedReactLocalization;
  eligibleForPremium: boolean;
  scanLimitReached: boolean;
};

export const FooterSection = (props: Props) => {
  const { l10n, eligibleForPremium, scanLimitReached } = props;
  return (
    <footer className={styles.footerSection}>
      <h2 className={styles.footerSectionCTA}>
        {l10n.getString("how-it-works-page-footersection-title")}
      </h2>
      <SignUpForm
        eligibleForPremium={eligibleForPremium}
        signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
        eventId={{
          cta: "clicked_get_scan",
          field: "entered_email_address",
        }}
        scanLimitReached={scanLimitReached}
        placeholder={l10n.getString(
          "how-it-works-page-footersection-input-placeholder",
        )}
      />
    </footer>
  );
};
