/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactElement, useState } from "react";
import styles from "./ExposureCard.module.scss";
import { StatusPill, StatusPillType } from "../server/StatusPill";
import { StaticImageData } from "next/image";
import {
  ChevronDown,
  EmailIcon,
  LocationPinIcon,
  MultipleUsersIcon,
  OpenInNew,
  PhoneIcon,
} from "../server/Icons";
import Image from "next/image";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";
import { ScanResult  } from "../../../external/onerep";
import { Breach } from "../../(nextjs_migration)/(authenticated)/user/breaches/breaches";

export type Exposure = ScanResult | Breach;

export type ExposureTypElProps = {
  type: Exposure;
};

export const ExposureTypeEl = (props: ExposureTypElProps) => {
  const l10n = useL10n();
  let string = "";

  if (isScanResult(props.type)) {
    string = l10n.getString("exposure-card-exposure-type-data-broker");
  }
  else {
    string = l10n.getString("exposure-card-exposure-type-data-breach");
  }

  return <>{string}</>;
};

// Typeguard function
export function isScanResult(obj: ScanResult | Breach): obj is ScanResult {
  return (obj as ScanResult).data_broker !== undefined; // only ScanResult has an instance of data_broker
}

export type ExposureCardProps = {
  exposureImg: StaticImageData;
  exposureName: string;
  exposureData: Exposure;
  exposureDetailsLink: string;
  dateFound: string;
  statusPillType: StatusPillType;
};

type DetailsFoundProps = {
  whichExposed: string; // family | email | phone | address | credit card | password
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
  } = props;

  const l10n = useL10n();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const DetailsFoundItem = (props: DetailsFoundProps) => {
    let headline, description;
    if (props.whichExposed === "family") {
      headline = l10n.getString("exposure-card-family-members");
      description = l10n.getString("exposure-card-num-found", {
        exposure_num: props.num
      });
    }
    if (props.whichExposed === "email") {
      headline = l10n.getString("exposure-card-email");
      description = l10n.getString("exposure-card-num-found", {
        exposure_num: props.num
      });
    }

    if (props.whichExposed === "phone") {
      headline = l10n.getString("exposure-card-phone-number");
      description = l10n.getString("exposure-card-num-found", {
        exposure_num: props.num
      });
    }

    if (props.whichExposed === "address") {
      headline = l10n.getString("exposure-card-address");
      description = l10n.getString("exposure-card-num-found", {
        exposure_num: props.num
      });
    }

    return (
      <div className={styles.detailsFoundItem}>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {headline}
        </dt>
        <dd>{description}</dd>
      </div>
    );
  };
  const elementCard = (
    <div>
      <div className={styles.exposureCard}>
        <div className={styles.exposureHeader}>
          <ul className={styles.exposureHeaderList}>
            <li className={`${styles.exposureImageWrapper} ${styles.hideOnMobile}`}>
              <Image
                className={styles.exposureImage}
                alt=""
                src={exposureImg}
              /> </li>
            <li>{exposureName}</li>
            <li className={styles.hideOnMobile}><ExposureTypeEl type={exposureData} /></li>
            <li className={styles.hideOnMobile}>{props.dateFound}</li>
            <li>
              <StatusPill type={statusPillType} />
            </li>
          </ul>
          <span
            className={styles.chevronDown}
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            <ChevronDown
              className={detailsOpen ? styles.isOpen : ""}
              alt={l10n.getString("chevron-down-alt")}
              width="20"
              height="20"
            />
          </span>
        </div>
        <div
          className={`${styles.exposureDetailsSection} ${
            detailsOpen ? styles.isOpen : ""
          }`}
        >
          {isScanResult(exposureData) ? 
          // Data broker content
          <div>
            <p>
              {l10n.getFragment("exposure-card-description-info-for-sale-part-one", 
              {
                elems: {"data_broker_link": <a href={exposureDetailsLink}/>}
              })}
              <a href={exposureDetailsLink}>
                <span>
                  <OpenInNew alt={l10n.getString("open-in-new-tab-alt")} width="13" height="13" aria-label={l10n.getString("open-in-new-tab-aria-label")} />
                </span>
              </a>
              {" "}{l10n.getString("exposure-card-description-info-for-sale-part-two")}
            </p>
          </div> : 
          // Data breach content
          <div>
            <p>
              {l10n.getFragment("exposure-card-description-data-breach-part-one", 
              {
                vars: {
                  data_breach_company: exposureName,
                  data_breach_date: exposureData.BreachDate
                },
                elems: {"data_breach_link": <a href={exposureDetailsLink}/>}
              })}
              <a href={exposureDetailsLink}>
                <span>
                  <OpenInNew alt={l10n.getString("open-in-new-tab-alt")} width="13" height="13" aria-label={l10n.getString("open-in-new-tab-aria-label")} />
                </span>
              </a>
              {" "}{l10n.getString("exposure-card-description-data-breach-part-two")}
            </p>
          </div>
          }
          <div className={styles.exposureListOfExposureTypes}>
            <dl>
              <div>{l10n.getString("exposure-card-your-exposed-info")}:</div>
              <DetailsFoundItem
                icon={<MultipleUsersIcon alt="" width="13" height="13" />}
                whichExposed="family"
                num={0}
              />
              <DetailsFoundItem
                icon={<PhoneIcon alt="" width="13" height="13" />}
                whichExposed="phone"
                num={5}
              />
              <DetailsFoundItem
                icon={<EmailIcon alt="" width="13" height="13" />}
                whichExposed="email"
                num={4}
              />
              <DetailsFoundItem
                icon={<LocationPinIcon alt="" width="13" height="13" />}
                whichExposed="address"
                num={0}
              />
            </dl>
            <span className={styles.fixItBtn}>
              <Button type={"primary"} content={l10n.getString("exposure-card-cta")} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return elementCard;
};

