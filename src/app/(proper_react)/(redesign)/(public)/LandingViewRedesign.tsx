/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { AccountDeletionNotification } from "./AccountDeletionNotification";
import styles from "./LandingViewRedesign.module.scss";

export type Props = {
  countryCode: string;
  eligibleForPremium: boolean;
  experimentData: ExperimentData["Features"];
  l10n: ExtendedReactLocalization;
  scanLimitReached: boolean;
};

export const View = (props: Props) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
        <h1>{props.l10n.getString("landing-all-hero-title")}</h1>
      </main>
    </>
  );
};
