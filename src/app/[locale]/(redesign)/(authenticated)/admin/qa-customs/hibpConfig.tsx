/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import React, { useState, useEffect } from "react";
import styles from "./ConfigPage.module.scss";
import { QaBreachData } from "../../../../../../db/tables/qa_customs";

const endpointBase = "/api/v1/admin/qa-customs/hibp";
const endpointToggleBase = "/api/v1/admin/qa-customs";

interface Props {
  emailHashFull: string;
  showApiBreaches: boolean;
  showQaBreaches: boolean;
  showApiParamEnum: string;
  showQaParamEnum: string;
}

const HibpConfigPage = (props: Props) => {
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
    dataClasses.map((_) => false),
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
  const [showQaBreaches, setShowQaBreaches] = useState<boolean>(
    props.showQaBreaches,
  );
  const [showApiBreaches, setShowApiBreaches] = useState<boolean>(
    props.showApiBreaches,
  );

  useEffect(() => {
    void fetchBreaches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBreaches = async () => {
    setBreachesFetchHappened(false);
    try {
      const response = await fetch(
        `${endpointBase}?emailHashPrefix=${props.emailHashFull.slice(0, 6)}`,
      );
      const data = await response.json();
      setBreaches(data);
    } catch (error) {
      console.error("Error fetching breaches:", error);
    }
    setBreachesFetchHappened(true);
  };

  const toggleDataClassOption = (index: number) => {
    breachTypesSelection[index] = !breachTypesSelection[index];
    setBreachTypesSelection(breachTypesSelection);
    const newDataClasses = dataClasses.filter(
      (_, i) => breachTypesSelection[i],
    );
    setNewBreach({ ...newBreach, ["DataClasses"]: newDataClasses });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    switch (e.target.name) {
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
    newBreach.emailHashPrefix = props.emailHashFull.slice(0, 6);

    setBreachTypesSelection(dataClasses.map((_) => false));
    setNewBreach(baseBreach);

    try {
      const req = fetch(endpointBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBreach),
      });
      alert("Request made successfully");
      const response = await req;

      if (response.ok) {
        await fetchBreaches(); // Refresh the breaches list
      } else {
        console.error("Error adding breach:", await response.json());
      }
    } catch (error) {
      console.error("Error adding breach:", error);
    }
  };

  const handleDeleteBreach = async (breachId: number) => {
    try {
      const req = fetch(
        `${endpointBase}?breachId=${breachId}&emailHashFull=${props.emailHashFull}`,
        {
          method: "DELETE",
        },
      );
      alert("Deletion request made successfully!");
      const response = await req;

      if (response.ok) {
        await fetchBreaches(); // Refresh the breaches list
      } else {
        console.error("Error deleting breach:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting breach:", error);
    }
  };

  const toggleQaBreaches = () => {
    void fetch(
      endpointToggleBase +
        `?columnName=${props.showQaParamEnum}&isVisible=${!showQaBreaches}`,
      {
        method: "PUT",
      },
    ).then((res) => {
      if (res.ok) {
        setShowQaBreaches(!showQaBreaches);
        return;
      }
      alert("Something went wrong during the QA breaches toggle...");
    });
    alert("Request made successfully!");
  };

  const toggleApiBreaches = () => {
    void fetch(
      endpointToggleBase +
        `?columnName=${props.showApiParamEnum}&isVisible=${!showApiBreaches}`,
      {
        method: "PUT",
      },
    ).then((res) => {
      if (res.ok) {
        setShowApiBreaches(!showApiBreaches);
        return;
      }
      alert("Something went wrong during the API breaches toggle...");
    });
    alert("Request made successfully!");
  };

  return (
    <main className={`${styles.wrapper} ${styles.configLeft}`}>
      <header className={styles.header}>
        <div>
          Add custom <b>Breaches</b>
        </div>
      </header>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={toggleQaBreaches}>
          Toggle QA breaches, current: {showQaBreaches ? "on" : "off"}
        </button>
        <button className={styles.button} onClick={toggleApiBreaches}>
          Toggle API breaches, current: {showApiBreaches ? "on" : "off"}
        </button>
      </div>

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
                  placeholder="Custom-Breach"
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
                  placeholder="65"
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
                <select name="DataClasses" multiple>
                  {dataClasses.map((dataClass, index) => (
                    <option
                      key={dataClass}
                      onClick={(e) =>
                        toggleDataClassOption(
                          (e.target as HTMLOptionElement).index,
                        )
                      }
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
                  <li key={breach.Id} className={styles.listItem}>
                    <details>
                      <summary>
                        {breach.Title}
                        <br />
                        <small>{breach.Domain}</small>
                      </summary>
                      <pre>{JSON.stringify(breach, null, 2)}</pre>
                    </details>
                    <button onClick={() => void handleDeleteBreach(breach.Id)}>
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
      </div>
    </main>
  );
};

export default HibpConfigPage;
