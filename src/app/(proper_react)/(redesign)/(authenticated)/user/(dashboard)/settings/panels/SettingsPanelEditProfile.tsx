/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { FormEvent, Fragment, useActionState, useState } from "react";
import { Session } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import {
  OnerepProfileAddress,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";
import * as Sentry from "@sentry/nextjs";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import styles from "./SettingsPanelEditProfile.module.scss";
import { InputField } from "../../../../../../../components/client/InputField";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { useL10n } from "../../../../../../../hooks/l10n";
import { Button } from "../../../../../../../components/client/Button";
import { TelemetryButton } from "../../../../../../../components/client/TelemetryButton";
import {
  MinusCircledIcon,
  PlusCircledIcon,
} from "../../../../../../../components/server/Icons";
import { TelemetryLink } from "../../../../../../../components/client/TelemetryLink";
import { E164PhoneNumberString } from "../../../../../../../../utils/parse";

const profileFields: (keyof OnerepProfileRow)[] = [
  "first_name",
  "middle_name",
  "last_name",
  "date_of_birth",
  "phone_numbers",
  "addresses",
] as const;

type ProfileDataItemKey = keyof Pick<
  OnerepProfileRow,
  "first_name" | "middle_name" | "last_name"
>;

type ProfileDataListKey = keyof Pick<
  OnerepProfileRow,
  "first_names" | "middle_names" | "last_names" | "phone_numbers" | "addresses"
>;

export type SettingsPanelEditProfileProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
};

function SettingsPanelEditProfile(props: SettingsPanelEditProfileProps) {
  const l10n = useL10n();
  const router = useRouter();
  if (typeof props.profileData === "undefined") {
    router.push("/user/settings/edit-info");
    return;
  }

  return (
    <>
      <h3>{l10n.getString("settings-details-about-you-header")}</h3>
      <section>
        <EditProfileForm profileData={props.profileData} />
      </section>
    </>
  );
}

function handleUpdateProfileData(formData: FormData) {
  try {
    console.info(formData);
    redirect("/user/settings/edit-info");
  } catch (error) {
    Sentry.captureException(error);
  }
}

function EditProfileForm(props: { profileData: OnerepProfileRow }) {
  const l10n = useL10n();
  const [profileFormData, setProfileFormData] = useState(props.profileData);
  const [
    _updateProfileActionError,
    updateProfileAction,
    _updateProfileActionIsPending,
  ] = useActionState(async (_previousState: unknown, formData: FormData) => {
    await handleUpdateProfileData(formData);
  }, null);

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const fieldName = target.name;
    const [fieldBaseName, fieldIndex] = fieldName.split("-");
    const fieldValue = target.value;

    const formDataUpdated = { ...profileFormData };
    if (typeof fieldIndex === "undefined") {
      formDataUpdated[fieldBaseName as ProfileDataItemKey] = fieldValue;
    } else {
      formDataUpdated[fieldBaseName as ProfileDataListKey][
        parseInt(fieldIndex)
      ] = fieldValue;
    }
    setProfileFormData(formDataUpdated);
  };

  const handleOnAdd = (profileDataKey: ProfileDataListKey) => {
    const formDataUpdated = {
      ...profileFormData,
      [profileDataKey]: [...profileFormData[profileDataKey], ""],
    };
    setProfileFormData(formDataUpdated);
  };

  const handleOnRemove = (
    profileDataKey: ProfileDataListKey,
    itemIndex: number,
  ) => {
    const formDataUpdated = {
      ...profileFormData,
      [profileDataKey]: profileFormData[profileDataKey].filter(
        (_, filteIndex) => itemIndex !== filteIndex,
      ),
    };
    setProfileFormData(formDataUpdated);
  };

  return (
    <form
      className={styles.profileForm}
      action={updateProfileAction}
      onChange={handleFormChange}
    >
      {profileFields.map((profileDataKey, detailIndex) => {
        const label = l10n.getString(
          `settings-edit-profile-info-form-fieldset-label-${profileDataKey.replaceAll("_", "-")}`,
        );
        return (
          <Fragment key={profileDataKey}>
            <fieldset className="noList">
              <legend>
                <span>{label}</span>
              </legend>
              <div className={styles.formInputs}>
                <EditProfileFormInputs
                  profileData={profileFormData}
                  profileDataKey={profileDataKey as keyof OnerepProfileRow}
                  onAdd={handleOnAdd}
                  onRemove={handleOnRemove}
                />
              </div>
            </fieldset>
            {detailIndex < Object.keys(profileFormData).length - 1 && <hr />}
          </Fragment>
        );
      })}
      <div className={styles.profileFormButtons}>
        <Button type="button" variant="secondary" onPress={() => {}}>
          {l10n.getString(
            "settings-edit-profile-info-form-cancel-button-label",
          )}
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={false}
          onPress={() => {}}
          isLoading={false}
        >
          {l10n.getString(
            "settings-edit-profile-info-form-cancel-button-label",
          )}
        </Button>
      </div>
    </form>
  );
}

