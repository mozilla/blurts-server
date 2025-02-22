/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

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
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";
import { SanitizedEmailAddressRow } from "../../../../../../functions/server/sanitize";
import { deleteAccount } from "../../../../../../functions/server/deleteAccount";
import { cookies } from "next/headers";
import {
  applyCurrentCouponCode,
  checkCurrentCouponCode,
} from "../../../../../../functions/server/applyCoupon";
import { validateEmailAddress } from "../../../../../../../utils/emailAddress";

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

  const existingAddresses = [session.user.email]
    .concat(subscriber.email_addresses.map((emailRow) => emailRow.email))
    .map((address) => address.toLowerCase());
  if (existingAddresses.length >= CONST_MAX_NUM_ADDRESSES) {
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
