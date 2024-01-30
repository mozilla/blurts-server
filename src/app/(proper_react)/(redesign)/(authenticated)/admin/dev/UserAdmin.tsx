/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./UserAdmin.module.scss";
import { Button } from "../../../../../components/client/Button";
import {
  type UserStateAction,
  type PutUserStateRequestBody,
  GetUserStateResponseBody,
} from "../../../../../api/v1/admin/users/[primarySha1]/route";

export const UserAdmin = () => {
  const session = useSession();
  const [emailInput, setEmailInput] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const [subscriberData, setSubscriberData] =
    useState<GetUserStateResponseBody | null>(null);

  useEffect(() => {
    if (emailInput.length <= 5) {
      return;
    }

    const abortController = new AbortController();
    void getSha1(emailInput).then(async (emailHash) => {
      const response = await fetch(`/api/v1/admin/users/${emailHash}`, {
        signal: abortController.signal,
      });
      if (!response.ok) {
        setSubscriberData(null);
        return;
      }
      const data = await response.json();
      setSubscriberData(data);
    });

    return () => {
      abortController.abort();
    };
  }, [emailInput]);

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    setStatus(null);
    setSubscriberData(null);
    setEmailInput(event.target.value);
  };

  const performAction = async (action: UserStateAction) => {
    setStatus(null);

    const emailHash = await getSha1(emailInput);

    const requestBody: PutUserStateRequestBody = {
      actions: [action],
    };
    const response = await fetch(`/api/v1/admin/users/${emailHash}`, {
      method: "PUT",
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      setStatus(
        `[${action}] failed: [${response.status}] [${response.statusText}].`,
      );
      return;
    }

    setStatus(`[${action}] succeeded for email address [${emailInput}].`);
    const refreshResponse = await fetch(`/api/v1/admin/users/${emailHash}`);
    if (refreshResponse.ok) {
      setSubscriberData(await refreshResponse.json());
    }
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        Logged in as <b>{session.data?.user.email}</b>.
      </header>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.userPicker}>
          <label>
            Find user by email address:
            <input
              value={emailInput}
              onChange={onChangeEmail}
              type="email"
              name="email"
              id="email"
            />
          </label>
          {subscriberData && (
            <pre>{JSON.stringify(subscriberData, null, 2)}</pre>
          )}
        </div>
        {subscriberData && (
          <div className={styles.actions}>
            <Button
              variant="secondary"
              onPress={() => void performAction("subscribe")}
            >
              Give Plus
            </Button>
            <Button
              variant="secondary"
              onPress={() => void performAction("unsubscribe")}
            >
              Remove Plus
            </Button>
            <Button
              variant="secondary"
              destructive={true}
              onPress={() => void performAction("delete_onerep_profile")}
            >
              Delete OneRep profile
            </Button>
            <Button
              variant="secondary"
              destructive={true}
              onPress={() => void performAction("delete_onerep_scans")}
            >
              Delete OneRep scans
            </Button>
            <Button
              variant="secondary"
              destructive={true}
              onPress={() => void performAction("delete_onerep_scan_results")}
            >
              Delete OneRep scan results
            </Button>
            <Button
              variant="secondary"
              destructive={true}
              onPress={() => void performAction("delete_subscriber")}
            >
              Delete subscriber
            </Button>
          </div>
        )}
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </main>
  );
};

async function getSha1(source: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(source);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
