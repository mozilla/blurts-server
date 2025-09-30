/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { Session } from "next-auth";
import { userEvent } from "@testing-library/user-event";
import type { EmailAddressRow, SubscriberRow } from "knex/types/tables";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import { TestComponentWrapper } from "../../../../../../../TestComponentWrapper";
import { SerializedSubscriber } from "../../../../../../../next-auth";

const mockedSessionUpdate = jest.fn();
const mockedRecordTelemetry = jest.fn();
jest.mock("next-auth/react", () => {
  return {
    useSession: () => {
      return {
        update: mockedSessionUpdate,
      };
    },
  };
});

jest.mock("../../../../../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

const mockedRouterRefresh = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => "/user/settings",
  useRouter: () => ({
    push: jest.fn(),
    refresh: mockedRouterRefresh,
  }),
}));

import { SettingsView } from "./View";
import { sanitizeEmailRow } from "../../../../../../functions/server/sanitize";
import { defaultExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../db/tables/subscriber_email_preferences";
import { Shell } from "../../../../Shell/Shell";
import { ComponentProps, ReactNode } from "react";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { UserAnnouncementWithDetails } from "../../../../../../../db/tables/user_announcements";
import { createRandomAnnouncement } from "../../../../../../../apiMocks/mockData";

const subscriberId = 7;
const mockedSerializedSubscriber: SerializedSubscriber = {
  id: subscriberId,
  all_emails_to_primary: true,
} as SerializedSubscriber;
const mockedSubscriber: SubscriberRow = {
  updated_at: new Date(),
  fx_newsletter: true,
  all_emails_to_primary: true,
  waitlists_joined: true,
  email_addresses: [],
  id: 12346,
  created_at: new Date("2022-06-07 14:29:00.000-05"),
  primary_sha1: "abcabc",
  primary_email: "test@test.com",
  primary_verification_token: "c165711a-69d1-42f1-9850-ce74754f36de",
  primary_verified: true,
  fxa_access_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0",
  fxa_refresh_token:
    "5a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1",
  fxa_session_expiry: new Date(0),
  fxa_uid: "12346",
  fxa_profile_json: {
    uid: "123",
    email: "test@test.com",
    avatar: "https://profile.stage.mozaws.net/v1/avatar/abc",
    locale: "en-US,en;q=0.5",
    amrValues: ["pwd", "email"],
    avatarDefault: false,
    metricsEnabled: true,
    twoFactorAuthentication: false,
  },
  breaches_last_shown: new Date("2022-07-08 14:19:00.000-05"),
  breaches_resolved: { "has-breaches@example.com": [] },
  breach_stats: {
    passwords: {
      count: 1,
      numResolved: 0,
    },
    numBreaches: {
      count: 2,
      numResolved: 1,
      numUnresolved: 1,
    },
    monitoredEmails: {
      count: 1,
    },
  },
  breach_resolution: {
    useBreachId: true,
    "test@test.com": {
      "8": {
        resolutionsChecked: ["passwords", "email-addresses"],
      },
      "40": {
        resolutionsChecked: [
          "email-addresses",
          "passwords",
          "social-security-numbers",
        ],
      },
      "252": {
        resolutionsChecked: ["email-addresses"],
      },
      "320": {
        resolutionsChecked: ["email-addresses"],
      },
    },
  },
  monthly_email_at: "2022-08-07 14:22:00.000-05",
  monthly_email_optout: false,
  signup_language: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7,*;q=0.5",
  onerep_profile_id: null,
  monthly_monitor_report_at: null,
  monthly_monitor_report: false,
  sign_in_count: null,
  first_broker_removal_email_sent: false,
  churn_prevention_email_sent_at: null,
};

const mockedUser: Session["user"] = {
  email: "primary@example.com",
  subscriber: mockedSerializedSubscriber,
  fxa: {
    subscriptions: ["monitor"],
    avatar: "",
    avatarDefault: false,
    locale: "en-GB",
    metricsEnabled: false,
    twoFactorAuthentication: false,
  },
};

const mockedFreeUser: Session["user"] = {
  email: "primary@example.com",
  subscriber: undefined,
  fxa: {
    subscriptions: [],
    avatar: "",
    avatarDefault: false,
    locale: "en-GB",
    metricsEnabled: false,
    twoFactorAuthentication: false,
  },
};

const mockedSecondaryVerifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "secondary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

const mockedTertiaryVerifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "tertiary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};
const mockedQuaternaryVerifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "quaternary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};
const mockedQuinaryVerifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "quinary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};

const mockedSecondaryUnverifiedEmail: EmailAddressRow = {
  id: 1337,
  email: "secondary_unverified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: false,
  created_at: new Date("1337-04-02T04:02:42.000Z"),
  updated_at: new Date("1337-04-02T04:02:42.000Z"),
  verification_token: "arbitrary_token",
};
const mockedSubscriptionBillingAmount = {
  yearly: 13.37,
  monthly: 42.42,
};
const mockedPlusSubscriberEmailPreferences = {
  id: 1337,
  primary_email: "primary@example.com",
  unsubscribe_token: "495398jfjvjfdj",
  monthly_monitor_report_free: false,
  monthly_monitor_report_free_at: new Date("1337-04-02T04:02:42.000Z"),
  monthly_monitor_report: true,
  monthly_monitor_report_at: new Date("1337-04-02T04:02:42.000Z"),
} as SubscriberEmailPreferencesOutput;

const mockedFreeSubscriberEmailPreferences = {
  id: 1337,
  primary_email: "primary@example.com",
  unsubscribe_token: "495398jfjvjfdj",
  monthly_monitor_report_free: true,
  monthly_monitor_report_free_at: new Date("1337-04-02T04:02:42.000Z"),
  monthly_monitor_report: false,
  monthly_monitor_report_at: new Date("1337-04-02T04:02:42.000Z"),
} as SubscriberEmailPreferencesOutput;

const mockedSession = {
  expires: new Date().toISOString(),
  user: mockedUser,
};

const mockedActions: ComponentProps<typeof SettingsView>["actions"] = {
  onRemoveEmail: jest.fn(),
  onAddEmail: jest.fn(),
  onDeleteAccount: () => new Promise(() => undefined),
  onApplyCouponCode: jest.fn(),
  onCheckUserHasCurrentCouponSet: jest.fn(),
  onHandleUpdateProfileData: jest.fn(),
};

const mockedAnnouncements: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement(),
  createRandomAnnouncement(),
  createRandomAnnouncement(),
];

