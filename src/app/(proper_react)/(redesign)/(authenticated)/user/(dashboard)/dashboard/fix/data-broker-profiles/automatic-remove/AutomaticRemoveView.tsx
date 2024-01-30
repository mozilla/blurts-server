/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../dataBrokerProfiles.module.scss";
import { Button } from "../../../../../../../../../components/client/Button";
import { useL10n } from "../../../../../../../../../hooks/l10n";
import { FixView } from "../../FixView";
import { CONST_ONEREP_DATA_BROKER_COUNT } from "../../../../../../../../../../constants";
import { modifyAttributionsForUrl } from "../../../../../../../../../functions/universal/attributions";
import { useTelemetry } from "../../../../../../../../../hooks/useTelemetry";
import {
  RadioGroupProps,
  RadioGroupState,
  useRadioGroupState,
} from "react-stately";
import { AriaRadioProps, useRadio, useRadioGroup } from "react-aria";
import { VisuallyHidden } from "../../../../../../../../../components/server/VisuallyHidden";
import { BillingPeriod } from "../../../../../../../../../components/client/BillingPeriod";

export type BillingProps = {
  onChange: (_selectedBillingPeriod: BillingPeriod) => void;
};

export type Props = Omit<ComponentProps<typeof FixView>, "children"> & {
  monthlySubscriptionUrl: string;
  yearlySubscriptionUrl: string;
  subscriptionBillingAmount: {
    yearly: number;
    monthly: number;
  };
} & BillingProps;

const ToggleContext = createContext<RadioGroupState | null>(null);

type ToggleMenuProps = {
  children: ReactNode;
  label: string;
  description: string;
};

const SubscriptionFrequencyToggleMenu = (
  props: ToggleMenuProps & RadioGroupProps,
  //  & {  onChange: (_selectedBillingPeriod: BillingPeriod) => void; }
) => {
  const state = useRadioGroupState({ ...props, defaultValue: "yearly" });
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className={styles.upgradeToggle}>
      <ToggleContext.Provider value={state}>
        {props.children}
      </ToggleContext.Provider>
    </div>
  );
};

const SubscriptionFrequencyToggleItem = (props: AriaRadioProps) => {
  const { children } = props;
  const state = useContext(ToggleContext)!;
  const ref = useRef(null);

  const { inputProps } = useRadio(props, state, ref);

  return (
    <label>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={`${styles.toggleBtn} ${
          state.selectedValue === props.value ? styles.isActive : ""
        }`}
      >
        {children}
      </div>
    </label>
  );
};

export function AutomaticRemoveView(props: Props) {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const dataBrokerCount = CONST_ONEREP_DATA_BROKER_COUNT;

  const {
    monthlySubscriptionUrl,
    yearlySubscriptionUrl,
    subscriptionBillingAmount,
    ...fixViewProps
  } = props;

  const yearlyPrice = subscriptionBillingAmount["yearly"];
  const monthlyPrice = subscriptionBillingAmount["monthly"];
  const discountPercentage = Math.floor(
    ((monthlyPrice - yearlyPrice) * 100) / monthlyPrice,
  );

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // format subscription urls
  const addAttributions = (url: string) =>
    modifyAttributionsForUrl(
      url,
      {
        entrypoint: "monitor.mozilla.org-monitor-in-product-guided-upsell",
        form_type: "button",
      },
      {
        utm_source: "product",
        utm_medium: "monitor",
        utm_campaign: "guided-upsell",
      },
    );

  const monthlySubscriptionUrlWithAttributions = addAttributions(
    monthlySubscriptionUrl,
  );
  const yearlySubscriptionUrlWithAttributions = addAttributions(
    yearlySubscriptionUrl,
  );

  const [selectedPlanIsYearly, setSelectedPlanIsYearly] = useState(true);

  return (
    <FixView {...fixViewProps} hideProgressIndicator>
      <div>
        <div className={`${styles.content} ${styles.contentAutomaticRemove}`}>
          <h3 tabIndex={-1} ref={titleRef}>
            {l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-headline",
            )}
          </h3>
          <p>
            {l10n.getString(
              "fix-flow-data-broker-profiles-automatic-remove-subheadline",
              {
                data_broker_count: dataBrokerCount,
              },
            )}
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.upgradeToggleWrapper}>
            <SubscriptionFrequencyToggleMenu
              label=""
              description=""
              onChange={() => setSelectedPlanIsYearly(!selectedPlanIsYearly)}
            >
              <SubscriptionFrequencyToggleItem value="monthly">
                {l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-monthly",
                )}
              </SubscriptionFrequencyToggleItem>
              <SubscriptionFrequencyToggleItem value="yearly">
                {l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-toggle-yearly",
                )}
              </SubscriptionFrequencyToggleItem>
            </SubscriptionFrequencyToggleMenu>
            <span>
              {l10n.getString(
                "fix-flow-data-broker-profiles-automatic-remove-save-percent",
                { percent: discountPercentage },
              )}
            </span>
          </div>
          <div className={styles.upgradeContentWrapper}>
            {/* Feature List */}
            <div className={styles.featuresList}>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-headline",
                )}
              </strong>
              <ul>
                <li>
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-automatic-remove-features-monthly-scan",
                    {
                      data_broker_count: dataBrokerCount,
                    },
                  )}
                </li>
                <li>
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-automatic-remove-features-remove-personal-info",
                  )}
                </li>
                <li>
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-automatic-remove-features-guided-experience",
                  )}
                </li>
                <li>
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-automatic-remove-features-continuous-monitoring",
                  )}
                </li>
                <li>
                  {l10n.getString(
                    "fix-flow-data-broker-profiles-automatic-remove-features-breach-alerts",
                  )}
                </li>
              </ul>
            </div>
            {/* Plan select */}
            <div className={styles.selectedPlan}>
              <strong>
                {l10n.getString(
                  "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-headline",
                )}
                <small>
                  {selectedPlanIsYearly
                    ? l10n.getString(
                        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-frequency",
                      )
                    : l10n.getString(
                        "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-frequency",
                      )}
                </small>
              </strong>
              {/* Price */}
              <span>
                {selectedPlanIsYearly
                  ? l10n.getString(
                      "fix-flow-data-broker-profiles-automatic-remove-features-price",
                      { price: yearlyPrice },
                    )
                  : l10n.getString(
                      "fix-flow-data-broker-profiles-automatic-remove-features-price",
                      { price: monthlyPrice },
                    )}
              </span>
              <Button
                variant="primary"
                /* c8 ignore start */
                onPress={() => {
                  selectedPlanIsYearly
                    ? recordTelemetry("upgradeIntent", "click", {
                        button_id:
                          "intent_to_purchase_yearly_plan_guided_experience",
                      })
                    : recordTelemetry("upgradeIntent", "click", {
                        button_id:
                          "intent_to_purchase_monthly_plan_guided_experience",
                      });
                }}
                /* c8 ignore stop */
                href={
                  selectedPlanIsYearly
                    ? yearlySubscriptionUrlWithAttributions
                    : monthlySubscriptionUrlWithAttributions
                }
              >
                {selectedPlanIsYearly
                  ? l10n.getString(
                      "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-yearly-button",
                    )
                  : l10n.getString(
                      "fix-flow-data-broker-profiles-automatic-remove-features-select-plan-monthly-button",
                    )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FixView>
  );
}
