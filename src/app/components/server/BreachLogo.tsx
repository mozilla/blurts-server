/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import styles from "./BreachLogo.module.scss";
import { HibpLikeDbBreach, WithFaviconUrl } from "../../../utils/hibp";
import { Breach } from "../../functions/universal/breach";

/**
 * @param props
 * @param {object} props.breach
 * @param {Map<string, string>} props.logos Map of URLs to logos indexed by the domain name of the respective company
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */

export type Props = {
  breach: HibpLikeDbBreach | Breach;
};

// The <BreachLogo> component is currently a bit troublesome to test because it
// takes a `HibpLikeDataBreach`, for which we don't have a mock generator. We
// can add a unit test when we convert it to take SubscriberBreaches.
/* c8 ignore start */
export function BreachLogo(props: Props) {
  if (hasFavIconUrl(props.breach)) {
    return (
      <Image
        src={props.breach.FaviconUrl}
        alt=""
        loading="lazy"
        className={styles.breachLogo}
        width={32}
        height={32}
      />
    );
  }

  return <FallbackLogo name={props.breach.Title} />;
}
/* c8 ignore stop */

export function FallbackLogo(props: { name: string }) {
  const color = getColorForName(props.name);
  const classNames = `${styles.breachLogo} ${styles[color]}`;

  return (
    <span role="img" aria-hidden="true" className={classNames}>
      {props.name.substring(0, 1)}
    </span>
  );
}

/**
 * @param {string} name
 * @returns {string} CSS variable for a string-specific color
 */
function getColorForName(name: string) {
  const logoColors = [
    "purple40",
    "purple30",
    "purple10",
    "purple05",
    "green50",
    "green40",
    "green30",
    "green20",
    "green10",
    "violet30",
    "violet20",
    "violet10",
    "blue30",
    "blue20",
    "blue10",
    "red30",
    "red20",
    "red10",
    "orange30",
    "orange20",
    "orange10",
    "pink20",
    "pink10",
  ];

  const charValue = name
    .split("")
    .map((letter) => letter.codePointAt(0))
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .reduce((sum, codePoint) => sum! + codePoint!) as number;

  return logoColors[charValue % logoColors.length];
}

// We don't explicitly test for favicon URLs, because we have mocked out lazy-
// loaded images, which makes them hard to test:
/* c8 ignore next 5 */
function hasFavIconUrl(
  breach: HibpLikeDbBreach | Breach,
): breach is Required<WithFaviconUrl> & HibpLikeDbBreach {
  return typeof (breach as HibpLikeDbBreach).FaviconUrl === "string";
}
