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
  SettingsNoDefaultTab,
} from "./stories/SettingsRedesign.stories";
import SettingsEditYourInfoMeta, {
  SettingsEditYourInfoDetailsSaved,
  SettingsEditYourInfoNoPlus,
  SettingsEditYourInfoMinProfileDetailsWithPlus,
  SettingsEditYourInfoMaxProfileDetailsWithPlus,
} from "./stories/SettingsEditInfoUsUsers.stories";
import SettingsDetailsAboutYou, {
  SettingsDetailsAboutYouMaxDetails,
  SettingsDetailsAboutYouMinDetails,
} from "./stories/SettingsEditProfile.stories";
import {
  SettingsEditYourInfo,
  SettingsEditYourInfoAdditionalMonitoredEmails,
  SettingsEditYourInfoMaxMonitoredEmails,
  SettingsEditYourInfoMaxMonitoredEmailsIncreased,
} from "./stories/SettingsEditInfoNonUsUsers.stories";
import { mockedActions } from "./stories/SettingsStoryWrapper";

const mockedRouterPush = jest.fn();
const mockedRecordTelemetry = jest.fn();
jest.mock("../../../../../../hooks/useTelemetry", () => {
  return {
    useTelemetry: () => mockedRecordTelemetry,
  };
});

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockedRouterPush,
  }),
  usePathname: jest.fn(),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));
jest.mock("../../../../../../hooks/locationSuggestions");
jest.mock("../../../../../../hooks/useTelemetry");

