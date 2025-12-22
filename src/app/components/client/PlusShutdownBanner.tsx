/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import styles from "./PlusShutdownBanner.module.scss";
import { Button } from "./Button";
import { CloseBtn } from "../server/Icons";
import { useL10n } from "../../hooks/l10n";
import { useLocalDismissal } from "../../hooks/useLocalDismissal";
import { useHasRenderedClientSide } from "../../hooks/useHasRenderedClientSide";

type Props = {
  countryCode: string;
};

export const PlusShutdownBanner = (props: Props) => {
  const l10n = useL10n();

  const hasRenderedClientSide = useHasRenderedClientSide();
  const localDismissal = useLocalDismissal(`shutdown-banner-shutdown`);

  if (
    !hasRenderedClientSide ||
    props.countryCode !== "us" ||
    localDismissal.isDismissed
  ) {
    return null;
  }

  const heading = l10n.getString("plus-shutdown-banner-plus-shutdown-heading");
  const subheading = l10n.getString(
    "plus-shutdown-banner-plus-shutdown-subheading",
  );

  return (
    <aside className={styles.wrapper}>
      <div className={styles.text}>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      <div className={`${styles.buttons} `}>
        <Button
          variant="primary"
          href="https://support.mozilla.org/en-US/kb/monitor-plus-shutting-down"
        >
          {l10n.getString("plus-shutdown-banner-button-learn-more")}
        </Button>
        <Button
          className={styles.button}
          variant="tertiary"
          onClick={() => {
            localDismissal.dismiss();
          }}
        >
          {l10n.getString("plus-shutdown-banner-button-close")}
        </Button>
      </div>
      <button
        className={styles.closeButton}
        onClick={() => {
          localDismissal.dismiss();
        }}
      >
        <CloseBtn
          alt={l10n.getString("plus-shutdown-banner-button-close")}
          width="14"
          height="14"
        />
      </button>
    </aside>
  );
};
