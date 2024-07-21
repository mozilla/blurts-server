/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState, useEffect } from "react";
import styles from "../ConfigPage.module.scss";
import { QaBreachData } from "../../../../../../../db/tables/qa_customs";

const endpointBase = "/api/v1/admin/qa-customs/hibp";

interface Props {
  emailHashPrefix: string;
}

const ConfigPage = (props: Props) => {
  const dataClasses = [
    "email-addresses",
    "ip-addresses",
    "passwords",
    "phone-numbers",
    "partial-credit-card-data",
    "security-questions-and-answers",
    "social-security-numbers",
  ];

  const [breaches, setBreaches] = useState<QaBreachData[]>([]);
  const [breachesFetchHappened, setBreachesFetchHappened] =
    useState<boolean>(false);
  const [breachTypesSelection, setBreachTypesSelection] = useState<boolean[]>(
    [],
  );

  const currentTime = new Date().toISOString();

  const baseBreach: QaBreachData = {
    emailHashPrefix: "",
    Id: -1,
    Name: "",
    Title: "",
    Domain: "",
    AddedDate: currentTime,
    BreachDate: currentTime,
    ModifiedDate: currentTime,
    PwnCount: 0,
    Description: "",
    LogoPath: "",
    DataClasses: ["email-addresses"],
    IsVerified: true,
    IsFabricated: false,
    IsSensitive: false,
    IsRetired: false,
    IsSpamList: false,
    IsMalware: false,
    FaviconUrl: null,
  };

  // Temporary state to hold form input for a new breach
  const [newBreach, setNewBreach] = useState<QaBreachData>(baseBreach);

  useEffect(() => {
    setBreachTypesSelection(dataClasses.map((_) => false));
    void fetchBreaches();
  }, []);

  const fetchBreaches = async () => {
    setBreachesFetchHappened(false);
    try {
      const response = await fetch(
        `${endpointBase}?emailHashPrefix=${props.emailHashPrefix}`,
      );
      const data = await response.json();
      setBreaches(data);
    } catch (error) {
      console.error("Error fetching breaches:", error);
    }
    setBreachesFetchHappened(true);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    switch (e.target.name) {
      case "DataClasses": {
        const event = e.target as HTMLSelectElement;
        breachTypesSelection[event.selectedIndex] = true;
        const newDataClasses = dataClasses.filter(
          (_, i) => breachTypesSelection[i],
        );
        setNewBreach({ ...newBreach, [event.name]: newDataClasses });
        break;
      }
      case "Title": {
        setNewBreach({
          ...newBreach,
          Name: e.target.value,
          Title: e.target.value,
        });
        break;
      }
      default: {
        setNewBreach({ ...newBreach, [e.target.name]: e.target.value });
        break;
      }
    }
  };

  const handleAddBreach = async (event: React.FormEvent) => {
    event.preventDefault();
    newBreach.emailHashPrefix = props.emailHashPrefix;

    if (newBreach.emailHashPrefix.length < 6) {
      console.log("Invalid email hash!");
    }
    setBreachTypesSelection(dataClasses.map((_) => false));

    try {
      const response = await fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBreach),
      });

      if (response.ok) {
        await fetchBreaches(); // Refresh the breaches list
        setNewBreach(baseBreach); // Reset form fields
      } else {
        console.error("Error adding breach:", await response.json());
      }
    } catch (error) {
      console.error("Error adding breach:", error);
    }
  };

  const handleDeleteBreach = async (id: number, emailHashPrefix: string) => {
    try {
      const response = await fetch(
        `${endpointBase}?id=${id}&emailHashPrefix=${emailHashPrefix}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        await fetchBreaches(); // Refresh the breaches list
      } else {
        console.error("Error deleting breach:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting breach:", error);
    }
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          Adding custom <b>Breaches</b>
        </div>
        <br />
      </header>

      <div className={styles.formAndListWrapper}>
        <form
          className={styles.formWrapper}
          onSubmit={(e) => void handleAddBreach(e)}
        >
          <h2 className={styles.h2}>Input Breach Element</h2>
          <div className={styles.form}>
            <div className={styles.userPicker}>
              <label className={styles.label}>
                Title:
                <input
                  className={`${styles.input}`}
                  type="text"
                  name="Title"
                  placeholder="Custom Breach"
                  value={newBreach.Title}
                  onChange={(e) => void handleChange(e)}
                />
              </label>

              <label className={styles.label}>
                Domain:
                <input
                  className={`${styles.input}`}
                  type="text"
                  name="Domain"
                  placeholder="custom-breach.com"
                  value={newBreach.Domain}
                  onChange={(e) => void handleChange(e)}
                />
              </label>

              <label className={styles.label}>
                Modified Date:
                <input
                  className={styles.input}
                  type="date"
                  name="ModifiedDate"
                  value={newBreach.ModifiedDate.toString()}
                  onChange={(e) => void handleChange(e)}
                />
              </label>

              <label className={styles.label}>
                Pwn Count:
                <input
                  className={styles.input}
                  type="number"
                  name="PwnCount"
                  placeholder="7777777"
                  value={newBreach.PwnCount}
                  onChange={(e) => void handleChange(e)}
                />
              </label>

              <label className={styles.label}>
                Description:
                <textarea
                  className={styles.input}
                  name="Description"
                  placeholder="This is a Custom Breach! Nothing to worry about :)"
                  value={newBreach.Description}
                  onChange={(e) => void handleChange(e)}
                />
              </label>

              <label className={styles.label}>
                Logo Path:
                <input
                  className={styles.input}
                  type="text"
                  name="LogoPath"
                  placeholder="https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"
                  value={newBreach.LogoPath}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.label}>
                Data Classes:
                <select
                  name="DataClasses"
                  onChange={(e) => void handleChange(e)}
                  multiple
                >
                  {dataClasses.map((dataClass, index) => (
                    <option
                      key={dataClass}
                      value={dataClass}
                      className={
                        breachTypesSelection[index]
                          ? styles.selected
                          : styles.unselected
                      }
                    >
                      {dataClass.replace(/-/g, " ")}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.label}>
                Is Verified:
                <select
                  name="IsVerified"
                  value={newBreach.IsVerified.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Is Fabricated:
                <select
                  name="IsFabricated"
                  value={newBreach.IsFabricated.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Is Sensitive:
                <select
                  name="IsSensitive"
                  value={newBreach.IsSensitive.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Is Retired:
                <select
                  name="IsRetired"
                  value={newBreach.IsRetired.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Is Spam List:
                <select
                  name="IsSpamList"
                  value={newBreach.IsSpamList.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Is Malware:
                <select
                  name="IsMalware"
                  value={newBreach.IsMalware.toString()}
                  onChange={(e) => void handleChange(e)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>

              <label className={styles.label}>
                Favicon URL:
                <input
                  className={styles.input}
                  type="text"
                  name="FaviconUrl"
                  placeholder="https://example.com/favicon.ico"
                  value={newBreach.FaviconUrl ?? ""}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Add Breach to List
          </button>
        </form>
        <div className={styles.listButtonsWrapper}>
          <div className={styles.listWrapper}>
            <h2 className={styles.h2}>Breaches List</h2>
            <ul className={styles.listContainer}>
              {!breachesFetchHappened ? (
                <p>fetching...</p>
              ) : breaches.length !== 0 ? (
                breaches.map((breach) => (
                  <li
                    key={breach.Id}
                    onClick={() => {
                      void handleDeleteBreach(
                        breach.Id,
                        breach.emailHashPrefix,
                      );
                    }}
                    className={styles.listItem}
                  >
                    {"{"} {breach.emailHashPrefix}, {breach.Title},{" "}
                    {breach.Domain} {"}"}
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
