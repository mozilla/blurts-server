"use strict";


const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");


async function subscribeLowercaseHashToHIBP(emailAddress) {
  const emailHash = getSha1(emailAddress);
  await HIBP.subscribeHash(emailHash);
  return emailHash;
}


(async () => {
  const subRecordsWithUpperChars = await knex.select("id", "primary_email").from("subscribers")
    .whereRaw("primary_email != lower(primary_email)");
  const subsWithUpperCount = subRecordsWithUpperChars.length;
  console.log(`found ${subsWithUpperCount} subscribers records with primary_email != lower(primary_email). fixing ...`);
  for (const subRecord of subRecordsWithUpperChars) {
    const emailHash = await subscribeLowercaseHashToHIBP(subRecord.primary_email);
    await knex("subscribers")
      .update({
        primary_sha1: emailHash.toLowerCase(),
      })
      .where("id", subRecord.id);
    console.log(`fixed subscribers record ID: ${subRecord.id}`);
  }

  const emailRecordsWithUpperChars = await knex.select("id", "email").from("email_addresses")
    .whereRaw("email != lower(email)");
  const emailsWithUpperCount = emailRecordsWithUpperChars.length;
  console.log(`found ${emailsWithUpperCount} email_addresses records with email != lower(email)`);
  for (const emailRecord of emailRecordsWithUpperChars) {
    const emailHash = await subscribeLowercaseHashToHIBP(emailRecord.email);
    await knex("email_addresses")
      .update({
        sha1: emailHash.toLowerCase(),
      })
      .where("id", emailRecord.id);
    console.log(`fixed email_addresses record ID: ${emailRecord.id}`);
  }
  console.log("done.");
  process.exit();
})();
