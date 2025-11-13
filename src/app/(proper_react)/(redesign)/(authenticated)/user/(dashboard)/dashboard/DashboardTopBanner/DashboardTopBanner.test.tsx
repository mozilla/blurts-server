/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { jest, it, expect } from "@jest/globals";
import { OnerepScanRow } from "knex/types/tables";
import { render, screen } from "@testing-library/react";
import { DashboardTopBanner, DashboardTopBannerProps } from "./index";
import { TestComponentWrapper } from "../../../../../../../../TestComponentWrapper";
import {
  createRandomScanResult,
  createUserWithPremiumSubscription,
} from "../../../../../../../../apiMocks/mockData";
import { DashboardSummary } from "../../../../../../../functions/server/dashboard";

const TopBannerWrapper = (props: DashboardTopBannerProps) => {
  return (
    <TestComponentWrapper>
      <DashboardTopBanner {...props} />
    </TestComponentWrapper>
  );
};

const mockedExposure = {
  // shared
  emailAddresses: 0,
  phoneNumbers: 0,

  // data brokers
  addresses: 0,
  familyMembers: 0,

  // data breaches
  socialSecurityNumbers: 0,
  ipAddresses: 0,
  passwords: 0,
  creditCardNumbers: 0,
  pins: 0,
  securityQuestions: 0,
  bankAccountNumbers: 0,
};

const mockedBannerData: DashboardSummary = {
  dataBreachTotalNum: 10,
  dataBreachTotalDataPointsNum: 10,
  dataBreachFixedDataPointsNum: 10,
  dataBrokerTotalNum: 10,
  dataBrokerTotalDataPointsNum: 8,
  dataBrokerAutoFixedDataPointsNum: 8,
  dataBrokerAutoFixedNum: 10,
  dataBrokerInProgressDataPointsNum: 10,
  dataBrokerInProgressNum: 10,
  dataBrokerManuallyResolvedDataPointsNum: 0,
  totalDataPointsNum: 10,
  allDataPoints: mockedExposure,
  unresolvedDataPoints: mockedExposure,
  inProgressDataPoints: mockedExposure,
  fixedDataPoints: mockedExposure,
  manuallyResolvedDataBrokerDataPoints: mockedExposure,
  unresolvedSanitizedDataPoints: [],
  fixedSanitizedDataPoints: [],
  dataBreachUnresolvedNum: 0,
  dataBreachResolvedNum: 0,
  dataBrokerManuallyResolvedNum: 0,
  dataBrokerRemovalUnderMaintenance: 0,
};

const mockedPlusUser = createUserWithPremiumSubscription();
const mockedFreeUser = {
  ...mockedPlusUser,
  fxa: {
    locale: "us",
    twoFactorAuthentication: false,
    metricsEnabled: false,
    avatar: "https://profile.stage.mozaws.net/v1/avatar/e",
    avatarDefault: true,
    subscriptions: [],
  },
};

const mockedFreeStepDeterminationData = {
  user: mockedFreeUser,
  countryCode: "us",
  latestScanData: null,
  subscriberBreaches: [],
};
const mockedPlusStepDeterminationData = {
  ...mockedFreeStepDeterminationData,
  user: mockedPlusUser,
};

const mockedScan: OnerepScanRow = {
  created_at: new Date(Date.UTC(1998, 2, 31)),
  updated_at: new Date(Date.UTC(1998, 2, 31)),
  id: 0,
  onerep_profile_id: 0,
  onerep_scan_id: 0,
  onerep_scan_reason: "initial",
  onerep_scan_status: "finished",
};

it("renders no text if we got into an invalid state somehow", () => {
  // When we get into an invalid state, we log both a warning and an error.
  // We should probably stop doing that, but this test was added after the fact.
  // Thus, for now, suppress the test failure after logging calls:
  jest.spyOn(console, "warn").mockImplementation(() => undefined);
  jest.spyOn(console, "error").mockImplementation(() => undefined);

  render(
    <TopBannerWrapper
      bannerData={mockedBannerData}
      // hasExposures can't be `false` if either `hasUnresolvedBreaches`
      // or `hasUnresolvedBrokers` is `true`; thus, this triggers an invalid state:
      hasExposures={false}
      hasUnresolvedBreaches={true}
      hasUnresolvedBrokers={false}
      isEligibleForFreeScan={false}
      isEligibleForPremium={false}
      isPremiumUser={false}
      scanInProgress={false}
      stepDeterminationData={{
        ...mockedFreeStepDeterminationData,
        countryCode: "nl",
      }}
      tabType="action-needed"
      onShowFixed={() => {}}
      monthlySubscriptionUrl="/arbitrary"
      subscriptionBillingAmount={{ monthly: 13.37 }}
      totalNumberOfPerformedScans={0}
      enabledFeatureFlags={[]}
    />,
  );

  const summary = screen.getByRole("region", {
    name: "Dashboard summary",
  });
  expect(summary.textContent).toBe("");
});

it("should show a call to the manual resolution flow for free users with existing scans, when the `FreeOnly` flag is enabled", () => {
  render(
    <TopBannerWrapper
      bannerData={mockedBannerData}
      hasExposures={true}
      hasUnresolvedBreaches={false}
      hasUnresolvedBrokers={true}
      isEligibleForFreeScan={false}
      isEligibleForPremium={false}
      isPremiumUser={false}
      scanInProgress={false}
      stepDeterminationData={{
        ...mockedFreeStepDeterminationData,
        latestScanData: {
          scan: mockedScan,
          results: [
            createRandomScanResult({ manually_resolved: false, status: "new" }),
          ],
        },
      }}
      tabType="action-needed"
      onShowFixed={() => {}}
      monthlySubscriptionUrl="/arbitrary"
      subscriptionBillingAmount={{ monthly: 13.37 }}
      totalNumberOfPerformedScans={1}
      enabledFeatureFlags={["FreeOnly"]}
    />,
  );

  const cta = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(cta.getAttribute("href")).toBe(
    "/user/dashboard/fix/data-broker-profiles/manual-remove",
  );
});

it("tells Plus users without breaches that there's nothing left to do but to see what's happened", () => {
  render(
    <TopBannerWrapper
      bannerData={mockedBannerData}
      hasExposures={true}
      hasUnresolvedBreaches={false}
      hasUnresolvedBrokers={false}
      isEligibleForFreeScan={false}
      isEligibleForPremium={false}
      isPremiumUser={true}
      scanInProgress={false}
      stepDeterminationData={{
        ...mockedPlusStepDeterminationData,
        latestScanData: {
          scan: mockedScan,
          results: [
            createRandomScanResult({
              manually_resolved: false,
              status: "removed",
            }),
          ],
        },
      }}
      tabType="action-needed"
      onShowFixed={() => {}}
      monthlySubscriptionUrl="/arbitrary"
      subscriptionBillingAmount={{ monthly: 13.37 }}
      totalNumberOfPerformedScans={1}
      enabledFeatureFlags={["FreeOnly"]}
    />,
  );

  const cta = screen.getByRole("button", {
    name: "See what’s fixed",
  });
  expect(cta).toBeInTheDocument();
});
