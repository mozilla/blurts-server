/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { ArrowIcon } from "../../../../../components/server/Icons";
import styles from "./InfoBlock.module.scss";
import PhoneMockup from "../images/phone-mockup.svg";
import LaptopMockup from "../images/laptop-mockup.svg";
import TabletMockup from "../images/tablet-mockup.svg";
import PhoneLaptopMockupMobile from "../images/phone-laptop-mockup-mobile.svg";
import { ScanLimit } from "../../ScanLimit";
import { FreeScanCta } from "../../FreeScanCta";
import { LandingPageProps } from "..";

type InfoRowData = {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
};

const InfoRow = ({ data }: { data: InfoRowData }) => {
  const { label, title, description, imageSrc } = data;
  return (
    <div className={styles.infoRow}>
      <div className={styles.infoImageWrapper}>
        <Image src={imageSrc} alt="" />
      </div>
      <div className={styles.infoText}>
        <span className={styles.infoLabel}>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const InfoBlock = (props: LandingPageProps) => {
  const infoRowData: InfoRowData[] = [
    {
      label: props.l10n.getString("landing-redesign-info-block-one-label"),
      title: props.l10n.getString("landing-redesign-info-block-one-title"),
      description: props.l10n.getString(
        "landing-redesign-info-block-one-description",
      ),
      imageSrc: PhoneMockup,
    },
    {
      label: props.l10n.getString("landing-redesign-info-block-two-label"),
      title: props.l10n.getString("landing-redesign-info-block-two-title"),
      description: props.l10n.getString(
        "landing-redesign-info-block-two-description",
      ),
      imageSrc: LaptopMockup,
    },
    {
      label: props.l10n.getString("landing-redesign-info-block-three-label"),
      title: props.l10n.getString("landing-redesign-info-block-three-title"),
      description: props.l10n.getString(
        "landing-redesign-info-block-three-description",
      ),
      imageSrc: TabletMockup,
    },
  ];

  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoHero}>
        <Image src={PhoneLaptopMockupMobile} alt="" />
      </div>
      {infoRowData.map((info, infoIndex) => (
        <InfoRow key={`info-${infoIndex}`} data={info} />
      ))}
      {(props.enabledFeatureFlags.includes("DisableOneRepScans") &&
        props.eligibleForPremium) ||
      (props.eligibleForPremium && props.scanLimitReached) ? (
        <ScanLimit />
      ) : (
        <FreeScanCta
          scanLimitReached={props.scanLimitReached}
          eligibleForPremium={props.eligibleForPremium}
          signUpCallbackUrl={`${process.env.SERVER_URL}/user/dashboard`}
          eventId={{
            cta: "clicked_get_scan_info_banner",
          }}
          experimentData={props.experimentData}
          ctaLabel={
            <>
              {props.l10n.getString("landing-redesign-info-block-cta-label")}
              <ArrowIcon alt="" />
            </>
          }
          showCtaOnly
        />
      )}
    </div>
  );
};
