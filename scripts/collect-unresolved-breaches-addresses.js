"use strict";

const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");
const getSha1 = require("../sha1-utils");

async function checkIfBreachesExist(email, breaches) {
  const breachResults = await HIBP.getBreachesForEmail(email, breaches, true);

  if (breachResults.length > 1) {
    return true;
  }

  return false;
}

(async () => {
  const allHibpBreaches = await HIBP.req("/breaches");

  // "SELECT primary_email, primary_sha1 FROM subscribers WHERE signup_language LIKE 'en%' AND breaches_resolved IS NULL ORDER BY random();"
  const query = knex("subscribers").where("signup_language", "like", "en%").andWhere({breaches_resolved: null}).orderByRaw("RANDOM()").select("primary_email", "primary_sha1");

  const cohort = [];

  query.then( async (resp, index) => {
    console.log(resp, index);
    if (cohort.length > 10000) {
      // Print Cohort
      console.log(cohort);
      return;
    }

    resp.forEach(item => {
      const sha1 = item.primary_sha1;
      const isValidCohortMember = checkIfBreachesExist(sha1, allHibpBreaches);
      if (isValidCohortMember) { cohort.push(item.primary_email); }
    });
  });
})();
