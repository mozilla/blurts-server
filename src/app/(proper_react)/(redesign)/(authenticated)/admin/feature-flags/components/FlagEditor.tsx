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
  const [isEnabled, setIsEnabled] = useState(props.flag.is_enabled);
  const [newAddress, setNewAddress] = useState("");
  const [newAllowlistedAddresses, setNewAllowListedAddresses] = useState<
    string[]
  >([]);
  const [unAllowlistedAddresses, setUnAllowListedAddresses] = useState<
    string[]
  >([]);
  const router = useRouter();

  const updateFlag = async () => {
    try {
      if (isEnabled !== props.flag.is_enabled) {
        const isEnabledResonse = await sendUpdateRequest(props.flag.name, {
          id: "isEnabled",
          isEnabled: isEnabled,
        });
        if (!isEnabledResonse.ok) {
          throw new Error(await isEnabledResonse.text());
        }
      }

      const allowList = (props.flag.allow_list ?? [])
        .filter((address) => !unAllowlistedAddresses.includes(address))
        .concat(newAllowlistedAddresses);
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
    <div className={styles.flagWrapper}>
      <h2 className={styles.flagName}>{props.flag.name}</h2>
      <div className={styles.enabledControl}>
        <input
          type="checkbox"
          name={`isEnabled_${props.flag.name}`}
          id={`isEnabled_${props.flag.name}`}
          checked={isEnabled}
          onChange={(e) => setIsEnabled(e.target.checked)}
        />
        <label htmlFor={`isEnabled_${props.flag.name}`}>Enabled</label>
      </div>
      <div className={styles.allowListWrapper}>
        {" "}
        <h4>
          {(props.flag.allow_list?.length ?? 0) -
            unAllowlistedAddresses.length ===
            0 && newAllowlistedAddresses.length === 0 ? (
            <>Enabled for everyone</>
          ) : (
            <>Only enable for:</>
          )}
        </h4>
        <ul className={styles.allowList}>
          {(props.flag.allow_list ?? [])
            .filter((address) => !unAllowlistedAddresses.includes(address))
            .map((address) => {
              return (
                <li key={`existing_${address}`}>
                  <AllowlistedAddress
                    address={address}
                    onRemove={() =>
                      setUnAllowListedAddresses((prev) => [...prev, address])
                    }
                  />
                </li>
              );
            })}
          {newAllowlistedAddresses.map((address) => {
            return (
              <li key={`new_${address}`}>
                <AllowlistedAddress
                  address={address}
                  onRemove={() =>
                    setNewAllowListedAddresses((prev) =>
                      prev.filter((a) => a !== address),
                    )
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setNewAllowListedAddresses((prev) => [...prev, newAddress]);
          setNewAddress("");
        }}
        className={styles.addressAdder}
      >
        <label htmlFor={`newAddress_${props.flag.name}`}>
          Add to allowlist:
        </label>
        <input
          type="email"
          name={`newAddress_${props.flag.name}`}
          id={`newAddress_${props.flag.name}`}
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button type="submit">
          <CheckIcon alt="Add" />
        </button>
      </form>
      <Button
        onPress={() => {
          void updateFlag();
        }}
        variant="secondary"
        disabled={
          isEnabled === props.flag.is_enabled &&
          newAllowlistedAddresses.length === 0 &&
          unAllowlistedAddresses.length === 0
        }
        type="button"
        small
      >
        Save
      </Button>
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
      <button type="button" onClick={() => props.onRemove()}>
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
