/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import type { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { TabList } from "./TabList";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import ModalImage from "../client/assets/premium-upsell-dialog-icon.svg";
import styles from "./PremiumUpsellDialog.module.scss";
import { useTelemetry } from "../../hooks/useTelemetry";

export interface PremiumUpsellDialogProps {
  state: OverlayTriggerState;
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
}

function PremiumPricingLabel({ isMonthly }: { isMonthly?: boolean }) {
  const l10n = useL10n();

  return (
    <>
      <small className={styles.pricingInfo}>
        {l10n.getString(
          "fix-flow-data-broker-profiles-automatic-remove-save-percent",
          { percent: 10 },
        )}
      </small>
      <div className={styles.pricingPill}>
        <div className={styles.pricingLabel}>
          <b>
            {l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-headline",
            )}
          </b>
          <small>
            {isMonthly
              ? l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-frequency",
                )
              : l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-frequency",
                )}
          </small>
        </div>
        <b>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-price",
            { price: isMonthly ? "X.XX" : "Y.YY" },
          )}
        </b>
      </div>
    </>
  );
}

export interface PremiumUpsellDialogContentProps {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
}

function PremiumUpsellDialogContent({
  monthlySubscriptionUrl,
  yearlySubscriptionUrl,
}: PremiumUpsellDialogContentProps) {
  const l10n = useL10n();
  const defaultSelectedKey = "yearly";
  const [selectedTab, setSelectedTab] = useState<Key>(defaultSelectedKey);
  const record = useTelemetry();
  const currentPath = usePathname();
  const session = useSession();

  const isMonthly = selectedTab === "monthly";
  const tabsData = [
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly",
      ),
      key: "yearly",
      content: <PremiumPricingLabel />,
    },
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly",
      ),
      key: "monthly",
      content: <PremiumPricingLabel isMonthly />,
    },
  ];

  return (
    <div className={styles.modalContent}>
      <div className={styles.productPlans}>
        <TabList
          tabs={tabsData}
          defaultSelectedKey={defaultSelectedKey}
          onSelectionChange={(selectedKey) => {
            record("button", "click", {
              button_id:
                selectedKey === "monthly"
                  ? "selected_monthly_plan"
                  : "selected_yearly_plan",
              // Mocking the entire session object is too messy in tests:
              /* c8 ignore next */
              user_id: session.data?.user.subscriber?.fxa_uid ?? undefined,
              path: currentPath,
            });
            return setSelectedTab(selectedKey);
          }}
        />
      </div>
      <dl className={styles.list}>
        <dt>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-headline",
          )}
        </dt>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-monthly-scan",
            {
              data_broker_count: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10,
              ),
            },
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-remove-personal-info",
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-guided-experience",
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-continuous-monitoring",
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-breach-alerts",
          )}
        </dd>
      </dl>
      <Button
        className={styles.productCta}
        href={isMonthly ? monthlySubscriptionUrl : yearlySubscriptionUrl}
        onPress={() => {
          // Note: This doesn't currently work; the event is now never sent to
          //       the back-end because the page unloads before we can do so.
          //       This will be dealt with in upstream Glean:
          //       https://matrix.to/#/!SCdsJdSTaQHjzEVrAE:mozilla.org/$muLULIgsOMaLwe3HR6HI_oJbMkyD5gZBoRN3GmDL8Ko
          record("ctaButton", "click", {
            button_id: isMonthly
              ? "intent_to_purchase_monthly_plan_nav_modal"
              : "intent_to_purchase_yearly_plan_nav_modal",
            // Mocking the entire session object is too messy in tests:
            /* c8 ignore next */
            user_id: session.data?.user.subscriber?.fxa_uid ?? undefined,
            path: currentPath,
          });
        }}
        variant="primary"
      >
        {isMonthly
          ? l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-button",
            )
          : l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-button",
            )}
      </Button>
    </div>
  );
}

function PremiumUpsellDialog({
  state,
  yearlySubscriptionUrl,
  monthlySubscriptionUrl,
  ...otherProps
}: PremiumUpsellDialogProps & OverlayTriggerProps) {
  const l10n = useL10n();
  const record = useTelemetry();
  const currentPath = usePathname();
  const session = useSession();

  return (
    <div className={styles.modal}>
      {state.isOpen && (
        <ModalOverlay state={state} {...otherProps} isDismissable={true}>
          <Dialog
            title={l10n.getString("premium-upsell-dialog-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => {
              record("button", "click", {
                button_id: "close_upsell_modal",
                // Mocking the entire session object is too messy in tests:
                /* c8 ignore next */
                user_id: session.data?.user.subscriber?.fxa_uid ?? undefined,
                path: currentPath,
              });
              return void state.close();
            }}
            variant="horizontal"
          >
            <PremiumUpsellDialogContent
              monthlySubscriptionUrl={monthlySubscriptionUrl}
              yearlySubscriptionUrl={yearlySubscriptionUrl}
            />
          </Dialog>
        </ModalOverlay>
      )}
    </div>
  );
}

export { PremiumUpsellDialog };
