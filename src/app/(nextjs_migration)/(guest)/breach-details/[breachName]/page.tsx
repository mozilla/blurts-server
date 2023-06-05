/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image, { StaticImageData } from "next/image";
import BreachDetailScanImage from "../../../../../client/images/breach-detail-scan.svg";
import "../../../../../client/css/partials/breachDetail.css";
import { getL10n } from "../../../../functions/server/l10n";
import { getBreachByName } from "../../../../../utils/hibp";
import {
  getAllPriorityDataClasses,
  getAllGenericRecommendations,
} from "../../../../../utils/recommendations";
import { BreachLogo } from "../../../../components/server/BreachLogo";
import {
  getBreachIcons,
  getBreaches,
} from "../../../../functions/server/getBreaches";
import { Breach } from "../../../(authenticated)/user/breaches/breaches.d";
import { getLocale } from "../../../../functions/server/l10n";

import glyphSsn from "../../../../../client/images/social-security-numbers.svg";
import glyphPassword from "../../../../../client/images/passwords.svg";
import glyphBankAccount from "../../../../../client/images/bank-account-numbers.svg";
import glyphCreditCard from "../../../../../client/images/credit-cards.svg";
import glyphCvv from "../../../../../client/images/credit-card-cvvs.svg";
import glyphCreditCardData from "../../../../../client/images/partial-credit-card-data.svg";
import glyphIp from "../../../../../client/images/ip-addresses.svg";
import glyphHistoricalPasswords from "../../../../../client/images/historical-passwords.svg";
import glyphSecurityQ from "../../../../../client/images/security-questions-and-answers.svg";
import glyphPhoneNumber from "../../../../../client/images/phone-numbers.svg";
import glyphEmail from "../../../../../client/images/email-addresses.svg";
import glyphDob from "../../../../../client/images/dates-of-birth.svg";
import glyphPin from "../../../../../client/images/pins.svg";
import glyphAddress from "../../../../../client/images/physical-addresses.svg";
import glyphMore from "../../../../../client/images/more.svg";

const glyphs: Record<string, StaticImageData> = {
  "social-security-numbers": glyphSsn,
  passwords: glyphPassword,
  "bank-account-numbers": glyphBankAccount,
  "credit-cards": glyphCreditCard,
  "credit-card-cvvs": glyphCvv,
  "partial-credit-card-data": glyphCreditCardData,
  "ip-addresses": glyphIp,
  "historical-passwords": glyphHistoricalPasswords,
  "security-questions-and-answers": glyphSecurityQ,
  "phone-numbers": glyphPhoneNumber,
  "email-addresses": glyphEmail,
  "dates-of-birth": glyphDob,
  pins: glyphPin,
  "physical-addresses": glyphAddress,
};

export async function generateMetadata(props: {
  params: { breachName: string };
}) {
  const l10n = getL10n();
  return {
    title: `${l10n.getString("brand-fx-monitor")} - ${props.params.breachName}`,
    twitter: {
      card: "summary_large_image",
      title: l10n.getString("breach-detail-meta-social-title", {
        company: props.params.breachName,
      }),
      description: l10n.getString("breach-detail-meta-social-description"),
      images: ["/images/og-image.webp"],
    },
    openGraph: {
      title: l10n.getString("breach-detail-meta-social-title", {
        company: props.params.breachName,
      }),
      description: l10n.getString("breach-detail-meta-social-description"),
      siteName: l10n.getString("brand-fx-monitor"),
      type: "website",
      url: process.env.SERVER_URL,
      images: ["/images/og-image.webp"],
    },
  };
}

