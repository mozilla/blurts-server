/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { act, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { userEvent, within } from "storybook/test";
import { axe } from "jest-axe";
import SettingsMeta, {
  SettingsEditManageAccount,
  SettingsEditManageAccountPlus,
  SettingsEditNotifications,
  SettingsEditNotificationsPlus,
  SettingsNoDefaultTab,
} from "./stories/Settings.stories";
import SettingsEditYourInfoMeta, {
  SettingsEditYourInfo,
  SettingsEditYourInfoAdditionalMonitoredEmails,
  SettingsEditYourInfoMaxMonitoredEmails,
  SettingsEditYourInfoMaxMonitoredEmailsIncreased,
} from "./stories/SettingsEditInfoNonUsUsers.stories";
import { mockedActions } from "./stories/SettingsStoryWrapper";

const mockedRouterPush = jest.fn();
const mockedRecordTelemetry = jest.fn();
const mockedRouterRefresh = jest.fn();

jest.mock("../../../../../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

const mockedSessionUpdate = jest.fn();

jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => ({
    data: { user: mockedUser },
    update: mockedSessionUpdate,
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
    refresh: mockedRouterRefresh,
  }),
  usePathname: () => "/user/settings",
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));
jest.mock("../../../../../../hooks/locationSuggestions");
jest.mock("../../../../../../hooks/useTelemetry");

import {
  mockedAnnouncements,
  mockedFreeSubscriberEmailPreferences,
  mockedSecondaryVerifiedEmail,
  mockedSession,
  mockedSubscriber,
  mockedUser,
  mockedVerifiedEmailFourth,
} from "./stories/settingsMockData";
import { TestComponentWrapper } from "../../../../../../../TestComponentWrapper";
import { Shell } from "../../../../Shell/Shell";
import { ComponentProps, ReactNode } from "react";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";
import { getL10n } from "../../../../../../functions/l10n/storybookAndJest";
import { defaultExperimentData } from "../../../../../../../telemetry/generated/nimbus/experiments";
import { SettingsView } from "./View";

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

describe("Tests from Old settings page", () => {
  const mockedActions: ComponentProps<typeof SettingsView>["actions"] = {
    onRemoveEmail: jest.fn(),
    onAddEmail: jest.fn(),
    onDeleteAccount: () => new Promise(() => undefined),
  };

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
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          data={mockedFreeSubscriberEmailPreferences}
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
    // Wrap the click (state update) in act()
    await act(async () => {
      await user.click(tabListItemNext);
    });
    expect(tabListItemInitial.getAttribute("aria-selected")).toBe("false");
    expect(tabListItemNext.getAttribute("aria-selected")).toBe("true");
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
          enabledFeatureFlags={[]}
          experimentData={defaultExperimentData["Features"]}
          data={undefined}
          actions={mockedActions}
          userAnnouncements={mockedAnnouncements}
        />
      </SettingsWrapper>
    );

    expect(() => render(component)).not.toThrow();
  });
});

