/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { FormEvent, Fragment, useRef, useState } from "react";
import { captureException } from "@sentry/nextjs";
import { toast } from "react-toastify";
import isEqual from "lodash.isequal";
import { OnerepProfileRow } from "knex/types/tables";
import { EditProfileCancelDialog } from "./EditProfileCancelDialog";
import {
  EditProfileFormInputs,
  EditProfileInputOnChangeReturnValue,
} from "./EditProfileFormInputs";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import { formatPhone } from "../../../../../../../../functions/universal/formatPhone";
import { useL10n } from "../../../../../../../../hooks/l10n";
import styles from "./EditProfileForm.module.scss";
import { type onHandleUpdateProfileData } from "../../actions";

export const profileFields = [
  "first_name",
  "middle_name",
  "last_name",
  "date_of_birth",
  "phone_numbers",
  "addresses",
] as const;

export type ProfileDataKeys = (typeof profileFields)[number];

export type ProfileDataListKey = keyof Pick<
  OnerepProfileRow,
  "first_names" | "middle_names" | "last_names" | "phone_numbers" | "addresses"
>;

type ProfileDataSingleKey = Exclude<ProfileDataKeys, ProfileDataListKey>;

type FormDataItemValidated<T> = {
  value: T | null;
  isValid: boolean;
  isDuplicate?: boolean;
};

export type FormDataValidated = {
  [K in ProfileDataSingleKey]: FormDataItemValidated<OnerepProfileRow[K]>;
} & {
  [K in ProfileDataListKey]: FormDataItemValidated<
    OnerepProfileRow[K][number]
  >[];
};

const validateProfileFormData = (formData: OnerepProfileRow) => {
  let formIsValid = true;
  const data = Object.keys(formData).reduce(
    (formDataValidated, formDataKey) => {
      switch (formDataKey) {
        case "first_name":
        case "middle_name":
        case "last_name": {
          const isValid =
            formData[formDataKey]?.trim() !== "" ||
            formDataKey === "middle_name";
          if (!isValid) {
            formIsValid = false;
          }
          formDataValidated[formDataKey] = {
            value: formData[formDataKey],
            isValid,
          };
          break;
        }
        case "first_names":
        case "middle_names":
        case "last_names": {
          formDataValidated[formDataKey] = formData[formDataKey].map(
            (value, valueIndex) => {
              const isValid = value.trim() !== "";
              const isDuplicate =
                value.length > 0 &&
                [
                  formData[
                    formDataKey.substring(
                      0,
                      formDataKey.length - 1,
                    ) as keyof OnerepProfileRow
                  ],
                  ...formData[formDataKey].slice(0, valueIndex),
                ].includes(value);
              if (!isValid || isDuplicate) {
                formIsValid = false;
              }
              return {
                value,
                isValid,
                isDuplicate,
              };
            },
          );
          break;
        }
        case "date_of_birth": {
          formDataValidated[formDataKey] = {
            value: formData[formDataKey],
            isValid: formData[formDataKey] instanceof Date,
          };
          break;
        }
        case "phone_numbers": {
          formDataValidated[formDataKey] = (
            formData[formDataKey].length === 0 ? [""] : formData[formDataKey]
          ).map((value, valueIndex) => {
            const phoneNumberFormatted = formatPhone(value);
            const isValid =
              (valueIndex === 0 && phoneNumberFormatted === "") ||
              phoneNumberFormatted.match(/\d/g)?.length === 10;
            const isDuplicate =
              phoneNumberFormatted.length > 0 &&
              formData[formDataKey]
                .slice(0, valueIndex)
                .map((value) => formatPhone(value))
                .includes(phoneNumberFormatted);
            if (!isValid || isDuplicate) {
              formIsValid = false;
            }
            return {
              value: phoneNumberFormatted,
              isValid,
              isDuplicate,
            };
          });
          break;
        }
        case "addresses": {
          formDataValidated[formDataKey] = formData[formDataKey].map(
            (value, valueIndex) => {
              const prevAddresses = formData[formDataKey].slice(0, valueIndex);
              const isValid =
                value.city?.trim() !== "" && value.state?.trim() !== "";
              const isDuplicate = prevAddresses.some(
                (item) =>
                  item.city === value.city && item.state === value.state,
              );
              if (!isValid || isDuplicate) {
                formIsValid = false;
              }
              return {
                value,
                isValid,
                isDuplicate,
              };
            },
          );
          break;
        }
        default:
          break;
      }
      return formDataValidated;
    },
    {} as FormDataValidated,
  );
  return { data, isValid: formIsValid };
};

