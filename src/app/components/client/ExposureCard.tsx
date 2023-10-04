/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode, useEffect, useState } from "react";
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
import { useL10n } from "../../hooks/l10n";
import {
  DataClassEffected,
  SubscriberBreach,
} from "../../../utils/subscriberBreaches";
import { FallbackLogo } from "../server/BreachLogo";
import { BreachDataClass, DataBrokerDataClass } from "./ExposureCardDataClass";

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
  resolutionCta: ReactNode;
  isExpanded?: boolean;
};

export const ExposureCard = ({ exposureData, ...props }: ExposureCardProps) => {
  const [dataBrokerImage, setDataBrokerImage] = useState<ReactNode>();

  useEffect(() => {
    const loadDataBrokerImage = async () => {
      if (isScanResult(exposureData)) {
        try {
          const logo = await import(
            `../client/assets/data-brokers/${exposureData.data_broker}.jpg`
          );
          setDataBrokerImage(<Image src={logo.default} alt="" />);
        } catch (error) {
          // Default to circle logos if logo is not found
          setDataBrokerImage(<FallbackLogo name={exposureData.data_broker} />);
        }
      }
    };

    loadDataBrokerImage().catch((error) => {
      console.error("Error loading logo:", error);
    });
  }, [exposureData]);

  if (isScanResult(exposureData)) {
    return (
      <ScanResultCard
        {...props}
        scanResult={exposureData}
        exposureImg={<>{dataBrokerImage}</>}
      />
    );
  } else {
    return <SubscriberBreachCard {...props} subscriberBreach={exposureData} />;
  }
};

export type ScanResultCardProps = {
  exposureImg?: ReactNode;
  scanResult: OnerepScanResultRow;
  locale: string;
  isPremiumBrokerRemovalEnabled: boolean;
  resolutionCta: ReactNode;
  isExpanded?: boolean;
};
const ScanResultCard = (props: ScanResultCardProps) => {
  const { exposureImg, scanResult, locale, isPremiumBrokerRemovalEnabled } =
    props;

  const l10n = useL10n();
  const [exposureCardExpanded, setExposureCardExpanded] = useState(
    props.isExpanded ?? false
  );

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];

  // Scan Result Categories
  if (scanResult.relatives.length > 0) {
    exposureCategoriesArray.push(
      <DataBrokerDataClass
        scanResultData={scanResult}
        key="relatives"
        icon={<MultipleUsersIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-family-members")}
        num={scanResult.relatives.length}
      />
    );
  }
  if (scanResult.phones.length > 0) {
    exposureCategoriesArray.push(
      <DataBrokerDataClass
        scanResultData={scanResult}
        key="phones"
        icon={<PhoneIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
        num={scanResult.phones.length}
      />
    );
  }
  if (scanResult.emails.length > 0) {
    exposureCategoriesArray.push(
      <DataBrokerDataClass
        scanResultData={scanResult}
        key="emails"
        icon={<EmailIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-email")}
        num={scanResult.emails.length}
      />
    );
  }
  if (scanResult.addresses.length > 0) {
    exposureCategoriesArray.push(
      <DataBrokerDataClass
        scanResultData={scanResult}
        key="addresses"
        icon={<LocationPinIcon alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-address")}
        num={scanResult.addresses.length}
      />
    );
    // TODO: Add unit test when changing this code:
    /* c8 ignore next 12 */
  } else {
    // "Other" item when none of the conditions above are met
    exposureCategoriesArray.push(
      <DataBrokerDataClass
        scanResultData={scanResult}
        key="other"
        icon={<QuestionMarkCircle alt="" width="13" height="13" />}
        exposureCategoryLabel={l10n.getString("exposure-card-other")}
        num={0}
      />
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
              {
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 7 */
                exposureImg ?? <FallbackLogo name={scanResult.data_broker} />
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
                <span className={styles.openInNewTab}>
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
              <div className={styles.dataClassesList}>
                {exposureCategoriesArray.map((item) => (
                  <React.Fragment key={item.key}>{item}</React.Fragment>
                ))}
              </div>
            </div>
            {isPremiumBrokerRemovalEnabled &&
            props.scanResult.status === "new" ? (
              <span className={styles.fixItBtn}>{props.resolutionCta}</span>
            ) : null}
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
  resolutionCta: ReactNode;
  isExpanded?: boolean;
};
const SubscriberBreachCard = (props: SubscriberBreachCardProps) => {
  const { exposureImg, subscriberBreach, locale } = props;

  const l10n = useL10n();
  const [exposureCardExpanded, setExposureCardExpanded] = useState(
    props.isExpanded ?? false
  );

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];

  subscriberBreach.dataClassesEffected.map((item: DataClassEffected) => {
    const dataClass = Object.keys(item)[0];

    if (dataClass === "email-addresses") {
      exposureCategoriesArray.push(
        <BreachDataClass
          subscriberBreachData={subscriberBreach}
          key={dataClass}
          icon={<EmailIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-email")}
        />
      );
    } else if (dataClass === "passwords") {
      exposureCategoriesArray.push(
        <BreachDataClass
          subscriberBreachData={subscriberBreach}
          key={dataClass}
          icon={<PasswordIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-password")}
        />
      );
    } else if (dataClass === "phone-numbers") {
      exposureCategoriesArray.push(
        <BreachDataClass
          subscriberBreachData={subscriberBreach}
          key={dataClass}
          icon={<PhoneIcon alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-phone-number")}
        />
      );
    } else if (dataClass === "ip-addresses") {
      exposureCategoriesArray.push(
        <BreachDataClass
          subscriberBreachData={subscriberBreach}
          key={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />}
          exposureCategoryLabel={l10n.getString("exposure-card-ip-address")}
        />
      );
      // TODO: Add unit test when changing this code:
      /* c8 ignore next 12 */
    }
    // Handle all other breach categories
    else {
      exposureCategoriesArray.push(
        <BreachDataClass
          subscriberBreachData={subscriberBreach}
          key={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />} // default icon for categories without a unique one
          exposureCategoryLabel={l10n.getString(dataClass)} // categories are localized in data-classes.ftl
        />
      );
    }
  });

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
              {dateFormatter.format(subscriberBreach.addedDate)}
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
              <a href={`/breach-details/${subscriberBreach.name}`}>
                <span className={styles.openInNewTab}>
                  <OpenInNew
                    alt={l10n.getString("open-in-new-tab-alt")}
                    width="13"
                    height="13"
                  />
                </span>
              </a>
              {l10n.getString("exposure-card-description-data-breach-part-two")}
            </p>
          </div>

          <div className={styles.exposedInfoContainer}>
            <div className={styles.exposedInfoWrapper}>
              <p className={styles.exposedInfoTitle}>
                {l10n.getString("exposure-card-your-exposed-info")}
              </p>
              <div className={styles.dataClassesList}>
                {exposureCategoriesArray.map((item) => (
                  <React.Fragment key={item.key}>{item}</React.Fragment>
                ))}
              </div>
            </div>
            {
              // TODO: Add unit test when changing this code:
              /* c8 ignore next */
              !props.subscriberBreach.isResolved ? (
                <span className={styles.fixItBtn}>{props.resolutionCta}</span>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );

  return exposureCard;
};
