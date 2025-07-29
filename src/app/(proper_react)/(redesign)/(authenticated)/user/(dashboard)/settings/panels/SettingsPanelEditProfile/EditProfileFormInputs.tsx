/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Fragment } from "react";
import { OnerepProfileRow } from "knex/types/tables";
import {
  FormDataValidated,
  ProfileDataKeys,
  ProfileDataListKey,
} from "./EditProfileForm";
import { InputField } from "../../../../../../../../components/client/InputField";
import { TelemetryButton } from "../../../../../../../../components/client/TelemetryButton";
import { TelemetryLink } from "../../../../../../../../components/client/TelemetryLink";
import {
  LockIcon,
  MinusCircledIcon,
  PlusCircledIcon,
} from "../../../../../../../../components/server/Icons";
import { LocationAutocompleteInput } from "../../../../../../../../components/client/LocationAutocompleteInput";
import { getLocale } from "../../../../../../../../functions/universal/getLocale";
import { formatPhone } from "../../../../../../../../functions/universal/formatPhone";
import { useL10n } from "../../../../../../../../hooks/l10n";
import styles from "./EditProfileFormInputs.module.scss";
import {
  CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS,
  CONST_URL_SUMO_EDIT_PROFILE_DOB,
} from "../../../../../../../../../constants";

