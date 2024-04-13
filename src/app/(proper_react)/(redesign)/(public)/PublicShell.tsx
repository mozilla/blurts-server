/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PublicShell.module.scss";
import MonitorLogo from "../../images/monitor-logo.svg";
import { ExtendedReactLocalization } from "../../../hooks/l10n";
import { SignInButton } from "../../../components/client/SignInButton";
import { Footer } from "../Footer";

export type Props = {
  children: ReactNode;
  l10n: ExtendedReactLocalization;
};

export const PublicShell = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <header>
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
          <SignInButton />
        </nav>
      </header>
      <div className={styles.content}>{props.children}</div>
      <Footer l10n={props.l10n} />
    </div>
  );
};
