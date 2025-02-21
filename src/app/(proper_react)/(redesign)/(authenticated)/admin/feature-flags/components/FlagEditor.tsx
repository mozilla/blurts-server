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
import { CreateFeatureFlagRequestBody } from "../../../../../../api/v1/admin/feature-flags/route";
import { FeatureFlagName } from "../../../../../../../db/tables/featureFlags";

export const NewFlagEditor = (props: {
  flagName: FeatureFlagName;
  adminOnly: boolean;
}) => {
  return (
    <FlagEditor
      adminOnly={props.adminOnly}
      flagName={props.flagName}
      isEnabled={false}
      onToggleEnable={async (isEnabled) => {
        const createResponse = await sendCreateRequest({
          name: props.flagName,
          isEnabled: isEnabled,
        });
        if (!createResponse.ok) {
          throw new Error(await createResponse.text());
        }
      }}
      allowList={[]}
      onUpdateAllowlist={async (allowList) => {
        const createResponse = await sendCreateRequest({
          name: props.flagName,
          isEnabled: false,
          allowList: allowList,
        });
        if (!createResponse.ok) {
          throw new Error(await createResponse.text());
        }
      }}
    />
  );
};

export const ExistingFlagEditor = (props: {
  flag: FeatureFlagRow;
  adminOnly: boolean;
}) => {
  return (
    <FlagEditor
      adminOnly={props.adminOnly}
      flagName={props.flag.name}
      isEnabled={props.flag.is_enabled}
      onToggleEnable={async (isEnabled) => {
        const isEnabledResonse = await sendUpdateRequest(props.flag.name, {
          id: "isEnabled",
          isEnabled: isEnabled,
        });
        if (!isEnabledResonse.ok) {
          throw new Error(await isEnabledResonse.text());
        }
      }}
      allowList={props.flag.allow_list ?? []}
      onUpdateAllowlist={async (allowList) => {
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
      }}
    />
  );
};

type Props = {
  flagName: string;
  isEnabled: boolean;
  onToggleEnable: (isEnabled: boolean) => Promise<void>;
  allowList: string[];
  adminOnly: boolean;
  onUpdateAllowlist: (allowList: string[]) => Promise<void>;
};
const FlagEditor = (props: Props) => {
  const router = useRouter();

  const setIsEnabled = async (isEnabled: boolean) => {
    try {
      await props.onToggleEnable(isEnabled);
    } catch (e) {
      console.error(e);
    }
    router.refresh();
  };

  return (
    <div className={styles.flagWrapper}>
      <h2 className={styles.flagName}>{props.flagName}</h2>
      <div className={styles.enabledControl}>
        {props.isEnabled ? (
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
            disabled={props.adminOnly}
          >
            {props.adminOnly ? "Allow list only" : "Enable for everyone"}
          </Button>
        )}
      </div>
      {!props.isEnabled && <AllowlistEditor {...props} />}
    </div>
  );
};

const AllowlistEditor = (props: Props) => {
  const [newAddress, setNewAddress] = useState("");
  const router = useRouter();

  const updateAllowlist = async (allowList: string[]) => {
    try {
      await props.onUpdateAllowlist(allowList.map((address) => address.trim()));
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
        {(props.allowList ?? []).map((address) => {
          return (
            <li key={`existing_${address}`}>
              <AllowlistedAddress
                address={address}
                onRemove={() =>
                  void updateAllowlist(
                    (props.allowList ?? []).filter(
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

          void updateAllowlist([...(props.allowList ?? []), newAddress]).then(
            () => {
              setNewAddress("");
            },
          );
        }}
        className={styles.addressAdder}
      >
        <label htmlFor={`newAddress_${props.flagName}`}>Enable for:</label>
        <input
          type="email"
          name={`newAddress_${props.flagName}`}
          id={`newAddress_${props.flagName}`}
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

async function sendCreateRequest(body: CreateFeatureFlagRequestBody) {
  const endpoint = `/api/v1/admin/feature-flags/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return fetch(endpoint, options);
}

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
