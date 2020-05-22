"use strict";

const _knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = _knex(knexConfig);

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

async function subscribeLowercaseHashToHIBP(emailAddress) {
    const lowerCasedEmail = emailAddress.toLowerCase();
    const lowerCasedSha1 = getSha1(lowerCasedEmail);
    await HIBP.subscribeHash(lowerCasedSha1);
    return lowerCasedSha1;
}

(async () => {
    const chunkSize = process.argv[2];
    console.log(`subscribing lower-cased hashes in ${chunkSize}-sized chunks`);

    const subRecordsThatNeedFixing = await knex("subscribers").count().whereRaw("primary_email != lower(primary_email)");
    const subsWithUpperCount = subRecordsThatNeedFixing[0].count;
    console.log(`found ${subsWithUpperCount} subscribers records with primary_email != lower(primary_email). fixing ...`);

    let subRecordsFixed = 0;
    let subPrevMaxId = 0;
    while (subRecordsFixed < subsWithUpperCount) {
        console.log(`working on chunk where id > ${subPrevMaxId} ...`);
        const subRecordsWithUpperCharsChunk = await knex.select("id", "primary_email").from("subscribers")
            .where("id", ">", subPrevMaxId)
            .whereRaw("primary_email != lower(primary_email)")
            .orderBy("id", "asc")
            .limit(chunkSize);
        for (const subRecord of subRecordsWithUpperCharsChunk) {
            await subscribeLowercaseHashToHIBP(subRecord.primary_email);
            subPrevMaxId = subRecord.id;
            subRecordsFixed++;
            console.log(`subscribed lower-case address hash for subscribers record ID: ${subRecord.id}`);
        }
    }

    const emailRecordsThatNeedFixing = await knex("email_addresses").count().whereRaw("email != lower(email)");
    const emailWithUpperCount = emailRecordsThatNeedFixing[0].count;
    console.log(`found ${emailWithUpperCount} email_address records with email != lower(email). fixing ...`);

    let emailRecordsFixed = 0;
    let emailPrevMaxId = 0;
    while (emailRecordsFixed < emailWithUpperCount) {
        console.log(`working on chunk where id > ${emailPrevMaxId} ...`);
        const emailRecordsWithUpperChars = await knex.select("id", "email").from("email_addresses")
            .where("id", ">", emailPrevMaxId)
            .whereRaw("email != lower(email)")
            .orderBy("id", "asc")
            .limit(chunkSize);
        for (const emailRecord of emailRecordsWithUpperChars) {
            await subscribeLowercaseHashToHIBP(emailRecord.email);
            emailPrevMaxId = emailRecord.id;
            emailRecordsFixed++;
            console.log(`fixed email_addresses record ID: ${emailRecord.id}`);
        }
    }
    console.log("done.");
    process.exit();
})();
