/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./HowItWorksView.module.scss";
import { Button } from "../../../../components/client/Button";

export const HowItWorksView = () => {
  return (
    <main>
      <header>
        <h1>How it works</h1>
        <p>
          We help fix exposures of your information from two different sources:
          data brokers and data breaches.{" "}
        </p>
      </header>
      <div className={styles.removeFromDataBrokersWrapper}>
        <div className={styles.header}>
          <h2>
            We remove your info from{" "}
            <span className={styles.emphasis}>data brokers</span>
          </h2>
          <p>
            These sites scrape your data from across the web to create profiles
            that include your name(s), current and previous addresses, family
            member names, criminal history, and much more. And they sell this
            information to anyone searching for you.
          </p>
          <hr className={styles.horizontalRule} />
          <p>
            Getting your information off these sites helps protect your privacy
            and keep stalkers or harassers from finding info like your phone
            number or home address.{" "}
          </p>
          <Button variant="primary">Get data removal</Button>
        </div>

        <div className={styles.step}></div>
      </div>
    </main>
  );
};
