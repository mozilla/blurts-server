/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import Meta, {
  CsatSurveyAutomaticRemoval,
  CsatSurveyLatestScanDate,
} from "../stories/CsatSurvey.stories";
import { useTelemetry } from "../../../hooks/useTelemetry";
import { deleteAllCookies } from "../../../functions/client/deleteAllCookies";
import { createUserWithPremiumSubscription } from "../../../../apiMocks/mockData";
import { defaultExperimentData } from "../../../../telemetry/generated/nimbus/experiments";

jest.mock("../../../hooks/useTelemetry");

afterEach(() => {
  // Make the CSAT banner show up again.
  deleteAllCookies();
});

describe("CSAT survey banner: Automatic Removal", () => {
  it("passes the axe accessibility test suite for CsatSurveyBanner", async () => {
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    const { container } = render(<ComposedCsatSurvey />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("displays the survey to users with automatic data removal enabled for less than 90 days", () => {
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={89} />);

    const answerButton = screen.getByRole("button", {
      name: "Dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it.each([90, 180, 351, 716])(
    "displays the survey to users with automatic data removal enabled for at least n days",
    (dayCount) => {
      const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
      render(
        <ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={dayCount} />,
      );

      const answerButton = screen.getByRole("button", {
        name: "Neutral",
      });
      expect(answerButton).toBeInTheDocument();
    },
  );

  it("shows the correct follow-up feedback link for response “Very dissatisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={91} />);

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
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={180} />);

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
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={351} />);

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
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={716} />);

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
      "https://survey.alchemer.com/s3/8176616/091e554aa6ab",
    );
  });

  it("shows the correct follow-up feedback link for response “Very satisfied”", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={180} />);

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
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={180} />);

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "csatSurvey",
      "click",
      expect.objectContaining({
        survey_id: "csat_survey",
        experiment_branch: "treatment",
        response_id: "very-satisfied",
        automated_removal_period: "6-months",
      }),
    );
  });

  it("dismisses the survey by clicking the “close” button", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey />);

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
    const ComposedCsatSurvey = composeStory(CsatSurveyAutomaticRemoval, Meta);
    render(<ComposedCsatSurvey elapsedTimeInDaysSinceInitialScan={180} />);

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

describe("CSAT survey banner: Latest scan date", () => {
  it("passes the axe accessibility test suite for CsatSurveyBanner", async () => {
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    const { container } = render(<ComposedCsatSurvey />);
    expect(await axe(container)).toHaveNoViolations();
  }, 10_000);

  it("displays the survey to free users on the “action needed” tab", () => {
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    const user = createUserWithPremiumSubscription();
    if (user.fxa) {
      user.fxa.subscriptions = [];
    }

    render(
      <ComposedCsatSurvey
        user={user}
        activeTab="action-needed"
        signInCount={2}
        hasFirstMonitoringScan={false}
      />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Satisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("displays the survey to Plus users on the “fixed” tab", () => {
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    render(<ComposedCsatSurvey />);

    const answerButton = screen.getByRole("button", {
      name: "Dissatisfied",
    });
    expect(answerButton).toBeInTheDocument();
  });

  it("dismisses the survey by clicking the “close” button", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    render(<ComposedCsatSurvey />);

    const dismissButton = screen.getByRole("button", {
      name: "Dismiss",
    });
    await user.click(dismissButton);

    const answerButton = screen.queryByRole("button", {
      name: "Neutral",
    });
    expect(answerButton).not.toBeInTheDocument();
  });

  it("records telemetry when submitting the survey for users who are enrolled in the experiment", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    render(<ComposedCsatSurvey />);

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "csatSurvey",
      "click",
      expect.objectContaining({
        survey_id: "last_scan_date",
        experiment_branch: "treatment",
        response_id: "very-satisfied",
        last_scan_date: "20240731",
      }),
    );
  });

  it("records telemetry when submitting the survey for users who are not enrolled in the experiment", async () => {
    const mockedRecord = useTelemetry();
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    render(
      <ComposedCsatSurvey
        experimentData={{
          ...defaultExperimentData["Features"],
          "last-scan-date": {
            enabled: false,
          },
        }}
      />,
    );

    const answerButton = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButton);

    expect(mockedRecord).toHaveBeenCalledWith(
      "csatSurvey",
      "click",
      expect.objectContaining({
        survey_id: "last_scan_date",
        experiment_branch: "control",
        response_id: "very-satisfied",
      }),
    );
  });

  it("does not show a follow-up survey after submitting the survery", async () => {
    const user = userEvent.setup();
    const ComposedCsatSurvey = composeStory(CsatSurveyLatestScanDate, Meta);
    render(<ComposedCsatSurvey />);

    const answerButtonOne = screen.getByRole("button", {
      name: "Very satisfied",
    });
    await user.click(answerButtonOne);
    const feedbackLink = screen.queryByText(
      /Your feedback is helpful to us! How can we improve ⁨Monitor⁩ for you\?/i,
    );
    expect(feedbackLink).not.toBeInTheDocument();
  });
});
