/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen, within } from "@testing-library/react";
import { it, expect, vi } from "vitest";
import { composeStory } from "@storybook/react";
import { axe } from "vitest-axe";
import Meta, {
  PasswordsStory,
  SecurityQuestionsStory,
  LeakedPasswordsDoneStory,
} from "./LeakedPasswords.stories";
import { userEvent } from "@testing-library/user-event";
import { useTelemetry as useTelemetryImported } from "../../../../../../../../../hooks/useTelemetry";
import type { MockedFunction } from "vitest";

vi.mock("../../../../../../../../../hooks/useTelemetry");
// We need to override the types of `useTelemetry` here, because otherwise
// Vitest infers incorrect types in `toHaveBeenCalledWith`, and throws an error.
const useTelemetry = useTelemetryImported as MockedFunction<
  () => (
    module: string,
    eventName: string,
    data: Record<string, string>,
  ) => void
>;

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: vi.fn(),
}));

it("leaked passwords component passes the axe accessibility test suite", async () => {
  const ComposedComponent = composeStory(PasswordsStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("security questions component passes the axe accessibility test suite", async () => {
  const ComposedComponent = composeStory(SecurityQuestionsStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("passes the axe accessibility test suite for the leaked passwords celebration view", async () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);
  const { container } = render(<ComposedComponent />);
  expect(await axe(container)).toHaveNoViolations();
}, 10_000);

it("shows the leaked passwords celebration view, next step is security questions", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="passwords-done"
      nextUnresolvedBreachType="SecurityQuestions"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Let’s keep going",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/en/user/dashboard/fix/leaked-passwords/security-questions",
  );
});

it("shows the leaked passwords celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="passwords-done"
      nextUnresolvedBreachType="Email"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/en/user/dashboard/fix/security-recommendations/email",
  );
});

it("shows the leaked passwords celebration view, no next step", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(<ComposedComponent type="passwords-done" />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your passwords are now protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/en/user/dashboard");
});

it("shows the security questions celebration view, next step is security tips", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(
    <ComposedComponent
      type="security-questions-done"
      nextUnresolvedBreachType="IP"
    />,
  );

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "See recommendations",
  });
  expect(buttonLink).toHaveAttribute(
    "href",
    "/en/user/dashboard/fix/security-recommendations/ip",
  );
});

it("shows the security questions celebration view, no next step", () => {
  const ComposedComponent = composeStory(LeakedPasswordsDoneStory, Meta);

  render(<ComposedComponent type="security-questions-done" />);

  const viewHeading = screen.getByRole("heading", {
    name: "Your security questions are protected!",
  });
  expect(viewHeading).toBeInTheDocument();

  const buttonLink = screen.getByRole("link", {
    name: "Go to your Dashboard",
  });
  expect(buttonLink).toHaveAttribute("href", "/en/user/dashboard");
});

it("records telemetry when resolving a password", async () => {
  const mockedRecord = useTelemetry();
  const ComposedComponent = composeStory(PasswordsStory, Meta);
  render(<ComposedComponent type="passwords" />);
  const user = userEvent.setup();

  const buttonLink = screen.getByRole("button", {
    name: "Mark as fixed",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementationOnce(() => undefined);
  await user.click(buttonLink);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "marked_fixed",
      // button_name: "mark_as_fixed_password_",
    }),
  );
});

it("records telemetry when resolving a security question", async () => {
  const mockedRecord = useTelemetry();
  const ComposedComponent = composeStory(SecurityQuestionsStory, Meta);
  render(<ComposedComponent type="security-questions" />);
  const user = userEvent.setup();

  const buttonLink = screen.getByRole("button", {
    name: "Mark as fixed",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementationOnce(() => undefined);
  await user.click(buttonLink);

  expect(mockedRecord).toHaveBeenCalledWith(
    "ctaButton",
    "click",
    expect.objectContaining({
      button_id: "marked_fixed",
      // button_name: "mark_as_fixed_security_question_",
    }),
  );
});

it("records telemetry when skipping the passwords step", async () => {
  const mockedRecord = useTelemetry();
  const ComposedComponent = composeStory(PasswordsStory, Meta);
  render(<ComposedComponent type="passwords" />);
  const user = userEvent.setup();

  const buttonLink = screen.getByRole("link", {
    name: "Skip for now",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementationOnce(() => undefined);
  await user.click(buttonLink);

  expect(mockedRecord).toHaveBeenCalledWith(
    "button",
    "click",
    expect.objectContaining({
      button_id: "skipped_resolution",
      // button_name: "skip_for_now_password_question_",
    }),
  );
});

it("records telemetry when skipping the security questions step", async () => {
  const mockedRecord = useTelemetry();
  const ComposedComponent = composeStory(SecurityQuestionsStory, Meta);
  render(<ComposedComponent type="security-questions" />);
  const user = userEvent.setup();

  const buttonLink = screen.getByRole("link", {
    name: "Skip for now",
  });
  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementationOnce(() => undefined);
  await user.click(buttonLink);

  expect(mockedRecord).toHaveBeenCalledWith(
    "button",
    "click",
    expect.objectContaining({
      button_id: "skipped_resolution",
      // button_name: "skip_for_now_security_question_",
    }),
  );
});

it("records telemetry when clicking the breach link on a leaked password resolution step", async () => {
  const mockedRecord = useTelemetry();
  const ComposedComponent = composeStory(PasswordsStory, Meta);
  render(<ComposedComponent type="passwords" />);
  const user = userEvent.setup();

  const changeInfoBullet = screen.getByText("Change your password for", {
    exact: false,
  });
  const buttonLink = within(changeInfoBullet).getByRole("link");
  expect(buttonLink).toBeInTheDocument();

  // jsdom will complain about not being able to navigate to a different page
  // after clicking the link; suppress that error, as it's not relevant to the
  // test:
  const consoleErrorSpy: MockedFunction<typeof console.error> = vi
    .spyOn(console, "error")
    .mockImplementationOnce(() => undefined);
  await user.click(buttonLink);

  expect(mockedRecord).toHaveBeenCalledWith(
    "link",
    "click",
    expect.objectContaining({
      link_id: "changed_password",
      // link_name: `changed_password_${breachName}`,
    }),
  );
});
