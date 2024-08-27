/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";
import { FeatureFlagRow } from "knex/types/tables";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./FlagEditor.module.scss";
import {
  CheckIcon,
  DeleteIcon,
} from "../../../../../../components/server/Icons";
import type { UpdateFeatureFlagRequestBody } from "../../../../../../api/v1/admin/feature-flags/[flagId]/route";
import { Button } from "../../../../../../components/client/Button";

export const FlagEditor = (props: { flag: FeatureFlagRow }) => {
  const router = useRouter();

  const setIsEnabled = async (isEnabled: boolean) => {
    try {
      const isEnabledResonse = await sendUpdateRequest(props.flag.name, {
        id: "isEnabled",
        isEnabled: isEnabled,
      });
      if (!isEnabledResonse.ok) {
        throw new Error(await isEnabledResonse.text());
      }
    } catch (e) {
      console.error(e);
    }
    router.refresh();
  };

  return (
    <div className={styles.flagWrapper}>
      <h2 className={styles.flagName}>{props.flag.name}</h2>
      <div className={styles.enabledControl}>
        {props.flag.is_enabled ? (
          <Button
            variant="secondary"
            destructive
            small
            onPress={() => void setIsEnabled(false)}
          >
            Disable
          </Button>
        ) : (
          <Button
            variant="secondary"
            onPress={() => void setIsEnabled(true)}
            small
          >
            Enable for everyone
          </Button>
        )}
      </div>
      {!props.flag.is_enabled && <AllowlistEditor flag={props.flag} />}
    </div>
  );
};

export const AllowlistEditor = (props: { flag: FeatureFlagRow }) => {
  const [newAddress, setNewAddress] = useState("");
  const router = useRouter();

  const updateAllowlist = async (allowList: string[]) => {
    try {
      const allowListResponse = await sendUpdateRequest(props.flag.name, {
        id: "allowList",
        value: allowList.map((address) => address.trim()).join(","),
      });
      if (!allowListResponse.ok) {
        throw new Error(await allowListResponse.text());
      }
    } catch (e) {
      console.error(e);
    }
    router.refresh();
  };

  return (
    <div className={styles.allowListWrapper}>
      <hr />
      <h4>Allowlist</h4>
      <ul className={styles.allowList}>
        {(props.flag.allow_list ?? []).map((address) => {
          return (
            <li key={`existing_${address}`}>
              <AllowlistedAddress
                address={address}
                onRemove={() =>
                  void updateAllowlist(
                    (props.flag.allow_list ?? []).filter(
                      (existingAddress) => existingAddress !== address,
                    ),
                  )
                }
              />
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          void updateAllowlist([
            ...(props.flag.allow_list ?? []),
            newAddress,
          ]).then(() => {
            setNewAddress("");
          });
        }}
        className={styles.addressAdder}
      >
        <label htmlFor={`newAddress_${props.flag.name}`}>Enable for:</label>
        <input
          type="email"
          name={`newAddress_${props.flag.name}`}
          id={`newAddress_${props.flag.name}`}
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          placeholder="e.g. email@example.com"
        />
        <button type="submit">
          <CheckIcon alt="Add" />
        </button>
      </form>
    </div>
  );
};

const AllowlistedAddress = (props: {
  address: string;
  onRemove: () => void;
}) => {
  return (
    <span className={styles.addressListing}>
      <span>{props.address}</span>
      <button
        type="button"
        onClick={() => props.onRemove()}
        title={`Remove ${props.address} from allowlist`}
      >
        <DeleteIcon alt="Delete" />
      </button>
    </span>
  );
};

async function sendUpdateRequest(
  flagName: string,
  body: UpdateFeatureFlagRequestBody,
) {
  const endpoint = `/api/v1/admin/feature-flags/${flagName}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return fetch(endpoint, options);
}
