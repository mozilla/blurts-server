/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExperimentData } from "../../../../../telemetry/generated/nimbus/experiments";
import { ExtendedReactLocalization } from "../../../../functions/l10n";
import { AccountDeletionNotification } from "../AccountDeletionNotification";
import styles from "./LandingViewRedesign.module.scss";
import { Hero } from "./components/Hero";
import { CtaBanner } from "./components/CtaBanner";
import { InfoBlock } from "./components/InfoBlock";
import { LogoBlock } from "./components/LogoBlock";
import { Faq } from "./components/Faq";
import { CtaInputBanner } from "./components/CtaInputBanner";
import { PricingPlans } from "./components/PricingPlans";

export type LandingPageProps = {
  countryCode: string;
  experimentData: ExperimentData["Features"];
  l10n: ExtendedReactLocalization;
  eligibleForPremium: boolean;
  scanLimitReached: boolean;
};

export const View = (props: LandingPageProps) => {
  return (
    <>
      <AccountDeletionNotification />
      <main className={styles.wrapper}>
        <Hero {...props} />
        <section>
          <CtaBanner {...props} />
        </section>
        <section className={styles.hasBackground}>
          <InfoBlock {...props} />
        </section>
        <section>
          <PricingPlans {...props} />
        </section>
        <section className={styles.hasBackground}>
          <LogoBlock l10n={props.l10n} />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <CtaInputBanner {...props} />
        </section>
      </main>
    </>
  );
};
