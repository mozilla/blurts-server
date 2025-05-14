/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PublicShell.module.scss";
import MonitorLogo from "../../images/monitor-logo.svg";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { SignInButton } from "../../../components/client/SignInButton";
import { Footer } from "../Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MobileShell } from "../MobileShell";
import {
  getPremiumSubscriptionUrl,
  getSubscriptionBillingAmount,
} from "../../../functions/server/getPremiumSubscriptionInfo";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { TopNavBar } from "./LandingViewRedesign/components/TopNavBar";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

export type Props = {
  children: ReactNode;
  l10n: ExtendedReactLocalization;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
};

const PublicMobileShell = (
  props: Props & {
    hasLandingPageRedesign: boolean;
  },
) => {
  if (props.hasLandingPageRedesign) {
    return (
      <MobileShell
        countryCode={props.countryCode}
        enabledFeatureFlags={props.enabledFeatureFlags}
        experimentData={props.experimentData}
        fxaSettingsUrl={process.env.FXA_SETTINGS_URL!}
        monthlySubscriptionUrl={getPremiumSubscriptionUrl({
          type: "monthly",
          enabledFeatureFlags: props.enabledFeatureFlags,
        })}
        session={null}
        subscriptionBillingAmount={getSubscriptionBillingAmount()}
        yearlySubscriptionUrl={getPremiumSubscriptionUrl({
          type: "yearly",
          enabledFeatureFlags: props.enabledFeatureFlags,
        })}
      >
        {props.children}
      </MobileShell>
    );
  }

  return props.children;
};

export const PublicShell = (props: Props) => {
  const hasLandingPageRedesign =
    props.enabledFeatureFlags.includes("LandingPageRedesign") &&
    props.experimentData["landing-page-redesign-plus-eligible-experiment"]
      .enabled &&
    props.experimentData["landing-page-redesign-plus-eligible-experiment"]
      .variant === "redesign";

  return (
    <PublicMobileShell
      {...props}
      hasLandingPageRedesign={hasLandingPageRedesign}
    >
      <div className={styles.wrapper}>
        <ToastContainer
          toastClassName={styles.toastBody}
          position="top-center"
          theme="colored"
          autoClose={false}
        />
        <nav
          className={`${styles.nav} ${hasLandingPageRedesign ? styles.navDesktop : ""}`}
        >
          <h1>
            <Link href="/">
              <Image
                className={styles.logo}
                src={MonitorLogo}
                alt={props.l10n.getString("public-nav-name")}
              />
            </Link>
          </h1>
          {hasLandingPageRedesign && <TopNavBar />}
          <SignInButton variant="secondary" />
        </nav>
        <div className={styles.content}>{props.children}</div>
        <Footer l10n={props.l10n} countryCode={props.countryCode} />
      </div>
    </PublicMobileShell>
  );
};
