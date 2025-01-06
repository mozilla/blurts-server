/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";
import { ExtendedReactLocalization } from "../../../../functions/l10n";
import { AccountDeletionNotification } from "../AccountDeletionNotification";
import styles from "./LandingViewRedesign.module.scss";
import { Hero } from "./sections/Hero";
import { CtaBanner } from "./sections/CtaBanner";
import { InfoBlock } from "./sections/InfoBlock";

export type LandingPageProps = {
  countryCode: string;
  eligibleForPremium: boolean;
  experimentData: ExperimentData["Features"];
  l10n: ExtendedReactLocalization;
  scanLimitReached: boolean;
};

export const View = (props: LandingPageProps) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
        <Hero {...props} />
        <CtaBanner {...props} />
        <InfoBlock {...props} />
      </main>
    </>
  );
};
