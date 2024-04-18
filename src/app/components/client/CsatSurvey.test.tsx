/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import Meta, { CsatSurveyBanner } from "./stories/CsatBanner.stories";
import { CONST_DAY_MILLISECONDS } from "../../../constants";
import { useTelemetry } from "../../hooks/useTelemetry";
import { deleteAllCookies } from "../../functions/client/deleteAllCookies";

jest.mock("../../hooks/useTelemetry");

beforeEach(() => {
  // Make the CSAT banner show up again.
  deleteAllCookies();
});

describe("CSAT survey", () => {
  it("passes the axe accessibility test suite for CsatSurveyBanner", async () => {
    const ComposedTextComboBox = composeStory(CsatSurveyBanner, Meta);
    const { container } = render(<ComposedTextComboBox />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("does not display the survey to users who do not have automatic data removal enabled", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner elapsedTimeSinceInitialScan={-1} />);

    const answerButton = screen.queryByRole("button", {
      name: "Very dissatisfied",
    });
    expect(answerButton).not.toBeInTheDocument();
  });

  it("displays the survey to users with automatic data removal enabled for less than 90 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 89}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("displays the survey to users with automatic data removal enabled for at least 90 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 90}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Neutral",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("displays the survey to users with automatic data removal enabled for at least 180 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 180}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Satisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("displays the survey to users with automatic data removal enabled for at least 351 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 351}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very satisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("shows the correct follow-up feedback link for response “Very dissatisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 91}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLink = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718223/9bf87045f7fb",
    );
  });

  it("shows the correct follow-up feedback link for response “Dissatisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 180}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLink = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718561/6dfb2e8b6d68",
    );
  });

  it("shows the correct follow-up feedback link for response “Neutral”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 351}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Neutral",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLink = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718562/76e17004efd6",
    );
  });

  it("shows the correct follow-up feedback link for response “Satisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 91}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Satisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLink = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718223/fbbb597a762a",
    );
  });

  it("shows the correct follow-up feedback link for response “Very satisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 180}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very satisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLink = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLink).toBeInTheDocument();
    expect((feedbackLink as HTMLElement).getAttribute("href")).toBe(
      "https://survey.alchemer.com/s3/7718561/a443cc84b78a",
    );
  });

  it("records telemetry when submitting the survey", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 180}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very satisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    expect(mockedRecord).toHaveBeenCalledWith(
      "button",
      "click",
      expect.objectContaining({
        button_id: "csat_survey",
        // button_name: "very-satisfied",
      }),
    );
  });

  it("dismisses the survey by clicking the “close” button", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(<ComposedCsatSurveyBanner />);

    const dismissButton = screen.queryByRole("button", {
      name: "Dismiss",
    });
    expect(dismissButton).toBeInTheDocument();

    await user.click(dismissButton as HTMLElement);

    const answerButton = screen.queryByRole("button", {
      name: "Neutral",
    });
    expect(answerButton).not.toBeInTheDocument();
  });

  it("dismisses the survey by clicking the follow-up link", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 180}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very satisfied",
    });
    expect(answerButton).toBeInTheDocument();
    await user.click(answerButton as HTMLElement);

    const feedbackLinkOne = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLinkOne).toBeInTheDocument();
    await user.click(feedbackLinkOne as HTMLElement);

    const feedbackLinkTwo = screen.queryByRole("link", {
      name: "Your feedback is helpful to us! How can we improve Monitor for you?",
    });
    expect(feedbackLinkTwo).not.toBeInTheDocument();
  });
});
