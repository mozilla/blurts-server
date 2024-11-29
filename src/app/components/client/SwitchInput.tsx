/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useRef } from "react";
import {
  AriaSwitchProps,
  mergeProps,
  useFocusRing,
  useSwitch,
} from "react-aria";
import { useToggleState } from "react-stately";
import { VisuallyHidden } from "../server/VisuallyHidden";
import styles from "./SwitchInput.module.scss";

function SwitchInput(
  props: AriaSwitchProps & {
    className?: string;
  },
) {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      className={`${styles.switchInput} ${state.isSelected ? styles.isSelected : ""} ${props.className}`}
    >
      <VisuallyHidden>
        <input
          type="checkbox"
          {...mergeProps(inputProps, focusProps)}
          ref={ref}
          aria-checked={state.isSelected}
        />
      </VisuallyHidden>
      {props.children}
      <svg width={44} height={26} aria-hidden="true">
        <rect x={3} y={3} rx={10} width={38} height={20} />
        <circle cx={state.isSelected ? 31 : 13} cy={13} r={7} />
        {isFocusVisible && (
          <rect
            className={styles.focusRing}
            x={1}
            y={1}
            width={42}
            height={24}
            rx={12}
            fill="none"
            strokeWidth={2}
          />
        )}
      </svg>
    </label>
  );
}

export { SwitchInput };
