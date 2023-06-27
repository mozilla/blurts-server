/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactElement, useEffect, useState } from "react";
import styles from "./ExposureCard.module.scss";
import { StatusPill, StatusPillType } from "../server/StatusPill";
import { StaticImageData } from "next/image";
import {
  ChevronDown,
  EmailIcon,
  LocationPin,
  MultipleUsers,
  OpenInNew,
  PhoneIcon,
} from "../server/Icons";
import Image from "next/image";
import { Button } from "../server/Button";
import { ExposureType, ExposureTypeEl } from "../server/ExposureType";
import { useL10n } from "../../hooks/l10n";

export type UnixTimestamp = number;

export type ExposureCardProps = {
  exposureImg: StaticImageData;
  exposureName: string;
  exposureType: ExposureType;
  exposureDetailsLink: string;
  dateFound: UnixTimestamp;
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
    exposureType,
    exposureDetailsLink,
    dateFound,
    statusPillType,
  } = props;

  const l10n = useL10n();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const date = new Date(dateFound * 1000); // Mocked date

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });


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
      <dd className={styles.detailsFoundItem}>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {headline}
        </dt>
        <dl>{description}</dl>
      </dd>
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
            <li className={styles.hideOnMobile}><ExposureTypeEl type={exposureType} /></li>
            <li className={styles.hideOnMobile}>{formattedDate}</li>
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
              alt=""
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
          {props.exposureType === "infoForSale" ? 
          // Data broker content
          <div>
            <p>
              {l10n.getFragment("exposure-card-description-info-for-sale-part-one", 
              {
                elems: {"data_broker_link": <a href={props.exposureDetailsLink}/>}
              })}
              <a href={exposureDetailsLink}>
                <span>
                  <OpenInNew alt="" width="13" height="13" />
                </span>
              </a>
              {". "}{l10n.getString("exposure-card-description-info-for-sale-part-two")}
            </p>
          </div> : 
          // Data breach content
          <div>
            <p>
              {l10n.getFragment("exposure-card-description-data-breach-part-one", 
              {
                vars: {
                  data_breach_company: props.exposureName,
                  data_breach_date: formattedDate
                },
                elems: {"data_breach_link": <a href={props.exposureDetailsLink}/>}
              })}
              <a href={exposureDetailsLink}>
                <span>
                  <OpenInNew alt="" width="13" height="13" />
                </span>
              </a>
              {". "}{l10n.getString("exposure-card-description-data-breach-part-two")}
            </p>
          </div>
          }
          <div className={styles.exposureListOfExposureTypes}>
            <ul>
              <li>{l10n.getString("exposure-card-your-exposed-info")}:</li>
              <li>
                <DetailsFoundItem
                  icon={<MultipleUsers alt="" width="13" height="13" />}
                  whichExposed="family"
                  num={0}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<PhoneIcon alt="" width="13" height="13" />}
                  whichExposed="phone"
                  num={5}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<EmailIcon alt="" width="13" height="13" />}
                  whichExposed="email"
                  num={4}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<LocationPin alt="" width="13" height="13" />}
                  whichExposed="address"
                  num={0}
                />
              </li>
            </ul>
            <span className={styles.fixItBtn}>
              <Button type={"primary"} content={"Lets fix it"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return elementCard;
};

