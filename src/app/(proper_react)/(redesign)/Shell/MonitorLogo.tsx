/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import MonitorLogoImg from "../../images/monitor-logo.svg";
import { useL10n } from "../../../hooks/l10n";
import { usePathname } from "next/navigation";
import styles from "./MonitorLogo.module.scss";
import Link from "next/link";

export const MonitorLogo = () => {
  const l10n = useL10n();
  const pathname = usePathname();
  const isResolutionFlow =
    typeof pathname === "string" && pathname.includes("/fix/");
  return (
    <Link
      href="/user/dashboard"
      className={`${styles.homeLink} ${!isResolutionFlow ? styles.isOnDashboard : ""}`}
    >
      <Image
        src={MonitorLogoImg}
        alt={l10n.getString("main-nav-link-home-label")}
        width={170}
      />
    </Link>
  );
};
