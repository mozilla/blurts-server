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
import { StatusPill, StatusPillTypeMap } from "../server/StatusPill";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

type ExposuresFilterTypeExplainerProps = {
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
  enabledFeatureFlags: FeatureFlagName[];
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
            {/* c8 ignore next 3 */}
            {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
              ? l10n.getString("modal-exposure-type-description-masked")
              : l10n.getString("modal-exposure-type-description", {
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
              })}{" "}
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

type ExposuresFilterRemovalTimeExplainerProps = {
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
};

export const ExposuresFilterRemovalTimeExplainer = (
  props: ExposuresFilterRemovalTimeExplainerProps,
) => {
  const l10n = useL10n();

  return (
    <ModalOverlay
      state={props.explainerDialogState}
      {...props.explainerDialogProps.overlayProps}
      isDismissable
    >
      <Dialog
        title={l10n.getString("modal-exposure-removal-time-title")}
        onDismiss={() => props.explainerDialogState.close()}
      >
        <div className={styles.modalBodyContent}>
          <p>{l10n.getString("modal-exposure-removal-time-text")}</p>
          <br />
          <Button
            variant="primary"
            onPress={() => props.explainerDialogState.close()}
          >
            {l10n.getString("modal-exposure-removal-time-button-label")}
          </Button>
        </div>
      </Dialog>
    </ModalOverlay>
  );
};

type ExposuresFilterStatusExplainerProps = {
  enabledFeatureFlags: FeatureFlagName[];
  explainerDialogState: OverlayTriggerState;
  explainerDialogProps: OverlayTriggerAria;
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
        title={l10n.getString("modal-exposure-indicator-title")}
        // TODO: Add unit test when changing this code:
        /* c8 ignore next */
        onDismiss={() => props.explainerDialogState.close()}
      >
        <div className={styles.modalBodyContent}>
          <ul className={`${styles.statusList} noList`}>
            <li className={styles.statusListItem}>
              <StatusPill type={StatusPillTypeMap.Fixed} />
              {l10n.getString("modal-exposure-indicator-fixed")}
            </li>
            <li className={styles.statusListItem}>
              <StatusPill type={StatusPillTypeMap.ActionNeeded} />
              {l10n.getString("modal-exposure-indicator-action-needed")}
            </li>
          </ul>
          <Button
            variant="primary"
            onPress={() => props.explainerDialogState.close()}
          >
            {l10n.getString("modal-cta-got-it")}
          </Button>
        </div>
      </Dialog>
    </ModalOverlay>
  );
};
