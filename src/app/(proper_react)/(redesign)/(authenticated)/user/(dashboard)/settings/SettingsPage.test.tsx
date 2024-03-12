/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { Session } from "next-auth";
import { userEvent } from "@testing-library/user-event";
import type { EmailAddressRow } from "knex/types/tables";
import { getOneL10nSync } from "../../../../../../functions/server/mockL10n";
import { TestComponentWrapper } from "../../../../../../../TestComponentWrapper";
import { SerializedSubscriber } from "../../../../../../../next-auth";
import { onAddEmail, onRemoveEmail } from "./actions";
import { sanitizeEmailRow } from "../../../../../../functions/server/sanitizeEmailRow";

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
jest.mock("./actions", () => {
  return {
    onRemoveEmail: jest.fn(),
    onAddEmail: jest.fn(),
    onDeleteAccount: () => new Promise(() => undefined),
  };
});

import { SettingsView } from "./View";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";

const subscriberId = 7;
const mockedSubscriber: SerializedSubscriber = {
  id: subscriberId,
  all_emails_to_primary: true,
} as SerializedSubscriber;
const mockedUser: Session["user"] = {
  email: "primary@example.com",
  subscriber: mockedSubscriber,
  fxa: {
    subscriptions: ["monitor"],
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

it("passes the axe accessibility audit", async () => {
  const { container } = render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={mockedUser}
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("preselects 'Send all breach alerts to the primary email address' if that's the user's current preference", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          subscriber: {
            ...mockedUser.subscriber!,
            all_emails_to_primary: true,
          },
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
          [mockedSecondaryVerifiedEmail.email]: 42,
        }}
        emailAddresses={[mockedSecondaryVerifiedEmail]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          subscriber: {
            ...mockedUser.subscriber!,
            all_emails_to_primary: false,
          },
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
          [mockedSecondaryVerifiedEmail.email]: 42,
        }}
        emailAddresses={[mockedSecondaryVerifiedEmail]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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

it("sends a call to the API to change the email alert preferences when changing the radio button values", async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true });
  const user = userEvent.setup();
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          subscriber: {
            ...mockedUser.subscriber!,
            all_emails_to_primary: true,
          },
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
          [mockedSecondaryVerifiedEmail.email]: 42,
        }}
        emailAddresses={[mockedSecondaryVerifiedEmail]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const affectedRadioButton = screen.getByLabelText(
    "Send breach alerts to the affected email address",
  );
  await user.click(affectedRadioButton);

  expect(global.fetch).toHaveBeenCalledWith("/api/v1/user/update-comm-option", {
    body: JSON.stringify({ communicationOption: "0" }),
    method: "POST",
  });

  const primaryRadioButton = screen.getByLabelText(
    "Send all breach alerts to the primary email address",
  );
  await user.click(primaryRadioButton);
  expect(global.fetch).toHaveBeenCalledWith("/api/v1/user/update-comm-option", {
    body: JSON.stringify({ communicationOption: "1" }),
    method: "POST",
  });
});

it("refreshes the session token after changing email alert preferences, to ensure the latest pref is available in it", async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
  const user = userEvent.setup();
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          subscriber: {
            ...mockedUser.subscriber!,
            all_emails_to_primary: true,
          },
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
          [mockedSecondaryVerifiedEmail.email]: 42,
        }}
        emailAddresses={[mockedSecondaryVerifiedEmail]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const affectedRadioButton = screen.getByLabelText(
    "Send breach alerts to the affected email address",
  );
  await user.click(affectedRadioButton);

  expect(mockedSessionUpdate).toHaveBeenCalledTimes(1);
});

it("marks unverified email addresses as such", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={mockedUser}
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={mockedUser}
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={mockedUser}
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const removeButtons = screen.getAllByRole("button", { name: "Remove" });
  await user.click(removeButtons[0]);

  expect(onRemoveEmail).toHaveBeenCalledWith(
    sanitizeEmailRow(mockedSecondaryVerifiedEmail),
  );
});

it("hides the Plus cancellation link if the user doesn't have Plus", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: [],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const cancellationHeading = screen.queryByRole("heading", {
    name: "Cancel ⁨Monitor Plus⁩ subscription",
  });

  expect(cancellationHeading).not.toBeInTheDocument();
});

it("shows the Plus cancellation link if the user has Plus", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: ["monitor"],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const cancellationHeading = screen.getByRole("heading", {
    name: "Cancel ⁨Monitor Plus⁩ subscription",
  });

  expect(cancellationHeading).toBeInTheDocument();
});

it("does not show the account deletion button if the relevant flag is not enabled", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: [],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["NotMonitorAccountDeletion" as FeatureFlagName]}
      />
    </TestComponentWrapper>,
  );

  const accountDeletionHeading = screen.queryByRole("heading", {
    name: "Delete ⁨Monitor⁩ account",
  });

  expect(accountDeletionHeading).not.toBeInTheDocument();
});

