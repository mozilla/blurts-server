/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./BreachIndexView.module.scss";
import { HibpLikeDbBreach } from "../../../../../utils/hibp";
import { Breach } from "../../../../deprecated/(authenticated)/user/breaches/breaches";
import { ExtendedReactLocalization } from "../../../../hooks/l10n";
import { BreachLogo } from "../../../../components/server/BreachLogo";
import { getLocale } from "../../../../functions/universal/getLocale";
import Link from "next/link";

export type Props = {
  l10n: ExtendedReactLocalization;
  allBreaches: Array<HibpLikeDbBreach | Breach>;
};
export const BreachIndexView = (props: Props) => {
  const l10n = props.l10n;

  return (
    <main className={styles.wrapper}>
      <header>
        <h1>{l10n.getString("all-breaches-headline-2")}</h1>
        <p>{l10n.getString("all-breaches-lead")}</p>
      </header>
      <ul className={styles.breachList}>
        {props.allBreaches.map((breachData) => (
          <li key={breachData.Id + breachData.Domain}>
            <BreachCard breach={breachData} l10n={l10n} />
          </li>
        ))}
      </ul>
    </main>
  );
};

const BreachCard = (props: {
  breach: HibpLikeDbBreach | Breach;
  l10n: ExtendedReactLocalization;
}) => {
  const l10n = props.l10n;

  return (
    <Link
      href={`/breach-details/${props.breach.Name}/`}
      className={styles.breachCard}
    >
      <h2>
        <BreachLogo breach={props.breach} />
        {props.breach.Title}
      </h2>
      <dl>
        <div className={styles.entry}>
          <dt>{l10n.getString("breach-added-label")}</dt>
          <dd>
            {new Date(props.breach.AddedDate).toLocaleString(getLocale(l10n), {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </dd>
        </div>
        <div className={styles.entry}>
          <dt>{l10n.getString("exposed-data")}</dt>
          <dd>
            {formatList(
              props.breach.DataClasses.map((a: string) => l10n.getString(a)),
              getLocale(l10n),
            )}
          </dd>
        </div>
      </dl>
      <p className={styles.linkDescription}>
        {l10n.getString("more-about-this-breach")}
      </p>
    </Link>
  );
};

function formatList(list: string[], locale: string) {
  if (typeof Intl.ListFormat === "undefined") {
    return list.join(", ");
  }

  return new Intl.ListFormat(locale, {
    type: "unit",
    style: "short",
  }).format(list);
}
