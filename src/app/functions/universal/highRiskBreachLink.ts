/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UserBreaches } from "../server/getUserBreaches";

type getHighRiskBreachLinkProps = {
  breaches: UserBreaches;
  pathname: string;
};

export const getHighRiskBreachLink = (props: getHighRiskBreachLinkProps) => {
  const steps = [
    {
      breaches: props.breaches.ssnBreaches,
      path: "/redesign/user/dashboard/fix/high-risk-data-breaches/social-security-number",
      keyword: "social-security-number",
    },
    {
      breaches: props.breaches.pinBreaches,
      path: "/redesign/user/dashboard/fix/high-risk-data-breaches/pin-number",
      keyword: "pin-number",
    },
    {
      breaches: props.breaches.creditCardNumberBreaches,
      path: "/redesign/user/dashboard/fix/high-risk-data-breaches/credit-card-number",
      keyword: "credit-card-number",
    },
    {
      breaches: props.breaches.bankAccountBreaches,
      path: "/redesign/user/dashboard/fix/high-risk-data-breaches/bank-account",
      keyword: "bank-account",
    },
  ];

  for (const step of steps) {
    if (
      step.breaches &&
      step.breaches.length > 0 &&
      !props.pathname.includes(step.keyword)
    ) {
      return step.path;
    }
  }

  // TODO: Handle case where user does not have leaked passwords either
  return "/redesign/user/dashboard/fix/leaked-passwords";
};
