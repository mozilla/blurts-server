/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import BreachesLookup from "./breachesLookup.tsx";
import styles from "../ConfigPage.module.scss";
import { Breach } from "../../../../../../functions/universal/breach.ts";
import { HibpLikeDbBreach } from "../../../../../../../utils/hibp.js";

interface Props {
  allBreaches: (Breach | HibpLikeDbBreach)[];
}

const ConfigPage = (props: Props) => {
  const [breaches, setBreaches] = useState<(Breach | HibpLikeDbBreach)[]>([]);
  const [breachSearch, setBreachSearch] = useState<string>();
  const session = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreachSearch(e.target.value);
  };

  const handleAddBreach = (breach: Breach | HibpLikeDbBreach) => {
    setBreaches([...breaches, breach]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      void makeConfigRequest(false);
    } catch (error) {
      console.error("Error submitting brokers:", error);
      alert("Failed to submit brokers.");
    }
  };

  const handleDeleteBreach = (breach: Breach | HibpLikeDbBreach) => {
    setBreaches(breaches.filter((elem) => elem !== breach));
  };

  const makeConfigRequest = (erase: boolean) => {
    const breachesNames = breaches.map((elem) => elem.Name);
    void fetch("/api/mock/hibp/config", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.data?.user.email,
        breachesNames: breachesNames,
        erase: erase,
      }),
    }).then(async (resp) =>
      console.log("Response from endpoint config:", await resp.json()),
    );
    alert("Brokers list update request submitted successfully!");
  };

  return (
    <main className={`${styles.wrapper} ${styles.wrapperHibp}`}>
      <header className={styles.header}>
        <div>
          Changing the default response for <b>HIBP</b> mock endpoint
        </div>
        <br />
      </header>

      <div
        className={`${styles.formAndListWrapper} ${styles.hibpFormAndListWrapper}`}
      >
        <div className={styles.allBreachesWrapper}>
          <h2 className={styles.h2}>Select Breach Element</h2>
          <div className={styles.form}>
            <div className={styles.userPicker}>
              <label className={styles.label}>
                Searched breaches:
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter the breach name"
                  value={breachSearch}
                  onChange={handleChange}
                  required
                />
              </label>
              <div
                className={`${styles.listContainer} ${styles.searchBox} ${styles.selectedBox}`}
              >
                <BreachesLookup
                  allBreaches={props.allBreaches}
                  filterWord={breachSearch}
                  additionalStyles={styles.allBreachesItem}
                  onClickFunc={handleAddBreach}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.listWrapper} ${styles.hibpSelectedBoxWrapper}`}
        >
          <h2 className={styles.h2}>Added breaches List</h2>
          <p>Added breaches:</p>
          <div className={`${styles.listContainer} ${styles.searchBox}`}>
            <BreachesLookup
              allBreaches={breaches}
              onClickFunc={handleDeleteBreach}
              additionalStyles={styles.listItem}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.buttonsWrapper} ${styles.buttonsStandalone}`}>
        <button
          className={`${styles.button} ${styles.buttonUnderList}`}
          onClick={handleSubmit}
        >
          Submit All Breaches
        </button>
        <button
          className={`${styles.button} ${styles.buttonUnderList}`}
          onClick={() => void makeConfigRequest(true)}
        >
          Restore Defaults
        </button>
      </div>
    </main>
  );
};

export default ConfigPage;
