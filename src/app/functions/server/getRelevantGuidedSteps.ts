/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { BreachDataTypes, HighRiskDataTypes } from "../universal/breach";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

export type StepDeterminationData = {
  user: Session["user"];
  countryCode: string;
  subscriberBreaches: SubscriberBreach[];
};

// Note: the order is important; it determines in which order the user will be
//       guided through the pages.
export const stepLinks = [
  {
    href: "/user/dashboard/fix/high-risk-data-breaches/social-security-number",
    id: "HighRiskSsn",
  },
  {
    href: "/user/dashboard/fix/high-risk-data-breaches/credit-card",
    id: "HighRiskCreditCard",
  },
  {
    href: "/user/dashboard/fix/high-risk-data-breaches/bank-account",
    id: "HighRiskBankAccount",
  },
  {
    href: "/user/dashboard/fix/high-risk-data-breaches/pin",
    id: "HighRiskPin",
  },
  {
    href: "/user/dashboard/fix/leaked-passwords/passwords",
    id: "LeakedPasswordsPassword",
  },
  {
    href: "/user/dashboard/fix/leaked-passwords/security-questions",
    id: "LeakedPasswordsSecurityQuestion",
  },
  {
    href: "/user/dashboard/fix/security-recommendations/phone",
    id: "SecurityTipsPhone",
  },
  {
    href: "/user/dashboard/fix/security-recommendations/email",
    id: "SecurityTipsEmail",
  },
  {
    href: "/user/dashboard/fix/security-recommendations/ip",
    id: "SecurityTipsIp",
  },
  {
    href: "/user/dashboard",
    id: "Done",
  },
] as const satisfies ReadonlyArray<{ href: string; id: string }>;

export type StepLink = (typeof stepLinks)[number];
export type StepLinkWithStatus = (typeof stepLinks)[number] & {
  eligible: boolean;
  completed: boolean;
};

export function isGuidedResolutionInProgress(stepId: StepLink["id"]) {
  const inProgressStepIds = stepLinks
    .filter((step) => step.id !== "Done")
    .map(({ id }) => id);
  return (inProgressStepIds as string[]).includes(stepId);
}

export function getNextGuidedStep(
  data: StepDeterminationData,
  enabledFeatureFlags: FeatureFlagName[],
  afterStep?: StepLink["id"],
): StepLink {
  // Resisting the urge to add a state machine... ^.^
  const stepLinkStatuses = getGuidedStepStatuses(data, enabledFeatureFlags);
  const fromIndex =
    stepLinkStatuses.findIndex((step) => step.id === afterStep) + 1;
  const nextStep = stepLinkStatuses.slice(fromIndex).find((stepLink) => {
    return stepLink.eligible && !stepLink.completed;
  });

  // We don't have a way to trigger an invalid state without skipping a
  // valid one during tests:
  /* c8 ignore next 16 */
  if (!nextStep) {
    // In practice, there should always be a next step (at least "Done").
    // If for any reason there is not, `href` will be undefined, in which case
    // links will just not do anything.
    console.error(
      `Could not determine the relevant next guided step for the user. Skipping step: [${
        afterStep ?? "Not skipping any steps"
      }]. Is \`data.user\` defined: [${!!data.user}]. Country code: [${
        data.countryCode
      }].
      Number of breaches: [${data.subscriberBreaches.length}].`,
    );
    return { id: "InvalidStep" } as never;
  }
  return nextStep;
}

export function getGuidedStepStatuses(
  data: StepDeterminationData,
  enabledFeatureFlags?: FeatureFlagName[],
): StepLinkWithStatus[] {
  return stepLinks.map((stepLink) =>
    getStepWithStatus(data, stepLink, enabledFeatureFlags),
  );
}

function getStepWithStatus(
  data: StepDeterminationData,
  stepLink: StepLink,
  _enabledFeatureFlags?: FeatureFlagName[],
): StepLinkWithStatus {
  return {
    ...stepLink,
    eligible: isEligibleForStep(data, stepLink.id),
    completed: hasCompletedStep(data, stepLink.id),
  };
}

