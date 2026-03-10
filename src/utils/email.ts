/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createTransport, Transporter, SendMailOptions } from "nodemailer";
import crypto from "crypto";

import { SentMessageInfo } from "nodemailer/lib/smtp-transport/index.js";
import { config } from "../config";
import { logger } from "../app/functions/server/logging";
import { captureException } from "@sentry/node";

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter: Transporter<SentMessageInfo>;

export async function initEmail(smtpUrl = config.smtpUrl) {
  // Allow a debug mode that will log JSON instead of sending emails.
  if (!smtpUrl) {
    logger.info("smtpUrl-empty", {
      message: "EmailUtils will log a JSON response instead of sending emails.",
    });
    gTransporter = createTransport({ jsonTransport: true });
    return true;
  }

  gTransporter = createTransport(smtpUrl);
  const gTransporterVerification = await gTransporter.verify();
  return gTransporterVerification;
}

/** See https://nodemailer.com/smtp/pooled/ */
export function closeEmailPool() {
  if (!gTransporter) {
    throw new Error("`closeEmailPool` called before `initEmail`");
    /* c8 ignore next 5 */
  }
  // Not covered by tests because it involves a lot of mocks to basically check
  // that we called this function. See test-coverage.md#mock-heavy
  gTransporter.close();
}

export type SendEmailOptions = {
  plaintext?: string;
  /**
   * When provided, adds RFC 2369 / RFC 8058 headers so that supporting
   * email clients can show a one-click unsubscribe button.
   * https://datatracker.ietf.org/doc/html/rfc8058
   */
  oneClickUnsubscribe?: {
    /** HTTPS URL that accepts a POST with body `List-Unsubscribe=One-Click` */
    url: string;
  };
};

/**
 * Send Email
 *
 * @param recipient
 * @param subject
 * @param html
 * @param options
 */
export async function sendEmail(
  recipient: string,
  subject: string,
  html: string,
  options?: SendEmailOptions,
): Promise<SentMessageInfo> {
  if (!gTransporter) {
    throw new Error("SMTP transport not initialized");
  }

  const resolvedOptions: SendEmailOptions = options ?? {};

  const extraHeaders: Record<string, string> = {};
  // Headers for RFC 8058 one-click unsubscribe
  // https://datatracker.ietf.org/doc/html/rfc8058
  if (resolvedOptions.oneClickUnsubscribe) {
    const { url } = resolvedOptions.oneClickUnsubscribe;
    extraHeaders["List-Unsubscribe"] = `<${url}>`;
    extraHeaders["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }

  const mailOptions: SendMailOptions = {
    from: config.emailFrom,
    to: recipient,
    subject,
    html,
    text: resolvedOptions.plaintext,
    headers: {
      "x-ses-configuration-set": config.sesConfigSet,
      ...extraHeaders,
    },
  };

  try {
    const info = await gTransporter.sendMail(mailOptions);

    /* c8 ignore next 5 */
    if (gTransporter.transporter.name === "JSONTransport") {
      // @ts-ignore Added typing later, but it disagrees with actual use:
      logger.info("JSONTransport", { message: info.message.toString() });
      return info;
    }

    logger.info("sent_email", {
      messageId: info.messageId,
      response: info.response,
    });
    return info;
  } catch (e) {
    if (e instanceof Error) {
      logger.error("error_sending_email", {
        error: {
          message: e.message,
          stack: e.stack,
        },
      });
      captureException(e);
      /* c8 ignore next 3 */
    } else {
      logger.error("error_sending_email", { error: JSON.stringify(e) });
      captureException(e);
    }
    throw e;
  }
}

export function randomToken(length: number = 64) {
  return crypto.randomBytes(length).toString("hex");
}
