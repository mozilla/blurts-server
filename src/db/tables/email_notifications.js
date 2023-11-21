/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";

const knex = createDbConnection();

 /**
  * @param {number} subscriberId
  */
 async function getAllEmailNotificationsForSubscriber(subscriberId){
  console.info("getAllEmailNotificationsForSubscriber: ", subscriberId);
  return await knex.transaction(trx => {
    return trx('email_notifications')
      .forUpdate()
      .select()
      .where("subscriber_id", subscriberId)
      .orderBy("id");
  })
}

/**
 * @param {number} subscriberId
 * @param {number} breachId
 * @param {string} email
 */
async function getEmailNotification(
  subscriberId,
  breachId,
  email
){
  console.info(
    `getEmailNotification for subscriber: ${subscriberId}, breach: ${breachId}`,
  );
  const res = await knex.transaction(trx => {
    return trx('email_notifications')
      .forUpdate()
      .select()
      .where("subscriber_id", subscriberId)
      .andWhere("breach_id", breachId)
      .andWhere("email", email);
  })

  if (res.length > 1) {
    console.error(
      "More than one entry for subscriber/breach email notification: ",
      res,
    );
  }

  return res?.[0] || null;
}

/**
 * @param {number} breachId
 */
async function getNotifiedSubscribersForBreach(
  breachId
){
  console.info(
    `getEmailNotificationSubscribersForBreach for breach: ${breachId}`,
  );

  const res = await knex.transaction(trx => {
    return trx('email_notifications')
      .forUpdate()
      .select("subscriber_id")
      .where("notified", true)
      .andWhere("breach_id", breachId);
  })

  return res.map((row) => row.subscriber_id);
}

/**
 * @param {{ subscriberId: number; breachId: number; notified: boolean; email: string; notificationType: string; }} newNotification
 */
async function addEmailNotification(
  newNotification
){
  console.info(`addEmailNotification: ${JSON.stringify(newNotification)}`);
  const emailNotificationDb = {
    subscriber_id: newNotification.subscriberId,
    breach_id: newNotification.breachId,
    appeared: true,
    notified: newNotification.notified || false,
    email: newNotification.email,
    notification_type: newNotification.notificationType,
  };
  
  const res = await knex.transaction(trx => {
      return trx('email_notifications')
        .forUpdate()
        .insert(emailNotificationDb)
        .returning("*");
      });
  return res[0];
}

/**
 * @param {number} subscriberId
 * @param {number} breachId
 * @param {string} email
 */
async function markEmailAsNotified(
  subscriberId,
  breachId,
  email
) {
  console.info(`markEmailAsNotified for breach: ${breachId}`);
  await knex.transaction(trx => {
    return trx('email_notifications')
      .forUpdate()
      .where("subscriber_id", subscriberId)
      .andWhere("breach_id", breachId)
      .andWhere("email", email)
      .update({
        notified: true,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      });
    });
}

export {
  getAllEmailNotificationsForSubscriber,
  getEmailNotification,
  getNotifiedSubscribersForBreach,
  addEmailNotification,
  markEmailAsNotified
}