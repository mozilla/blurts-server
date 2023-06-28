/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { ReactElement, useState } from "react";
import styles from "./ExposureCard.module.scss";
import { StatusPill } from "../server/StatusPill";
import Image, { StaticImageData } from "next/image";
import {
  ChevronDown,
  EmailIcon,
  LocationPin,
  MultipleUsers,
  OpenInNew,
  PhoneIcon,
} from "../server/Icons";
import { Button } from "../server/Button";

export type Props = {
  exposureImg: StaticImageData;
  exposureName: string;
  exposureType: string;
  exposureDetailsLink: string;
  dateFound: string;
  statusPillType: string;
  statusPillContent: string;
};

type DetailsFoundProps = {
  whichExposed: string; // family | email | phone | address
  num: number;
  icon: ReactElement;
};

export const ExposureCard = (props: Props) => {
  const {
    exposureImg,
    exposureName,
    exposureType,
    exposureDetailsLink,
    dateFound,
    statusPillContent,
    statusPillType,
  } = props;

  const [detailsOpen, setDetailsOpen] = useState(false);

  const DetailsFoundItem = (props: DetailsFoundProps) => {
    let headline, description;
    if (props.whichExposed === "family") {
      headline = "Family members";

      description = `We found ${props.num} family member`;
      if (props.num > 1) {
        description = `We found ${props.num} family members`;
      }
    }

    if (props.whichExposed === "email") {
      headline = "Email";

      description = `We found ${props.num} email address`;
      if (props.num > 1) {
        description = `We found ${props.num} email addresses`;
      }
    }

    if (props.whichExposed === "phone") {
      headline = "Phone number";

      description = `We found ${props.num} phone number`;
      if (props.num > 1) {
        description = `We found ${props.num} phone numbers`;
      }
    }

    if (props.whichExposed === "address") {
      headline = "Address";

      description = `We found ${props.num} address`;
      if (props.num > 1) {
        description = `We found ${props.num} addresses`;
      }
    }

    return (
      <>
        <dt>
          <span className={styles.exposureTypeIcon}>{props.icon}</span>
          {headline}
        </dt>
        <dl>{description}</dl>
      </>
    );
  };
  const elementCard = (
    <div>
      <div className={styles.exposureCard}>
        <div className={styles.exposureHeader}>
          <ul className={styles.exposureHeaderList}>
            <li className={styles.exposureImageWrapper}>
              <Image
                className={styles.exposureImage}
                alt=""
                src={exposureImg}
              />
            </li>
            <li>{exposureName}</li>
            <li>{exposureType}</li>
            <li>{dateFound}</li>
            <li>
              <StatusPill type={statusPillType} content={statusPillContent} />
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
          <p>
            This site is selling and publishing{" "}
            <a href={exposureDetailsLink}>
              details about you.{" "}
              <span>
                <OpenInNew alt="" width="15" height="14" />
              </span>
            </a>{" "}
            Remove this profile to protect your privacy.
          </p>
          <div className={styles.exposureListOfExposureTypes}>
            <ul>
              <li>Your exposed info:</li>
              <li>
                <DetailsFoundItem
                  icon={<MultipleUsers alt="" width="15" height="15" />}
                  whichExposed="family"
                  num={0}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<PhoneIcon alt="" width="15" height="15" />}
                  whichExposed="phone"
                  num={5}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<EmailIcon alt="" width="15" height="15" />}
                  whichExposed="email"
                  num={4}
                />
              </li>
              <li>
                <DetailsFoundItem
                  icon={<LocationPin alt="" width="15" height="15" />}
                  whichExposed="address"
                  num={0}
                />
              </li>
            </ul>
            <span className={styles.fixItBtn}>
              <Button type={"primary"}>Lets fix it</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return elementCard;
};
