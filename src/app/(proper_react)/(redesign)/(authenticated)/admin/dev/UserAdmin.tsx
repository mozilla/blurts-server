/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./UserAdmin.module.scss";
import { InputField } from "../../../../../components/client/InputField";
import { lookupFxaUid } from "./actions";

export const DataTable = ({
  header,
  data,
  open,
}: {
  header: string;
  data: object;
  open?: boolean;
}) => {
  const dataKeys = Object.keys(data);
  return (
    <details open={open}>
      <summary>{header}</summary>
      <table>
        <tbody>
          {dataKeys.map((key) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{JSON.stringify(data[key as keyof typeof data], null, 2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
};

export const UserAdmin = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  useEffect(() => {
    if (emailInput.length <= 5) {
      return;
    }

    const abortController = new AbortController();
    void getSha1(emailInput).then(async (emailHash) => {
      setIsLoading(true);
      const fxaUid = await lookupFxaUid(emailHash);
      const response = await fetch(`/api/v1/admin/users/${fxaUid}`, {
        signal: abortController.signal,
      });
      if (!response.ok) {
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, [emailInput]);

  const onChangeEmail = (email: string) => {
    setStatus(null);
    setEmailInput(email);
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        Logged in as <b>{session.data?.user.email}</b>
      </header>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.userPicker}>
          <InputField
            type="email"
            value={emailInput}
            onChange={onChangeEmail}
            placeholder="Subscriber email"
            label={`Find user by email address ${isLoading ? "…" : ""}`}
          />
        </div>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </main>
  );
};

export async function getSha1(source: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(source);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
