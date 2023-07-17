/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./ExposuresFilter.module.scss";
import { CloseBtn, FilterIcon, QuestionMarkCircle } from "../server/Icons";
import React, { ReactElement, useContext, useRef, useState } from "react";
import Image from "next/image";
import ModalImage from "../../components/client/assets/modal-default-img.svg";
import {
  AriaPopoverProps,
  AriaRadioProps,
  Overlay,
  useButton,
  useOverlayTrigger,
  usePopover,
  useRadio,
  useRadioGroup,
} from "react-aria";
import {
  OverlayTriggerState,
  RadioGroupState,
  useOverlayTriggerState,
  useRadioGroupState,
} from "react-stately";
import { useL10n } from "../../hooks/l10n";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../server/Button";
import NoteIcon from "./assets/note.svg";
import CalendarIcon from "./assets/calendar.svg";

export type FilterState = {
  exposureType: string;
  dateFound: string;
  status: string;
};

type ExposuresFilterProps = {
  setFilterValues: React.Dispatch<React.SetStateAction<FilterState>>;
};

export const ExposuresFilter = ({ setFilterValues }: ExposuresFilterProps) => {
  const l10n = useL10n();
  const [explainerTitle, setExplainerTitle] = useState<string>("");
  const [explainerContent, setExplainerContent] = useState<
    ReactElement | string
  >("");

  const showExplainerContentExposureType = () => {
    setExplainerTitle(l10n.getString("modal-exposure-type-title"));
    setExplainerContent(explainerContentExposureType);
    explainerDialogState.open();
  };

  const showExplainerContentStatus = () => {
    setExplainerTitle(l10n.getString("modal-exposure-status-title"));
    setExplainerContent(explainerContentStatus);
    explainerDialogState.open();
  };

  // Explainer dialog
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  // Filter Dialog
  const filterDialogState = useOverlayTriggerState({});
  const filterBtnRef = useRef<HTMLButtonElement>(null);
  const { overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    filterDialogState
  );

  const explainerContentExposureType = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString("modal-exposure-type-description", {
          data_broker_sites_total_num: 190,
        })}
      </p>
      <br />
      <ol>
        <li>
          {l10n.getFragment("modal-exposure-type-data-breach", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-type-data-broker-part-one", {
            elems: { b: <strong /> },
          })}
          <br />
          {l10n.getString("modal-exposure-type-data-broker-part-two")}
        </li>
      </ol>
      <Button variant="primary" onClick={() => explainerDialogState.close()}>
        {l10n.getString("modal-cta-ok")}
      </Button>
    </div>
  );

  const explainerContentStatus = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString("modal-exposure-status-description", {
          data_broker_sites_total_num: 190,
        })}
      </p>
      <br />
      <ul>
        <li>
          {l10n.getFragment("modal-exposure-status-action-needed", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-status-in-progress", {
            elems: { b: <strong /> },
          })}
        </li>
        <li>
          {l10n.getFragment("modal-exposure-status-fixed", {
            elems: { b: <strong /> },
          })}
        </li>
      </ul>
      <Button variant="primary" onClick={() => explainerDialogState.close()}>
        {l10n.getString("modal-cta-ok")}
      </Button>
    </div>
  );

  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const dismissButtonProps = useButton(
    { onPress: () => filterDialogState.close() },
    dismissButtonRef
  ).buttonProps;

  const [filterState, setFilterState] = useState<FilterState>({
    exposureType: "",
    dateFound: "",
    status: "",
  });

  const checkEmptyFilterState =
    filterState.exposureType === "" &&
    filterState.dateFound === "" &&
    filterState.status === "";

  const handleRadioChange = (type: string, value: string) => {
    setFilterState((prevFilterState) => ({
      ...prevFilterState,
      [type]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    setFilterValues(filterState);
  };

  const ExposuresFilterContent = (
    <>
      <div className={styles.exposuresFilterRadioButtons}>
        <RadioGroup
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
        </RadioGroup>
        <RadioGroup
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
        </RadioGroup>
        <RadioGroup
          value={filterState.status}
          onChange={(value) => handleRadioChange("status", value)}
          type="status"
          label={l10n.getString("dashboard-exposures-filter-status")}
        >
          <Radio value="show-all-status">
            {l10n.getString("dashboard-exposures-filter-show-all")}
          </Radio>
          <Radio value="action-needed">
            {l10n.getString("dashboard-exposures-filter-status-action-needed")}
          </Radio>
          <Radio value="in-progress">
            {l10n.getString("dashboard-exposures-filter-status-in-progress")}
          </Radio>
          <Radio value="fixed">
            {l10n.getString("dashboard-exposures-filter-status-fixed")}
          </Radio>
        </RadioGroup>
      </div>
      <div className={styles.filterControls}>
        <Button
          disabled={checkEmptyFilterState}
          small
          variant="secondary"
          onClick={() =>
            setFilterState({
              exposureType: "",
              dateFound: "",
              status: "",
            })
          }
        >
          {l10n.getString("dashboard-exposures-filter-reset")}
        </Button>
        <Button
          disabled={checkEmptyFilterState}
          small
          variant="primary"
          onClick={handleSaveButtonClick}
        >
          {l10n.getString("dashboard-exposures-filter-show-results")}
        </Button>
      </div>
      <button
        {...dismissButtonProps}
        ref={dismissButtonRef}
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
    </>
  );

  return (
    <>
      <div className={styles.filterHeaderWrapper}>
        <ul className={styles.filterHeaderList}>
          <li>
            <button
              ref={filterBtnRef}
              onClick={() => {
                filterDialogState.open();
              }}
              aria-label={l10n.getString("popover-open-filter-settings-alt")}
            >
              <FilterIcon width="16" height="16" alt={""} />
            </button>
            {l10n.getString("dashboard-exposures-filter")}
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-company")}
          </li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-exposure-type")}
            <button
              aria-label={l10n.getString("modal-open-alt")}
              {...explainerDialogTrigger.triggerProps}
              onClick={showExplainerContentExposureType}
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
              onClick={showExplainerContentStatus}
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
      {explainerDialogState.isOpen && (
        <ModalOverlay
          state={explainerDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={explainerTitle}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => explainerDialogState.close()}
          >
            {explainerContent}
          </Dialog>
        </ModalOverlay>
      )}
      {filterDialogState.isOpen && (
        <Popover state={filterDialogState} triggerRef={filterBtnRef}>
          <div className={styles.exposuresFilterWrapper} {...overlayProps}>
            {ExposuresFilterContent}
          </div>
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
          <div {...underlayProps} className="underlay" />
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

// from https://react-spectrum.adobe.com/react-aria/useRadioGroup.html
type RadioGroupProps = {
  label: string;
  children: React.ReactNode;
  value: string;
  type: "exposure-type" | "date-found" | "status";
  onChange: (value: string) => void;
};

type RadioProps = {
  children: React.ReactNode;
};

const RadioContext = React.createContext<any>(null);

function RadioGroup(props: RadioGroupProps) {
  const { children, label, type, value, onChange } = props;
  const state = useRadioGroupState(props);
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
        {label}
      </span>
      <div className={styles.radioButtonsWrapper}>
        <RadioContext.Provider value={{ value, onChange }}>
          {children}
        </RadioContext.Provider>
      </div>
    </div>
  );
}

function Radio(props: RadioProps & AriaRadioProps) {
  const { children } = props;
  const state = useContext(RadioContext);
  const ref = useRef<HTMLInputElement>(null);
  const checked = state ? state.value === props.value : false;
  const radioGroupState: RadioGroupState = {
    name: props.value,
    selectedValue: checked ? props.value : null,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    validationState: "valid",
    lastFocusedValue: null,
    setSelectedValue: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    setLastFocusedValue: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  };
  const handleChange = () => {
    if (state?.onChange) {
      state.onChange(props.value);
    }
  };
  const { inputProps } = useRadio(props, radioGroupState, ref);

  return (
    <label className={styles.radioItem}>
      <input {...inputProps} ref={ref} onChange={handleChange} type="radio" />
      {children}
    </label>
  );
}
