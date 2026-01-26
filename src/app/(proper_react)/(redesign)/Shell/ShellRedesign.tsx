/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { Session } from "next-auth";
import { MobileShell } from "../MobileShell";
import { Footer } from "../Footer";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import styles from "./ShellRedesign.module.scss";
import { NavbarList } from "./ShellNavbarList";
import { UserAnnouncementWithDetails } from "../../../../db/tables/user_announcements";
import { MonitorLogo } from "./MonitorLogo";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  children: ReactNode;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  announcements: UserAnnouncementWithDetails[] | null;
  hideSidebar?: boolean;
  fxaSettingsUrl: string;
};

export const ShellRedesign = (props: Props) => {
  return (
    <MobileShell
      countryCode={props.countryCode}
      session={props.session}
      fxaSettingsUrl={props.fxaSettingsUrl}
      enabledFeatureFlags={props.enabledFeatureFlags}
      announcements={props.announcements}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <nav
            className={styles.mainMenu}
            aria-label={props.l10n.getString("main-nav-label")}
          >
            <MonitorLogo />
            {!props.hideSidebar && (
              <NavbarList
                countryCode={props.countryCode}
                enabledFeatureFlags={props.enabledFeatureFlags}
              />
            )}
          </nav>
          <div className={styles.page}>{props.children}</div>
        </div>
        <Footer
          l10n={props.l10n}
          session={props.session}
          countryCode={props.countryCode}
          enabledFeatureFlags={props.enabledFeatureFlags}
        />
      </div>
    </MobileShell>
  );
};
