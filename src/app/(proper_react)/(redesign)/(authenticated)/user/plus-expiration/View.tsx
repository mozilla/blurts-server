/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { startTransition, useActionState, useState } from "react";
import Link from "next/link";
import type { SubscriberRow } from "knex/types/tables";
import styles from "./View.module.scss";
import { hasPremium } from "../../../../../functions/universal/user";
import { RenewalShell } from "./RenewalShell";
import { Button } from "../../../../../components/client/Button";
import type { checkChurnCouponCode } from "../../../../../functions/server/applyCoupon";
import { CONST_URL_PLUS_CONTACT_SUPPORT } from "../../../../../../constants";
import { CloseBtn, OpenInNew } from "../../../../../components/server/Icons";
import type { applyRenewalCoupon } from "./actions";
import { useL10n } from "../../../../../hooks/l10n";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";

export type Props = {
  subscriber: SubscriberRow;
  couponCheckResult: Awaited<ReturnType<typeof checkChurnCouponCode>>;
  applyCouponAction: typeof applyRenewalCoupon;
  manageSubscriptionsUrl: string;
  isOnExpirationList: boolean;
  enabledFeatureFlags: FeatureFlagName[];
};

export const View = (props: Props) => {
  const l10n = useL10n();
  const [applyCouponState, applyCouponAction, isApplyCouponPending] =
    useActionState(props.applyCouponAction, {
      success: false,
      error: "not_applied_yet",
    });
  const [isErrorDismissed, setErrorDismissed] = useState(false);

  if (!hasPremium(props.subscriber)) {
    return (
      <RenewalShell
        l10n={l10n}
        title={l10n.getString("plus-expiration-error-free-heading")}
      >
        <div className={styles.wrapper}>
          <h1>{l10n.getString("plus-expiration-error-free-heading")}</h1>
          <p>{l10n.getString("plus-expiration-error-free-content")}</p>
          <Button
            variant="primary"
            href={
              props.enabledFeatureFlags.includes("SubscriptionPlansPage")
                ? "/subscription-plans"
                : "/user/dashboard/action-needed?dialog=subscriptions"
            }
          >
            {l10n.getString("plus-expiration-error-free-cta-label")}
          </Button>
        </div>
      </RenewalShell>
    );
  }

  if (props.couponCheckResult.success) {
    // If the coupon was already applied before;
    return (
      <RenewalShell
        l10n={l10n}
        title={l10n.getString("plus-expiration-error-already-applied-heading")}
      >
        <div className={styles.wrapper}>
          <h1>
            {l10n.getString("plus-expiration-error-already-applied-heading")}
          </h1>
          <p>
            {l10n.getString(
              "plus-expiration-error-already-applied-content-part1",
            )}
          </p>
          <p>
            {l10n.getFragment(
              "plus-expiration-error-already-applied-content-part2",
              {
                elems: {
                  "support-link": (
                    <a href={`${CONST_URL_PLUS_CONTACT_SUPPORT}`} />
                  ),
                },
              },
            )}
          </p>
          <Button variant="primary" href="/user/dashboard">
            {l10n.getString("plus-expiration-error-already-applied-cta-label")}
          </Button>
        </div>
      </RenewalShell>
    );
  }

  if (!props.isOnExpirationList) {
    return (
      <RenewalShell
        l10n={l10n}
        title={l10n.getString("plus-expiration-error-not-expired-heading")}
      >
        <div className={styles.wrapper}>
          <h1>{l10n.getString("plus-expiration-error-not-expired-heading")}</h1>
          <p>{l10n.getString("plus-expiration-error-not-expired-content")}</p>
          <Button variant="primary" href="/user/dashboard">
            {l10n.getString("plus-expiration-error-not-expired-cta-label")}
          </Button>
        </div>
      </RenewalShell>
    );
  }

  // The tests that exercise this code path were too flaky, and thus are currently
  // skipped — see the respective comments in the `it.skip` tests:
  /* c8 ignore next 4 */
  const applyCoupon = () => {
    setErrorDismissed(false);
    return startTransition(() => applyCouponAction());
  };

  return (
    <RenewalShell
      l10n={l10n}
      title={
        // The tests that exercise this code path were too flaky, and thus are currently
        // skipped — see the respective comments in the `it.skip` tests:
        /* c8 ignore next 2 */
        applyCouponState.success
          ? l10n.getString("plus-expiration-confirm-heading")
          : l10n
              .getString("plus-expiration-intro-heading")
              .replace("<b>", "")
              .replace("</b>", "")
      }
    >
      <div className={styles.wrapper}>
        {
          // The tests that exercise this code path were too flaky, and thus are currently
          // skipped — see the respective comments in the `it.skip` tests:
          /* c8 ignore next 15 */
          applyCouponState.success ? (
            <>
              <h1>{l10n.getString("plus-expiration-confirm-heading")}</h1>
              <p>{l10n.getString("plus-expiration-confirm-content")}</p>
              <div className={styles.ctas}>
                <Button variant="primary" href="/user/dashboard">
                  {l10n.getString("plus-expiration-confirm-cta-label")}
                </Button>
                <Button variant="secondary" href={props.manageSubscriptionsUrl}>
                  {l10n.getString("plus-expiration-confirm-manage-button")}
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.content}>
                <h1>
                  {l10n.getFragment("plus-expiration-intro-heading", {
                    elems: { b: <b /> },
                  })}
                </h1>
                <p>{l10n.getString("plus-expiration-intro-content")}</p>
              </div>
              {applyCouponState.error &&
                // The tests that exercise this code path were too flaky, and thus are currently
                // skipped — see the respective comments in the `it.skip` tests:
                /* c8 ignore next 3 */
                applyCouponState.error !== "not_applied_yet" &&
                !isApplyCouponPending &&
                !isErrorDismissed && (
                  <p className={styles.error}>
                    {l10n.getFragment("plus-expiration-intro-generic-error", {
                      elems: {
                        "retry-button": (
                          <button
                            className={styles.retryButton}
                            // The tests that exercise this code path were too flaky, and thus are currently
                            // skipped — see the respective comments in the `it.skip` tests:
                            /* c8 ignore next */
                            onClick={() => applyCoupon()}
                          />
                        ),
                      },
                    })}
                    <button
                      // The tests that exercise this code path were too flaky, and thus are currently
                      // skipped — see the respective comments in the `it.skip` tests:
                      /* c8 ignore next */
                      onClick={() => setErrorDismissed(true)}
                      className={styles.dismissButton}
                    >
                      <CloseBtn
                        alt={l10n.getString(
                          "plus-expiration-intro-generic-error-dismiss",
                        )}
                      />
                    </button>
                  </p>
                )}
              <div className={styles.ctas}>
                <Button
                  variant="primary"
                  // The tests that exercise this code path were too flaky, and thus are currently
                  // skipped — see the respective comments in the `it.skip` tests:
                  /* c8 ignore next */
                  onPress={() => applyCoupon()}
                  isLoading={isApplyCouponPending}
                >
                  {l10n.getString("plus-expiration-intro-cta-label")}
                </Button>
                <p className={styles.terms}>
                  <Link href="/terms/expiration-offer" target="_blank">
                    {l10n.getString("plus-expiration-intro-terms")}
                    <OpenInNew
                      alt={l10n.getString("open-in-new-tab-alt")}
                      width={13}
                    />
                  </Link>
                </p>
              </div>
            </>
          )
        }
      </div>
    </RenewalShell>
  );
};