export default async function BreachDetail(props: {
  params: { breachName: string };
}) {
  const l10n = getL10n();
  const breachName = props.params.breachName;
  const allBreaches = await getBreaches();
  const breach = getBreachByName(allBreaches, breachName);
  const breachLogos = await getBreachIcons(allBreaches);

  return (
    <div data-partial="breachDetail">
      <header className="breach-detail-header">
        <div className="breach-detail-meta">
          <h1>
            <BreachLogo breach={breach} logos={breachLogos} />
            {breach.Title}
          </h1>
          {getBreachCategory(breach) === "website-breach" ? (
            <a
              href={`https://${breach.Domain}`}
              className="breach-detail-meta-domain"
              rel="nofollow noopener noreferrer"
              data-event-label={breach.Domain}
              data-event-action="Engage"
              data-event-category="Breach Detail: Website URL Link"
              target="_blank"
            >
              {breach.Domain}
            </a>
          ) : null}
          <a
            href="#what-is-this-breach"
            className="breach-detail-meta-more-info"
          >
            {l10n.getString(getBreachCategory(breach))}
          </a>
        </div>
      </header>

      {
        // Overview
      }
      <div className="breach-detail-overview">
        <div className="breach-detail-overview-blurb">
          <h2>{l10n.getString("breach-overview-title")}</h2>
          <div>
            {l10n.getString("breach-overview-new", {
              breachDate: breach.BreachDate.toLocaleString(getLocale(), {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              breachTitle: breach.Title,
              addedDate: breach.AddedDate.toLocaleString(getLocale(), {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            })}
          </div>
          {compareBreachDates(breach) ? (
            <a href="#delayed-reporting">
              {l10n.getString("delayed-reporting-headline")}
            </a>
          ) : null}
        </div>

        {
          // Exposed Data Classes
        }
        <div>
          <h3>{l10n.getString("what-data")}</h3>
          <ul className="breach-detail-compromised-list">
            {makeDataSection(breach)}
          </ul>
          <p
            className="breach-detail-attribution"
            dangerouslySetInnerHTML={{
              __html: l10n.getString("email-2022-hibp-attribution", {
                "hibp-link-attr":
                  'href="https://haveibeenpwned.com/" target="_blank"',
              }),
            }}
          />
        </div>
      </div>

      {
        // Sign Up Banner
      }
      <div className="breach-detail-sign-up">
        <Image alt="" src={BreachDetailScanImage} />
        <div className="breach-detail-sign-up-content">
          <h2>{l10n.getString("find-out-if-2")}</h2>
          <span>{l10n.getString("find-out-if-description")}</span>
        </div>
        <div className="breach-detail-sign-up-cta-wrapper">
          <a
            href="/user/breaches"
            data-cta-id="breaches-detail"
            className="button primary"
          >
            {l10n.getString("breach-detail-cta-signup")}
          </a>
        </div>
      </div>

      {
        // What to do tips
      }
      <div id="what-to-do-next">
        <div className="breach-detail-recommendation-lead">
          <h2>
            {breach.DataClasses.includes("passwords")
              ? l10n.getString("rec-section-headline")
              : l10n.getString("rec-section-headline-no-pw")}
          </h2>
          <p>
            {breach.DataClasses.includes("passwords")
              ? l10n.getString("rec-section-subhead")
              : l10n.getString("rec-section-subhead-no-pw")}
          </p>
        </div>
        {makeRecommendationCards(breach)}
      </div>

      {
        // What is this breach? / Why did it take you so long to report it
      }
      <div className="breach-detail-info">
        <div id="what-is-this-breach">
          {makeBreachDetail(getBreachCategory(breach))}
        </div>
        {compareBreachDates(breach) ? (
          <div id="delayed-reporting">
            <h2>{l10n.getString("delayed-reporting-headline")}</h2>
            {l10n.getString("delayed-reporting-copy")}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function getBreachDetail(categoryId: Breach) {
  const l10n = getL10n();

  if (categoryId === "data-aggregator-breach") {
    return {
      subhead: l10n.getString("what-is-data-agg"),
      body: l10n.getString("what-is-data-agg-blurb"),
    };
  } else if (categoryId === "sensitive-breach") {
    return {
      subhead: l10n.getString("sensitive-sites"),
      body: l10n.getString("sensitive-sites-copy"),
    };
  } else {
    return {
      subhead: l10n.getString("what-is-a-website-breach"),
      body: l10n.getString("website-breach-blurb"),
    };
  }
}

function makeBreachDetail(breach: ReturnType<typeof getBreachCategory>) {
  const breachDetail = getBreachDetail(breach);
  return (
    <>
      <h2>{breachDetail.subhead}</h2>
      <div>{breachDetail.body}</div>
    </>
  );
}

function getBreachCategory(breach: Breach) {
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

function compareBreachDates(breach: Breach) {
  const breachDate = new Date(breach.BreachDate);
  const addedDate = new Date(breach.AddedDate);
  const timeDiff = Math.abs(breachDate.getTime() - addedDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (dayDiff > 90) {
    return true;
  }
  return false;
}
function getSortedDataClasses(
  breach: Breach,
  isUserBrowserFirefox = false,
  isUserLocaleEnUs = false,
  isUserLocalEn = false,
  changePWLink = false
) {
  const l10n = getL10n();
  const priorityDataClasses: any = getAllPriorityDataClasses(
    isUserBrowserFirefox,
    isUserLocaleEnUs,
    changePWLink
  );

  const sortedDataClasses = {
    priority: [] as any[],
    lowerPriority: [] as any[],
  };

  const dataClasses: any[] = breach.DataClasses;
  dataClasses.forEach((dataClass) => {
    const dataType = l10n.getString(dataClass);
    if (priorityDataClasses[dataClass]) {
      priorityDataClasses[dataClass].dataType = dataType;
      sortedDataClasses.priority.push(priorityDataClasses[dataClass]);
      return;
    }
    sortedDataClasses.lowerPriority.push(dataType);
  });
  sortedDataClasses.priority.sort((a, b) => {
    return b.weight - a.weight;
  });
  sortedDataClasses.lowerPriority = sortedDataClasses.lowerPriority.join(
    ", "
  ) as any;
  return sortedDataClasses;
}

function makeDataSection(breach: Breach) {
  const dataClasses = getSortedDataClasses(breach);

  const output = dataClasses.priority.map((dataClass, dataIndex) => (
    <li key={`data-class-${dataClass.glyphName}`}>
      <Image src={glyphs[dataClass.glyphName]} width="24" alt="" />
      {dataClass.dataType}
    </li>
  ));

  const lastOutputItem =
    Array.isArray(dataClasses.lowerPriority) &&
    dataClasses.lowerPriority.length > 0 ? (
      <li>
        <Image src={glyphMore} width="24" alt="" />
        {dataClasses.lowerPriority}
      </li>
    ) : null;

  return (
    <>
      {output} {lastOutputItem}
    </>
  );
}

function makeRecommendationCards(breach: Breach) {
  const l10n = getL10n();
  const dataClasses = getSortedDataClasses(breach);

  const priorityRecs = dataClasses.priority.map((dataClass) =>
    dataClass.recommendations?.map((r) => (
      <div
        key={r.ctaHref}
        className={`breach-detail-recommendation ${r.recIconClassName}`}
      >
        <dt>{l10n.getString(r.recommendationCopy.subhead)}</dt>
        <dd>
          <p>{l10n.getString(r.recommendationCopy.body)}</p>
          {r.recommendationCopy.cta ? (
            <a
              href={r.ctaHref}
              target={r.ctaShouldOpenInNewTab ? "_blank" : "_self"}
            >
              {l10n.getString(r.recommendationCopy.cta)}
            </a>
          ) : null}
        </dd>
      </div>
    ))
  );

  const genericRecs = getAllGenericRecommendations().map((dataClass: any) => (
    <div
      key={dataClass.ctaHref}
      className={`breach-detail-recommendation ${dataClass.recIconClassName}`}
    >
      <dt>{l10n.getString(dataClass.recommendationCopy.subhead)}</dt>
      <dd>
        <p>{l10n.getString(dataClass.recommendationCopy.body)}</p>
        {dataClass.recommendationCopy.cta ? (
          <a
            href={dataClass.ctaHref}
            target={dataClass.ctaShouldOpenInNewTab ? "_blank" : "_self"}
          >
            {l10n.getString(dataClass.recommendationCopy.cta)}
          </a>
        ) : null}
      </dd>
    </div>
  ));

  return (
    <dl className="breach-detail-recommendation-list">
      {priorityRecs} {genericRecs}
    </dl>
  );
}