it("shows the account deletion button if the user does not have Plus", () => {
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: [],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: [],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const deleteAccountButton = screen.getByRole("button", {
    name: "Delete account",
  });
  await user.click(deleteAccountButton);

  const dialog = screen.getByRole("dialog");
  const consequencesWarning = within(dialog).getByText(
    "All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches. This will not delete your ⁨Mozilla⁩ account.",
  );

  expect(consequencesWarning).toBeInTheDocument();
});

it("shows a loading state while account deletion is in progress", async () => {
  const user = userEvent.setup();
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: [],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: ["monitor"],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const accountDeletionHeading = screen.getByRole("heading", {
    name: "Delete ⁨Monitor⁩ account",
  });
  const accountDeletionDescription = screen.getByText(
    "This will permanently delete your ⁨Monitor⁩ account and immediately end your paid ⁨Monitor Plus⁩ subscription.",
  );

  expect(accountDeletionHeading).toBeInTheDocument();
  expect(accountDeletionDescription).toBeInTheDocument();
});

it("warns about the consequences before deleting a Plus user's account", async () => {
  const user = userEvent.setup();
  render(
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={{
          ...mockedUser,
          fxa: {
            ...mockedUser.fxa,
            subscriptions: ["monitor"],
          } as Session["user"]["fxa"],
        }}
        breachCountByEmailAddress={{
          [mockedUser.email]: 42,
        }}
        emailAddresses={[]}
        fxaSettingsUrl=""
        fxaSubscriptionsUrl=""
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const deleteAccountButton = screen.getByRole("button", {
    name: "Delete account",
  });
  await user.click(deleteAccountButton);

  const dialog = screen.getByRole("dialog");
  const consequencesWarningP1 = within(dialog).getByText(
    "All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches or data broker exposures. This will not delete your ⁨Mozilla⁩ account.",
  );
  const consequencesWarningP2 = within(dialog).getByText(
    "Your paid subscription will end today and you won’t be prorated for the remainder of your subscription.",
  );

  expect(consequencesWarningP1).toBeInTheDocument();
  expect(consequencesWarningP2).toBeInTheDocument();
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
    <TestComponentWrapper>
      <SettingsView
        l10n={getOneL10nSync()}
        user={mockedUser}
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
        subscriptionBillingAmount={mockedSubscriptionBillingAmount}
        enabledFeatureFlags={["MonitorAccountDeletion"]}
      />
    </TestComponentWrapper>,
  );

  const addButton = screen.getByRole("button", { name: "Add email address" });
  await user.click(addButton);

  const emailAddressInput = screen.getByLabelText("Email address");
  await user.type(emailAddressInput, "new_address@example.com[Enter]");

  expect(onAddEmail).toHaveBeenCalledWith({}, "TODO");
});

describe("to learn about usage", () => {
  it("counts how often people delete an email address", async () => {
    const user = userEvent.setup();
    render(
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={mockedUser}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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

  it("counts how often people go to SubPlat to cancel their Plus subscription", async () => {
    const user = userEvent.setup();
    render(
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={mockedUser}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
    );

    const cancelPlusLink = screen.getByRole("link", {
      name: "Cancel from your ⁨Mozilla account⁩ Open link in a new tab",
    });
    await user.click(cancelPlusLink);

    expect(mockedRecordTelemetry).toHaveBeenCalledWith(
      "link",
      "click",
      expect.objectContaining({
        link_id: "cancel_plus",
      }),
    );
  });

  it("counts how often people go to Mozilla Accounts to delete their account", async () => {
    const user = userEvent.setup();
    render(
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={mockedUser}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
            [mockedSecondaryVerifiedEmail.email]: 42,
          }}
          emailAddresses={[mockedSecondaryVerifiedEmail]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
    );

    const deactivateAccountLink = screen.getByRole("link", {
      name: "Go to ⁨Mozilla account⁩ settings Open link in a new tab",
    });
    await user.click(deactivateAccountLink);

    expect(mockedRecordTelemetry).toHaveBeenCalledWith(
      "link",
      "click",
      expect.objectContaining({
        link_id: "deactivate_account",
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={mockedUser}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={mockedUser}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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

  it("counts how often free users click the 'Delete account' button", async () => {
    const user = userEvent.setup();
    render(
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: [],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: [],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: [],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: [],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
    );

    const deleteAccountButton = screen.getByRole("button", {
      name: "Delete account",
    });
    await user.click(deleteAccountButton);
    const dialog = screen.getByRole("dialog");
    const dismissButton = within(dialog).getByRole("button", {
      name: "Close",
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: ["monitor"],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: ["monitor"],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
      <TestComponentWrapper>
        <SettingsView
          l10n={getOneL10nSync()}
          user={{
            ...mockedUser,
            fxa: {
              ...mockedUser.fxa,
              subscriptions: [],
            } as Session["user"]["fxa"],
          }}
          breachCountByEmailAddress={{
            [mockedUser.email]: 42,
          }}
          emailAddresses={[]}
          fxaSettingsUrl=""
          fxaSubscriptionsUrl=""
          yearlySubscriptionUrl=""
          monthlySubscriptionUrl=""
          subscriptionBillingAmount={mockedSubscriptionBillingAmount}
          enabledFeatureFlags={["MonitorAccountDeletion"]}
        />
      </TestComponentWrapper>,
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
});
