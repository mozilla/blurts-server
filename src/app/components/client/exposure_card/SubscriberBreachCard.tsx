/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./ExposureCard.module.scss";
import { StatusPill } from "../../server/StatusPill";
import Image, { StaticImageData } from "next/image";
import {
  ChevronDown,
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
  QuestionMarkCircle,
} from "../../server/Icons";
import { useL10n } from "../../../hooks/l10n";
import {
  DataClassEffected,
  SubscriberBreach,
} from "../../../../utils/subscriberBreaches";
import { FallbackLogo } from "../../server/BreachLogo";
import { ExposureCardDataClassLayout } from "./ExposureCardDataClass";
import { useTelemetry } from "../../../hooks/useTelemetry";

export type SubscriberBreachCardProps = {
  exposureImg?: StaticImageData;
  subscriberBreach: SubscriberBreach;
  locale: string;
  resolutionCta: ReactNode;
  isEligibleForPremium: boolean;
  isExpanded: boolean;
  onToggleExpanded: () => void;
};

export const SubscriberBreachCard = (props: SubscriberBreachCardProps) => {
  const { exposureImg, subscriberBreach, locale } = props;

  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle
    dateStyle: "medium",
  });
  const exposureCategoriesArray: React.ReactElement[] = [];

  subscriberBreach.dataClassesEffected.map((item: DataClassEffected) => {
    const dataClass = Object.keys(item)[0];

    const emailLength = subscriberBreach.emailsAffected.length;

    if (dataClass === "email-addresses") {
      exposureCategoriesArray.push(
        <ExposureCardDataClassLayout
          exposure={subscriberBreach}
          key={dataClass}
          dataBreachDataType={dataClass}
          icon={<EmailIcon alt="" width="13" height="13" />}
          label={l10n.getString("exposure-card-email")}
          count={emailLength}
        />,
      );
    } else if (dataClass === "passwords") {
      exposureCategoriesArray.push(
        <ExposureCardDataClassLayout
          exposure={subscriberBreach}
          key={dataClass}
          dataBreachDataType={dataClass}
          icon={<PasswordIcon alt="" width="13" height="13" />}
          label={l10n.getString("exposure-card-password")}
          count={emailLength}
        />,
      );
    } else if (dataClass === "phone-numbers") {
      exposureCategoriesArray.push(
        <ExposureCardDataClassLayout
          exposure={subscriberBreach}
          key={dataClass}
          dataBreachDataType={dataClass}
          icon={<PhoneIcon alt="" width="13" height="13" />}
          label={l10n.getString("exposure-card-phone-number")}
          count={emailLength}
        />,
      );
    } else if (dataClass === "ip-addresses") {
      exposureCategoriesArray.push(
        <ExposureCardDataClassLayout
          exposure={subscriberBreach}
          key={dataClass}
          dataBreachDataType={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />}
          label={l10n.getString("exposure-card-ip-address")}
          count={emailLength}
        />,
      );
      // TODO: Add unit test when changing this code:
      /* c8 ignore next 13 */
    }
    // Handle all other breach categories
    else {
      exposureCategoriesArray.push(
        <ExposureCardDataClassLayout
          exposure={subscriberBreach}
          key={dataClass}
          icon={<QuestionMarkCircle alt="" width="13" height="13" />} // default icon for categories without a unique one
          label={l10n.getString(dataClass)} // categories are localized in data-classes.ftl
          count={emailLength}
        />,
      );
    }
  });

  const dataBreachLink = (
    <Link
      href={`/breach-details/${subscriberBreach.name}`}
      target="_blank"
      onClick={() => {
        recordTelemetry("link", "click", {
          link_id: `data_breach_${subscriberBreach.id}`,
        });
      }}
    />
  );

  const dataBreachDescription = () => {
    return subscriberBreach.isResolved
      ? l10n.getFragment("exposure-card-description-data-breach-fixed", {
          elems: {
            data_breach_link: dataBreachLink,
          },
        })
      : l10n.getFragment(
          "exposure-card-description-data-breach-action-needed",
          {
            vars: {
              data_breach_company: subscriberBreach.title,
              data_breach_date: subscriberBreach.breachDate,
            },
            elems: {
              data_breach_link: dataBreachLink,
            },
          },
        );
  };

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
              <span
                className={`${styles.exposureCompanyTitle} ${styles.companyNameArea}`}
              >
                {subscriberBreach.title}
              </span>
            </dd>
            {props.isEligibleForPremium && (
              <>
                <dt className={styles.visuallyHidden}>
                  {l10n.getString("exposure-card-exposure-type")}
                </dt>
                <dd className={styles.hideOnMobile}>
                  {l10n.getString("exposure-card-exposure-type-data-breach")}
                </dd>
              </>
            )}
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
            onClick={props.onToggleExpanded}
          >
            <ChevronDown
              // TODO: Add unit test when changing this code:
              /* c8 ignore next */
              className={props.isExpanded ? styles.isOpen : ""}
              alt={
                // TODO: Add unit test when changing this code:
                /* c8 ignore next 2 */
                props.isExpanded
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
            props.isExpanded ? styles.isOpen : ""
          }`}
        >
          <div>
            <p>{dataBreachDescription()}</p>
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
