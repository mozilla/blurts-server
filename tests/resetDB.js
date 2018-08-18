"use strict";

const Knex = require("knex");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const knexConfig = require("../db/knexfile");
const {seed} = require("../db/seeds/test_subscribers");


// (Re-)create DB connection at the beginning of each test suite
beforeAll(async () => {
  DB.createConnection();
});


beforeEach(async () => {
  const knex = Knex(knexConfig[AppConstants.NODE_ENV]);
  await knex("subscribers").truncate();
  await seed(knex);
  knex.destroy();
});


// Destroy DB connection at the end of each test suite
// Without this, some test failures leave the handle open
// causing the test runner to hang.
afterAll(() => {
  DB.destroyConnection();
});
