/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import {
  ComponentProps,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { signOut } from "next-auth/react";
import { Button } from "../../../../../../components/client/Button";
import { type onDeleteAccount } from "./actions";
import { useTelemetry } from "../../../../../../hooks/useTelemetry";
import styles from "./DeleteAccountButton.module.scss";

const MIN_VISIBLE_RATIO = 0.6;
const MIN_SAFE_VIEWPORT_DIMENSION = 200;

/**
 * Since <Button> is a client component, the `onDeleteAccount` handler can only
 * be passed in from another client component
 *
 * @param props
 */
export const DeleteAccountButton = (
  props: ComponentProps<typeof Button> & {
    onDeleteAccount: typeof onDeleteAccount;
  },
) => {
  const recordTelemetry = useTelemetry();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guardState, setGuardState] = useState<{
    isAllowed: boolean;
    message: string | null;
  }>({
    isAllowed: false,
    message: null,
  });

  const visibilityRef = useRef(true);
  const pointerSatisfiedRef = useRef(false);
  const requirePointerRef = useRef(false);
  const hasTrustedOpenerRef = useRef(true);

  const recomputeGuard = useCallback(() => {
    if (typeof document === "undefined") {
      return;
    }

    const documentVisible = document.visibilityState === "visible";
    let windowHasFocus =
      typeof document.hasFocus === "function" ? document.hasFocus() : true;

    if (!windowHasFocus && typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent ?? "";
      if (/jsdom/i.test(userAgent)) {
        windowHasFocus = true;
      }
    }
    const targetVisible = visibilityRef.current;
    const requiresPointer = requirePointerRef.current;
    const hasPointer = pointerSatisfiedRef.current;

    const isAllowed =
      documentVisible &&
      windowHasFocus &&
      targetVisible &&
      (!requiresPointer || hasPointer);

    let message: string | null = null;

    if (!documentVisible || !windowHasFocus) {
      message = "Make sure this window is active to delete your account.";
    } else if (!targetVisible) {
      message = "Scroll until the delete button is in view to continue.";
    } else if (requiresPointer && !hasPointer) {
      message = "Click inside this window to enable account deletion.";
    }

    setGuardState((current) => {
      if (current.isAllowed === isAllowed && current.message === message) {
        return current;
      }

      return {
        isAllowed,
        message,
      };
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      if (!window.opener) {
        hasTrustedOpenerRef.current = true;
      } else {
        const openerOrigin = window.opener.location?.origin;
        hasTrustedOpenerRef.current = openerOrigin === window.location.origin;
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Unable to verify opener origin", error);
      }
      hasTrustedOpenerRef.current = false;
    }

    const evaluatePointerRequirement = () => {
      const requiresPointerDueToOpener = !hasTrustedOpenerRef.current;
      const requiresPointerDueToViewport =
        window.innerWidth < MIN_SAFE_VIEWPORT_DIMENSION ||
        window.innerHeight < MIN_SAFE_VIEWPORT_DIMENSION;

      requirePointerRef.current =
        requiresPointerDueToOpener || requiresPointerDueToViewport;
      recomputeGuard();
    };

    const pointerListener = (event: PointerEvent) => {
      if (!event.isTrusted) {
        return;
      }

      pointerSatisfiedRef.current = true;
      recomputeGuard();
    };

    const focusListener = () => {
      recomputeGuard();
    };

    const visibilityListener = () => {
      recomputeGuard();
    };

    const pointerListenerOptions: AddEventListenerOptions = {
      capture: true,
    };

    window.addEventListener("focus", focusListener);
    window.addEventListener("blur", focusListener);
    window.addEventListener("resize", evaluatePointerRequirement);
    document.addEventListener("visibilitychange", visibilityListener);
    document.addEventListener(
      "pointerdown",
      pointerListener,
      pointerListenerOptions,
    );
    document.addEventListener(
      "pointermove",
      pointerListener,
      pointerListenerOptions,
    );

    evaluatePointerRequirement();
    recomputeGuard();

    return () => {
      window.removeEventListener("focus", focusListener);
      window.removeEventListener("blur", focusListener);
      window.removeEventListener("resize", evaluatePointerRequirement);
      document.removeEventListener("visibilitychange", visibilityListener);
      document.removeEventListener(
        "pointerdown",
        pointerListener,
        pointerListenerOptions,
      );
      document.removeEventListener(
        "pointermove",
        pointerListener,
        pointerListenerOptions,
      );
    };
  }, [recomputeGuard]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const button = buttonRef.current;
    if (!button) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      visibilityRef.current = true;
      recomputeGuard();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        visibilityRef.current =
          entry?.isIntersecting === true &&
          entry.intersectionRatio >= MIN_VISIBLE_RATIO;
        recomputeGuard();
      },
      {
        threshold: [MIN_VISIBLE_RATIO],
      },
    );

    observer.observe(button);

    return () => {
      observer.disconnect();
    };
  }, [recomputeGuard]);

  const guardMessageId = useId();
  const { onDeleteAccount, ...buttonProps } = props;
  const describedBy =
    [
      // Existing aria-describedby values should be preserved.
      buttonProps["aria-describedby"],
      guardState.message ? guardMessageId : undefined,
    ]
      .filter(Boolean)
      .join(" ")
      .trim() || undefined;

  return (
    <div className={styles.wrapper}>
      <Button
        {...buttonProps}
        buttonRef={buttonRef}
        aria-describedby={describedBy}
        isLoading={isSubmitting}
        isDisabled={isSubmitting || !guardState.isAllowed}
        disabled={isSubmitting || !guardState.isAllowed}
        onPress={() => {
          if (!guardState.isAllowed) {
            return;
          }

          recordTelemetry("ctaButton", "click", {
            button_id: "confirm_delete_account",
          });
          setIsSubmitting(true);
          // It's currently unclear if and how we should mock our server action:
          /* c8 ignore next 8 */
          void onDeleteAccount()
            .then(() => {
              void signOut({ callbackUrl: "/" });
            })
            .catch(() => {
              setIsSubmitting(false);
            });
        }}
      />
      {guardState.message && (
        <p className={styles.guardMessage} id={guardMessageId} role="status">
          {guardState.message}
        </p>
      )}
    </div>
  );
};
