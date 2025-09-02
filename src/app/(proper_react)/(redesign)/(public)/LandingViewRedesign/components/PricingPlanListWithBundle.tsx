/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useL10n } from "../../../../../hooks/l10n";
import { useTelemetry } from "../../../../../hooks/useTelemetry";
import { getLocale } from "../../../../../functions/universal/getLocale";
import {
  BillingPeriod,
  BillingPeriodToggle,
} from "../../../../../components/client/BillingPeriod";
import { modifyAttributionsForUrlSearchParams } from "../../../../../functions/universal/attributions";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { VisuallyHidden } from "../../../../../components/server/VisuallyHidden";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
  CONST_ONEREP_DATA_BROKER_COUNT,
  CONST_URL_MONITOR_LANDING_PAGE_ID,
} from "../../../../../../constants";
import styles from "./PricingPlanListWithBundle.module.scss";
import {
  CheckIcon,
  MonitorIcon,
  PlusIcon,
  RelayIcon,
  VpnIcon,
} from "../../../../../components/server/Icons";
import { ScanLimit } from "../../ScanLimit";
import { FreeScanCta } from "../../FreeScanCta";
import { ExperimentData } from "../../../../../../telemetry/generated/nimbus/experiments";
import { FeatureFlagName } from "../../../../../../db/tables/featureFlags";
import { BundleBillingAmount } from "../../../../../functions/server/getPremiumSubscriptionInfo";
import { usePathname } from "next/navigation";

export type ProductBundleUrl = Record<"relay" | "vpn", string>;

export type PremiumSubscriptionUrl = {
  monthly: string;
  yearly: string;
  bundle: string;
};

export type SubscriptionBillingAmount = {
  yearly: number;
  monthly: number;
  bundle: BundleBillingAmount;
};

export type Props = {
  "aria-labelledby": string;
  premiumSubscriptionUrl: PremiumSubscriptionUrl;
  subscriptionBillingAmount: SubscriptionBillingAmount;
  enabledFeatureFlags: FeatureFlagName[];
  productBundleUrl: ProductBundleUrl;
  hideFreeCard?: boolean;
};

type ScanLimitProp = {
  experimentData: ExperimentData["Features"];
  scanLimitReached: boolean;
  eligibleForPremium: boolean;
};

type PricingPlanData = {
  type: "free" | "plus" | "bundle";
  title: string;
  subtitle: ReactNode | string;
  features: ReactNode[];
  cta: ReactNode;
  label?: ReactNode;
};

