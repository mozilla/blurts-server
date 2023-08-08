/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { CSSProperties, ReactElement, useState } from "react";
import styles from "./ExposureCard.module.scss";
import { StatusPill, StatusPillType } from "../server/StatusPill";
import Image, { StaticImageData } from "next/image";
import {
  ChevronDown,
  EmailIcon,
  LocationPinIcon,
  MultipleUsersIcon,
  OpenInNew,
  PasswordIcon,
  PhoneIcon,
  QuestionMarkCircle,
} from "../server/Icons";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import { ScanResult } from "../../functions/server/onerep";
import { HibpLikeDbBreach } from "../../../utils/hibp";
import { FeatureFlagsEnabled } from "../../functions/server/featureFlags";

export type Exposure = ScanResult | HibpLikeDbBreach;

export type ExposureTypElProps = {
  type: Exposure;
};

export const ExposureTypeEl = (props: ExposureTypElProps) => {
  const l10n = useL10n();
  let string = "";

  if (isScanResult(props.type)) {
    string = l10n.getString("exposure-card-exposure-type-data-broker");
  } else {
    string = l10n.getString("exposure-card-exposure-type-data-breach");
  }

  return <>{string}</>;
};

// Typeguard function
export function isScanResult(
  obj: ScanResult | HibpLikeDbBreach
): obj is ScanResult {
  return (obj as ScanResult).data_broker !== undefined; // only ScanResult has an instance of data_broker
}

export type ExposureCardProps = {
  exposureImg?: StaticImageData;
  exposureName: string;
  exposureData: Exposure;
  exposureDetailsLink: string;
  dateFound: Date;
  statusPillType: StatusPillType;
  locale: string;
  fromEmail?: string;
  color: string;
  featureFlagsEnabled: Pick<FeatureFlagsEnabled, "PremiumBrokerRemoval">;
};

type BreachExposureCategoryProps = {
  exposureCategoryLabel: string;
  icon: ReactElement;
  email: string;
};

type ScannedExposureCategoryProps = {
  exposureCategoryLabel: string;
  num: number;
  icon: ReactElement;
};

