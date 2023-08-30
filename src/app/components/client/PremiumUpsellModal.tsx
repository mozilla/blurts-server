/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Key, ReactNode, useState } from "react";
import Image from "next/image";
import type { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import { Dialog } from "./dialog/Dialog";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { TabList } from "./TabList";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import ModalImage from "../client/assets/premium-upsell-modal-icon.svg";
import styles from "./PremiumUpsellModal.module.scss";

export interface PremiumUpsellModalProps {
  children: ReactNode;
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

function PremiumUpsellModalContent() {
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

  return (
    <div className={styles.modalContent}>
      <div className={styles.productPlans}>
        <TabList
          tabs={tabsData}
          onSelectionChange={(selectedKey) => setSelectedTab(selectedKey)}
          defaultSelectedKey={selectedTab}
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
            { data_broker_count: 190 }
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
        href=""
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

function PremiumUpsellModal({
  children,
  state,
  ...otherProps
}: PremiumUpsellModalProps & OverlayTriggerProps) {
  const l10n = useL10n();

  return (
    <div className={styles.modal}>
      {children}
      {state.isOpen && (
        <ModalOverlay state={state} {...otherProps} isDismissable={true}>
          <Dialog
            title={l10n.getString("premium-upsell-modal-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => void state.close()}
            variant="horizontal"
          >
            <PremiumUpsellModalContent />
          </Dialog>
        </ModalOverlay>
      )}
    </div>
  );
}

export { PremiumUpsellModal };
