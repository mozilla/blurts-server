import createDbConnection from "../db/connect.js";
const knex = createDbConnection();

import { subscribeHash } from "../utils/hibp";
import { getSha1 } from "../utils/fxa";

/**
 * MNTOR-2469: One-off script to lowercase email addresses of subscribers and emails before hashing
 */
async function subscribeLowerCaseHashToHIBP(emailAddress) {
  const lowerCasedEmail = emailAddress.toLowerCase();
  const lowerCasedSha1 = getSha1(lowerCasedEmail);
  await subscribeHash(lowerCasedSha1);
  return lowerCasedSha1;
}

(async () => {
  const chunkSize = 1000;
  console.log(
    `Fixing lower-cased emails / sub to hashes in ${chunkSize}-sized chunks`,
  );

  console.log(`/** Subscribers Table **/`);
  const subRecordsThatNeedFixing = await knex("subscribers")
    .count()
    .whereRaw("primary_email != lower(primary_email)");
  const subsWithUpperCount = subRecordsThatNeedFixing[0].count;
  console.log(
    `found ${subsWithUpperCount} subscribers records with primary_email != lower(primary_email)`,
  );

  let subRecordsFixed = 0;
  let subPrevMaxId = 0;
  while (subRecordsFixed < subsWithUpperCount) {
    console.log(
      `working on ${chunkSize}-sized chunk where id > ${subPrevMaxId} ...`,
    );
    const subRecordsWithUpperCharsChunk = await knex
      .select("id", "primary_email")
      .from("subscribers")
      .where("id", ">", subPrevMaxId)
      .whereRaw("primary_email != lower(primary_email)")
      .orderBy("id", "asc")
      .limit(chunkSize);
    for (const subRecord of subRecordsWithUpperCharsChunk) {
      console.log(`Fixing record: ${subRecord.id}`);
      const trx = await knex.transaction();
      try {
        // update sha1 and sub to HIBP with the new sha1
        const lowerCasedSha1 = await subscribeLowerCaseHashToHIBP(
          subRecord.primary_email,
        );
        await knex("subscribers")
          .update({
            primary_sha1: lowerCasedSha1,
          })
          .where("id", subRecord.id)
          .transacting(trx);

        // update primary email to lowercase
        await knex("subscribers")
          .update({
            primary_email: subRecord.primary_email.toLowerCase(),
          })
          .where("id", subRecord.id)
          .transacting(trx);
        await trx.commit();
        console.log(`fixed subscribers record ID: ${subRecord.id}`);
      } catch (e) {
        await trx.rollback();
        console.error(`Error fixing record: ${subRecord.id}`, e);
      }

      subPrevMaxId = subRecord.id;
      subRecordsFixed++;
      console.log(
        `subscribed lower-case address hash for subscribers record ID: ${subRecord.id}`,
      );
    }
  }

  /**
   * Fixing Emails
   */
  console.log(`/** Emails Table **/`);

  const emailRecordsThatNeedFixing = await knex("email_addresses")
    .count()
    .whereRaw("email != lower(email)");
  const emailWithUpperCount = emailRecordsThatNeedFixing[0].count;
  console.log(
    `found ${emailWithUpperCount} email_address records with email != lower(email). fixing ...`,
  );

  let emailRecordsFixed = 0;
  let emailPrevMaxId = 0;
  while (emailRecordsFixed < emailWithUpperCount) {
    console.log(`working on chunk where id > ${emailPrevMaxId} ...`);
    const emailRecordsWithUpperChars = await knex
      .select("id", "email")
      .from("email_addresses")
      .where("id", ">", emailPrevMaxId)
      .whereRaw("email != lower(email)")
      .orderBy("id", "asc")
      .limit(chunkSize);
    for (const emailRecord of emailRecordsWithUpperChars) {
      console.log(`Fixing record: ${emailRecord.id}`);
      const trx = await knex.transaction();
      try {
        // update sha1 and sub to HIBP with the new sha1
        const lowerCasedSha1 = await subscribeLowerCaseHashToHIBP(
          emailRecord.email,
        );
        await knex("email_addresses")
          .update({
            sha1: lowerCasedSha1,
          })
          .where("id", emailRecord.id)
          .transacting(trx);

        // update primary email to lowercase
        await knex("email_addresses")
          .update({
            email: emailRecord.email.toLowerCase(),
          })
          .where("id", emailRecord.id)
          .transacting(trx);
        await trx.commit();
        console.log(`fixed email_addresses record ID: ${emailRecord.id}`);
      } catch (e) {
        await trx.rollback();
        console.error(
          `Error fixing email_addresses record: ${emailRecord.id}`,
          e,
        );
      }

      emailPrevMaxId = emailRecord.id;
      emailRecordsFixed++;
    }
  }

  console.log("done.");
  process.exit();
})();
