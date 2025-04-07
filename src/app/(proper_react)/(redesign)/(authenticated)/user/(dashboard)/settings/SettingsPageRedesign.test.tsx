/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { act, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { axe } from "jest-axe";
import SettingsMeta, {
  SettingsEditManageAccount,
  SettingsEditNotifications,
} from "./stories/SettingsRedesign.stories";
import SettingsEditYourInfoMeta, {
  SettingsEditYourInfoNoPlus,
  SettingsEditYourInfoWithPlus,
} from "./stories/SettingsEditInfoUsUsers.stories";
import SettingsDetailsAboutYou, {
  SettingsDetailsAboutYouMaxDetails,
  SettingsDetailsAboutYouMinDetails,
} from "./stories/SettingsEditProfile.stories";
import {
  SettingsEditYourInfo,
  SettingsEditYourInfoAdditionalMonitoredEmails,
  SettingsEditYourInfoMaxMonitoredEmails,
} from "./stories/SettingsEditInfoNonUsUsers.stories";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("#settings/actions", () => require("./actions.mock.ts"));
jest.mock("../../../../../../hooks/locationSuggestions");
jest.mock("../../../../../../hooks/useTelemetry");

import {
  onAddEmail,
  onRemoveEmail,
  onHandleUpdateProfileData,
} from "./actions.mock";
import { mockedVerifiedEmailFourth } from "./stories/settingsMockData";

describe("Settings page redesign", () => {
  describe("Edit your info (non-US users)", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfo,
        SettingsEditYourInfoMeta,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
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

    it("adds an email to the list of addresses to monitor for breaches", async () => {
      onAddEmail.mockResolvedValue({
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

        expect(onAddEmail).toHaveBeenCalled();
      });
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
        const dialog = screen.getByRole("dialog", {
          name: "Add an email address",
        });
        expect(dialog).toBeInTheDocument();
        const dismissButton = screen.getByRole("button", {
          name: "Close modal",
        });
        await user.click(dismissButton);
        expect(
          screen.queryByRole("dialog", {
            name: "Add an email address",
          }),
        ).not.toBeInTheDocument();
      });
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

      expect(onRemoveEmail).toHaveBeenCalled();
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
  });

  describe("Edit your info (US users)", () => {
    it("passes the axe accessibility test suite", async () => {
      const ComposedDashboard = composeStory(
        SettingsEditYourInfoWithPlus,
        SettingsEditYourInfoMeta,
      );
      const { container } = render(<ComposedDashboard />);
      expect(await axe(container)).toHaveNoViolations();
    });

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

    it("shows a link to a SUMO article on profile details for scans", () => {
      const ComposedStory = composeStory(
        SettingsEditYourInfoWithPlus,
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
        SettingsEditYourInfoWithPlus,
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
        SettingsEditYourInfoWithPlus,
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
        SettingsEditYourInfoWithPlus,
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
        SettingsEditYourInfoWithPlus,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const maxEmailsIndicator = screen.getByText("Add up to ⁨20⁩");
      expect(maxEmailsIndicator).toBeInTheDocument();
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
    });

    it("shows the mandatory initial profile details", () => {
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const firstNameInput = screen.getByLabelText("Legal first name*");
      expect(firstNameInput).toHaveValue("First01");

      const lastNameInput = screen.getByLabelText("Legal last name*");
      expect(lastNameInput).toHaveValue("Last01");

      const locationInput = screen.getByLabelText("City and state*");
      expect(locationInput).toHaveValue("Tulsa, OK, USA");
    });

    it("adds an input field to the form when clicking the “add” button", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const otherfirstNamesTitle = screen.queryByText("Other first names");
      expect(otherfirstNamesTitle).not.toBeInTheDocument();

      const addFirstNameButton = screen.getByRole("button", {
        name: "Add variations, aliases, deadnames you’ve gone by",
      });
      await act(async () => {
        await user.click(addFirstNameButton);
      });

      const otherirstNameInput = screen.getByLabelText("Other first name");
      expect(otherirstNameInput).toHaveValue("");
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

    it("shows the confirmation dialog when clicking the “Cancel” button", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

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
      onHandleUpdateProfileData.mockImplementationOnce(() => {});
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

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
      expect(onHandleUpdateProfileData).toHaveBeenCalled();
    });

    it("links back to “Edit your info” overview the from the confirmation dialog", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

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
        "/users/settings/edit-info",
      );
    });

    it("closes the confirmation dialog profile", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

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

    it("shows the disabled save form button when profile details did not change", () => {
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

    it("attempts to save the profile info form", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMinDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const addFirstNameButton = screen.getByRole("button", {
        name: "Add variations, aliases, deadnames you’ve gone by",
      });
      await act(async () => {
        await user.click(addFirstNameButton);
        const firstNameInput = screen.getByLabelText("Legal first name*");
        await user.type(firstNameInput, "2");
      });
      expect(screen.getByLabelText("Legal first name*")).toHaveValue(
        "First012",
      );

      const saveButton = screen.getByRole("button", {
        name: "Save",
      });
      expect(saveButton).toBeEnabled();

      await act(async () => {
        await user.click(saveButton);
      });
      expect(onHandleUpdateProfileData).toHaveBeenCalled();
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

    it("removes an input field to the form when clicking the “remove” button", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsDetailsAboutYouMaxDetails,
        SettingsDetailsAboutYou,
      );
      render(<ComposedStory />);

      const fieldset = screen.getByRole("group", {
        name: "Middle name",
      });
      expect(fieldset).toBeInTheDocument();
      const removeButtonsBefore =
        within(fieldset).getAllByLabelText("Remove item");
      expect(removeButtonsBefore.length).toBe(4);
      await act(async () => {
        await user.click(removeButtonsBefore[1]);
      });

      const removeButtonsAfter =
        within(fieldset).getAllByLabelText("Remove item");
      expect(removeButtonsAfter.length).toBe(3);
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
    });
  });
});
