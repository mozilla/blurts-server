"use strict";

require("dotenv").load();

const pg = require("pg");

function assertTestingEnvironment() {
  // eslint-disable-next-line no-process-env
  if (!process.env.TESTING_ENVIRONMENT) {
    throw new Error("Attempting to run database setup without TESTING_ENVIRONMENT set, exiting.");
  }
}

const DBUtils = {
  async setupUsersTable() {
    assertTestingEnvironment();

    // Use PG* env vars to configure client.
    const client = new pg.Client();
    try {
      await client.connect();
      await client.query("DROP TABLE IF EXISTS users;");
      await client.query("CREATE TABLE users ( email VARCHAR(320) UNIQUE );");
    } finally {
      await client.end();
    }
  },

  async setupTempUsersTable() {
    assertTestingEnvironment();

    // Use PG* env vars to configure client.
    const client = new pg.Client();
    try {
      await client.connect();
      await client.query("DROP TABLE IF EXISTS users_temp;");
      await client.query("CREATE TABLE users_temp ( \
                            email VARCHAR(320) UNIQUE, \
                            token VARCHAR(80), \
                            time_added TIMESTAMP DEFAULT NOW() \
                          );");

    } finally {
      await client.end();
    }
  },
};

module.exports = DBUtils;
