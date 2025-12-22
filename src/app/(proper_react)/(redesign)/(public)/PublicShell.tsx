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
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

export type Props = {
  children: ReactNode;
  l10n: ExtendedReactLocalization;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  experimentData: ExperimentData["Features"];
};

export const PublicShell = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <h1>
          <Link href="/">
            <Image
              className={styles.logo}
              src={MonitorLogo}
              alt={props.l10n.getString("public-nav-name")}
            />
          </Link>
        </h1>
        <SignInButton variant="secondary" />
      </nav>
      <div className={styles.content}>{props.children}</div>
      <Footer
        l10n={props.l10n}
        countryCode={props.countryCode}
        enabledFeatureFlags={props.enabledFeatureFlags}
      />
    </div>
  );
};
