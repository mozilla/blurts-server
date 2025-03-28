/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { Fragment } from "react";
import { OnerepProfileAddress, OnerepProfileRow } from "knex/types/tables";
import { ProfileDataListKey } from "./EditProfileForm";
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
import { useL10n } from "../../../../../../../../hooks/l10n";
import styles from "./EditProfileFormInputs.module.scss";
import {
  CONST_DATA_BROKER_PROFILE_DETAIL_LIMITS,
  CONST_URL_SUMO_EDIT_PROFILE_DOB,
} from "../../../../../../../../../constants";

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
          {props.profileData[`${props.profileDataKey}s`].length > 0 && (
            <div className={styles.secondaryInputs}>
              {props.profileData[`${props.profileDataKey}s`].map(
                (item, itemIndex) => {
                  const inputKey = `${props.profileDataKey}s-${itemIndex}`;
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
                    </Fragment>
                  );
                },
              )}
            </div>
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
          <span className={styles.dobString}>
            {dateOfBirthString}
            <LockIcon alt="" />
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
      const primaryPhoneItem = itemData.length > 0 ? itemData[0] : "";
      return (
        <>
          <InputField
            type="tel"
            onChange={(value) =>
              props.handleOnInputChange(value, `${props.profileDataKey}-0`)
            }
            name={`${props.profileDataKey}-0`}
            value={primaryPhoneItem}
            label={l10n.getString(
              `settings-edit-profile-info-form-input-label-primary-phone-number`,
            )}
            isInvalid={primaryPhoneItem.trim()}
            errorMessage={l10n.getString(
              "settings-edit-profile-info-form-input-error-phone-number",
            )}
            hasFloatingLabel
          />
          {itemData.slice(1).length > 0 && (
            <div className={styles.secondaryInputs}>
              {(itemData.slice(1) as string[]).map((item, itemIndex) => {
                const inputKey = `${props.profileDataKey}-${itemIndex + 1}`;
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
                        errorMessage={l10n.getString(
                          "settings-edit-profile-info-form-input-error-phone-number",
                        )}
                        hasFloatingLabel
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
      const primaryAddressItem = itemData[0];
      const primaryItemValue =
        primaryAddressItem.city && primaryAddressItem.state
          ? `${primaryAddressItem.city}, ${primaryAddressItem.state}, USA`
          : "";
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
              `settings-edit-profile-info-form-input-label-primary-location`,
            )}
            onChange={(value) =>
              props.handleOnInputChange(value, `${props.profileDataKey}-0`)
            }
            defaultInputValue={primaryItemValue}
            isRequired
            errorMessage={l10n.getString(
              "settings-edit-profile-info-form-input-error-current-location",
            )}
            isInvalid={!primaryAddressItem.city || !primaryAddressItem.state}
            hasFloatingLabel
          />
          {itemData.slice(1).length > 0 && (
            <div className={styles.secondaryInputs}>
              {(itemData.slice(1) as OnerepProfileAddress[]).map(
                (item, itemIndex) => {
                  const inputKey = `${props.profileDataKey}-${itemIndex + 1}`;
                  const inputValue =
                    item.city && item.state
                      ? `${item.city}, ${item.state}, USA`
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
                          onChange={(value) =>
                            props.handleOnInputChange(value, inputKey)
                          }
                          defaultInputValue={inputValue}
                          errorMessage={l10n.getString(
                            "onboarding-enter-details-input-error-message-location",
                          )}
                          hasFloatingLabel
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
                    </Fragment>
                  );
                },
              )}
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
    default:
      return null;
  }
}

export { EditProfileFormInputs };
