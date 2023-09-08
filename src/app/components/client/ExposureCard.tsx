/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { OnerepScanResultRow } from "knex/types/tables";
import styles from "./ExposureCard.module.scss";
import { StatusPill } from "../server/StatusPill";
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
import {
  DataClassEffected,
  SubscriberBreach,
} from "../../../utils/subscriberBreaches";
import { parseIso8601Datetime } from "../../../utils/parse";
import { FallbackLogo } from "../server/BreachLogo";

export type Exposure = OnerepScanResultRow | SubscriberBreach;

// Typeguard function
export function isScanResult(obj: Exposure): obj is OnerepScanResultRow {
  return (obj as OnerepScanResultRow).data_broker !== undefined; // only ScanResult has an instance of data_broker
}

export type ExposureCardProps = {
  exposureImg?: StaticImageData;
  exposureData: Exposure;
  locale: string;
  isPremiumBrokerRemovalEnabled: boolean;
};

type BreachExposureCategoryProps = {
  exposureCategoryLabel: string;
  icon: ReactElement;
  count?: number;
  emails?: string[];
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  return isScanResult(exposureData) ? (
    <ScanResultCard {...props} scanResult={exposureData} />
  ) : (
    <SubscriberBreachCard {...props} subscriberBreach={exposureData} />
  );
};

