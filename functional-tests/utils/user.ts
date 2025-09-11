/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FullProject, Page, request } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const fetchRestmailVerificationCode = async (
  emailAddress: string,
  page: Page,
  attemptsRemaining = 5,
): Promise<string> => {
  try {
    const context = await request.newContext();
    const restmailUrl = `https://restmail.net/mail/${emailAddress}`;
    const res = await context.get(restmailUrl, {
      failOnStatusCode: false,
    });
    const resJson = await res.json();

    if (!Array.isArray(resJson) || resJson.length === 0) {
      throw new Error("Inbox is empty");
    }

    const verificationCodeEmail = resJson.find(
      (email) => email?.headers?.["x-template-name"] === "verifyShortCode",
    );
    const verificationCode =
      verificationCodeEmail?.headers?.["x-verify-short-code"];
    if (!verificationCode) {
      throw new Error("No email with verification code found");
    }

    return verificationCode;
  } catch (error) {
    console.error("Error fetching verification code from restmail", error);

    const retryTimeout = (5 - attemptsRemaining) * 1500;
    console.info(
      `Attempts remaining: [${attemptsRemaining}]; trying again in ${retryTimeout}ms`,
    );
    if (attemptsRemaining === 0) {
      throw new Error(`Failed to fetch verification code for ${emailAddress}`);
    }

    await page.waitForTimeout(retryTimeout);
    return fetchRestmailVerificationCode(
      emailAddress,
      page,
      attemptsRemaining - 1,
    );
  }
};

export function getTestUserEmails(): Record<string, string> {
  const emailsStoragePath = path.resolve(
    __dirname,
    "../functional-test-cache/user-emails.json",
  );

  if (!fs.existsSync(emailsStoragePath)) {
    throw new Error("User emails storage not found");
  }

  const emails = JSON.parse(fs.readFileSync(emailsStoragePath, "utf-8"));
  if (!emails) {
    throw new Error("No emails found");
  }

  return emails;
}

export function getTestUserEmailByCountryCode(project: FullProject): string {
  const emails = getTestUserEmails();
  const email = emails[project.name];
  if (!email) {
    throw new Error(`No email found for [${project.name}]`);
  }

  return email;
}

export function getTestUserSessionFilePath(projectName: string) {
  const storagePath = path.resolve(
    __dirname,
    `../functional-test-cache/user-session-${projectName.toLowerCase().replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "")}.json`,
  );

  return storagePath;
}
