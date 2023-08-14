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
  AriaPopoverProps,
  AriaRadioProps,
  Overlay,
  useButton,
  useDialog,
  useOverlayTrigger,
  usePopover,
  useRadio,
  useRadioGroup,
} from "react-aria";
import {
  OverlayTriggerState,
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

export type FilterState = {
  exposureType: "show-all-exposure-type" | "data-broker" | "data-breach";
  dateFound: "show-all-date-found" | "seven-days" | "thirty-days" | "last-year";
};

type ExposuresFilterProps = {
  initialFilterValues: FilterState;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterState>>;
};

export const ExposuresFilter = ({
  initialFilterValues,
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
  const filterDialogState = useOverlayTriggerState({});
  const filterBtnRef = useRef<HTMLButtonElement>(null);
  const { overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    filterDialogState
  );

  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const dismissButtonProps = useButton(
    { onPress: () => filterDialogState.close() },
    dismissButtonRef
  ).buttonProps;

  const [filterState, setFilterState] =
    useState<FilterState>(initialFilterValues);

  const handleRadioChange = (type: string, value: string) => {
    setFilterState((prevFilterState) => ({
      ...prevFilterState,
      [type]: value,
    }));
  };

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
          onClick={() => setFilterState(initialFilterValues)}
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
        onClick={() => {
          filterDialogState.close();
          setFilterState(filterState);
        }}
      >
        <CloseBtn
          alt={l10n.getString("modal-close-alt")}
          width="14"
          height="14"
        />
      </button>
    </form>
  );

  return (
    <>
      <div className={styles.filterHeaderWrapper}>
        <ul className={styles.filterHeaderList}>
          <li className={styles.exposureImageWrapper}>
            <button
              className={styles.filterBtn}
              ref={filterBtnRef}
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
              aria-label={l10n.getString("modal-open-alt")}
              {...explainerDialogTrigger.triggerProps}
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
        <Popover state={filterDialogState} triggerRef={filterBtnRef}>
          <FilterDialog>
            <div className={styles.exposuresFilterWrapper} {...overlayProps}>
              {ExposuresFilterContent}
            </div>
          </FilterDialog>
        </Popover>
      )}
    </>
  );
};

type PopoverProps = {
  children: React.ReactNode;
  state: OverlayTriggerState;
} & Omit<AriaPopoverProps, "popoverRef">;

const Popover = (props: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset: 10,
      crossOffset: 100,
      popoverRef,
    },
    props.state
  );

  return (
    <>
      {props.state.isOpen && (
        <Overlay>
          <div {...underlayProps} />
          <div
            {...popoverProps}
            ref={popoverRef}
            className={styles.filterPopOver}
          >
            {props.children}
          </div>
        </Overlay>
      )}
    </>
  );
};

type FilterDialogProps = AriaDialogProps & {
  children: ReactNode;
};
const FilterDialog = ({ children, ...otherProps }: FilterDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(otherProps, dialogRef);

  return (
    <div {...dialogProps} ref={dialogRef}>
      {children}
    </div>
  );
};

// from https://react-spectrum.adobe.com/react-aria/useRadioGroup.html
type FilterRadioGroupProps = RadioGroupProps & {
  type: "exposure-type" | "date-found" | "status";
  children: ReactNode;
};

const RadioContext = createContext<RadioGroupState | null>(null);

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

type RadioProps = {
  children: React.ReactNode;
};

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
