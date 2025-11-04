/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import styles from "./SettingsConfirmationDialog.module.scss";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import { ModalOverlay } from "../../../../../../components/client/dialog/ModalOverlay";
import {
  Dialog,
  Props as DialogProps,
} from "../../../../../../components/client/dialog/Dialog";
import { Button } from "../../../../../../components/client/Button";
import { TelemetryButton } from "../../../../../../components/client/TelemetryButton";

export type Props = {
  triggerLabel: string;
  children: ReactNode;
  title: DialogProps["title"];
  illustration: DialogProps["illustration"];
  telemetryId?: string;
  dismissString?: string;
};

export const SettingsConfirmationDialog = (props: Props) => {
  const recordTelemetry = useTelemetry();

  const dialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      if (props.telemetryId) {
        recordTelemetry("popup", isOpen ? "view" : "exit", {
          popup_id: props.telemetryId,
        });
      }
    },
  });
  const dialogTrigger = useOverlayTrigger({ type: "dialog" }, dialogState);
  return (
    <>
      <TelemetryButton
        event={{
          module: "popup",
          name: "exit",
          data: {
            popup_id: "never_mind_take_me_back",
          },
        }}
        variant="link"
        onPress={() => dialogState.open()}
        className={styles.trigger}
      >
        {props.triggerLabel}
      </TelemetryButton>
      {dialogState.isOpen && (
        <ModalOverlay
          state={dialogState}
          {...dialogTrigger.overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={props.title}
            illustration={props.illustration}
            onDismiss={() => dialogState.close()}
          >
            <div className={styles.contentWrapper}>
              {props.children}
              {props.dismissString && (
                <Button
                  variant="link"
                  onPress={() => dialogState.close()}
                  className={styles.dismissLink}
                >
                  {props.dismissString}
                </Button>
              )}
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
