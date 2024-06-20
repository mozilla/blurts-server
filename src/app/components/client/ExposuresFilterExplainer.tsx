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
import { Button } from "../client/Button";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../constants";

type ExposuresFilterTypeExplainerProps = {
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
};

export const ExposuresFilterTypeExplainer = (
  props: ExposuresFilterTypeExplainerProps,
) => {
  const l10n = useL10n();

  return (
    <ModalOverlay
      state={props.explainerDialogState}
      {...props.explainerDialogProps.overlayProps}
      isDismissable
    >
      <Dialog
        title={l10n.getString("modal-exposure-type-title")}
        illustration={<Image src={ModalImage} alt="" />}
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        onDismiss={() => props.explainerDialogState.close()}
      >
        <div className={styles.modalBodyContent}>
          <p>
            {l10n.getString("modal-exposure-type-description", {
              data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
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
            onPress={() => props.explainerDialogState.close()}
          >
            {l10n.getString("modal-cta-ok")}
          </Button>
        </div>
      </Dialog>
    </ModalOverlay>
  );
};

type ExposuresFilterStatusExplainerProps = {
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
  isEligibleForPremium: boolean;
};

export const ExposuresFilterStatusExplainer = (
  props: ExposuresFilterStatusExplainerProps,
) => {
  const l10n = useL10n();

  return (
    <ModalOverlay
      state={props.explainerDialogState}
      {...props.explainerDialogProps.overlayProps}
      isDismissable
    >
      <Dialog
        title={l10n.getString("modal-exposure-status-title")}
        illustration={<Image src={ModalImage} alt="" />}
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        onDismiss={() => props.explainerDialogState.close()}
      >
        <div className={styles.modalBodyContent}>
          <p>
            {l10n.getString(
              props.isEligibleForPremium
                ? "modal-exposure-status-description-premium"
                : "modal-exposure-status-description-all",
              {
                data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
              },
            )}
          </p>
          <br />
          <ul>
            <li>
              {l10n.getFragment("modal-exposure-status-action-needed", {
                elems: { b: <strong /> },
              })}
            </li>
            {props.isEligibleForPremium && (
              <li>
                {l10n.getFragment("modal-exposure-status-in-progress", {
                  elems: { b: <strong /> },
                })}
              </li>
            )}
            <li>
              {l10n.getFragment("modal-exposure-status-fixed", {
                elems: { b: <strong /> },
              })}
            </li>
          </ul>
          <Button
            variant="primary"
            onPress={() => props.explainerDialogState.close()}
          >
            {l10n.getString("modal-cta-ok")}
          </Button>
        </div>
      </Dialog>
    </ModalOverlay>
  );
};