export const ExposureCard = (props: ExposureCardProps) => {
  const {
    exposureImg,
    exposureName,
    exposureData,
    exposureDetailsLink,
    statusPillType,
    locale,
    color,
    featureFlagsEnabled,
  } = props;

  const l10n = useL10n();
  const [exposureCardExpanded, setExposureCardExpanded] = useState(false);

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];
  const exposureItem = props.exposureData;

  const verifiedEmailofBreach = props.fromEmail;

  const BreachExposureCategory = (props: BreachExposureCategoryProps) => {
    const description = l10n.getString("exposure-card-num-found", {
      exposure_num: 1, // We don't count categories for breaches.
    });

    return (
      <div className={styles.detailsFoundItem}>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {props.exposureCategoryLabel}
        </dt>
        <dd>
          {props.email === "email-addresses"
            ? verifiedEmailofBreach
            : description}
        </dd>
      </div>
    );
  };
  const ScannedExposureCategory = (props: ScannedExposureCategoryProps) => {
    const description = l10n.getString("exposure-card-num-found", {
      exposure_num: props.num,
    });

    return (
      <div className={styles.detailsFoundItem}>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {props.exposureCategoryLabel}
        </dt>
        <dd>{description}</dd>
      </div>
    );
  };

  // Scan Result Categories
  if (isScanResult(exposureItem)) {
    if (exposureItem.relatives.length > 0) {
      exposureCategoriesArray.push(
        <ScannedExposureCategory
          key="relatives"
          icon={<MultipleUsersIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-family-members")}
          num={exposureItem.relatives.length}
        />
      );
    }
    if (exposureItem.phones.length > 0) {
      exposureCategoriesArray.push(
        <ScannedExposureCategory
          key="phones"
          icon={<PhoneIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
          num={exposureItem.phones.length}
        />
      );
    }
    if (exposureItem.emails.length > 0) {
      exposureCategoriesArray.push(
        <ScannedExposureCategory
          key="emails"
          icon={<EmailIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-email")}
          num={exposureItem.emails.length}
        />
      );
    }
    if (exposureItem.addresses.length > 0) {
      exposureCategoriesArray.push(
        <ScannedExposureCategory
          key="addresses"
          icon={<LocationPinIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-address")}
          num={exposureItem.addresses.length}
        />
      );
    } else {
      // "Other" item when none of the conditions above are met
      exposureCategoriesArray.push(
        <ScannedExposureCategory
          key="other"
          icon={<QuestionMarkCircle alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-other")}
          num={0}
        />
      );
    }
  }

  // Breach Categories
  else {
    exposureItem.DataClasses.map((item) => {
      if (item === "email-addresses") {
        exposureCategoriesArray.push(
          <BreachExposureCategory
            key={item}
            email={item}
            icon={<EmailIcon alt="" width="13" height="13" />}
            exposureCategoryLabel={l10n.getString("exposure-card-email")}
          />
        );
      } else if (item === "passwords") {
        exposureCategoriesArray.push(
          <BreachExposureCategory
            key={item}
            email={item}
            icon={<PasswordIcon alt="" width="13" height="13" />}
            exposureCategoryLabel={l10n.getString("exposure-card-password")}
          />
        );
      } else if (item === "phone-numbers") {
        exposureCategoriesArray.push(
          <BreachExposureCategory
            key={item}
            email={item}
            icon={<PhoneIcon alt="" width="13" height="13" />}
            exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
          />
        );
      } else if (item === "ip-addresses") {
        exposureCategoriesArray.push(
          <BreachExposureCategory
            key={item}
            email={item}
            icon={<QuestionMarkCircle alt="" width="13" height="13" />}
            exposureCategoryLabel={l10n.getString("exposure-card-ip-address")}
          />
        );
      }
      // Handle all other breach categories
      else {
        exposureCategoriesArray.push(
          <BreachExposureCategory
            key={item}
            email={item}
            icon={<QuestionMarkCircle alt="" width="13" height="13" />} // default icon for categories without a unique one
            exposureCategoryLabel={l10n.getString(item)} // categories are localized in data-classes.ftl
          />
        );
      }
    });
  }

  const ExposureCategoriesListElem = () => {
    const listItems = exposureCategoriesArray.map((item) => (
      <React.Fragment key={item.key}>{item}</React.Fragment>
    ));

    return <>{listItems}</>;
  };

  function fallbackLogo(exposureId: string) {
    const firstLetter = exposureId?.[0]?.toUpperCase() || "";

    return (
      <span
        className={styles.fallbackLogo}
        style={{ background: color } as CSSProperties}
      >
        {firstLetter}
      </span>
    );
  }
  const exposureCard = (
    <div>
      <div className={styles.exposureCard}>
        <div className={styles.exposureHeader}>
          <dl className={styles.exposureHeaderList}>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-company-logo")}
            </dt>
            <dd
              className={`${styles.hideOnMobile} ${styles.exposureImageWrapper}`}
            >
              {/* While logo is not yet set, the fallback image is the first character of the exposure name */}
              {exposureImg ? (
                <Image
                  className={styles.exposureImage}
                  alt=""
                  src={exposureImg}
                />
              ) : (
                <>{fallbackLogo(props.exposureName)}</>
              )}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-company")}
            </dt>
            <dd>
              <span className={styles.exposureCompanyTitle}>
                {exposureName}
              </span>
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-exposure-type")}
            </dt>
            <dd className={styles.hideOnMobile}>
              <ExposureTypeEl type={exposureData} />
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-date-found")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {dateFormatter.format(props.dateFound)}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-status")}
            </dt>
            <dd>
              <StatusPill type={statusPillType} />
            </dd>
          </dl>
          <button
            className={styles.chevron}
            onClick={() => setExposureCardExpanded(!exposureCardExpanded)}
          >
            <ChevronDown
              className={exposureCardExpanded ? styles.isOpen : ""}
              alt={
                exposureCardExpanded
                  ? l10n.getString("chevron-up-alt")
                  : l10n.getString("chevron-down-alt")
              }
              width="20"
              height="20"
            />
          </button>
        </div>
        <div
          className={`${styles.exposureDetailsSection} ${
            exposureCardExpanded ? styles.isOpen : ""
          }`}
        >
          {isScanResult(exposureData) ? (
            // Data broker content
            <div>
              <p>
                {l10n.getFragment(
                  "exposure-card-description-info-for-sale-part-one",
                  {
                    elems: {
                      data_broker_link: <a href={exposureDetailsLink} />,
                    },
                  }
                )}
                <a href={exposureDetailsLink}>
                  <span>
                    <OpenInNew
                      alt={l10n.getString("open-in-new-tab-alt")}
                      width="13"
                      height="13"
                    />
                  </span>
                </a>
                {l10n.getString(
                  "exposure-card-description-info-for-sale-part-two"
                )}
              </p>
            </div>
          ) : (
            // Data breach content
            <div>
              <p>
                {l10n.getFragment(
                  "exposure-card-description-data-breach-part-one",
                  {
                    vars: {
                      data_breach_company: exposureName,
                      data_breach_date: exposureData.BreachDate,
                    },
                    elems: {
                      data_breach_link: <a href={exposureDetailsLink} />,
                    },
                  }
                )}
                <a href={exposureDetailsLink}>
                  <span>
                    <OpenInNew
                      alt={l10n.getString("open-in-new-tab-alt")}
                      width="13"
                      height="13"
                    />
                  </span>
                </a>
                {l10n.getString(
                  "exposure-card-description-data-breach-part-two"
                )}
              </p>
            </div>
          )}
          <div className={styles.exposedInfoContainer}>
            <div className={styles.exposedInfoWrapper}>
              <p className={styles.exposedInfoTitle}>
                {l10n.getString("exposure-card-your-exposed-info")}
              </p>
              <dl>
                <ExposureCategoriesListElem />
              </dl>
            </div>
            {featureFlagsEnabled.PremiumBrokerRemoval ? (
              <span className={styles.fixItBtn}>
                <Button variant={"primary"}>
                  {l10n.getString("exposure-card-cta")}
                </Button>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};
