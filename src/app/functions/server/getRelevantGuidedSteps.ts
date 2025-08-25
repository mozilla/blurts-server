/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { LatestOnerepScanData } from "../../../db/tables/onerep_scans";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { BreachDataTypes, HighRiskDataTypes } from "../universal/breach";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { ScanData } from "./moscary";
import {
  isOneRepScan,
  isOneRepScanResultDataBroker,
} from "../universal/onerep";

export type StepDeterminationData = {
  user: Session["user"];
  countryCode: string;
  latestScanData: LatestOnerepScanData | ScanData | null;
  subscriberBreaches: SubscriberBreach[];
};

// Note: the order is important; it determines in which order the user will be
//       guided through the pages.
export const stepLinks = [
  {
    href: "/user/dashboard/fix/data-broker-profiles/removal-under-maintenance",
    id: "DataBrokerManualRemoval",
  },
  {
    href: "/user/dashboard/fix/data-broker-profiles/start-free-scan",
    id: "Scan",
  },
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
    .filter((step) => step.id !== "Scan" && step.id !== "Done")
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
      }]. Is \`data.latestScanData.scan\` defined: [${!!data.latestScanData
        ?.scan}]. Number of scan results: [${
        data.latestScanData?.results.length
      }]. Number of breaches: [${data.subscriberBreaches.length}].`,
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
  enabledFeatureFlags?: FeatureFlagName[],
): StepLinkWithStatus {
  return {
    ...stepLink,
    eligible: isEligibleForStep(data, stepLink.id, enabledFeatureFlags),
    completed: hasCompletedStep(data, stepLink.id),
  };
}

export function isEligibleForStep(
  data: StepDeterminationData,
  stepId: StepLink["id"],
  enabledFeatureFlags?: FeatureFlagName[],
): boolean {
  // Only premium users can see the manual data broker removal flow, once they have run a scan
  /* c8 ignore start */
  if (
    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    enabledFeatureFlags?.includes("EnableRemovalUnderMaintenanceStep") &&
    stepId === "DataBrokerManualRemoval"
  ) {
    return (
      data.latestScanData?.results?.some((result) => {
        return (
          // MNTOR-4893: "Removal under maintenance" isn't enabled (yet?) and therefore not supported on Moscary:
          isOneRepScanResultDataBroker(result) &&
          result.broker_status === "removal_under_maintenance" &&
          result.status !== "removed" &&
          !result.manually_resolved
        );
        // MNTOR-3892
        // Already covered by unit test
      }) ?? false
    );
  }
  /* c8 ignore stop */

  if (stepId === "Scan") {
    return data.countryCode === "us";
  }

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
    | "HighRisk"
    | "LeakedPasswords"
    | "SecurityTips"
    | "DataBrokerManualRemoval",
  enabledFeatureFlags?: FeatureFlagName[],
): boolean {
  /* c8 ignore next 8 */
  // Already covered by unit tests
  if (
    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    enabledFeatureFlags?.includes("EnableRemovalUnderMaintenanceStep") &&
    section === "DataBrokerManualRemoval"
  ) {
    return hasCompletedStep(data, "DataBrokerManualRemoval");
  }
  if (section === "Scan") {
    return hasCompletedStep(data, "Scan");
  }
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
  enabledFeatureFlags?: FeatureFlagName[],
): boolean {
  /* c8 ignore start */
  if (
    // TODO: MNTOR-3886 - Remove EnableRemovalUnderMaintenanceStep feature flag
    enabledFeatureFlags?.includes("EnableRemovalUnderMaintenanceStep") &&
    stepId === "DataBrokerManualRemoval"
  ) {
    return (
      data.latestScanData?.results?.every(
        (result) =>
          !(
            // Removal under maintenance isn't enabled (yet?) and therefore not supported on Moscary:
            (
              isOneRepScanResultDataBroker(result) &&
              result.broker_status === "removal_under_maintenance"
            )
          ) ||
          result.status === "removed" ||
          result.manually_resolved,
        // MNTOR-3892
        // Already covered by unit tests
      ) ?? false
    );
  }
  /* c8 ignore stop */
  if (stepId === "Scan") {
    const hasRunScan =
      typeof data.latestScanData?.scan === "object" &&
      data.latestScanData?.scan !== null;
    const scanStatus = isOneRepScan(data.latestScanData?.scan)
      ? data.latestScanData.scan.onerep_scan_status
      : (data.latestScanData as ScanData | null)?.scan?.status;
    const hasResolvedAllScanResults =
      (scanStatus === "finished" || scanStatus === "in_progress") &&
      (data.latestScanData!.results ?? []).every(
        (scanResult) =>
          scanResult.manually_resolved || scanResult.status !== "new",
      );
    return hasRunScan && hasResolvedAllScanResults;
  }

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
