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

export interface UpsellDialogProps {
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

export interface UpsellDialogContentProps {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
}

function UpsellDialogContent({
  monthlySubscriptionUrl,
  yearlySubscriptionUrl,
}: UpsellDialogContentProps) {
  const l10n = useL10n();
  const defaultSelectedKey = "yearly";
  const [selectedTab, setSelectedTab] = useState<Key>(defaultSelectedKey);
  const recordTelemetry = useTelemetry();

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
        href={isMonthly ? monthlySubscriptionUrl : yearlySubscriptionUrl}
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
          />
        </Dialog>
      </ModalOverlay>
    )
  );
}

export { UpsellDialog };
