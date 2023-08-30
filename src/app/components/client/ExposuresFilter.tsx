/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./ExposuresFilter.module.scss";
import { CloseBtn, FilterIcon, QuestionMarkCircle } from "../server/Icons";
import React, {
  FormEventHandler,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  AriaDialogProps,
  AriaRadioProps,
  useButton,
  useDialog,
  useOverlayTrigger,
  useRadio,
  useRadioGroup,
} from "react-aria";
import {
  RadioGroupProps,
  RadioGroupState,
  useOverlayTriggerState,
  useRadioGroupState,
} from "react-stately";
import { useL10n } from "../../hooks/l10n";
import { Button } from "../server/Button";
import NoteIcon from "./assets/note.svg";
import CalendarIcon from "./assets/calendar.svg";
import { ExposuresFilterExplainer } from "./ExposuresFilterExplainer";
import { Popover } from "./Popover";

export type FilterState = {
  exposureType: "show-all-exposure-type" | "data-broker" | "data-breach";
  dateFound: "show-all-date-found" | "seven-days" | "thirty-days" | "last-year";
};

type ExposuresFilterProps = {
  initialFilterValues: FilterState;
  filterValues: FilterState;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterState>>;
};

export const ExposuresFilter = ({
  initialFilterValues,
  filterValues,
  setFilterValues,
}: ExposuresFilterProps) => {
  const l10n = useL10n();

  const [explainerDialog, setExplainerDialog] = useState<ReactElement>();

  // Explainer dialog
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  const openExplainerDialog = (content: "exposure" | "status") => {
    explainerDialogState.open();
    const dialogContent = (
      <ExposuresFilterExplainer
        content={content}
        explainerDialogProps={explainerDialogTrigger}
        explainerDialogState={explainerDialogState}
      />
    );
    setExplainerDialog(dialogContent);
  };

  // Filter Dialog
  const [filterState, setFilterState] = useState<FilterState>(filterValues);
  const popoverRef = useRef(null);
  // TODO: Add unit test when changing this code:
  /* c8 ignore next 6 */
  const handleRadioChange = (type: string, value: string) => {
    setFilterState((prevFilterState) => ({
      ...prevFilterState,
      [type]: value,
    }));
  };
  const filterDialogState = useOverlayTriggerState({
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 3 */
    onOpenChange: () => {
      setFilterState(filterValues);
    },
  });
  const filterBtnRef = useRef<HTMLButtonElement>(null);
  const { overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    filterDialogState
  );

  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const dismissButtonProps = useButton(
    {
      // TODO: Add unit test when changing this code:
      /* c8 ignore next 3 */
      onPress: () => {
        filterDialogState.close();
      },
    },
    dismissButtonRef
  ).buttonProps;

  // TODO: Add unit test when changing this code:
  /* c8 ignore next 6 */
  const handleSaveButtonClick: FormEventHandler = (event) => {
    event.preventDefault();

    setFilterValues(filterState);
    filterDialogState.close();
  };

  const ExposuresFilterContent = (
    <form onSubmit={handleSaveButtonClick}>
      <div className={styles.exposuresFilterRadioButtons}>
        <FilterRadioGroup
          type="exposure-type"
          value={filterState.exposureType}
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onChange={(value) => handleRadioChange("exposureType", value)}
          label={l10n.getString("dashboard-exposures-filter-exposure-type")}
        >
          <Radio value="show-all-exposure-type">
            {l10n.getString("dashboard-exposures-filter-show-all")}
          </Radio>
          <Radio value="data-broker">
            {l10n.getString(
              "dashboard-exposures-filter-exposure-type-info-for-sale"
            )}
          </Radio>
          <Radio value="data-breach">
            {l10n.getString(
              "dashboard-exposures-filter-exposure-type-data-breach"
            )}
          </Radio>
        </FilterRadioGroup>
        <FilterRadioGroup
          value={filterState.dateFound}
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onChange={(value) => handleRadioChange("dateFound", value)}
          type="date-found"
          label={l10n.getString("dashboard-exposures-filter-date-found")}
        >
          <Radio value="show-all-date-found">
            {l10n.getString("dashboard-exposures-filter-show-all")}
          </Radio>
          <Radio value="seven-days">
            {l10n.getString(
              "dashboard-exposures-filter-date-found-last-seven-days"
            )}
          </Radio>
          <Radio value="thirty-days">
            {l10n.getString(
              "dashboard-exposures-filter-date-found-last-thirty-days"
            )}
          </Radio>
          <Radio value="last-year">
            {l10n.getString("dashboard-exposures-filter-date-found-last-year")}
          </Radio>
        </FilterRadioGroup>
      </div>
      <div className={styles.filterControls}>
        <Button
          type="button"
          small
          variant="secondary"
          // TODO: Add unit test when changing this code:
          /* c8 ignore next 4 */
          onClick={() => {
            setFilterState(initialFilterValues);
            setFilterValues(initialFilterValues);
          }}
        >
          {l10n.getString("dashboard-exposures-filter-reset")}
        </Button>
        <Button type="submit" small variant="primary">
          {l10n.getString("dashboard-exposures-filter-show-results")}
        </Button>
      </div>
      <button
        {...dismissButtonProps}
        ref={dismissButtonRef}
        type="button"
        className={styles.dismissButton}
      >
        <CloseBtn
          alt={l10n.getString("modal-close-alt")}
          width="14"
          height="14"
        />
      </button>
    </form>
  );

  const exposureTypeExplainerTriggerRef = useRef<HTMLButtonElement>(null);
  const exposureTypeExplainerTriggerProps = useButton(
    explainerDialogTrigger.triggerProps,
    exposureTypeExplainerTriggerRef
  ).buttonProps;

  return (
    <>
      <div className={styles.filterHeaderWrapper}>
        <ul className={styles.filterHeaderList}>
          <li className={styles.exposureImageWrapper}>
            <button
              className={styles.filterBtn}
              ref={filterBtnRef}
              // TODO: Add unit test when changing this code:
              /* c8 ignore next 3 */
              onClick={() => {
                filterDialogState.open();
              }}
              aria-label={l10n.getString("popover-open-filter-settings-alt")}
            >
              <FilterIcon width="16" height="16" alt={""} />
              {l10n.getString("dashboard-exposures-filter")}
            </button>
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-company")}
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-exposure-type")}
            <button
              ref={exposureTypeExplainerTriggerRef}
              aria-label={l10n.getString("modal-open-alt")}
              {...exposureTypeExplainerTriggerProps}
              onClick={() => openExplainerDialog("exposure")}
            >
              <QuestionMarkCircle
                width="15"
                height="15"
                alt={l10n.getString("modal-open-alt")}
              />
            </button>
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-date-found")}
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-status")}
            <button
              aria-label={l10n.getString("modal-open-alt")}
              onClick={() => openExplainerDialog("status")}
            >
              <QuestionMarkCircle
                width="15"
                height="15"
                alt={l10n.getString("modal-open-alt")}
              />
            </button>
          </li>
        </ul>
        <div className={styles.rightSpace}></div>
      </div>
      {explainerDialogState.isOpen && explainerDialog}
      {filterDialogState.isOpen && (
        <Popover
          crossOffset={100}
          offset={10}
          popoverRef={popoverRef}
          state={filterDialogState}
          triggerRef={filterBtnRef}
        >
          <FilterDialog {...overlayProps}>
            <div className={styles.exposuresFilterWrapper} ref={popoverRef}>
              {ExposuresFilterContent}
            </div>
          </FilterDialog>
        </Popover>
      )}
    </>
  );
};

