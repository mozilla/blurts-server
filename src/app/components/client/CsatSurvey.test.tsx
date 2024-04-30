/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import Meta, { CsatSurveyBanner } from "./stories/CsatBanner.stories";
import { useTelemetry } from "../../hooks/useTelemetry";
import { deleteAllCookies } from "../../functions/client/deleteAllCookies";

jest.mock("../../hooks/useTelemetry");

afterEach(() => {
  // Make the CSAT banner show up again.
  deleteAllCookies();
});

describe("CSAT survey", () => {
  it("passes the axe accessibility test suite for CsatSurveyBanner", async () => {
    const ComposedTextComboBox = composeStory(CsatSurveyBanner, Meta);
    const { container } = render(<ComposedTextComboBox />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("displays the survey to users with automatic data removal enabled for less than 90 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={89} />);

    const answerButton = screen.getByRole("button", {
      name: "Dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it.each([90, 180, 351])(
    "displays the survey to users with automatic data removal enabled for at least n days",
    (dayCount) => {
      const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
      render(
        <ComposedCsatSurveyBanner
          elapsedTimeInDaysSinceInitialScan={dayCount}
        />,
      );

      const answerButton = screen.getByRole("button", {
        name: "Neutral",
      });
      expect(answerButton).toBeInTheDocument();
    },
  );

  it("shows the correct follow-up feedback link for response “Very dissatisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={91} />);

    const answerButton = screen.getByRole("button", {
      name: "Very dissatisfied",
    });
    await user.click(answerButton);

    const feedbackLink = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).toBeInTheDocument();
    expect(feedbackLink).toHaveAttribute(
      "href",
      "https://survey.alchemer.com/s3/7718223/9bf87045f7fb",
    );
  });

  it("shows the correct follow-up feedback link for response “Dissatisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={180} />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Dissatisfied",
    });
    await user.click(answerButton);

    const feedbackLink = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLLinkElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718561/6dfb2e8b6d68",
    );
  });

  it("shows the correct follow-up feedback link for response “Neutral”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={351} />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Neutral",
    });
    await user.click(answerButton);

    const feedbackLink = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLLinkElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718562/76e17004efd6",
    );
  });

  it("shows the correct follow-up feedback link for response “Satisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={91} />);

    const answerButton = screen.getByRole("button", {
      name: "Satisfied",
    });
    await user.click(answerButton);

    const feedbackLink = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).toBeInTheDocument();
    expect(feedbackLink).toHaveAttribute(
      "href",
      "https://survey.alchemer.com/s3/7718223/fbbb597a762a",
    );
  });

  it("shows the correct follow-up feedback link for response “Very satisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={180} />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    const feedbackLink = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLLinkElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718561/a443cc84b78a",
    );
  });

  it("records telemetry when submitting the survey", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={180} />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "csat_survey_6-months_very-satisfied",
      }),
    );
  });

  it("dismisses the survey by clicking the “close” button", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner />);

    const dismissButton = screen.getByRole("button", {
      name: "Dismiss",
    });
    await user.click(dismissButton);

    const answerButton = screen.queryByRole("button", {
      name: "Neutral",
    });
    expect(answerButton).not.toBeInTheDocument();
  });

  it("dismisses the survey by clicking the follow-up link", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner elapsedTimeInDaysSinceInitialScan={180} />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    const feedbackLinkOne = screen.getByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    await user.click(feedbackLinkOne);

    const feedbackLinkTwo = screen.queryByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLinkTwo).not.toBeInTheDocument();
  });
});
