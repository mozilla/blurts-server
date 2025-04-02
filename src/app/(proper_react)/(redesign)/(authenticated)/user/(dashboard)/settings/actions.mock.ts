/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { fn } from "@storybook/test";

export type { AddEmailFormState } from "./actions";
export const onAddEmail = fn().mockName("onAddEmail");
export const onRemoveEmail = fn().mockName("onRemoveEmail");
export const onDeleteAccount = fn().mockName("onDeleteAccount");
export const onApplyCouponCode = fn().mockName("onApplyCouponCode");
export const onCheckUserHasCurrentCouponSet = fn().mockName(
  "onCheckUserHasCurrentCouponSet",
);
export const onHandleUpdateProfileData = fn().mockName(
  "onHandleUpdateProfileData",
);
