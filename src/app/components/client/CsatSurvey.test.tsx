/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import Meta, { CsatSurveyBanner } from "./stories/CsatBanner.stories";
import { CONST_DAY_MILLISECONDS } from "../../../constants";

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
      name: "Very Dissatisfied",
    });

    expect(answerButton).not.toBeInTheDocument();
  });

  it("does display the survey to users with automatic data removal enabled for less than 90 days", () => {
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

  it("does display the survey to users with automatic data removal enabled for at least 90 days", () => {
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

  it("does display the survey to users with automatic data removal enabled for at least 180 days", () => {
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

  it("does display the survey to users with automatic data removal enabled for at least 351 days", () => {
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 351}
      />,
    );

    const answerButton = screen.queryByRole("button", {
      name: "Very Satisfied",
    });

    expect(answerButton).toBeInTheDocument();
  });

  it("does show the correct follow-up feedback link", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurveyBanner = composeStory(CsatSurveyBanner, Meta);
    render(
      <ComposedCsatSurveyBanner
        elapsedTimeSinceInitialScan={CONST_DAY_MILLISECONDS * 91}
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
      "https://survey.alchemer.com/s3/7718223/fe77a597f97a",
    );
  });

  it("does dismiss the survey", async () => {
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
});
