/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SubscriberRow } from "knex/types/tables";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import {
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
} from "../../../../../../../db/tables/emailAddresses";
import {
  deleteResolutionsWithEmail,
  getSubscriberByFxaUid,
} from "../../../../../../../db/tables/subscribers";
import { initEmail } from "../../../../../../../utils/email";
import { sendVerificationEmail } from "../../../../../../api/utils/email";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "../../../../../../functions/l10n/serverComponents";
import { logger } from "../../../../../../functions/server/logging";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
} from "../../../../../../../constants";
import { SanitizedEmailAddressRow } from "../../../../../../functions/server/sanitize";
import { deleteAccount } from "../../../../../../functions/server/deleteAccount";
import { cookies } from "next/headers";
import {
  applyCurrentCouponCode,
  checkCurrentCouponCode,
} from "../../../../../../functions/server/applyCoupon";
import { validateEmailAddress } from "../../../../../../../utils/emailAddress";
import { updateOnerepDataBrokerScanProfile } from "../../../../../../functions/server/updateDataBrokerScanProfile";
import { hasPremium } from "../../../../../../functions/universal/user";
import { getEnabledFeatureFlags } from "../../../../../../../db/tables/featureFlags";
import {
  getProfile,
  updateProfile,
} from "../../../../../../functions/server/moscary";
import { type NormalizedProfileData } from "./panels/SettingsPanelEditProfile/EditProfileForm";

export type AddEmailFormState =
  | { success?: never }
  | { success: true; submittedAddress: string }
  | {
      success: false;
      error?: string;
      errorMessage?: string;
    };

export async function onAddEmail(
  _prevState: AddEmailFormState,
  formData: FormData,
): Promise<AddEmailFormState> {
  // If `_reset` is set returning `success: false` resets the `useActionState`
  // we are calling this server action from.
  if (formData.get("_reset")) {
    return {
      success: false,
    };
  }

  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const session = await getServerSession();
  if (!session?.user.subscriber?.fxa_uid) {
    return {
      success: false,
      error: "add-email-without-active-session",
      errorMessage: l10n.getString("user-add-invalid-email"),
    };
  }
  const subscriber = (await getSubscriberByFxaUid(
    session.user.subscriber?.fxa_uid,
  )) as SubscriberRow | null;
  if (!subscriber) {
    return {
      success: false,
      error: "no-subscriber-data-found",
      errorMessage: l10n.getString("user-add-invalid-email"),
    };
  }
  const submittedAddress = formData.get("newEmailAddress");
  const validatedEmailAddress =
    typeof submittedAddress === "string"
      ? validateEmailAddress(submittedAddress)
      : null;

  if (validatedEmailAddress === null) {
    return {
      success: false,
      error: "invalid-email",
      errorMessage: l10n.getString("user-add-invalid-email"),
    };
  }

  const maxNumEmailAddresses = hasPremium(subscriber)
    ? CONST_MAX_NUM_ADDRESSES_PLUS
    : CONST_MAX_NUM_ADDRESSES;
  const existingAddresses = [session.user.email]
    .concat(subscriber.email_addresses.map((emailRow) => emailRow.email))
    .map((address) => address.toLowerCase());
  if (existingAddresses.length >= maxNumEmailAddresses) {
    return {
      success: false,
      error: "too-many-emails",
      errorMessage: l10n.getString("user-add-too-many-emails"),
    };
  }

  if (existingAddresses.includes(validatedEmailAddress.email.toLowerCase())) {
    return {
      success: false,
      error: "address-already-added",
      errorMessage: l10n.getString("user-add-duplicate-email"),
    };
  }

  try {
    const unverifiedSubscriber = await addSubscriberUnverifiedEmailHash(
      subscriber,
      validatedEmailAddress.email,
    );

    await initEmail();
    await sendVerificationEmail(subscriber, unverifiedSubscriber.id);
    revalidatePath("/user/settings");

    return {
      success: true,
      submittedAddress: validatedEmailAddress.email,
    };
  } catch (e) {
    if (e instanceof Error && e.message === "error-email-validation-pending") {
      return {
        success: false,
        error: "verification-email-just-sent",
        errorMessage: l10n.getString("user-add-verification-email-just-sent"),
      };
    }

    return {
      success: false,
      error: "unknown-error",
      errorMessage: l10n.getString("user-add-unknown-error"),
    };
  }
}

export async function onRemoveEmail(email: SanitizedEmailAddressRow) {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());
  const session = await getServerSession();
  if (!session?.user.subscriber?.fxa_uid) {
    logger.error(
      `Tried to delete email [${email.id}] without an active session.`,
    );
    return {
      success: false,
      error: "delete-email-without-active-session",
      errorMessage: `User tried to delete email without an active session.`,
    };
  }
  const subscriber = (await getSubscriberByFxaUid(
    session.user.subscriber.fxa_uid,
  )) as SubscriberRow | null;
  if (email.subscriber_id !== subscriber?.id) {
    logger.error(
      `User [${subscriber?.id}] tried to delete email [${email.id}], which belongs to another user.`,
    );
    return {
      success: false,
      error: "delete-email-without-permission",
      errorMessage: `User tried to delete an email that belongs to another user.`,
    };
  }

  try {
    await removeOneSecondaryEmail(email.id, subscriber.id);
    await deleteResolutionsWithEmail(subscriber.id, email.email);
    revalidatePath("/user/settings");
  } catch {
    return {
      success: false,
      error: "delete-email-error",
      errorMessage: l10n.getString("user-delete-unknown-error"),
    };
  }
}

