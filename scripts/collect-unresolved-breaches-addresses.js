"use strict";

console.log("test");

const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");

async function checkIfBreachesExist(sha1, breaches) {
  const breachResults = await HIBP.getBreachesForEmail(sha1, breaches, true);
  console.log("checkIfBreachesExist", breachResults);

  if (breachResults.length > 1) {
    return true;
  }

  return false;
}

(async () => {
  console.log("init");

  const allHibpBreachesResp = await HIBP.req("/breaches");
  const allHibpBreaches = allHibpBreachesResp.body;

  // "SELECT primary_email, primary_sha1 FROM subscribers WHERE signup_language LIKE 'en%' AND breaches_resolved IS NULL ORDER BY random();"

  // TODO: Make limit number a command line arguemnt

  const results = await knex("subscribers").where("signup_language", "like", "en%").andWhere({breaches_resolved: null}).orderByRaw("RANDOM()").limit(100).select("primary_email", "primary_sha1");

  const cohort = [];


  for (const record of results) {
    // console.log(record);
    // TODO: Make target number a command line arguemnt

    if (cohort.length > 10) {
      // Print Cohort
      console.log(cohort);
      break;
    }

    const sha1 = record.primary_sha1;
    const isValidCohortMember = await checkIfBreachesExist(sha1, allHibpBreaches);
    if (isValidCohortMember) { cohort.push(record.primary_email); }
  }

  console.log(cohort);

})();
