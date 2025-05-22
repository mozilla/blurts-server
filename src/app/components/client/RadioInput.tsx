/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Context, useContext, useRef } from "react";
import { AriaRadioProps, useFocusRing, useRadio } from "react-aria";
import { RadioGroupState } from "react-stately";
import { VisuallyHidden } from "../server/VisuallyHidden";
import styles from "./RadioInput.module.scss";
import { CheckIcon } from "../server/Icons";

const RadioInput = (
  props: AriaRadioProps & {
    value: string;
    radioContext: Context<RadioGroupState | null>;
  },
) => {
  const state = useContext(props.radioContext);
  const { children } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputProps, isSelected } = useRadio(props, state!, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const strokeWidth = 2;

  return (
    <label>
      <VisuallyHidden>
        <input
          type="checkbox"
          {...inputProps}
          {...focusProps}
          ref={inputRef}
          aria-checked={isSelected}
        />
      </VisuallyHidden>
      {children}
      <svg
        aria-hidden="true"
        width={28}
        height={28}
        className={`${styles.radioButton} ${!isSelected ? styles.isSelected : ""}`}
      >
        <rect
          x={4}
          y={4}
          rx={4}
          height={20}
          width={20}
          fill="none"
          strokeWidth={strokeWidth}
        />
        {isSelected && <CheckIcon alt="" width={20} height={20} x={4} y={5} />}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            rx={6}
            height={26}
            width={26}
            fill="none"
            className={styles.focusRing}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
    </label>
  );
};

export { RadioInput };
