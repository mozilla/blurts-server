/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactElement, useEffect, useRef } from "react";
import { useComboBox } from "react-aria";
import { useComboBoxState, ComboBoxStateOptions } from "react-stately";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";
import inputFieldStyles from "./InputField.module.scss";
import comboBoxStyles from "./ComboBox.module.scss";
import { ErrorIcon } from "../server/Icons";
import { useL10n } from "../../hooks/l10n";

interface ComboBoxProps extends ComboBoxStateOptions<object> {
  items: Array<object>;
  listPlaceholder?: ReactElement;
}

function ComboBox(props: ComboBoxProps) {
  const { errorMessage, isInvalid, isRequired, label, listPlaceholder } = props;
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);
  const state = useComboBoxState({ ...props });
  const { inputProps, listBoxProps, labelProps, errorMessageProps } =
    useComboBox(
      {
        ...props,
        inputRef,
        listBoxRef,
        popoverRef,
      },
      state,
    );
  const l10n = useL10n();

  useEffect(() => {
    /* c8 ignore next 5 */
    // This does get hit by unit tests, but for some reason, since the Node
    // 20.10 upgrade, it (and this comment) no longer gets marked as such:
    if (inputProps.value === "") {
      state.close();
    }
  }, [inputProps.value, state]);

  return (
    <>
      <div className={inputFieldStyles.comboBox}>
        <label {...labelProps} className={inputFieldStyles.inputLabel}>
          {label}
          {isRequired ? (
            <span aria-hidden="true">*</span>
          ) : (
            /* c8 ignore next 4 */
            // This does get hit by unit tests, but for some reason, since the
            // Node 20.10 upgrade, it (and this comment) no longer gets marked
            // as such:
            ""
          )}
        </label>
        <input
          {...inputProps}
          ref={inputRef}
          className={`${inputFieldStyles.inputField} ${
            !inputProps.value
              ? /* c8 ignore next 4 */
                // This does get hit by unit tests, but for some reason, since
                // the Node 20.10 upgrade, it (and this comment) no longer gets
                // marked as such:
                inputFieldStyles.noValue
              : ""
          } ${isInvalid ? /* c8 ignore next */ inputFieldStyles.hasError : ""}`}
        />
        {isInvalid && typeof errorMessage === "string" && (
          <div {...errorMessageProps} className={inputFieldStyles.inputMessage}>
            <ErrorIcon
              alt={l10n.getString("onboarding-enter-details-input-error-alt")}
            />
            {errorMessage}
          </div>
        )}
      </div>
      {state.isOpen && (
        <Popover
          offset={8}
          popoverRef={popoverRef}
          state={state}
          triggerRef={inputRef}
        >
          <div className={comboBoxStyles.popoverList}>
            <ListBox
              {...listBoxProps}
              listBoxRef={listBoxRef}
              listPlaceholder={listPlaceholder}
              parentRef={inputRef}
              state={state}
            />
          </div>
        </Popover>
      )}
    </>
  );
}

export { ComboBox };
