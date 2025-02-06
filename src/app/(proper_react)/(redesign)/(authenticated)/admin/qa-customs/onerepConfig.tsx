/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState, useEffect } from "react";
import styles from "./ConfigPage.module.scss";
import { OnerepScanResultDataBrokerRow } from "knex/types/tables";

const endpointBase = "/api/v1/admin/qa-customs/onerep";
const endpointToggleBase = "/api/v1/admin/qa-customs";

interface Props {
  onerepProfileId: number;
  showApiBrokers: boolean;
  showQaBrokers: boolean;
  showApiParamEnum: string;
  showQaParamEnum: string;
}

const OnerepConfigPage = (props: Props) => {
  const profileId = props.onerepProfileId;
  const [brokersFetchHappened, setBrokersFetchHappened] =
    useState<boolean>(false);
  const [brokers, setBrokers] = useState<OnerepScanResultDataBrokerRow[]>([]);
  const [errors, setErrors] = useState({
    profile_id: false,
    data_broker: false,
    link: false,
  });

  // Initialize a base broker template to reset form fields

  const baseBroker: OnerepScanResultDataBrokerRow = {
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
    broker_status: "active",
    url: "",
    id: 0,
    onerep_scan_result_id: 0,
    onerep_scan_id: 0,
    data_broker_id: 0,
    created_at: new Date(),
    updated_at: new Date(),
  };

  // Temporary state to hold form input for a new broker
  const [newBroker, setNewBroker] =
    useState<OnerepScanResultDataBrokerRow>(baseBroker);
  const [showQaBrokers, setShowQaBrokers] = useState<boolean>(
    props.showQaBrokers,
  );
  const [showApiBrokers, setShowApiBrokers] = useState<boolean>(
    props.showApiBrokers,
  );

  useEffect(() => {
    void fetchBrokers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBrokers = async () => {
    setBrokersFetchHappened(false);
    try {
      const response = await fetch(
        `${endpointBase}?onerep_profile_id=${props.onerepProfileId}`,
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

    newBroker.onerep_scan_id = profileId;
    try {
      const req = fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newBroker,
          link: linkString,
          manually_resolved: !newBroker.manually_resolved ? false : true,
        }),
      });
      alert("Request made successfully");

      const response = await req;

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
      const req = fetch(
        `${endpointBase}?onerep_scan_result_id=${onerep_scan_result_id}`,
        {
          method: "DELETE",
        },
      );
      alert("Deletion request made successfully!");
      const response = await req;

      if (response.ok) {
        await fetchBrokers(); // Refresh the brokers list
      } else {
        console.error("Error deleting broker:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting broker:", error);
    }
  };

  const toggleQaBrokers = () => {
    void fetch(
      endpointToggleBase +
        `?columnName=${props.showQaParamEnum}&isVisible=${!showQaBrokers}`,
      {
        method: "PUT",
      },
    ).then((res) => {
      if (res.ok) {
        setShowQaBrokers(!showQaBrokers);
        return;
      }
      alert("Something went wrong during the QA brokers toggle...");
    });
    alert("Request made successfully!");
  };

  const toggleApiBrokers = () => {
    void fetch(
      endpointToggleBase +
        `?columnName=${props.showApiParamEnum}&isVisible=${!showApiBrokers}`,
      {
        method: "PUT",
      },
    ).then((res) => {
      if (res.ok) {
        setShowApiBrokers(!showApiBrokers);
        return;
      }
      alert("Something went wrong during the API brokers toggle...");
    });
    alert("Request made successfully!");
  };

  return (
    <main className={`${styles.wrapper} ${styles.configRight}`}>
      <header className={styles.header}>
        <div>
          Add custom <b>OneRep</b> brokers
        </div>
      </header>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={toggleQaBrokers}>
          Toggle QA brokers, current: {showQaBrokers ? "on" : "off"}
        </button>
        <button className={styles.button} onClick={toggleApiBrokers}>
          Toggle API brokers, current: {showApiBrokers ? "on" : "off"}
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
                Addresses:
                <input
                  className={styles.input}
                  type="number"
                  name="addresses"
                  placeholder="0"
                  value={[]}
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
                  value={0}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value={0}>False</option>
                  <option value={1}>True</option>
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
            ) : brokers.length !== 0 ? (
              brokers.map((broker) => (
                <li key={broker.onerep_scan_id} className={styles.listItem}>
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
                      void handleDeleteBroker(broker.onerep_scan_result_id)
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
