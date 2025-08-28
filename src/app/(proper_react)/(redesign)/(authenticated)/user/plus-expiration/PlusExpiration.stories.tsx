/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import type { SubscriberRow } from "knex/types/tables";
import { View } from "./View";
import type { ApplyRenewalCouponResult } from "./actions";

const meta: Meta<typeof View> = {
  title: "Pages/Logged in/Plus Expiration",
  component: View,
};
export default meta;
type Story = StoryObj<typeof View>;

export const HappyPath: Story = {
  name: "Happy path",
  args: {
    applyCouponAction: fn(
      () =>
        new Promise<ApplyRenewalCouponResult>((resolve) =>
          setTimeout(() => resolve({ success: true }), 1000),
        ),
    ),
    couponCheckResult: { success: false },
    isOnExpirationList: true,
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: [],
  },
};

export const ErrorWhenApplying: Story = {
  name: "Error when applying",
  args: {
    applyCouponAction: fn(
      () =>
        new Promise<ApplyRenewalCouponResult>((resolve) =>
          setTimeout(
            () =>
              resolve({ success: false, error: "apply_renewal_coupon_error" }),
            1000,
          ),
        ),
    ),
    couponCheckResult: { success: false },
    isOnExpirationList: true,
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: [],
  },
};

export const NotExpiring: Story = {
  name: "Subscrption still active",
  args: {
    applyCouponAction: fn(),
    couponCheckResult: { success: false },
    isOnExpirationList: false,
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: [],
  },
};

export const CouponAlreadyApplied: Story = {
  name: "Coupon already applied",
  args: {
    applyCouponAction: fn(),
    couponCheckResult: { success: true },
    isOnExpirationList: false,
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: [],
  },
};

export const FreeUser: Story = {
  name: "No subscription",
  args: {
    applyCouponAction: fn(),
    couponCheckResult: { success: false },
    isOnExpirationList: false,
    subscriber: {
      fxa_profile_json: {
        subscriptions: ["not-monitor"],
      },
    } as SubscriberRow,
    enabledFeatureFlags: [],
  },
};
