/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { LandingPageProps } from "..";
import { TelemetryButton } from "../../../../../components/client/TelemetryButton";
import { ArrowIcon } from "../../../../../components/server/Icons";
import styles from "./InfoBlock.module.scss";
import PhoneMockup from "../images/phone-mockup.svg";
import LaptopMockup from "../images/laptop-mockup.svg";
import TabletMockup from "../images/tablet-mockup.svg";
import PhoneLaptopMockupMobile from "../images/phone-laptop-mockup-mobile.svg";

type InfoRowData = {
  label: string;
  title: string;
  description: string;
  image: string;
};

const infoRowData: InfoRowData[] = [
  {
    label: "Proactive protection",
    title: "Stay protected with continuous data monitoring",
    description:
      "Mozilla Monitor continuously scans the web for exposure of your personal data. By monitoring multiple types of personal information, you are better protected from identity theft or hackers.",
    image: PhoneMockup,
  },
  {
    label: "Enhanced privacy",
    title: "Take control of your privacy with automated data removal",
    description:
      "Mozilla Monitor Plus automatically removes your data from hundreds of data brokers. This process saves you time and effort to reduce your online footprint and gives you more control over where your personal information is shared.",
    image: LaptopMockup,
  },
  {
    label: "Stay informed",
    title: "Act fast with timely notifications",
    description:
      "With Monitor, you will be notified when your data is found in data breaches or data brokers, allowing you to take action such as securing accounts, updating passwords, or requesting data removal, reducing the risk of privacy threats.",
    image: TabletMockup,
  },
];

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

export const InfoBlock = (props: LandingPageProps) => {
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
          {props.l10n.getString(
            "landing-redesign-premium-banner-cta-button-label",
          )}
          <ArrowIcon alt="" />
        </TelemetryButton>
      </div>
    </section>
  );
};