export type ScanResultCardProps = {
  exposureImg?: StaticImageData;
  scanResult: OnerepScanResultRow;
  locale: string;
  isPremiumBrokerRemovalEnabled: boolean;
};
const ScanResultCard = (props: ScanResultCardProps) => {
  const { exposureImg, scanResult, locale, isPremiumBrokerRemovalEnabled } =
    props;

  const l10n = useL10n();
  const [exposureCardExpanded, setExposureCardExpanded] = useState(false);

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];

  type ScannedExposureCategoryProps = {
    exposureCategoryLabel: string;
    num: number;
    icon: ReactElement;
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
  if (scanResult.relatives.length > 0) {
    exposureCategoriesArray.push(
      <ScannedExposureCategory
        key="relatives"
        icon={<MultipleUsersIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-family-members")}
        num={scanResult.relatives.length}
      />
    );
  }
  if (scanResult.phones.length > 0) {
    exposureCategoriesArray.push(
      <ScannedExposureCategory
        key="phones"
        icon={<PhoneIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
        num={scanResult.phones.length}
      />
    );
  }
  if (scanResult.emails.length > 0) {
    exposureCategoriesArray.push(
      <ScannedExposureCategory
        key="emails"
        icon={<EmailIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-email")}
        num={scanResult.emails.length}
      />
    );
  }
  if (scanResult.addresses.length > 0) {
    exposureCategoriesArray.push(
      <ScannedExposureCategory
        key="addresses"
        icon={<LocationPinIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-address")}
        num={scanResult.addresses.length}
      />
    );
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 11 */
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

  const letsFixItBtn = (
    <span className={styles.fixItBtn}>
      <Button variant={"primary"}>{l10n.getString("exposure-card-cta")}</Button>
    </span>
  );

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
              {
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 7 */
                exposureImg ? (
                  <Image
                    className={styles.exposureImage}
                    alt=""
                    src={exposureImg}
                  />
                ) : (
                  <FallbackLogo name={scanResult.data_broker} />
                )
              }
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-company")}
            </dt>
            <dd>
              <span className={styles.exposureCompanyTitle}>
                {scanResult.data_broker}
              </span>
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-exposure-type")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {l10n.getString("exposure-card-exposure-type-data-broker")}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-date-found")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {dateFormatter.format(scanResult.created_at)}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-status")}
            </dt>
            <dd>
              <StatusPill exposure={scanResult} />
            </dd>
          </dl>
          <button
            className={styles.chevron}
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => setExposureCardExpanded(!exposureCardExpanded)}
          >
            <ChevronDown
              // TODO: Add unit test when changing this code:
              /* c8 ignore next */
              className={exposureCardExpanded ? styles.isOpen : ""}
              alt={
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 2 */
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
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            exposureCardExpanded ? styles.isOpen : ""
          }`}
        >
          <div>
            <p>
              {l10n.getFragment(
                "exposure-card-description-info-for-sale-part-one",
                {
                  elems: {
                    data_broker_link: <a href={scanResult.link} />,
                  },
                }
              )}
              <a href={scanResult.link}>
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
          <div className={styles.exposedInfoContainer}>
            <div className={styles.exposedInfoWrapper}>
              <p className={styles.exposedInfoTitle}>
                {l10n.getString("exposure-card-your-exposed-info")}
              </p>
              <dl className={styles.dataClassesList}>
                {exposureCategoriesArray.map((item) => (
                  <React.Fragment key={item.key}>{item}</React.Fragment>
                ))}
              </dl>
            </div>
            {isPremiumBrokerRemovalEnabled && props.scanResult.status === "new"
              ? letsFixItBtn
              : null}
          </div>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};

export type SubscriberBreachCardProps = {
  exposureImg?: StaticImageData;
  subscriberBreach: SubscriberBreach;
  locale: string;
};
const SubscriberBreachCard = (props: SubscriberBreachCardProps) => {
  const { exposureImg, subscriberBreach, locale } = props;

  const l10n = useL10n();
  const [exposureCardExpanded, setExposureCardExpanded] = useState(false);

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];

  const BreachExposureCategory = (props: BreachExposureCategoryProps) => {
    const emailsList = (
      <ul className={styles.emailsList}>
        {props.emails?.map((email: string, index: number) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    );

    return (
      <div className={styles.detailsFoundItem}>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {props.exposureCategoryLabel}
        </dt>
        <dd>
          {props.emails && emailsList}
          {props.count &&
            l10n.getString("exposure-card-num-found", {
              exposure_num: props.count,
            })}
        </dd>
      </div>
    );
  };

  subscriberBreach.dataClassesEffected.map((item: DataClassEffected) => {
    const dataClass = Object.keys(item)[0];
    const value = item[dataClass];
    const emails = Array.isArray(value) ? value : [];
    const count = typeof value === "number" ? value : 0;

    if (dataClass === "email-addresses") {
      exposureCategoriesArray.push(
        <BreachExposureCategory
          key={dataClass}
          icon={<EmailIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-email")}
          emails={emails} // Only emails get listed
        />
      );
    } else if (dataClass === "passwords") {
      exposureCategoriesArray.push(
        <BreachExposureCategory
          key={dataClass}
          icon={<PasswordIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-password")}
          count={count}
        />
      );
    } else if (dataClass === "phone-numbers") {
      exposureCategoriesArray.push(
        <BreachExposureCategory
          key={dataClass}
          icon={<PhoneIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
          count={count}
        />
      );
    } else if (dataClass === "ip-addresses") {
      exposureCategoriesArray.push(
        <BreachExposureCategory
          key={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-ip-address")}
          count={count}
        />
      );
      // TODO: Add unit test when changing this code:
      /* c8 ignore next 12 */
    }
    // Handle all other breach categories
    else {
      exposureCategoriesArray.push(
        <BreachExposureCategory
          key={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />} // default icon for categories without a unique one
          exposureCategoryLabel={l10n.getString(dataClass)} // categories are localized in data-classes.ftl
          count={count}
        />
      );
    }
  });

  const letsFixItBtn = (
    <span className={styles.fixItBtn}>
      <Button variant={"primary"}>{l10n.getString("exposure-card-cta")}</Button>
    </span>
  );

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
              {
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 7 */
                exposureImg ? (
                  <Image
                    className={styles.exposureImage}
                    alt=""
                    src={exposureImg}
                  />
                ) : (
                  <FallbackLogo name={subscriberBreach.title} />
                )
              }
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-company")}
            </dt>
            <dd>
              <span className={styles.exposureCompanyTitle}>
                {subscriberBreach.title}
              </span>
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-exposure-type")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {l10n.getString("exposure-card-exposure-type-data-breach")}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-date-found")}
            </dt>
            <dd className={styles.hideOnMobile}>
              {dateFormatter.format(
                // We should be able to result that HIBP's `addedDate` property is a properly-formatted data string
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                parseIso8601Datetime(subscriberBreach.addedDate)!
              )}
            </dd>
            <dt className={styles.visuallyHidden}>
              {l10n.getString("exposure-card-label-status")}
            </dt>
            <dd>
              <StatusPill exposure={subscriberBreach} />
            </dd>
          </dl>
          <button
            className={styles.chevron}
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => setExposureCardExpanded(!exposureCardExpanded)}
          >
            <ChevronDown
              // TODO: Add unit test when changing this code:
              /* c8 ignore next */
              className={exposureCardExpanded ? styles.isOpen : ""}
              alt={
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 2 */
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
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            exposureCardExpanded ? styles.isOpen : ""
          }`}
        >
          <div>
            <p>
              {l10n.getFragment(
                "exposure-card-description-data-breach-part-one",
                {
                  vars: {
                    data_breach_company: subscriberBreach.title,
                    data_breach_date: subscriberBreach.breachDate,
                  },
                  elems: {
                    data_breach_link: (
                      <Link href={`/breach-details/${subscriberBreach.name}`} />
                    ),
                  },
                }
              )}
              <Link href={`/breach-details/${subscriberBreach.name}`}>
                <span>
                  <OpenInNew
                    alt={l10n.getString("open-in-new-tab-alt")}
                    width="13"
                    height="13"
                  />
                </span>
              </Link>
              {l10n.getString("exposure-card-description-data-breach-part-two")}
            </p>
          </div>

          <div className={styles.exposedInfoContainer}>
            <div className={styles.exposedInfoWrapper}>
              <p className={styles.exposedInfoTitle}>
                {l10n.getString("exposure-card-your-exposed-info")}
              </p>
              <dl className={styles.dataClassesList}>
                {exposureCategoriesArray.map((item) => (
                  <React.Fragment key={item.key}>{item}</React.Fragment>
                ))}
              </dl>
            </div>
            {
              // TODO: Add unit test when changing this code:
              /* c8 ignore next */
              !props.subscriberBreach.isResolved ? letsFixItBtn : null
            }
          </div>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};
