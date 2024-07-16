/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState, useEffect } from "react";
import styles from "../ConfigPage.module.scss";

interface QaBrokerData {
  onerep_scan_result_id?: number;
  onerep_profile_id: number;
  link: string;
  age: number | null | undefined;
  data_broker: string;
  emails: string;
  phones: string;
  addresses: string;
  relatives: string;
  first_name: string;
  middle_name: string | null | undefined;
  last_name: string;
  status: string;
  manually_resolved: string;
}

const endpointBase = "/api/v1/admin/qa-customs/onerep";

interface Props {
  onerepProfileId: number;
}

const ConfigPage = (props: Props) => {
  const profileId = props.onerepProfileId;
  const [brokers, setBrokers] = useState<QaBrokerData[]>([]);
  const [errors, setErrors] = useState({
    profile_id: false,
    data_broker: false,
    link: false,
  });

  // Initialize a base broker template to reset form fields
  const baseBroker: QaBrokerData = {
    onerep_profile_id: -1,
    link: "",
    age: null,
    data_broker: "",
    emails: "",
    phones: "",
    addresses: "",
    relatives: "",
    first_name: "",
    middle_name: null,
    last_name: "",
    status: "new",
    manually_resolved: "false",
  };

  // Temporary state to hold form input for a new broker
  const [newBroker, setNewBroker] = useState<QaBrokerData>(baseBroker);

  useEffect(() => {
    void fetchBrokers();
  }, []);

  const fetchBrokers = async () => {
    try {
      const response = await fetch(
        `${endpointBase}?onerep_profile_id=${props.onerepProfileId}`,
      );
      const data = await response.json();
      setBrokers(data);
    } catch (error) {
      console.error("Error fetching brokers:", error);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNewBroker({ ...newBroker, [e.target.name]: e.target.value });
  };

  const handleAddBroker = async (event: React.FormEvent) => {
    event.preventDefault();

    let hasError = false;

    if (profileId < 0) {
      setErrors({ ...errors, profile_id: true });
      hasError = true;
    } else {
      setErrors({ ...errors, profile_id: false });
    }

    let linkString = "";
    try {
      if (newBroker.link.length !== 0) {
        const urlObj = new URL(newBroker.link);
        linkString = urlObj.href;
      }
      setErrors({ ...errors, link: false });
    } catch {
      setErrors({ ...errors, link: true });
      hasError = true;
    }

    if (hasError) return;

    newBroker.onerep_profile_id = profileId;

    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newBroker,
          link: linkString,
          manually_resolved:
            newBroker.manually_resolved === "false" ? false : true,
        }),
      });

      if (response.ok) {
        await fetchBrokers(); // Refresh the brokers list
        setNewBroker(baseBroker); // Reset form fields
      } else {
        console.error("Error adding broker:", await response.json());
      }
    } catch (error) {
      console.error("Error adding broker:", error);
    }
  };

  const handleDeleteBroker = async (onerep_scan_result_id: number) => {
    try {
      const response = await fetch(
        `${endpointBase}?onerep_scan_result_id=${onerep_scan_result_id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        await fetchBrokers(); // Refresh the brokers list
      } else {
        console.error("Error deleting broker:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting broker:", error);
    }
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          Adding custom <b>OneRep</b> brokers
        </div>
        <br />
      </header>

      <div className={styles.formAndListWrapper}>
        <form
          className={styles.formWrapper}
          onSubmit={(e) => {
            void handleAddBroker(e);
          }}
        >
          <h2 className={styles.h2}>Input Broker Element</h2>
          <div className={styles.form}>
            <div className={styles.userPicker}>
              <label className={styles.label}>
                Broker Name:
                <input
                  className={`${styles.input} ${errors.data_broker ? styles.error : ""}`}
                  type="text"
                  name="data_broker"
                  placeholder="Test Broker"
                  value={newBroker.data_broker}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Broker Link:
                <input
                  className={`${styles.input} ${errors.link ? styles.error : ""}`}
                  type="text"
                  name="link"
                  placeholder="https://test-broker.com"
                  value={newBroker.link}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Age:
                <input
                  className={styles.input}
                  type="number"
                  name="age"
                  placeholder="21"
                  value={newBroker.age ?? ""}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Emails:
                <input
                  className={styles.input}
                  type="number"
                  name="emails"
                  placeholder="0"
                  value={newBroker.emails}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Phones:
                <input
                  className={styles.input}
                  type="number"
                  name="phones"
                  placeholder="0"
                  value={newBroker.phones}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Addresses:
                <input
                  className={styles.input}
                  type="number"
                  name="addresses"
                  placeholder="0"
                  value={newBroker.addresses}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Relatives:
                <input
                  className={styles.input}
                  type="number"
                  name="relatives"
                  placeholder="0"
                  value={newBroker.relatives}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                First Name:
                <input
                  className={styles.input}
                  type="text"
                  name="first_name"
                  value={newBroker.first_name}
                  placeholder="John"
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Middle Name:
                <input
                  className={styles.input}
                  type="text"
                  name="middle_name"
                  placeholder="null"
                  value={newBroker.middle_name ?? ""}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Last Name:
                <input
                  className={styles.input}
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  value={newBroker.last_name}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Manually Resolved:
                <select
                  name="manually_resolved"
                  value={newBroker.manually_resolved}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </label>

              <label>
                Status:
                <select
                  name="status"
                  value={newBroker.status}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="new">New</option>
                  <option value="optout_in_progress">In Progress</option>
                  <option value="removed">Removed</option>
                </select>
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
                    key={broker.onerep_profile_id}
                    onClick={() =>
                      void handleDeleteBroker(broker.onerep_scan_result_id!)
                    }
                    className={styles.listItem}
                  >
                    {"{"} {broker.onerep_profile_id}, {broker.data_broker},{" "}
                    {broker.link} {"}"}
                  </li>
                ))
              ) : (
                <p>empty...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfigPage;
