/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeleteAccountButton } from "./DeleteAccountButton";

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(() => Promise.resolve()),
}));

const mockRecordTelemetry = jest.fn();

jest.mock("../../../../../../hooks/useTelemetry", () => ({
  useTelemetry: () => mockRecordTelemetry,
}));

jest.mock("../../../../../../hooks/l10n", () => ({
  useL10n: () => ({
    getString: () => "Loading",
  }),
}));

describe("DeleteAccountButton", () => {
  beforeEach(() => {
    mockRecordTelemetry.mockClear();
  });

  it("invokes the delete handler when the guard conditions are met", async () => {
    const onDeleteAccount = jest.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();

    render(
      <DeleteAccountButton variant="primary" onDeleteAccount={onDeleteAccount}>
        Delete account
      </DeleteAccountButton>,
    );

    const button = screen.getByRole("button", { name: "Delete account" });
    expect(button).not.toBeDisabled();

    await user.click(button);

    expect(onDeleteAccount).toHaveBeenCalledTimes(1);
    expect(mockRecordTelemetry).toHaveBeenCalledWith(
      "ctaButton",
      "click",
      expect.objectContaining({ button_id: "confirm_delete_account" }),
    );
  });

  it("keeps the button disabled when the window opener is untrusted", () => {
    const originalOpener = window.opener;
    Object.defineProperty(window, "opener", {
      configurable: true,
      writable: true,
      value: { location: { origin: "https://attacker.example" } },
    });

    const onDeleteAccount = jest.fn().mockResolvedValue(undefined);

    render(
      <DeleteAccountButton variant="primary" onDeleteAccount={onDeleteAccount}>
        Delete account
      </DeleteAccountButton>,
    );

    const button = screen.getByRole("button", { name: "Delete account" });

    expect(button).toBeDisabled();
    expect(
      screen.getByText("Click inside this window to enable account deletion."),
    ).toBeInTheDocument();

    Object.defineProperty(window, "opener", {
      configurable: true,
      writable: true,
      value: originalOpener ?? null,
    });
  });

  it("prompts the user when the button is not visible", async () => {
    const originalIntersectionObserver = window.IntersectionObserver;
    const mockIntersectionObserver = jest.fn(
      (callback: IntersectionObserverCallback) => {
        const instance: IntersectionObserver = {
          root: null,
          rootMargin: "",
          thresholds: [],
          disconnect: jest.fn(),
          observe: jest.fn(() => {
            callback(
              [
                {
                  boundingClientRect: {} as DOMRectReadOnly,
                  intersectionRatio: 0,
                  intersectionRect: {} as DOMRectReadOnly,
                  isIntersecting: false,
                  rootBounds: null,
                  target: document.createElement("button"),
                  time: 0,
                } as IntersectionObserverEntry,
              ],
              instance,
            );
          }),
          takeRecords: jest.fn(() => []),
          unobserve: jest.fn(),
        };

        return instance;
      },
    ) as unknown as typeof IntersectionObserver;

    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      writable: true,
      value: mockIntersectionObserver,
    });

    try {
      const onDeleteAccount = jest.fn().mockResolvedValue(undefined);

      render(
        <DeleteAccountButton
          variant="primary"
          onDeleteAccount={onDeleteAccount}
        >
          Delete account
        </DeleteAccountButton>,
      );

      expect(
        await screen.findByText(
          "Scroll until the delete button is in view to continue.",
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Delete account" }),
      ).toBeDisabled();
    } finally {
      if (originalIntersectionObserver) {
        Object.defineProperty(window, "IntersectionObserver", {
          configurable: true,
          writable: true,
          value: originalIntersectionObserver,
        });
      } else {
         
        // @ts-ignore - cleaning up the mock for environments without IntersectionObserver
        delete window.IntersectionObserver;
      }
    }
  });
});
