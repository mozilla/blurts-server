/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./ExposuresFilter.module.scss";
import { OverlayTriggerAria } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { useL10n } from "../../hooks/l10n";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import { Button } from "../client/Button";
import { StatusPill, StatusPillTypeMap } from "../server/StatusPill";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

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
