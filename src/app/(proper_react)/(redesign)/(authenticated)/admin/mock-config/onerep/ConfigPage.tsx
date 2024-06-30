/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState } from "react";
import {
  MOCK_ONEREP_DATABROKER_ID_START,
  MOCK_ONEREP_ID_START,
  MOCK_ONEREP_SCAN_ID,
  MOCK_ONEREP_STATUS,
  MOCK_ONEREP_TIME,
} from "../../../../../../api/mock/onerep/config/config";

interface Broker {
  id: number;
  profile_id: number;
  scan_id: number;
  status: string;
  first_name: string;
  middle_name?: string | null;
  last_name: string;
  age?: number | null;
  addresses: object[];
  phones: object[];
  emails: object[];
  relatives: object[];
  link: string;
  data_broker: string;
  data_broker_id: number;
  optout_attempts: number;
  created_at: string;
  updated_at: string;
}

const ConfigPage = () => {
  const [brokers, setBrokers] = useState<Broker[]>([]);

  // Initialize a base broker template to reset form fields
  const baseBroker = {
    id: -1,
    profile_id: -1,
    scan_id: -1,
    status: MOCK_ONEREP_STATUS(),
    first_name: "",
    middle_name: null,
    last_name: "",
    age: null,
    addresses: [],
    phones: [],
    emails: [],
    relatives: [],
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
      const response = brokers;
      console.log("Response:", response);
      alert("Brokers submitted successfully!");
    } catch (error) {
      console.error("Error submitting brokers:", error);
      alert("Failed to submit brokers.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleAddBroker}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          Profile ID:
          <input
            type="number"
            name="profile_id"
            placeholder="Be careful with this field!"
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={newBroker.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={newBroker.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Broker Name:
          <input
            type="text"
            name="data_broker"
            value={newBroker.data_broker}
            onChange={handleChange}
          />
        </label>
        <label>
          Broker Link:
          <input
            type="text"
            name="link"
            value={newBroker.link}
            onChange={handleChange}
          />
        </label>
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
      <button onClick={handleSubmit}>Submit All Brokers</button>
    </div>
  );
};

export default ConfigPage;
