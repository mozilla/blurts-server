"use strict";


const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");


async function subscribeLowercaseHashToHIBP(emailAddress) {
  const lowerCasedEmail = emailAddress.toLowerCase();
  const lowerCasedSha1 = getSha1(lowerCasedEmail);
  await HIBP.subscribeHash(lowerCasedSha1);
  return lowerCasedSha1;
}


(async () => {
  const subRecordsWithUpperChars = await knex("subscribers")
    .whereRaw("primary_email != lower(primary_email)");
  for (const subRecord of subRecordsWithUpperChars) {
    const lowerCasedSha1 = await subscribeLowercaseHashToHIBP(subRecord.primary_email);
    await knex("subscribers")
      .update({
        primary_sha1: lowerCasedSha1,
      })
      .where("id", subRecord.id);
  }

  const emailRecordsWithUpperChars = await knex("email_addresses")
    .whereRaw("email != lower(email)");
  for (const emailRecord of emailRecordsWithUpperChars) {
    const lowerCasedSha1 = await subscribeLowercaseHashToHIBP(emailRecord.email);
    await knex("email_addresses")
      .update({
        sha1: lowerCasedSha1,
      })
      .where("id", emailRecord.id);
  }
})();