export async function onDeleteAccount() {
  const session = await getServerSession();
  if (!session?.user.subscriber?.fxa_uid) {
    logger.error(`Tried to delete an account without an active session.`);
    return {
      success: false,
      error: "delete-account-without-active-session",
      errorMessage: `User tried to delete their account without an active session.`,
    };
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber.fxa_uid,
  );
  if (!subscriber) {
    logger.error(
      `Tried to delete an account with a session that could not be linked to a subscriber.`,
    );
    return {
      success: false,
      error: "delete-account-with-invalid-session",
      errorMessage: `User tried to delete their account, but we could not find it.`,
    };
  }
  await deleteAccount(subscriber);

  // Tell the front page to display an "account deleted" notification:
  (await cookies()).set("justDeletedAccount", "justDeletedAccount", {
    expires: new Date(Date.now() + 5 * 60 * 1000),
    httpOnly: false,
  });

  // If Next-Auth allowed us to log the user out server-side, we'd do that here
  // and then redirect them to the homepage. Unfortunately, that's currently not
  // possibile, so instead the sign-out and redirect needs to happen on the
  // client side after this action completes.
  // See https://github.com/nextauthjs/next-auth/discussions/5334.
}

export async function onApplyCouponCode() {
  const session = await getServerSession();
  if (!session?.user.subscriber?.id) {
    logger.error(`Tried to apply a coupon code without an active session.`);
    return {
      success: false,
      error: "apply-coupon-code-without-active-session",
      errorMessage: `User tried to apply a coupon code without an active session.`,
    };
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber.fxa_uid,
  );
  if (!subscriber) {
    logger.error(
      `Tried to apply a coupon code with a session that could not be linked to a subscriber.`,
    );
    return {
      success: false,
      error: "apply-coupon-code-with-invalid-session",
      errorMessage: `User tried to apply a coupon code, but we could not find their account.`,
    };
  }
  const result = await applyCurrentCouponCode(subscriber);
  return result;
}

export async function onCheckUserHasCurrentCouponSet() {
  const session = await getServerSession();
  if (!session?.user.subscriber?.id) {
    logger.error(`User does not have an active session.`);
    return {
      success: false,
      error: "apply-coupon-code-without-active-session",
      errorMessage: `User does not have an active session.`,
    };
  }

  const result = await checkCurrentCouponCode(session.user.subscriber);
  return result;
}

export async function onHandleUpdateProfileData(
  profileData: NormalizedProfileData,
) {
  const session = await getServerSession();
  if (!session?.user.subscriber?.id) {
    logger.error(`User does not have an active session.`);
    return {
      success: false,
      error: "update-profile-data-without-active-session",
      errorMessage: `User does not have an active session.`,
    };
  }

  if (!hasPremium(session.user)) {
    logger.error(`User does not have an active subscription.`);
    return {
      success: false,
      error: "update-profile-data-without-active-subscription",
      errorMessage: `User does not have an active subscription.`,
    };
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });
  if (enabledFeatureFlags.includes("Moscary")) {
    if (!session.user.subscriber.moscary_id) {
      logger.error(`User does not have a Moscary profile.`);
      return {
        success: false,
        error: "update-profile-data-without-moscary-profile",
        errorMessage: `User does not have a Moscary profile.`,
      };
    }

    try {
      const existingProfile = await getProfile(
        session.user.subscriber.moscary_id,
      );
      const {
        first_name,
        middle_name,
        last_name,
        first_names,
        last_names,
        middle_names,
        phone_numbers,
        addresses,
      } = profileData;
      await updateProfile(session.user.subscriber.moscary_id, {
        first_name,
        last_name,
        first_names: first_names.map((first_name) => ({ first_name })),
        last_names: last_names.map((last_name) => ({ last_name })),
        middle_names: middle_names.map((middle_name) => ({ middle_name })),
        phone_numbers,
        addresses,
        middle_name: middle_name ?? "",
        // The user is not allowed to change their date of birth:
        // https://support.mozilla.org/en-US/kb/add-edit-your-monitor-information#w_why-can-i-not-edit-my-birth-date
        // Moscary could also consider blocking this.
        birth_date: existingProfile.birth_date,
      });
    } catch (error) {
      logger.error("Could not update profile details:", error);
      return {
        success: false,
        error: "update-profile-data-updating-profile-failed",
        errorMessage: `Updating profile failed.`,
      };
    }

    // Tell the /edit-info page to display an “details saved” notification:
    (await cookies()).set("justSavedDetails", "justSavedDetails", {
      expires: new Date(Date.now() + 5 * 60 * 1000),
      httpOnly: false,
    });

    revalidatePath("/user/settings/edit-info");
    redirect("/user/settings/edit-info");
  }

  if (!session.user.subscriber.onerep_profile_id) {
    logger.error(`User does not have a OneRep profile.`);
    return {
      success: false,
      error: "update-profile-data-without-onerep-profile",
      errorMessage: `User does not have a OneRep profile.`,
    };
  }

  try {
    const {
      first_name,
      middle_name,
      last_name,
      first_names,
      last_names,
      middle_names,
      phone_numbers,
      addresses,
    } = profileData;
    await updateOnerepDataBrokerScanProfile(
      session.user.subscriber.onerep_profile_id,
      {
        first_name,
        last_name,
        first_names,
        last_names,
        middle_names,
        phone_numbers,
        addresses,
        middle_name: middle_name ?? "",
      },
    );
  } catch (error) {
    logger.error("Could not update profile details:", error);
    return {
      success: false,
      error: "update-profile-data-updating-profile-failed",
      errorMessage: `Updating profile failed.`,
    };
  }

  // Tell the /edit-info page to display an “details saved” notification:
  (await cookies()).set("justSavedDetails", "justSavedDetails", {
    expires: new Date(Date.now() + 5 * 60 * 1000),
    httpOnly: false,
  });

  revalidatePath("/user/settings/edit-info");
  redirect("/user/settings/edit-info");
}
