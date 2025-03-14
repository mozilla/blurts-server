/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { OnerepProfileRow, SubscriberRow } from "knex/types/tables";
import { SubscriberEmailPreferencesOutput } from "../../../../../../../../db/tables/subscriber_email_preferences";
import { SanitizedEmailAddressRow } from "../../../../../../../functions/server/sanitize";
import styles from "./SettingsPanelEditProfile.module.scss";
import { InputField } from "../../../../../../../components/client/InputField";
import { getLocale } from "../../../../../../../functions/universal/getLocale";
import { useL10n } from "../../../../../../../hooks/l10n";
import { Button } from "../../../../../../../components/client/Button";

const profileFields: (keyof OnerepProfileRow)[] = [
  "first_name",
  "middle_name",
  "last_name",
  "date_of_birth",
  "phone_numbers",
  "addresses",
] as const;

export type SettingsPanelEditProfileProps = {
  breachCountByEmailAddress: Record<string, number>;
  data?: SubscriberEmailPreferencesOutput;
  emailAddresses: SanitizedEmailAddressRow[];
  subscriber: SubscriberRow;
  user: Session["user"];
  profileData?: OnerepProfileRow;
};

function SettingsPanelEditProfile(props: SettingsPanelEditProfileProps) {
  const router = useRouter();
  if (typeof props.profileData === "undefined") {
    router.push("/user/settings/edit-info");
    return;
  }

  return (
    <>
      <h3>{"Details about you"}</h3>
      <details>
        <summary>Profile data</summary>
        <pre>{JSON.stringify(props.profileData, null, 2)}</pre>
      </details>
      <section>
        <EditProfileForm profileData={props.profileData} />
      </section>
    </>
  );
}

function EditProfileForm(props: { profileData: OnerepProfileRow }) {
  return (
    <form className={styles.profileForm}>
      {profileFields.map((profileDataKey, detailIndex) => (
        <>
          <fieldset key={profileDataKey} className="noList">
            <legend>
              <span>{profileDataKey}</span>
            </legend>
            <EditProfileFormItem
              profileData={props.profileData}
              profileDataKey={profileDataKey as keyof OnerepProfileRow}
            />
          </fieldset>
          {detailIndex < Object.keys(props.profileData).length - 1 && <hr />}
        </>
      ))}
      <div className={styles.profileFormButtons}>
        <Button type="button" variant="secondary" onPress={() => {}}>
          {"Cancel"}
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={false}
          onPress={() => {}}
          isLoading={false}
        >
          {"Save"}
        </Button>
      </div>
    </form>
  );
}

function EditProfileFormItem(props: {
  profileData: OnerepProfileRow;
  profileDataKey: keyof OnerepProfileRow;
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
            value={itemData}
            onChange={() => {}}
            label={props.profileDataKey}
            hasFloatingLabel
            isDisabled={false}
          />
          {props.profileData[`${props.profileDataKey}s`].map(
            (item, itemIndex) => (
              <InputField
                key={`${props.profileDataKey}s-${itemIndex}`}
                value={item}
                onChange={() => {}}
                label={props.profileDataKey}
                hasFloatingLabel
                isDisabled={false}
              />
            ),
          )}
        </>
      );
    case "date_of_birth":
      const dateOfBirthString = new Date(itemData).toLocaleDateString(
        getLocale(l10n),
        {
          dateStyle: "short",
          timeZone: "UTC",
        },
      );
      return (
        <div>
          {dateOfBirthString}
          <p>
            {"Date of birth cannot be changed for security reasons."}
            <a href="">Why?</a>
          </p>
        </div>
      );
    case "phone_numbers":
      return [null, ...itemData].map((item, itemIndex) => (
        <InputField
          key={`${props.profileDataKey}-${itemIndex}`}
          value={item}
          onChange={() => {}}
          label={props.profileDataKey}
          hasFloatingLabel
          isDisabled={false}
        />
      ));
    case "addresses":
      return itemData.map((item, itemIndex) => (
        <InputField
          key={`${props.profileDataKey}-${itemIndex}`}
          value={`${item.city}, ${item.state}`}
          onChange={() => {}}
          label={props.profileDataKey}
          hasFloatingLabel
          isDisabled={false}
        />
      ));
    default:
      return null;
  }
}

export { SettingsPanelEditProfile };
