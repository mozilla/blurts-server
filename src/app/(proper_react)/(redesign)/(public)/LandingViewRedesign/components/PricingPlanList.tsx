/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useL10n } from "../../../../../hooks/l10n";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { modifyAttributionsForUrlSearchParams } from "../../../../../functions/universal/attributions";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { VisuallyHidden } from "../../../../../components/server/VisuallyHidden";
import {
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_URL_MONITOR_LANDING_PAGE_ID,
} from "../../../../../../constants";
import styles from "./PricingPlanList.module.scss";
import { CheckIcon } from "../../../../../components/server/Icons";
import { ScanLimit } from "../../ScanLimit";
import { FreeScanCta } from "../../FreeScanCta";
import { ExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";

export type Props = {
  "aria-labelledby": string;
  premiumSubscriptionUrl: {
    monthly: string;
  };
  subscriptionBillingAmount: {
    monthly: number;
  };
  enabledFeatureFlags: FeatureFlagName[];
};

type ScanLimitProp = {
  experimentData: ExperimentData["Features"];
  scanLimitReached: boolean;
  eligibleForPremium: boolean;
};

type PricingPlanData = {
  type: "free" | "plus";
  title: string;
  subtitle: string;
  features: ReactNode[];
  cta: ReactNode;
  label?: string;
};

export const PricingPlanList = (props: Props & ScanLimitProp) => {
  const l10n = useL10n();

  // The cookie `attributionsLastTouch` is set in the component `PageLoadEvent`
  // to help with attributions.
  const [cookies] = useCookies(["attributionsLastTouch"]);
  const newSearchParam = modifyAttributionsForUrlSearchParams(
    new URLSearchParams(cookies.attributionsLastTouch),
    {
      entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
      form_type: "button",
      data_cta_position: "pricing",
    },
    {
      utm_source: "product",
      utm_medium: "monitor",
      utm_campaign: "pricing",
    },
  );
  // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
  const additionalSubplatParamsString = `${props.enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${newSearchParam.toString()}`;

  const roundedPriceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
  const priceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  });
  const { monthly: monthlyPriceMonthlyBilling } =
    props.subscriptionBillingAmount;

  const pricingPlanData: PricingPlanData[] = [
    {
      type: "plus",
      label: l10n.getString("landing-redesign-pricing-plans-card-plus-label"),
      title: l10n.getString("landing-redesign-pricing-plans-card-plus-title"),
      subtitle: l10n.getString(
        "landing-redesign-pricing-plans-card-plus-subtitle",
      ),
      features: [
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-plus-feature-item-one",
          {
            vars: {
              data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
            },
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-plus-feature-item-two",
          {
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-plus-feature-item-three",
          {
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-plus-feature-item-four",
          {
            elems: { b: <b /> },
          },
        ),
      ],
      cta: (
        <>
          <p aria-live="polite">
            <strong id="pricingPlan">
              {l10n.getString(
                "landing-redesign-pricing-plans-card-plus-cta-monthly",
                {
                  monthlyPrice: priceFormatter.format(
                    monthlyPriceMonthlyBilling,
                  ),
                },
              )}
            </strong>
          </p>
          <TelemetryButton
            aria-describedby="pricingPlan pricingPlansReassurancePlus"
            disabled={props.scanLimitReached}
            variant="primary"
            href={`${props.premiumSubscriptionUrl["monthly"]}${additionalSubplatParamsString}`}
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "purchase_monthly_landing_page",
              },
            }}
          >
            {l10n.getString(
              "landing-redesign-pricing-plans-card-plus-cta-label",
            )}
          </TelemetryButton>
        </>
      ),
    },
    {
      type: "free",
      title: l10n.getString("landing-redesign-pricing-plans-card-free-title"),
      subtitle: l10n.getString(
        "landing-redesign-pricing-plans-card-free-subtitle",
      ),
      features: [
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-free-feature-item-one",
          {
            vars: {
              data_broker_sites_total_num: CONST_ONEREP_DATA_BROKER_COUNT,
            },
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-free-feature-item-two",
          {
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-free-feature-item-three",
          {
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-free-feature-item-four",
          {
            elems: { b: <b /> },
          },
        ),
        l10n.getFragment(
          "landing-redesign-pricing-plans-card-free-feature-item-five",
          {
            elems: { b: <b /> },
          },
        ),
      ],
      cta: (
        <>
          <p>
            <strong>{roundedPriceFormatter.format(0)}</strong>
          </p>
          {(props.enabledFeatureFlags.includes("DisableOneRepScans") &&
            props.eligibleForPremium) ||
          props.scanLimitReached ? (
            <ScanLimit />
          ) : (
            <FreeScanCta
              aria-describedby="pricingPlansBillingFree pricingPlansReassuranceFree"
              scanLimitReached={props.scanLimitReached}
              eligibleForPremium={props.eligibleForPremium}
              signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
              eventId={{
                cta: "clicked_free_pricing_card",
              }}
              experimentData={props.experimentData}
              ctaLabel={l10n.getString(
                "landing-redesign-pricing-plans-card-free-cta-label",
              )}
              showCtaOnly
            />
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <VisuallyHidden>
        <h3>{l10n.getString("landing-redesign-pricing-plans-cards-title")}</h3>
      </VisuallyHidden>
      <span className={styles.pricingPlans}>
        {pricingPlanData.map(
          ({ type, label, title, subtitle, features, cta }) => (
            <dl key={type} className={styles.pricingCard} aria-label={title}>
              <dt>
                <b>{title}</b>
                {label && (
                  <span className={styles.pricingCardLabel}>{label}</span>
                )}
                <p>{subtitle}</p>
              </dt>
              {features.map((feature, featureIndex) => (
                <dd key={`${type}-feature-${featureIndex}`}>
                  <CheckIcon
                    alt={l10n.getString(
                      "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
                    )}
                  />
                  <span>{feature}</span>
                </dd>
              ))}
              <dd className={styles.pricingCardCta}>{cta}</dd>
            </dl>
          ),
        )}
      </span>
    </>
  );
};
