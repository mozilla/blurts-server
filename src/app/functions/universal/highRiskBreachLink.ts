/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UserBreaches } from "../server/getUserBreaches";

export const getHighRiskBreachLink = (breaches: UserBreaches) => {
  if (breaches.ssnBreaches && breaches.ssnBreaches.length > 0) {
    return "/redesign/user/dashboard/fix/high-risk-data-breaches/social-security-number";
  }

  if (breaches.pinNumberBreaches && breaches.pinNumberBreaches.length > 0) {
    return "/redesign/user/dashboard/fix/high-risk-data-breaches/pin-number";
  }

  if (
    breaches.creditCardNumberBreaches &&
    breaches.creditCardNumberBreaches.length > 0
  ) {
    return "/redesign/user/dashboard/fix/high-risk-data-breaches/credit-card-number";
  }

  if (breaches.bankAccountBreaches && breaches.bankAccountBreaches.length > 0) {
    return "/redesign/user/dashboard/fix/high-risk-data-breaches/bank-account";
  }

  //TODO: Handle case where user does not have leaked passwords either
  return "/redesign/user/dashboard/fix/leaked-passwords";
};