function AddItemButton(props: {
  itemKey: keyof OnerepProfileRow;
  onAdd: () => void;
}) {
  const l10n = useL10n();
  return (
    <span className={styles.addItemButtonWrapper}>
      <TelemetryButton
        className={styles.button}
        event={{
          module: "button",
          name: "click",
          data: {
            button_id: `clicked_add_item_${props.itemKey}`,
          },
        }}
        onPress={props.onAdd}
        variant="link"
        small
      >
        <PlusCircledIcon alt="" />
        {l10n.getString(
          "settings-edit-profile-info-form-add-item-button-label",
        )}
      </TelemetryButton>
    </span>
  );
}

function RemoveItemButton(props: {
  itemKey: keyof OnerepProfileRow;
  onRemove: () => void;
}) {
  const l10n = useL10n();
  return (
    <span className={styles.addItemButtonWrapper}>
      <TelemetryButton
        className={styles.button}
        event={{
          module: "button",
          name: "click",
          data: {
            button_id: `clicked_add_item_${props.itemKey}`,
          },
        }}
        onPress={props.onRemove}
        variant="icon"
        small
      >
        <MinusCircledIcon
          alt={l10n.getString(
            "settings-edit-profile-info-form-remove-item-button-label",
          )}
        />
      </TelemetryButton>
    </span>
  );
}