const SettingsWrapper = (props: {
  children: ReactNode;
  enabledFeatureFlags?: FeatureFlagName[];
}) => (
  <TestComponentWrapper>
    <Shell
      l10n={getL10n()}
      session={mockedSession}
      nonce=""
      countryCode="en"
      enabledFeatureFlags={props.enabledFeatureFlags ?? []}
      experimentData={defaultExperimentData["Features"]}
      announcements={mockedAnnouncements}
    >
      {props.children}
    </Shell>
  </TestComponentWrapper>
);

describe("Settings page", () => {
  it("shows the settings page", () => {
    render(
      <SettingsWrapper>
        <SettingsView
          activeTab="edit-info"
          l10n={getL10n()}
          user={{
            ...mockedUser,
            subscriber: {
              ...mockedUser.subscriber!,
              all_emails_to_primary: true,
            },
          }}
          subscriber={mockedSubscriber}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          isMonthlySubscriber={true}
          data={mockedPlusSubscriberEmailPreferences}
          isEligibleForPremium={false}
          actions={mockedActions}
          userAnnouncements={mockedAnnouncements}
        />
      </SettingsWrapper>,
    );

    const tabListItem = screen.getByRole("tab", {
      name: "Edit your info",
    });
    expect(tabListItem).toBeInTheDocument();
  });

  it("defaults to the “Edit your info view” if no active tab is provided", () => {
    render(
      <SettingsWrapper>
        <SettingsView
          l10n={getL10n()}
          user={{
            ...mockedUser,
            subscriber: {
              ...mockedUser.subscriber!,
              all_emails_to_primary: true,
            },
          }}
          subscriber={mockedSubscriber}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          isMonthlySubscriber={true}
          data={mockedPlusSubscriberEmailPreferences}
          isEligibleForPremium={false}
          userAnnouncements={mockedAnnouncements}
          actions={mockedActions}
        />
      </SettingsWrapper>,
    );

    const tabListItem = screen.getByRole("tab", {
      name: "Edit your info",
    });
    expect(tabListItem).toBeInTheDocument();
  });

  describe("Edit your info", () => {
    it("passes the axe accessibility audit", async () => {
      const { container } = render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            data={mockedPlusSubscriberEmailPreferences}
            l10n={getL10n()}
            user={mockedUser}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
              [mockedSecondaryUnverifiedEmail.email]: 42,
            }}
            subscriber={mockedSubscriber}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedSecondaryUnverifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);

    it("changes the active tab", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const tabListItemInitial = screen.getByRole("tab", {
        name: "Edit your info",
      });
      expect(tabListItemInitial.getAttribute("aria-selected")).toBe("true");

      const tabListItemNext = screen.getByRole("tab", {
        name: "Set notifications",
      });
      await user.click(tabListItemNext);
      expect(tabListItemInitial.getAttribute("aria-selected")).toBe("false");
      expect(tabListItemNext.getAttribute("aria-selected")).toBe("true");
    });

    it("Add email address button is not shown when email limit of five reached", () => {
      // jsdom will complain about not being able to navigate to a different page
      // after clicking the link; suppress that error, as it's not relevant to the
      // test:
      jest.spyOn(console, "warn").mockImplementation(() => {});
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedTertiaryVerifiedEmail,
              mockedQuaternaryVerifiedEmail,
              mockedQuinaryVerifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const addEmailButton = screen.queryByRole("button", {
        name: "Add email address",
      });
      expect(addEmailButton).not.toBeInTheDocument();
    });

    it("Add email address button is shown when fewer than five emails", () => {
      // jsdom will complain about not being able to navigate to a different page
      // after clicking the link; suppress that error, as it's not relevant to the
      // test:
      jest.spyOn(console, "warn").mockImplementation(() => {});
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedTertiaryVerifiedEmail,
              mockedQuaternaryVerifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const addEmailButton = screen.getByRole("button", {
        name: "Add email address",
      });
      expect(addEmailButton).toBeInTheDocument();
    });

    it("marks unverified email addresses as such", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={mockedUser}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
              [mockedSecondaryUnverifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedSecondaryUnverifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const verificationNotification = screen.getAllByText(
        "Email verification required",
      );

      expect(verificationNotification).toHaveLength(1);
    });

    it("calls the API to resend a verification email if requested to", async () => {
      const user = userEvent.setup();
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={mockedUser}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
              [mockedSecondaryUnverifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedSecondaryUnverifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const resendButton = screen.getByRole("button", {
        name: "Resend verification email",
      });
      await user.click(resendButton);

      expect(global.fetch).toHaveBeenCalledWith("/api/v1/user/resend-email", {
        body: expect.stringContaining(
          `"emailId":${mockedSecondaryUnverifiedEmail.id}`,
        ),
        headers: {
          Accept: "text/html",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "same-origin",
      });
    });

    it("calls the 'remove' action when clicking the rubbish bin icon", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={mockedUser}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
              [mockedSecondaryUnverifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedSecondaryUnverifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const removeButtons = screen.getAllByRole("button", { name: "Remove" });
      await user.click(removeButtons[0]);

      expect(mockedActions.onRemoveEmail).toHaveBeenCalledWith(
        sanitizeEmailRow(mockedSecondaryVerifiedEmail),
      );
    });

    // This test doesn't currently work because, as soon as we click `addButton`,
    // Jest complains that `useFormState` "is not a function or its return value is
    // not iterable". It's unclear why that is, but as Server Actions get more
    // widely used, hopefully the community/Vercel comes up with a way to resolve:
    // https://stackoverflow.com/q/77705420
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip("calls the 'add' action when adding another email address", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="edit-info"
            l10n={getL10n()}
            user={mockedUser}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
              [mockedSecondaryUnverifiedEmail.email]: 42,
            }}
            emailAddresses={[
              mockedSecondaryVerifiedEmail,
              mockedSecondaryUnverifiedEmail,
            ]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const addButton = screen.getByRole("button", {
        name: "Add email address",
      });
      await user.click(addButton);

      const emailAddressInput = screen.getByLabelText("Email address");
      await user.type(emailAddressInput, "new_address@example.com[Enter]");

      expect(mockedActions.onAddEmail).toHaveBeenCalledWith(
        {},
        "TODO" as never,
      );
    });

    describe("to learn about usage", () => {
      it("counts how often people delete an email address", async () => {
        const user = userEvent.setup();
        render(
          <SettingsWrapper>
            <SettingsView
              activeTab="edit-info"
              l10n={getL10n()}
              user={mockedUser}
              subscriber={mockedSubscriber}
              breachCountByEmailAddress={{
                [mockedUser.email]: 42,
                [mockedSecondaryVerifiedEmail.email]: 42,
              }}
              emailAddresses={[mockedSecondaryVerifiedEmail]}
              fxaSettingsUrl=""
              fxaSubscriptionsUrl=""
              monthlySubscriptionUrl=""
              subscriptionBillingAmount={mockedSubscriptionBillingAmount}
              enabledFeatureFlags={[]}
              experimentData={defaultExperimentData["Features"]}
              isMonthlySubscriber={true}
              data={mockedPlusSubscriberEmailPreferences}
              isEligibleForPremium={false}
              actions={mockedActions}
              userAnnouncements={mockedAnnouncements}
            />
          </SettingsWrapper>,
        );

        const deleteEmailButton = screen.getByRole("button", {
          name: "Remove",
        });
        await user.click(deleteEmailButton);

        expect(mockedRecordTelemetry).toHaveBeenCalledWith(
          "button",
          "click",
          expect.objectContaining({
            button_id: "removed_email_address",
          }),
        );
      });

      // This test doesn't currently work because, as soon as we click `addButton`,
      // Jest complains that `useFormState` "is not a function or its return value
      // is not iterable". It's unclear why that is, but as Server Actions get more
      // widely used, hopefully the community/Vercel comes up with a way to resolve:
      // https://stackoverflow.com/q/77705420
      // eslint-disable-next-line jest/no-disabled-tests
      it.skip("counts how often people click the 'Add email address' button", async () => {
        const user = userEvent.setup();
        render(
          <SettingsWrapper>
            <SettingsView
              activeTab="edit-info"
              l10n={getL10n()}
              user={mockedUser}
              subscriber={mockedSubscriber}
              breachCountByEmailAddress={{
                [mockedUser.email]: 42,
              }}
              emailAddresses={[]}
              fxaSettingsUrl=""
              fxaSubscriptionsUrl=""
              monthlySubscriptionUrl=""
              subscriptionBillingAmount={mockedSubscriptionBillingAmount}
              enabledFeatureFlags={[]}
              experimentData={defaultExperimentData["Features"]}
              isMonthlySubscriber={true}
              data={mockedPlusSubscriberEmailPreferences}
              isEligibleForPremium={false}
              actions={mockedActions}
              userAnnouncements={mockedAnnouncements}
            />
          </SettingsWrapper>,
        );

        const addEmailButton = screen.getByRole("button", {
          name: "Add email address",
        });
        await user.click(addEmailButton);

        expect(mockedRecordTelemetry).toHaveBeenCalledWith(
          "ctaButton",
          "click",
          expect.objectContaining({
            button_id: "add_email_address",
          }),
        );
      });

      // This test doesn't currently work because, as soon as we click `addButton`,
      // Jest complains that `useFormState` "is not a function or its return value
      // is not iterable". It's unclear why that is, but as Server Actions get more
      // widely used, hopefully the community/Vercel comes up with a way to resolve:
      // https://stackoverflow.com/q/77705420
      // eslint-disable-next-line jest/no-disabled-tests
      it.skip("counts how often people close the 'Add email address' dialog", async () => {
        const user = userEvent.setup();
        render(
          <SettingsWrapper>
            <SettingsView
              activeTab="edit-info"
              l10n={getL10n()}
              user={mockedUser}
              subscriber={mockedSubscriber}
              breachCountByEmailAddress={{
                [mockedUser.email]: 42,
              }}
              emailAddresses={[]}
              fxaSettingsUrl=""
              fxaSubscriptionsUrl=""
              monthlySubscriptionUrl=""
              subscriptionBillingAmount={mockedSubscriptionBillingAmount}
              enabledFeatureFlags={[]}
              experimentData={defaultExperimentData["Features"]}
              isMonthlySubscriber={true}
              data={mockedPlusSubscriberEmailPreferences}
              isEligibleForPremium={false}
              actions={mockedActions}
              userAnnouncements={mockedAnnouncements}
            />
          </SettingsWrapper>,
        );

        const addEmailButton = screen.getByRole("button", {
          name: "Add email address",
        });
        await user.click(addEmailButton);
        await user.keyboard("[Escape]");

        expect(mockedRecordTelemetry).toHaveBeenCalledWith(
          "button",
          "click",
          expect.objectContaining({
            button_id: "close_add_email_modal",
          }),
        );
      });
    });
  });

  describe("Manage account", () => {
    it("shows the “Manage account” as active tab", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const tabListItem = screen.getByRole("tab", {
        name: "Manage account",
      });
      expect(tabListItem.getAttribute("aria-selected")).toBe("true");
    });

    it("hides the Plus cancellation link if the user doesn't have Plus", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationHeading = screen.queryByRole("heading", {
        name: "Cancel ⁨Monitor Plus⁩ subscription",
      });

      expect(cancellationHeading).not.toBeInTheDocument();
    });

    it("shows the Plus cancellation link if the user has Plus", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationHeading = screen.getByRole("heading", {
        name: "Cancel ⁨Monitor Plus⁩ subscription",
      });

      expect(cancellationHeading).toBeInTheDocument();
    });

    it("takes you through the cancellation dialog flow all the way to subplat", async () => {
      const user = userEvent.setup();

      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: false,
      });
      (mockedActions.onApplyCouponCode as jest.Mock).mockResolvedValueOnce({
        success: true,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={["CancellationFlow"]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });

      await user.click(cancellationButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-cancel-monitor-plus-dialog",
        }),
      );

      expect(
        screen.getByRole("dialog", {
          name: "Hey, before you go…",
        }),
      ).toBeInTheDocument();

      const continueToCancellationButton = screen.getByRole("button", {
        name: "Continue to cancellation",
      });
      await user.click(continueToCancellationButton);

      expect(
        screen.getByRole("dialog", {
          name: "We’re sorry to see you go. Will you tell us why you’re leaving?",
        }),
      ).toBeInTheDocument();

      const continueToCancellationButton2 = screen.getByRole("button", {
        name: "Continue to cancellation",
      });
      await user.click(continueToCancellationButton2);

      expect(
        screen.getByRole("dialog", {
          name: "Directing you to your ⁨Mozilla account⁩ to cancel",
        }),
      ).toBeInTheDocument();
    });

    it("closes the cancellation survey if the user selects nevermind, take me back", async () => {
      const user = userEvent.setup();

      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: false,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={["CancellationFlow"]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });

      await user.click(cancellationButton);

      const takeMeBackButton = screen.getByRole("button", {
        name: "Never mind, take me back",
      });

      await user.click(takeMeBackButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "never_mind_take_me_back",
        }),
      );

      expect(takeMeBackButton).not.toBeInTheDocument();
    });

    it("closes the cancellation dialog", async () => {
      const user = userEvent.setup();
      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: false,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={["CancellationFlow"]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });

      await user.click(cancellationButton);

      const cancellationDialogCloseBtn = screen.getByRole("button", {
        name: "Close modal",
      });

      await user.click(cancellationDialogCloseBtn);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "exited_cancel_flow",
        }),
      );
    });

    it("shows the account deletion button if the user does not have Plus", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const accountDeletionHeading = screen.getByRole("heading", {
        name: "Delete ⁨Monitor⁩ account",
      });
      const accountDeletionDescription = screen.getByText(
        "This will permanently delete your ⁨Monitor⁩ account and turn off all notifications.",
      );

      expect(accountDeletionHeading).toBeInTheDocument();
      expect(accountDeletionDescription).toBeInTheDocument();
    });

    it("warns about the consequences before deleting a free user's account", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      const dialog = screen.getByRole("dialog");
      const consequencesWarning = within(dialog).getByText(
        "All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches. This will not delete your ⁨Mozilla account⁩.",
      );

      expect(consequencesWarning).toBeInTheDocument();
    });

    it("shows a loading state while account deletion is in progress", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      const dialog = screen.getByRole("dialog");
      const confirmationButton = within(dialog).getByRole("button", {
        name: "Delete account",
      });
      await user.click(confirmationButton);

      expect(confirmationButton).toHaveAccessibleName("Loading");
      expect(confirmationButton).toHaveAttribute("aria-live", "polite");
    });

    it("shows the account deletion button if the user has Plus", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const accountDeletionHeading = screen.getByRole("heading", {
        name: "Delete ⁨Monitor⁩ account",
      });
      const accountDeletionDescription = screen.getByText(
        "This will delete your ⁨Monitor⁩ account and immediately end your paid ⁨Monitor Plus⁩ subscription.",
      );

      expect(accountDeletionHeading).toBeInTheDocument();
      expect(accountDeletionDescription).toBeInTheDocument();
    });

    it("warns about the consequences before deleting a Plus user's account", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      const dialog = screen.getByRole("dialog");
      const consequencesWarningP1 = within(dialog).getByText(
        "All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches or data broker exposures. This will not delete your ⁨Mozilla account⁩.",
      );
      const consequencesWarningP2 = within(dialog).getByText(
        "You’ll regain access to ⁨Monitor Plus⁩ features if you sign back in during any remaining time of your paid subscription.",
      );

      expect(consequencesWarningP1).toBeInTheDocument();
      expect(consequencesWarningP2).toBeInTheDocument();
    });

    it("counts how often free users click the 'Delete account' button", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );
    });

    it("counts how often free users close the 'Delete account' dialog", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);
      const dialog = screen.getByRole("dialog");
      const dismissButton = within(dialog).getByRole("button", {
        name: "Never mind, take me back",
      });
      await user.click(dismissButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );
    });

    it("counts how often free users close the 'Delete account' dialog via the keyboard", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);
      await user.keyboard("[Escape]");

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );
    });

    it("counts how often free users close the 'Delete account' dialog via the button in the corner", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);
      const dialog = screen.getByRole("dialog");
      const dismissButton = within(dialog).getByRole("button", {
        name: "Close modal",
      });
      await user.click(dismissButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );
    });

    it("counts how often Plus users click the 'Delete account' button", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-plus-dialog",
        }),
      );
    });

    it("counts how often Plus users close the 'Delete account' dialog", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);
      const dialog = screen.getByRole("dialog");
      const dismissButton = within(dialog).getByRole("button", {
        name: "Never mind, take me back",
      });
      await user.click(dismissButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-plus-dialog",
        }),
      );
    });

    it("counts how often users delete their account", async () => {
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: [],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const deleteAccountButton = screen.getByRole("button", {
        name: "Delete account",
      });
      await user.click(deleteAccountButton);

      const dialog = screen.getByRole("dialog");
      const confirmationButton = within(dialog).getByRole("button", {
        name: "Delete account",
      });
      await user.click(confirmationButton);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "ctaButton",
        "click",
        expect.objectContaining({
          button_id: "confirm_delete_account",
        }),
      );
    });

    it("selects the coupon code discount cta and shows the all-set dialog step", async () => {
      const user = userEvent.setup();

      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: false,
      });
      (mockedActions.onApplyCouponCode as jest.Mock).mockResolvedValueOnce({
        success: true,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[
              "CancellationFlow",
              "DiscountCouponNextThreeMonths",
            ]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });
      await user.click(cancellationButton);

      const discountCta = screen.getByRole("button", {
        name: "Stay and get ⁨30%⁩ off ⁨3⁩ months",
      });

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-cancel-monitor-plus-dialog",
        }),
      );
      expect(discountCta).toBeInTheDocument();

      await user.click(discountCta);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "ctaButton",
        "click",
        expect.objectContaining({
          button_id: "stay_get_30_off",
        }),
      );

      const allSetHeader = await screen.findByText("You’re all set!");
      expect(allSetHeader).toBeInTheDocument();

      const cancellationDialogCloseBtn = screen.getByRole("button", {
        name: "Close modal",
      });

      await user.click(cancellationDialogCloseBtn);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "exited_youre_all_set",
        }),
      );
    });

    it("shows error message if the applying the coupon code function was unsuccessful", async () => {
      const user = userEvent.setup();

      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: false,
      });
      (mockedActions.onApplyCouponCode as jest.Mock).mockResolvedValueOnce({
        success: false,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[
              "CancellationFlow",
              "DiscountCouponNextThreeMonths",
            ]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });
      await user.click(cancellationButton);

      const discountCta = screen.getByRole("button", {
        name: "Stay and get ⁨30%⁩ off ⁨3⁩ months",
      });

      await user.click(discountCta);

      const errorMessage = await screen.findByText(
        "There was a problem applying your discount",
        { exact: false },
      );

      expect(errorMessage).toBeInTheDocument();

      const tryAgainCta = screen.getByRole("button", {
        name: "Please try again.",
      });

      await user.click(tryAgainCta);

      expect(mockedActions.onApplyCouponCode).toHaveBeenCalled();
    });

    it("does not show the coupon code if a user already has a coupon set", async () => {
      const user = userEvent.setup();

      (
        mockedActions.onCheckUserHasCurrentCouponSet as jest.Mock
      ).mockResolvedValueOnce({
        success: true,
      });

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="manage-account"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              fxa: {
                ...mockedUser.fxa,
                subscriptions: ["monitor"],
              } as Session["user"]["fxa"],
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
            }}
            emailAddresses={[]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[
              "CancellationFlow",
              "DiscountCouponNextThreeMonths",
            ]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );
      const cancellationButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });
      await user.click(cancellationButton);
      const takeMeBackButton = screen.getByRole("button", {
        name: "Never mind, take me back",
      });
      expect(takeMeBackButton).toBeInTheDocument();
    });
  });

  describe("Set notifications", () => {
    it("preselects 'Send all breach alerts to the primary email address' if that's the user's current preference", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      expect(affectedRadioButton).not.toHaveAttribute("checked");
      expect(primaryRadioButton).toHaveAttribute("checked");
    });

    it("preselects 'Send breach alerts to the affected email address' if that's the user's current preference", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: false,
              },
            }}
            subscriber={{
              ...mockedSubscriber,
              all_emails_to_primary: false,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      expect(affectedRadioButton).toHaveAttribute("checked");
      expect(primaryRadioButton).not.toHaveAttribute("checked");
    });

    it("disables breach alert notification options if a user opts out of breach alerts", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );
      const activateBreachAlertsCheckbox = screen.getByLabelText(
        "Instant breach alerts",
        { exact: false },
      );
      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      await user.click(activateBreachAlertsCheckbox);

      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/user/update-comm-option",
        {
          body: JSON.stringify({
            instantBreachAlerts: "null",
          }),
          method: "POST",
        },
      );

      expect(activateBreachAlertsCheckbox).toHaveAttribute(
        "aria-checked",
        "false",
      );
      expect(primaryRadioButton).not.toBeInTheDocument();
      expect(affectedRadioButton).not.toBeInTheDocument();
    });

    it("preselects primary email alert option", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      expect(primaryRadioButton).toHaveAttribute("aria-checked", "true");
    });

    it("unselects the breach alerts checkbox and sends a null value to the API", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );
      const activateBreachAlertsCheckbox = screen.getByLabelText(
        "Instant breach alerts",
        { exact: false },
      );

      expect(primaryRadioButton).toHaveAttribute("aria-checked", "true");

      await user.click(activateBreachAlertsCheckbox);

      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/user/update-comm-option",
        {
          body: JSON.stringify({
            instantBreachAlerts: "null",
          }),
          method: "POST",
        },
      );
    });

    it("preselects the affected email comms option after a user decides to enable breach alerts", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();

      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: null,
              },
            }}
            subscriber={{
              ...mockedSubscriber,
              all_emails_to_primary: null,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const activateBreachAlertsCheckbox = screen.getByLabelText(
        "Instant breach alerts",
        { exact: false },
      );
      await user.click(activateBreachAlertsCheckbox);

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );

      expect(affectedRadioButton).toBeInTheDocument();
      expect(affectedRadioButton).toHaveAttribute("aria-checked", "true");
    });

    it("sends a call to the API to change the email alert preferences when changing the radio button values", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });

      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      await user.click(affectedRadioButton);

      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/user/update-comm-option",
        {
          body: JSON.stringify({
            instantBreachAlerts: "affected",
          }),
          method: "POST",
        },
      );
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );
      await user.click(primaryRadioButton);
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/user/update-comm-option",
        {
          body: JSON.stringify({
            instantBreachAlerts: "primary",
          }),
          method: "POST",
        },
      );
    });

    it("checks that monthly monitor report is available to free users", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedFreeUser,
            }}
            subscriber={{
              ...mockedSubscriber,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={false}
            data={mockedFreeSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor⁩ report",
        { exact: false },
      );
      expect(monthlyMonitorReportBtn).toHaveAttribute("aria-checked", "true");
    });

    it("checks that monthly monitor report is enabled", () => {
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
                monthly_monitor_report: true,
              },
            }}
            subscriber={{
              ...mockedSubscriber,
              monthly_monitor_report: true,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor Plus⁩ report",
        { exact: false },
      );
      expect(monthlyMonitorReportBtn).toHaveAttribute("aria-checked", "true");
    });

    it("sends an API call to disable monthly monitor reports", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
                monthly_monitor_report: true,
              },
            }}
            subscriber={{
              ...mockedSubscriber,
              all_emails_to_primary: true,
              monthly_monitor_report: true,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );
      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor Plus⁩ report",
        { exact: false },
      );

      await user.click(monthlyMonitorReportBtn);

      expect(global.fetch).toHaveBeenCalledWith(
        "/api/v1/user/update-comm-option",
        {
          body: JSON.stringify({
            monthlyMonitorReport: false,
          }),
          method: "POST",
        },
      );
    });

    it("calls the right telemetry event if a user opts out of monthly report", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
                monthly_monitor_report: true,
              },
            }}
            subscriber={{
              ...mockedSubscriber,
              all_emails_to_primary: true,
              monthly_monitor_report: true,
            }}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );
      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor Plus⁩ report",
        { exact: false },
      );

      await user.click(monthlyMonitorReportBtn);

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "button",
        "click",
        expect.objectContaining({
          button_id: "monthly_report_opt_out",
        }),
      );

      await user.click(monthlyMonitorReportBtn);
      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "button",
        "click",
        expect.objectContaining({
          button_id: "monthly_report_opt_in",
        }),
      );
    });

    it("refreshes the session token after changing email alert preferences, to ensure the latest pref is available in it", async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
      const user = userEvent.setup();
      render(
        <SettingsWrapper>
          <SettingsView
            activeTab="notifications"
            l10n={getL10n()}
            user={{
              ...mockedUser,
              subscriber: {
                ...mockedUser.subscriber!,
                all_emails_to_primary: true,
              },
            }}
            subscriber={mockedSubscriber}
            breachCountByEmailAddress={{
              [mockedUser.email]: 42,
              [mockedSecondaryVerifiedEmail.email]: 42,
            }}
            emailAddresses={[mockedSecondaryVerifiedEmail]}
            fxaSettingsUrl=""
            fxaSubscriptionsUrl=""
            monthlySubscriptionUrl=""
            subscriptionBillingAmount={mockedSubscriptionBillingAmount}
            enabledFeatureFlags={[]}
            experimentData={defaultExperimentData["Features"]}
            isMonthlySubscriber={true}
            data={mockedPlusSubscriberEmailPreferences}
            isEligibleForPremium={false}
            actions={mockedActions}
            userAnnouncements={mockedAnnouncements}
          />
        </SettingsWrapper>,
      );

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      await user.click(affectedRadioButton);

      expect(mockedSessionUpdate).toHaveBeenCalledTimes(1);
    });
  });

  it("does not crash if no email preferences were found for the current user", () => {
    const component = (
      <SettingsWrapper>
        <SettingsView
          activeTab="notifications"
          l10n={getL10n()}
          user={mockedUser}
          subscriber={mockedSubscriber}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          isMonthlySubscriber={true}
          data={undefined}
          isEligibleForPremium={false}
          actions={mockedActions}
          userAnnouncements={mockedAnnouncements}
        />
      </SettingsWrapper>
    );

    expect(() => render(component)).not.toThrow();
  });
});
