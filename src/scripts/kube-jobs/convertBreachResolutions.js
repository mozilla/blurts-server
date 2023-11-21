/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Executes once
 * The purpose of the script is to convert all `subscriber.breaches_resolved` to `subscriber.breaches_resolution`
 * with the goal of deprecating the column
 */

import createDbConnection from "../../db/connect.js";
import { getAllBreachesFromDb } from "../../utils/hibp.js";
import { getAllEmailsAndBreaches } from "../../utils/breaches.js";
import { BreachDataTypes } from "../../utils/breach-resolution.js";

const knex = createDbConnection();

const LIMIT = 1000; // with millions of records, we have to load a few at a time
let subscribersArr = [];

/**
 * Batch update
 *
 * @param {*} updateCollection
 */
const batchUpdate = async (updateCollection) => {
  const trx = await knex.transaction();
  try {
    await Promise.all(
      updateCollection.map((tuple) => {
        const { user, updatedBreachesResolution } = tuple;
        return knex("subscribers")
          .where("id", user.id)
          .update({
            breach_resolution: updatedBreachesResolution,
          })
          .transacting(trx);
      }),
    );
    await trx.commit();
  } catch (error) {
    await trx.rollback();
    console.error("batch update failed!!");
    console.log({ updateCollection });
    console.error(error);
  }
};

const selectAndLockResolutions = async () => {
  const trx = await knex.transaction();
  let subscribersArr = [];
  try {
    subscribersArr = await knex
      .select("id", "primary_email", "breaches_resolved", "breach_resolution")
      .from("subscribers")
      .whereNotNull("breaches_resolved")
      .whereNull("db_migration_1")
      .limit(LIMIT)
      .orderBy("updated_at", "desc")
      .transacting(trx)
      .forUpdate();

    // update the lock
    await Promise.all(
      subscribersArr.map((sub) => {
        const { id } = sub;
        return knex("subscribers")
          .where("id", id)
          .update({
            db_migration_1: true,
          })
          .transacting(trx);
      }),
    );

    await trx.commit();
  } catch (error) {
    await trx.rollback();
    console.log("select & mark rows failed!! first row:");
    console.log({ first: subscribersArr[0] });
    console.error(error);
  }

  return subscribersArr;
};

const startTime = Date.now();
console.log(`Start time is: ${startTime}`);

// load all breaches for ref
const allBreaches = await getAllBreachesFromDb();
if (allBreaches && allBreaches.length > 0)
  console.log("breaches loaded successfully! ", allBreaches.length);

// find all subscribers who resolved any breaches in the past, convert those
// records into the new v2 format
let failedToSelect = true;
while (failedToSelect) {
  try {
    subscribersArr = await selectAndLockResolutions();
    failedToSelect = false;
  } catch (e) {
    failedToSelect = true;
    console.error(e);
  }
}

console.log(`Loaded # of subscribers: ${subscribersArr.length}`);
const updateCollection = [];

for (const subscriber of subscribersArr) {
  let { breaches_resolved: v1, breach_resolution: v2 } = subscriber;
  let isV2Changed = false; // use a boolean to track if v2 has been changed, only upsert if so

  // fetch subscriber all breaches / email
  let subscriberBreachesEmail;
  try {
    subscriberBreachesEmail = await getAllEmailsAndBreaches(
      subscriber,
      allBreaches,
    );
  } catch (e) {
    console.error("Cannot fetch subscriber breaches at the moment: ", e);
    continue;
  }
  // console.debug(JSON.stringify(subscriberBreachesEmail.verifiedEmails))

  for (const [email, resolvedRecencyIndices] of Object.entries(v1)) {
    // console.debug({ email })
    // console.debug({ resolvedRecencyIndices })
    for (const recencyIndex of resolvedRecencyIndices) {
      // console.debug({ recencyIndex })
      // find subscriber's relevant recency index breach information
      const ve =
        subscriberBreachesEmail.verifiedEmails?.filter(
          (e) => e.email === email,
        )[0] || {};
      // console.debug({ ve })
      const subBreach =
        ve.breaches?.filter(
          (b) => Number(b.recencyIndex) === Number(recencyIndex),
        )[0] || null;
      // console.debug({ subBreach })

      if (!subBreach || !subBreach.DataClasses) {
        console.warn(
          `SKIP: Cannot find subscribers breach and data types - recency: ${recencyIndex} email: ${email}`,
        );
        continue;
      }

      // if email does not exist in v2, we need to add it to the object
      // format: {email: { recencyIndex: { isResolved: true, resolutionsChecked: [DataTypes]}}}
      if (!v2) v2 = {};
      if (!v2[email]) {
        v2[email] = {
          [recencyIndex]: {
            isResolved: true,
            resolutionsChecked: subBreach?.DataClasses || [
              BreachDataTypes.General,
            ],
          },
        };

        isV2Changed = true;
      }
      if (v2[email][recencyIndex]?.isResolved) {
        console.log(
          `recencyIndex ${recencyIndex} exists in v2 and is resolved, no changes`,
        );
      } else {
        console.log(
          `recencyIndex ${recencyIndex} either does not exist or is not resolved, overwriting`,
        );
        v2[email][recencyIndex] = {
          isResolved: true,
          resolutionsChecked: subBreach?.DataClasses,
        };
        isV2Changed = true;
      }
    }
  }

  // check if v2 is changed, if so, upsert the new v2
  if (isV2Changed) {
    console.log("upsert for subscriber: ", subscriber.primary_email);
    updateCollection.push({ user: subscriber, updatedBreachesResolution: v2 });
  }
}
await batchUpdate(updateCollection);

// breaking out of do..while loop
console.log("Script finished");
const endTime = Date.now();
console.log(`End time is: ${endTime}`);
console.log("Diff is: ", endTime - startTime);
process.exit();
