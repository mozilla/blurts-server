/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Fragment, useActionState, useState } from "react";
import { OnerepProfileRow } from "knex/types/tables";
import { EditProfileCancelDialog } from "./EditProfileCancelDialog";
import {
  EditProfileFormInputs,
  EditProfileInputOnChangeReturnValue,
} from "./EditProfileFormInputs";
import { onHandleUpdateProfileData } from "../../actions";
import { Button } from "../../../../../../../../components/client/Button";
import { useL10n } from "../../../../../../../../hooks/l10n";
import styles from "./EditProfileForm.module.scss";

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

export type ProfileDataListKey = keyof Pick<
  OnerepProfileRow,
  "first_names" | "middle_names" | "last_names" | "phone_numbers" | "addresses"
>;

function EditProfileForm(props: { profileData: OnerepProfileRow }) {
  const l10n = useL10n();
  const [profileFormData, setProfileFormData] = useState(props.profileData);
  const [
    _updateProfileActionError,
    updateProfileAction,
    updateProfileActionIsPending,
  ] = useActionState(async () => {
    await onHandleUpdateProfileData(profileFormData);
  }, null);

  const hasProfileDataChanged =
    JSON.stringify(props.profileData) !== JSON.stringify(profileFormData);

  const handleOnInputChange = ({
    key,
    value,
    index,
  }: EditProfileInputOnChangeReturnValue) => {
    const formDataUpdated = { ...profileFormData };
    if (typeof index === "undefined") {
      formDataUpdated[key as ProfileDataItemKey] = value;
    } else {
      const [city, state, _countryCode] = value.split(", ");
      formDataUpdated[key as ProfileDataListKey][index] =
        key === "addresses" ? { city, state } : value;
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
    <form className={styles.profileForm} action={updateProfileAction}>
      {profileFields.map((profileDataKey, detailIndex) => {
        const label = l10n.getString(
          `settings-edit-profile-info-form-fieldset-label-${profileDataKey.replaceAll("_", "-")}`,
        );
        return (
          <Fragment key={profileDataKey}>
            <fieldset
              className="noList"
              disabled={updateProfileActionIsPending}
            >
              <legend>
                <span>{label}</span>
              </legend>
              <div className={styles.formInputs}>
                <EditProfileFormInputs
                  profileData={profileFormData}
                  profileDataKey={profileDataKey as keyof OnerepProfileRow}
                  handleOnInputChange={handleOnInputChange}
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
        <EditProfileCancelDialog />
        <Button
          type="submit"
          variant="primary"
          isLoading={updateProfileActionIsPending}
          disabled={!hasProfileDataChanged}
        >
          {l10n.getString("settings-edit-profile-info-form-save-button-label")}
        </Button>
      </div>
    </form>
  );
}

export { EditProfileForm };
