/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { OnerepScanRow } from "knex/types/tables";
import { Button } from "../../../../../components/client/Button";
import { InputField } from "../../../../../components/client/InputField";
import { DataTable, getSha1 } from "../dev/UserAdmin";
import styles from "../dev/UserAdmin.module.scss";
import {
  getAllProfileScans,
  lookupFxaUid,
  triggerManualProfileScan,
} from "./actions";

export const UserAdminProduction = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const [onerepProfileId, setOnerepProfileId] = useState(null);
  const [oneRepProfileScans, setOneRepProfileScans] = useState<
    OnerepScanRow[] | null
  >(null);

  const setProfileScans = async (onerepProfileId: number) => {
    const profileScans = await getAllProfileScans(onerepProfileId);
    if (profileScans) {
      setOneRepProfileScans(
        profileScans.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        ),
      );
    }
  };

  const triggerScanAction = async () => {
    try {
      if (onerepProfileId) {
        await triggerManualProfileScan(onerepProfileId);
        setProfileScans(onerepProfileId);
        setStatus(`Running manual scan for [${emailInput}] succeeded.`);
      }
    } catch (error) {
      setStatus(`[Running manual scan failed: [${error}].`);
    }
  };

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        Logged in as <b>{session.data?.user.email}</b>
      </header>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();

          void getSha1(emailInput)
            .then(async (emailHash) => {
              setIsLoading(true);
              const fxaUid = await lookupFxaUid(emailHash);
              const response = await fetch(`/api/v1/admin/users/${fxaUid}`);
              if (!response.ok) {
                setIsLoading(false);
                return;
              }
              const data = await response.json();
              setOnerepProfileId(data.onerepProfileId);
              setProfileScans(data.onerepProfileId);
            })
            .catch(() => {
              setOnerepProfileId(null);
              setOneRepProfileScans(null);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        <div className={styles.userPicker}>
          <InputField
            type="email"
            value={emailInput}
            onChange={(email) => {
              setOnerepProfileId(null);
              setOneRepProfileScans(null);
              setEmailInput(email);
            }}
            placeholder="Subscriber email"
            label={`Find user by email address ${isLoading ? "…" : ""}`}
            description="Works for @mozilla.com emails only"
          />
        </div>
        <Button variant="primary" type="submit">
          Lookup email
        </Button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
      <section>
        <h2>OneRep profile</h2>
        {oneRepProfileScans ? (
          <>
            <DataTable
              header="Current profile scans"
              data={oneRepProfileScans}
              open
            />
            <Button variant="primary" onPress={() => void triggerScanAction()}>
              Trigger manual scan
            </Button>
          </>
        ) : (
          "No scans for profile found"
        )}
      </section>
    </main>
  );
};
