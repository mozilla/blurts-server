/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from '@storybook/react'

import { Smiley } from '../components/client/Smiley'

const meta: Meta<typeof Smiley> = {
  title: 'Example/Smiley',
  component: Smiley,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Smiley>;

export const Happy: Story = {
  args: {
    isHappy: true
  }
}

export const Sad: Story = {
  args: {
    isHappy: false
  }
}
