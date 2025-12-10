/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "../../../../../components/client/Button";
import { InputField } from "../../../../../components/client/InputField";
import { getSha1 } from "../dev/UserAdmin";
import styles from "../dev/UserAdmin.module.scss";
import { lookupFxaUid } from "./actions";

export const UserAdminProduction = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");

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
    </main>
  );
};
