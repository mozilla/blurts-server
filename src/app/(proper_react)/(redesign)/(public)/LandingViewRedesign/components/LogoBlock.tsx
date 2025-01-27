/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import slashdotLogo from "../images/companies/slashdot.svg";
import cnetLogo from "../images/companies/cnet.svg";
import engadgetLogo from "../images/companies/engadget.svg";
import forbesLogo from "../images/companies/forbes.svg";
import fortuneLogo from "../images/companies/fortune.svg";
import mashableLogo from "../images/companies/mashable.svg";
import pcmagazineLogo from "../images/companies/pcmagazine.svg";
import pcworldLogo from "../images/companies/pcworld.svg";
import techcrunchLogo from "../images/companies/techcrunch.svg";
import techradarLogo from "../images/companies/techradar.svg";
import vergeLogo from "../images/companies/verge.svg";
import styles from "./LogoBlock.module.scss";

type LogoData = {
  title: string;
  imageSrc: string;
};

const logos: LogoData[] = [
  {
    title: "Slashdot",
    imageSrc: slashdotLogo,
  },
  {
    title: "Fortune",
    imageSrc: fortuneLogo,
  },
  {
    title: "CNET",
    imageSrc: cnetLogo,
  },
  {
    title: "Mashable",
    imageSrc: mashableLogo,
  },
  {
    title: "PCWorld",
    imageSrc: pcworldLogo,
  },
  {
    title: "The Verge",
    imageSrc: vergeLogo,
  },
  {
    title: "PC Magazine",
    imageSrc: pcmagazineLogo,
  },
  {
    title: "Engadget",
    imageSrc: engadgetLogo,
  },
  {
    title: "Tech Crunch",
    imageSrc: techcrunchLogo,
  },
  {
    title: "TechRadar",
    imageSrc: techradarLogo,
  },
  {
    title: "Forbes",
    imageSrc: forbesLogo,
  },
] as const;

export const LogoBlock = ({ l10n }: { l10n: ExtendedReactLocalization }) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h3>
          <b>{l10n.getString("landing-redesign-logo-block-title")}</b>
        </h3>
        <p>{l10n.getString("landing-redesign-logo-block-description")}</p>
      </div>
      <div className={styles.logosWrapper}>
        {logos.map(({ title, imageSrc }, logoIndex) => (
          <span key={`logo-${logoIndex}`} className={styles.logo}>
            <Image src={imageSrc} alt={title} />
          </span>
        ))}
      </div>
    </div>
  );
};
