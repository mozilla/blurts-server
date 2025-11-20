/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import isEqual from "lodash.isequal";
import styles from "./UserAdmin.module.scss";
import { Button } from "../../../../../components/client/Button";
import {
  type UserStateAction,
  type PutUserStateRequestBody,
  GetUserStateResponseBody,
} from "../../../../../api/v1/admin/users/[fxaUid]/route";
import {
  lookupFxaUid,
  getOnerepProfile,
  updateOnerepProfile,
  triggerManualOnerepProfileScan,
  getAllOnerepProfileScans,
} from "./actions";
import { OnerepProfileRow, OnerepScanRow } from "knex/types/tables";
import {
  ShowProfileResponse,
  UpdateableProfileDetails,
} from "../../../../../functions/server/onerep";
import { InputField } from "../../../../../components/client/InputField";
import { CONST_DATA_BROKER_PROFILE_DETAIL_ALLOW_LIST } from "../../../../../../constants";

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

const ProfileDataInputs = ({
  data,
  onChange,
  onError,
}: {
  data: OnerepProfileRow;
  onChange: (values: UpdateableProfileDetails) => void;
  onError: (error: string) => void;
}) => {
  const dataKeys = Object.keys(data).filter((dataKey) =>
    CONST_DATA_BROKER_PROFILE_DETAIL_ALLOW_LIST.includes(
      dataKey as (typeof CONST_DATA_BROKER_PROFILE_DETAIL_ALLOW_LIST)[number],
    ),
  );
  const initialData = dataKeys.reduce(
    (filteredData: Record<string, string>, key) => {
      filteredData[key] = JSON.stringify(
        data[
          key as (typeof CONST_DATA_BROKER_PROFILE_DETAIL_ALLOW_LIST)[number]
        ],
      );
      return filteredData;
    },
    {},
  );
  const [editableProfileData, setEditableProfileData] = useState(initialData);

  return (
    <>
      <Button
        variant="primary"
        disabled={isEqual(initialData, editableProfileData)}
        onPress={() => {
          try {
            const editableProfileDataParsed = Object.keys(
              editableProfileData,
            ).reduce((parsedData: Record<string, string>, key) => {
              parsedData[key] = JSON.parse(editableProfileData[key]);
              return parsedData;
            }, {});
            onChange(
              editableProfileDataParsed as unknown as UpdateableProfileDetails,
            );
          } catch (error) {
            console.error("Could not parse input data:", error);
            onError(`Could not parse input data: ${JSON.stringify(error)}`);
          }
        }}
      >
        Update profile
      </Button>
      <div className={styles.editInputs}>
        {dataKeys.map((key) => {
          const dataValue = editableProfileData[key];
          return (
            <InputField
              key={key}
              value={dataValue}
              onChange={(value) => {
                const updatedProfileData = {
                  ...editableProfileData,
                  [key]: value,
                };
                setEditableProfileData(updatedProfileData);
              }}
              label={key}
            />
          );
        })}
      </div>
    </>
  );
};