export const PricingPlanListWithBundle = (props: Props & ScanLimitProp) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  // The cookie `attributionsLastTouch` is set in the component `PageLoadEvent`
  // to help with attributions.
  const [cookies] = useCookies(["attributionsLastTouch"]);
  const landingPageSearchParams = {
    utm_source: "monitor-product",
    utm_medium: "monitor",
    utm_campaign: "landing-page-pricing-grid",
    utm_content: "pricing-grid-us",
  };
  const subscriptionPlansPageSearchParams = {
    utm_source: "monitor-product",
    utm_medium: "monitor",
    utm_campaign: "in-product-pricing-grid",
    utm_content: "get-started-us",
  };
  const initSearchParams = {
    entrypoint: CONST_URL_MONITOR_LANDING_PAGE_ID,
    form_type: "button",
    data_cta_position: "pricing",
  };
  const searchParams = isLandingPage
    ? landingPageSearchParams
    : subscriptionPlansPageSearchParams;
  const newSearchParamPlus = modifyAttributionsForUrlSearchParams(
    new URLSearchParams(cookies.attributionsLastTouch),
    initSearchParams,
    searchParams,
  );
  const newSearchParamBundle = modifyAttributionsForUrlSearchParams(
    new URLSearchParams(cookies.attributionsLastTouch),
    initSearchParams,
    searchParams,
  );
  // SubPlat2 subscription links already have the UTM parameter `?plan` appended.
  const additionalSubplatParamsStringPlus = `${props.enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${newSearchParamPlus.toString()}`;
  const additionalSubplatParamsStringBundle = `${props.enabledFeatureFlags.includes("SubPlat3") ? "?" : "&"}${newSearchParamBundle.toString()}`;

  const priceFormatter = new Intl.NumberFormat(getLocale(l10n), {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  const {
    yearly: monthlyPriceAnnualBilling,
    monthly: monthlyPriceMonthlyBilling,
    bundle: bundlePriceBilling,
  } = props.subscriptionBillingAmount;

  const bundleDiscountPercentage = Math.floor(
    (1 - bundlePriceBilling.monthly / bundlePriceBilling.individual) * 100,
  );

  const pricingPlanData: PricingPlanData[] = [
    {
      type: "bundle",
      label: l10n.getFragment(
        "landing-redesign-pricing-plans-card-bundle-label",
        {
          vars: {
            discountPercentage: bundleDiscountPercentage,
          },
        },
      ),
      title: l10n.getString("landing-redesign-pricing-plans-card-bundle-title"),
      subtitle: l10n.getString(
        "landing-redesign-pricing-plans-card-bundle-subtitle",
      ),
      features: [
        <a
          key="bundle-vpn"
          className={styles.bundleItemLink}
          target="_blank"
          href={`${props.productBundleUrl.vpn}?utm_medium=mozilla-websites&utm_source=monitor-product&utm_campaign=landing-page-pricing-grid&utm_content=landing-page-pricing-grid-us`}
        >
          <div className={styles.bundleTitle}>
            <VpnIcon alt="" />
            <b>
              {l10n.getString(
                "landing-redesign-pricing-plans-bundle-item-mozilla-vpn-title",
              )}
            </b>
          </div>
          {l10n.getString(
            "landing-redesign-pricing-plans-bundle-item-mozilla-vpn-description",
          )}
        </a>,
        <Link
          key="bundle-monitor"
          className={styles.bundleItemLink}
          target="_blank"
          href="/"
        >
          <div className={styles.bundleTitle}>
            <MonitorIcon alt="" />
            <b>
              {l10n.getString(
                "landing-redesign-pricing-plans-bundle-item-monitor-plus-title",
              )}
            </b>
          </div>
          {l10n.getString(
            "landing-redesign-pricing-plans-bundle-item-monitor-plus-description",
          )}
        </Link>,
        <a
          key="bundle-relay"
          className={styles.bundleItemLink}
          target="_blank"
          href={`${props.productBundleUrl.relay}?utm_medium=mozilla-websites&utm_source=monitor-product&utm_campaign=landing-page-pricing-grid&utm_content=landing-page-pricing-grid-us`}
        >
          <div className={styles.bundleTitle}>
            <RelayIcon alt="" />
            <b>
              {l10n.getString(
                "landing-redesign-pricing-plans-bundle-item-relay-premium-title",
              )}
            </b>
          </div>
          {l10n.getString(
            "landing-redesign-pricing-plans-bundle-item-relay-premium-description",
          )}
        </a>,
      ],
      cta: (
        <>
          <p id="pricingPlanBundle">
            <span className={styles.pricingCardSavings}>
              {l10n.getString(
                "landing-redesign-pricing-plans-card-cta-yearly-billing-label",
                {
                  yearlyPrice: priceFormatter.format(
                    props.subscriptionBillingAmount.bundle.monthly * 12,
                  ),
                },
              )}
            </span>
            <strong>
              <s>
                {priceFormatter.format(
                  props.subscriptionBillingAmount.bundle.individual,
                )}
              </s>
              {l10n.getString(
                "landing-redesign-pricing-plans-card-cta-monthly",
                {
                  monthlyPrice: priceFormatter.format(
                    props.subscriptionBillingAmount.bundle.monthly,
                  ),
                },
              )}
            </strong>
          </p>
          <TelemetryButton
            aria-describedby="pricingPlanBundle"
            disabled={props.scanLimitReached}
            variant="primary"
            theme="blue"
            href={`${props.premiumSubscriptionUrl["bundle"]}${additionalSubplatParamsStringBundle}`}
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id: "purchase_bundle_landing_page",
              },
            }}
          >
            {l10n.getString("landing-redesign-pricing-plans-card-cta-label")}
          </TelemetryButton>
        </>
      ),
    },
    {
      type: "plus",
      title: l10n.getString("landing-redesign-pricing-plans-card-plus-title"),
      subtitle: l10n.getString(
        "landing-redesign-pricing-plans-card-plus-with-bundle-subtitle",
      ),
      features: [
        <>
          <span className={styles.plusNote}>
            <PlusIcon
              alt={l10n.getString(
                "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
              )}
            />
            <b>
              {l10n.getString(
                "landing-redesign-pricing-plans-card-plus-with-bundle-included-features-label",
              )}
            </b>
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {/* c8 ignore next 4 */}
            {props.enabledFeatureFlags.includes("MaskDataBrokerCount")
              ? l10n.getFragment(
                  "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-one-masked",
                  { elems: { b: <b /> } },
                )
              : l10n.getFragment(
                  "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-one",
                  {
                    vars: {
                      data_broker_sites_total_num:
                        CONST_ONEREP_DATA_BROKER_COUNT,
                    },
                    elems: { b: <b /> },
                  },
                )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-two",
              {
                elems: { b: <b /> },
              },
            )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-three",
              {
                elems: { b: <b /> },
              },
            )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-four",
              {
                elems: { b: <b /> },
                vars: {
                  max_email_addresses: CONST_MAX_NUM_ADDRESSES_PLUS,
                },
              },
            )}
          </span>
        </>,
      ],
      cta: (
        <>
          <BillingPeriodToggle
            buttonColorThemes="blue"
            onChange={(newValue) => {
              setBillingPeriod(newValue);
              recordTelemetry("button", "click", {
                button_id:
                  newValue === "yearly"
                    ? "selected_yearly_plan"
                    : "selected_monthly_plan",
              });
            }}
          />
          <p aria-live="polite" id="pricingPlansMonthlyOrYearly">
            <span className={styles.pricingCardSavings}>
              {billingPeriod === "yearly"
                ? l10n.getString(
                    "landing-redesign-pricing-plans-card-cta-yearly-billing-label",
                    {
                      yearlyPrice: priceFormatter.format(
                        12 * monthlyPriceAnnualBilling,
                      ),
                    },
                  )
                : l10n.getString(
                    "landing-redesign-pricing-plans-card-cta-monthly-billing-label",
                  )}
            </span>
            <strong>
              {billingPeriod === "yearly"
                ? l10n.getString(
                    "landing-redesign-pricing-plans-card-plus-cta-yearly",
                    {
                      monthlyPrice: priceFormatter.format(
                        monthlyPriceAnnualBilling,
                      ),
                    },
                  )
                : l10n.getString(
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
            aria-describedby="pricingPlansMonthlyOrYearly"
            disabled={props.scanLimitReached}
            variant="secondary"
            theme="blue"
            href={`${props.premiumSubscriptionUrl[billingPeriod]}${additionalSubplatParamsStringPlus}`}
            event={{
              module: "upgradeIntent",
              name: "click",
              data: {
                button_id:
                  billingPeriod === "yearly"
                    ? "purchase_yearly_landing_page"
                    : "purchase_monthly_landing_page",
              },
            }}
          >
            {l10n.getString("landing-redesign-pricing-plans-card-cta-label")}
          </TelemetryButton>
        </>
      ),
    },
    {
      type: "free",
      title: l10n.getString("landing-redesign-pricing-plans-card-free-title"),
      subtitle: l10n.getString(
        "landing-redesign-pricing-plans-card-free-with-bundle-subtitle",
      ),
      features: [
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {
              /* c8 ignore next 8 */
              props.enabledFeatureFlags.includes("MaskDataBrokerCount")
                ? l10n.getFragment(
                    "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-one-masked",
                    {
                      elems: { b: <b /> },
                    },
                  )
                : l10n.getFragment(
                    "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-one",
                    {
                      vars: {
                        data_broker_sites_total_num:
                          CONST_ONEREP_DATA_BROKER_COUNT,
                      },
                      elems: { b: <b /> },
                    },
                  )
            }
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-two",
              {
                elems: { b: <b /> },
              },
            )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-three",
              {
                elems: { b: <b /> },
              },
            )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-four",
              {
                elems: { b: <b /> },
              },
            )}
          </span>
        </>,
        <>
          <CheckIcon
            alt={l10n.getString(
              "landing-redesign-pricing-plans-card-plus-with-bundle-feature-item-alt-label",
            )}
          />
          <span>
            {l10n.getFragment(
              "landing-redesign-pricing-plans-card-free-with-bundle-feature-item-five",
              {
                elems: { b: <b /> },
                vars: {
                  max_email_addresses: CONST_MAX_NUM_ADDRESSES,
                },
              },
            )}
          </span>
        </>,
      ],
      cta: (
        <>
          <p>
            <strong>
              {l10n.getString(
                "landing-redesign-pricing-plans-card-free-with-bundle-price-label",
              )}
            </strong>
          </p>
          {props.scanLimitReached ? (
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
                "landing-redesign-pricing-plans-card-cta-label",
              )}
              showCtaOnly
              ctaButtonVariant="secondary"
              ctaButtonTheme="blue"
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
        {pricingPlanData
          .filter(
            (pricingPlan) =>
              !props.hideFreeCard ||
              (props.hideFreeCard && pricingPlan.type !== "free"),
          )
          .map(({ type, label, title, subtitle, features, cta }) => (
            <dl
              key={type}
              className={`${styles.pricingCard} ${styles[type]}`}
              aria-label={title}
            >
              <dt>
                <b>{title}</b>
                {label && (
                  <span className={styles.pricingCardLabel}>{label}</span>
                )}
                <p>{subtitle}</p>
              </dt>
              {features.map((feature, featureIndex) => (
                <dd key={`${type}-feature-${featureIndex}`}>{feature}</dd>
              ))}
              <dd className={styles.pricingCardCta}>{cta}</dd>
            </dl>
          ))}
      </span>
    </>
  );
};
