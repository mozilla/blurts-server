"use strict";

const AppConstants = require("./app-constants");
const pg = require("pg");

const db = {
  async doQuery(aQueryStr) {
    const client = new pg.Client({
      database: AppConstants.DATABASE_NAME,
      host: AppConstants.DATABASE_HOST,
      port: AppConstants.DATABASE_PORT,
    });
    let result;
    try {
      await client.connect();
      result = await client.query(aQueryStr);
    } catch(e) {
      console.log(e);
    } finally {
      await client.end();
    }
    return result.rows;
  },
};

module.exports = db;