export const UserAdmin = ({ isLocal }: { isLocal: boolean }) => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const [subscriberData, setSubscriberData] =
    useState<GetUserStateResponseBody | null>(null);
  const [onerepProfileData, setOnerepProfileData] = useState<{
    local: OnerepProfileRow;
    remote: ShowProfileResponse;
  } | null>(null);
  const [oneRepProfileScans, setOneRepProfileScans] = useState<
    OnerepScanRow[] | null
  >(null);

  const setProfile = async (onerepProfileId: number) => {
    const profileData = await getOnerepProfile(onerepProfileId);
    if (profileData) {
      setOnerepProfileData(profileData);
    }
  };

  const setProfileScans = async (onerepProfileId: number) => {
    const profileScans = await getAllOnerepProfileScans(onerepProfileId);
    if (profileScans) {
      setOneRepProfileScans(
        profileScans.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        ),
      );
    }
  };

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
        setSubscriberData(null);
        return;
      }
      const data: GetUserStateResponseBody = await response.json();
      if (data.success) {
        setSubscriberData(data);
        if (data.onerepProfileId !== null) {
          setProfile(data.onerepProfileId);
          setProfileScans(data.onerepProfileId);
        }
      }

      setIsLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, [emailInput]);

  const onChangeEmail = (email: string) => {
    setStatus(null);
    setSubscriberData(null);
    setOnerepProfileData(null);
    setOneRepProfileScans(null);
    setEmailInput(email);
  };

  const performAction = async (action: UserStateAction) => {
    setStatus(null);

    const emailHash = await getSha1(emailInput);
    const fxaUid = await lookupFxaUid(emailHash);

    const requestBody: PutUserStateRequestBody = {
      actions: [action],
    };
    const response = await fetch(`/api/v1/admin/users/${fxaUid}`, {
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
    const refreshResponse = await fetch(`/api/v1/admin/users/${fxaUid}`);
    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      setSubscriberData(refreshData);
      setProfile(refreshData.onerepProfileId);
    }
  };

  const updateProfileAction = async (
    updatedProfileData: UpdateableProfileDetails,
  ) => {
    try {
      if (subscriberData?.onerepProfileId) {
        await updateOnerepProfile(
          subscriberData.onerepProfileId,
          updatedProfileData,
        );
        setProfile(subscriberData?.onerepProfileId);
        setStatus(
          `Updating profile succeeded for email address [${emailInput}].`,
        );
      }
    } catch (error) {
      setStatus(`[Updating profile failed: [${error}].`);
    }
  };

  const triggerScanAction = async () => {
    try {
      if (subscriberData?.onerepProfileId) {
        await triggerManualOnerepProfileScan(subscriberData.onerepProfileId);
        setProfileScans(subscriberData?.onerepProfileId);
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
      <section>
        <h2>Subscriber</h2>
        {subscriberData ? (
          <>
            {isLocal && (
              <div className={styles.actions}>
                {subscriberData.subscriptions?.includes("monitor") ? (
                  <Button
                    variant="secondary"
                    onPress={() => void performAction("unsubscribe")}
                  >
                    Remove Plus subscription
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onPress={() => void performAction("subscribe")}
                  >
                    Add Plus subscription
                  </Button>
                )}
                <Button
                  variant="secondary"
                  destructive={true}
                  onPress={() => void performAction("delete_subscriber")}
                >
                  Delete subscriber
                </Button>
              </div>
            )}
            <div className={styles.content}>
              <DataTable header="Subscriber data" data={subscriberData} open />
            </div>
          </>
        ) : (
          "No subscriber found"
        )}
      </section>
      {subscriberData && (
        <>
          <section>
            <h2>OneRep profile</h2>
            {onerepProfileData ? (
              <>
                {isLocal && (
                  <>
                    <div className={styles.actions}>
                      <Button
                        variant="secondary"
                        destructive={true}
                        onPress={() =>
                          void performAction("delete_onerep_profile")
                        }
                      >
                        Delete profile
                      </Button>
                      <Button
                        variant="secondary"
                        destructive={true}
                        onPress={() =>
                          void performAction("delete_onerep_scans")
                        }
                      >
                        Delete scans
                      </Button>
                      <Button
                        variant="secondary"
                        destructive={true}
                        onPress={() =>
                          void performAction("delete_onerep_scan_results")
                        }
                      >
                        Delete scan results
                      </Button>
                    </div>
                    <ProfileDataInputs
                      data={onerepProfileData.local}
                      onChange={(updatedProfileData) => {
                        void updateProfileAction(updatedProfileData);
                      }}
                      onError={(error) => {
                        setStatus(`[Updating profile failed: [${error}].`);
                      }}
                    />
                  </>
                )}
                <div className={styles.content}>
                  <DataTable
                    header="Current profile data (local)"
                    data={onerepProfileData.local}
                    open
                  />
                  <DataTable
                    header="Current profile data (remote)"
                    data={onerepProfileData.remote}
                    open
                  />
                </div>
              </>
            ) : (
              "No profile found for subscriber"
            )}
            {oneRepProfileScans ? (
              <>
                <DataTable
                  header="Current profile scans"
                  data={oneRepProfileScans}
                  open
                />
                <Button
                  variant="primary"
                  onPress={() => void triggerScanAction()}
                >
                  Trigger manual scan
                </Button>
              </>
            ) : (
              "No scans for profile found"
            )}
          </section>
        </>
      )}
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
