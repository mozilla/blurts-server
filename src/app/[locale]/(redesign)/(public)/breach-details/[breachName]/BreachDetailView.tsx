/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Image from "next/image";
import styles from "./BreachDetailView.module.scss";
import type { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { getAllPriorityDataClasses } from "../../../../../../utils/recommendations";
import { TelemetryLink } from "../../../../../components/client/TelemetryLink";
import { BreachLogo } from "../../../../../components/server/BreachLogo";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { ExtendedReactLocalization } from "../../../../../functions/l10n";
import BreachDetailScanImage from "./images/breach-detail-scan.svg";
import { Button } from "../../../../../components/client/Button";

import RecommendationIconChangePw from "./images/recommendation-icons/change-password.svg";
import RecommendationIconUpdatePw from "./images/recommendation-icons/update-passwords.svg";
import RecommendationIconStoreSafe from "./images/recommendation-icons/store-safe-place.svg";
import RecommendationIcon2fa from "./images/recommendation-icons/set-2FA.svg";
import RecommendationIconReviewCredit from "./images/recommendation-icons/review-credit.svg";
import RecommendationIconMonitorBank from "./images/recommendation-icons/monitor-bank.svg";
import RecommendationIconMonitorCc from "./images/recommendation-icons/monitor-credit-cards.svg";
import RecommendationIconMaskIp from "./images/recommendation-icons/use-mask-IP-service.svg";
import RecommendationIconUniqueAs from "./images/recommendation-icons/unique-answers.svg";
import RecommendationIconAvoidPhoneShare from "./images/recommendation-icons/avoid-sharing-phone.svg";
import RecommendationIconStrengthenPin from "./images/recommendation-icons/strengthen-pin-security.svg";
import RecommendationIconAvoidAddress from "./images/recommendation-icons/avoid-address.svg";
import RecommendationIconUniqueStrongPws from "./images/recommendation-icons/unique-strong-pwds.svg";
import RecommendationIconAvoidPii from "./images/recommendation-icons/avoid-personal-info.svg";
import RecommendationIconUpdateRegularly from "./images/recommendation-icons/update-regularly.svg";
import RecommendationIconMaskedEmail from "./images/recommendation-icons/masked-email.svg";

const recommendationIconMap = {
  "rec-pw-1": RecommendationIconChangePw,
  "rec-pw-2": RecommendationIconUpdatePw,
  "rec-pw-3": RecommendationIconStoreSafe,
  "rec-pw-4": RecommendationIcon2fa,
  "rec-ssn": RecommendationIconReviewCredit,
  "rec-bank-acc": RecommendationIconMonitorBank,
  "rec-cc": RecommendationIconMonitorCc,
  "rec-ip-us": RecommendationIconMaskIp,
  "rec-hist-pw": RecommendationIconChangePw,
  "rec-sec-qa": RecommendationIconUniqueAs,
  "rec-phone-num": RecommendationIconAvoidPhoneShare,
  "rec-dob": RecommendationIconStrengthenPin,
  "rec-pins": RecommendationIconStrengthenPin,
  "rec-address": RecommendationIconAvoidAddress,
  "rec-gen-1": RecommendationIconUniqueStrongPws,
  "rec-gen-2": RecommendationIconStoreSafe,
  "rec-gen-3": RecommendationIconAvoidPii,
  "rec-gen-4": RecommendationIconUpdateRegularly,
  "rec-email": RecommendationIconMaskedEmail,
} as const;

import GlyphBan from "./images/high-priority-data-class-logos/bank-account-numbers.svg";
import GlyphCvv from "./images/high-priority-data-class-logos/credit-card-cvvs.svg";
import GlyphCc from "./images/high-priority-data-class-logos/credit-cards.svg";
import GlyphDob from "./images/high-priority-data-class-logos/dates-of-birth.svg";
import GlyphEmail from "./images/high-priority-data-class-logos/email-addresses.svg";
import GlyphGeo from "./images/high-priority-data-class-logos/geographic-locations.svg";
import GlyphHistPw from "./images/high-priority-data-class-logos/historical-passwords.svg";
import GlyphIp from "./images/high-priority-data-class-logos/ip-addresses.svg";
import GlyphPartialCc from "./images/high-priority-data-class-logos/partial-credit-card-data.svg";
import GlyphPw from "./images/high-priority-data-class-logos/passwords.svg";
import GlyphPhone from "./images/high-priority-data-class-logos/phone-numbers.svg";
import GlyphAddr from "./images/high-priority-data-class-logos/physical-addresses.svg";
import GlyphPin from "./images/high-priority-data-class-logos/pins.svg";
import GlyphSecQ from "./images/high-priority-data-class-logos/security-questions-and-answers.svg";
import GlyphSsn from "./images/high-priority-data-class-logos/social-security-numbers.svg";
import GlyphUsername from "./images/high-priority-data-class-logos/usernames.svg";
import GlyphMore from "./images/high-priority-data-class-logos/more.svg";

const dataClassGlyphMap = {
  "bank-account-numbers": GlyphBan,
  "credit-card-cvvs": GlyphCvv,
  "credit-cards": GlyphCc,
  "dates-of-birth": GlyphDob,
  "email-addresses": GlyphEmail,
  "geographic-locations": GlyphGeo,
  "historical-passwords": GlyphHistPw,
  "ip-addresses": GlyphIp,
  "partial-credit-card-data": GlyphPartialCc,
  passwords: GlyphPw,
  "phone-numbers": GlyphPhone,
  "physical-addresses": GlyphAddr,
  pins: GlyphPin,
  "security-questions-and-answers": GlyphSecQ,
  "social-security-numbers": GlyphSsn,
  usernames: GlyphUsername,
};

export type Props = {
  l10n: ExtendedReactLocalization;
  breach: HibpLikeDbBreach;
};
export const BreachDetailsView = (props: Props) => {
  const l10n = props.l10n;
  const locale = getLocale(l10n);
  const breach = props.breach;

  const sortedDataClasses = getSortedDataClasses(breach, locale);
  const breachCategory = getBreachCategory(breach);

  // This is old code cursorily ported; we can write a proper unit test once we
  // have a new design with actual requirements:
  /* c8 ignore start */
  return (
    <main className={styles.wrapper}>
      <header>
        <h1>
          <BreachLogo breach={breach} />
          {breach.Title}
        </h1>
        {typeof breach.Domain === "string" && breach.Domain.length > 0 ? (
          <p>
            <TelemetryLink
              href={`https://${breach.Domain}`}
              eventData={{ link_id: breach.Domain }}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {breach.Domain}
            </TelemetryLink>
          </p>
        ) : null}
      </header>

      <div className={styles.overview}>
        <h2 className={styles.overviewTitle}>
          {l10n.getString("breach-overview-title")}
        </h2>
        <div className={styles.content}>
          <p>
            {breach.Name === "BVD" && locale.split("-")[0] === "en" ? (
              <>
                In approximately August 2021, hundreds of gigabytes of business
                data collated from public sources was obtained and later
                published to a popular hacking forum. Sourced from a customer of
                Bureau van Dijk&apos;s (BvD) &quot;Orbis&quot; product, the
                corpus of data released contained hundreds of millions of lines
                about corporations and individuals, including personal
                information such as names and dates of birth. The data also
                included 28M unique email addresses along with physical
                addresses (presumedly corporate locations), phone numbers and
                job titles. There was no unauthorised access to BvD&apos;s
                systems, nor did the incident expose any of their or parent
                company&apos;s Moody&apos;s clients.
              </>
            ) : (
              l10n.getString("breach-overview-new", {
                breachDate: new Date(breach.BreachDate).toLocaleString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                breachTitle: breach.Title,
                addedDate: new Date(breach.AddedDate).toLocaleString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              })
            )}
          </p>
          {wasAddedMoreThan90DaysAfterBreach(breach) ? (
            <p>
              <a href="#delayed-reporting">
                {l10n.getString("delayed-reporting-headline")}
              </a>
            </p>
          ) : null}

          <div>
            <h3>{l10n.getString("what-data")}</h3>
            <div className={styles.compromisedDataList}>
              <CompromisedDataList
                sortedDataClasses={sortedDataClasses}
                l10n={l10n}
              />
            </div>
            <small
              className="breach-detail-attribution"
              dangerouslySetInnerHTML={{
                __html: l10n
                  .getString("email-2022-hibp-attribution", {
                    "hibp-link-attr":
                      'href="https://haveibeenpwned.com/" target="_blank"',
                  })
                  // The following are special characters inserted by Fluent,
                  // which break the link when inserted into the tag.
                  // (For future strings, we can just `getElement` to properly insert
                  // tags into localised strings.)
                  .replaceAll("⁩", "")
                  .replaceAll("⁨", ""),
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.signUp}>
        <Image alt="" src={BreachDetailScanImage} />
        <div className={styles.content}>
          <h2 className={styles.signUpTitle}>
            {l10n.getString("find-out-if-2")}
          </h2>
          <span>{l10n.getString("find-out-if-description")}</span>
        </div>
        <div>
          <Button variant="primary" href={`/${locale}/user/dashboard`}>
            {l10n.getString("breach-detail-cta-signup")}
          </Button>
        </div>
      </div>

      <div className={styles.recommendations}>
        <h2 className={styles.recommendationsTitle}>
          {breach.DataClasses.includes("passwords")
            ? l10n.getString("rec-section-headline")
            : l10n.getString("rec-section-headline-no-pw")}
        </h2>
        <p className={styles.lead}>
          {breach.DataClasses.includes("passwords")
            ? l10n.getString("rec-section-subhead")
            : l10n.getString("rec-section-subhead-no-pw")}
        </p>

        <dl>
          {sortedDataClasses.highPriorityClassesWithDetails.flatMap(
            (dataClassDetails) => {
              return (dataClassDetails.recommendations ?? []).map(
                (recommendation, i) => {
                  return (
                    <div
                      key={`recommendation-${dataClassDetails.dataClass}-${i}`}
                    >
                      <dt>
                        <Image
                          src={
                            recommendationIconMap[
                              recommendation.recIconClassName as keyof typeof recommendationIconMap
                            ]
                          }
                          alt=""
                          width={48}
                        />
                        {l10n.getString(
                          recommendation.recommendationCopy.subhead,
                        )}
                      </dt>
                      <dd>
                        {recommendation.recommendationCopy.body && (
                          <p>
                            {l10n.getString(
                              recommendation.recommendationCopy.body,
                            )}
                          </p>
                        )}
                        {recommendation.cta ? (
                          <TelemetryLink
                            href={recommendation.cta.href}
                            target={
                              recommendation.cta.shouldOpenNewTab
                                ? "_blank"
                                : "_self"
                            }
                            eventData={{
                              link_id: recommendation.cta.analyticsId,
                            }}
                            className={styles.cta}
                          >
                            {l10n.getString(recommendation.cta.content)}
                          </TelemetryLink>
                        ) : null}
                      </dd>
                    </div>
                  );
                },
              ) as ReactNode[];
            },
          )}

          {[1, 2, 3, 4].map((recId) => {
            return (
              <div key={`generic-recommendation-${recId}`}>
                <dt>
                  <Image
                    src={
                      recommendationIconMap[
                        `rec-gen-${recId}` as keyof typeof recommendationIconMap
                      ]
                    }
                    alt=""
                    width={48}
                  />
                  {l10n.getString(`rec-gen-${recId}-subhead`)}
                </dt>
                <dd>
                  <p>{l10n.getString(`rec-gen-${recId}`)}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>

      <div className={styles.explainers}>
        <div id="what-is-this-breach" className={styles.explainer}>
          <h2 className={styles.explainerTitle}>
            {l10n.getString(
              breachCategory === "data-aggregator-breach"
                ? "what-is-data-agg"
                : breachCategory === "sensitive-breach"
                  ? "sensitive-sites"
                  : "what-is-a-website-breach",
            )}
          </h2>
          <p>
            {l10n.getString(
              breachCategory === "data-aggregator-breach"
                ? "what-is-data-agg-blurb"
                : breachCategory === "sensitive-breach"
                  ? "sensitive-sites-copy"
                  : "website-breach-blurb",
            )}
          </p>
        </div>
        {wasAddedMoreThan90DaysAfterBreach(breach) ? (
          <div id="delayed-reporting" className={styles.explainer}>
            <h2 className={styles.explainerTitle}>
              {l10n.getString("delayed-reporting-headline")}
            </h2>
            <p>{l10n.getString("delayed-reporting-copy")}</p>
          </div>
        ) : null}
      </div>
    </main>
  );
  /* c8 ignore stop */
};

const CompromisedDataList = (props: {
  sortedDataClasses: ReturnType<typeof getSortedDataClasses>;
  l10n: ExtendedReactLocalization;
}) => {
  const locale = getLocale(props.l10n);
  // This is old code cursorily ported; we can write a proper unit test once we
  // have a new design with actual requirements:
  /* c8 ignore start */
  return (
    <ul>
      {props.sortedDataClasses.highPriorityClassesWithDetails.map(
        (dataClassData) => {
          return (
            <li key={`compromised-data-${dataClassData.dataClass}`}>
              <Image
                src={
                  dataClassGlyphMap[
                    dataClassData.glyphName as keyof typeof dataClassGlyphMap
                  ]
                }
                width="24"
                alt=""
              />
              {props.l10n.getString(dataClassData.dataClass)}
            </li>
          );
        },
      )}
      {props.sortedDataClasses.lowPriorityClasses.length > 0 ? (
        <li key="more">
          <Image src={GlyphMore} width="24" alt="" />
          {formatList(
            props.sortedDataClasses.lowPriorityClasses.map((dataClass) =>
              props.l10n.getString(dataClass),
            ),
            locale,
          )}
        </li>
      ) : null}
    </ul>
  );
  /* c8 ignore stop */
};

function wasAddedMoreThan90DaysAfterBreach(breach: HibpLikeDbBreach) {
  const breachDate = new Date(breach.BreachDate);
  const addedDate = new Date(breach.AddedDate);
  const timeDiff = Math.abs(breachDate.getTime() - addedDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return dayDiff > 90;
}

function getSortedDataClasses(breach: HibpLikeDbBreach, userLocale: string) {
  const priorityDataClassesData = getAllPriorityDataClasses(
    undefined,
    userLocale === "en",
  );

  function getPriorityDataClassData(dataClass: string) {
    const typedDataClass = dataClass;
    return priorityDataClassesData[typedDataClass];
  }

  const applicableHighPriorityDataClassesData = breach.DataClasses.filter(
    (dataClass) => typeof getPriorityDataClassData(dataClass) !== "undefined",
  ).map((dataClass) => ({
    ...getPriorityDataClassData(dataClass),
    dataClass: dataClass,
  }));
  applicableHighPriorityDataClassesData.sort((a, b) => b.weight - a.weight);

  const applicableLowPriorityDataClasses = breach.DataClasses.filter(
    (dataClass) => typeof getPriorityDataClassData(dataClass) === "undefined",
  );

  return {
    highPriorityClassesWithDetails: applicableHighPriorityDataClassesData,
    lowPriorityClasses: applicableLowPriorityDataClasses,
  };
}

// This is old code cursorily ported; we can write a proper unit test once we
// have a new design with actual requirements:
/* c8 ignore start */
function getBreachCategory(breach: HibpLikeDbBreach) {
  const dataAggregators = [
    "Exactis",
    "Apollo",
    "YouveBeenScraped",
    "ElasticsearchSalesLeads",
    "Estonia",
    "MasterDeeds",
    "PDL",
  ];
  if (dataAggregators.includes(breach.Name)) {
    return "data-aggregator-breach";
  }
  if (breach.IsSensitive) {
    return "sensitive-breach";
  }
  if (breach.Domain !== "") {
    return "website-breach";
  }
  return "data-aggregator-breach";
}

function formatList(list: string[], locale: string) {
  if (typeof Intl.ListFormat === "undefined") {
    return list.join(", ");
  }

  return new Intl.ListFormat(locale, {
    type: "unit",
    style: "short",
  }).format(list);
}
/* c8 ignore stop */
