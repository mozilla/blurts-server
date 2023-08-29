/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { PremiumUpsellModal } from "../PremiumUpsellModal";
import { Button } from "../../server/Button";

function PremiumUpsellModalStory({ isOpen }: { isOpen: boolean }) {
  const dialogState = useOverlayTriggerState({ defaultOpen: isOpen });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState
  );

  return (
    <PremiumUpsellModal state={dialogState} {...overlayProps}>
      <Button
        onClick={() => dialogState.open()}
        variant="primary"
        {...triggerProps}
      >
        Open modal
      </Button>
    </PremiumUpsellModal>
  );
}

const meta: Meta<typeof PremiumUpsellModalStory> = {
  title: "PremiumUpsellModal",
  component: PremiumUpsellModalStory,
};

export default meta;
type Story = StoryObj<typeof PremiumUpsellModalStory>;

export const PremiumUpsellModalClosed: Story = {
  args: {
    isOpen: false,
  },
};

export const PremiumUpsellModalOpen: Story = {
  args: {
    isOpen: true,
  },
};
