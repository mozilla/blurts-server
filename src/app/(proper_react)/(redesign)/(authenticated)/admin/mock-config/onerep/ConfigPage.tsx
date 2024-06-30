/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState } from "react";
import {
  MOCK_ONEREP_DATABROKER_ID_START,
  MOCK_ONEREP_ID_START,
  MOCK_ONEREP_SCAN_ID,
  MOCK_ONEREP_TIME,
  Broker,
  MOCK_ONEREP_FIRSTNAME,
  MOCK_ONEREP_LASTNAME,
  MOCK_ONEREP_ADDRESSES,
  MOCK_ONEREP_EMAILS,
  MOCK_ONEREP_RELATIVES,
  MOCK_ONEREP_PHONES,
} from "../../../../../../api/mock/onerep/config/config";
import { useSession } from "next-auth/react";
import styles from "./ConfigPage.module.scss";

const ConfigPage = () => {
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const session = useSession();

  const [errors, setErrors] = useState({
    profile_id: false,
    data_broker: false,
    link: false,
  });

  // Initialize a base broker template to reset form fields
  const baseBroker = {
    id: -1,
    profile_id: -1,
    scan_id: -1,
    status: "new",
    first_name: MOCK_ONEREP_FIRSTNAME(),
    middle_name: null,
    last_name: MOCK_ONEREP_LASTNAME(),
    age: null,
    addresses: MOCK_ONEREP_ADDRESSES(),
    phones: MOCK_ONEREP_PHONES(),
    emails: MOCK_ONEREP_EMAILS(),
    relatives: MOCK_ONEREP_RELATIVES(),
    link: "",
    data_broker: "",
    data_broker_id: -1,
    optout_attempts: 0,
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
  };

  // Temporary state to hold form input for a new broker
  const [newBroker, setNewBroker] = useState<Broker>(baseBroker);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBroker({ ...newBroker, [e.target.name]: e.target.value });
  };

  const handleAddBroker = (event: React.FormEvent) => {
    event.preventDefault();

    let hasError = false;

    if (newBroker.profile_id < 0) {
      setErrors({ ...errors, profile_id: true });
      hasError = true;
    } else {
      setErrors({ ...errors, profile_id: false });
    }

    if (newBroker.data_broker.length === 0) {
      setErrors({ ...errors, data_broker: true });
      hasError = true;
    } else {
      setErrors({ ...errors, data_broker: false });
    }

    let linkString = "";
    try {
      const urlObj = new URL(newBroker.link);
      linkString = urlObj.href;
      setErrors({ ...errors, link: false });
    } catch {
      setErrors({ ...errors, link: true });
      hasError = true;
    }

    if (hasError) return;

    const profileId = Number(newBroker.profile_id);
    const scandId = MOCK_ONEREP_SCAN_ID(profileId);
    const brokerIdStart = MOCK_ONEREP_DATABROKER_ID_START(profileId);
    const idStart = MOCK_ONEREP_ID_START(profileId);

    setBrokers([
      ...brokers,
      {
        ...newBroker,
        link: linkString,
        id: idStart - brokers.length,
        scan_id: scandId,
        data_broker_id: brokerIdStart - brokers.length,
        profile_id: profileId,
      },
    ]);

    setNewBroker(baseBroker); // Reset form fields
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

  const handleDeleteBroker = (id: number) => {
    setBrokers(brokers.filter((broker) => broker.id !== id));
  };

  const makeConfigRequest = (erase: boolean) => {
    void fetch("/api/mock/onerep/config", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.data?.user.email,
        brokers: brokers,
        erase: erase,
      }),
    }).then(async (resp) =>
      console.log("Response from endpoint config:", await resp.json()),
    );
    alert("Brokers list update request submitted successfully!");
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          Changing the default response for <b>OneRep</b> mock endpoint
        </div>
        <br />
      </header>

      <div className={styles.formAndListWrapper}>
        <form className={styles.formWrapper} onSubmit={handleAddBroker}>
          <h2 className={styles.h2}>Input Broker Element</h2>
          <div className={styles.form}>
            <div className={styles.userPicker}>
              <label className={styles.label}>
                OneRep Profile ID:
                <input
                  className={`${styles.input} ${errors.profile_id ? styles.error : ""}`}
                  type="number"
                  name="profile_id"
                  placeholder="Be careful with this field!"
                  value={
                    newBroker.profile_id === -1 ? "" : newBroker.profile_id
                  }
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Broker Name:
                <input
                  className={`${styles.input} ${errors.data_broker ? styles.error : ""}`}
                  type="text"
                  name="data_broker"
                  value={newBroker.data_broker}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Broker Link:
                <input
                  className={`${styles.input} ${errors.link ? styles.error : ""}`}
                  type="text"
                  name="link"
                  value={newBroker.link}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Add Broker to List
          </button>
        </form>
        <div className={styles.listButtonsWrapper}>
          <div className={styles.listWrapper}>
            <h2 className={styles.h2}>Brokers List</h2>
            <ul className={styles.listContainer}>
              {brokers.length !== 0 ? (
                brokers.map((broker) => (
                  <li
                    key={broker.id}
                    onClick={() => handleDeleteBroker(broker.id)}
                    className={styles.listItem}
                  >
                    {"{"} {broker.profile_id}, {broker.data_broker},{" "}
                    {broker.link} {"}"}
                  </li>
                ))
              ) : (
                <p>empty...</p>
              )}
            </ul>
          </div>

          <div className={styles.buttonsWrapper}>
            <button
              className={`${styles.button} ${styles.buttonUnderList}`}
              onClick={handleSubmit}
            >
              Submit All Brokers
            </button>

            <button
              className={`${styles.button} ${styles.buttonUnderList}`}
              onClick={() => void makeConfigRequest(true)}
            >
              Restore Defaults
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfigPage;
