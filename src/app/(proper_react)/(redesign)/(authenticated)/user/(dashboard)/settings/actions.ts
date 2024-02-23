/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { revalidatePath } from "next/cache";
import { SubscriberRow } from "knex/types/tables";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import {
  EmailRow,
  addSubscriberUnverifiedEmailHash,
  removeOneSecondaryEmail,
} from "../../../../../../../db/tables/emailAddresses";
import {
  deleteResolutionsWithEmail,
  getSubscriberByFxaUid,
} from "../../../../../../../db/tables/subscribers";
import { validateEmailAddress } from "../../../../../../../utils/emailAddress";
import { initEmail } from "../../../../../../../utils/email";
import { sendVerificationEmail } from "../../../../../../api/utils/email";
import { getL10n } from "../../../../../../functions/server/l10n";
import { logger } from "../../../../../../functions/server/logging";
import { CONST_MAX_NUM_ADDRESSES } from "../../../../../../../constants";

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
  const l10n = getL10n();
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
    await sendVerificationEmail(
      // This first parameter is unused, so the type assertion is safe.
      // When non-TS invocations of this function are removed, we should remove
      // the unused parameter:
      session.user.subscriber as unknown as Parameters<
        typeof sendVerificationEmail
      >[0],
      unverifiedSubscriber.id,
      getL10n(),
    );
    revalidatePath("/user/settings/");

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

export async function onRemoveEmail(email: EmailRow) {
  const l10n = getL10n();
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
    revalidatePath("/user/settings/");
  } catch (e) {
    return {
      success: false,
      error: "delete-email-error",
      errorMessage: l10n.getString("user-delete-unknown-error"),
    };
  }
}