function EditProfileForm(props: {
  actions: {
    onHandleUpdateProfileData: typeof onHandleUpdateProfileData;
  };
  profileData: OnerepProfileRow;
}) {
  const l10n = useL10n();
  const [profileFormData, setProfileFormData] = useState(props.profileData);
  const [updatingForm, setUpdatingForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const hasProfileDataChanged = !isEqual(props.profileData, profileFormData);
  const profileFormDataValidated = validateProfileFormData(profileFormData);

  const handleOnInputChange = ({
    key,
    value,
    index,
  }: EditProfileInputOnChangeReturnValue) => {
    if (typeof index === "undefined") {
      setProfileFormData({
        ...profileFormData,
        [key]: value,
      });
    } else {
      const formDataUpdated = {
        ...profileFormData,
        [key]: [...profileFormData[key as ProfileDataListKey]],
      };
      const [city, state, _countryCode] = value.split(", ");
      formDataUpdated[key as ProfileDataListKey][index] =
        // This line show as not covered even though there are unit tests for updating
        // the LocationAutocompleteInput in the test file `SettingsPageRedesign.test.tsx`.
        /* c8 ignore next */
        key === "addresses" ? { city, state } : value;

      setProfileFormData(formDataUpdated);
    }
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

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    setUpdatingForm(true);
    const result =
      await props.actions.onHandleUpdateProfileData(profileFormData);
    if (!result.success) {
      toast.error(
        l10n.getString(
          "settings-edit-profile-info-form-error-submission-failed",
        ),
        { autoClose: 15000 },
      );
      captureException(result.error);
    }
    setUpdatingForm(false);
  };

  return (
    <form
      ref={formRef}
      className={styles.profileForm}
      onSubmit={handleSubmitForm}
    >
      {profileFields.map((profileDataKey, detailIndex) => {
        const label = l10n.getString(
          `settings-edit-profile-info-form-fieldset-label-${profileDataKey.replaceAll("_", "-")}`,
        );
        return (
          <Fragment key={profileDataKey}>
            <fieldset className="noList" disabled={updatingForm}>
              <legend>
                <span>{label}</span>
              </legend>
              <div className={styles.formInputs}>
                <EditProfileFormInputs
                  profileData={profileFormDataValidated.data}
                  profileDataKey={profileDataKey}
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
        {hasProfileDataChanged ? (
          <EditProfileCancelDialog
            isSaving={updatingForm}
            onSave={() => {
              formRef.current?.requestSubmit();
            }}
          />
        ) : (
          <TelemetryButton
            variant="secondary"
            href="/user/settings/edit-info"
            event={{
              module: "button",
              name: "click",
              data: {
                button_id: "settings_edit_profile_form_cancel",
              },
            }}
          >
            {l10n.getString(
              "settings-edit-profile-info-form-cancel-button-label",
            )}
          </TelemetryButton>
        )}
        <TelemetryButton
          type="submit"
          variant="primary"
          isLoading={updatingForm}
          disabled={!profileFormDataValidated.isValid || !hasProfileDataChanged}
          event={{
            module: "ctaButton",
            name: "click",
            data: {
              button_id: "settings_edit_profile_form_submitted",
            },
          }}
        >
          {l10n.getString("settings-edit-profile-info-form-save-button-label")}
        </TelemetryButton>
      </div>
    </form>
  );
}

export { EditProfileForm };
