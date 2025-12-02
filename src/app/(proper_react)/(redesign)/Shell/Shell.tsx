/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { Session } from "next-auth";
import { ShellRedesign } from "./ShellRedesign";
import { SubscriptionCheck } from "../../../components/client/SubscriptionCheck";
import { ExtendedReactLocalization } from "../../../functions/l10n";
import { FeatureFlagName } from "../../../../db/tables/featureFlags";
import styles from "./Shell.module.scss";
import { UserAnnouncementWithDetails } from "../../../../db/tables/user_announcements";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { config } from "../../../../config";

export type Props = {
  l10n: ExtendedReactLocalization;
  session: Session;
  children: ReactNode;
  nonce: string;
  countryCode: string;
  enabledFeatureFlags: FeatureFlagName[];
  announcements: UserAnnouncementWithDetails[] | null;
  hideSidebar?: boolean;
};

export const Shell = (props: Props) => {
  return (
    <>
      {/* This component ensures that the client session is synced with the
      server session and is not being mounted when running unit tests. */}
      {/* c8 ignore next */}
      {config.nodeEnv !== "test" && <SubscriptionCheck />}
      <ToastContainer position="top-center" theme="colored" autoClose={false} />
      <ShellRedesign
        countryCode={props.countryCode}
        session={props.session}
        enabledFeatureFlags={props.enabledFeatureFlags}
        l10n={props.l10n}
        announcements={props.announcements}
        fxaSettingsUrl={config.fxaSettingsUrl}
      >
        <div className={styles.page}>{props.children}</div>
      </ShellRedesign>
    </>
  );
};
