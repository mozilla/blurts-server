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
} from "../../../../../../api/mock/onerep/config/config";
import { useSession } from "next-auth/react";
import styles from "./ConfigPage.module.scss";

const ConfigPage = () => {
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const session = useSession();

  // Initialize a base broker template to reset form fields
  const baseBroker = {
    id: -1,
    profile_id: -1,
    scan_id: -1,
    status: "new",
    first_name: "Johnny",
    middle_name: null,
    last_name: "Doe",
    age: null,
    addresses: ["address0"],
    phones: ["phone0"],
    emails: ["email0"],
    relatives: ["relative0"],
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

    const profileId = Number(newBroker.profile_id);
    const scandId = MOCK_ONEREP_SCAN_ID(profileId);
    const brokerIdStart = MOCK_ONEREP_DATABROKER_ID_START(profileId);
    const idStart = MOCK_ONEREP_ID_START(profileId);

    setBrokers([
      ...brokers,
      {
        ...newBroker,
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
      alert("Brokers list update request submitted successfully!");
    } catch (error) {
      console.error("Error submitting brokers:", error);
      alert("Failed to submit brokers.");
    }
  };

  const makeConfigRequest = async (erase: boolean) => {
    return fetch("/api/mock/onerep/config", {
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
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        Changing the default response for <b>OneRep</b> mock endpoint.
      </header>
      <form onSubmit={handleAddBroker} className={styles.form}>
        <div className={styles.userPicker}>
          <label>
            Profile ID:
            <input
              type="number"
              name="profile_id"
              placeholder="Be careful with this field!"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={newBroker.first_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={newBroker.last_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Broker Name:
            <input
              type="text"
              name="data_broker"
              value={newBroker.data_broker}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Broker Link:
            <input
              type="text"
              name="link"
              value={newBroker.link}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Broker to List</button>
      </form>
      <div>
        <h2>Brokers List</h2>
        <ul>
          {brokers.map((broker) => (
            <li key={broker.id}>
              {broker.first_name} {broker.last_name}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.status} onClick={handleSubmit}>
        Submit All Brokers
      </button>
      <button onClick={() => void makeConfigRequest(true)}>
        ERASE All Brokers - Restore Default
      </button>
    </main>
  );
};

export default ConfigPage;
