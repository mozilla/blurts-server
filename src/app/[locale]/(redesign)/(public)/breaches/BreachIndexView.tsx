/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Link from "next/link";
import styles from "./BreachIndexView.module.scss";
import { HibpLikeDbBreach } from "../../../../../utils/hibp";
import { useL10n } from "../../../../hooks/l10n";
import { ExtendedReactLocalization } from "../../../../functions/l10n";
import { BreachLogo } from "../../../../components/server/BreachLogo";
import { getLocale } from "../../../../functions/universal/getLocale";
import { useHasRenderedClientSide } from "../../../../hooks/useHasRenderedClientSide";
import { memo, useMemo, useState, useTransition } from "react";
import { SearchIcon } from "../../../../components/server/Icons";

export type Props = {
  allBreaches: HibpLikeDbBreach[];
};
export const BreachIndexView = (props: Props) => {
  const l10n = useL10n();
  const [_filterIsPending, startFilterTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  return (
    <main className={styles.wrapper}>
      <header>
        <h1>{l10n.getString("all-breaches-headline-3")}</h1>
        <p>{l10n.getString("all-breaches-lead")}</p>
        <FilterForm
          onChange={(term: string) => {
            startFilterTransition(() => setFilterTerm(term));
          }}
        />
      </header>
      <ul className={styles.breachList}>
        {props.allBreaches.map((breachData) => (
          <BreachCard
            key={breachData.Id + breachData.Domain}
            breach={breachData}
            isVisible={matchesFilter(breachData, filterTerm, l10n)}
          />
        ))}
      </ul>
    </main>
  );
};

const FilterForm = (props: { onChange: (newValue: string) => void }) => {
  const l10n = useL10n();
  const [filterTerm, setFilterTerm] = useState("");
  {
    /* This is a big page, and re-rendering everything on the client-side
  takes a while. While it is re-rendering, the form won't work. Thus, we
  only show the form after the first client-side render. */
  }
  const hasRenderedClientSide = useHasRenderedClientSide();

  return (
    <form className={styles.filterForm} aria-hidden={!hasRenderedClientSide}>
      <div className={styles.control}>
        <label htmlFor="filterTerm">
          <SearchIcon alt={l10n.getString("search-breaches")} />
        </label>
        <input
          onChange={(e) => {
            setFilterTerm(e.target.value);
            props.onChange(e.target.value);
          }}
          value={filterTerm}
          type="search"
          name="filterTerm"
          id="filterTerm"
        />
      </div>
    </form>
  );
};

function matchesFilter(
  breach: HibpLikeDbBreach,
  filterTerm: string,
  l10n: ExtendedReactLocalization,
): boolean {
  if (filterTerm === "") {
    return true;
  }
  const term = filterTerm.toLocaleLowerCase();
  return (
    breach.Title.toLocaleLowerCase().includes(term) ||
    breach.DataClasses.findIndex((dataClass) =>
      l10n.getString(dataClass).toLocaleLowerCase().includes(term),
    ) !== -1
  );
}

// A filter for a page with lots of elements that might re-render after every
// time the filter changes, like the current page, is exactly what React isn't
// great at. memo() alleviates it somewhat, though.
const BreachCard = memo(
  (props: { breach: HibpLikeDbBreach; isVisible: boolean }) => {
    const l10n = useL10n();
    const locale = getLocale(l10n);
    // Performance profiling shows that formatting the date is pretty expensive,
    // so we don't want to redo it for every entry every time the user changes the
    // filter string:
    const addedDate = useMemo(() => {
      return new Date(props.breach.AddedDate).toLocaleString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }, [locale, props.breach.AddedDate]);

    return (
      <li style={{ display: props.isVisible ? undefined : "none" }}>
        <Link
          href={`/${locale}/breach-details/${props.breach.Name}/`}
          className={styles.breachCard}
        >
          <h2>
            <BreachLogo breach={props.breach} />
            {props.breach.Title}
          </h2>
          <dl>
            <div className={styles.entry}>
              <dt>{l10n.getString("breach-added-label")}</dt>
              <dd>{addedDate}</dd>
            </div>
            <div className={styles.entry}>
              <dt>{l10n.getString("exposed-data")}</dt>
              <dd>
                {formatList(
                  props.breach.DataClasses.map((a: string) =>
                    l10n.getString(a),
                  ),
                  locale,
                )}
              </dd>
            </div>
          </dl>
          <p className={styles.linkDescription}>
            {l10n.getString("more-about-this-breach")}
          </p>
        </Link>
      </li>
    );
  },
);
BreachCard.displayName = "BreachCard";

function formatList(list: string[], locale: string) {
  if (typeof Intl.ListFormat === "undefined") {
    return list.join(", ");
  }

  return new Intl.ListFormat(locale, {
    type: "unit",
    style: "short",
  }).format(list);
}