describe("Settings page redesign", () => {
  describe("Edit your info (non-US users)", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);

    describe("SettingsContent activeTab handling", () => {
      it("defaults to the first tab (edit your info) when activeTab is not provided", () => {
        const ComposedStory = composeStory(SettingsNoDefaultTab, SettingsMeta);
        render(<ComposedStory />);
        const editYourInfoHeader = screen.queryAllByText("Update scan info");
        expect(editYourInfoHeader[1]).toBeInTheDocument();
      });
    });

    it("shows the max number of emails that can be added to the list of addresses to monitor for breaches", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const maxEmailsIndicator = screen.getByText("Add up to ⁨5⁩");
      expect(maxEmailsIndicator).toBeInTheDocument();
    });

    it("shows the max increased number of emails that can be added to the list of addresses to monitor for breaches", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      render(
        <ComposedStory
          enabledFeatureFlags={[
            "SidebarNavigationRedesign",
            "EditScanProfileDetails",
            "IncreasedFreeMaxBreachEmails",
          ]}
        />,
      );

      const maxEmailsIndicator = screen.getByText("Add up to ⁨20⁩");
      expect(maxEmailsIndicator).toBeInTheDocument();
    });

    it("adds an email to the list of addresses to monitor for breaches", async () => {
      mockedActions.onAddEmail.mockResolvedValue({
        success: true,
        submittedAddress: "mail@example.com",
      });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addEmailButton = screen.getByRole("button", {
        name: "Add email address",
      });
      await act(async () => {
        await user.click(addEmailButton);
        const dialog = screen.getByRole("dialog", {
          name: "Add an email address",
        });
        expect(dialog).toBeInTheDocument();

        const inputField = within(dialog).getByLabelText("Enter email address");
        await user.type(inputField, "mail@example.com");
        const sendVerificationButton = screen.getByRole("button", {
          name: "Send verification link",
        });
        await user.click(sendVerificationButton);

        expect(mockedActions.onAddEmail).toHaveBeenCalled();
      });
    });

    it("shows the confirmation dialog after adding an email to the list of addresses to monitor for breaches", async () => {
      mockedActions.onAddEmail.mockResolvedValue({
        success: true,
        submittedAddress: "mail@example.com",
      });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addEmailButton = screen.getByRole("button", {
        name: "Add email address",
      });
      await act(async () => {
        await user.click(addEmailButton);
        const dialog = screen.getByRole("dialog", {
          name: "Add an email address",
        });
        expect(dialog).toBeInTheDocument();

        const inputField = within(dialog).getByLabelText("Enter email address");
        await user.type(inputField, "mail@example.com");
        const sendVerificationButton = screen.getByRole("button", {
          name: "Send verification link",
        });
        await user.click(sendVerificationButton);
      });

      const confirmationDialog = screen.getByRole("dialog", {
        name: "Verification link sent to ⁨mail@example.com⁩",
      });
      expect(confirmationDialog).toBeInTheDocument();
    });

    it("dismisses the “add email” dialog", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addEmailButton = screen.getByRole("button", {
        name: "Add email address",
      });
      await act(async () => {
        await user.click(addEmailButton);
      });
      const dialog = screen.getByRole("dialog", {
        name: "Add an email address",
      });
      expect(dialog).toBeInTheDocument();
      const dismissButton = screen.getByRole("button", {
        name: "Close modal",
      });
      await act(async () => {
        await user.click(dismissButton);
      });

      expect(
        screen.queryByRole("dialog", {
          name: "Add an email address",
        }),
      ).not.toBeInTheDocument();
    });

    it("removes an email from the list of addresses to monitor for breaches", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfoAdditionalMonitoredEmails,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const removeEmailButtons = screen.getAllByRole("button", {
        name: "Remove",
      });
      await act(async () => {
        await user.click(removeEmailButtons[0]);
      });

      expect(mockedActions.onRemoveEmail).toHaveBeenCalled();
    });

    it("shows the “verification required” indicator for unconfirmed email addresses", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoAdditionalMonitoredEmails,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const verificationIndicator = screen.getByText(
        "Email verification required",
      );
      expect(verificationIndicator).toBeInTheDocument();
    });

    it("shows the “resend verification” link for unconfirmed email addresses", async () => {
      const user = userEvent.setup();
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const ComposedStory = composeStory(
        SettingsEditYourInfoAdditionalMonitoredEmails,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const resendButton = screen.getByRole("button", {
        name: "Resend verification link",
      });
      expect(resendButton).toBeInTheDocument();
      await act(async () => {
        await user.click(resendButton);
      });

      expect(global.fetch).toHaveBeenCalledWith("/api/v1/user/resend-email", {
        body: expect.stringContaining(
          `"emailId":${mockedVerifiedEmailFourth.id}`,
        ),
        headers: {
          Accept: "text/html",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "same-origin",
      });
    });

    it("does not show the option to add email addresses when the max number of email addresses have been added", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMaxMonitoredEmails,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addEmailButton = screen.queryByRole("button", {
        name: "Add email address",
      });
      expect(addEmailButton).not.toBeInTheDocument();
    });

    it("does not show the option to add email addresses when the max increased number of email addresses have been added", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMaxMonitoredEmailsIncreased,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addEmailButton = screen.queryByRole("button", {
        name: "Add email address",
      });
      expect(addEmailButton).not.toBeInTheDocument();
    });
  });

  describe("Manage account", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedStory = composeStory(
        SettingsEditManageAccount,
        SettingsMeta,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);
    it("renders the cancellation section for Plus users", () => {
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      expect(
        screen.getByRole("heading", {
          name: "Cancel ⁨Monitor Plus⁩ subscription",
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: "Cancel your subscription" }),
      ).toBeInTheDocument();
    });

    it("opens the cancellation dialog flow when 'Cancel your subscription' is clicked", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const cancelButton = screen.getByRole("button", {
        name: "Cancel your subscription",
      });

      await act(async () => {
        await user.click(cancelButton);
      });

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-cancel-monitor-plus-dialog",
        }),
      );

      expect(
        screen.getByRole("dialog", { name: "Hey, before you go…" }),
      ).toBeInTheDocument();

      const dismissBtn = screen.getByRole("button", {
        name: "Close modal",
      });

      await act(async () => {
        await user.click(dismissBtn);
      });

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "exited_cancel_flow",
        }),
      );
    });

    it("advances to the next step when 'Continue to cancellation' is clicked", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      await act(async () => {
        await user.click(
          screen.getByRole("button", { name: "Cancel your subscription" }),
        );
      });

      const continueButton = screen.getByRole("button", {
        name: "Continue to cancellation",
      });

      await act(async () => {
        await user.click(continueButton);
      });

      expect(
        screen.getByRole("dialog", {
          name: "We’re sorry to see you go. Will you tell us why you’re leaving?",
        }),
      ).toBeInTheDocument();
    });

    it("closes the dialog if 'Never mind, take me back' is clicked", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      await act(async () => {
        await user.click(
          screen.getByRole("button", { name: "Cancel your subscription" }),
        );
      });

      const backButton = screen.getByRole("button", {
        name: "Never mind, take me back",
      });
      await act(async () => {
        await user.click(backButton);
      });
      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "never_mind_take_me_back",
        }),
      );

      expect(
        screen.queryByRole("dialog", { name: "Hey, before you go…" }),
      ).not.toBeInTheDocument();
    });

    it("can close the cancellation dialog via the close button", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      await act(async () => {
        await user.click(
          screen.getByRole("button", { name: "Cancel your subscription" }),
        );
      });

      const closeButton = screen.getByRole("button", { name: "Close modal" });

      await act(async () => {
        await user.click(closeButton);
      });

      expect(
        screen.queryByRole("dialog", { name: "Hey, before you go…" }),
      ).not.toBeInTheDocument();
    });

    it("reaches the redirecting step after confirmation", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccountPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);
      await act(async () => {
        await user.click(
          screen.getByRole("button", { name: "Cancel your subscription" }),
        );
        await user.click(
          screen.getByRole("button", { name: "Continue to cancellation" }),
        );
        await user.click(
          screen.getByRole("button", { name: "Continue to cancellation" }),
        );
      });
      const redirectTitle = screen.getByText(
        "Directing you to your ⁨Mozilla account⁩ to cancel",
      );
      expect(redirectTitle).toBeInTheDocument();
    });

    it("shows the account deletion button if the user does not have Plus", () => {
      const ComposedStory = composeStory(
        SettingsEditManageAccount,
        SettingsMeta,
      );
      render(<ComposedStory />);
      expect(
        screen.getByRole("heading", { name: "Delete ⁨Monitor⁩ account" }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "This will permanently delete your ⁨Monitor⁩ account and turn off all notifications.",
        ),
      ).toBeInTheDocument();
    });

    it("warns about the consequences before deleting a free user's account", async () => {
      const user = userEvent.setup();

      const ComposedStory = composeStory(
        SettingsEditManageAccount,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const deleteAccBtn = screen.getByRole("button", {
        name: "Delete account",
      });

      await act(async () => {
        await user.click(deleteAccBtn);
      });
      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "view",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );
      const dialog = screen.getByRole("dialog");
      expect(
        within(dialog).getByText(
          "All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches. This will not delete your ⁨Mozilla account⁩.",
        ),
      ).toBeInTheDocument();

      const closeButton = screen.getByRole("button", { name: "Close modal" });

      await act(async () => {
        await user.click(closeButton);
      });

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "settings-delete-monitor-free-dialog",
        }),
      );

      // Also closes the modal with the "never mind, take me back" button
      await act(async () => {
        await user.click(deleteAccBtn);
      });
      const backButton = screen.getByRole("button", {
        name: "Never mind, take me back",
      });
      await act(async () => {
        await user.click(backButton);
      });
      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "popup",
        "exit",
        expect.objectContaining({
          popup_id: "never_mind_take_me_back",
        }),
      );
    });

    it("shows a loading state while account deletion is in progress", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditManageAccount,
        SettingsMeta,
      );
      jest.spyOn(console, "error").mockImplementationOnce(() => undefined);
      const mockDeleteAccount = jest.fn(() => Promise.resolve());
      render(
        <ComposedStory
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(ComposedStory.args as any)}
          actions={{ onDeleteAccount: mockDeleteAccount }}
        />,
      );

      // Open dialog
      await act(async () => {
        await user.click(
          screen.getByRole("button", { name: "Delete account" }),
        );
      });

      // Confirm
      const dialog = screen.getByRole("dialog");
      const confirmButton = within(dialog).getByRole("button", {
        name: "Delete account",
      });
      await act(async () => {
        await user.click(confirmButton);
      });

      expect(confirmButton).toHaveClass("isLoading");
      expect(confirmButton).toHaveAttribute("aria-live", "polite");
    });
  });

  describe("Set notifications", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedStory = composeStory(
        SettingsEditNotifications,
        SettingsMeta,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);

    it("preselects 'Send all breach alerts to the primary email address' if that's the user's current preference", () => {
      const ComposedStory = composeStory(
        SettingsEditNotifications,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      expect(affectedRadioButton).not.toHaveAttribute("checked");
      expect(primaryRadioButton).toHaveAttribute("checked");
    });

    it("disables breach alert notification options if a user opts out of breach alerts", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditNotifications,
        SettingsMeta,
      );
      render(<ComposedStory />);

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

      await act(async () => {
        await user.click(activateBreachAlertsCheckbox);
      });

      jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

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

    it("renders affected option by default when all_emails_to_primary is false", () => {
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );

      render(
        <ComposedStory
          subscriber={{
            ...mockedSubscriber,
            all_emails_to_primary: false,
          }}
        />,
      );

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      expect(affectedRadioButton).toHaveAttribute("aria-checked", "true");
    });

    it("hides radio options when all_emails_to_primary = null", () => {
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );

      render(
        <ComposedStory
          subscriber={{ ...mockedSubscriber, all_emails_to_primary: null }}
        />,
      );

      expect(
        screen.queryByLabelText(
          "Send all breach alerts to the primary email address",
        ),
      ).not.toBeInTheDocument();
    });

    it("unselects the breach alerts checkbox and sends a null value to the API", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });

      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditNotifications,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );
      const activateBreachAlertsCheckbox = screen.getByLabelText(
        "Instant breach alerts",
        { exact: false },
      );

      expect(primaryRadioButton).toHaveAttribute("aria-checked", "true");

      await act(async () => {
        await user.click(activateBreachAlertsCheckbox);
      });

      jest.spyOn(console, "error").mockImplementationOnce(() => undefined);

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

    it("sends a call to the API to change the email alert preferences when changing the radio button values", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      await act(async () => {
        await user.click(affectedRadioButton);
      });

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
      await act(async () => {
        await user.click(primaryRadioButton);
      });

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

    it("checks that the monthly monitor report is disabled for free users", () => {
      const ComposedStory = composeStory(
        SettingsEditNotifications,
        SettingsMeta,
      );
      render(<ComposedStory />);
      const monthlyMonitorReportBtn = screen.queryByLabelText(
        "Monthly ⁨Monitor⁩ report",
        { exact: false },
      );
      // The monthly email for free users is currently disabled; see MNTOR-4970.
      // expect(monthlyMonitorReportBtn).toHaveAttribute("aria-checked", "true");
      expect(monthlyMonitorReportBtn).not.toBeInTheDocument();
    });

    it("extracts monthly monitor report preference for free users (monthly_monitor_report_free field)", () => {
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );

      render(
        <ComposedStory
          data={{
            ...mockedFreeSubscriberEmailPreferences,
            monthly_monitor_report_free: true,
          }}
        />,
      );

      const toggleInput = screen.getByLabelText("Instant breach alerts", {
        exact: false,
      });

      expect(toggleInput).toBeInTheDocument();
    });

    it("checks that monthly monitor report is enabled", () => {
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(
        <ComposedStory
          subscriber={{
            ...mockedSubscriber,
            all_emails_to_primary: true,
            monthly_monitor_report: true,
          }}
        />,
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
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );

      render(
        <ComposedStory
          subscriber={{
            ...mockedSubscriber,
            all_emails_to_primary: true,
            monthly_monitor_report: true,
          }}
        />,
      );
      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor Plus⁩ report",
        { exact: false },
      );
      await act(async () => {
        await user.click(monthlyMonitorReportBtn);
      });

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
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const monthlyMonitorReportBtn = screen.getByLabelText(
        "Monthly ⁨Monitor Plus⁩ report",
        { exact: false },
      );

      await act(async () => {
        await user.click(monthlyMonitorReportBtn);
      });

      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "button",
        "click",
        expect.objectContaining({
          button_id: "monthly_report_opt_out",
        }),
      );
      await act(async () => {
        await user.click(monthlyMonitorReportBtn);
      });
      expect(mockedRecordTelemetry).toHaveBeenCalledWith(
        "button",
        "click",
        expect.objectContaining({
          button_id: "monthly_report_opt_in",
        }),
      );
    });

    it("preselects primary email alert option", () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);
      const primaryRadioButton = screen.getByLabelText(
        "Send all breach alerts to the primary email address",
      );

      expect(primaryRadioButton).toHaveAttribute("aria-checked", "true");
    });

    it("preselects the affected email comms option after a user decides to enable breach alerts", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: true });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);

      const activateBreachAlertsCheckbox = screen.getByLabelText(
        "Instant breach alerts",
        { exact: false },
      );
      await act(async () => {
        await user.click(activateBreachAlertsCheckbox);
      });

      expect(
        screen.queryByLabelText(
          "Send breach alerts to the affected email address",
        ),
      ).not.toBeInTheDocument();

      await act(async () => {
        await user.click(activateBreachAlertsCheckbox);
      });

      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );

      expect(affectedRadioButton).toBeInTheDocument();
      expect(affectedRadioButton).toHaveAttribute("aria-checked", "true");
    });

    it("refreshes the session token after changing email alert preferences, to ensure the latest pref is available in it", async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditNotificationsPlus,
        SettingsMeta,
      );
      render(<ComposedStory />);
      const affectedRadioButton = screen.getByLabelText(
        "Send breach alerts to the affected email address",
      );
      await act(async () => {
        await user.click(affectedRadioButton);
      });

      expect(mockedSessionUpdate).toHaveBeenCalledTimes(1);
    });
  });
});
