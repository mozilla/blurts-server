"use strict";

const pg = require("pg");

const AppConstants = require("./app-constants");

const client = new pg.Client({
  database: AppConstants.DATABASE_NAME,
  host: AppConstants.DATABASE_HOST,
  port: AppConstants.DATABASE_PORT,
});

const DBUtils = {
  async setupDatabase() {
    try {
      await client.connect();
      await client.query("DROP TABLE users;");
      await client.query("CREATE TABLE users ( email varchar(320) UNIQUE );");
    } finally {
      await client.end();
    }
  },
};

module.exports = DBUtils;
