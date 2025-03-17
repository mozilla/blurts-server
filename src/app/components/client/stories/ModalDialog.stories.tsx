/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";

import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import Image from "next/image";
import Illustration from "../assets/modal-default-img.svg";
import { ModalOverlay } from "../dialog/ModalOverlay";
import { Dialog } from "../dialog/Dialog";
import { Button } from "../Button";

export type ModalDialogProps = {
  withDialog?: boolean;
  withTitle?: boolean;
  withIllustration?: boolean;
};

const ModalDialog = (props: ModalDialogProps) => {
  const modalState = useOverlayTriggerState({ defaultOpen: true });
  const modalTrigger = useOverlayTrigger({ type: "dialog" }, modalState);
  return (
    <>
      <Button {...modalTrigger.triggerProps} variant="primary">
        Open modal {props.withDialog && " dialog"}
      </Button>
      {modalState.isOpen && (
        <ModalOverlay
          state={modalState}
          {...modalTrigger.overlayProps}
          isDismissable={true}
        >
          {props.withDialog ? (
            <Dialog
              title={props.withTitle ? "Here's a dialog for you" : undefined}
              illustration={
                props.withIllustration ? (
                  <Image src={Illustration} alt="" />
                ) : undefined
              }
              onDismiss={() => modalState.close()}
            >
              <p>Some dialog content.</p>
            </Dialog>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <p>
                  This is modal content; note that it&apos;s not possible to
                  interact with the content behind the modal overlay.
                  Here&apos;s a button to close the modal: &nbsp;
                </p>
                <Button variant="primary" onPress={() => modalState.close()}>
                  Close modal
                </Button>
                <p>
                  Note that modal overlays aren&apos;t usually used on their
                  own. This is merely an example to help clarify the boundaries
                  between the Modal and Dialog components.
                </p>
              </div>
            </>
          )}
        </ModalOverlay>
      )}
    </>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalDialog> = {
  title: "Design Systems/Molecules/Modal dialog",
  component: ModalDialog,
  argTypes: {
    withDialog: {
      control: "boolean",
      name: "With dialog",
    },
    withTitle: {
      control: "boolean",
      name: "With title",
    },
    withIllustration: {
      control: "boolean",
      name: "With illustration",
    },
  },
};
export default meta;
type Story = StoryObj<typeof ModalDialog>;

export const Modal: Story = {
  name: "Modal without a dialog",
  args: {},
};

export const ModalWithDialog: Story = {
  name: "Modal dialog",
  args: {
    withDialog: true,
  },
};

export const ModalDialogWithTitle: Story = {
  name: "With title",
  args: {
    withDialog: true,
    withTitle: true,
  },
};

export const ModalDialogWithIllustration: Story = {
  name: "With title and illustration",
  args: {
    withDialog: true,
    withTitle: true,
    withIllustration: true,
  },
};
