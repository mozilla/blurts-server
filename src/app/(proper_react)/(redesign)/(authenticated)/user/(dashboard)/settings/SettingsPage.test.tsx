/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Session } from "next-auth";
import { userEvent } from "@testing-library/user-event";
import { getOneL10nSync } from "../../../../../../functions/server/mockL10n";
import { TestComponentWrapper } from "../../../../../../../TestComponentWrapper";
import { EmailRow } from "../../../../../../../db/tables/emailAddresses";
import { SerializedSubscriber } from "../../../../../../../next-auth";
import { onAddEmail, onRemoveEmail } from "./actions";

const mockedSessionUpdate = jest.fn();
jest.mock("next-auth/react", () => {
  return {
    useSession: () => {
      return {
        update: mockedSessionUpdate,
      };
    },
  };
});
jest.mock("../../../../../../hooks/useTelemetry");
jest.mock("./actions", () => {
  return {
    onRemoveEmail: jest.fn(),
    onAddEmail: jest.fn(),
  };
});

import { SettingsView } from "./View";

const subscriberId = 7;
const mockedSubscriber: SerializedSubscriber = {
  id: subscriberId,
  all_emails_to_primary: true,
} as SerializedSubscriber;
const mockedUser: Session["user"] = {
  email: "primary@example.com",
  subscriber: mockedSubscriber,
};
const mockedSecondaryVerifiedEmail: EmailRow = {
  id: 1337,
  email: "secondary_verified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: true,
};
const mockedSecondaryUnverifiedEmail: EmailRow = {
  id: 1337,
  email: "secondary_unverified@example.com",
  sha1: "arbitrary string",
  subscriber_id: subscriberId,
  verified: false,
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
      />
    </TestComponentWrapper>,
  );

  const removeButtons = screen.getAllByRole("button", { name: "Remove" });
  await user.click(removeButtons[0]);

  expect(onRemoveEmail).toHaveBeenCalledWith(mockedSecondaryVerifiedEmail);
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
        yearlySubscriptionUrl=""
        monthlySubscriptionUrl=""
      />
    </TestComponentWrapper>,
  );

  const addButton = screen.getByRole("button", { name: "Add email address" });
  await user.click(addButton);

  const emailAddressInput = screen.getByLabelText("Email address");
  await user.type(emailAddressInput, "new_address@example.com[Enter]");

  expect(onAddEmail).toHaveBeenCalledWith({}, "TODO");
});
