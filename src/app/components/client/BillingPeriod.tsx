/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, createContext, useContext, useRef } from "react";
import {
  RadioGroupProps,
  RadioGroupState,
  useRadioGroupState,
} from "react-stately";
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  mergeProps,
  useFocusRing,
  useRadio,
  useRadioGroup,
} from "react-aria";
import styles from "./BillingPeriod.module.scss";
import { useL10n } from "../../hooks/l10n";
import { VisuallyHidden } from "../server/VisuallyHidden";
import { ButtonColorThemes } from "./Button";

export type BillingPeriod = "yearly" | "monthly";

export type Props = {
  defaultValue?: BillingPeriod;
  buttonColorThemes?: ButtonColorThemes;
  onChange: (_selectedBillingPeriod: BillingPeriod) => void;
};

export const BillingPeriodToggle = (props: Props) => {
  const l10n = useL10n();

  return (
    <RadioGroup
      defaultValue={props.defaultValue ?? "yearly"}
      onChange={(newValue) => props.onChange(newValue as BillingPeriod)}
      aria-label={l10n.getString(
        "landing-premium-plans-table-billing-plus-period-label",
      )}
      orientation="horizontal"
      buttonColorThemes={props.buttonColorThemes}
    >
      <Radio value="yearly">
        {l10n.getString(
          "landing-premium-plans-table-billing-plus-period-yearly",
        )}
      </Radio>
      <Radio value="monthly">
        {l10n.getString(
          "landing-premium-plans-table-billing-plus-period-monthly",
        )}
      </Radio>
    </RadioGroup>
  );
};

const RadioContext = createContext<RadioGroupState | null>(null);

const RadioGroup = (
  props: RadioGroupProps &
    AriaRadioGroupProps & {
      children: ReactNode;
      buttonColorThemes?: ButtonColorThemes;
    },
) => {
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div
      {...radioGroupProps}
      className={`${styles.toggleContainer} ${styles[props.buttonColorThemes ?? "purple"]}`}
    >
      <RadioContext.Provider value={state}>
        {props.children}
      </RadioContext.Provider>
    </div>
  );
};

const Radio = (props: AriaRadioProps) => {
  const groupState = useContext(RadioContext)!;
  const radioRef = useRef<HTMLInputElement>(null);
  const { inputProps } = useRadio(props, groupState, radioRef);
  const { focusProps, isFocusVisible } = useFocusRing();
  const isSelected = groupState.selectedValue === props.value;

  return (
    <label
      className={`${styles.option} ${
        isSelected ? styles.isSelected : styles.isNotSelected
      } ${isFocusVisible ? styles.isFocused : styles.isBlurred}`}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={radioRef} />
      </VisuallyHidden>
      {props.children}
    </label>
  );
};
