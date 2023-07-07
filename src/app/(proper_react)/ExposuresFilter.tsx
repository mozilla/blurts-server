/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./ExposuresFilter.module.scss";
import { FilterIcon, QuestionMarkCircle } from "../components/server/Icons";
import React, { ReactElement, useRef, useState } from "react";
import { Modal } from "../components/client/Modal";
import ModalImage from "../components/client/assets/modal-default-img.svg";
import { useL10n } from "../hooks/l10n";
import {
  AriaPopoverProps,
  Overlay,
  useOverlayTrigger,
  usePopover,
} from "react-aria";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";

export const ExposuresFilter = () => {
  const l10n = useL10n();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<ReactElement | string>("");
  const [modalContent, setModalContent] = useState<ReactElement | string>("");

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const showModalContentExposureType = () => {
    setIsModalOpen(true);
    setModalTitle(l10n.getString("modal-exposure-type-title"));
    setModalContent(modalContentExposureType);
  };

  const showModalContentStatus = () => {
    setIsModalOpen(true);
    setModalTitle(l10n.getString("modal-exposure-status-title"));
    setModalContent(modalContentStatus);
  };

  const modalContentExposureType = (
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
          {l10n.getFragment("modal-exposure-type-data-broker", {
            elems: { b: <strong /> },
          })}
        </li>
      </ol>
    </div>
  );

  const modalContentStatus = (
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
    </div>
  );

  const overlayTriggerState = useOverlayTriggerState({});
  const filterBtnRef = useRef<HTMLButtonElement>(null);

  const { overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    overlayTriggerState
  );

  console.log(overlayTriggerState);
  return (
    <>
      <div className={styles.filterHeaderWrapper}>
        <ul className={styles.filterHeaderList}>
          <li className={styles.hideOnMobile}>
            <button
              ref={filterBtnRef}
              onClick={() => {
                if (overlayTriggerState.isOpen) {
                  overlayTriggerState.close();
                } else {
                  overlayTriggerState.open();
                }
              }}
              aria-label={l10n.getString("popover-open-filter-settings-alt")}
            >
              <FilterIcon width="16" height="16" alt={""} />
            </button>
            {l10n.getString("dashboard-exposures-filter")}
          </li>
          <li>{l10n.getString("dashboard-exposures-filter-company")}</li>
          <li className={styles.hideOnMobile}>
            {l10n.getString("dashboard-exposures-filter-exposure-type")}
            <button
              aria-label={l10n.getString("modal-open-alt")}
              onClick={showModalContentExposureType}
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
          <li>
            {l10n.getString("dashboard-exposures-filter-status")}
            <button
              aria-label={l10n.getString("modal-open-alt")}
              onClick={showModalContentStatus}
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
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          image={ModalImage}
          headline={modalTitle}
          body={modalContent}
          cta={{
            content: l10n.getString("modal-cta-ok"),
            link: handleClose,
          }}
        />
      )}

      {overlayTriggerState.isOpen && (
        <Popover state={overlayTriggerState} triggerRef={filterBtnRef}>
          <div {...overlayProps}>Filter Content goes in here</div>
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
  const { popoverProps, underlayProps, placement } = usePopover(
    {
      ...props,
      offset: 10,
      crossOffset: 50,
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
