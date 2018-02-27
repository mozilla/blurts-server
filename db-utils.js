"use strict";

const pg = require("pg");

// Use PG* env vars to configure client.
const client = new pg.Client();

const DBUtils = {
  async setupDatabase() {
    try {
      await client.connect();
      await client.query("DROP TABLE IF EXISTS users;");
      await client.query("CREATE TABLE users ( email varchar(320) UNIQUE );");
    } finally {
      await client.end();
    }
  },
};

module.exports = DBUtils;
