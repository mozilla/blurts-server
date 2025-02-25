/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState, useEffect } from "react";
import styles from "./ConfigPage.module.scss";
import { OnerepScanResultDataBrokerRow } from "knex/types/tables";
import { StateAbbr } from "../../../../../../utils/states";

interface Props {
  onerepProfileId: number;
  showApiBrokers: boolean;
  showQaBrokers: boolean;
  showApiParamEnum: string;
  showQaParamEnum: string;
}

const endpointBase = "/api/v1/admin/qa-customs/onerep";
const endpointToggleBase = "/api/v1/admin/qa-customs";

const OnerepConfigPage = ({
  onerepProfileId,
  showApiBrokers,
  showQaBrokers,
  showApiParamEnum,
  showQaParamEnum,
}: Props) => {
  const [brokers, setBrokers] = useState<OnerepScanResultDataBrokerRow[]>([]);
  const [newBroker, setNewBroker] = useState<OnerepScanResultDataBrokerRow>({
    onerep_scan_id: onerepProfileId,
    link: "",
    age: 30,
    data_broker: "",
    emails: [],
    phones: [],
    addresses: [],
    relatives: [],
    first_name: "",
    middle_name: "",
    last_name: "",
    status: "new",
    manually_resolved: false,
    scan_result_status: "new",
    broker_status: "removal_under_maintenance",
    url: "",
    id: 0,
    onerep_scan_result_id: Math.floor(Math.random() * 2147483647),
    data_broker_id: 0,
    created_at: new Date(),
    updated_at: new Date(),
  });
  const [errors, setErrors] = useState({
    profile_id: false,
    data_broker: false,
    link: false,
  });

  const [brokersFetchHappened, setBrokersFetchHappened] = useState(false);
  const [showQaBrokersState, setShowQaBrokers] = useState(showQaBrokers);
  const [showApiBrokersState, setShowApiBrokers] = useState(showApiBrokers);

  useEffect(() => {
    void fetchBrokers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBrokers = async () => {
    setBrokersFetchHappened(false);
    try {
      const response = await fetch(
        // Using the onerep_scan_id  as a placeholder for the profile ID
        `${endpointBase}?onerep_scan_id=${onerepProfileId}`,
      );
      const data = await response.json();
      setBrokers(data);
    } catch (error) {
      console.error("Error fetching brokers:", error);
    }
    setBrokersFetchHappened(true);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "last_optout_at" ? (value ? new Date(value) : null) : value;

    setNewBroker({
      ...newBroker,
      [name]: name === "manually_resolved" ? value === "true" : updatedValue,
    });
  };

  const handleAddBroker = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (onerepProfileId < 0) {
      setErrors({ ...errors, profile_id: true });
      hasError = true;
    } else {
      setErrors({ ...errors, profile_id: false });
    }

    if (hasError) return;

    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newBroker,
          manually_resolved: newBroker.manually_resolved,
        }),
      });
      if (response.ok) {
        alert("Request made successfully");
        await fetchBrokers();
        setNewBroker({
          ...newBroker,
          link: "",
          age: 30,
          data_broker: "",
          emails: [],
          phones: [],
          relatives: [],
        });
      } else {
        alert(`Error adding broker: ${await response.json()}`);
      }
    } catch (error) {
      alert("Error adding broker: " + error);
    }
  };

  const handleDeleteBroker = async (onerep_scan_result_id: number) => {
    try {
      const response = await fetch(
        `${endpointBase}?onerep_scan_result_id=${onerep_scan_result_id}`,
        { method: "DELETE" },
      );
      if (response.ok) {
        await fetchBrokers();
      } else {
        console.error("Error deleting broker:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting broker:", error);
    }
  };

  const toggleQaBrokersVisibility = () => {
    fetch(
      `${endpointToggleBase}?columnName=${showQaParamEnum}&isVisible=${!showQaBrokersState}`,
      { method: "PUT" },
    ).then((res) => {
      if (res.ok) {
        setShowQaBrokers(!showQaBrokersState);
      } else {
        alert("Something went wrong during the QA brokers toggle...");
      }
    });
  };

  const toggleApiBrokersVisibility = () => {
    fetch(
      `${endpointToggleBase}?columnName=${showApiParamEnum}&isVisible=${!showApiBrokersState}`,
      { method: "PUT" },
    ).then((res) => {
      if (res.ok) {
        setShowApiBrokers(!showApiBrokersState);
      } else {
        alert("Something went wrong during the API brokers toggle...");
      }
    });
  };

  const [numAddresses, setNumAddresses] = useState(1);

  const handleNumAddressesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = Math.max(1, parseInt(e.target.value, 10) || 1);
    setNumAddresses(count);

    setNewBroker({
      ...newBroker,
      addresses: Array.from({ length: count }, () => ({
        zip: "93386",
        city: "Berkeley",
        state: "CA" as StateAbbr,
        street: "Von Meadows",
      })),
    });
  };
  return (
    <main className={`${styles.wrapper} ${styles.configRight}`}>
      <header className={styles.header}>
        <div>
          Add custom <b>OneRep</b> brokers
        </div>
      </header>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={toggleQaBrokersVisibility}>
          Toggle QA brokers, current: {showQaBrokersState ? "on" : "off"}
        </button>
        <button className={styles.button} onClick={toggleApiBrokersVisibility}>
          Toggle API brokers, current: {showApiBrokersState ? "on" : "off"}
        </button>
      </div>

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
                Number of Addresses:
                <input
                  className={styles.input}
                  type="number"
                  min="1"
                  value={numAddresses}
                  onChange={handleNumAddressesChange}
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

              <label>
                Manually resolved:
                <select
                  name="manually_resolved"
                  value={newBroker.manually_resolved ? "true" : "false"}
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
                  <option value="waiting_for_verification">
                    Requested Removal
                  </option>
                </select>
              </label>

              <label>
                Broker Status:
                <select
                  name="broker_status"
                  value={newBroker.broker_status}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="active">Active</option>
                  <option value="on_hold">On hold</option>
                  <option value="ceased_operation">Ceased operation</option>
                  <option value="scan_under_maintenance">
                    Scan under maintenance
                  </option>
                  <option value="removal_under_maintenance">
                    Removal under maintenance
                  </option>
                </select>
              </label>

              <label className={styles.label}>
                Optout Attempts:
                <input
                  className={styles.input}
                  type="number"
                  name="optout_attempts"
                  placeholder="0"
                  value={newBroker.optout_attempts ?? ""}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Last opt-out attempt:
                <input
                  className={styles.input}
                  type="date"
                  name="last_optout_at"
                  value={
                    newBroker.last_optout_at
                      ? newBroker.last_optout_at.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Add Broker to List
          </button>
        </form>

        <div>
          <h2 className={styles.h2}>Brokers List</h2>
          <ul className={styles.listContainer}>
            {!brokersFetchHappened ? (
              <p>fetching...</p>
            ) : brokers.length ? (
              brokers.map((broker) => (
                <li
                  key={broker.onerep_scan_result_id}
                  className={styles.listItem}
                >
                  <details>
                    <summary>
                      {broker.data_broker}
                      <br />
                      <small>{broker.link}</small>
                    </summary>
                    <pre>{JSON.stringify(broker, null, 2)}</pre>
                  </details>
                  <button
                    onClick={() =>
                      handleDeleteBroker(broker.onerep_scan_result_id!)
                    }
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p>empty...</p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default OnerepConfigPage;
