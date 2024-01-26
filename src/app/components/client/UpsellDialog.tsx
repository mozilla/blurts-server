/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, useState } from "react";
import Image from "next/image";
import type { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { TabList } from "./TabList";
import { Button } from "../client/Button";
import { useL10n } from "../../hooks/l10n";
import ModalImage from "../client/assets/premium-upsell-dialog-icon.svg";
import styles from "./UpsellDialog.module.scss";
import { useTelemetry } from "../../hooks/useTelemetry";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../constants";
import { modifyAttributionsForUrl } from "../../functions/universal/attributions";

export interface UpsellDialogProps {
  state: OverlayTriggerState;
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
}

function PremiumPricingLabel({
  subscriptionBillingAmount,
  isMonthly,
}: {
  subscriptionBillingAmount: UpsellDialogProps["subscriptionBillingAmount"];
  isMonthly?: boolean;
}) {
  const l10n = useL10n();
  const yearlyPrice = subscriptionBillingAmount["yearly"];
  const monthlyPrice = subscriptionBillingAmount["monthly"];
  const discountPercentage = Math.floor(
    ((monthlyPrice - yearlyPrice) * 100) / monthlyPrice,
  );

  return (
    <>
      <small className={styles.pricingInfo}>
        {l10n.getString(
          "fix-flow-data-broker-profiles-automatic-remove-save-percent",
          { percent: discountPercentage },
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
            {
              price: isMonthly ? monthlyPrice : yearlyPrice,
            },
          )}
        </b>
      </div>
    </>
  );
}

export interface UpsellDialogContentProps {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
}

function UpsellDialogContent({
  monthlySubscriptionUrl,
  yearlySubscriptionUrl,
  subscriptionBillingAmount,
}: UpsellDialogContentProps) {
  const l10n = useL10n();
  const defaultSelectedKey = "yearly";
  const [selectedTab, setSelectedTab] = useState<Key>(defaultSelectedKey);
  const recordTelemetry = useTelemetry();

  // format subscription urls
  const monthlySubscriptionUrlWithAttributions = monthlySubscriptionUrl
    ? modifyAttributionsForUrl(
        monthlySubscriptionUrl,
        {
          form_type: "button",
          entrypoint:
            "monitor.mozilla.org-monitor-in-product-navigation-upsell",
        },
        {
          utm_source: "product",
          utm_medium: "monitor",
          utm_campaign: "navigation-upsell",
        },
      )
    : monthlySubscriptionUrl;
  const yearlySubscriptionUrlWithAttributions = yearlySubscriptionUrl
    ? modifyAttributionsForUrl(
        yearlySubscriptionUrl,
        {
          form_type: "button",
          entrypoint:
            "monitor.mozilla.org-monitor-in-product-navigation-upsell",
        },
        {
          utm_source: "product",
          utm_medium: "monitor",
          utm_campaign: "navigation-upsell",
        },
      )
    : yearlySubscriptionUrl;

  const isMonthly = selectedTab === "monthly";
  const tabsData = [
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly",
      ),
      key: "yearly",
      content: (
        <PremiumPricingLabel
          subscriptionBillingAmount={subscriptionBillingAmount}
        />
      ),
    },
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly",
      ),
      key: "monthly",
      content: (
        <PremiumPricingLabel
          subscriptionBillingAmount={subscriptionBillingAmount}
          isMonthly
        />
      ),
    },
  ];

  return (
    <div className={styles.modalContent}>
      <div className={styles.productPlans}>
        <TabList
          tabs={tabsData}
          defaultSelectedKey={defaultSelectedKey}
          onSelectionChange={(selectedKey) => {
            recordTelemetry("button", "click", {
              button_id:
                selectedKey === "monthly"
                  ? "selected_monthly_plan"
                  : "selected_yearly_plan",
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
              data_broker_count: CONST_ONEREP_DATA_BROKER_COUNT,
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
        href={
          isMonthly
            ? monthlySubscriptionUrlWithAttributions
            : yearlySubscriptionUrlWithAttributions
        }
        onPress={() => {
          // Note: This doesn't currently work; the event is now never sent to
          //       the back-end because the page unloads before we can do so.
          //       This will be dealt with in upstream Glean:
          //       https://matrix.to/#/!SCdsJdSTaQHjzEVrAE:mozilla.org/$muLULIgsOMaLwe3HR6HI_oJbMkyD5gZBoRN3GmDL8Ko
          recordTelemetry("upgradeIntent", "click", {
            button_id: isMonthly
              ? "intent_to_purchase_monthly_plan_nav_modal"
              : "intent_to_purchase_yearly_plan_nav_modal",
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

function UpsellDialog({
  state,
  yearlySubscriptionUrl,
  monthlySubscriptionUrl,
  subscriptionBillingAmount,
  ...otherProps
}: UpsellDialogProps & OverlayTriggerProps) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();

  return (
    state.isOpen && (
      <ModalOverlay state={state} {...otherProps} isDismissable={true}>
        <Dialog
          title={l10n.getString("premium-upsell-dialog-title")}
          illustration={<Image src={ModalImage} alt="" />}
          onDismiss={() => {
            recordTelemetry("button", "click", {
              button_id: "close_upsell_modal",
            });
            return void state.close();
          }}
          variant="horizontal"
        >
          <UpsellDialogContent
            monthlySubscriptionUrl={monthlySubscriptionUrl}
            yearlySubscriptionUrl={yearlySubscriptionUrl}
            subscriptionBillingAmount={subscriptionBillingAmount}
          />
        </Dialog>
      </ModalOverlay>
    )
  );
}

export { UpsellDialog };