import {
  mockedAnnouncements,
  mockedPlusSubscriberEmailPreferences,
  mockedProfileDataMax,
  mockedProfileDataMin,
  mockedSecondaryVerifiedEmail,
  mockedSession,
  mockedSubscriber,
  mockedSubscriptionBillingAmount,
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
    onHandleUpdateProfileData: jest.fn(),
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
    // Wrap the click (state update) in act()
    await act(async () => {
      await user.click(tabListItemNext);
    });
    expect(tabListItemInitial.getAttribute("aria-selected")).toBe("false");
    expect(tabListItemNext.getAttribute("aria-selected")).toBe("true");
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

  describe("Edit your info (US users)", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedDashboard = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      const { container } = render(<ComposedDashboard />);
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);

    it("shows the max number of emails that can be added to the list of addresses to monitor for breaches for subscribers without Plus", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoNoPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const maxEmailsIndicator = screen.getByText("Add up to ⁨5⁩");
      expect(maxEmailsIndicator).toBeInTheDocument();
    });

    it("shows the Plus upsell link for users without Plus subscription", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoNoPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const upsellLink = screen.getByRole("link", {
        name: "Upgrade to ⁨Monitor Plus⁩ to protect your personal info",
      });
      expect(upsellLink).toBeInTheDocument();
    });

    it("confirms the correct link for the Plus upsell link", () => {
      const ComposeStory = composeStory(
        SettingsEditYourInfoNoPlus,
        SettingsEditYourInfoMeta,
      );
      render(
        <ComposeStory
          enabledFeatureFlags={[
            "SidebarNavigationRedesign",
            "EditScanProfileDetails",
          ]}
        />,
      );

      const upsellLink = screen.getByRole("link", {
        name: "Upgrade to ⁨Monitor Plus⁩ to protect your personal info",
      });
      expect(upsellLink).toHaveAttribute("href", "/subscription-plans");
    });

    it("shows a link to a SUMO article on profile details for scans", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const sumoLink = screen.getByRole("link", {
        name: "Why should I add details for my scan? Open link in a new tab",
      });
      expect(sumoLink).toBeInTheDocument();
    });

    it("does not show the Plus upsell link for users with Plus subscription", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const upsellLink = screen.queryByRole("link", {
        name: "Upgrade to ⁨Monitor Plus⁩ to protect your personal info",
      });
      expect(upsellLink).not.toBeInTheDocument();
    });

    it("shows the “Details about you” section with a preview of the scan profile info", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const profileDetailsHeader = screen.getByRole("heading", {
        name: "Details about you",
      });
      expect(profileDetailsHeader).toBeInTheDocument();
    });

    it("shows the “Add details” button", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const addDetailsButton = screen.getByRole("link", {
        name: "Add details",
      });
      expect(addDetailsButton).toBeVisible();
      expect(addDetailsButton).toHaveAttribute(
        "href",
        "/user/settings/edit-profile",
      );
    });

    it("shows the max number of emails that can be added to the list of addresses to monitor for breaches for subscribers with Plus", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const maxEmailsIndicator = screen.getByText("Add up to ⁨20⁩");
      expect(maxEmailsIndicator).toBeInTheDocument();
    });

    it("does not show a notification if the user did not updated their profile details", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoMinProfileDetailsWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const notification = screen.queryByRole("alert");
      expect(notification).not.toBeInTheDocument();
    });

    it("shows a notification if the user just updated their profile details", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoDetailsSaved,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const notification = screen.getByRole("alert");
      expect(notification).toBeInTheDocument();

      const confirmationTitle = within(notification).getByText("Details saved");
      expect(confirmationTitle).toBeInTheDocument();
    });

    it("dismisses the “profile details saved” notification when the user dismisses it", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfoDetailsSaved,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const notification = screen.getByRole("alert");
      expect(notification).toBeInTheDocument();
      const dismissButton = within(notification).getByRole("button", {
        name: "Dismiss",
      });

      await act(async () => {
        await user.click(dismissButton);
      });

      expect(notification).not.toBeInTheDocument();
    });

    describe("Min profile details", () => {
      it("shows the name field", () => {
        const ComposedStory = composeStory(
          SettingsEditYourInfoMinProfileDetailsWithPlus,
          SettingsEditYourInfoMeta,
        );
        render(<ComposedStory />);

        const nameField = screen.getByText(
          `${mockedProfileDataMin.first_name} ${mockedProfileDataMin.last_name}`,
        );
        expect(nameField).toBeInTheDocument();
      });

      it("does not show any “more details” indicator on the name field", () => {
        const ComposedStory = composeStory(
          SettingsEditYourInfoMinProfileDetailsWithPlus,
          SettingsEditYourInfoMeta,
        );
        render(<ComposedStory />);

        const moreIndicator = screen.queryByText(/\+⁨\d⁩+\s+more/);
        expect(moreIndicator).not.toBeInTheDocument();
      });
    });

    describe("Max profile details", () => {
      it("shows the name field", () => {
        const ComposedStory = composeStory(
          SettingsEditYourInfoMaxProfileDetailsWithPlus,
          SettingsEditYourInfoMeta,
        );
        render(<ComposedStory />);

        const nameField = screen.getByText(
          `${mockedProfileDataMax.first_name} ${mockedProfileDataMax.middle_name} ${mockedProfileDataMax.last_name}`,
        );
        expect(nameField).toBeInTheDocument();
      });

      it.each([
        {
          fieldName: "Name",
          moreCount: 12,
        },
        {
          fieldName: "Phone number",
          moreCount: 9,
        },
        {
          fieldName: "Location",
          moreCount: 9,
        },
      ])("shows the “more items” indicator on the field: %s", (item) => {
        const ComposedStory = composeStory(
          SettingsEditYourInfoMaxProfileDetailsWithPlus,
          SettingsEditYourInfoMeta,
        );
        render(<ComposedStory />);

        const detailField = screen.getByText(item.fieldName);
        const moreIndicator = within(
          detailField.parentElement as HTMLElement,
        ).getByText(`+⁨${item.moreCount}⁩ more`);
        expect(moreIndicator).toBeInTheDocument();
      });
    });
  });

  describe("Edit your profile", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
    }, 10_000);

    it("does not show for users without Plus subscription", async () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory hasPlus={false} />);

      expect(mockedRouterPush).toHaveBeenCalledWith("/user/settings/edit-info");
    });

    it("does not show the navigation sidebar", async () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const tabListItem = screen.queryByRole("tab", {
        name: "Edit your info",
      });
      expect(tabListItem).not.toBeInTheDocument();
    });

    it("shows the initial mandatory profile details", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      expect(firstNameInput).toHaveValue("First01");

      const lastNameInput = screen.getByLabelText("Legal last name*");
      expect(lastNameInput).toHaveValue("Last01");

      const dobInput = screen.getByText(
        mockedProfileDataMin.date_of_birth.toLocaleDateString("en", {
          dateStyle: "short",
          timeZone: "UTC",
        }),
      );
      expect(dobInput).toBeInTheDocument();

      const locationInput = screen.getByLabelText("City and state*");
      expect(locationInput).toHaveValue("Tulsa, OK, USA");
    });

    it.each([
      {
        label: "Legal first name*",
        value: "Last-updated",
      },
      {
        label: "Legal last name*",
        value: "Last-updated",
      },
      {
        label: "City and state*",
        value: "Tulsa, OK, USA",
      },
    ])("updates the primary mandatory field: %s", async (input) => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const inputField = screen.getByLabelText(input.label);
      await act(async () => {
        await user.clear(inputField);
        await user.type(inputField, input.value);
      });
      expect(inputField).toHaveValue(input.value);
    });

    it.each([
      {
        label: "Middle name",
        value: "Middle01",
      },
      {
        label: "Primary phone number",
        value: "(555) 555 - 1234",
      },
    ])("fills the primary optional field: %s", async (input) => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const inputField = screen.getByLabelText(input.label);
      await act(async () => {
        await user.type(inputField, input.value);
      });
      expect(inputField).toHaveValue(input.value);
    });

    it.each([
      {
        input: {
          label: "Other first name",
          value: "First02",
        },
        addButtonLabel: "Add any variations or previous names you’ve gone by",
      },
      {
        input: {
          label: "Other middle name",
          value: "Middle02",
        },
        addButtonLabel: "Add variations or more middle names",
      },
      {
        input: {
          label: "Other last name",
          value: "Last02",
        },
        addButtonLabel: "Add variations or last names you’ve had",
      },
      {
        input: {
          label: "Other phone number",
          value: "3838383882",
        },
        addButtonLabel: "Add more numbers",
      },
      {
        input: {
          label: "Past location",
          value: "Tulsa, OK, USA",
        },
        addButtonLabel: "Add past US locations",
      },
    ])("adds the alternate field: %s", async (item) => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      if (item.addButtonLabel === "Add more numbers") {
        const inputField = screen.getByLabelText("Primary phone number");
        await act(async () => {
          await user.type(inputField, "3838383883");
        });
      }

      const addButton = screen.getByRole("button", {
        name: item.addButtonLabel,
      });
      await act(async () => {
        await user.click(addButton);
      });

      const input = screen.getByLabelText(item.input.label);
      await act(async () => {
        await user.clear(input);
        await user.type(input, item.input.value);
      });

      expect(input).toHaveValue(
        item.addButtonLabel === "Add more numbers"
          ? "(383) 838 - 3882"
          : item.input.value,
      );
    });

    it.each([
      {
        input: {
          label: "Other first name",
          value: "First02",
        },
        addButtonLabel: "Add any variations or previous names you’ve gone by",
      },
      {
        input: {
          label: "Other middle name",
          value: "Middle02",
        },
        addButtonLabel: "Add variations or more middle names",
      },
      {
        input: {
          label: "Other last name",
          value: "Last02",
        },
        addButtonLabel: "Add variations or last names you’ve had",
      },
      {
        input: {
          label: "Other phone number",
          value: "(383) 838 - 3883",
        },
        addButtonLabel: "Add more numbers",
      },
      {
        input: {
          label: "Past location",
          value: "Tulsa, OK, USA",
        },
        addButtonLabel: "Add past US locations",
      },
    ])("shows an error for duplicate alternate fields: %s", async (item) => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      if (item.addButtonLabel === "Add more numbers") {
        const inputField = screen.getByLabelText("Primary phone number");
        await act(async () => {
          await user.type(inputField, item.input.value);
        });
      }

      const addButton = screen.getByRole("button", {
        name: item.addButtonLabel,
      });
      await act(async () => {
        await user.click(addButton);
        await user.click(addButton);
      });

      const inputs = screen.getAllByLabelText(item.input.label);
      await act(async () => {
        await user.clear(inputs[0]);
        await user.type(inputs[0], item.input.value);
        await user.type(inputs[1], item.input.value);
      });

      const duplicateErrorMessage = within(
        inputs[1].parentElement as HTMLElement,
      ).getByText(/Remove duplicate/);
      expect(duplicateErrorMessage).toBeInTheDocument();
    });

    it.each([
      {
        fieldsetLabel: "First name",
        itemLimit: 4,
      },
      {
        fieldsetLabel: "Middle name",
        itemLimit: 4,
      },
      {
        fieldsetLabel: "Last name",
        itemLimit: 4,
      },
      {
        fieldsetLabel: "Phone numbers",
        itemLimit: 9,
      },
      {
        fieldsetLabel: "US locations",
        itemLimit: 9,
      },
    ])("removes the alternate field: %s", async (item) => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMaxDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const fieldset = screen.getByRole("group", {
        name: item.fieldsetLabel,
      });
      expect(fieldset).toBeInTheDocument();
      const removeButtonsBefore =
        within(fieldset).getAllByLabelText("Remove item");
      expect(removeButtonsBefore.length).toBe(item.itemLimit);
      await act(async () => {
        await user.click(removeButtonsBefore[1]);
      });

      const removeButtonsAfter =
        within(fieldset).getAllByLabelText("Remove item");
      expect(removeButtonsAfter.length).toBe(item.itemLimit - 1);
    });

    it("updates the primary location using keyboard navigation", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const input = screen.getByLabelText("City and state*");
      await act(async () => {
        await user.clear(input);
        await user.keyboard("Tu[ArrowDown][Enter][Tab]");
      });
      expect(input).toHaveValue("Tulsa, OK, USA");
    });

    it("adds an alternate location using keyboard navigation", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const addLocationButton = screen.getByRole("button", {
        name: "Add past US locations",
      });
      await act(async () => {
        await user.click(addLocationButton);
      });

      const input = screen.getByLabelText("Past location");
      await act(async () => {
        await user.click(input);
        await user.keyboard("Tu[ArrowDown][Enter][Tab]");
      });
      expect(input).toHaveValue("Tulsa, OK, USA");
    });

    it("links to the SUMO article for the date of birth section", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const sumoLink = screen.getByRole("link", {
        name: "Why?",
      });
      expect(sumoLink).toBeInTheDocument();
    });

    it("links back to the “Edit your info” overview without showing the confirmation dialog", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const cancelButton = screen.getByRole("link", {
        name: "Cancel",
      });
      expect(cancelButton).toHaveAttribute("href", "/user/settings/edit-info");
    });

    it("shows the confirmation dialog when clicking the “Cancel” button", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      await act(async () => {
        await user.type(firstNameInput, "2");
      });

      const cancelButton = screen.getByRole("button", {
        name: "Cancel",
      });
      await act(async () => {
        await user.click(cancelButton);
      });

      const confirmationDialog = screen.getByText("Save info?");
      expect(confirmationDialog).toBeInTheDocument();
    });

    it("attempts to save the profile info from the confirmation dialog", async () => {
      mockedActions.onHandleUpdateProfileData.mockResolvedValueOnce({
        success: true,
        error: "",
        errorMessage: "",
      });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      await act(async () => {
        await user.type(firstNameInput, "2");
      });

      const cancelButton = screen.getByRole("button", {
        name: "Cancel",
      });
      await act(async () => {
        await user.click(cancelButton);
      });

      const confirmationDialog = screen.getByText("Save info?");
      expect(confirmationDialog).toBeInTheDocument();

      const modalSaveButton = screen.getByRole("button", {
        name: "Save",
      });
      await act(async () => {
        await user.click(modalSaveButton);
      });
      expect(mockedActions.onHandleUpdateProfileData).toHaveBeenCalled();
    });

    it("links back to the “Edit your info” overview from the confirmation dialog", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      await act(async () => {
        await user.type(firstNameInput, "2");
      });

      const cancelButton = screen.getByRole("button", {
        name: "Cancel",
      });
      await act(async () => {
        await user.click(cancelButton);
      });

      const confirmationDialog = screen.getByText("Save info?");
      expect(confirmationDialog).toBeInTheDocument();

      const modalLeaveLink = screen.getByRole("link", {
        name: "Leave without saving",
      });
      expect(modalLeaveLink).toHaveAttribute(
        "href",
        "/user/settings/edit-info",
      );
    });

    it("dismisses the confirmation dialog profile", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      await act(async () => {
        await user.type(firstNameInput, "2");
      });

      const cancelButton = screen.getByRole("button", {
        name: "Cancel",
      });
      await act(async () => {
        await user.click(cancelButton);
      });

      const confirmationDialog = screen.getByText("Save info?");
      expect(confirmationDialog).toBeInTheDocument();

      const closeButton = screen.getByLabelText("Close modal");

      await act(async () => {
        await user.click(closeButton);
      });

      expect(screen.queryByText("Save info?")).not.toBeInTheDocument();
    });

    it("shows the disabled “save” button when the profile details did not change", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const saveButton = screen.getByRole("button", {
        name: "Save",
      });
      expect(saveButton).toBeDisabled();
    });

    it("attempts to save the updated profile details form", async () => {
      mockedActions.onHandleUpdateProfileData.mockResolvedValueOnce({
        success: true,
        error: "",
        errorMessage: "",
      });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      await act(async () => {
        const firstNameInput = screen.getByLabelText("Legal first name*");
        await user.type(firstNameInput, "2");
        expect(firstNameInput).toHaveValue("First012");
      });

      const saveButton = screen.getByRole("button", {
        name: "Save",
      });
      expect(saveButton).toBeEnabled();

      await act(async () => {
        await user.click(saveButton);
      });
      expect(mockedActions.onHandleUpdateProfileData).toHaveBeenCalled();
    });

    it("shows an error when an attempt to save the profile details form fails", async () => {
      mockedActions.onHandleUpdateProfileData.mockResolvedValueOnce({
        success: false,
        error: "",
        errorMessage: "",
      });
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      await act(async () => {
        const firstNameInput = screen.getByLabelText("Legal first name*");
        await user.type(firstNameInput, "2");
        expect(firstNameInput).toHaveValue("First012");
      });

      const saveButton = screen.getByRole("button", {
        name: "Save",
      });
      expect(saveButton).toBeEnabled();

      await act(async () => {
        await user.click(saveButton);
      });
      expect(
        screen.getByText(
          "Details couldn’t be saved right now. Try again later.",
        ),
      ).toBeInTheDocument();
    });

    it("shows an indicator that the maximum number of alternate details have been added", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMaxDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const maxItemsIndicator = screen.getByText(
        "You’ve added the maximum number of last names.",
      );
      expect(maxItemsIndicator).toBeInTheDocument();
    });

    it("does not show the “add” button when the max number of inputs have been added", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMaxDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const addButton = screen.queryByRole("button", {
        name: "Add variations or last names you’ve had",
      });
      expect(addButton).not.toBeInTheDocument();
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
          name: /Cancel ⁨Monitor Plus⁩ subscription/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: /Cancel your subscription/i }),
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
        name: /Cancel your subscription/i,
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
        screen.getByRole("dialog", { name: /Hey, before you go/i }),
      ).toBeInTheDocument();

      const dismissBtn = screen.getByRole("button", {
        name: /Close modal/i,
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
          screen.getByRole("button", { name: /Cancel your subscription/i }),
        );
      });

      const continueButton = screen.getByRole("button", {
        name: /Continue to cancellation/i,
      });

      await act(async () => {
        await user.click(continueButton);
      });

      expect(
        screen.getByRole("dialog", {
          name: /We’re sorry to see you go/i,
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
          screen.getByRole("button", { name: /Cancel your subscription/i }),
        );
      });

      const backButton = screen.getByRole("button", {
        name: /Never mind, take me back/i,
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
        screen.queryByRole("dialog", { name: /Hey, before you go/i }),
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
          screen.getByRole("button", { name: /Cancel your subscription/i }),
        );
      });

      const closeButton = screen.getByRole("button", { name: /Close modal/i });

      await act(async () => {
        await user.click(closeButton);
      });

      expect(
        screen.queryByRole("dialog", { name: /Hey, before you go/i }),
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
          screen.getByRole("button", { name: /Cancel your subscription/i }),
        );
        await user.click(
          screen.getByRole("button", { name: /Continue to cancellation/i }),
        );
        await user.click(
          screen.getByRole("button", { name: /Continue to cancellation/i }),
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
        screen.getByRole("heading", { name: /Delete ⁨Monitor⁩ account/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /This will permanently delete your ⁨Monitor⁩ account and turn off all notifications/i,
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
        name: /Delete account/i,
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
          /All of your ⁨Monitor⁩ account information will be deleted and we’ll no longer monitor for new data breaches/i,
        ),
      ).toBeInTheDocument();

      const closeButton = screen.getByRole("button", { name: /Close modal/i });

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
        name: /Never mind, take me back/i,
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
          screen.getByRole("button", { name: /Delete account/i }),
        );
      });

      // Confirm
      const dialog = screen.getByRole("dialog");
      const confirmButton = within(dialog).getByRole("button", {
        name: /Delete account/i,
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
  });
});