type FilterDialogProps = AriaDialogProps & {
  children: ReactNode;
};
// TODO: Add unit test when changing this code:
/* c8 ignore start */
const FilterDialog = ({ children, ...otherProps }: FilterDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(otherProps, dialogRef);

  return (
    <div {...dialogProps} className={styles.filterDialog} ref={dialogRef}>
      {children}
    </div>
  );
};
/* c8 ignore stop */

// from https://react-spectrum.adobe.com/react-aria/useRadioGroup.html
type FilterRadioGroupProps = RadioGroupProps & {
  type: "exposure-type" | "date-found" | "status";
  children: ReactNode;
};

const RadioContext = createContext<RadioGroupState | null>(null);

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function FilterRadioGroup(props: FilterRadioGroupProps) {
  const { type, children, ...otherProps } = props;
  const state = useRadioGroupState(otherProps);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div className={styles.exposuresFilterCategory} {...radioGroupProps}>
      <span className={styles.exposuresFilterLabel} {...labelProps}>
        <Image
          src={type === "exposure-type" ? NoteIcon : CalendarIcon}
          width="15"
          height="15"
          alt=""
        />
        {otherProps.label}
      </span>
      <div className={styles.radioButtonsWrapper}>
        <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      </div>
    </div>
  );
}
/* c8 ignore stop */

type RadioProps = {
  children: React.ReactNode;
};

// TODO: Add unit test when changing this code:
/* c8 ignore start */
function Radio(props: RadioProps & AriaRadioProps) {
  const { children } = props;
  const radioGroupState = useContext(RadioContext);
  const ref = useRef<HTMLInputElement>(null);
  // TypeScript can't verify that this element is always contained inside a
  // <FilterRadioGroup>, and thus that `radioGroupState` is not null, so we have
  // to tell it ourselves:
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { inputProps } = useRadio(props, radioGroupState!, ref);

  return (
    <label className={styles.radioItem}>
      <input {...inputProps} ref={ref} type="radio" />
      {children}
    </label>
  );
}
/* c8 ignore stop */
