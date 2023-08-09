/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import ShieldIcon from "./assets/shield-icon.svg";
import styles from "./FalseDoorTest.module.scss";
import { CloseBtn } from "../../../components/server/Icons";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useL10n } from "../../../hooks/l10n";

export const HandleFalseDoorTest = () => {
  const [cookies, setCookie] = useCookies(["falseDoorDismissed"]);
  const [shouldShowFalseDoor, setShouldShowFalseDoor] = useState(false);

  const handleDismiss = () => {
    setCookie("falseDoorDismissed", "true", { path: "/" });
  };

  useEffect(() => {
    setShouldShowFalseDoor(!cookies.falseDoorDismissed);
  }, [cookies.falseDoorDismissed]);

  return (
    <>{shouldShowFalseDoor && <FalseDoorTest onDismiss={handleDismiss} />}</>
  );
};

type FalseDoorTestProps = {
  onDismiss?: () => void;
};
export const FalseDoorTest = (props: FalseDoorTestProps) => {
  const l10n = useL10n();

  return (
    <div className={styles.falseDoorTestWrapper}>
      <div className={styles.content}>
        <Image src={ShieldIcon} alt="" className={styles.logo} />
        <p>
          No one should be able to buy your personal information.
          <br />
          Automatically remove data from sites trying to sell it.
        </p>
        <button className={styles.cta}>Count me in</button>
      </div>
      <button className={styles.dismiss} onClick={props.onDismiss}>
        <CloseBtn
          alt={l10n.getString("modal-close-alt")}
          width="15"
          height="15"
        />
      </button>
    </div>
  );
};
