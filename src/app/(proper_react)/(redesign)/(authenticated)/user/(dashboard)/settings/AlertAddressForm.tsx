/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  AriaRadioProps,
  useFocusRing,
  useRadio,
  useRadioGroup,
} from "react-aria";
import { RadioGroupState, useRadioGroupState } from "react-stately";
import styles from "./AlertAddressForm.module.scss";
import { useL10n } from "../../../../../../hooks/l10n";
import { createContext, useContext, useRef } from "react";
import type { EmailUpdateCommOptionRequest } from "../../../../../../api/v1/user/update-comm-option/route";
import { VisuallyHidden } from "../../../../../../components/server/VisuallyHidden";
import { useSession } from "next-auth/react";

export type AlertAddress = "primary" | "affected";

export type Props = {
  defaultSelected: AlertAddress;
};

const AlertAddressContext = createContext<RadioGroupState | null>(null);

export const AlertAddressForm = (props: Props) => {
  const l10n = useL10n();
  const session = useSession();
  const state = useRadioGroupState({
    defaultValue: props.defaultSelected,
    onChange: (newValue) => {
      const chosenOption = newValue as AlertAddress;
      const body: EmailUpdateCommOptionRequest = {
        communicationOption: chosenOption === "primary" ? "1" : "0",
      };
      void fetch("/api/v1/user/update-comm-option", {
        method: "POST",
        body: JSON.stringify(body),
      }).then(() => {
        // Fetch a new token with up-to-date subscriber info - specifically,
        // with this setting updated.
        void session.update();
      });
    },
  });
  const { radioGroupProps, labelProps } = useRadioGroup(
    { label: l10n.getString("settings-alert-preferences-title") },
    state,
  );

  return (
    <div {...radioGroupProps} className={styles.wrapper}>
      <h3 {...labelProps}>
        {l10n.getString("settings-alert-preferences-title")}
      </h3>
      <div className={styles.radioGroup}>
        <AlertAddressContext.Provider value={state}>
          <AlertAddressRadio value="affected">
            {l10n.getString("settings-alert-preferences-option-one")}
          </AlertAddressRadio>
          <AlertAddressRadio value="primary">
            {l10n.getString("settings-alert-preferences-option-two")}
          </AlertAddressRadio>
        </AlertAddressContext.Provider>
      </div>
    </div>
  );
};

const AlertAddressRadio = (props: AriaRadioProps & { value: AlertAddress }) => {
  const { children } = props;
  const state = useContext(AlertAddressContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputProps, isSelected } = useRadio(props, state!, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const strokeWidth = 2;

  return (
    <label>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          className={`${styles.radioButton} ${
            isSelected ? styles.isSelected : styles.isUnselected
          }`}
          strokeWidth={strokeWidth}
        />
        {isSelected && (
          <circle
            cx={12}
            cy={12}
            r={4}
            className={styles.selectedFill}
            strokeWidth={2}
          />
        )}
        {isFocusVisible && (
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            className={styles.focusRing}
            strokeWidth={2}
          />
        )}
      </svg>
      {children}
    </label>
  );
};