export function isEligibleForStep(
  data: StepDeterminationData,
  stepId: StepLink["id"],
): boolean {
  if (stepId === "HighRiskSsn") {
    // Our social security number-related mitigations aren't possible outside of the US:
    return data.countryCode === "us";
  }

  if (
    ["HighRiskCreditCard", "HighRiskBankAccount", "HighRiskPin"].includes(
      stepId,
    )
  ) {
    // Anyone can view/resolve their high risk data breaches
    return true;
  }

  if (
    ["LeakedPasswordsPassword", "LeakedPasswordsSecurityQuestion"].includes(
      stepId,
    )
  ) {
    // Anyone can view/resolve their leaked passwords
    return true;
  }

  if (
    ["SecurityTipsPhone", "SecurityTipsEmail", "SecurityTipsIp"].includes(
      stepId,
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

export function hasCompletedStepSection(
  data: StepDeterminationData,
  section:
    | "Scan"
    | "DataBrokerManualRemoval"
    | "HighRisk"
    | "LeakedPasswords"
    | "SecurityTips",
  _enabledFeatureFlags?: FeatureFlagName[],
): boolean {
  if (section === "HighRisk") {
    return (
      hasCompletedStep(data, "HighRiskSsn") &&
      hasCompletedStep(data, "HighRiskCreditCard") &&
      hasCompletedStep(data, "HighRiskBankAccount") &&
      hasCompletedStep(data, "HighRiskPin")
    );
  }
  if (section === "LeakedPasswords") {
    return (
      hasCompletedStep(data, "LeakedPasswordsPassword") &&
      hasCompletedStep(data, "LeakedPasswordsSecurityQuestion")
    );
  }
  if (section === "SecurityTips") {
    return (
      hasCompletedStep(data, "SecurityTipsEmail") &&
      hasCompletedStep(data, "SecurityTipsIp") &&
      hasCompletedStep(data, "SecurityTipsPhone")
    );

    // All steps should have been covered by the above conditions:
    /* c8 ignore next 4 */
  }

  return false as never;
}

export function hasCompletedStep(
  data: StepDeterminationData,
  stepId: StepLink["id"],
  _enabledFeatureFlags?: FeatureFlagName[],
): boolean {
  function isBreachResolved(
    dataClass: (typeof BreachDataTypes)[keyof typeof BreachDataTypes],
  ): boolean {
    return !data.subscriberBreaches.some((breach) => {
      const affectedDataClasses = breach.dataClassesEffected.map(
        (affectedDataClass) => Object.keys(affectedDataClass)[0],
      );
      return (
        affectedDataClasses.includes(dataClass) &&
        !breach.resolvedDataClasses.includes(dataClass)
      );
    });
  }

  if (stepId === "HighRiskSsn") {
    return isBreachResolved(HighRiskDataTypes.SSN);
  }

  if (stepId === "HighRiskCreditCard") {
    return isBreachResolved(HighRiskDataTypes.CreditCard);
  }

  if (stepId === "HighRiskBankAccount") {
    return isBreachResolved(HighRiskDataTypes.BankAccount);
  }

  if (stepId === "HighRiskPin") {
    return isBreachResolved(HighRiskDataTypes.PIN);
  }

  if (stepId === "LeakedPasswordsPassword") {
    return isBreachResolved(BreachDataTypes.Passwords);
  }

  if (stepId === "LeakedPasswordsSecurityQuestion") {
    return isBreachResolved(BreachDataTypes.SecurityQuestions);
  }

  if (stepId === "SecurityTipsPhone") {
    return isBreachResolved(BreachDataTypes.Phone);
  }

  if (stepId === "SecurityTipsEmail") {
    return isBreachResolved(BreachDataTypes.Email);
  }

  if (stepId === "SecurityTipsIp") {
    return isBreachResolved(BreachDataTypes.IP);
  }

  if (stepId === "Done") {
    return false;
    // All steps should have been covered by the above conditions:
    /* c8 ignore next 4 */
  }

  return false as never;
}
