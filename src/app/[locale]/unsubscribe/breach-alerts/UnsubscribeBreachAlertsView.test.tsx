/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect, vi, describe, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import { toast } from "react-toastify";
import Meta, { ConfirmationState } from "./UnsubscribeBreachAlertsView.stories";

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

vi.mock("../../../hooks/useTelemetry");

vi.mock("react-toastify", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-toastify")>();
  return {
    ...actual,
    toast: {
      ...actual.toast,
      error: vi.fn(),
    },
  };
});

beforeEach(() => {
  global.fetch = vi.fn();
});

describe("UnsubscribeBreachAlertsView", () => {
  it("shows the confirmation header and unsubscribe button initially", () => {
    const ComposedView = composeStory(ConfirmationState, Meta);
    render(<ComposedView />);

    expect(
      screen.getByText("Unsubscribe from breach alert emails?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Unsubscribe" }),
    ).toBeInTheDocument();
  });

  it("shows the success state after a successful unsubscribe", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
    } as Response);

    const ComposedView = composeStory(ConfirmationState, Meta);
    render(<ComposedView />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => {
      expect(screen.getByText("You’re now unsubscribed")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/api/v1/user/unsubscribe?token="),
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows a toast error when the API returns a non-ok response", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
    } as Response);

    const ComposedView = composeStory(ConfirmationState, Meta);
    render(<ComposedView />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });

  it("shows a toast error when fetch throws", async () => {
    vi.mocked(global.fetch).mockRejectedValue(new Error("network error"));

    const ComposedView = composeStory(ConfirmationState, Meta);
    render(<ComposedView />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });

  it("calls signIn after unsubscribing and clicking the sign-in button", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
    } as Response);

    const { signIn } = await import("next-auth/react");

    const ComposedView = composeStory(ConfirmationState, Meta);
    render(<ComposedView />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Unsubscribe" }));

    await waitFor(() => {
      expect(screen.getByText("You’re now unsubscribed")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /Sign in to/i }));

    expect(signIn).toHaveBeenCalledWith("fxa", {
      callbackUrl: "/user/dashboard",
    });
  });
});
