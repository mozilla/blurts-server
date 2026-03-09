/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { useRef } from "react";
import { useOverlayTriggerState } from "react-stately";
import { Popover } from "../Popover";

export type PopoverStoryProps = {
  defaultOpen?: boolean;
};

const PopoverStory = ({ defaultOpen = true }: PopoverStoryProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const state = useOverlayTriggerState({ defaultOpen });

  return (
    <>
      <button ref={triggerRef} onClick={() => state.toggle()}>
        Toggle popover
      </button>
      {state.isOpen && (
        <Popover
          triggerRef={triggerRef}
          popoverRef={popoverRef}
          state={state}
          offset={8}
        >
          <div ref={popoverRef} style={{ padding: "1rem" }}>
            Popover content
          </div>
        </Popover>
      )}
    </>
  );
};

const meta: Meta<typeof PopoverStory> = {
  title: "Design Systems/Atoms/Popover",
  component: PopoverStory,
  argTypes: {
    defaultOpen: {
      control: "boolean",
      name: "Default open",
    },
  },
};
export default meta;
type Story = StoryObj<typeof PopoverStory>;

export const PopoverDefault: Story = {
  name: "Open popover",
  args: {
    defaultOpen: true,
  },
};

export const PopoverClosed: Story = {
  name: "Closed popover",
  args: {
    defaultOpen: false,
  },
};
