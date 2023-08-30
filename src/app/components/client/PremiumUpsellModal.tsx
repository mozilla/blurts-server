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

import ModalImage from "../client/assets/premium-upsell-modal-icon.svg";
import styles from "./PremiumUpsellModal.module.scss";

export interface PremiumUpsellModalProps {
  children: ReactNode;
  state: OverlayTriggerState;
}

const upsellModalTitle = "Choose the level of protection that’s right for you";

const upsellModalMontlyPlanTabLabel = "Monthly";
const upsellModalMonthlyBillingPeriodText = "Billed monthly";
const upsellModalMonthlyPlanCtaLabel = "Select monthly plan";

const upsellModalYearlyPlanTabLabel = "Yearly";
const upsellModalYearlyBillingPeriodText = "Billed annually";
const upsellModalYearlyPlanInfo = "Save 10% with yearly plan 🎉";
const upsellModalYearlyPlanCtaLabel = "Select yearly plan";

const upsellModalBillingInfoTitle = "Premium protection";
const upsellModalBillingAmountLabel = (amount: string) => `$${amount} / mo`;

const upsellModalFeaturesListTitle = "Features:";
const upsellModalFeaturesListItem1 =
  "Monthly scan of 190 data broker sites that may be selling your personal info";
const upsellModalFeaturesListItem2 =
  "Automatic removal of personal info from sites that are selling it";
const upsellModalFeaturesListItem3 =
  "Guided experience through high risk data breaches that require manual steps";
const upsellModalFeaturesListItem4 = "Continuous monitoring for new exposures";
const upsellModalFeaturesListItem5 = " Alerts when your data has been breached";

function PremiumPricingLabel({ isMonthly }: { isMonthly?: boolean }) {
  return (
    <>
      <small className={styles.pricingInfo}>{upsellModalYearlyPlanInfo}</small>
      <div className={styles.pricingPill}>
        <div className={styles.pricingLabel}>
          <b>{upsellModalBillingInfoTitle}</b>
          <small>
            {isMonthly
              ? upsellModalMonthlyBillingPeriodText
              : upsellModalYearlyBillingPeriodText}
          </small>
        </div>
        <b>{upsellModalBillingAmountLabel(isMonthly ? "X.XX" : "Y.YY")}</b>
      </div>
    </>
  );
}

function PremiumUpsellModalContent() {
  const [selectedTab, setSelectedTab] = useState<Key>("yearly");

  const isMonthly = selectedTab === "monthly";
  const tabsData = [
    {
      name: upsellModalYearlyPlanTabLabel,
      key: "yearly",
      content: <PremiumPricingLabel />,
    },
    {
      name: upsellModalMontlyPlanTabLabel,
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
        <dt>{upsellModalFeaturesListTitle}</dt>
        <dd>{upsellModalFeaturesListItem1}</dd>
        <dd>{upsellModalFeaturesListItem2}</dd>
        <dd>{upsellModalFeaturesListItem3}</dd>
        <dd>{upsellModalFeaturesListItem4}</dd>
        <dd>{upsellModalFeaturesListItem5}</dd>
      </dl>
      <Button
        buttonType="link"
        className={styles.productCta}
        href=""
        variant="primary"
      >
        {isMonthly
          ? upsellModalMonthlyPlanCtaLabel
          : upsellModalYearlyPlanCtaLabel}
      </Button>
    </div>
  );
}

function PremiumUpsellModal({
  children,
  state,
  ...otherProps
}: PremiumUpsellModalProps & OverlayTriggerProps) {
  return (
    <div className={styles.modal}>
      {children}
      {state.isOpen && (
        <ModalOverlay state={state} {...otherProps} isDismissable={true}>
          <Dialog
            title={upsellModalTitle}
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
