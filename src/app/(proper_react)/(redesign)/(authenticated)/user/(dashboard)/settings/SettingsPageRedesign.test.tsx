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
import { SettingsDetailsAboutYouMinDetails } from "./stories/SettingsEditProfile.stories";
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

import { onAddEmail, onRemoveEmail } from "./actions.mock";
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

    it("removes an email from the list of addresses to monitor for breaches", async () => {
      const user = userEvent.setup();
      const ComposedStory = composeStory(
        SettingsEditYourInfoAdditionalMonitoredEmails,
        SettingsEditYourInfoMeta,
      );
      render(<ComposedStory />);

      const removeEmailButton = screen.getAllByRole("button", {
        name: "Remove",
      });

      await act(async () => {
        await user.click(removeEmailButton[0]);
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
        SettingsEditYourInfoMeta,
      );
      const { container } = render(<ComposedStory />);
      expect(await axe(container)).toHaveNoViolations();
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
