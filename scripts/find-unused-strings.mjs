#!/usr/bin/env zx
import "zx/globals";
import { FluentBundle, FluentResource } from "@fluent/bundle";

$.verbose = false;

const localeFilenames = await fs.readdir("locales/en/");
const localeFileData = await Promise.all(
  localeFilenames.map(async (filename) => {
    const contents = await fs.readFile(`locales/en/${filename}`, "utf-8");
    const resource = new FluentResource(contents);
    const bundle = new FluentBundle("en");
    bundle.addResource(resource);
    return [filename, contents, Array.from(bundle._messages.keys())];
  }),
);

async function isUnusedWithDoubleQuotes(/** @type {string} **/ messageId) {
  try {
    const _doubleQuotedUsages =
      await $` git --no-pager grep "${messageId}" -- './*' ':(exclude)locales/*'`;
  } catch (p) {
    return true;
  }
  return false;
}
async function isUnusedWithSingleQuotes(/** @type {string} **/ messageId) {
  try {
    const _singleQuotedUsages =
      await $` git --no-pager grep '${messageId}' -- './*' ':(exclude)locales/*'`;
  } catch (p) {
    return true;
  }
  return false;
}
async function isUnusedWithBackticks(/** @type {string} **/ messageId) {
  try {
    await $` git --no-pager grep \\\`${messageId}\\\` -- './*' ':(exclude)locales/*'`;
  } catch (p) {
    return true;
  }
  return false;
}
async function isUnused(/** @type {string} **/ messageId) {
  return (
    (await isUnusedWithDoubleQuotes(messageId)) &&
    (await isUnusedWithSingleQuotes(messageId)) &&
    (await isUnusedWithBackticks(messageId))
  );
}

const updatedLocaleFiles = await Promise.all(
  localeFileData.map(async ([filename, contents, messageIds]) => {
    const unusedMessageIds = (
      await Promise.all(
        messageIds.map(async (messageId) => [
          messageId,
          await isUnused(messageId),
        ]),
      )
    )
      .filter(([_messageId, isUnused]) => isUnused)
      .map(([messageId]) => messageId);
    const contentsWithDeprecationWarnings = unusedMessageIds.reduce(
      (contents, unusedMessageId) => {
        return contents.replace(
          `\n${unusedMessageId} = `,
          `\n# Unused\n${unusedMessageId} = `,
        );
      },
      contents,
    );
    return [filename, contentsWithDeprecationWarnings];
  }),
);

updatedLocaleFiles.forEach(([filename, newContents]) => {
  fs.writeFile(`locales/en/${filename}`, newContents);
});
