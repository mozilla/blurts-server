/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import styles from "./BreachLogo.module.css";
import { LogoMap } from "../../functions/server/getBreaches";
import { Breach } from "../../(nextjs_migration)/(authenticated)/user/breaches/breaches.d";

/**
 * @param props
 * @param {object} props.breach
 * @param {Map<string, string>} props.logos Map of URLs to logos indexed by the domain name of the respective company
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */

export type Props = {
  breach: Breach;
  logos: LogoMap;
  // The prop `htmlTags` ensures compatibility for the work in
  // `nextjs_migration` when rendering server components to strings. As soon as
  // this component is not being used there anymore we can remove the prop.
  htmlTags?: boolean;
};

export function BreachLogo(props: Props) {
  const logoIsAvailable = props.logos?.has(props.breach.Domain);

  if (logoIsAvailable) {
    const ImageType = props.htmlTags ? "img" : Image;
    return (
      <ImageType
        src={props.logos.get(props.breach.Domain) as string}
        alt=""
        loading="lazy"
        className={styles.breachLogo}
        width={32}
        height={32}
      />
    );
  }

  // Add CSS variable and a dedicated class for the logo placeholder
  // as fallback for emails
  const { className, variableName } = getColorForName(props.breach.Name);
  const classNames = `${styles.breachLogo} ${className}`;

  return (
    <span
      role="img"
      aria-hidden="true"
      className={classNames}
      style={{ backgroundColor: `var(${variableName})` }}
    >
      {props.breach.Name.substring(0, 1)}
    </span>
  );
}

/**
 * @param {string} name
 * @returns {string} CSS variable for a string-specific color
 */
function getColorForName(name: string) {
  const logoColors = [
    {
      className: "bg-blue-5",
      variableName: "--blue-5",
    },
    {
      className: "bg-purple-5",
      variableName: "--purple-5",
    },
    {
      className: "bg-green-05",
      variableName: "--green-05",
    },
    {
      className: "bg-violet-5",
      variableName: "--violet-5",
    },
    {
      className: "bg-orange-5",
      variableName: "--orange-5",
    },
    {
      className: "bg-yellow-5",
      variableName: "--yellow-5",
    },
    {
      className: "bg-red-5",
      variableName: "--red-5",
    },
    {
      className: "bg-pink-5",
      variableName: "--pink-5",
    },
  ];

  const charValue = name
    .split("")
    .map((letter) => letter.codePointAt(0))
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .reduce((sum, codePoint) => sum! + codePoint!) as number;

  return logoColors[charValue % logoColors.length];
}
