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
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import ModalImage from "../client/assets/premium-upsell-dialog-icon.svg";
import styles from "./PremiumUpsellDialog.module.scss";

export interface PremiumUpsellDialogProps {
  state: OverlayTriggerState;
}

function PremiumPricingLabel({ isMonthly }: { isMonthly?: boolean }) {
  const l10n = useL10n();

  return (
    <>
      <small className={styles.pricingInfo}>
        {l10n.getString(
          "fix-flow-data-broker-profiles-automatic-remove-save-percent",
          { percent: 10 }
        )}
      </small>
      <div className={styles.pricingPill}>
        <div className={styles.pricingLabel}>
          <b>
            {l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-headline"
            )}
          </b>
          <small>
            {isMonthly
              ? l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-frequency"
                )
              : l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-frequency"
                )}
          </small>
        </div>
        <b>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-price",
            { price: isMonthly ? "X.XX" : "Y.YY" }
          )}
        </b>
      </div>
    </>
  );
}

function PremiumUpsellDialogContent() {
  const l10n = useL10n();
  const [selectedTab, setSelectedTab] = useState<Key>("yearly");

  const isMonthly = selectedTab === "monthly";
  const tabsData = [
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly"
      ),
      key: "yearly",
      content: <PremiumPricingLabel />,
    },
    {
      name: l10n.getString(
        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly"
      ),
      key: "monthly",
      content: <PremiumPricingLabel isMonthly />,
    },
  ];

  const premiumSubscriptionUrl =
    process.env.FXA_SUBSCRIPTIONS_URL &&
    process.env.PREMIUM_PRODUCT_ID &&
    process.env.PREMIUM_PLAN_ID_US &&
    `${process.env.FXA_SUBSCRIPTIONS_URL}/products/${process.env.PREMIUM_PRODUCT_ID}?plan=${process.env.PREMIUM_PLAN_ID_US}`;

  return (
    <div className={styles.modalContent}>
      <div className={styles.productPlans}>
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) => setSelectedTab(selectedKey)}
        />
      </div>
      <dl className={styles.list}>
        <dt>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-headline"
          )}
        </dt>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-monthly-scan",
            {
              data_broker_count: parseInt(
                process.env.NEXT_PUBLIC_ONEREP_DATA_BROKER_COUNT as string,
                10
              ),
            }
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-remove-personal-info"
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-guided-experience"
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-continuous-monitoring"
          )}
        </dd>
        <dd>
          {l10n.getString(
            "fix-flow-data-broker-profiles-automatic-remove-features-breach-alerts"
          )}
        </dd>
      </dl>
      <Button
        buttonType="link"
        className={styles.productCta}
        href={premiumSubscriptionUrl}
        variant="primary"
      >
        {isMonthly
          ? l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-button"
            )
          : l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-button"
            )}
      </Button>
    </div>
  );
}

function PremiumUpsellDialog({
  state,
  ...otherProps
}: PremiumUpsellDialogProps & OverlayTriggerProps) {
  const l10n = useL10n();

  return (
    <div className={styles.modal}>
      {state.isOpen && (
        <ModalOverlay state={state} {...otherProps} isDismissable={true}>
          <Dialog
            title={l10n.getString("premium-upsell-dialog-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => void state.close()}
            variant="horizontal"
          >
            <PremiumUpsellDialogContent />
          </Dialog>
        </ModalOverlay>
      )}
    </div>
  );
}

export { PremiumUpsellDialog };
