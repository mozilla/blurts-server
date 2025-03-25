/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Fragment, useActionState, useState } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import {
  OnerepProfileAddress,
  OnerepProfileRow,
  SubscriberRow,
} from "knex/types/tables";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../../db/tables/subscriber_email_preferences";
import { SanitizedEmailAddressRow } from "../../../../../../../../functions/server/sanitize";
import styles from "./SettingsPanelEditProfile.module.scss";
import { InputField } from "../../../../../../../../components/client/InputField";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { Button } from "../../../../../../../../components/client/Button";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import {
  MinusCircledIcon,
  PlusCircledIcon,
} from "../../../../../../../../components/server/Icons";
import { TelemetryLink } from "../../../../../../../../components/client/TelemetryLink";
import {
  CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS,
  CONST_URL_SUMO_EDIT_PROFILE_DOB,
} from "../../../../../../../../../constants";
import { LocationAutocompleteInput } from "../../../../../../../../components/client/LocationAutocompleteInput";
import { onHandleUpdateProfileData } from "../../actions";
import { useTelemetry } from "../../../../../../../../hooks/useTelemetry";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { ModalOverlay } from "../../../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../../../components/client/dialog/Dialog";
import CancelDialogIllustration from "../../../../../../../images/monitor-logo-minimal.svg";
import { hasPremium } from "../../../../../../../../functions/universal/user";

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
  if (!hasPremium(props.user) || typeof props.profileData === "undefined") {
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

  const handleOnInputChange = (value: string, key: string) => {
    const [fieldBaseName, fieldIndex] = key.split("-");
    const formDataUpdated = { ...profileFormData };
    if (typeof fieldIndex === "undefined") {
      formDataUpdated[fieldBaseName as ProfileDataItemKey] = value;
    } else {
      const [city, state, _countryCode] = value.split(", ");
      formDataUpdated[fieldBaseName as ProfileDataListKey][
        parseInt(fieldIndex)
      ] = fieldBaseName === "addresses" ? { city: city, state } : value;
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
        <CancelDialog />
        <Button
          type="submit"
          variant="primary"
          onPress={() => {}}
          isLoading={updateProfileActionIsPending}
          disabled={!hasProfileDataChanged}
        >
          {l10n.getString("settings-edit-profile-info-form-save-button-label")}
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

export const CancelDialog = () => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();
  const dialogState = useOverlayTriggerState({
    defaultOpen: false,
    // Unfortunately we're currently running into a bug testing code that hits
    // `useFormState`, which would happen when the dialog is opened.
    // See the comment for the test "counts how often people click the 'Add
    // email address' button":
    /* c8 ignore start */
    onOpenChange(isOpen) {
      if (isOpen) {
        recordTelemetry("ctaButton", "click", {
          button_id: "settings_edit_profile_form_cancel_dialog_open",
        });
      } else {
        recordTelemetry("button", "click", {
          button_id: "settings_edit_profile_form_cancel_dialog_close",
        });
      }
    },
    /* c8 ignore stop */
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState,
  );

  return (
    <>
      <Button {...triggerProps} variant="secondary">
        {l10n.getString("settings-edit-profile-info-form-cancel-button-label")}
      </Button>
      {dialogState.isOpen && (
        <ModalOverlay state={dialogState} {...overlayProps} isDismissable>
          <Dialog
            title={l10n.getString(
              "settings-edit-profile-info-form-cancel-dialog-header",
            )}
            illustration={<Image src={CancelDialogIllustration} alt="" />}
            // Unfortunately we're currently running into a bug testing code
            // that hits `useFormState`. See the comment for the test "calls the
            // 'add' action when adding another email address":
            /* c8 ignore next */
            onDismiss={() => dialogState.close()}
            fitContent
          >
            <div className={styles.cancelDialogContents}>
              <p>
                {l10n.getString(
                  "settings-edit-profile-info-form-cancel-dialog-description",
                )}
              </p>
              <div className={styles.cancelDialogButtons}>
                <TelemetryButton
                  event={{
                    module: "link",
                    name: "click",
                    data: {
                      link_id: "settings_edit_profile_form_cancel_dialog_save",
                    },
                  }}
                  variant="primary"
                  href="/users/settings/edit-info"
                >
                  {l10n.getString(
                    "settings-edit-profile-info-form-save-button-label",
                  )}
                </TelemetryButton>
                <TelemetryButton
                  event={{
                    module: "link",
                    name: "click",
                    data: {
                      link_id:
                        "settings_edit_profile_form_cancel_dialog_confirm",
                    },
                  }}
                  variant="secondary"
                  href="/users/settings/edit-info"
                >
                  {l10n.getString(
                    "settings-edit-profile-info-form-cancel-dialog-confimation-button-label",
                  )}
                </TelemetryButton>
              </div>
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};

function EditProfileFormInputs(props: {
  profileData: OnerepProfileRow;
  profileDataKey: keyof OnerepProfileRow;
  handleOnInputChange: (value: string, key: string) => void;
  onAdd: (profileDataKey: ProfileDataListKey) => void;
  onRemove: (profileDataKey: ProfileDataListKey, itemIndex: number) => void;
}) {
  const l10n = useL10n();
  const itemData = props.profileData[props.profileDataKey];
  const profileDataKeyParsed = props.profileDataKey.replaceAll("_", "-");

  switch (props.profileDataKey) {
    case "first_name":
    case "middle_name":
    case "last_name":
      const isRequired = props.profileDataKey !== "middle_name";
      return (
        <>
          <InputField
            onChange={(value) =>
              props.handleOnInputChange(value, props.profileDataKey)
            }
            key={props.profileDataKey}
            name={props.profileDataKey}
            value={itemData as string}
            label={l10n.getString(
              `settings-edit-profile-info-form-input-label-primary-${profileDataKeyParsed}`,
            )}
            hasFloatingLabel
            isRequired={props.profileDataKey !== "middle_name"}
            isInvalid={isRequired && (itemData as string).trim() === ""}
            errorMessage={l10n.getString(
              `settings-edit-profile-info-form-input-error-${profileDataKeyParsed}`,
            )}
          />
          <strong>
            {l10n.getString(
              `settings-edit-profile-info-form-fieldset-section-other-label-${profileDataKeyParsed}s`,
            )}
          </strong>
          {props.profileData[`${props.profileDataKey}s`].map(
            (item, itemIndex) => {
              const inputKey = `${props.profileDataKey}s-${itemIndex}`;
              return (
                <div key={inputKey} className={styles.inputWrapper}>
                  <InputField
                    onChange={(value) =>
                      props.handleOnInputChange(value, inputKey)
                    }
                    name={inputKey}
                    value={item}
                    label={l10n.getString(
                      `settings-edit-profile-info-form-input-label-other-${profileDataKeyParsed}`,
                    )}
                    hasFloatingLabel
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
          {props.profileData[`${props.profileDataKey}s`].length <
          CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS[
            `${props.profileDataKey}s`
          ] ? (
            <AddItemButton
              itemKey={`${props.profileDataKey}s`}
              onAdd={() =>
                props.onAdd(`${props.profileDataKey}s` as ProfileDataListKey)
              }
            />
          ) : (
            <p>
              {l10n.getString(
                `settings-edit-profile-info-form-fieldset-section-limit-label-${profileDataKeyParsed}s`,
              )}
            </p>
          )}
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
                      href={CONST_URL_SUMO_EDIT_PROFILE_DOB}
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
          {(itemData as string[]).map((item, itemIndex) => {
            const inputKey = `${props.profileDataKey}-${itemIndex}`;
            return (
              <Fragment key={inputKey}>
                <div className={styles.inputWrapper}>
                  <InputField
                    onChange={(value) =>
                      props.handleOnInputChange(value, inputKey)
                    }
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
                    isInvalid={item.trim() === ""}
                    errorMessage={l10n.getString(
                      "settings-edit-profile-info-form-input-error-phone-number",
                    )}
                    hasFloatingLabel
                  />
                  {itemIndex > 0 && (
                    <RemoveItemButton
                      itemKey={props.profileDataKey}
                      onRemove={() =>
                        props.onRemove(
                          props.profileDataKey as ProfileDataListKey,
                          itemIndex,
                        )
                      }
                    />
                  )}
                </div>
                {itemIndex === 0 && (
                  <strong>
                    {l10n.getString(
                      "settings-edit-profile-info-form-fieldset-section-other-label-phone-numbers",
                    )}
                  </strong>
                )}
              </Fragment>
            );
          })}
          {props.profileData[props.profileDataKey].length <
          CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS[props.profileDataKey] ? (
            <AddItemButton
              itemKey={props.profileDataKey}
              onAdd={() =>
                props.onAdd(props.profileDataKey as ProfileDataListKey)
              }
            />
          ) : (
            <p>
              {l10n.getString(
                "settings-edit-profile-info-form-fieldset-section-limit-label-phone-numbers",
              )}
            </p>
          )}
        </>
      );
    case "addresses":
      return (
        <>
          <strong>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-primary-label-addresses",
            )}
          </strong>
          {(itemData as OnerepProfileAddress[]).map((item, itemIndex) => {
            const inputKey = `${props.profileDataKey}-${itemIndex}`;
            const inputValue =
              item.city && item.state ? `${item.city}, ${item.state}, USA` : "";
            return (
              <Fragment key={inputKey}>
                <div className={styles.inputWrapper}>
                  <LocationAutocompleteInput
                    key={inputKey}
                    label={
                      itemIndex === 0
                        ? l10n.getString(
                            `settings-edit-profile-info-form-input-label-primary-location`,
                          )
                        : l10n.getString(
                            `settings-edit-profile-info-form-input-label-other-location`,
                          )
                    }
                    onChange={(value) =>
                      props.handleOnInputChange(value, inputKey)
                    }
                    defaultInputValue={inputValue}
                    isRequired
                    errorMessage={l10n.getString(
                      "onboarding-enter-details-input-error-message-location",
                    )}
                    isInvalid={!item.city || !item.state}
                    hasFloatingLabel
                  />
                  {itemIndex > 0 && (
                    <RemoveItemButton
                      itemKey={props.profileDataKey}
                      onRemove={() =>
                        props.onRemove(
                          props.profileDataKey as ProfileDataListKey,
                          itemIndex,
                        )
                      }
                    />
                  )}
                </div>
                {itemIndex === 0 && (
                  <strong>
                    {l10n.getString(
                      "settings-edit-profile-info-form-fieldset-section-other-label-addresses",
                    )}
                  </strong>
                )}
              </Fragment>
            );
          })}
          {props.profileData[props.profileDataKey].length <
          CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS[props.profileDataKey] ? (
            <AddItemButton
              itemKey={props.profileDataKey}
              onAdd={() =>
                props.onAdd(props.profileDataKey as ProfileDataListKey)
              }
            />
          ) : (
            <p>
              {l10n.getString(
                "settings-edit-profile-info-form-fieldset-section-limit-label-addresses",
              )}
            </p>
          )}
        </>
      );
    default:
      return null;
  }
}

export { SettingsPanelEditProfile };