function EditProfileFormInputs(props: {
  profileData: OnerepProfileRow;
  profileDataKey: keyof OnerepProfileRow;
  onAdd: (profileDataKey: ProfileDataListKey) => void;
  onRemove: (profileDataKey: ProfileDataListKey, itemIndex: number) => void;
}) {
  const l10n = useL10n();
  const itemData = props.profileData[props.profileDataKey];

  switch (props.profileDataKey) {
    case "first_name":
    case "middle_name":
    case "last_name":
      return (
        <>
          <InputField
            key={props.profileDataKey}
            name={props.profileDataKey}
            value={itemData as string}
            label={l10n.getString(
              `settings-edit-profile-info-form-input-label-primary-${props.profileDataKey.replaceAll("_", "-")}`,
            )}
            hasFloatingLabel
            isDisabled={false}
            isRequired={props.profileDataKey !== "middle_name"}
          />
          <p>
            {l10n.getString(
              `settings-edit-profile-info-form-fieldset-section-other-label-${props.profileDataKey.replaceAll("_", "-")}s`,
            )}
          </p>
          {props.profileData[`${props.profileDataKey}s`].map(
            (item, itemIndex) => {
              const inputKey = `${props.profileDataKey}s-${itemIndex}`;
              return (
                <div key={inputKey} className={styles.inputWrapper}>
                  <InputField
                    name={inputKey}
                    value={item}
                    label={l10n.getString(
                      `settings-edit-profile-info-form-input-label-other-${props.profileDataKey.replaceAll("_", "-")}`,
                    )}
                    hasFloatingLabel
                    isDisabled={false}
                  />
                  <RemoveItemButton
                    itemKey={props.profileDataKey}
                    onRemove={() => {
                      props.onRemove(
                        `${props.profileDataKey}s` as ProfileDataListKey,
                        itemIndex,
                      );
                    }}
                  />
                </div>
              );
            },
          )}
          <AddItemButton
            itemKey={`${props.profileDataKey}s`}
            onAdd={() =>
              props.onAdd(`${props.profileDataKey}s` as ProfileDataListKey)
            }
          />
          <p>
            {l10n.getString(
              `settings-edit-profile-info-form-fieldset-section-limit-label-${props.profileDataKey.replaceAll("_", "-")}s`,
            )}
          </p>
        </>
      );
    case "date_of_birth":
      const dateOfBirthString = new Date(itemData as Date).toLocaleDateString(
        getLocale(l10n),
        {
          dateStyle: "short",
          timeZone: "UTC",
        },
      );
      return (
        <div className={styles.itemDob}>
          {dateOfBirthString}
          <p>
            {l10n.getFragment(
              "settings-edit-profile-info-form-date-of-birth-note",
              {
                elems: {
                  a: (
                    <TelemetryLink
                      href="/user/settings"
                      target="_blank"
                      eventData={{
                        link_id: "clicked_edit_profile_dob_explainer",
                      }}
                    />
                  ),
                },
              },
            )}
          </p>
        </div>
      );
    case "phone_numbers":
      return (
        <>
          <p>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-other-label-phone-numbers",
            )}
          </p>
          {(itemData as E164PhoneNumberString[]).map((item, itemIndex) => {
            const inputKey = `${props.profileDataKey}-${itemIndex}`;
            return (
              <div key={inputKey} className={styles.inputWrapper}>
                <InputField
                  name={inputKey}
                  value={item}
                  label={
                    itemIndex === 0
                      ? l10n.getString(
                          `settings-edit-profile-info-form-input-label-primary-phone-number`,
                        )
                      : l10n.getString(
                          `settings-edit-profile-info-form-input-label-other-phone-number`,
                        )
                  }
                  hasFloatingLabel
                  isDisabled={false}
                />
                <RemoveItemButton
                  itemKey={props.profileDataKey}
                  onRemove={() =>
                    props.onRemove(
                      props.profileDataKey as ProfileDataListKey,
                      itemIndex,
                    )
                  }
                />
              </div>
            );
          })}
          <AddItemButton
            itemKey={props.profileDataKey}
            onAdd={() =>
              props.onAdd(props.profileDataKey as ProfileDataListKey)
            }
          />
          <p>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-limit-label-phone-numbers",
            )}
          </p>
        </>
      );
    case "addresses":
      return (
        <>
          <p>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-primary-label-addresses",
            )}
          </p>
          <p>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-other-label-addresses",
            )}
          </p>
          {(itemData as OnerepProfileAddress[]).map((item, itemIndex) => {
            const inputKey = `${props.profileDataKey}-${itemIndex}`;
            return (
              <div key={inputKey} className={styles.inputWrapper}>
                <InputField
                  name={inputKey}
                  value={`${item.city}, ${item.state}`}
                  label={
                    itemIndex === 0
                      ? l10n.getString(
                          `settings-edit-profile-info-form-input-label-primary-location`,
                        )
                      : l10n.getString(
                          `settings-edit-profile-info-form-input-label-other-location`,
                        )
                  }
                  hasFloatingLabel
                  isDisabled={false}
                  isRequired={itemIndex === 0}
                />
                <RemoveItemButton
                  itemKey={props.profileDataKey}
                  onRemove={() =>
                    props.onRemove(
                      props.profileDataKey as ProfileDataListKey,
                      itemIndex,
                    )
                  }
                />
              </div>
            );
          })}
          <AddItemButton
            itemKey={props.profileDataKey}
            onAdd={() =>
              props.onAdd(props.profileDataKey as ProfileDataListKey)
            }
          />
          <p>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-limit-label-addresses",
            )}
          </p>
        </>
      );
    default:
      return null;
  }
}

export { SettingsPanelEditProfile };
