/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useRef } from "react";
import { useButton, useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import Image from "next/image";
import styles from "./AboutBrokersIcon.module.scss";
import DialogIllustration from "./images/about-brokers-illustration.svg";
import { QuestionMarkCircle } from "../../../../../../../../../components/server/Icons";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { ModalOverlay } from "../../../../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../../../../../components/client/Button";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../../../../../../../../constants";
import { useTelemetry } from "../../../../../../../../../hooks/useTelemetry";
import { VisuallyHidden } from "../../../../../../../../../components/server/VisuallyHidden";
import { FeatureFlagName } from "../../../../../../../../../../db/tables/featureFlags";

export const AboutBrokersIcon = ({
  enabledFeatureFlags,
}: {
  enabledFeatureFlags: FeatureFlagName[];
}) => {
  const l10n = useL10n();
  const overlayTriggerState = useOverlayTriggerState({
    defaultOpen: false,
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    overlayTriggerState,
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(triggerProps, triggerRef);
  const recordTelemetry = useTelemetry();

  const dataBrokerCount = CONST_ONEREP_DATA_BROKER_COUNT;

  return (
    <>
      <button
        {...buttonProps}
        className={styles.triggerButton}
        ref={triggerRef}
        onClick={() => {
          recordTelemetry("button", "click", {
            button_id: "guided_experience_data_brokers",
          });
        }}
        aria-label={l10n.getString("open-modal-alt")}
        aria-describedby="dataBrokerProfilesInfo"
      >
        <VisuallyHidden id="dataBrokerProfilesInfo">
          {l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-title",
          )}
        </VisuallyHidden>
        <QuestionMarkCircle alt="" width={18} height={18} />
      </button>
      {overlayTriggerState.isOpen && (
        <ModalOverlay
          state={overlayTriggerState}
          {...overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={l10n.getString(
              "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-title",
            )}
            illustration={<Image src={DialogIllustration} alt="" />}
          >
            <div className={styles.dialogContents}>
              <p>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph1",
                )}
              </p>
              <p>
                {enabledFeatureFlags.includes("MaskDataBrokerCount")
                  ? l10n.getString(
                      "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph2-masked",
                    )
                  : l10n.getString(
                      "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-paragraph2",
                      {
                        data_broker_sites_total_num: dataBrokerCount,
                      },
                    )}
              </p>
              <div className={styles.confirmButtonWrapper}>
                <Button
                  variant="primary"
                  onPress={() => overlayTriggerState.close()}
                  autoFocus={true}
                  className={styles.startButton}
                >
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-confirm",
                  )}
                </Button>
              </div>
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
