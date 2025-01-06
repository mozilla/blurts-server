/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ArrowIcon } from "../../../../../components/server/Icons";
import styles from "./InfoBlock.module.scss";
import PhoneMockup from "../images/phone-mockup.svg";
import LaptopMockup from "../images/laptop-mockup.svg";
import TabletMockup from "../images/tablet-mockup.svg";
import PhoneLaptopMockupMobile from "../images/phone-laptop-mockup-mobile.svg";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";

type InfoRowData = {
  label: string;
  title: string;
  description: string;
  image: string;
};

const InfoRow = ({ key, data }: { key: string; data: InfoRowData }) => {
  const { label, title, description, image } = data;
  return (
    <div key={key} className={styles.infoRow}>
      <div className={styles.infoImageWrapper}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.infoText}>
        <span className={styles.infoLabel}>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const InfoBlock = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
  const infoRowData: InfoRowData[] = [
    {
      label: l10n.getString("landing-redesign-premium-info-block-one-label"),
      title: l10n.getString("landing-redesign-premium-info-block-one-title"),
      description: l10n.getString(
        "landing-redesign-premium-info-block-one-description",
      ),
      image: PhoneMockup,
    },
    {
      label: l10n.getString("landing-redesign-premium-info-block-two-label"),
      title: l10n.getString("landing-redesign-premium-info-block-two-title"),
      description: l10n.getString(
        "landing-redesign-premium-info-block-two-description",
      ),
      image: LaptopMockup,
    },
    {
      label: l10n.getString("landing-redesign-premium-info-block-three-label"),
      title: l10n.getString("landing-redesign-premium-info-block-three-title"),
      description: l10n.getString(
        "landing-redesign-premium-info-block-three-description",
      ),
      image: TabletMockup,
    },
  ];

  return (
    <section>
      <div className={styles.infoBlock}>
        <div className={styles.infoHero}>
          <Image src={PhoneLaptopMockupMobile} alt="" />
        </div>
        {infoRowData.map((info, infoIndex) => (
          <InfoRow key={`info-${infoIndex}`} data={info} />
        ))}
        <TelemetryButton
          variant="primary"
          // TODO: Add href and telementry
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          event={{
            module: "link",
            name: "click",
            data: {
              link_id: "",
            },
          }}
        >
          {l10n.getString("landing-redesign-premium-banner-cta-button-label")}
          <ArrowIcon alt="" />
        </TelemetryButton>
      </div>
    </section>
  );
};
