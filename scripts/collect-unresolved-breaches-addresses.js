"use strict";

// TODO: Confirm db row has index

const Knex = require("knex");
const knexConfig = require("../db/knexfile");
const knex = Knex(knexConfig);

const HIBP = require("../hibp");

async function checkIfBreachesExist(sha1, breaches) {
  const breachResults = await HIBP.getBreachesForEmail(sha1, breaches, true);

  if (breachResults.length > 1) {
    return true;
  }

  return false;
}

function getArgsValue(argument) {
  const cliArguments = process.argv;

  if (cliArguments.indexOf(argument) < 0) {
    throw new Error(`You are missing the argument: ${argument}`);
  }

  const arguemntIndex = cliArguments.indexOf(argument);
  const value = cliArguments[(arguemntIndex + 1)];

  if (!value ) {
    throw new Error(`No value set for ${argument}.`);
  }

  const valueNumber = parseInt(value);

  if (Number.isNaN(valueNumber)) {
    throw new Error(`The value for ${argument} is not an interger.`);
  }

  return valueNumber;

}

(async () => {
  console.log("Script starting");

  const allHibpBreachesResp = await HIBP.req("/breaches");
  const allHibpBreaches = allHibpBreachesResp.body;

  const limitQuery = getArgsValue("--limit");
  const cohortSize = getArgsValue("--cohort-size");

  console.log(`The limit of this query is ${limitQuery}`);
  console.log(`The target cohort size of this query is ${cohortSize}`);

  // "SELECT primary_email, primary_sha1 FROM subscribers WHERE signup_language LIKE 'en%' AND breaches_resolved IS NULL ORDER BY random();"

  const results = await knex("subscribers").where("signup_language", "like", "en%").andWhere({breaches_resolved: null}).orderByRaw("RANDOM()").limit(limitQuery).select("primary_email", "primary_sha1");

  const cohort = [];

  for (const record of results) {
    if (cohort.length > cohortSize) {
      // Cohort size reached
      break;
    }

    const sha1 = record.primary_sha1;
    const isValidCohortMember = await checkIfBreachesExist(sha1, allHibpBreaches);
    if (isValidCohortMember) { cohort.push(record.primary_email); }
  }

  console.log("Script completed! See final output:");
  console.log(cohort.toString());

  process.exit();

})();