export type EditProfileInputOnChangeReturnValue = {
  key: ProfileDataListKey;
  value: string;
  index?: number;
};

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
          `settings-edit-profile-info-form-add-item-${props.itemKey.replaceAll("_", "-")}-button-label`,
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
  profileData: FormDataValidated;
  profileDataKey: ProfileDataKeys;
  handleOnInputChange: ({
    key,
    value,
    index,
  }: EditProfileInputOnChangeReturnValue) => void;
  onAdd: (profileDataKey: ProfileDataListKey) => void;
  onRemove: (profileDataKey: ProfileDataListKey, itemIndex: number) => void;
}) {
  const l10n = useL10n();
  const profileDataKeyParsed = props.profileDataKey.replaceAll("_", "-");

  switch (props.profileDataKey) {
    case "first_name":
    case "middle_name":
    case "last_name":
      const nameData = props.profileData[props.profileDataKey];
      const isRequired = props.profileDataKey !== "middle_name";
      const secondaryNameKey = `${props.profileDataKey}s` as ProfileDataListKey;
      const secondaryNameData = props.profileData[secondaryNameKey];
      return (
        <>
          <InputField
            onChange={(value) =>
              props.handleOnInputChange({
                key: props.profileDataKey as ProfileDataListKey,
                value,
              })
            }
            key={props.profileDataKey}
            name={props.profileDataKey}
            value={nameData.value ?? ""}
            label={l10n.getString(
              `settings-edit-profile-info-form-input-label-primary-${profileDataKeyParsed}`,
            )}
            hasFloatingLabel
            isRequired={isRequired}
            isInvalid={!nameData.isValid}
            errorMessage={l10n.getString(
              `settings-edit-profile-info-form-input-error-invalid-${profileDataKeyParsed}`,
            )}
          />
          {secondaryNameData.length > 0 && (
            <div className={styles.secondaryInputs}>
              {secondaryNameData.map((item, itemIndex) => {
                const fieldType = `${props.profileDataKey}s`;
                const inputKey = `${fieldType}-${itemIndex}`;
                return (
                  <Fragment key={inputKey}>
                    {itemIndex === 0 && (
                      <strong>
                        {l10n.getString(
                          `settings-edit-profile-info-form-fieldset-section-other-label-${profileDataKeyParsed}s`,
                        )}
                      </strong>
                    )}
                    <div className={styles.inputWrapper}>
                      <InputField
                        onChange={(value) => {
                          props.handleOnInputChange({
                            key: fieldType as ProfileDataListKey,
                            value,
                            index: itemIndex,
                          });
                        }}
                        name={inputKey}
                        value={item.value as string}
                        isInvalid={!item.isValid || item.isDuplicate}
                        label={l10n.getString(
                          `settings-edit-profile-info-form-input-label-other-${profileDataKeyParsed}`,
                        )}
                        errorMessage={
                          item.isDuplicate
                            ? l10n.getString(
                                `settings-edit-profile-info-form-input-error-duplicate-${profileDataKeyParsed}`,
                              )
                            : l10n.getString(
                                `settings-edit-profile-info-form-input-error-invalid-${profileDataKeyParsed}`,
                              )
                        }
                        hasFloatingLabel
                      />
                      <RemoveItemButton
                        itemKey={props.profileDataKey}
                        onRemove={() => {
                          props.onRemove(secondaryNameKey, itemIndex);
                        }}
                      />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          )}
          {secondaryNameData.length <
          CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS[secondaryNameKey] ? (
            <AddItemButton
              itemKey={secondaryNameKey}
              onAdd={() => props.onAdd(secondaryNameKey)}
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
      const dobData = props.profileData[props.profileDataKey];
      const dateOfBirthString =
        dobData.value &&
        new Date(dobData.value).toLocaleDateString(getLocale(l10n), {
          dateStyle: "short",
          timeZone: "UTC",
        });
      return (
        <div className={styles.itemDob}>
          <span className={styles.dobString}>
            {dateOfBirthString}
            <LockIcon alt="" height="14" width="14" />
          </span>
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
      const phoneData = props.profileData[props.profileDataKey];
      const primaryPhoneItem = phoneData[0];
      const secondaryPhoneItems = phoneData.slice(1);
      return (
        <>
          <InputField
            type="tel"
            onChange={(value) =>
              props.handleOnInputChange({
                key: props.profileDataKey as ProfileDataListKey,
                value: formatPhone(value),
                index: 0,
              })
            }
            name={`${props.profileDataKey}-0`}
            value={primaryPhoneItem.value ?? ""}
            isInvalid={!primaryPhoneItem.isValid}
            label={l10n.getString(
              "settings-edit-profile-info-form-input-label-primary-phone-number",
            )}
            errorMessage={l10n.getString(
              "settings-edit-profile-info-form-input-error-invalid-phone-number",
            )}
            hasFloatingLabel
          />
          {secondaryPhoneItems.length > 0 && (
            <div className={styles.secondaryInputs}>
              {phoneData.slice(1).map((item, itemIndex) => {
                const currentItemIndex = itemIndex + 1;
                const inputKey = `${props.profileDataKey}-${currentItemIndex}`;
                return (
                  <Fragment key={inputKey}>
                    {itemIndex === 0 && (
                      <strong>
                        {l10n.getString(
                          "settings-edit-profile-info-form-fieldset-section-other-label-phone-numbers",
                        )}
                      </strong>
                    )}
                    <div className={styles.inputWrapper}>
                      <InputField
                        type="tel"
                        onChange={(value) =>
                          props.handleOnInputChange({
                            key: props.profileDataKey as ProfileDataListKey,
                            value,
                            index: currentItemIndex,
                          })
                        }
                        name={inputKey}
                        value={item.value ?? ""}
                        isInvalid={!item.isValid || item.isDuplicate}
                        label={l10n.getString(
                          "settings-edit-profile-info-form-input-label-other-phone-number",
                        )}
                        errorMessage={
                          item.isDuplicate
                            ? l10n.getString(
                                "settings-edit-profile-info-form-input-error-duplicate-phone-number",
                              )
                            : l10n.getString(
                                "settings-edit-profile-info-form-input-error-invalid-phone-number",
                              )
                        }
                        hasFloatingLabel
                      />
                      <RemoveItemButton
                        itemKey={props.profileDataKey}
                        onRemove={() =>
                          props.onRemove(
                            props.profileDataKey as ProfileDataListKey,
                            currentItemIndex,
                          )
                        }
                      />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          )}
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
      const addressData = props.profileData[props.profileDataKey];
      const primaryAddressItem = `${addressData[0]?.value?.city}, ${addressData[0]?.value?.state}, USA`;
      const secondaryAddressItems = addressData.slice(1);
      return (
        <>
          <strong>
            {l10n.getString(
              "settings-edit-profile-info-form-fieldset-section-primary-label-addresses",
            )}
          </strong>
          <LocationAutocompleteInput
            key={`${props.profileDataKey}-0`}
            label={l10n.getString(
              "settings-edit-profile-info-form-input-label-primary-location",
            )}
            // These lines show as not covered even though there are unit tests for updating
            // the LocationAutocompleteInput in the test file `SettingsPageRedesign.test.tsx`.
            /* c8 ignore next 7 */
            onChange={(value) =>
              props.handleOnInputChange({
                key: props.profileDataKey as ProfileDataListKey,
                value,
                index: 0,
              })
            }
            defaultInputValue={primaryAddressItem}
            isRequired
            isInvalid={!addressData[0].isValid || addressData[0].isDuplicate}
            errorMessage={l10n.getString(
              "settings-edit-profile-info-form-input-error-invalid-current-location",
            )}
            hasFloatingLabel
          />
          {secondaryAddressItems.length > 0 && (
            <div className={styles.secondaryInputs}>
              {secondaryAddressItems.map((item, itemIndex) => {
                const currentItemIndex = itemIndex + 1;
                const inputKey = `${props.profileDataKey}-${currentItemIndex}`;
                const inputValue =
                  item.value?.city && item.value?.state
                    ? `${item.value.city}, ${item.value.state}, USA`
                    : "";
                return (
                  <Fragment key={inputKey}>
                    {itemIndex === 0 && (
                      <strong>
                        {l10n.getString(
                          "settings-edit-profile-info-form-fieldset-section-other-label-addresses",
                        )}
                      </strong>
                    )}
                    <div className={styles.inputWrapper}>
                      <LocationAutocompleteInput
                        key={inputKey}
                        label={l10n.getString(
                          "settings-edit-profile-info-form-input-label-other-location",
                        )}
                        // These lines show as not covered even though there are unit tests for updating
                        // the LocationAutocompleteInput in the test file `SettingsPageRedesign.test.tsx`.
                        /* c8 ignore next 7 */
                        onChange={(value) =>
                          props.handleOnInputChange({
                            key: props.profileDataKey as ProfileDataListKey,
                            value,
                            index: currentItemIndex,
                          })
                        }
                        defaultInputValue={inputValue}
                        isInvalid={!item.isValid || item.isDuplicate}
                        errorMessage={
                          item.isDuplicate
                            ? l10n.getString(
                                "settings-edit-profile-info-form-input-error-duplicate-location",
                              )
                            : l10n.getString(
                                "onboarding-enter-details-input-error-message-location",
                              )
                        }
                        hasFloatingLabel
                      />
                      <RemoveItemButton
                        itemKey={props.profileDataKey}
                        onRemove={() =>
                          props.onRemove(
                            props.profileDataKey as ProfileDataListKey,
                            currentItemIndex,
                          )
                        }
                      />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          )}
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
    // Adding the c8 ignore because it is not expected that we fallthrough
    // and hit the default case.
    // The last two closing lines are also showing as not covered.
    /* c8 ignore next 4 */
    default:
      return null;
  }
}

export { EditProfileFormInputs };
