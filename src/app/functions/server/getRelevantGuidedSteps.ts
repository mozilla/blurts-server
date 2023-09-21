/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { LatestOnerepScanData } from "../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { BreachDataTypes, HighRiskDataTypes } from "../universal/breach";

export type InputData = {
  user: Session["user"];
  countryCode: string;
  latestScanData: LatestOnerepScanData | null;
  subscriberBreaches: SubscriberBreach[];
};

// Note: the order is important; it determines in which order the user will be
//       guided through the pages.
export const stepLinks = [
  {
    href: "/redesign/user/dashboard/fix/data-broker-profiles/start-free-scan",
    id: "StartScan",
  },
  {
    href: "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers",
    id: "ScanInProgress",
  },
  {
    href: "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers",
    id: "ScanResult",
  },
  {
    href: "/redesign/user/dashboard/fix/high-risk-data-breaches/social-security-number",
    id: "HighRiskSsn",
  },
  {
    href: "/redesign/user/dashboard/fix/high-risk-data-breaches/credit-card-number",
    id: "HighRiskCreditCard",
  },
  {
    href: "/redesign/user/dashboard/fix/high-risk-data-breaches/bank-account",
    id: "HighRiskBankAccount",
  },
  {
    href: "/redesign/user/dashboard/fix/high-risk-data-breaches/pin-number",
    id: "HighRiskPin",
  },
  {
    href: "/redesign/user/dashboard/fix/leaked-passwords/password",
    id: "LeakedPasswordsPassword",
  },
  {
    href: "/redesign/user/dashboard/fix/leaked-passwords/security-question",
    id: "LeakedPasswordsSecurityQuestion",
  },
  {
    href: "/redesign/user/dashboard/fix/security-recommendations/phone",
    id: "SecurityTipsPhone",
  },
  {
    href: "/redesign/user/dashboard/fix/security-recommendations/email",
    id: "SecurityTipsEmail",
  },
  {
    href: "/redesign/user/dashboard/fix/security-recommendations/ip",
    id: "SecurityTipsIp",
  },
  {
    href: "/redesign/user/dashboard",
    id: "Done",
  },
] as const satisfies ReadonlyArray<{ href: string; id: string }>;

export type StepLink = (typeof stepLinks)[number];
export type StepLinkWithStatus = (typeof stepLinks)[number] & {
  eligible: boolean;
  completed: boolean;
};

export type OutputData = {
  current: StepLink | null;
  skipTarget: StepLink | null;
};

export function getRelevantGuidedSteps(
  data: InputData,
  afterStep?: StepLink["id"]
): OutputData {
  const current = getNextGuidedStep(data, afterStep);

  // There should be a relevant current step for every user (even if it's just
  // going back to the dashbord), so we can't hit this line in tests (and
  // shouldn't be able to in production either):
  /* c8 ignore next 11 */
  if (current === null) {
    console.error(
      typeof afterStep === "string"
        ? `Could not determine the current step for the current user, coming from step [${afterStep}].`
        : "Could not determine the current step for the current user."
    );
    return {
      current: null,
      skipTarget: null,
    };
  }

  return {
    current: current,
    skipTarget: getNextGuidedStep(data, current.id),
  };
}

function getNextGuidedStep(
  data: InputData,
  afterStep?: StepLink["id"]
): StepLink | null {
  // Resisting the urge to add a state machine... ^.^
  const stepLinkStatuses = getGuidedStepStatuses(data);
  const fromIndex =
    stepLinkStatuses.findIndex((step) => step.id === afterStep) + 1;
  const nextStep = stepLinkStatuses.slice(fromIndex).find((stepLink) => {
    return stepLink.eligible && !stepLink.completed;
  });

  return nextStep ?? null;
}

export function getGuidedStepStatuses(data: InputData): StepLinkWithStatus[] {
  return stepLinks.map((stepLink) => getStepWithStatus(data, stepLink));
}

function getStepWithStatus(
  data: InputData,
  stepLink: StepLink
): StepLinkWithStatus {
  return {
    ...stepLink,
    eligible: isEligibleFor(data, stepLink.id),
    completed: hasCompleted(data, stepLink.id),
  };
}

function isEligibleFor(data: InputData, stepId: StepLink["id"]): boolean {
  if (stepId === "StartScan") {
    return data.countryCode === "us";
  }

  if (stepId === "ScanInProgress") {
    return data.countryCode === "us";
  }

  if (stepId === "ScanResult") {
    return data.countryCode === "us";
  }

  if (stepId === "HighRiskSsn") {
    // Our social security number-related mitigations aren't possible outside of the US:
    return data.countryCode === "us";
  }

  if (
    ["HighRiskCreditCard", "HighRiskBankAccount", "HighRiskPin"].includes(
      stepId
    )
  ) {
    // Anyone can view/resolve their high risk data breaches
    return true;
  }

  if (
    ["LeakedPasswordsPassword", "LeakedPasswordsSecurityQuestion"].includes(
      stepId
    )
  ) {
    // Anyone can view/resolve their leaked passwords
    return true;
  }

  if (
    ["SecurityTipsPhone", "SecurityTipsEmail", "SecurityTipsIp"].includes(
      stepId
    )
  ) {
    // Anyone can view security tips
    return true;
  }

  if (stepId === "Done") {
    return true;
    // All steps should have been covered by the above conditions:
    /* c8 ignore next 4 */
  }

  return false as never;
}

function hasCompleted(data: InputData, stepId: StepLink["id"]): boolean {
  if (stepId === "StartScan") {
    return data.latestScanData?.scan !== null;
  }

  if (stepId === "ScanResult") {
    return (
      data.latestScanData !== null &&
      Array.isArray(data.latestScanData?.results) &&
      !data.latestScanData.results.some((scanResult) => {
        return scanResult.status === "new" && !scanResult.manually_resolved;
      })
    );
  }

  function isResolved(
    dataClass: (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
  ): boolean {
    return !data.subscriberBreaches.some((breach) => {
      return (
        breach.dataClasses.includes(dataClass) &&
        !breach.resolvedDataClasses.includes(dataClass)
      );
    });
  }

  if (stepId === "HighRiskSsn") {
    return isResolved(HighRiskDataTypes.SSN);
  }

  if (stepId === "HighRiskCreditCard") {
    return isResolved(HighRiskDataTypes.CreditCard);
  }

  if (stepId === "HighRiskBankAccount") {
    return isResolved(HighRiskDataTypes.BankAccount);
  }

  if (stepId === "HighRiskPin") {
    return isResolved(HighRiskDataTypes.PIN);
  }

  if (stepId === "LeakedPasswordsPassword") {
    return isResolved(BreachDataTypes.Passwords);
  }

  if (stepId === "LeakedPasswordsSecurityQuestion") {
    return isResolved(BreachDataTypes.SecurityQuestions);
  }

  if (stepId === "SecurityTipsPhone") {
    return isResolved(BreachDataTypes.Phone);
  }

  if (stepId === "SecurityTipsEmail") {
    return isResolved(BreachDataTypes.Email);
  }

  if (stepId === "SecurityTipsIp") {
    return isResolved(BreachDataTypes.IP);
  }

  if (stepId === "Done") {
    return false;
    // All steps should have been covered by the above conditions:
    /* c8 ignore next 4 */
  }

  return false as never;
}
