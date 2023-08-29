/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import Script from "next/script";
import "../../../client/css/partials/landing.css";
import { getL10n } from "../../functions/server/l10n";

import HeroImage from "../../../client/images/landing-hero@2x.webp";
import LaptopImage from "../../../client/images/landing-laptop@2x.webp";
import LockImage from "../../../client/images/landing-lock@2x.webp";
import MailImage from "../../../client/images/landing-mail@2x.webp";
import NaturePhoneImage from "../../../client/images/landing-nature-phone@2x.webp";
import { PageLoad } from "../components/client/PageLoad";
import { getNonce } from "../functions/server/getNonce";

export default function Home() {
  const l10n = getL10n();

  return (
    <div data-partial="landing">
      {/* These scripts predate the use of React and thus shouldn’t wait for
      hydration to adjust the layout. */}
      {/* eslint-disable @next/next/no-sync-scripts */}
      <script
        type="module"
        src="/nextjs_migration/client/js/transitionObserver.js"
        rel="preload"
        crossOrigin="anonymous"
        nonce={getNonce()}
      />
      <Script
        type="module"
        src="/nextjs_migration/client/js/landing.js"
        nonce={getNonce()}
      />
      <PageLoad pageTitle="Home" />
      <section className="hero">
        <div>
          <h1>{l10n.getString("exposure-landing-hero-heading")}</h1>
          <p>{l10n.getString("exposure-landing-hero-lead")}</p>
          <form hidden className="exposure-scan">
            <label htmlFor="scan-email-address" className="visually-hidden">
              {l10n.getString("exposure-landing-hero-email-label")}
            </label>
            <input
              id="scan-email-address"
              name="email"
              type="email"
              placeholder={l10n.getString(
                "exposure-landing-hero-email-placeholder"
              )}
              required
            />
            <button
              type="submit"
              className="button primary"
              data-cta-id="exposure-landing-1"
            >
              {l10n.getString("exposure-landing-hero-cta-label")}
            </button>
          </form>
        </div>
        <figure>
          <Image alt="" src={HeroImage} priority />
        </figure>
      </section>

      <section className="why-use-monitor" data-enter-transition>
        <h2>{l10n.getString("why-use-monitor")}</h2>
        <p>{l10n.getString("identifying-breaches")}</p>
        <ul>
          <li>
            <h3>{l10n.getString("protect-account")}</h3>
            <p>{l10n.getString("protect-account-prevent-hackers")}</p>
          </li>
          <li>
            <h3>{l10n.getString("prevent-fraud")}</h3>
            <p>{l10n.getString("prevent-fraud-keep-info")}</p>
          </li>
          <li>
            <h3>{l10n.getString("get-alerts")}</h3>
            <p>{l10n.getString("get-alerts-find-out")}</p>
          </li>
        </ul>
      </section>

      <section className="how-it-works" data-enter-transition>
        <h2>{l10n.getString("how-it-works")}</h2>
        <ol>
          <li>
            <Image alt="" src={LaptopImage} />
            <h3>{l10n.getString("check-for-breaches")}</h3>
            <p>{l10n.getString("check-for-breaches-we-search")}</p>
          </li>
          <li>
            <Image alt="" src={LockImage} />
            <h3>{l10n.getString("protect-accounts")}</h3>
            <p>{l10n.getString("protect-accounts-clear-steps")}</p>
          </li>
          <li>
            <Image alt="" src={MailImage} />
            <h3>{l10n.getString("alerts-for-breaches")}</h3>
            <p>{l10n.getString("alerts-for-breaches-monitor-new")}</p>
          </li>
        </ol>
      </section>

      <section className="safe-with-us" data-enter-transition>
        <div>
          <h2>{l10n.getString("safe-with-us")}</h2>
          <p>{l10n.getString("parent-company")}</p>
          <p>{l10n.getString("our-mission")}</p>
          <p>
            <a href="https://www.mozilla.org/mission/" target="_blank">
              {l10n.getString("learn-more-mission")}
            </a>
          </p>
        </div>
        <figure>
          <Image alt="" src={NaturePhoneImage} />
        </figure>
      </section>

      <section className="top-questions-about-monitor" data-enter-transition>
        <div>
          <h2>{l10n.getString("top-questions-about-monitor")}</h2>
          <a
            href="https://support.mozilla.org/kb/firefox-monitor-faq"
            target="_blank"
          >
            {l10n.getString("see-all-faq")}
          </a>
        </div>
        <div>
          <details>
            <summary>{l10n.getString("what-is-breach")}</summary>
            <p>{l10n.getString("when-info-exposed")}</p>
          </details>
          <details>
            <summary>{l10n.getString("what-do-i-do")}</summary>
            <p>{l10n.getString("visit-monitor-to-learn")}</p>
          </details>
          <details>
            <summary>{l10n.getString("what-gets-exposed")}</summary>
            <p>{l10n.getString("depends-on-hackers")}</p>
          </details>
        </div>
      </section>

      <section className="see-if-data-breach" data-enter-transition>
        <h2>{l10n.getString("see-if-data-breach")}</h2>
        <a
          className="button primary"
          data-cta-id="landing-2"
          href="/user/breaches"
        >
          {l10n.getString("get-started")}
        </a>
        <p
          className="hibp-attribution"
          dangerouslySetInnerHTML={{
            __html: l10n.getString("hibp-footer-attribution"),
          }}
        />
      </section>
    </div>
  );
}
