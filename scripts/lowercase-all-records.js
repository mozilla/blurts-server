"use strict";


const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");


async function subscribeLowercaseHashToHIBP(emailAddress) {
  const lowerCasedSha1 = getSha1.getSha1ForHIBP(emailAddress);
  await HIBP.subscribeHash(lowerCasedSha1);
  return lowerCasedSha1;
}


(async () => {
  const subRecordsWithUpperChars = await knex.select("id", "primary_email").from("subscribers")
    .whereRaw("primary_email != lower(primary_email)");
  const subsWithUpperCount = subRecordsWithUpperChars.length;
  console.log(`found ${subsWithUpperCount} subscribers records with primary_email != lower(primary_email). fixing ...`);
  for (const subRecord of subRecordsWithUpperChars) {
    const lowerCasedSha1 = await subscribeLowercaseHashToHIBP(subRecord.primary_email);
    await knex("subscribers")
      .update({
        primary_sha1: lowerCasedSha1,
      })
      .where("id", subRecord.id);
    console.log(`fixed subscribers record ID: ${subRecord.id}`);
  }

  const emailRecordsWithUpperChars = await knex.select("id", "email").from("email_addresses")
    .whereRaw("email != lower(email)");
  const emailsWithUpperCount = emailRecordsWithUpperChars.length;
  console.log(`found ${emailsWithUpperCount} email_addresses records with email != lower(email)`);
  for (const emailRecord of emailRecordsWithUpperChars) {
    const lowerCasedSha1 = await subscribeLowercaseHashToHIBP(emailRecord.email);
    await knex("email_addresses")
      .update({
        sha1: lowerCasedSha1,
      })
      .where("id", emailRecord.id);
    console.log(`fixed email_addresses record ID: ${emailRecord.id}`);
  }
  console.log("done.");
  process.exit();
})();
