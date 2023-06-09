/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Script from "next/script";
import "../../../../client/css/partials/exposureScan.css";
import Image from "next/image";
import HeroImage from "../../../../client/images/exposure-scan-hero.svg";
import NoBreachesImage from "../../../../client/images/breaches-none.svg";
import { getL10n } from "../../../functions/server/l10n";

export async function generateMetadata() {
  const l10n = getL10n();
  return {
    title: l10n.getString("breach-scan-meta-title"),
  };
}

export default function PublicScan() {
  const l10n = getL10n();

  return (
    <div data-partial="exposureScan">
      <Script type="module" src="/nextjs_migration/client/js/scan.js" />
      <div hidden id="data"></div>
      <div id="exposure-scan-loading">
        {l10n.getString("exposure-landing-result-loading")}
      </div>
      <div hidden id="exposure-scan-error" aria-live="polite">
        {l10n.getString("exposure-landing-result-error")}
      </div>
      <template
        id="breach-template"
        dangerouslySetInnerHTML={{
          __html: `
          <li class="exposure-scan-breach">
            <h3>
              ${
                /* The company logo and name will be added client-side, after running the scan */ ""
              }
              <span class="exposure-scan-breach-company-logo"></span>
              <span class="exposure-scan-breach-company-name"></span>
            </h3>
            <div class="exposure-scan-breach-main">
              <dl>
                <div class="exposure-scan-breach-added">
                  <dt>${l10n.getString(
                    "exposure-landing-result-card-added"
                  )}</dt>
                  ${
                    /* The added date will be added client-side, after running the scan */ ""
                  }
                  <dd></dd>
                </div>
                <div class="exposure-scan-breach-data">
                  <dt>${l10n.getString(
                    "exposure-landing-result-card-data"
                  )}</dt>
                  ${
                    /* The breached data will be added client-side, after running the scan */ ""
                  }
                  <dd></dd>
                </div>
              </dl>
            </div>
          </li>
        `,
        }}
      />
      <div
        hidden
        id="exposure-scan-results-overflow"
        className="exposure-scan-results"
        aria-live="polite"
      >
        <header className="exposure-scan-hero">
          <div className="exposure-scan-hero-content">
            <p>
              {l10n.getString("exposure-landing-result-overflow-hero-lead")}
            </p>
            <a
              href="/user/breaches"
              data-cta-id="exposure-landing-result-overflow-cta-hero"
              className="button primary"
            >
              {l10n.getString(
                "exposure-landing-result-overflow-hero-cta-label"
              )}
            </a>
          </div>
          <Image alt="" src={HeroImage} />
        </header>
        <ul className="exposure-scan-breaches"></ul>
        <footer className="exposure-scan-footer">
          <a
            href="/user/breaches"
            data-cta-id="exposure-landing-result-overflow-cta-footer"
            className="button primary"
          >
            {l10n.getString(
              "exposure-landing-result-overflow-footer-cta-label"
            )}
          </a>
          <p
            className="hibp-attribution"
            dangerouslySetInnerHTML={{
              __html: l10n
                .getString("exposure-landing-result-footer-attribution")
                .replace(
                  "<hibp-link>",
                  '<a href="https://haveibeenpwned.com/" target="_blank">'
                )
                .replace("</hibp-link>", "</a>"),
            }}
          />
        </footer>
      </div>
      <div
        hidden
        id="exposure-scan-results-some"
        className="exposure-scan-results"
        aria-live="polite"
      >
        <header className="exposure-scan-hero">
          <div className="exposure-scan-hero-content">
            <p>{l10n.getString("exposure-landing-result-some-hero-lead")}</p>
            <a
              href="/user/breaches"
              data-cta-id="exposure-landing-result-some-cta-hero"
              className="button primary"
            >
              {l10n.getString("exposure-landing-result-some-hero-cta-label")}
            </a>
          </div>
          <Image alt="" src={HeroImage} />
        </header>
        <ul className="exposure-scan-breaches"></ul>
        <footer className="exposure-scan-footer">
          <a
            href="/user/breaches"
            data-cta-id="exposure-landing-result-some-cta-footer"
            className="button primary"
          >
            {l10n.getString("exposure-landing-result-some-footer-cta-label")}
          </a>
          <p
            className="hibp-attribution"
            dangerouslySetInnerHTML={{
              __html: l10n
                .getString("exposure-landing-result-footer-attribution")
                .replace(
                  "<hibp-link>",
                  '<a href="https://haveibeenpwned.com/" target="_blank">'
                )
                .replace("</hibp-link>", "</a>"),
            }}
          />
        </footer>
      </div>
      <div
        hidden
        id="exposure-scan-results-none"
        className="exposure-scan-results"
        aria-live="polite"
      >
        <header className="exposure-scan-hero">
          <div className="exposure-scan-hero-content">
            <p>{l10n.getString("exposure-landing-result-none-hero-lead")}</p>
            <a
              href="/user/breaches"
              data-cta-id="exposure-landing-result-none-cta-hero"
              className="button primary"
            >
              {l10n.getString("exposure-landing-result-none-hero-cta-label")}
            </a>
          </div>
          <Image alt="" src={HeroImage} />
        </header>
        <div className="exposure-scan-breaches">
          <div className="exposure-scan-breach">
            <Image alt="" src={NoBreachesImage} />
            {l10n.getString("exposure-landing-result-card-nothing")}
          </div>
        </div>
        <footer className="exposure-scan-footer">
          <a
            href="/user/breaches"
            data-cta-id="exposure-landing-result-none-cta-footer"
            className="button primary"
          >
            {l10n.getString("exposure-landing-result-none-footer-cta-label")}
          </a>
          <p
            className="hibp-attribution"
            dangerouslySetInnerHTML={{
              __html: l10n
                .getString("exposure-landing-result-footer-attribution")
                .replace(
                  "<hibp-link>",
                  '<a href="https://haveibeenpwned.com/" target="_blank">'
                )
                .replace("</hibp-link>", "</a>"),
            }}
          />
        </footer>
      </div>
    </div>
  );
}
