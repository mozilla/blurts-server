/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./ExposuresFilter.module.scss";
import Image from "next/image";
import ModalImage from "../../components/client/assets/modal-default-img.svg";
import { OverlayTriggerAria } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { useL10n } from "../../hooks/l10n";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../server/Button";

type ExposuresFilterExplainer = {
  content: "exposure" | "status";
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
};

export const ExposuresFilterExplainer = (props: ExposuresFilterExplainer) => {
  const l10n = useL10n();

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
      <Button
        variant="primary"
        onClick={() => props.explainerDialogState.close()}
      >
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
      <Button
        variant="primary"
        onClick={() => props.explainerDialogState.close()}
      >
        {l10n.getString("modal-cta-ok")}
      </Button>
    </div>
  );

  return (
    <>
      {props.content === "exposure" ? (
        <ModalOverlay
          state={props.explainerDialogState}
          {...props.explainerDialogProps.overlayProps}
          isDismissable
        >
          <Dialog
            title={l10n.getString("modal-exposure-type-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => props.explainerDialogState.close()}
          >
            {explainerContentExposureType}
          </Dialog>
        </ModalOverlay>
      ) : (
        <ModalOverlay
          state={props.explainerDialogState}
          {...props.explainerDialogProps.overlayProps}
          isDismissable
        >
          <Dialog
            title={l10n.getString("modal-exposure-status-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => props.explainerDialogState.close()}
          >
            {explainerContentStatus}
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
